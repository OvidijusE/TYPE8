function NavLink(props) {
  return (
    <a key={nObj.id} href={nObj.to} className={`navLink ${nObj.active ? 'active' : ''}`}>
      {nObj.text}
    </a>
  );
}
