import { Outlet } from 'react-router';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container } from '@mui/material';

const Template = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Template;
