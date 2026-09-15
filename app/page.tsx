import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
