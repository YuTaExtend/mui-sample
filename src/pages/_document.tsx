import NextDocument, { Head, Html, Main, NextScript } from "next/document";

interface Props {}
class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>{/* <link>タグが必要であればこの部分に書く */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
