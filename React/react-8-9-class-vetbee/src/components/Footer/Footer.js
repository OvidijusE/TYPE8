import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css['footer']}>
      <p>Copyright &copy; VetBee {new Date().getFullYear()}. All rights reserved.</p>
    </div>
  );
};

export default Footer;
