import { CITIES } from '../const';
import type { Host, Offer } from '../types/offer';

const APARTMENT_IMAGES = [
  'img/apartment-01.jpg',
  'img/room.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/studio-photos.jpg',
];

const ROOM_IMAGES = ['img/room.jpg', 'img/room-small.jpg', 'img/studio-01.jpg'];

const HOUSE_IMAGES = [
  'img/apartment-03.jpg',
  'img/apartment-01.jpg',
  'img/room.jpg',
  'img/studio-photos.jpg',
];

const CANAL_IMAGES = ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/room.jpg'];

const APARTMENT_GOODS = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cable TV',
  'Fridge',
];

const ROOM_GOODS = ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Towels'];

const HOUSE_GOODS = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Kitchen',
  'Dishwasher',
  'Cable TV',
  'Fridge',
  'Baby seat',
];

const CANAL_GOODS = ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Coffee machine', 'Towels'];

const HOST_ANGELINA: Host = {
  name: 'Angelina',
  avatarUrl: 'img/avatar-angelina.jpg',
  isPro: true,
  description:
    'Angelina is a professional host and knows everything about the best coffee and canals of Amsterdam.',
};

const HOST_MAX: Host = {
  name: 'Max',
  avatarUrl: 'img/avatar-max.jpg',
  isPro: false,
  description: 'Max rents out a couple of rooms and is always happy to tell guests about the neighbourhood.',
};

const HOST_SOPHIE: Host = {
  name: 'Sophie',
  avatarUrl: 'img/avatar-angelina.jpg',
  isPro: true,
  description: 'Sophie lives next door and is a superhost with more than five years of experience.',
};

const HOST_OLIVER: Host = {
  name: 'Oliver',
  avatarUrl: 'img/avatar-max.jpg',
  isPro: false,
  description: 'Oliver is an architect and loves sharing the city routes he walks with his dog.',
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-01.jpg',
    images: APARTMENT_IMAGES,
    description:
      'A quiet cozy and picturesque apartment that hides behind a river by the unique lightness of Amsterdam. The building is green and from the 18th century.',
    bedrooms: 3,
    maxAdults: 4,
    goods: APARTMENT_GOODS,
    host: HOST_ANGELINA,
    city: CITIES.Amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4.4,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/room.jpg',
    images: ROOM_IMAGES,
    description:
      'A small but very cozy room with wooden walls and a stone fireplace in the heart of the city.',
    bedrooms: 1,
    maxAdults: 2,
    goods: ROOM_GOODS,
    host: HOST_MAX,
    city: CITIES.Amsterdam,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },
  {
    id: '3',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 180,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-03.jpg',
    images: HOUSE_IMAGES,
    description:
      'A whole house with a green garden, a big warm bed and a view on the canal. Perfect for a family trip.',
    bedrooms: 4,
    maxAdults: 6,
    goods: HOUSE_GOODS,
    host: HOST_SOPHIE,
    city: CITIES.Amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
  },
  {
    id: '4',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4.2,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    images: CANAL_IMAGES,
    description:
      'An apartment with huge windows and a direct view on the Prinsengracht canal, close to the main museums.',
    bedrooms: 2,
    maxAdults: 3,
    goods: CANAL_GOODS,
    host: HOST_OLIVER,
    city: CITIES.Amsterdam,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
  },
  {
    id: '5',
    title: 'Loft with a view on the Eiffel Tower',
    type: 'apartment',
    price: 210,
    rating: 4.7,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    images: CANAL_IMAGES,
    description:
      'A bright loft on the fifth floor with a tiny balcony and a view on the Eiffel Tower. Two metro stations are five minutes away.',
    bedrooms: 2,
    maxAdults: 3,
    goods: CANAL_GOODS,
    host: HOST_SOPHIE,
    city: CITIES.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 16,
    },
  },
  {
    id: '6',
    title: 'Cosy studio in the Marais',
    type: 'room',
    price: 95,
    rating: 4.3,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/room.jpg',
    images: ROOM_IMAGES,
    description:
      'A compact studio in the heart of the Marais: bakeries, galleries and the Seine are all within a ten-minute walk.',
    bedrooms: 1,
    maxAdults: 2,
    goods: ROOM_GOODS,
    host: HOST_MAX,
    city: CITIES.Paris,
    location: {
      latitude: 48.86561,
      longitude: 2.341499,
      zoom: 16,
    },
  },
  {
    id: '7',
    title: 'Family apartment near the Luxembourg Gardens',
    type: 'house',
    price: 175,
    rating: 4.6,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-03.jpg',
    images: HOUSE_IMAGES,
    description:
      'A quiet family apartment with three bedrooms and a green courtyard, just around the corner from the Luxembourg Gardens.',
    bedrooms: 3,
    maxAdults: 5,
    goods: HOUSE_GOODS,
    host: HOST_ANGELINA,
    city: CITIES.Paris,
    location: {
      latitude: 48.84661,
      longitude: 2.341499,
      zoom: 16,
    },
  },
  {
    id: '8',
    title: 'Modern apartment next to the Cathedral',
    type: 'apartment',
    price: 140,
    rating: 4.5,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    images: APARTMENT_IMAGES,
    description:
      'A modern apartment with a panoramic window: the Cathedral is right across the square and the old town is five minutes away.',
    bedrooms: 2,
    maxAdults: 3,
    goods: APARTMENT_GOODS,
    host: HOST_MAX,
    city: CITIES.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 16,
    },
  },
  {
    id: '9',
    title: 'Sunny studio near the Grand Place',
    type: 'apartment',
    price: 95,
    rating: 3.9,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-02.jpg',
    images: CANAL_IMAGES,
    description:
      'A compact sunny studio a few minutes away from the Grand Place with a tiny balcony and a coffee place downstairs.',
    bedrooms: 1,
    maxAdults: 2,
    goods: ROOM_GOODS,
    host: HOST_OLIVER,
    city: CITIES.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 16,
    },
  },
  {
    id: '10',
    title: 'Loft in the Speicherstadt',
    type: 'apartment',
    price: 165,
    rating: 4.4,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/studio-01.jpg',
    images: APARTMENT_IMAGES,
    description:
      'A designer loft in a red-brick warehouse with a view on the Elbe and the harbour, ten minutes from the city centre.',
    bedrooms: 2,
    maxAdults: 4,
    goods: APARTMENT_GOODS,
    host: HOST_ANGELINA,
    city: CITIES.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 9.993682,
      zoom: 16,
    },
  },
  {
    id: '11',
    title: 'Room in the Old Town',
    type: 'room',
    price: 70,
    rating: 4.1,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/room-small.jpg',
    images: ROOM_IMAGES,
    description:
      'A small room in a historic house in the Old Town: bars, the Rhine embankment and the Kunstpalast are within walking distance.',
    bedrooms: 1,
    maxAdults: 2,
    goods: ROOM_GOODS,
    host: HOST_OLIVER,
    city: CITIES.Dusseldorf,
    location: {
      latitude: 51.227741,
      longitude: 6.772742,
      zoom: 16,
    },
  },
];
