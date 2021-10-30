import type { NextPage } from 'next'
import Layout from '../../../../components/Layout';
import { fetchItem } from '../../../api/dbCalls';

export async function getServerSideProps({query}) {
    const item = await fetchItem(query.id);
    return {
        props: {
            item,
        },
    };
}

const ProductPage: NextPage = ({item}:any) => {
    if(!item){
        return <div>Item Not Found</div>
    }
    return <Layout title={item.title}><div><h1>{item.id}</h1></div></Layout>
}

export default ProductPage;