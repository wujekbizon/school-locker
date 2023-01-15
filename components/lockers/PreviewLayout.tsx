import './PreviewLayout.scss';

type Props = {
  children: React.ReactNode;
};
const PreviewLayout = ({ children }: Props) => {
  return (
    <div className="preview_wrapper">
      <span className="tags top-tags">&lt;body&gt;</span>
      {children}
      <span className="tags bottom-tags">
        &lt;body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  );
};
export default PreviewLayout;
