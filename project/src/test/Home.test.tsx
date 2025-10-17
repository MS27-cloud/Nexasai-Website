import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders the hero section with main heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Enterprise Technology')).toBeInTheDocument();
    expect(screen.getByText('That Delivers Results')).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Cloud Automation')).toBeInTheDocument();
    expect(screen.getByText('Manpower & Consulting')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
  });

  it('renders stats section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument();
  });

  it('renders testimonials section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument();
  });
});
