import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export default createGlobalStyle`
  .post-content {
    ${tw`leading-relaxed`}

    h2 {
      ${tw`text-4xl text-gray-900 mt-6 mb-4`}
    }

    h3 {
      ${tw`text-3xl text-gray-900 mt-6 mb-4`}
    }

    p {
      ${tw`text-lg text-gray-800 mb-3`}
    }

    img {
      ${tw`mb-3`};
    }

    ul {
      ${tw`list-disc text-lg text-gray-800`}
    }

    ol {
      ${tw`list-decimal`}
    }

    ul,
    ol {
      li {
        ${tw`ml-8`}

        &:last-child {
          ${tw`mb-4`}
        }
      }
    }

    figure {
      ${tw`my-12`}
    }

    pre {
      white-space: pre-wrap;       /* Since CSS 2.1 */
      white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
      white-space: -pre-wrap;      /* Opera 4-6 */
      white-space: -o-pre-wrap;    /* Opera 7 */
      word-wrap: break-word;       /* Internet Explorer 5.5+ */

      ${tw`mb-4`}

      code {
        display: block;
      }
  }
}
`;