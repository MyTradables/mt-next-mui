import type { NextPage } from 'next'
import Layout from '../../components/Layout';
import AboutusDisplay from '../../components/AboutusDisplay';
import { fetchItems } from '../api/dbCalls';



const Aboutus: NextPage = ({ itemData }: any) => {
    return (
        <Layout title={'Aboutus'}>
            <AboutusDisplay/>
        </Layout>
    )
}

export default Aboutus;