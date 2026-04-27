import fs from "fs";
import path from "path";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

async function main() {
  if (!fs.existsSync("nl_files.txt")) {
    console.log("No nl_files.txt found, exiting.");
    return;
  }

  const files = fs.readFileSync("nl_files.txt", "utf-8")
    .split("\n")
    .map(f => f.trim())
    .filter(Boolean);

  if (files.length === 0) {
    console.log("No files to translate.");
    return;
  }

  console.log(`Translating ${files.length} file(s)...`);

  for (const nlPath of files) {
    try {
      if (!fs.existsSync(nlPath)) {
        console.warn(`Skipping missing file: ${nlPath}`);
        continue;
      }

      const enPath = mapToEnglishPath(nlPath);
      const content = fs.readFileSync(nlPath, "utf-8");

      console.log(`→ Translating ${nlPath}`);

      const res = await client.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          { role: "user", content: buildPrompt(content) }
        ],
      });

      const translated = res.choices?.[0]?.message?.content?.trim();

      if (!translated) {
        console.warn(`Empty translation for ${nlPath}, skipping.`);
        continue;
      }

      // Skip if unchanged
      if (fs.existsSync(enPath)) {
        const existing = fs.readFileSync(enPath, "utf-8");
        if (existing === translated) {
          console.log(`⏭ No changes for ${enPath}`);
          continue;
        }
      }

      fs.mkdirSync(path.dirname(enPath), { recursive: true });
      fs.writeFileSync(enPath, translated);

      console.log(`✔ ${nlPath} → ${enPath}`);
    } catch (err) {
      console.error(`✖ Failed to translate ${nlPath}`);
      console.error(err);
      // continue processing other files
    }
  }

  console.log("Done.");
}

main();
