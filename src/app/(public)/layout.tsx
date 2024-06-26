import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css"
import Container from "../components/container";
import Header from "../components/header";
import About from "../components/about";
import Services from "../components/services";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";
import AboutOld from "../components/about_old";
import Blogs from "../components/blogs";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LinkListCircle",
  description: "A Blockchain Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-[#F2ECBE]">
          <Header />
          <Container>
            {children}
            <div>
              {/* About component visible on desktop and tablet views */}
              <div className="hidden md:block">
                <About />
              </div>
              {/* AboutOld component visible only on mobile view */}
              <div className="block md:hidden">
                <AboutOld />
              </div>
            </div>
            <Services />
            <Blogs />
            <ContactForm />
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
