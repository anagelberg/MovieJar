import { render, fireEvent, screen } from '@testing-library/react';
import MovieModal from './MovieModal'; // Adjust the import path as necessary
import '@testing-library/jest-dom';

describe('MovieModal Component', () => {
    const mockCloseHandler = jest.fn();
    const mockDelClick = jest.fn();
    const mockMovie = {
        title: "The Godfather"
    }

    it('renders correctly when show is true', () => {
        render(<MovieModal show={true} movie={mockMovie} delClick={mockDelClick} closeHandler={mockCloseHandler} />);
        expect(screen.queryByRole('dialog')).toBeInTheDocument();
        expect(screen.queryByText(mockMovie.title)).toBeInTheDocument();
    });

    it('does not render when show is false', () => {
        render(<MovieModal show={false} movie={mockMovie} delClick={mockDelClick} closeHandler={mockCloseHandler} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.queryByText(mockMovie.title)).not.toBeInTheDocument();

    });

    it('calls closeHandler when close icon is clicked', () => {
        render(<MovieModal show={true} movie={mockMovie} delClick={() => { }} closeHandler={mockCloseHandler} />);
        fireEvent.click(screen.getByLabelText('Close'));
        expect(mockCloseHandler).toHaveBeenCalled();
    });

    it('matches snapshot', () => {
        const { container } = render(<MovieModal show={true} movie={mockMovie} delClick={mockDelClick} closeHandler={mockCloseHandler} />);
        expect(container).toMatchSnapshot();
    });
});

