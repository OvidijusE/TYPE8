export default function SectionTitle(props) {
  return (
    <div className='title-subtitle-section'>
      <h1 className='main-title'>{props.title}</h1>
      <p className='main-subtitle'>{props.subtitle}</p>
      <hr className='main-subtitle-hr' />
    </div>
  );
}
