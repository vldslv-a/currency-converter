import { screen } from '@testing-library/react';
import { render } from 'test/testUtils';
import { CurrencyConverter } from '.';

describe('<CurrencyConverter />', () => {
  it('renders correctly', () => {
    render(<CurrencyConverter />);

    const inputs = screen.getAllByRole('textbox');
    const convertButton = screen.getByText('Convert');

    expect(inputs).toHaveLength(3);
    expect(convertButton).toBeInTheDocument();
  });
});
