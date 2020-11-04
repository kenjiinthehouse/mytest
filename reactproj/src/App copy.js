import React from 'react';
// 基本元件
// import logo from './logo.svg';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MainContent from './components/MainContent';
// 使用 react router 管理
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// 測試用元件
// import Counter2 from './pages/Counter2';
import MsgBoard from './components/MsgBoard';
import IndexCarousel from './components/IndexCarousel';
import RecipeReviewCard from './components/RecipeReviewCard';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/">
              <MsgBoard />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
