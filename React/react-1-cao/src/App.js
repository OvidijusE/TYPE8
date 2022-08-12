import './App.css';
import img1 from './company.jpg';

function App() {
  return (
    <div className='main-container'>
      <div className='logo-container'>
        <img className='company-logo' src={img1} alt='logo' />
      </div>

      <header className='App-header'>
        <nav className='main-nav'>
          <a href='/' className='nav-link'>
            Home
          </a>
          <a href='/' className='nav-link'>
            Product
          </a>
          <a href='/' className='nav-link'>
            Company
          </a>
          <a href='/' className='nav-link'>
            Contact
          </a>
        </nav>
        <div className='header-image-container'>
          <p className='header-image-text'>Header Image</p>
        </div>
      </header>
      <article className='about-company-services'>
        <div className='about about-section'>
          <h2 className='about-title'>About</h2>
          <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, veritatis? Quia dicta
            ullam eius. Doloremque porro odio delectus eos voluptates!
          </p>
        </div>
        <div className='company about-section'>
          <h2 className='about-title'>Company</h2>
          <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non tenetur dolore
            enim modi tempora minima numquam deleniti, assumenda maiores.
          </p>
        </div>
        <div className='services about-section'>
          <h2 className='about-title'>Services</h2>
          <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa quaerat ut cum id
            nisi, unde architecto necessitatibus ex quidem.
          </p>
        </div>
      </article>
      <main className='content-container'>
        <div className='left-part'>
          <div className='content'>
            <h2 className='content-title'>Content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis enim illo
              nihil qui repellat eos accusamus, et similique odit, molestiae distinctio quo
              architecto vel fuga, exercitationem dolorem a molestias.
            </p>
          </div>
          <div className='sub-header'>
            <h3 className='sub-header'>Sub header</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum aperiam
              aliquam ullam animi dolor fugit, amet sapiente? Dolores itaque aspernatur nobis, autem
              cupiditate iusto in sapiente quo et? Quam velit vel hic quibusdam, at error adipisci
              nihil similique corporis.
            </p>
          </div>
        </div>

        <div className='navigation-right-part'>
          <h3 className='navigation-title'>Navigation</h3>
          <nav className='sub-nav'>
            <a className='sub-nav-link' href='/'>
              Home
            </a>
            <a className='sub-nav-link' href='/'>
              Product
            </a>
            <a className='sub-nav-link' href='/'>
              Company
            </a>
            <a className='sub-nav-link' href='/'>
              Contact
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
}

export default App;
