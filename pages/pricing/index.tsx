import type { NextPage } from 'next'
import Layout from '../../components/Layout';
import Subscriptions from '../../components/publicComponents/Subscriptions';



const Pricing: NextPage = () => {
    return (
        <Layout title={'Pricing'}>
            <Subscriptions />
        </Layout>
    )
}

export default Pricing;