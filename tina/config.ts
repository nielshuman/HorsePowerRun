import { defineConfig } from "tinacms";
import { homepagina_met_aftelklok__en_Fields } from "./templates";
import { homepagina_met_aftelklok__nl_Fields } from "./templates";
import { pagina__en_Fields } from "./templates";
import { pagina__nl_Fields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7fa2e502-aa17-4a58-b486-ce45de67d899", // Get this from tina.io
  token: "7eedf56802d5344c299e338f02ca88c4a9f65024", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Duits",
        name: "duits",
        path: "de",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Engels",
        name: "engels",
        path: "en",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Nederlands",
        name: "nederlands",
        path: "nl",
        match: {
          include: "**/*",
        },
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
        templates: [
          {
            name: 'homepagina_met_aftelklok__nl',
            label: 'NL Homepagina met aftelklok',
            fields: homepagina_met_aftelklok__nl_Fields()
          },
          {
            name: 'pagina__nl',
            label: 'Pagina (NL)',
            fields: pagina__nl_Fields()
          },
        ]
      },
      {
        format: "yml",
        label: "Config",
        name: "config",
        path: "/",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
