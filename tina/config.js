import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "devocional",
        label: "Devocionales",
        path: "content/devocionales",
        format: "md",
        fields: [
          {
            type: "string",
            name: "titulo",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "fecha",
            label: "Fecha",
            required: true,
          },
          {
            type: "string",
            name: "descripcion",
            label: "Descripción breve",
            required: true,
          },
          {
            type: "image",
            name: "imagen",
            label: "Imagen (opcional)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/devocional/${document._sys.filename}`,
        },
      },
    ],
  },
});