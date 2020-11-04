import React from 'react';
// 使用antd布局
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './styles/kenji.scss'
// 基本元件
import MyNavbar from './components/MyNavbar';


// 使用 react router 管理
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// 測試用元件
// import Counter2 from './pages/Counter2';
import MsgBoard from './components/MsgBoard';


const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout>
       <MyNavbar/>
        <Content>
          <Switch>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/">
              <MsgBoard />
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
