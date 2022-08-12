export default function HeaderSubtitle(props) {
  return (
    <p className='header-subtitle'>
      {props.subtitle}
      <br />
      {props.subtitle1}
    </p>
  );
}
