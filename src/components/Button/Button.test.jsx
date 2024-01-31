import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import TestIcon from '../../assets/icons/google.svg';

test('renders Button component', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders Button component with text', () => {
    render(<Button text="test text" />);
    expect(screen.getByText('test text')).toBeInTheDocument();
});

test('toggles Button modifier class', () => {
    const { container } = render(<Button modifier="--testing-class" />);
    expect(container.firstChild).toHaveClass('cta--testing-class')
});

test('Button calls clickHandler on click', () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler} />);
    userEvent.click(screen.getByRole('button'));
    expect(clickHandler).toHaveBeenCalled();
});

test('Button is passed undefined props as default attributes', () => {
    render(<Button disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
});


test('Button component matches snapshot', () => {
    const { container } = render(<Button icon={TestIcon} />);
    expect(container.firstChild).toMatchSnapshot();
});