import { useQuery, gql } from '@apollo/client';
import { Country } from '../types/countries';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      emoji
      name
      native
    }
  }
`;

type CountriesData = {
  countries: Country[];
};

export default function useCountries() {
  const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIES);

  return {
    loading,
    error,
    data: data?.countries,
  };
}
