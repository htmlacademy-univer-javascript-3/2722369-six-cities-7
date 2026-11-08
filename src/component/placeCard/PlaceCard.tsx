import { Link } from 'react-router-dom';
import { OFFER_TYPE_LABELS, RATING_PERCENT_PER_POINT } from '../../const';
import type { Offer } from '../../types/offer';

export type PlaceCardVariant = 'cities' | 'favorites' | 'near';

type PlaceCardProps = {
  offer: Offer;
  variant?: PlaceCardVariant;
  isActive?: boolean;
  onCardHover?: (id: string | null) => void;
};

type PlaceCardVariantSettings = {
  cardClassName: string;
  imageWrapperClassName: string;
  infoClassName: string;
  imageWidth: number;
  imageHeight: number;
};

const VARIANT_SETTINGS: Record<PlaceCardVariant, PlaceCardVariantSettings> = {
  cities: {
    cardClassName: 'cities__card place-card',
    imageWrapperClassName: 'cities__image-wrapper place-card__image-wrapper',
    infoClassName: 'place-card__info',
    imageWidth: 260,
    imageHeight: 200,
  },
  favorites: {
    cardClassName: 'favorites__card place-card',
    imageWrapperClassName: 'favorites__image-wrapper place-card__image-wrapper',
    infoClassName: 'favorites__card-info place-card__info',
    imageWidth: 150,
    imageHeight: 110,
  },
  near: {
    cardClassName: 'near-places__card place-card',
    imageWrapperClassName: 'near-places__image-wrapper place-card__image-wrapper',
    infoClassName: 'place-card__info',
    imageWidth: 260,
    imageHeight: 200,
  },
};

function PlaceCard({ offer, variant = 'cities', isActive = false, onCardHover }: PlaceCardProps): JSX.Element {
  const settings = VARIANT_SETTINGS[variant];

  const cardClassName = isActive ? `${settings.cardClassName} place-card--active` : settings.cardClassName;
  const bookmarkButtonClassName = offer.isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const handleMouseEnter = () => onCardHover?.(offer.id);
  const handleMouseLeave = () => onCardHover?.(null);

  return (
    <article
      className={cardClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={settings.imageWrapperClassName}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={settings.imageWidth}
            height={settings.imageHeight}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={settings.infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClassName} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * RATING_PERCENT_PER_POINT}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{OFFER_TYPE_LABELS[offer.type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
