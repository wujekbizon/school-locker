import './PreviewForm.scss';

type PreviewFormProps = {
  img: string;
  isLogin: boolean;
  name: string;
  school: string;
  title: string;
  classroom: string;
  privacy: string;
};

const PreviewForm = ({
  img,
  isLogin,
  name,
  school,
  title,
  classroom,
  privacy,
}: PreviewFormProps) => {
  return (
    <section className="preview_form-container">
      <header className="preview_header">
        <h1>
          Welcome{' '}
          <span className="gradient_preview ">{name.substring(0, 25)} </span>to
          School Locker <span className="span gradient_preview">,</span>
          <br />
          our multimedia platform.
        </h1>
      </header>
      {!isLogin && (
        <div className="preview_container">
          <div className="newlocker_info">
            <div>{title}</div>
            <div>{school}</div>
            <div>{classroom}</div>
            <div>{privacy}</div>
          </div>
          <div className="newlocker_image">
            <img src={img} alt="image" />
          </div>
        </div>
      )}
    </section>
  );
};
export default PreviewForm;
