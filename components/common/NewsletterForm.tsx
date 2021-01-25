import { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import SignupButton from './SignupButton';
import Message from './Message';

function NewsletterForm({ postForm = false }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const disableSubmitBtn = isSubmitted || isLoading;
  const showMessage = isSubmitted || error;

  const message = error ? error : 'Thanks for signing up!';

  async function newsletterSignup(event) {
    event.preventDefault();

    setError('');

    if (!email) {
      return;
    }

    const reqData = {
      email,
    };

    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT_URL}/email-signup`,
        reqData,
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);

      const { response } = err;

      if (!response) {
        setError('Something went wrong');
        return;
      }

      setError(response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div 
      className={`mx-auto max-w-2-xl px-2 lg:px-0 ${postForm ? 'mb-16' : 'mb-8'}`}
      data-testid="newsletter-container"
    >
      <h1 className="text-center text-4xl text-gray-800 mb-2">
        Get aggregated {' '}
        <span className="text-primary">developer, productivity &amp; business</span> content.
      </h1>
      <h2 className="text-center text-gray-700 text-lg mb-5 max-w-4xl mx-auto">
        Sign up for my weekly newsletter where I share the best content I&apos;ve read during the week. <br/> You&apos;ll albo be notified about my new posts.
      </h2>

      <form className="max-w-xl mx-auto" onSubmit={newsletterSignup}>
        <input
          id="email"
          type="email"
          className="w-full shadow focus:shadow-xl ease-in-out duration-150 rounded-full outline-none py-2 px-4 mb-2"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {showMessage && (
          <Message error={!!error}>{message}</Message>
        )}
        <SignupButton
          type="submit"
          disabled={disableSubmitBtn}
        >
          {isLoading ? (
            <div className="flex justify-center">
              <Loader
                type="TailSpin"
                color="#FFFFFF"
                height={20}
                width={20}
              />
            </div>
          ) : 'Sign up'}
        </SignupButton>
      </form>
    </div>
  );
}

export default NewsletterForm;
