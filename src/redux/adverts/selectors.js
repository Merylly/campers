export const selectIsError = (state) => state.adverts.isError;
export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectData = (state) => state.adverts.items;
export const selectCurrentPage = (state) => state.adverts.currentPage;
export const selectHasMore = (state) => state.adverts.hasMore;
export const selectFavorites = (state) => state.adverts.favorites;
