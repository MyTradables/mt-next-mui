import type { NextPage } from 'next'
import Layout from '../../components/Layout';
import MtSignup from '../../components/publicComponents/MtSignup';

const Signup: NextPage = () => {
    return (
        <Layout title={'Signup'}>
            <MtSignup />
        </Layout>
    )
}

export default Signup;
