import './Excalidraw.scss';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  exportToCanvas,
  exportToSvg,
  exportToBlob,
  exportToClipboard,
  Excalidraw as Draw,
  useHandleLibrary,
  MIME_TYPES,
  sceneCoordsToViewportCoords,
  viewportCoordsToSceneCoords,
  restoreElements,
  LiveCollaborationTrigger,
  MainMenu,
  Footer,
  Sidebar,
} from '@excalidraw/excalidraw';
import {
  AppState,
  BinaryFileData,
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
  Gesture,
  LibraryItems,
  PointerDownState as ExcalidrawPointerDownState,
} from '@excalidraw/excalidraw/types/types';
import { NonDeletedExcalidrawElement } from '@excalidraw/excalidraw/types/element/types';
import {
  resolvablePromise,
  withBatchedUpdates,
  withBatchedUpdatesThrottled,
  distance2d,
} from './utils';
import { ResolvablePromise } from '@excalidraw/excalidraw/types/utils';

const Excalidraw = () => {
  return <div>Excalidraw</div>;
};
export default Excalidraw;
