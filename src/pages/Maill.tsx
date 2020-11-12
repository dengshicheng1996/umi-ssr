import { IGetInitialProps } from 'umi';
import React from 'react';
import Layout from '@/layouts/index'

interface HomeProps {
  data: any
}

const Mail = (props: HomeProps) => {
  // console.log(props)
  const { data } = props;
  return (
    <Layout selectedKey={'mail'}>
      <div>23435</div>
      <div>mail</div>
    </Layout>
  )
}

Mail.getInitialProps = (async (ctx) => {
  return Promise.resolve({
    data: {
      title: 'Hello World',
    }
  })
}) as IGetInitialProps;

export default Mail;
