import type { NextPage } from 'next'
import Layout from '../components/Layout'
import MainCategorySlide from '../components/MainCategorySlide';
import { fetchCategories } from './api/dbCalls';

export async function getServerSideProps() {
  const categoryData = await fetchCategories();
  return {
    props: {
      categoryData,
    },
  };
}

const Home: NextPage = ({ categoryData }: any) => {
  return (
    <Layout title={'Home'}>
      <MainCategorySlide categoryData={categoryData}/>
    </Layout>
  )
}

export default Home
