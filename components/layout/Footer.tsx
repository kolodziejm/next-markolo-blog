import { IconContext } from 'react-icons';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TWITTER_URL } from '../../config/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto mt-8">
      <hr />

      <div className="flex justify-center items-center py-4 px-4">
        <div className="mr-2 text-lg text-gray-700">
          &copy; Marcin Kołodziej {currentYear}
        </div>
        <a href={TWITTER_URL} target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ size: '24px' }}>
            <AiFillTwitterCircle className="fill-current text-primary" />
          </IconContext.Provider>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
