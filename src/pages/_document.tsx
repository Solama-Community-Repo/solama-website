import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://terminal.jup.ag/main-v2.js" data-preload />
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div
		  id="coinmarketcap-currency-widget"
          className="hidden coinmarketcap-currency-widget"
          data-currencyid="29015"
          data-base="USD"
          data-secondary=""
          data-ticker="true"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>
      </body>
    </Html>
  );
}
