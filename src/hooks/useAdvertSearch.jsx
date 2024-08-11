import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/adverts/operations";
import { incrementPage } from "../redux/adverts/slice";
import {
  selectCurrentPage,
  selectData,
  selectHasMore,
  //   selectIsError,
  selectIsLoading,
} from "../redux/adverts/selectors";

const useAdvertSearch = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectData);

  //   const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const loadMore = () => {
    if (hasMore) {
      dispatch(incrementPage());
    }
  };

  return { hasMore, isLoading, currentPage, loadMore, items };
};

export default useAdvertSearch;
