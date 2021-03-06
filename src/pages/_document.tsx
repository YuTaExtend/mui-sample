import NextDocument, { Head, Html, Main, NextScript } from "next/document";

interface Props {}
class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* <link>タグが必要であればこの部分に書く */}
          <link
            href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
