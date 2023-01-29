import type { GetCountriesQuery } from '../../graphql/types';
import css from './Countries.module.css';

const headers = ['name', 'native', 'emoji', 'code'] as const;

type CountriesProps = {
  data: GetCountriesQuery;
};

export default function Countries({ data }: CountriesProps) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.row}>
          {headers.map(header => {
            return (
              <th key={header} className={css.heading}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.countries.map(country => {
          const cells = headers.map(property => (
            <td key={property} className={css.cell}>
              {country[property]}
            </td>
          ));
          return (
            <tr key={country.code} className={css.row}>
              {cells}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
