import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import NewsletterForm from '../components/common/NewsletterForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('renders correctly', () => {
  render(<NewsletterForm />);
  const element = screen.getByTestId('newsletter-container');

  expect(element).toBeInTheDocument();
});

describe('Bottom margin', () => {
  it('has mb-8 by default', () => {
    render(<NewsletterForm />);
    const element = screen.getByTestId('newsletter-container');

    expect(element.classList).toContain('mb-8');
  });

  it('has mb-16 inside the post', () => {
    render(<NewsletterForm postForm />);
    const element = screen.getByTestId('newsletter-container');

    expect(element.classList).toContain('mb-16');
  });
});

describe('Sign up', () => {
  it('prevents sign up if the input is empty', () => {
    const { getByText, queryByLabelText } = render(<NewsletterForm />);
    const button = getByText('Sign up');

    userEvent.click(button);

    expect(queryByLabelText('audio-loading')).toBeNull();
  });

  it('submits the form', async () => {
    mockedAxios.post.mockResolvedValue({ data: {} });

    const { getByText, getByPlaceholderText, getByLabelText } = render(<NewsletterForm />);

    const input = getByPlaceholderText('Your email');
    const button: any = getByText('Sign up');
    
    userEvent.type(input, 'test@test.com');
    userEvent.click(button);

    await waitFor(() => {
      expect(getByLabelText('audio-loading')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(button.disabled).toBe(true);
      expect(getByText('Thanks for signing up!')).toBeInTheDocument();
    });
  });
});
