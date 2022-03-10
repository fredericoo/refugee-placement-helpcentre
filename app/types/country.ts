import { LinkField, RichTextField, Slice, SliceZone } from '@prismicio/types';

export type Country = {
  country_name: RichTextField;
  opening_message: RichTextField;
  body: SliceZone<CountrySlice>;
};

export type CountrySlice = Slice<
  'faq_group',
  {
    group_name?: RichTextField;
  },
  { question?: RichTextField; answer?: RichTextField; cta_text?: string; cta_link?: LinkField }
>;
