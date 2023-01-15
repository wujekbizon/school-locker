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
      <header>
        <span className="tags top-header gradient_preview">&lt;header&gt;</span>
        <h1>Welcome to School Locker the multimedia platform</h1>
        <span className="tags bottom-header gradient_preview">
          &lt;/header&gt;
        </span>
      </header>
      <div className="preview_container">
        {!isLogin && (
          <div className="newlocker_image">
            <img src={img} alt="image" />
          </div>
        )}
      </div>
    </section>
  );
};
export default PreviewForm;
