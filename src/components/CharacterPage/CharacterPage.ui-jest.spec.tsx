import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterPage } from './CharacterPage'; // Ajusta la ruta según tu estructura de carpetas

const mockCharacterData = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  url: 'https://rickandmortyapi.com/api/character/1',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  created: '2017-11-04T18:48:46.250Z',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('CharacterPage', () => {
  it('renders character details correctly', () => {
    render(<CharacterPage characterData={mockCharacterData} />);

    expect(screen.getByTestId('title')).toHaveTextContent('Rick Sanchez');
    expect(screen.getByTestId('subtitle')).toBeInTheDocument(); // You might want to add more assertions here
    expect(screen.getByTestId('content')).toBeInTheDocument(); // You might want to add more assertions here
  });

  it('renders character image', () => {
    render(<CharacterPage characterData={mockCharacterData} />);

    const characterImage = screen.getByAltText('alt') as HTMLImageElement;
    expect(characterImage).toBeInTheDocument();
    expect(characterImage.src).toBe('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
  });

  it('renders a link to home page', () => {
    render(<CharacterPage characterData={mockCharacterData} />);

    const homeLink = screen.getByTestId('link');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
  });

  // Add more tests for other components and interactions
});
