import useAdvertSearch from "../../hooks/useAdvertSearch";
import css from "./VehicleList.module.css";
import VehicleItem from '../VehicleItem/VehicleItem'

const VehicleList = () => {
    const { items } = useAdvertSearch();
    console.log(items)
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
