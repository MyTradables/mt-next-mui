import type { NextPage } from 'next'
import Layout from '../../../components/Layout';
import { fetchCategory } from '../../api/dbCalls';


export async function getServerSideProps({query}) {
    const category = await fetchCategory(query.name);
    console.log(category);
    return {
        props: {
            category,
        },
    };
}



const SubCategoryPage: NextPage = ({category}:any) => {
    if(!category){
        return <div>category Not Found</div>
    }
    return <Layout title={category.name}><div><h1>{category.name}</h1></div></Layout>
}

export default SubCategoryPage;