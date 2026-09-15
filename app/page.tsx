import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
