import SideBar from "../components/Sidebar/Sidebar";
import VehicleList from "../components/VehicleList/VehicleList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

import useAdvertSearch from "../hooks/useAdvertSearch";

const CatalogPage = () => {
  const { hasMore, isLoading } = useAdvertSearch();

  return (
    <div>
      <SideBar />
      <VehicleList />
      {hasMore && !isLoading && <LoadMoreBtn />}
    </div>
  );
};

export default CatalogPage;
