// app/layout.tsx

import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { metadata } from "./metadata"; // Importation de metadata

const inter = Inter({ subsets: ["latin"] });

function handleAdminClick() {
  // Logique pour gérer le clic admin
  console.log("Admin clicked");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
          <Header /><main>
          {children}</main>
          <Footer />
      </body>
    </html>
  );
}
