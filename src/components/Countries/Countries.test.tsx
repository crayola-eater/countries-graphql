import { it, expect, beforeEach } from "vitest";
import { screen, render, within } from "@testing-library/react";
import Countries from "./Countries";

const countries = [
  {
    code: "CW",
    emoji: "🇨🇼",
    name: "Curacao",
    native: "Curaçao",
    __typename: "Country",
  },
  {
    code: "CX",
    emoji: "🇨🇽",
    name: "Christmas Island",
    native: "Christmas Island",
    __typename: "Country",
  },
  {
    code: "CY",
    emoji: "🇨🇾",
    name: "Cyprus",
    native: "Κύπρος",
    __typename: "Country",
  },
  {
    code: "CZ",
    emoji: "🇨🇿",
    name: "Czech Republic",
    native: "Česká republika",
    __typename: "Country",
  },
  {
    code: "DE",
    emoji: "🇩🇪",
    name: "Germany",
    native: "Deutschland",
    __typename: "Country",
  },
];

beforeEach(() => {
  render(<Countries countries={countries} />);
});

it("should render table", () => {
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

it.each(["name", "native", "emoji", "code"])(
  "should render column %s",
  (columnName) => {
    const tableHeader = screen.getByRole("columnheader", { name: columnName });
    expect(tableHeader).toBeInTheDocument();
  }
);

it("should render correct number of table rows", () => {
  () => {
    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(countries.length);
  };
});

it("should render correct data", () => {
  const [, ...tableRows] = screen.getAllByRole("row");

  for (const [i, country] of countries.entries()) {
    const cellsOnThisRow = within(tableRows[i]).getAllByRole("cell");
    expect(cellsOnThisRow).toHaveLength(4);

    const [name, native, emoji, code] = cellsOnThisRow;
    expect(name).toHaveTextContent(country.name);
    expect(native).toHaveTextContent(country.native);
    expect(emoji).toHaveTextContent(country.emoji);
    expect(code).toHaveTextContent(country.code);
  }
});
