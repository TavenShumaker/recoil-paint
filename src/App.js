import React from 'react';
import Main from './components/Main';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Recoilize from './package';
import * as atoms from './recoil/atoms.js';
import * as selectors from './recoil/selectors.js'


function App() {

  const {canvasLayoutState, backgroundColorState, itemIdsState, selectedIdsState, movingItemIdsState, privateItemStateWithId} = atoms
  const { statisticsQuery, itemWithId, selectedItemsSelector, selectionBoundingBox } = selectors;

  const itemIds = useRecoilValue(itemIdsState).map(itemId => privateItemStateWithId(itemId))
  const itemIdSelectors = useRecoilValue(itemIdsState).map(itemId => itemWithId(itemId))

  return [
    <Recoilize 
      nodes={[
        canvasLayoutState,
        backgroundColorState,
        itemIdsState,
        selectedIdsState,
        movingItemIdsState,
        ...itemIds,
        ...itemIdSelectors,
        selectionBoundingBox,
        selectedItemsSelector,
      ]} />,
    <Main />
  ]
}

export default App;
