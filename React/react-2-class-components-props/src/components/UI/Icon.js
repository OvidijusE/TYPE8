// create and export Icon component
// componet returns <i className="fa fa-facebook-official" aria-hidden="true"></i>
// make it so prop icon=fa-facebook-official loads icon
// use icon in App.js
// <Icon icon='fa-facebook-official' />
// <Icon icon='fa-instagram' />

function Icon(props) {
  return <i className={`fa ${props.icon}`} aria-hidden='true'></i>;
}

export default Icon;
