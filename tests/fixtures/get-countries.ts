import type { GetCountriesQuery } from '../../src/graphql/types';

export const data: GetCountriesQuery = {
  countries: [
    { __typename: 'Country', code: 'HN', emoji: '🇭🇳', name: 'Honduras', native: 'Honduras' },
    { __typename: 'Country', code: 'HR', emoji: '🇭🇷', name: 'Croatia', native: 'Hrvatska' },
    { __typename: 'Country', code: 'HT', emoji: '🇭🇹', name: 'Haiti', native: 'Haïti' },
    { __typename: 'Country', code: 'HU', emoji: '🇭🇺', name: 'Hungary', native: 'Magyarország' },
    { __typename: 'Country', code: 'ID', emoji: '🇮🇩', name: 'Indonesia', native: 'Indonesia' },
    { __typename: 'Country', code: 'IE', emoji: '🇮🇪', name: 'Ireland', native: 'Éire' },
    { __typename: 'Country', code: 'IL', emoji: '🇮🇱', name: 'Israel', native: 'יִשְׂרָאֵל' },
    { __typename: 'Country', code: 'IM', emoji: '🇮🇲', name: 'Isle of Man', native: 'Isle of Man' },
    { __typename: 'Country', code: 'IN', emoji: '🇮🇳', name: 'India', native: 'भारत' },
    {
      __typename: 'Country',
      code: 'IO',
      emoji: '🇮🇴',
      name: 'British Indian Ocean Territory',
      native: 'British Indian Ocean Territory',
    },
    { __typename: 'Country', code: 'IQ', emoji: '🇮🇶', name: 'Iraq', native: 'العراق' },
    { __typename: 'Country', code: 'IR', emoji: '🇮🇷', name: 'Iran', native: 'ایران' },
    { __typename: 'Country', code: 'IS', emoji: '🇮🇸', name: 'Iceland', native: 'Ísland' },
  ],
};
