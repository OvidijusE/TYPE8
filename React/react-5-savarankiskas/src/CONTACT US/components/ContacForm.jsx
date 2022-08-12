import FormButton from '../UI/FormButton';
import Address from './contacts/Address';
import EmailAddress from './contacts/EmailAddress';
import Phone from './contacts/Phone';

export default function ContactUsForm() {
  return (
    <div className='contact-form-container'>
      <div className='form-left-side'>
        <form>
          <div className='name-last-name'>
            <div className='form-first-name'>
              <label htmlFor='first-name'>First name</label>
              <input type='text' name='first-name' id='' />
            </div>
            <div className='form-last-name'>
              <label htmlFor='last-name'>Last name</label>
              <input type='text' name='last-name' id='' />
            </div>
          </div>
          <div className='email-subject-message'>
            <label htmlFor='email'>Email</label>
            <input className='email' type='email' name='email' id='' />
            <label htmlFor='subject'>Subject</label>
            <input className='subject' type='text' name='subject' id='' />
            <label htmlFor='message'>Message</label>
            <textarea className='message' rows='4' cols='48' />
            <FormButton className='form-button' text='SEND MESSAGE' />
          </div>
        </form>
      </div>
      <div className='right-side'>
        <div className='upper-right-side'>
          <Address
            address='203 Fake St. Mountain View, San Fracinsco,
        California, USA.'
          />
          <Phone phone='+1 232 3235 324' />
          <EmailAddress email='youremail@domain.com' />
        </div>
        <div className='bottom-right-side'>
          <h3 className='more-info'>More info</h3>
          <p className='more-info-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur tempora
            ipsum dolorem corrupti in, optio corporis eos iste nisi!
          </p>

          <button className='form-button learn-more-button'>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
