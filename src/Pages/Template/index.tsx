import { Outlet } from 'react-router';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Template = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Template;
