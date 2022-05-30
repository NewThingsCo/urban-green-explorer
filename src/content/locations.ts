import { Location } from '../types';
import AuroraBlockImage from '@/assets/images/AuroraBlock.jpg?url';
import GreenTramStopImage from '@/assets/images/GreenTramStop.jpg?url';
import GreenUrbanMappingImage from '@/assets/images/GreenUrbanMapping.jpg?url';
import LoviseholmParkImage from '@/assets/images/LoviseholmPark.jpg?url';
import ParklyImage from '@/assets/images/Parkly.jpg?url';

export const locations: Location[] = [
  {
    categories: ['block'],
    coordinates: { lat: 60.1806, lng: 24.978 },
    description: 'locations.auroraBlock.description',
    image: AuroraBlockImage,
    minDistance: 0.2,
    slug: 'aurora-block',
    title: 'locations.auroraBlock.title',
  },
  {
    categories: ['tramStop'],
    coordinates: { lat: 60.1817, lng: 24.9793 },
    description: 'locations.greenTramStop.description',
    image: GreenTramStopImage,
    minDistance: 0.2,
    slug: 'green-tram-stop',
    title: 'locations.greenTramStop.title',
  },
  {
    categories: ['block'],
    coordinates: { lat: 60.1819, lng: 24.9783 },
    description: 'locations.greenUrbanMapping.description',
    image: GreenUrbanMappingImage,
    minDistance: 0.2,
    slug: 'green-urban-mapping',
    title: 'locations.greenUrbanMapping.title',
  },
  {
    categories: ['park'],
    coordinates: { lat: 60.181, lng: 24.9766 },
    description: 'locations.loviseholmPark.description',
    image: LoviseholmParkImage,
    minDistance: 0.2,
    slug: 'loviseholm-park',
    title: 'locations.loviseholmPark.title',
  },
  {
    categories: ['meetingPoint'],
    coordinates: { lat: 60.18108, lng: 24.9786 },
    description: 'locations.parkly.description',
    image: ParklyImage,
    minDistance: 0.2,
    slug: 'parkly',
    title: 'locations.parkly.title',
  },
];
