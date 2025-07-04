import { screen } from '@testing-library/react';
import { render } from 'test/testUtils';
import { App } from '.';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    const subHeading = screen.getByText('Currency Converter');
    const currencyConverter = screen.getByTestId('currencyConverter');

    expect(subHeading).toBeInTheDocument();
    expect(currencyConverter).toBeInTheDocument();
  });
});
