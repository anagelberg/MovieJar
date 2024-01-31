
import { render, screen } from "@testing-library/react";
import Rating from "./Rating";


test("Renders Rating component", () => {
    const { container } = render(<Rating />);
    expect(container.firstChild).toHaveClass("rating");
});

test("Renders Rating component with text", () => {
    const testRating = "0001";
    render(<Rating rating={testRating} />);
    expect(screen.getByText(`${testRating} / 5`)).toBeInTheDocument();
});

// TODO: test icon matches snapshot