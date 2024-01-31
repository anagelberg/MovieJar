import MovieSummary from "./MovieSummary";
import { render, screen } from "@testing-library/react";

const testMovie = {
    title: "The Godfather",
    year: 1972,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    runTime: 175,
    publicRating: 9.2
}

test("renders MovieSummary component", () => {
    render(<MovieSummary movie={testMovie} />);
    expect(screen.getByText(testMovie.title)).toBeInTheDocument();
    expect(screen.getByText(`(${testMovie.year})`)).toBeInTheDocument();
    expect(screen.getByText(testMovie.description)).toBeInTheDocument();
    expect(screen.getByText(`${testMovie.runTime} minutes`)).toBeInTheDocument();
});

test("MovieSummary component matches snapshot", () => {
    const { container } = render(<MovieSummary movie={testMovie} />);
    expect(container.firstChild).toMatchSnapshot();
});