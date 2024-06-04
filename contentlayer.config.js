import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    bg: {
      type: "string",
      required: true,
    },
    audio: {
      type: "string",
      required: true,
    },
    episode: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    appleLink: {
      type: "string",
      required: true,
    },
    spotifyLink: {
      type: "string",
      required: true,
    },
    amazonLink: {
      type: "string",
      required: true,
    },
    guestName: {
      type: "string",
      required: false,
    },
    guestHandle: {
      type: "string",
      required: false,
    },
    guestImage: {
      type: "string",
      required: false,
    },
    embed: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
