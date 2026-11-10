import { Link, useParams } from 'react-router-dom';
import Map from '../component/map/Map';
import OffersList from '../component/offersList/OffersList';
import ReviewsList from '../component/reviewsList/ReviewsList';
import ReviewForm from '../component/reviewForm/ReviewForm';
import NotFound from './NotFound';
import { OFFER_TYPE_LABELS, RATING_PERCENT_PER_POINT } from '../const';
import type { Offer as OfferType } from '../types/offer';
import type { Review as ReviewType } from '../types/review';

type OfferProps = {
  offers: OfferType[];
  reviews: ReviewType[];
};

const NEAR_PLACES_COUNT = 3;

function Offer({ offers, reviews }: OfferProps): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const currentOffer = offers.find((item) => item.id === id);

  if (!currentOffer) {
    return <NotFound />;
  }

  const nearPlaces = offers
    .filter((item) => item.city.name === currentOffer.city.name && item.id !== currentOffer.id)
    .slice(0, NEAR_PLACES_COUNT);

  const bookmarkButtonClassName = currentOffer.isFavorite
    ? 'offer__bookmark-button offer__bookmark-button--active button'
    : 'offer__bookmark-button button';

  const hostAvatarWrapperClassName = currentOffer.host.isPro
    ? 'offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'
    : 'offer__avatar-wrapper user__avatar-wrapper';

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt={currentOffer.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className={bookmarkButtonClassName} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${currentOffer.rating * RATING_PERCENT_PER_POINT}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {OFFER_TYPE_LABELS[currentOffer.type]}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} {currentOffer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={hostAvatarWrapperClassName}>
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={currentOffer.city} offers={nearPlaces} />
          </section>
        </section>
        {nearPlaces.length > 0 && (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList
                offers={nearPlaces}
                variant="near"
                listClassName="near-places__list places__list"
              />
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default Offer;
