import type { Location } from '../types';
import ArrowUpRight from '@/assets/icons/arrow-up-right-from-square-solid.svg?component';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import CloudDownload from '@/assets/icons/cloud-arrow-down-solid.svg?component';
import LaptopFile from '@/assets/icons/laptop-file-solid.svg?component';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import Website from '@/assets/icons/website.svg?component';
import YouTube from '@/assets/icons/youtube.svg?component';
import Aurora1 from '@/assets/images/aurora-block/aurora-1.jpg?url';
import Aurora2 from '@/assets/images/aurora-block/aurora-2.jpg?url';
import AuroraBlockImage from '@/assets/images/cover-images/aurora-block.jpg?url';
import GreenTramStop1 from '@/assets/images/green-tram-stop/green-tram-stop-1.jpg?url';
import GreenTramStop2 from '@/assets/images/green-tram-stop/green-tram-stop-2.jpg?url';
import GreenTramStopImage from '@/assets/images/cover-images/green-tram-stop.jpg?url';
import GreenUrbanMapping1 from '@/assets/images/green-urban-mapping/xd-twin.jpg?url';
import GreenUrbanMapping2 from '@/assets/images/green-urban-mapping/plants-mapper-ar.jpg?url';
import GreenUrbanMappingImage from '@/assets/images/cover-images/green-urban-mapping.jpg?url';
import LoviseholmPark1 from '@/assets/images/loviseholm-park/loviseholm-park-1.jpg?url';
import LoviseholmParkImage from '@/assets/images/cover-images/loviseholm-park.jpg?url';
import ParklyImage from '@/assets/images/cover-images/parkly.jpg?url';

export const locations: Location[] = [
  {
    additionalContent: 'locations.parkly.additionalContent',
    additionalLinks: [
      {
        alert: '',
        iconLeft: Website,
        iconRight: ArrowUpRight,
        title: 'locations.parkly.additionalLinks[0].label',
        to: 'locations.parkly.additionalLinks[0].href',
        type: 'external',
      },
    ],
    categories: ['meetingPoint'],
    coordinates: { lat: 60.18115, lng: 24.97828 },
    description: 'locations.parkly.description',
    links: [
      {
        alert: '',
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'parkly' } },
        type: 'router-link',
      },
    ],
    image: ParklyImage,
    images: [],
    minDistance: 0.03,
    slug: 'parkly',
    subtitle: 'locations.parkly.subtitle',
    title: 'locations.parkly.title',
  },
  {
    additionalContent: 'locations.loviseholmPark.additionalContent',
    additionalLinks: [
      {
        alert: '',
        iconLeft: CloudDownload,
        iconRight: ArrowUpRight,
        title: 'locations.loviseholmPark.additionalLinks[0].label',
        to: 'locations.loviseholmPark.additionalLinks[0].href',
        type: 'external',
      },
      {
        alert: '',
        iconLeft: YouTube,
        iconRight: ArrowUpRight,
        title: 'locations.loviseholmPark.additionalLinks[1].label',
        to: 'locations.loviseholmPark.additionalLinks[1].href',
        type: 'external',
      },
    ],
    categories: ['park'],
    coordinates: { lat: 60.18172, lng: 24.97716 },
    description: 'locations.loviseholmPark.description',
    image: LoviseholmParkImage,
    images: [
      {
        alt: 'locations.loviseholmPark.images[0].alt',
        caption: 'locations.loviseholmPark.images[0].caption',
        src: LoviseholmPark1,
      },
    ],
    links: [
      {
        alert: '',
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'loviseholm-park' } },
        type: 'router-link',
      },
    ],
    minDistance: 0.03,
    slug: 'loviseholm-park',
    subtitle: 'locations.loviseholmPark.subtitle',
    title: 'locations.loviseholmPark.title',
  },
  {
    additionalContent: 'locations.auroraBlock.additionalContent',
    additionalLinks: [],
    categories: ['block'],
    coordinates: { lat: 60.1808104, lng: 24.9775642 },
    description: 'locations.auroraBlock.description',
    image: AuroraBlockImage,
    images: [
      {
        alt: 'locations.auroraBlock.images[0].alt',
        caption: 'locations.auroraBlock.images[0].caption',
        src: Aurora1,
      },
      {
        alt: 'locations.auroraBlock.images[1].alt',
        caption: 'locations.auroraBlock.images[1].caption',
        src: Aurora2,
      },
    ],
    links: [
      {
        alert: '',
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'aurora-block' } },
        type: 'router-link',
      },
    ],
    minDistance: 0.03,
    slug: 'aurora-block',
    subtitle: 'locations.auroraBlock.subtitle',
    title: 'locations.auroraBlock.title',
  },
  {
    additionalContent: 'locations.greenUrbanMapping.additionalContent',
    additionalLinks: [
      {
        alert: '',
        iconLeft: CloudDownload,
        iconRight: ArrowUpRight,
        title: 'locations.greenUrbanMapping.additionalLinks[0].label',
        to: 'locations.greenUrbanMapping.additionalLinks[0].href',
        type: 'external',
      },
      {
        alert: '',
        iconLeft: LaptopFile,
        iconRight: ArrowUpRight,
        title: 'locations.greenUrbanMapping.additionalLinks[1].label',
        to: 'locations.greenUrbanMapping.additionalLinks[1].href',
        type: 'external',
      },
      {
        alert: '',
        iconLeft: Website,
        iconRight: ArrowUpRight,
        title: 'locations.greenUrbanMapping.additionalLinks[2].label',
        to: 'locations.greenUrbanMapping.additionalLinks[2].href',
        type: 'external',
      },
    ],
    categories: ['block'],
    coordinates: { lat: 60.180802, lng: 24.9780319 },
    description: 'locations.greenUrbanMapping.description',
    image: GreenUrbanMappingImage,
    images: [
      {
        alt: 'locations.greenUrbanMapping.images[0].alt',
        caption: 'locations.greenUrbanMapping.images[0].caption',
        src: GreenUrbanMapping1,
      },
      {
        alt: 'locations.greenUrbanMapping.images[1].alt',
        caption: 'locations.greenUrbanMapping.images[1].caption',
        src: GreenUrbanMapping2,
      },
    ],
    links: [
      {
        alert: '',
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'green-urban-mapping' } },
        type: 'router-link',
      },
    ],
    minDistance: 0.03,
    slug: 'green-urban-mapping',
    subtitle: 'locations.greenUrbanMapping.subtitle',
    title: 'locations.greenUrbanMapping.title',
  },
  {
    additionalContent: 'locations.greenTramStop.additionalContent',
    additionalLinks: [
      {
        alert: '',
        iconLeft: CloudDownload,
        iconRight: ArrowUpRight,
        title: 'locations.greenTramStop.additionalLinks[0].label',
        to: 'locations.greenTramStop.additionalLinks[0].href',
        type: 'external',
      },
    ],
    categories: ['tramStop'],
    coordinates: { lat: 60.18101, lng: 24.97858 },
    description: 'locations.greenTramStop.description',
    image: GreenTramStopImage,
    images: [
      {
        alt: 'locations.greenTramStop.images[0].alt',
        caption: 'locations.greenTramStop.images[0].caption',
        src: GreenTramStop1,
      },
      {
        alt: 'locations.greenTramStop.images[1].alt',
        caption: 'locations.greenTramStop.images[1].caption',
        src: GreenTramStop2,
      },
    ],
    links: [
      {
        alert: '',
        iconLeft: MapMarkedAlt,
        iconRight: ChevronRight,
        title: 'showOnMap',
        to: { name: 'mapWithPopup', params: { id: 'green-tram-stop' } },
        type: 'router-link',
      },
    ],
    minDistance: 0.03,
    slug: 'green-tram-stop',
    subtitle: 'locations.greenTramStop.subtitle',
    title: 'locations.greenTramStop.title',
  },
];
