import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const BasicLayout: React.FC = (props: any) => {
  const [current, setcurrent] = useState<string>('app')
  const handleClick = e => {
    setcurrent(e.key);
    history.push(e.key)
  };

  return (
    <Layout>
      <Layout.Header style={{background: '#fff'}}>
      <Menu onClick={handleClick} selectedKeys={[props.selectedKey]} mode="horizontal">
        <Menu.Item key="app" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="mail" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
      </Layout.Header>
      <Layout.Content>{props.children}</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  )
}

export default BasicLayout;