import { Location } from '../types';
import ArrowUpRight from '@/assets/icons/arrow-up-right-from-square-solid.svg?component';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import CloudDownload from '@/assets/icons/cloud-arrow-down-solid.svg?component';
import MoreInfo from '@/assets/icons/book-open-reader-solid.svg?component';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import AuroraBlockImage from '@/assets/images/AuroraBlock.jpg?url';
import GreenTramStopImage from '@/assets/images/GreenTramStop.jpg?url';
import GreenUrbanMappingImage from '@/assets/images/GreenUrbanMapping.jpg?url';
import LoviseholmParkImage from '@/assets/images/LoviseholmPark.jpg?url';
import ParklyImage from '@/assets/images/Parkly.jpg?url';

export const locations: Location[] = [
  {
    categories: ['meetingPoint'],
    coordinates: { lat: 60.18108, lng: 24.9786 },
    description: 'locations.parkly.description',
    links: [
      {
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'parkly' } },
        type: 'router-link',
      },
    ],
    image: ParklyImage,
    minDistance: 0.2,
    slug: 'parkly',
    subtitle: 'locations.parkly.subtitle',
    title: 'locations.parkly.title',
  },
  {
    categories: ['block'],
    coordinates: { lat: 60.1806, lng: 24.978 },
    description: 'locations.auroraBlock.description',
    image: AuroraBlockImage,
    links: [
      {
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'aurora-block' } },
        type: 'router-link',
      },
    ],
    minDistance: 0.2,
    slug: 'aurora-block',
    subtitle: 'locations.auroraBlock.subtitle',
    title: 'locations.auroraBlock.title',
  },
  {
    categories: ['block'],
    coordinates: { lat: 60.1819, lng: 24.9783 },
    description: 'locations.greenUrbanMapping.description',
    image: GreenUrbanMappingImage,
    links: [
      {
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'green-urban-mapping' } },
        type: 'router-link',
      },
    ],
    minDistance: 0.2,
    slug: 'green-urban-mapping',
    subtitle: 'locations.greenUrbanMapping.subtitle',
    title: 'locations.greenUrbanMapping.title',
  },
  {
    categories: ['park'],
    coordinates: { lat: 60.181, lng: 24.9766 },
    description: 'locations.loviseholmPark.description',
    image: LoviseholmParkImage,
    links: [
      {
        iconLeft: MoreInfo,
        iconRight: ChevronRight,
        title: 'moreInfo',
        to: {
          name: '#',
          params: {
            id: 'more-info',
          },
        },
        type: 'panel',
      },
      {
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'loviseholm-park' } },
        type: 'router-link',
      },
      {
        iconLeft: CloudDownload,
        iconRight: ArrowUpRight,
        title: 'downloadIosApp',
        to: {
          name: 'https://apps.apple.com/fi/app/green-kalasatama/id1573262748',
        },
        type: 'external',
      },
    ],
    minDistance: 0.2,
    slug: 'loviseholm-park',
    subtitle: 'locations.loviseholmPark.subtitle',
    title: 'locations.loviseholmPark.title',
  },
  {
    categories: ['tramStop'],
    coordinates: { lat: 60.1817, lng: 24.9793 },
    description: 'locations.greenTramStop.description',
    links: [
      {
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'green-tram-stop' } },
        type: 'router-link',
      },
    ],
    image: GreenTramStopImage,
    minDistance: 0.2,
    slug: 'green-tram-stop',
    subtitle: 'locations.greenTramStop.subtitle',
    title: 'locations.greenTramStop.title',
  },
];
