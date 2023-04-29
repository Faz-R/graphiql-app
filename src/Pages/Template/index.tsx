import { Outlet } from 'react-router';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Template = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Template;
