import type { NextPage } from 'next'
import Layout from '../../components/Layout';
import TradablesDisplay from '../../components/TradablesDisplay';
import { fetchItems } from '../api/dbCalls';


export async function getServerSideProps() {
    const itemData = await fetchItems();
    return {
        props: {
            itemData,
        },
    };
}

const Tradables: NextPage = ({ itemData }: any) => {
    return (
        <Layout title={'Tradables'}>
            <TradablesDisplay itemData={itemData} />
        </Layout>
    )
}

export default Tradables;
