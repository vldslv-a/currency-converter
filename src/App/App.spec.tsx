import { screen } from '@testing-library/react';
import { render } from 'test/testUtils';
import { App } from '.';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    const subHeading = screen.getByText('Currency Converter');
    const inputs = screen.getAllByRole('textbox');
    const convertButton = screen.getByText('Convert');

    expect(subHeading).toBeInTheDocument();
    expect(inputs).toHaveLength(3);
    expect(convertButton).toBeInTheDocument();
  });
});
