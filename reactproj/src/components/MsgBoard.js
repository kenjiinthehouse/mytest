import React, { useState, useEffect } from 'react';
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

function MsgBoard(props) {
  const styleNone = {
    display: 'none',
  };
  const styleForZIndex = {
    zIndex: '10',
  };
  return (
    <>
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

export default MsgBoard;
