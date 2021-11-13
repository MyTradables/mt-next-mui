import type { NextPage } from 'next'
import Layout from '../../components/Layout';
import AboutusDisplay from '../../components/publicComponents/AboutusDisplay';



const Aboutus: NextPage = ({ itemData }: any) => {
    return (
        <Layout title={'Aboutus'}>
            <AboutusDisplay/>
        </Layout>
    )
}

export default Aboutus;