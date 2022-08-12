import './App.css';
import ContactUsForm from './CONTACT US/components/ContacForm';
import SectionTitle from './OUR SERVICES/components/ServicesSection/SectionTitle';
import ServicesList from './OUR SERVICES/components/ServicesSection/ServicesList';

function App() {
  return (
    <div className='App'>
      <SectionTitle title='OUR SERVICES' subtitle='Lorem ipsum dolor sit amet.' />
      <ServicesList />
      <ContactUsForm />
    </div>
  );
}

export default App;
