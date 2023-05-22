import "./globals.css";
import { Fredoka } from "next/font/google";

const inter = Fredoka({ subsets: ["latin"] });

export const metadata = {
  title: "Dodle - The daily AI guessing game",
  description: "Guess what the dodle AI tried to draw.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
