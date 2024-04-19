import type { Metadata } from "next";
import "./globals.css";
import { HtmlFontSizeProvider } from "@/context/HtmlFontSizeContext";
import { ThemeProvider } from "next-themes";
import { BarTools } from "@/components/barra-acessibilidade/BarTools";
import { WindowSizeProvider } from "@/context/WindowSizeContext";
import { Epilogue, Lato } from "next/font/google";

const APP_NAME = "Mobility & Show";
const APP_DEFAULT_TITLE = "Mobility & Show";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "Mobility & Show!";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="transition-all h-full w-full scrollbar-thin scrollbar-webkit "
      suppressHydrationWarning
      lang="pt-BR"
    >
      <body className={`${epilogue.variable} ${lato.variable}`}>
        <WindowSizeProvider>
          <HtmlFontSizeProvider>
            <ThemeProvider defaultTheme="light" enableSystem={false}>
              <BarTools />
              <main className="pt-[9rem] bg-gray300 dark:bg-gray700">{children}</main>
            </ThemeProvider>
          </HtmlFontSizeProvider>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
