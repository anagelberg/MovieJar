import { render, screen } from '@testing-library/react';
import MovieCardPreview from './MovieCardPreview';


const testMovie = {
    title: "The Godfather",
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
}


test('renders MovieCardPreview component', () => {
    render(<MovieCardPreview movie={testMovie} />);
});


test('MovieCardPreview component matches snapshot', () => {
    const { container } = render(<MovieCardPreview movie={testMovie} />);
    expect(container.firstChild).toMatchSnapshot();
});


test('displays correct movie information in MovieCardPreview component', () => {
    render(<MovieCardPreview movie={testMovie} />);
    const posterImage = screen.getByRole('img');
    expect(posterImage).toHaveAttribute('src', `https://image.tmdb.org/t/p/original${testMovie.poster_path}`);
});


test('MovieCardPreview click function called when clicked', () => {
    const setSelectedMovie = jest.fn();
    render(<MovieCardPreview movie={testMovie} setSelectedMovie={setSelectedMovie} />);
    screen.getByRole('img').click();
    expect(setSelectedMovie).toHaveBeenCalled();
});


test('MovieCardPreview component applies correct CSS class when selected', () => {
    let { container, rerender } = render(<MovieCardPreview movie={testMovie} selected={true} />);
    expect(container.firstChild).toHaveClass('cardPrev--selected');

    rerender(<MovieCardPreview movie={testMovie} selected={false} />);
    expect(container.firstChild).not.toHaveClass('cardPrev--selected');
})


test('renders MovieCardPreview null when no movie is provided', () => {
    const setSelectedMovie = jest.fn();
    const { container } = render(<MovieCardPreview setSelectedMovie={setSelectedMovie} />);
    expect(container.firstChild).toBeNull();
});



