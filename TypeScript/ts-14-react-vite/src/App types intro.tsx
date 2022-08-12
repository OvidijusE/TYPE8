import { ReactNode, useState } from 'react';
import './App.css';

interface HeaderProps {
  title: string;
  isLight?: boolean;
}

function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
}

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps): JSX.Element {
  // if (true) return
  return <div className='card'>{children}</div>;
}

// default props
const defaultAlertProps = {
  text: (<strong>Alert Alert Alert!!!</strong>) as JSX.Element | string,
};
function Alert({ text }: typeof defaultAlertProps): JSX.Element {
  return <h3 className='alert'>{text}</h3>;
}
// numatytosios props reiksmes
Alert.defaultProps = defaultAlertProps;

interface IOurList<Type> {
  items: Type[];
  render: (val: Type) => ReactNode;
}

function OurList<Type>({ items, render }: IOurList<Type>): JSX.Element {
  return (
    <div className='card'>
      <ul>
        {items.map((val, idx) => (
          <li key={idx}>{render(val)}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState<number | null>(null);

  function getCountFromKazkur() {
    setCount(10);
  }

  return (
    <div className='container'>
      <Header title='TypeScript React' />
      <Card>
        <h1>Hello</h1>
      </Card>
      <Alert text='Sometnig went Ok' />
      <OurList items={['red', 'green', 'blue']} render={(val) => val.toUpperCase()} />
      <OurList items={[1, 2, 3]} render={(val) => val.toFixed(2)} />
    </div>
  );
}

export default App;
