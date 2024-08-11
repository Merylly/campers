import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./VehicleItem.module.css";
import { selectFavorites } from "../../redux/adverts/selectors";
import { toggleFavorite } from "../../redux/adverts/slice";

const VehicleItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((favorite) => favorite._id === item._id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <li className={css.vehicleItem}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={item.gallery[0]} alt="Vehicle image" />
      </div>

      <div className={css.infoWrapper}>
        <div className={css.nameWrapper}>
          <h2 className={css.itemTitle}>{item.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.itemPrice}>€{item.price},00</p>
            {isFavorite ? (
              <Icon
                onClick={handleToggleFavorite}
                className={css.iconFavoriteAdd}
                id="filled-heart"
                width="24"
                height="24"
              />
            ) : (
              <Icon
                onClick={handleToggleFavorite}
                className={css.iconFavorite}
                id="heart"
                width="24"
                height="24"
              />
            )}
          </div>
        </div>

        <div className={css.ratingWrapper}>
          <div className={css.rating}>
            <Icon className={css.star} id="star" width="16" height="16" />
            <p className={css.itemRating}>
              {item.rating}({item.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.rating}>
            <Icon className={css.map} id="map" width="16" height="16" />
            <p className={css.itemLocation}>{item.location}</p>
          </div>
        </div>

        <p className={css.itemDescription}>{item.description}</p>

        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <Icon
              className={css.detailsIconFill}
              id="user"
              width="20"
              height="20"
            />
            <span className={css.detailsText}>{item.adults} aduts</span>
          </li>
          <li className={css.detailsItem}>
            <Icon
              className={css.detailsIcon}
              id="list"
              width="20"
              height="20"
            />
            <span className={css.detailsText}>{item.transmission}</span>
          </li>
          <li className={css.detailsItem}>
            <Icon
              className={css.detailsIconFill}
              id="fuel"
              width="20"
              height="20"
            />
            <span className={css.detailsText}>{item.engine}</span>
          </li>
          {item.details.kitchen !== 0 && (
            <li className={css.detailsItem}>
              <Icon
                className={css.detailsIcon}
                id="food"
                width="20"
                height="20"
              />
              <span className={css.detailsText}>Kitchen</span>
            </li>
          )}
          <li className={css.detailsItem}>
            <Icon className={css.detailsIcon} id="bed" width="20" height="20" />
            <span className={css.detailsText}>{item.details.beds} beds</span>
          </li>
          {item.details.airConditioner !== 0 && (
            <li className={css.detailsItem}>
              <Icon
                className={css.detailsIconFill}
                id="wind"
                width="20"
                height="20"
              />
              <span className={css.detailsText}>AC</span>
            </li>
          )}
        </ul>
        <button className={css.btnShowMore} type="button">
          Show more
        </button>
      </div>
    </li>
  );
};

export default VehicleItem;
