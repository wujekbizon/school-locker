import './Excalidraw.scss';
import React, { useState, useRef, useCallback } from 'react';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import ViewCozyOutlinedIcon from '@mui/icons-material/ViewCozyOutlined';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
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
  Button,
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
import CustomFooter from './footer/CustomFooter';
import MobileFooter from './footer/MobileFooter';
import {
  resolvablePromise,
  withBatchedUpdates,
  withBatchedUpdatesThrottled,
  distance2d,
} from './utils';
import { ResolvablePromise } from '@excalidraw/excalidraw/types/utils';
import { Comment, PointerDownState } from './types';

import initialData from './initialData';

declare global {
  interface Window {
    ExcalidrawLib: any;
  }
}

const COMMENT_ICON_DIMENSION = 32;
const COMMENT_INPUT_HEIGHT = 50;
const COMMENT_INPUT_WIDTH = 150;

const Excalidraw = () => {
  const appRef = useRef<any>(null);
  const [viewModeEnabled, setViewModeEnabled] = useState(false);
  const [zenModeEnabled, setZenModeEnabled] = useState(false);
  const [gridModeEnabled, setGridModeEnabled] = useState(false);
  const [blobUrl, setBlobUrl] = useState('');
  const [canvasUrl, setCanvasUrl] = useState('');
  const [exportWithDarkMode, setExportWithDarkMode] = useState(false);
  const [exportEmbedScene, setExportEmbedScene] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isCollaborating, setIsCollaborating] = useState(false);
  const [commentIcons, setCommentIcons] = useState<{ [id: string]: Comment }>(
    {}
  );
  const [comment, setComment] = useState<Comment | null>(null);

  // const initialStatePromiseRef = useRef<{
  //   promise: ResolvablePromise<ExcalidrawInitialDataState | null>;
  // }>({ promise: null! });
  // if (!initialStatePromiseRef.current.promise) {
  //   initialStatePromiseRef.current.promise =
  //     resolvablePromise() as ExcalidrawInitialDataState | null;
  // }

  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  useHandleLibrary({ excalidrawAPI });

  const renderTopRightUI = (isMobile: boolean) => {
    return (
      <>
        {!isMobile && (
          <LiveCollaborationTrigger
            isCollaborating={isCollaborating}
            onSelect={() => {
              console.log('Collab dialog clicked');
            }}
          />
        )}
        {!isMobile && (
          <Button
            onClick={onCopy.bind(null, 'png')}
            onSelect={() => console.log('copy as PNG')}
            className="btn_custom-element"
          >
            <CopyAllOutlinedIcon fontSize="small" />
            PNG
          </Button>
        )}
        {!isMobile && (
          <Button
            onClick={onCopy.bind(null, 'svg')}
            onSelect={() => console.log('copy as SVG')}
            className="btn_custom-element"
          >
            <CopyAllOutlinedIcon fontSize="small" />
            SVG
          </Button>
        )}
        {!isMobile && (
          <Button
            onClick={onCopy.bind(null, 'json')}
            onSelect={() => console.log('copy as JSON')}
            className="btn_custom-element"
          >
            <CopyAllOutlinedIcon fontSize="small" />
            JSON
          </Button>
        )}
        {!isMobile && (
          <Button
            onSelect={() => console.log('button')}
            onClick={() => {
              let libraryItems = [] as any;

              initialData.libraryItems.forEach((libraryItem, index) => {
                const item = {
                  status: 'published',
                  id: index.toString(),
                  created: index + 1,
                  elements: libraryItem,
                };

                libraryItems.push(item);
              });

              excalidrawAPI?.updateLibrary({
                libraryItems,
              });
            }}
            className="btn_custom-element"
          >
            <SyncAltOutlinedIcon fontSize="small" />
            Library
          </Button>
        )}
      </>
    );
  };

  const updateScene = () => {
    const sceneData = {
      elements: restoreElements(
        [
          {
            type: 'rectangle',
            version: 141,
            versionNonce: 361174001,
            isDeleted: false,
            id: 'oDVXy8D6rom3H1-LLH2-f',
            fillStyle: 'hachure',
            strokeWidth: 1,
            strokeStyle: 'solid',
            roughness: 1,
            opacity: 100,
            angle: 0,
            x: 100.50390625,
            y: 93.67578125,
            strokeColor: '#c92a2a',
            backgroundColor: 'transparent',
            width: 186.47265625,
            height: 141.9765625,
            seed: 1968410350,
            groupIds: [],
            boundElements: null,
            locked: false,
            link: null,
            updated: 1,
            roundness: {
              type: 3,
              value: 32,
            },
          },
        ],
        null
      ),
      appState: {
        viewBackgroundColor: '#edf2ff',
      },
    };
    excalidrawAPI?.updateScene(sceneData);
  };

  const onLinkOpen = useCallback(
    (
      element: NonDeletedExcalidrawElement,
      event: CustomEvent<{
        nativeEvent: MouseEvent | React.PointerEvent<HTMLCanvasElement>;
      }>
    ) => {
      const link = element.link;
      if (!link) {
        return;
      }
      const { nativeEvent } = event.detail;
      const isNewTab = nativeEvent.ctrlKey || nativeEvent.metaKey;
      const isNewWindow = nativeEvent.shiftKey;
      const isInternalLink =
        link.startsWith('/') || link.includes(window.location.origin);
      if (isInternalLink && !isNewTab && !isNewWindow) {
        // signal that we're handling the redirect ourselves
        event.preventDefault();
        // do a custom redirect, such as passing to react-router
        // ...
      }
    },
    []
  );

  const onCopy = async (type: 'png' | 'svg' | 'json') => {
    if (!excalidrawAPI) {
      return false;
    }
    await exportToClipboard({
      elements: excalidrawAPI.getSceneElements(),
      appState: excalidrawAPI.getAppState(),
      files: excalidrawAPI.getFiles(),
      type,
    });
    console.log(`Copied to clipboard as ${type} successfully`);
  };

  const [pointerData, setPointerData] = useState<{
    pointer: { x: number; y: number };
    button: 'down' | 'up';
    pointersMap: Gesture['pointers'];
  } | null>(null);

  const onPointerDown = (
    activeTool: AppState['activeTool'],
    pointerDownState: ExcalidrawPointerDownState
  ) => {
    if (activeTool.type === 'custom' && activeTool.customType === 'comment') {
      const { x, y } = pointerDownState.origin;
      setComment({ x, y, value: '' });
    }
  };

  const rerenderCommentIcons = () => {
    if (!excalidrawAPI) {
      return false;
    }
    const commentIconsElements = appRef.current.querySelectorAll(
      '.comment-icon'
    ) as HTMLElement[];
    commentIconsElements.forEach((ele) => {
      const id = ele.id;
      const appstate = excalidrawAPI.getAppState();
      const { x, y } = sceneCoordsToViewportCoords(
        { sceneX: commentIcons[id].x, sceneY: commentIcons[id].y },
        appstate
      );
      ele.style.left = `${
        x - COMMENT_ICON_DIMENSION / 2 - appstate!.offsetLeft
      }px`;
      ele.style.top = `${
        y - COMMENT_ICON_DIMENSION / 2 - appstate!.offsetTop
      }px`;
    });
  };

  const onPointerMoveFromPointerDownHandler = (
    pointerDownState: PointerDownState
  ) => {
    return withBatchedUpdatesThrottled((event) => {
      if (!excalidrawAPI) {
        return false;
      }
      const { x, y } = viewportCoordsToSceneCoords(
        {
          clientX: event.clientX - pointerDownState.hitElementOffsets.x,
          clientY: event.clientY - pointerDownState.hitElementOffsets.y,
        },
        excalidrawAPI.getAppState()
      );
      setCommentIcons({
        ...commentIcons,
        [pointerDownState.hitElement.id!]: {
          ...commentIcons[pointerDownState.hitElement.id!],
          x,
          y,
        },
      });
    });
  };

  const onPointerUpFromPointerDownHandler = (
    pointerDownState: PointerDownState
  ) => {
    return withBatchedUpdates((event) => {
      window.removeEventListener('pointermove', pointerDownState.onMove);
      window.removeEventListener('pointerup', pointerDownState.onUp);
      excalidrawAPI?.setActiveTool({ type: 'selection' });
      const distance = distance2d(
        pointerDownState.x,
        pointerDownState.y,
        event.clientX,
        event.clientY
      );
      if (distance === 0) {
        if (!comment) {
          setComment({
            x: pointerDownState.hitElement.x + 60,
            y: pointerDownState.hitElement.y,
            value: pointerDownState.hitElement.value,
            id: pointerDownState.hitElement.id,
          });
        } else {
          setComment(null);
        }
      }
    });
  };

  const saveComment = () => {
    const generateRandomId = () => {
      return (Math.random() * Math.random()).toString();
    };

    if (!comment) {
      return;
    }

    if (!comment.id && !comment.value) {
      setComment(null);
      return;
    }
    const id = comment.id || generateRandomId();
    setCommentIcons({
      ...commentIcons,
      [id]: {
        x: comment.id ? comment.x - 60 : comment.x,
        y: comment.y,
        id,
        value: comment.value,
      },
    });
    setComment(null);
  };

  const renderCommentIcons = () => {
    return Object.values(commentIcons).map((commentIcon) => {
      if (!excalidrawAPI) {
        return false;
      }
      const appState = excalidrawAPI.getAppState();
      const { x, y } = sceneCoordsToViewportCoords(
        { sceneX: commentIcon.x, sceneY: commentIcon.y },
        excalidrawAPI.getAppState()
      );
      return (
        <div
          id={commentIcon.id}
          key={commentIcon.id}
          style={{
            top: `${y - COMMENT_ICON_DIMENSION / 2 - appState!.offsetTop}px`,
            left: `${x - COMMENT_ICON_DIMENSION / 2 - appState!.offsetLeft}px`,
            position: 'absolute',
            zIndex: 1,
            width: `${COMMENT_ICON_DIMENSION}px`,
            height: `${COMMENT_ICON_DIMENSION}px`,
            cursor: 'pointer',
            touchAction: 'none',
          }}
          className="comment-icon"
          onPointerDown={(event) => {
            event.preventDefault();
            if (comment) {
              commentIcon.value = comment.value;
              saveComment();
            }
            const pointerDownState: any = {
              x: event.clientX,
              y: event.clientY,
              hitElement: commentIcon,
              hitElementOffsets: { x: event.clientX - x, y: event.clientY - y },
            };
            const onPointerMove =
              onPointerMoveFromPointerDownHandler(pointerDownState);
            const onPointerUp =
              onPointerUpFromPointerDownHandler(pointerDownState);
            window.addEventListener('pointermove', onPointerMove);
            window.addEventListener('pointerup', onPointerUp);

            pointerDownState.onMove = onPointerMove;
            pointerDownState.onUp = onPointerUp;

            excalidrawAPI?.setActiveTool({
              type: 'custom',
              customType: 'comment',
            });
          }}
        >
          <div className="comment-avatar">
            <img src="/images/download.png" alt="doremon" />
          </div>
        </div>
      );
    });
  };

  const renderComment = () => {
    if (!comment) {
      return null;
    }
    const appState = excalidrawAPI?.getAppState()!;
    const { x, y } = sceneCoordsToViewportCoords(
      { sceneX: comment.x, sceneY: comment.y },
      appState
    );
    let top = y - COMMENT_ICON_DIMENSION / 2 - appState.offsetTop;
    let left = x - COMMENT_ICON_DIMENSION / 2 - appState.offsetLeft;

    if (
      top + COMMENT_INPUT_HEIGHT <
      appState.offsetTop + COMMENT_INPUT_HEIGHT
    ) {
      top = COMMENT_ICON_DIMENSION / 2;
    }
    if (top + COMMENT_INPUT_HEIGHT > appState.height) {
      top = appState.height - COMMENT_INPUT_HEIGHT - COMMENT_ICON_DIMENSION / 2;
    }
    if (
      left + COMMENT_INPUT_WIDTH <
      appState.offsetLeft + COMMENT_INPUT_WIDTH
    ) {
      left = COMMENT_ICON_DIMENSION / 2;
    }
    if (left + COMMENT_INPUT_WIDTH > appState.width) {
      left = appState.width - COMMENT_INPUT_WIDTH - COMMENT_ICON_DIMENSION / 2;
    }

    return (
      // here I can style comment textarea
      <textarea
        className="comment"
        style={{
          top: `${top}px`,
          left: `${left}px`,
          position: 'absolute',
          zIndex: 1,
          height: `${COMMENT_INPUT_HEIGHT}px`,
          width: `${COMMENT_INPUT_WIDTH}px`,
        }}
        ref={(ref) => {
          setTimeout(() => ref?.focus());
        }}
        placeholder={comment.value ? 'Reply' : 'Comment'}
        value={comment.value}
        onChange={(event) => {
          setComment({ ...comment, value: event.target.value });
        }}
        onBlur={saveComment}
        onKeyDown={(event) => {
          if (!event.shiftKey && event.key === 'Enter') {
            event.preventDefault();
            saveComment();
          }
        }}
      />
    );
  };

  const renderMenu = () => {
    return (
      <MainMenu>
        <MainMenu.DefaultItems.SaveToActiveFile />
        <MainMenu.DefaultItems.SaveAsImage />
        <MainMenu.DefaultItems.Export />
        <MainMenu.DefaultItems.ClearCanvas />
        <MainMenu.DefaultItems.Help />
        <MainMenu.Separator />
        <MainMenu.ItemCustom>
          <div className="theme-mode_container dropdown-menu-item">
            {theme === 'light' && (
              <>
                <NightsStayOutlinedIcon
                  fontSize="inherit"
                  className="light-icon"
                />
                <button onClick={() => setTheme('dark')}>Dark mode</button>
              </>
            )}
            {theme === 'dark' && (
              <>
                <LightModeOutlinedIcon className="dark-icon" />
                <button className="dark-btn" onClick={() => setTheme('light')}>
                  Light mode
                </button>
              </>
            )}
          </div>
        </MainMenu.ItemCustom>
        <MainMenu.ItemCustom>
          <div
            className="theme-mode_container dropdown-menu-item dropdown-menu-custom"
            onClick={() => setViewModeEnabled(!viewModeEnabled)}
          >
            <ViewCozyOutlinedIcon fontSize="inherit" />
            <button>View mode</button>
          </div>
        </MainMenu.ItemCustom>
        <MainMenu.ItemCustom>
          <div
            className="theme-mode_container dropdown-menu-item dropdown-menu-custom"
            onClick={() => setGridModeEnabled(!gridModeEnabled)}
          >
            <GridOnOutlinedIcon fontSize="inherit" />
            <button>Grid mode</button>
          </div>
        </MainMenu.ItemCustom>
        <MainMenu.Separator />
        <MainMenu.DefaultItems.ChangeCanvasBackground />
        {excalidrawAPI && <MobileFooter excalidrawAPI={excalidrawAPI} />}
      </MainMenu>
    );
  };

  return (
    <div className="excalidraw_app" ref={appRef}>
      <div className="button-wrapper">
        {/* <label>
          <input
            type="checkbox"
            checked={zenModeEnabled}
            onChange={() => setZenModeEnabled(!zenModeEnabled)}
          />
          Zen mode
        </label> */}

        {/* <div className="excalidraw-pointer_container">
          <div>x: {pointerData?.pointer.x ?? 0}</div>
          <div>y: {pointerData?.pointer.y ?? 0}</div>
        </div> */}
      </div>
      <div className="excalidraw-wrapper">
        <Draw
          ref={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}
          // initialData={initialStatePromiseRef.current.promise}
          onChange={(elements, state) => {
            // console.info('Elements :', elements, 'State : ', state);
          }}
          onPointerUpdate={(payload: {
            pointer: { x: number; y: number };
            button: 'down' | 'up';
            pointersMap: Gesture['pointers'];
          }) => setPointerData(payload)}
          viewModeEnabled={viewModeEnabled}
          zenModeEnabled={zenModeEnabled}
          gridModeEnabled={gridModeEnabled}
          theme={theme}
          name="Custom name of drawing"
          UIOptions={{ canvasActions: { loadScene: false } }}
          renderTopRightUI={renderTopRightUI}
          onLinkOpen={onLinkOpen}
          onPointerDown={onPointerDown}
          onScrollChange={rerenderCommentIcons}
          // renderSidebar={renderSidebar}
        >
          {excalidrawAPI && (
            <Footer>
              <CustomFooter excalidrawAPI={excalidrawAPI} />
            </Footer>
          )}
          {renderMenu()}
        </Draw>
        {Object.keys(commentIcons || []).length > 0 && renderCommentIcons()}
        {comment && renderComment()}
      </div>
      {/* <div className="export-wrapper button-wrapper">
        <label className="export-wrapper__checkbox">
          <input
            type="checkbox"
            checked={exportWithDarkMode}
            onChange={() => setExportWithDarkMode(!exportWithDarkMode)}
          />
          Export with dark mode
        </label>
        <label className="export-wrapper__checkbox">
          <input
            type="checkbox"
            checked={exportEmbedScene}
            onChange={() => setExportEmbedScene(!exportEmbedScene)}
          />
          Export with embed scene
        </label>
        <button
          onClick={async () => {
            if (!excalidrawAPI) {
              return;
            }
            const svg = await exportToSvg({
              elements: excalidrawAPI?.getSceneElements(),
              appState: {
                ...initialData.appState,
                exportWithDarkMode,
                exportEmbedScene,
                width: 300,
                height: 100,
              },
              files: excalidrawAPI?.getFiles(),
            });
            appRef.current.querySelector('.export-svg').innerHTML =
              svg.outerHTML;
          }}
        >
          Export to SVG
        </button>
        <div className="export export-svg"></div>

        <button
          onClick={async () => {
            if (!excalidrawAPI) {
              return;
            }
            const blob = await exportToBlob({
              elements: excalidrawAPI?.getSceneElements(),
              mimeType: 'image/png',
              appState: {
                ...initialData.appState,
                exportEmbedScene,
                exportWithDarkMode,
              },
              files: excalidrawAPI?.getFiles(),
            });
            setBlobUrl(window.URL.createObjectURL(blob));
          }}
        >
          Export to Blob
        </button>
        <div className="export export-blob">
          <img src={blobUrl} alt="" />
        </div>

        <button
          onClick={async () => {
            if (!excalidrawAPI) {
              return;
            }
            const canvas = await exportToCanvas({
              elements: excalidrawAPI.getSceneElements(),
              appState: {
                ...initialData.appState,
                exportWithDarkMode,
              },
              files: excalidrawAPI.getFiles(),
            });
            const ctx = canvas.getContext('2d')!;
            ctx.font = '30px Virgil';
            ctx.strokeText('My custom text', 50, 60);
            setCanvasUrl(canvas.toDataURL());
          }}
        >
          Export to Canvas
        </button>
        <div className="export export-canvas">
          <img src={canvasUrl} alt="" />
        </div>
      </div> */}
    </div>
  );
};
export default Excalidraw;
