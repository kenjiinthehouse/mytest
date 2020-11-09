import React from 'react';
import '../styles/IndexShop.scss';
import Button from '@material-ui/core/Button';

function IndexShop(props) {

  return (
    <>
      <div className="IndexShopPage">
        <div className="IndexShopPageTitleBox d-flex">
          <h3 className="IndexShopPageTitle mx-auto my-auto">話題商品</h3>
        </div>
        <div className="IndexShopPageInfoBox">
          <div className="InfoContent d-flex mx-auto flex-column">
            <h3 className="InfoContentTitle mx-auto mt-5">
              支持&創造屬於你的頻道
            </h3>
            <p className="InfoContentText1">
              是否覺得有許多故事想與他人分享，抑或是發現沒有相關興趣的頻道呢？別擔心，在這裡你也可以成為播客，加入平台的大家庭，並將自身的經歷與見解與他人分享。
            </p>
            <p className="InfoContentText2">
              在這邊你也可以支持你最喜愛的播客，即刻購入周邊商品，幫助你喜愛的播客產出更多優質的節目內容！
            </p>
            <Button className="mx-auto">
              加入成為播客
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexShop;
