import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '~/styles'
import { light, dark } from '~/styles/themes.css'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman-latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){function setTheme(newTheme){document.body.className=newTheme;window.__theme=newTheme;window.__onThemeChange(newTheme)}window.__onThemeChange=function(){};window.__setPreferredTheme=function(newTheme){setTheme(newTheme);try{localStorage.setItem("theme",JSON.stringify(window.__theme))}catch(err){}};const darkQuery=window.matchMedia("(prefers-color-scheme: dark)");darkQuery.addListener(function(event){window.__setPreferredTheme(event.matches?"${dark}":"${light}")});let preferredTheme;try{preferredTheme=JSON.parse(localStorage.getItem("theme"))}catch(err){}setTheme(preferredTheme||(darkQuery.matches?"${dark}":"${light}"))})();`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
