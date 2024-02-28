import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteModal from './DeleteModal';


const mockCloseHandler = jest.fn();
const mockDelAction = jest.fn();


describe('DeleteModal Component', () => {

    beforeEach(() => {
        render(<DeleteModal show={true} closeHandler={mockCloseHandler} headText="Confirm Delete" bodyText="Are you sure you want to delete this item?" delAction={mockDelAction} />);
    });

    test('should only display when "show" prop is true', () => {
        const modal = screen.getByRole('dialog');
        expect(modal).toBeVisible();
    });

    test('should render a closingX with the correct handler', () => {
        const closeX = screen.getByTestId('closing-x');
        fireEvent.click(closeX);
        expect(mockCloseHandler).toHaveBeenCalledTimes(1);
    });

    test('should display the correct headText and bodyText', () => {
        expect(screen.getByText('Confirm Delete')).toBeInTheDocument();
        expect(screen.getByText('Are you sure you want to delete this item?')).toBeInTheDocument();
    });

    test('should render a cancel button that calls "closeHandler" when clicked', () => {
        const cancelButton = screen.getByRole('button', { name: /cancel/i });
        fireEvent.click(cancelButton);
        expect(mockCloseHandler).toHaveBeenCalledTimes(1);
    });

    test('should render a delete button that calls "delAction" when clicked', () => {
        const deleteButton = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(deleteButton);
        expect(mockDelAction).toHaveBeenCalledTimes(1);
    });

    test('should have correct class modifiers for integration with buttons', () => {
        const cancelButton = screen.getByRole('button', { name: /cancel/i });
        const deleteButton = screen.getByRole('button', { name: /delete/i });
        expect(cancelButton).toHaveClass('cta--reverse');
        expect(deleteButton).toHaveClass('cta--delete');
    });

    test("matches snapshot", () => {
        const { container } = render(<DeleteModal show={true} closeHandler={mockCloseHandler} headText="Confirm Delete" bodyText="Are you sure you want to delete this item?" delAction={mockDelAction} />);
        expect(container).toMatchSnapshot();
    });
});

describe('Delete Modal Component Hidden', () => {

    test('should not display when "show" prop is false', () => {
        render(<DeleteModal show={false} closeHandler={mockCloseHandler} headText="Confirm Delete" bodyText="Are you sure you want to delete this item?" delAction={mockDelAction} />);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

})