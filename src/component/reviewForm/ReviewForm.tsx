import { Fragment, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const';

type ReviewFormState = {
  rating: number;
  review: string;
};

type RatingOption = {
  value: number;
  id: string;
  title: string;
};

const RATING_OPTIONS: RatingOption[] = [
  { value: 5, id: '5-stars', title: 'perfect' },
  { value: 4, id: '4-stars', title: 'good' },
  { value: 3, id: '3-stars', title: 'not bad' },
  { value: 2, id: '2-stars', title: 'badly' },
  { value: 1, id: '1-star', title: 'terribly' },
];

const INITIAL_FORM_STATE: ReviewFormState = {
  rating: 0,
  review: '',
};

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewFormState>(INITIAL_FORM_STATE);

  const isSubmitDisabled = formData.rating === 0 || formData.review.length < MIN_REVIEW_LENGTH;

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({ ...prevFormData, rating: Number(evt.target.value) }));
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevFormData) => ({ ...prevFormData, review: evt.target.value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // Отправка отзыва на сервер появится в следующем задании
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_OPTIONS.map((option) => (
          <Fragment key={option.id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={option.value}
              id={option.id}
              type="radio"
              checked={formData.rating === option.value}
              onChange={handleRatingChange}
            />
            <label htmlFor={option.id} className="reviews__rating-label form__rating-label" title={option.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        maxLength={MAX_REVIEW_LENGTH}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
