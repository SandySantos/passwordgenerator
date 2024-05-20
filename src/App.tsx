import { useEffect, useState } from 'react';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordList from './components/PasswordList';

function App() {
  const [passwordlist, setPasswordlist] = useState<any>([]);
  const [generatedPassword, setGeneratedPassword] = useState(undefined);

  useEffect(() => {
    const data = localStorage.getItem('passwordlist');
    if (data) {
      setPasswordlist(JSON.parse(data).slice(0, 5));
    }
  }, []);

  useEffect(() => {
    if (generatedPassword) {
      const getPasswords: any = localStorage.getItem('passwordlist');
      let newPasswords;
      if (getPasswords) {
        newPasswords = [generatedPassword, ...JSON.parse(getPasswords)];
      } else {
        newPasswords = [generatedPassword];
      }
      localStorage.setItem('passwordlist', JSON.stringify(newPasswords));
      const slicedPasswords = newPasswords.slice(0, 5);
      setPasswordlist(() => {
        return [...slicedPasswords];
      });
    }
  }, [generatedPassword]);

  return (
    <div className='my-10  w-full h-full'>
      <div className='space-y-8'>
        <PasswordGenerator
          generatedPassword={generatedPassword}
          setGeneratedPassword={setGeneratedPassword}
        />
        <PasswordList passwordlist={passwordlist} />
      </div>
    </div>
  );
}

export default App;
