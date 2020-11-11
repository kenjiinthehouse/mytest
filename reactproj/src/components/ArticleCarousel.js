import React from 'react';
import '../styles/IndexArticle.scss';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';


function ArticleCarousel(props) {
  let items = [
    {
      name: '百靈果NEWS',
      description: `“重新定義你對的自由的想像華語最自由的PODCAST頻道”`,
      img: '/img/IndexArticle205.jpg',
      click: '>>去聽聽',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: '/img/IndexArticle208.jpg',
      click: '>>去聽聽',
    },
    {
      name: 'Random Name #3',
      description: 'Hello World!',
      img: '/img/IndexArticle210.jpg',
      click: '>>去聽聽',
    },
    {
      name: 'Random Name #4',
      description: 'Hello World!',
      img: '/img/IndexArticle215.jpg',
      click: '>>去聽聽',
    },
  ];

  return (
    <>
      <div className="IndexArticlePage">
        <div className="IndexArticleTitleBox d-flex">
          <h3 className="IndexArticleTitle mx-auto my-auto">Podcast 專欄</h3>
        </div>
        <Carousel
          className="ArticleCarousel mx-auto"
          autoPlay={false}
          indicators={true}
          navButtonsAlwaysVisible={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        <div className="ArticleCarouselColorCard"></div>
      </div>
    </>
  );
}

function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2> */}
      {/* <p>{props.item.description}</p> */}
      <div className="ArticlePaperColorCard">
        <svg
          class="slide__overlay"
          viewBox="0 0 720 405"
          preserveAspectRatio="xMaxYMax slice"
        >
          <path class="slide__overlay-path" d="M0,0 200,0 400,405 0,405" />
        </svg>
      </div>
      <img src={props.item.img} />
      {/* <Button className="CheckButton">
        <label className="clickLabel">{props.item.click}</label>
        {props.item.name}
      </Button> */}
    </Paper>
  );
}
export default ArticleCarousel;
