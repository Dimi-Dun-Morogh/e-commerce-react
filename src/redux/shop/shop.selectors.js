import { createSelector } from 'reselect';
import memoize from 'lodash-memoize';

const COLLECTIONS_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection.id === COLLECTIONS_ID_MAP[collectionUrlParam]),
  ),
);
