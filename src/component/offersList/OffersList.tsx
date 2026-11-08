import { useState } from 'react';
import PlaceCard from '../placeCard/PlaceCard';
import type { PlaceCardVariant } from '../placeCard/PlaceCard';
import type { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  variant?: PlaceCardVariant;
  listClassName?: string;
};

function OffersList({
  offers,
  variant = 'cities',
  listClassName = 'cities__places-list places__list tabs__content',
}: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleCardHover = (id: string | null) => setActiveOfferId(id);

  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          variant={variant}
          isActive={offer.id === activeOfferId}
          onCardHover={handleCardHover}
        />
      ))}
    </div>
  );
}

export default OffersList;
