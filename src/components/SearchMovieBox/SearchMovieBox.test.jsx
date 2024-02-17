import { screen, render, fireEvent } from '@testing-library/react';
import SearchMovieBox from './SearchMovieBox';
import { MemoryRouter } from 'react-router-dom'; // simulates routing for testing purposes


// Mock the navigate function
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useNavigate: () => mockNavigate, // mock useNavigate hook when called
}));



describe("SearchMovieBox component", () => {

    it("renders input element", () => {
        render(
            <MemoryRouter>
                <SearchMovieBox />
            </MemoryRouter>
        )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })



    it("renders input element with correct modifier", () => {
        render(
            <MemoryRouter>
                <SearchMovieBox modifier="--large" />
            </MemoryRouter>
        )
        expect(screen.getByRole('textbox')).toHaveClass('search__input--large')
    })


    it("matches snapshot", () => {
        const { asFragment } = render(
            <MemoryRouter>
                <SearchMovieBox />
            </MemoryRouter>
        )
        expect(asFragment()).toMatchSnapshot()
    })


    it("triggers navigation when Enter key is pressed with a non-empty input", () => {
        render(
            <MemoryRouter>
                <SearchMovieBox />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'test' } })
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', keyCode: 13 })

        expect(mockNavigate).toHaveBeenCalledWith('/search/test')
    })


    it("does not trigger navigation when Enter key is pressed with an empty input", () => {
        render(
            <MemoryRouter>
                <SearchMovieBox />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', keyCode: 13 })

        expect(mockNavigate).not.toHaveBeenCalled()
    })


})

