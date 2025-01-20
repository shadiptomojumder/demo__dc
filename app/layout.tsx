import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";
import { Baloo_Da_2 } from "next/font/google";
import { Noto_Sans_Bengali } from "next/font/google";
import Provider from "./utility/Provider";

const Baloo = Baloo_Da_2({
  weight: ["400", "500", "700"],
  subsets: ["latin", "bengali"],
});
const NotoBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "700"],
  subsets: ["bengali"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={NotoBengali.className}>
        <ThemeRegistry>
          <Provider>
            <Header>opp</Header>
            <div className="container mx-auto">{children}</div>
          </Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
