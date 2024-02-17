import TopPickMovie from "./TopPickMovie";
import { render, screen } from "@testing-library/react";


jest.mock('../Rating/Rating', () => (props) => <div data-testid="rating">{props.rating}</div>);

const mockMovie = {
    posterUrl: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    title: 'Example Movie Title',
    publicRating: 4.5,
    mentalVibe: 'Thought-provoking',
    emotionalVibe: 'Lighthearted',
    genres: 'Action, Adventure',
    description: 'This is a mock description of the movie.',
    runTime: 120
};


describe('TopPickMovie', () => {

    it('renders without crashing', () => {
        render(<TopPickMovie movie={mockMovie} />);
        const movieComponent = screen.getByText(mockMovie.title);
        expect(movieComponent).toBeInTheDocument();
    });

    test('displays the correct movie poster', () => {
        render(<TopPickMovie movie={mockMovie} />);
        const moviePoster = screen.getByRole('img');
        expect(moviePoster).toHaveAttribute('src', mockMovie.posterUrl);
    });

    it('matches snapshot', () => {
        const { container } = render(<TopPickMovie movie={mockMovie} />);
        expect(container.firstChild).toMatchSnapshot();
    });
}); 
