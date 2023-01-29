import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App/App';
import mockResponses from './mock-graphql-responses';

it('renders app and serves mock response', async () => {
  render(
    <MockedProvider mocks={mockResponses}>
      <App />
    </MockedProvider>,
  );

  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByRole('table')).toBeInTheDocument();
});
