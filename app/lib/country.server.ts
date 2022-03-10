import { PrismicDocument } from '@prismicio/types';
import { Country } from '~/types/country';
import { createClient } from '../../prismicio';

const client = createClient({});

export const listCountries = async () => {
  const documents = client.getAllByType<PrismicDocument<Country>>('country', {
    fetch: ['country_name'],
  });
  return documents;
};

export const getCountryDataByUID = async (uid: string) => {
  const document = client.getByUID<PrismicDocument<Country>>('country', uid);
  return document;
};
