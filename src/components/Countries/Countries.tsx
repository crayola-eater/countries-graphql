import type { Country } from '../../types/countries';
import css from './Countries.module.css';

const headers = ['name', 'native', 'emoji', 'code'] as const;

type CountriesProps = {
  countries: Country[];
};

export default function Countries({ countries }: CountriesProps) {
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
        {countries.map(country => {
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
