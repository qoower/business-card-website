import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Виктор Попов — разработчик и метеоролог",
  description:
    "Разработчик погодного сервиса для путешествий, кандидат физико-математических наук по специальности «Метеорология, климатология и агрометеорология».",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Виктор Попов — разработчик и метеоролог",
    description: "Погодные данные, наука и разработка для более осознанных путешествий.",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og.jpg", width: 1760, height: 920, alt: "Виктор Попов — разработчик и метеоролог" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Виктор Попов — разработчик и метеоролог",
    description: "Погодные данные, наука и разработка для более осознанных путешествий.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
