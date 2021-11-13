import type { NextPage } from 'next'
import MtLogin from '../../components/accountComponents/MtLogin';
import Layout from '../../components/Layout';

const Login: NextPage = () => {
    return (
        <Layout title={'Login'}>
            <MtLogin />
        </Layout>
    )
}

export default Login;