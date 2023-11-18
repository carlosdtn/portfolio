import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'reading-time';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  }
};

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true }
  }
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },
  computedFields
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    date: {
      type: 'date',
      required: true
    },
    image: {
      type: 'string',
      required: true
    },
    author: {
      type: 'nested',
      of: Author
    },
    lang: {
      type: 'string',
      required: true
    }
  },
  computedFields
}));

const rehypeoptions = {
  theme: {
    dark: 'one-dark-pro',
    light: 'github-light'
  },
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ['word'];
  }
};

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Post, Page],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]]
  }
});
