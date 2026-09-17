import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "next-themes";
export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
