import type {Metadata} from "next";
import "./styles/global.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const inter = {subsets: ["latin"]};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
