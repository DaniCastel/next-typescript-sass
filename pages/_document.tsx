import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className="h-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument