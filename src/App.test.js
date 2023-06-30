import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';


describe('App component', () => {
  it('renders the navbar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const navbarElement = screen.getByText('Navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  // ***.test.js 
  // ***.spec.js

  it('renders the home page', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );

    const homeElement = screen.getByText('Home');
    expect(homeElement).toBeInTheDocument();
  });

  it('renders the about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutElement = screen.getByText('About Us');
    expect(aboutElement).toBeInTheDocument();
  });

  it('renders the contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    const contactElement = screen.getByText('Contact Us');
    expect(contactElement).toBeInTheDocument();
  });

  it('renders the weather page', () => {
    render(
      <MemoryRouter initialEntries={['/weather']}>
        <App />
      </MemoryRouter>
    );

    const weatherElement = screen.getByText('Weather');
    expect(weatherElement).toBeInTheDocument();
  });
});
