import { render, screen } from '@testing-library/react';
import ClosingX from './ClosingX';

test('renders ClosingX component', () => {
    render(<ClosingX />);
    expect(screen.getByTestId('closing-x')).toBeInTheDocument();
});