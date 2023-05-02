import { Outlet } from "react-router";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Template = () => {
  return (
    <>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Template;
