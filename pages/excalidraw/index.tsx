import dynamic from 'next/dynamic';

const DynamicExcalidraw = dynamic(
  () => import('../../components/excalidraw/Excalidraw'),
  {
    loading: () => (
      <p className="dynamic-loader">
        Initializing The Excalidraw, please wait...
      </p>
    ),
  }
);

const ExcalidrawPage = () => {
  return <DynamicExcalidraw />;
};
export default ExcalidrawPage;
