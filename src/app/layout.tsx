import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Header, TarnstackProvider, ThemeProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe Lodgings",
  description: "A luxury booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TarnstackProvider>
            <div>
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </TarnstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
