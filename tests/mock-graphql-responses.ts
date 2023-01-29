import type { MockedResponse } from '@apollo/client/testing';
import { GetCountriesDocument } from '../src/graphql/types';
import { data } from './fixtures/get-countries';

const mocks: MockedResponse[] = [
  {
    request: {
      query: GetCountriesDocument,
    },
    result: {
      data,
    },
  },
];

export default mocks;
