import type { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    rating: 4,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24T14:13:56.569Z',
  },
  {
    id: '2',
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    rating: 5,
    comment:
      'The apartment is exactly like on the photos: light, clean and very quiet. Angelina met us with coffee and showed the best places for breakfast nearby.',
    date: '2019-05-18T10:24:15.569Z',
  },
  {
    id: '3',
    user: {
      name: 'Oliver',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    rating: 3,
    comment:
      'Nice place with a beautiful canal view, but the walls are thin and the neighbours were quite loud in the evening. Everything else was fine.',
    date: '2019-06-07T19:52:44.569Z',
  },
];
