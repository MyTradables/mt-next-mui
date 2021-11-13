import type { NextPage } from 'next'
import CategoriesDisplay from '../../components/CategoriesDisplay';
import Layout from '../../components/Layout';
import { fetchCategories } from '../api/dbCalls';

export async function getServerSideProps() {
    const categoryData = await fetchCategories();
    return {
        props: {
            categoryData,
        },
    };
}


const Categories: NextPage = ({ categoryData }: any) => {
    return (
        <Layout title={'Categories'}>
            <CategoriesDisplay categoryData={categoryData}/>
        </Layout>
    )
}

export default Categories;