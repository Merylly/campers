import css from "./VehicleList.module.css";
import VehicleItem from "../VehicleItem/VehicleItem";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../redux/adverts/selectors";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";

const VehicleList = () => {
  // const { items } = useAdvertSearch();
  // console.log(items)

  const dispatch = useDispatch();
  const items = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {Array.isArray(items) &&
        items.map((item) => {
          return <VehicleItem key={item._id} item={item} />;
        })}
    </ul>
  );
};

export default VehicleList;
