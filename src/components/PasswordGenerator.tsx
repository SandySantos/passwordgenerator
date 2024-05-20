import { useState } from 'react';
import ErrorDisplay from './ErrorDisplay';

const PasswordGenerator = ({
  generatedPassword,
  setGeneratedPassword,
}: any) => {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [error, setError] = useState('');

  const addPreferences = (option: string) => {
    if (preferences.includes(option)) {
      setError('Already exist');
    } else {
      setPreferences([...preferences, option]);
    }
  };

  const clearError = () => {
    setError('');
  };
  const deletePreference = (index: number) => {
    preferences.splice(index, 1);
    console.log(preferences);

    setPreferences(() => {
      return [...preferences];
    });
  };

  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*_+=';

  const generatePassword = () => {
    let passwordString: string = '';

    if (preferences.includes('Numbers')) {
      passwordString = passwordString + numbers;
    }
    if (preferences.includes('Alphabets')) {
      passwordString = passwordString + alphabets;
    }
    if (preferences.includes('SpecialCharacters')) {
      passwordString = passwordString + specialCharacters;
    }

    console.log('passwordString', passwordString);

    let password: string = '';

    for (let i = 0; i < 15; i++) {
      const char: string = passwordString.charAt(
        Math.floor(Math.random() * passwordString.length)
      );

      password = password + char;
    }
    setGeneratedPassword(password);
  };

  return (
    <div className='max-w-2xl'>
      {error && (
        <div className='mx-20'>
          <ErrorDisplay message={error} clearError={clearError} />
        </div>
      )}
      <p className='flex items-center justify-center font-bold'>Preferences:</p>
      <form className='mx-20'>
        <label
          htmlFor='Preference'
          className='block mb-2 text-sm font-medium text-gray-900 '
        >
          Choose Preference
        </label>
        <select
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          onChange={(e: any) => {
            console.log(e.target.value);
            if (e.target.value !== 'Choose') {
              addPreferences(e.target.value);
            }
          }}
        >
          <option value='Choose'>Choose</option>
          <option value='Numbers'>Numbers</option>
          <option value='Alphabets'>Alphabets</option>
          <option value='SpecialCharacters'>SpecialCharacters</option>
        </select>
      </form>
      <div className='mx-20 my-8 space-y-3'>
        {preferences &&
          preferences.length > 0 &&
          preferences.map((el, i) => (
            <div
              className=' flex gap-6 items-center p-3 border-2 rounded-md  justify-between '
              key={i.toString()}
            >
              <div>{el}</div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                className='w-6 h-6 stroke-gray-500 hover:stroke-red-500'
                onClick={() => deletePreference(i)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                />
              </svg>
            </div>
          ))}
        <button
          onClick={generatePassword}
          className='bg-green-500 text-white p-2 border-2 border-green-500 rounded-md font-semibold hover:bg-green-800 hover:border-green-800'
        >
          GeneratePassword
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
