import type {
  Arrayable,
  Breadcrumb,
  Image,
  Organization,
  SchemaOrgOptions,
  UseSchemaOrgInput,
  WebPage,
  WebSite,
} from '@vueuse/schema-org';
import {
  defineImage,
  defineOrganization,
  defineWebPage,
  defineWebSite,
} from '@vueuse/schema-org';

/** @link https://schema.org/BreadcrumbList */
const BREADCRUMBS: Breadcrumb = {
  '@id': '#breadcrumb',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@id': '#start',
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/',
      name: 'Alku / Start',
      position: 1,
    },
    {
      '@id': '#locations',
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/locations',
      name: 'Kohteet / Locations',
      position: 2,
    },
    {
      '@id': '#map',
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/map',
      name: 'Kartta / Map',
      position: 3,
    },
    {
      '@id': '#info',
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/info',
      name: 'Yhteystiedot / Info',
      position: 4,
    },
    {
      '@id': '#terms-of-use',
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/terms-of-use',
      name: 'Käyttöehdot / Terms of  use',
      position: 5,
    },
  ],
};

/** @link https://schema.org/ImageObject */
const PRIMARY_IMAGE: Image = {
  '@id': '#primaryImage',
  '@type': 'ImageObject',
  caption: 'Urban Green Explorer',
  contentUrl: 'https://urban-green-explorer.netlify.app/share-image.jpg',
  height: 1233,
  url: '/share-image.jpg',
  width: 1600,
};

/** @link https://schema.org/publisher */
const PUBLISHER: Organization = {
  '@id': '#publisher',
  '@type': 'Organization',
  address: {
    addressCountry: 'FI',
    addressLocality: 'Helsinki',
    addressRegion: 'Uusimaa',
    postalCode: '00130',
    postOfficeBoxNumber: 'PL 176',
    streetAddress: 'Unioninkatu 24, 6. floor',
  },
  logo: '/assets/logos/forum-virium.svg',
  name: 'Forum Virium Helsinki',
  url: 'https://forumvirium.fi/',
};

/** @link https://schema.org/WebPage */
const WEB_PAGE: WebPage = {
  '@id': '#webpage',
  '@type': 'WebPage',
  breadcrumb: BREADCRUMBS,
  inLanguage: 'fi-FI',
  isPartOf: {
    '@id': '#website',
  },
  name: 'Urban Green Digital Development tour guide. B.Green project 2020-2022. Sompasaari, Kalasatama-District, City of Helsinki, Finland.',
  primaryImageOfPage: {
    '@id': '#primaryImage',
  },
  url: 'https://urban-green-explorer.netlify.app/',
};

/** @link https://schema.org/WebSite */
const WEB_SITE: WebSite = {
  '@id': '#website',
  '@type': 'WebSite',
  description: '',
  inLanguage: 'fi-FI',
  name: 'Urban Green Explorer',
  publisher: {
    '@id': '#publisher',
  },
  url: 'https://urban-green-explorer.netlify.app/',
};

const SCHEMA_ORG: Arrayable<UseSchemaOrgInput> = [
  defineImage(PRIMARY_IMAGE),
  defineOrganization(PUBLISHER),
  defineWebSite(WEB_SITE),
  defineWebPage(WEB_PAGE),
];

const SCHEMA_ORG_OPTIONS: SchemaOrgOptions = {
  canonicalHost: 'https://urban-green-explorer.netlify.app/',
  defaultCurrency: 'EUR',
  defaultLanguage: 'fi-FI',
};

export {
  PRIMARY_IMAGE,
  PUBLISHER,
  SCHEMA_ORG,
  SCHEMA_ORG_OPTIONS,
  WEB_PAGE,
  WEB_SITE,
};
