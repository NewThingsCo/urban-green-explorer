import type {
  Arrayable,
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

const PRIMARY_IMAGE: Image = {
  '@id': '#primaryImage',
  '@type': 'ImageObject',
  caption: 'Urban Green Explorer',
  contentUrl:
    'https://urban-green-explorer.netlify.app/assets/cover-images/urban-green-explorer-09.jpg',
  height: 1233,
  url: '/assets/cover-images/urban-green-explorer-09.jpg',
  width: 1600,
};

const PUBLISHER: Organization = {
  '@id': '#publisher',
  '@type': 'Organizaiton',
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

const WEB_SITE: WebSite = {
  '@id': 'https://urban-green-explorer.netlify.app/#website',
  '@type': 'WebSite',
  description: '',
  inLanguage: 'fi-FI',
  name: 'Urban Green Explorer',
  potentialAction: [
    {
      '@type': 'MoveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://urban-green-explorer.netlify.app/map',
      },
    },
  ],
  publisher: {
    '@id': '#publisher',
  },
  url: 'https://urban-green-explorer.netlify.app/',
};

const WEB_PAGE: WebPage = {
  '@id': 'https://urban-green-explorer.netlify.app/#webpage',
  '@type': 'WebPage',
  breadcrumb: {
    '@id': 'https://urban-green-explorer.netlify.app/#breadcrumb',
  },
  inLanguage: 'fi-FI',
  isPartOf: {
    '@id': 'https://urban-green-explorer.netlify.app/#website',
  },
  name: 'Urban Green Digital Development tour guide. B.Green project 2020-2022. Sompasaari, Kalasatama-District, City of Helsinki, Finland.',
  potentialAction: [
    {
      '@type': 'ReadAction',
      target: ['https://urban-green-explorer.netlify.app/'],
    },
  ],
  primaryImageOfPage: {
    '@id': '#primaryImage',
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
