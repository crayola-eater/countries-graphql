import Countries from '../Countries/Countries.js';
import { useGetCountriesQuery } from '../../graphql/types.js';

export default function App() {
  const { error, loading, data } = useGetCountriesQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!data) {
    return <p>No data to show, please try again later.</p>;
  }

  return <Countries data={data} />;
}
