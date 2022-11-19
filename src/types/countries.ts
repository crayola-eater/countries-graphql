export type Country = {
  code: string;
  emoji: string;
  name: string;
  native: string;
};

export type CountriesProps = {
  countries: Country[];
};
