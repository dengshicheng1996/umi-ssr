import { IGetInitialProps } from 'umi';
import React from 'react';

interface HomeProps {
  data: any
}

const Home = (props: HomeProps) => {
  // console.log(props)
  const { data } = props;
  return (
    <div>
      <div>12312</div>
      <div>app</div>
    </div>
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
