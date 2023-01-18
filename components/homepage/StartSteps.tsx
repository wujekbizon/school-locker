import './StartSteps.scss';

type Props = {
  number: string;
  text: string;
};
const StartSteps = ({ number, text }: Props) => {
  return (
    <div className="start-steps_container">
      <div className="start-steps_wrapper">
        <p className="start-steps_item">{number}</p>
      </div>
      <p className="start-steps_content">{text}</p>
    </div>
  );
};
export default StartSteps;
