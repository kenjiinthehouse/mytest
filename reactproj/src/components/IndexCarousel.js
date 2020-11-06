import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import IndexBailingguoNews from '../img/IndexBailingguoNews.jpg'

function IndexCarousel(props) {
  let items = [
    {
      name: '國際狗語日報X百靈果News',
      description: '“重新定義你對的自由的想像華語最自由的PODCAST頻道”',
      img: IndexBailingguoNews,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: IndexBailingguoNews,
    },
    {
      name: 'Random Name #3',
      description: 'Hello World!',
      img: IndexBailingguoNews,
    },
    {
      name: 'Random Name #4',
      description: 'Hello World!',
      img: IndexBailingguoNews,
    },
    {
      name: 'Random Name #5',
      description: 'Hello World!',
      img: IndexBailingguoNews,
    },
  ];

  return (
    <Carousel className="indexCarousel mx-auto" autoPlay={false} indicators={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.img}/>

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}
export default IndexCarousel;
