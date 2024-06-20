import { Html, Head, Main, NextScript } from "next/document";
import publicImages from "@/core/frontend/publicImages";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="icon" href={publicImages.COMPANY_LOGO} />
            <title>The Kind Citizen</title>
            {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"/>*/}
            {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>*/}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
