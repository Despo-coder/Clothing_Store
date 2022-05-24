import Signin from '../components/Signin';
import SignUp from '../components/Signup';

const Authentication = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '900px',
          justifyContent: 'space-between',
          margin: '30px auto',
        }}>
        <Signin />
        <SignUp />
      </div>
    </>
  );
};
export default Authentication;
