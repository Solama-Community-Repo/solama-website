import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="SOLAMA, the rising star in the meme coin universe on the SOLANA blockchain. Much like Shiba Inu on Ethereum, SOLAMA brings a playful twist with its lama-themed charm. Embrace the whimsical world of SOLAMA, where crypto meets humor, and join the journey toward the next big meme coin sensation on SOLANA."
          key="desc"
        />
        <link rel="icon" href="/solama_logo.png" />
        <meta name="keywords" content="web3, meme, solana, blockchain, defi, crypto, cryptocurrency, memecoins" />
        <meta property="og:title" content="Solama the Official 'Unofficial' Solana Mascot" />
        <meta property="twitter:title" content="Solama the Official 'Unofficial' Solana Mascot" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOLAMA" />
        <meta property="og:url" content="https://www.solama.com/" />
        <meta property="og:image:alt" content="Visit Solama Website" />
        <meta property="og:image" content="https://www.solama.com/solama_logo.png" />
        <meta name="twitter:image" content=" https://www.solama.com/solama_logo.png" />
        <meta
          property="og:description"
          content="SOLAMA, the rising star in the meme coin universe on the SOLANA blockchain. Much like Shiba Inu on Ethereum, SOLAMA brings a playful twist with its lama-themed charm. Embrace the whimsical world of SOLAMA, where crypto meets humor, and join the journey toward the next big meme coin sensation on SOLANA."
        />
        <meta
          name="twitter:description"
          content="SOLAMA, the rising star in the meme coin universe on the SOLANA blockchain. Much like Shiba Inu on Ethereum, SOLAMA brings a playful twist with its lama-themed charm. Embrace the whimsical world of SOLAMA, where crypto meets humor, and join the journey toward the next big meme coin sensation on SOLANA."
        />
        <meta name="twitter:site" content="@SolamaSPL" />
        <meta name="twitter:image:alt" content="Visit Solama Website" />
        <script src="https://terminal.jup.ag/main-v2.js" data-preload />
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XCB865HBKH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                   window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XCB865HBKH');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div
          id="coinmarketcap-currency-widget"
          className="coinmarketcap-currency-widget hidden"
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
