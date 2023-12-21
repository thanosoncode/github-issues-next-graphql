import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

describe('Header', () => {
  beforeEach(() => render(<Header />));

  it('should render correctly', () => {
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should have correct elements', () => {
    const repoOwner = screen.getByTestId('repo-owner');
    const repoName = screen.getByTestId('repo-name');
    const currentTab = screen.getByTestId('current-tab');
    expect(repoOwner).toHaveTextContent('reactjs');
    expect(repoName).toHaveTextContent('react.dev');
    expect(currentTab).toHaveTextContent('Issues');
  });
});
