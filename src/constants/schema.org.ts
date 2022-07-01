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
  '@id': 'https://urban-green-explorer.netlify.app/#breadcrumb',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/',
      name: 'Alku / Start',
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/locations',
      name: 'Kohteet / Locations',
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/map',
      name: 'Kartta / Map',
      position: 3,
    },
    {
      '@type': 'ListItem',
      item: 'https://urban-green-explorer.netlify.app/info',
      name: 'Yhteystiedot / Info',
      position: 4,
    },
    {
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
  contentUrl:
    'https://urban-green-explorer.netlify.app/assets/cover-images/urban-green-explorer-09.jpg',
  height: 1233,
  url: '/assets/cover-images/urban-green-explorer-09.jpg',
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
  '@id': 'https://urban-green-explorer.netlify.app/#webpage',
  '@type': 'WebPage',
  breadcrumb: BREADCRUMBS,
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

/** @link https://schema.org/WebSite */
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
