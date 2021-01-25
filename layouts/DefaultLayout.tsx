import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;