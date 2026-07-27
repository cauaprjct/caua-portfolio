import "./globals.css";
import { archivo, jetbrainsMono } from "@/config/fonts";
import { metaData } from "@/config/metadata";
import { Header, ThemeProvider, WhatsAppFab } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = metaData;

/**
 * Liga as animações de entrada e as observa fora do React.
 *
 * Roda antes da hidratação: se o React falhar, a página já está visível
 * (a classe `.js` é o único gatilho do `opacity: 0` — ver globals.css).
 * O MutationObserver cobre o conteúdo que aparece depois, no "Ver mais".
 */
const revealScript = `(function(){
if(!('IntersectionObserver' in window))return;
document.documentElement.classList.add('js');
var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-shown','');io.unobserve(es[i].target);}}},{rootMargin:'-80px 0px'});
function watch(r){if(!r.querySelectorAll)return;var e=r.querySelectorAll('[data-reveal]:not([data-shown])');for(var i=0;i<e.length;i++)io.observe(e[i]);}
function boot(){watch(document);new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var a=ms[i].addedNodes;for(var j=0;j<a.length;j++){var n=a[j];if(n.nodeType!==1)continue;if(n.hasAttribute('data-reveal')&&!n.hasAttribute('data-shown'))io.observe(n);watch(n);}}}).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <a
          href="#top"
          className="sr-only z-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:inline-flex focus:items-center focus:rounded-lg focus:bg-dev focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <WhatsAppFab />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
