import { PrismicDocument } from '@prismicio/types';
import { Country } from '~/types/country';
import { HomePage } from '~/types/homepage';
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

export const getHomePage = async () => {
  const document = client.getSingle<PrismicDocument<HomePage>>('home');
  return document;
};

export const getFooter = async () => {
  const document = client.getSingle<PrismicDocument<Pick<HomePage, 'disclaimer'>>>('home', { fetch: ['disclaimer'] });
  return document;
};
