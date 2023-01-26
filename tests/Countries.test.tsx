import { it, expect, beforeEach } from 'vitest';
import { screen, render, within } from '@testing-library/react';
import Countries from '../src/components/Countries/Countries';
import { data } from './fixtures/get-countries';

beforeEach(() => {
  render(<Countries data={data} />);
});

it('should render table', () => {
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});

it.each(['name', 'native', 'emoji', 'code'])('should render column %s', columnName => {
  const tableHeader = screen.getByRole('columnheader', { name: columnName });
  expect(tableHeader).toBeInTheDocument();
});

it('should render correct number of table rows', () => {
  () => {
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(data.countries.length);
  };
});

it('should render correct data', () => {
  const [, ...tableRows] = screen.getAllByRole('row');

  for (const [i, country] of data.countries.entries()) {
    const cellsOnThisRow = within(tableRows[i]).getAllByRole('cell');
    expect(cellsOnThisRow).toHaveLength(4);

    const [name, native, emoji, code] = cellsOnThisRow;
    expect(name).toHaveTextContent(country.name);
    expect(native).toHaveTextContent(country.native);
    expect(emoji).toHaveTextContent(country.emoji);
    expect(code).toHaveTextContent(country.code);
  }
});
