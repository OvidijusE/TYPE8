const navData = [
  {
    id: 1,
    to: '#home',
    text: 'Home',
    active: false,
  },
  {
    id: 2,
    to: '#about',
    text: 'About',
    active: false,
  },
  {
    id: 3,
    to: '#contact',
    text: 'Contact',
    active: true,
  },
];
const activeHome = navData
  .map((nObj) => {
    return { ...nObj, active: false };
  })
  .map((nObj) => {
    // if (nObj.id === 1) {
    //   return { ...nObj, active: true };
    // }
    // return nObj;
    return nObj.id === 1 ? { ...nObj, active: true } : nObj;
  });
console.log('activeHome ===', activeHome);
// sugeneruoti navigacija is navData su map

function Header() {
  return (
    <header className='header'>
      <nav className='main-nav'>
        {navData.map((nObj) => (
          <a key={nObj.id} href={nObj.to} className={`navLink ${nObj.active ? 'active' : ''}`}>
            {nObj.text}
          </a>
        ))}
        {/* <a href={navData[0].to} className='navLink'>
          {navData[0].text}
        </a>
        <a href={navData[0].to} className='navLink'>
          {navData[1].text}
        </a>
        <a href={navData[2].to} className='navLink'>
          {navData[2].text}
        </a> */}
      </nav>
    </header>
  );
}

export default Header;
