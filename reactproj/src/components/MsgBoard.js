import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import {
  MdAddCircle,
  MdWhatshot,
  MdSort,
  MdThumbUp,
  MdThumbDown,
  MdReport,
  MdExpandLess,
  MdExpandMore
} from 'react-icons/md';
//引入留言
import { getMsg, getMsgAsync } from '../actions/index';




function MsgBoard(props) {
  useEffect(() => {props.getMsgAsync()},[]);
  
  
  const styleNone = {
    display: 'none',
  };
  const styleForZIndex = {
    zIndex: '10',
  };

  return (
    <>
      <h1>{props.msg.rows[0].sid}</h1>
      <div className="cmtArea container mx-auto mt-5">
        <div className="cmtModule">
          <div className="cmtModuleHead row align-items-center">
            <h5 className="cmtTitle pr-2">留言</h5>
            <span className="cmtCount">124</span>
          </div>
          <div className="writeBox">
            <div className="writeBoxLogged">
              <form>
                <fieldset>
                  <legend className="ghost">留下評論</legend>
                  <div>
                    <div className="userProfile">
                      <span className="userId" style={styleNone}>
                        使用者Id:xxxxx
                      </span>
                      <span className="userNickname" style={styleNone}>
                        使用者暱稱:BigJohn
                      </span>
                    </div>
                    <div className="writeCmt">
                      <textarea
                        className="cmtTextarea"
                        name="cmtTextarea"
                        id="cmtTextarea"
                        cols="30"
                        rows="3"
                      ></textarea>
                      <label htmlFor="cmtTextarea" style={styleForZIndex}>
                        請留下評論
                      </label>
                    </div>
                    <div className="cmtSendBox">
                      <button type="button" className="cmtSendBtn">
                        <IconContext.Provider value={{ className: 'addBtn' }}>
                          <MdAddCircle />
                        </IconContext.Provider>
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

          <div className="cmtSortOption d-flex align-items-center">
            <ul className="cmtSortOptionList">
              <li className="pr-3">
                <span className="align-bottom pr-1">
                  <IconContext.Provider value={{ className: 'hotBtn' }}>
                    <MdWhatshot />
                  </IconContext.Provider>
                </span>
                <span className="align-bottom">依人氣排序</span>
              </li>
              <li className="">
                <span className="align-bottom pr-1">
                  <IconContext.Provider value={{ className: 'sortBtn' }}>
                    <MdSort />
                  </IconContext.Provider>
                </span>
                <span className="align-bottom">依發表新舊</span>
              </li>
            </ul>
          </div>

          <div className="cmtContainer">
            <ul className="cmtList">
              <li>
                <div className="cmtBox">
                  <div className="cmtBoxArea">
                    <div className="cmtInfo d-flex align-items-center">
                      <div className="userHeadIcon mr-2"></div>
                      <div className="cmtSid" style={styleNone}>
                        i.sid
                      </div>
                      <div className="cmtNickname mr-auto">i.nickname</div>
                      <div className="cmtInfoDate">i.postTime2</div>
                    </div>
                    <div className="cmtTextWrap">
                      <span className="cmtBoxContent">i.content</span>
                    </div>
                    <div className="cmtTools d-flex align-items-center">
                      <div className="cmtToolsBtn mr-auto">
                        <div
                          className="replyBtn"
                          data-sid="i.sid"
                          data-toggle="collapse"
                          data-target="i.nickname"
                        >
                          <span className="pr-1">回應</span>
                          <span className="cmtReplyCount">(20)</span>
                          <span className="">
                            {' '}
                            <IconContext.Provider
                              value={{ className: '.replyBtn' }}
                            >
                              <MdExpandMore />
                            </IconContext.Provider>
                          </span>
                        </div>
                      </div>

                      <div className="cmtToolsBtn pr-2">
                        <a href="" className="pr-2">
                          <span className="material-icons pr-1">
                            <IconContext.Provider
                              value={{ className: 'cmtToolsBtn' }}
                            >
                              <MdThumbUp />
                            </IconContext.Provider>
                          </span>
                          <span>i.upPoint</span>
                        </a>
                        <a href="">
                          <span className="material-icons pr-1">
                            <IconContext.Provider
                              value={{ className: 'cmtToolsBtn' }}
                            >
                              <MdThumbDown />
                            </IconContext.Provider>
                          </span>
                          <span>i.downPoint</span>
                        </a>
                        <span className="cmtAccuseLink pl-2">
                          <IconContext.Provider
                            value={{ className: 'cmtToolsBtn' }}
                          >
                            <MdReport />
                          </IconContext.Provider>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* 展開回應 */}
                  <div className="cmtReply collapse" id="i.nickname">
                    <ul className="cmtList">
                      <li className="replyList i.sid"></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// 將redux中的store的state(狀態)
// 對應到這個元件中的props中，名稱為total

// 原本的 mapStateToProps
// const mapStateToProps = (store, ownProps) => {
//   console.log('ownProps', ownProps);
//   return { total: store.counter };
// };

const mapStateToProps = (store) => {
  return { msg: store.msgBoardReducer };
};
// 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
// const mapDispatchToProps = null;

// 高階元件的樣式，必要的
//                redux store的state,這個元件的props(Counter2)
//                redux store的dispatch,這個元件的props(Counter2)
// export default connect(mapStateToProps, actionCreators)(Counter2);

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue ,addValueAsync }`是個物件值
export default connect(mapStateToProps, {
  getMsg,
  getMsgAsync,
})(MsgBoard);

