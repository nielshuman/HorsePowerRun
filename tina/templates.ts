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
  ] as TinaField[];
}
export function homepagina_met_aftelklok__nl_Fields() {
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
  ] as TinaField[];
}
export function pagina__nl_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titel",
    },
  ] as TinaField[];
}
