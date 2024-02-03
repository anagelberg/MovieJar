import UserAvatar from "./UserAvatar";
import { screen, render } from "@testing-library/react";

const testImg = "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"

test('renders UserAvatar component with img', () => {
    const { container } = render(<UserAvatar img={testImg} />);
    expect(screen.queryByRole('img')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('avatar');
});

test('renders UserAvatar component without img', () => {
    render(<UserAvatar />);
    expect(screen.queryByRole('img')).toBeNull();
});

test('UserAvatar component matches snapshot', () => {
    const { container } = render(<UserAvatar img={testImg} />);
    expect(container.firstChild).toMatchSnapshot();
});
//todo: add other without img tests