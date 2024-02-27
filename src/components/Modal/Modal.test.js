import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
    const headerContent = () => <div>Header Content</div>;
    const bodyContent = () => <div>Body Content</div>;
    const footerContent = () => <div>Footer Content</div>;

    it('does not render when show is false', () => {
        render(<Modal show={false} headerContent={headerContent} bodyContent={bodyContent} footerContent={footerContent} />);
        expect(screen.queryByText('Header Content')).toBeNull();
        expect(screen.queryByText('Body Content')).toBeNull();
        expect(screen.queryByText('Footer Content')).toBeNull();
    });

    it('renders correctly when show is true', () => {
        render(<Modal show={true} headerContent={headerContent} bodyContent={bodyContent} footerContent={footerContent} />);
        expect(screen.queryByText('Header Content')).toBeInTheDocument();
        expect(screen.queryByText('Body Content')).toBeInTheDocument();
        expect(screen.queryByText('Footer Content')).toBeInTheDocument();
    });

    it('renders correctly without footerContent', () => {
        render(<Modal show={true} headerContent={headerContent} bodyContent={bodyContent} />);
        expect(screen.queryByText('Header Content')).toBeInTheDocument();
        expect(screen.queryByText('Body Content')).toBeInTheDocument();
        expect(screen.queryByText('Footer Content')).toBeNull();
    });

    it('matches snapshot', () => {
        const { container } = render(<Modal show={true} headerContent={headerContent} bodyContent={bodyContent} footerContent={footerContent} />);
        expect(container).toMatchSnapshot();
    });
});
