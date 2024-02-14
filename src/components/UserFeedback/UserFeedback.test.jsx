import { screen, render } from '@testing-library/react';
import UserFeedback from './UserFeedback';

test('renders UserFeedback component', () => {
    render(<UserFeedback message="Test message" />);
    const message = screen.getByText("Test message");
    expect(message).toBeInTheDocument();
});

test('UserFeedback component matches snapshot', () => {
    const { container } = render(<UserFeedback message="Test message" />);
    expect(container.firstChild).toMatchSnapshot();
});