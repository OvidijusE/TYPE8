import './app.css';
import img1 from './newyork.jpg';
const userName = 'James';

const subTitle = <h2>I am subtitle</h2>;

function add(n1, n2) {
  return n1 + n2;
}

function App() {
  return (
    <div>
      <section>
        <article className='card'>
          <img className='card-image' src={img1} alt='Card' />
          <div className='card-content'>
            <h3>New York</h3>
            <p className='date'>{new Date().toDateString()}</p>
            <p className='text'>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
