import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ChildrenProps } from "@/types/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
