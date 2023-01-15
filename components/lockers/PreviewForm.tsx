import './PreviewForm.scss';

type PreviewFormProps = {
  img: string;
  isLogin: boolean;
  name: string;
  school: string;
  title: string;
  classroom: string;
  privacy: string;
  email: string;
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
            <div className="info-title">
              <span>Locker Title:</span>
              <h2>{title}</h2>
            </div>
            <div className="info-school">
              <span>Education:</span>
              <h2>{school}</h2>
            </div>
            <div className="info-school">
              <span>Class:</span>
              <h2>{classroom}</h2>
            </div>

            <div className="public">
              <p
                className={
                  privacy === 'public' ? 'gradient_text' : 'gradient_private'
                }
              >
                {privacy} account
              </p>
            </div>
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
