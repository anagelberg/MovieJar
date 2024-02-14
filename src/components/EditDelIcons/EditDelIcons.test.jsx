import { screen, render } from '@testing-library/react';
import EditDelIcons from './EditDelIcons';
import userEvent from '@testing-library/user-event';

test('renders EditDelIcons component', () => {
    const { container } = render(<EditDelIcons />);
    expect(container.firstChild).toHaveClass('icons');
    expect(container.querySelector('.icons__del')).toBeInTheDocument();
    expect(container.querySelector('.icons__edit')).toBeInTheDocument();
});

test('EditDelIcons component matches snapshot', () => {
    const { container } = render(<EditDelIcons />);
    expect(container.firstChild).toMatchSnapshot();
});

test('calls delClick on delete icon click', () => {
    const delClick = jest.fn();
    const { container } = render(<EditDelIcons delClick={delClick} />);
    userEvent.click(container.querySelector('.icons__del'));
    expect(delClick).toHaveBeenCalled();
});

test('calls editClick on edit icon click', () => {
    const editClick = jest.fn();
    const { container } = render(<EditDelIcons editClick={editClick} />);
    userEvent.click(container.querySelector('.icons__edit'));
    expect(editClick).toHaveBeenCalled();
});