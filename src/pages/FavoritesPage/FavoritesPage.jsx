import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import VehicleItem from "../../components/VehicleItem/VehicleItem";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length === 0 ? (
        <h2 className={css.text}>There is no vehicles yet.</h2>
      ) : (
        <ul className={css.list}>
          {Array.isArray(favorites) &&
            favorites.map((item) => {
              return <VehicleItem key={item._id} item={item} />;
            })}
        </ul>
      )}
    </>
  );
};

export default FavoritesPage;
