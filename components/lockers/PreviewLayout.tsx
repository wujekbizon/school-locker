import './PreviewLayout.scss';

type Props = {
  children: React.ReactNode;
};
const PreviewLayout = ({ children }: Props) => {
  return (
    <div className="preview_wrapper">
      <span className="tags top-tags gradient_preview">&lt;body&gt;</span>
      {children}
      <span className="tags bottom-tags gradient_preview">
        &lt;body&gt;
        <br />
        <span className="bottom-tag-html gradient_preview">&lt;/html&gt;</span>
      </span>
    </div>
  );
};
export default PreviewLayout;
