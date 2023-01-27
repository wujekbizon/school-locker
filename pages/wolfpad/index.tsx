import dynamic from 'next/dynamic';

const DynamicCodeCell = dynamic(
  () => import('../../components/wolfpad/CodeCell/CodeCell'),
  {
    loading: () => (
      <p className="dynamic-loader">Initializing Code Editor Cell...</p>
    ),
    ssr: false,
  }
);

const DynamicTextEditor = dynamic(
  () => import('../../components/wolfpad/TextEditor/TextEditor'),
  {
    loading: () => (
      <p className="dynamic-loader">Initializing Text Editor...</p>
    ),
    ssr: false,
  }
);

const PlaygroundPage = () => {
  return (
    <>
      <DynamicTextEditor />
      <DynamicCodeCell />
    </>
  );
};
export default PlaygroundPage;
