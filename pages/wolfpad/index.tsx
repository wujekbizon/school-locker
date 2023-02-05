import dynamic from 'next/dynamic';

const DynamicCellList = dynamic(
  () => import('../../components/wolfpad/CellList/CellList'),
  {
    loading: () => <p className="dynamic-loader">Loading App...</p>,
    ssr: false,
  }
);

const PlaygroundPage = () => {
  return (
    <div style={{ padding: '64px' }}>
      <DynamicCellList />
    </div>
  );
};
export default PlaygroundPage;
