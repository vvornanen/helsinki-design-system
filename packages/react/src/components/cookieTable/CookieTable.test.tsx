import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { CookieTable } from './CookieTable';

describe('<CookieTable /> spec', () => {
  it('renders the component', () => {
    const { asFragment } = render(<CookieTable />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<CookieTable />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
