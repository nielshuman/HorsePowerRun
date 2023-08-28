import type { TinaField } from "tinacms";
export function homepagina_met_aftelklok__en_Fields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "boolean",
      name: "published",
      label: "Actief",
    },
    {
      type: "datetime",
      name: "countdown_date",
      label: "Afteldatum",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ] as TinaField[];
}
export function homepagina_met_aftelklok__nl_Fields() {
  return [
    {
      type: "boolean",
      name: "published",
      label: "Published / Actief",
    },
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "datetime",
      name: "countdown_date",
      label: "Afteldatum",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      description: "Niet aanzitten!",
    },
  ] as TinaField[];
}
export function pagina__en_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
      required: true,
    },
    {
      type: "boolean",
      name: "published",
      label: "Published / Actief",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ] as TinaField[];
}
export function pagina__nl_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
    {
      type: "boolean",
      name: "published",
      label: "Published / Actief",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ] as TinaField[];
  
}
