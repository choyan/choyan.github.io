import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <script async src="https://analytics.umami.is/script.js" data-website-id="0acee280-61de-4f3f-a1fb-6a388a5bdfed"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}