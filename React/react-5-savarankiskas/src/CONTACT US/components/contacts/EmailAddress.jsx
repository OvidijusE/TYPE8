export default function EmailAddress(props) {
  return (
    <div className='email-container'>
      <h3>Email Address</h3>
      <p className='email-address'>{props.email}</p>
    </div>
  );
}
