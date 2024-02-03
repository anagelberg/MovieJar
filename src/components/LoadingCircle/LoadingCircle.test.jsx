import { render } from "@testing-library/react";
import LoadingCircle from "./LoadingCircle";

test('renders LoadingCircle component', () => {
    const { container } = render(<LoadingCircle />);
    expect(container.firstChild).toHaveClass('loading');
});

test('LoadingCircle component matches snapshot', () => {
    const { container } = render(<LoadingCircle />);
    expect(container.firstChild).toMatchSnapshot();
});