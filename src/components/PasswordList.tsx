import PasswordsListItem from './PasswordListItem';

const PasswordList = ({ passwordlist }: any) => {
  return (
    <div className=' mx-20 space-y-3 max-w-lg'>
      <p className='font-semibold'>Last 5 Passswords:</p>
      <div className='space-y-3 '>
        {passwordlist &&
          passwordlist.length > 0 &&
          passwordlist.map((password: string, i: number) => (
            <PasswordsListItem password={password} key={i.toString()} />
          ))}
      </div>
    </div>
  );
};

export default PasswordList;
