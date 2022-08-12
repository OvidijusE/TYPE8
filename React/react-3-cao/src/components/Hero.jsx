export default function HeroBlock() {
  const title = 'Info here';
  const subtitle = 'Info subtitle';
  return (
    <div className='title-subtitle'>
      <h1>{title ? 'Info here' : ''}</h1>
      <h2>{subtitle ? 'Info subtitle' : ''}</h2>
    </div>
  );
}

const title = ({ hasText }) => {
  <div className='title'>{hasText === true && <h1>Info here</h1>}</div>;
};
