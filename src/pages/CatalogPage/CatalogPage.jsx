import SideBar from "../../components/Sidebar/Sidebar";
import VehicleList from "../../components/VehicleList/VehicleList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

import useAdvertSearch from "../../hooks/useAdvertSearch";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const { hasMore, isLoading } = useAdvertSearch();

  return (
    <div>
      <div className={css.wrapper}>
        <SideBar />
        <VehicleList />
      </div>
      {hasMore && !isLoading && <LoadMoreBtn />}
    </div>
  );
};

export default CatalogPage;
