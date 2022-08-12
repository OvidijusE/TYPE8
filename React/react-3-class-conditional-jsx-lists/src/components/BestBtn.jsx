export default function BestBtn(props) {
  // const isButtonLarge = props.large;
  // const isButtonAccent = props.accent;
  return (
    <button className={`BestBtn ${isButtonLarge ? 'large' : ''} ${isButtonLarge ? 'accent' : ''}`}>
      Submit
    </button>
  );
}
