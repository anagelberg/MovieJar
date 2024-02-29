import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideForm from './SideForm';

describe('SideForm Component Tests', () => {

    const mockOnClose = jest.fn();
    const mockFormContent = 'Form Content';
    const mockForm = () => mockFormContent;

    it('renders the form content without crashing', () => {
        render(<SideForm onClose={mockOnClose} form={mockForm} />);
        expect(screen.getByText(mockFormContent)).toBeInTheDocument();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<SideForm onClose={mockOnClose} form={mockForm} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('calls onClose prop when ClosingX is clicked', () => {
        render(<SideForm onClose={mockOnClose} form={mockForm} />);
        const closeX = screen.getByTestId('closing-x');
        fireEvent.click(closeX);
        expect(mockOnClose).toHaveBeenCalled();
    });



});
