import { TinaTemplate } from "@tinacms/cli";

export function pagina() {
  return {
    name: 'pagina',
    label: 'Pagina',
    fields: [
      {
        type: "string",
        name: "title",
        label: "Titel",
        required: true,
        isTitle: true,
      },
      {
        type: "boolean",
        name: "published",
        label: "Published / Actief",
      },
      {
        type: "rich-text",
        name: "body",
        label: "Content",
        description: "De inhoud van de pagina",
        isBody: true,
      },
    ]
  } as TinaTemplate;
}

export function homepagina() {
  return {
    name: 'homepagina',
    label: 'Homepagina (met aftelklok)',
    defaultItem: {
      layout: "title",
    },
    fields : [
      {
        type: "string",
        name: "title",
        label: "Titel",
        isTitle: true,
        required: true,
      },
      {
        type: "boolean",
        name: "published",
        label: "Published / Actief",
      },
      {
        type: "datetime",
        name: "countdown_date",
        label: "Afteldatum",
      },
      {
        type: "rich-text",
        name: "body",
        label: "Content",
        description: "De inhoud van de pagina",
        isBody: true,
      },
      {
        type: "string",
        name: "layout",
        label: "layout",
        description: "Niet aanzitten!",
      },
    ],
  } as TinaTemplate;
}