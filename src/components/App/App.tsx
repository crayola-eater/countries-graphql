import { useQuery, gql } from "@apollo/client";
import Countries from "../Countries/Countries.jsx";

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

export default function App() {
  const { loading, error, data = null } = useQuery(GET_COUNTRIES);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return <Countries countries={data.countries} />;
}
