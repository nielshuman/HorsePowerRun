import fs from "fs";
import path from "path";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const files = fs.readFileSync("/tmp/nl_files.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

function mapToEnglishPath(nlPath) {
  return nlPath.replace(/^nl\//, "en/");
}

function buildPrompt(content) {
  return `
Translate the following Dutch markdown file to English.

STRICT RULES:

FRONTMATTER:
- Keep valid YAML
- Keep all keys exactly the same EXCEPT:
  - Rename "nav_nl" → "nav_en"
- Translate ONLY the value of:
  - title
- DO NOT change:
  - weight
  - published
  - _template
  - structure or nesting

CONTENT:
- Translate all markdown content to English
- Preserve formatting, links, and structure

OUTPUT:
- Return ONLY the final markdown file

CONTENT:
${content}
`;
}

for (const nlPath of files) {
  const enPath = mapToEnglishPath(nlPath);

  const content = fs.readFileSync(nlPath, "utf-8");

  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "user", content: buildPrompt(content) }
    ],
  });

  const translated = res.choices[0].message.content.trim();

  fs.mkdirSync(path.dirname(enPath), { recursive: true });
  fs.writeFileSync(enPath, translated);

  console.log(`✔ ${nlPath} → ${enPath}`);
}   
