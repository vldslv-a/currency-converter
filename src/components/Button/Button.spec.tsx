import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  const label = 'Hello World!';
  const mockOnClick = jest.fn();

  const props = {
    label,
    onClick: mockOnClick,
  };

  it('renders correctly', () => {
    const { rerender } = render(<Button {...props} />);

    const button = screen.getByText('Hello World!');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(label);
    expect(button).not.toBeDisabled();

    rerender(<Button {...props} isDisabled />);

    expect(button).toBeDisabled();
  });

  it('handles onClick when appropriate', () => {
    const { rerender } = render(<Button {...props} isDisabled />);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(0);

    rerender(<Button {...props} isDisabled={false} />);

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
