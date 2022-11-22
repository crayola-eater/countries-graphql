import Countries from '../Countries/Countries.jsx';
import useCountries from '../../hooks/useCountries.js';

export default function App() {
  const { error, loading, data } = useCountries();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!data) {
    return <p>No data to show, please try again later.</p>;
  }

  return <Countries countries={data} />;
}
