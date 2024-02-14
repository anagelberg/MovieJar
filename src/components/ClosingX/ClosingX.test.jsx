import { render, screen } from '@testing-library/react';
import ClosingX from './ClosingX';
import userEvent from '@testing-library/user-event';

test('renders ClosingX component', () => {
    render(<ClosingX />);
    expect(screen.getByTestId('closing-x')).toBeInTheDocument();
});

test("ClosingX component matches snapshot", () => {
    const { container } = render(<ClosingX />);
    expect(container.firstChild).toMatchSnapshot();
});

test('toggles ClosingX modifier class', () => {
    const { container } = render(<ClosingX modifier="--testing-class" />);
    expect(container.firstChild).toHaveClass('close-x--testing-class')
});

test('calls closeHandler on click', () => {
    const closeHandler = jest.fn();
    render(<ClosingX closeHandler={closeHandler} />);
    userEvent.click(screen.getByTestId('closing-x'));
    expect(closeHandler).toHaveBeenCalled();
});