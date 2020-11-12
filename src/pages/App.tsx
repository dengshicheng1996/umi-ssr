import { IGetInitialProps } from 'umi';
import React from 'react';
import Layout from '@/layouts/index'

interface HomeProps {
  data: any
}

const Home = (props: HomeProps) => {
  // console.log(props)
  const { data } = props;
  return (
    <Layout selectedKey={'app'}>
      <div>12312</div>
      <div>app</div>
    </Layout>
  )
}

Home.getInitialProps = (async (ctx) => {
  return Promise.resolve({
    data: {
      title: 'Hello World',
    }
  })
}) as IGetInitialProps;

export default Home;
