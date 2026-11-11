import type { CityName } from '../../types/offer';

type CitiesListProps = {
  cities: CityName[];
  currentCity: CityName;
  onCityChange: (city: CityName) => void;
};

function CitiesList({ cities, currentCity, onCityChange }: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const linkClassName = city === currentCity
          ? 'locations__item-link tabs__item tabs__item--active'
          : 'locations__item-link tabs__item';

        return (
          <li className="locations__item" key={city}>
            <a
              className={linkClassName}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;
