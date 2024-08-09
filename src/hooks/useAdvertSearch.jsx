import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/adverts/operations";
import { incrementPage } from "../redux/adverts/slice";
import {
  selectCurrentPage,
  selectHasMore,
  //   selectIsError,
  selectIsLoading,
} from "../redux/adverts/selectors";

const useAdvertSearch = () => {
  const dispatch = useSelector(useDispatch);

  //   const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    if (hasMore && !isLoading) {
      dispatch(fetchAdverts({ page: currentPage }));
    }
  }, [dispatch, currentPage, hasMore, isLoading]);

  const loadMore = () => {
    if (hasMore) {
      dispatch(incrementPage());
    }
  };

  return { hasMore, isLoading, currentPage, loadMore };
};

export default useAdvertSearch;
