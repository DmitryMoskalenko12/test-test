import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import Contact from '@/modules/HomePage/Contact/Contact';
import { useTranslation } from 'react-i18next';
import contactFormRequest from '../helpers/contactFormRequest';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('../helpers/contactFormRequest');

describe('Contact Component', () => {
  beforeEach(() => {
    useTranslation.mockReturnValue({
      t: (key) => key,
    });

    contactFormRequest.mockImplementation((endpoint, method, values, setSuccess, setLoading, setError) => {
      setLoading(false);
      setSuccess(true);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders form and initial state', () => {
    render(<Contact />);
    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('website')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    render(<Contact />);

    await act(async () => {
      fireEvent.change(screen.getByTestId('name'), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByTestId('email'), {
        target: { value: 'john@example.com' },
      });
      fireEvent.change(screen.getByTestId('website'), {
        target: { value: 'https://example.com' },
      });
      fireEvent.change(screen.getByTestId('about'), {
        target: { value: 'About us text' },
      });
      fireEvent.click(screen.getByTestId('policy'));

      fireEvent.click(screen.getByTestId('send'));
    });

   await waitFor(() => {
      expect(screen.getByTestId('thanks')).toBeInTheDocument();
    }); 
  });

  it('displays loading spinner when loading', async () => {
    contactFormRequest.mockImplementation((endpoint, method, values, setSuccess, setLoading, setError) => {
      setLoading(true);
    });

    render(<Contact />);

    await act(async () => {
      fireEvent.change(screen.getByTestId('name'), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByTestId('email'), {
        target: { value: 'john@example.com' },
      });
      fireEvent.click(screen.getByTestId('send'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });

  it('displays error message on request failure', async () => {
    contactFormRequest.mockImplementation((endpoint, method, values, setSuccess, setLoading, setError) => {
      setLoading(false);
      setError(true);
      setSuccess(false);
    });

    render(<Contact />);

    await act(async () => {
      fireEvent.change(screen.getByTestId('name'), {
        target: { value: 'Test' },
      });
      fireEvent.change(screen.getByTestId('email'), {
        target: { value: 'test@example.com' },
      });
      fireEvent.click(screen.getByTestId('send'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });
  });
});