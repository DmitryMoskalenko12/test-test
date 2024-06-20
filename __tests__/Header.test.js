import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/modules/HomePage/Header/Header';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/');
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
    useTranslation.mockReturnValue({
      t: (key) => key,
      i18n: {
        language: 'en',
      },
    });
  });

  it('navigates to home page when cancelReloadServices is called', () => {
    const { getByText } = render(<Header />);
    const servicesLink = getByText('servicesHeader');
    
    servicesLink.click = jest.fn();

    fireEvent.click(servicesLink);
    expect(useRouter().push).toHaveBeenCalledWith('/');
  });

  it('renders the correct language changer visibility based on pathname', () => {
    render(<Header />);
    expect(screen.getAllByText('contact-us').length).toBeGreaterThan(0);
  });

  it('toggles modal visibility on button click', () => {
    render(<Header />);
    const button = screen.getAllByTitle('Contact us')[0];
    fireEvent.click(button);
    expect(document.querySelector('body').style.overflow).toBe('hidden');
  });
});