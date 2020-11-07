import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import IndexBailingguoNews from '../img/IndexBailingguoNews.jpg';
import IndexC2 from '../img/IndexC2.jpg';
import IndexC3 from '../img/IndexC3.jpg';
import IndexC4 from '../img/IndexC4.jpg';
import IndexC5 from '../img/IndexC5.jpg';

function IndexCarousel(props) {
  let items = [
    {
      name: '國際狗語日報X百靈果News',
      description: `“重新定義你對的自由的想像華語最自由的PODCAST頻道”`,
      img: IndexBailingguoNews,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: IndexC2,
    },
    {
      name: 'Random Name #3',
      description: 'Hello World!',
      img: IndexC3,
    },
    {
      name: 'Random Name #4',
      description: 'Hello World!',
      img: IndexC4,
    },
    {
      name: 'Random Name #5',
      description: 'Hello World!',
      img: IndexC5,
    },
  ];

  return (
    <Carousel
      className="indexCarousel mx-auto"
      autoPlay={false}
      indicators={true}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2> */}
      <p>{props.item.description}</p>
      <img src={props.item.img} />
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
export default IndexCarousel;
