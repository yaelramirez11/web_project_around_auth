import ImagePopup from "../ImagePopup/ImagePopup";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
export default function Card({
  card,
  handleOpenPopup,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.isLiked;
  const cardLikeButtonClassName = `element__button ${
    isLiked ? "element__button_active" : ""
  }`;

  function handleImageClick() {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <div className="element__rectangle">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleImageClick}
        />
        <div className="element__info">
          <h2 className="element__text">{card.name}</h2>
          <button
            aria-label="Like card"
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          {isOwn && (
            <button
              aria-label="Delete card"
              className="element__delete-button"
              type="button"
              onClick={handleDeleteClick}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
}
