import { Fragment } from 'react';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <Fragment>
      <Head title='Login' />
      <Main>
        <h1>Login</h1>
      </Main>
    </Fragment>
  );
};

export default Login;
