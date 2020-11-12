import { IGetInitialProps } from 'umi';
import React from 'react';

interface HomeProps {
  data: any
}

const Mail = (props: HomeProps) => {
  // console.log(props)
  const { data } = props;
  return (
    <div>
      <div>23435</div>
      <div>mail</div>
    </div>
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
