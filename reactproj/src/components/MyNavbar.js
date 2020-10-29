import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
//選單連結使用 NavLink 取代 Link，不然有CSS上的問題
import { NavLink } from 'react-router-dom';
import logo from '../img/logofordark.svg';

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/todo">
              待辨事項
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              產品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              登入
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              註冊
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              會員資料
            </Nav.Link>
            <Nav.Link as={NavLink} to="/counter">
              計數器
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productlist">
              產品列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              購物車
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
