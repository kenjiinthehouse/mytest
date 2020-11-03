import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { MdAddCircle } from 'react-icons/md';
//引入留言
// import { getMsg, getMsgAsync } from '../actions/index';

function MsgReplyInput(props) {
  const styleNone = {
    display: 'none',
  };
  const styleForZIndex = {
    zIndex: '10',
  };

  return (
    <>
      <div className="writeBox mt-3">
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
                    className="replyTextarea"
                    name="cmtTextarea"
                    id="cmtTextarea"
                    cols="30"
                    rows="3"
                    placeholder="輸入回應"
                  ></textarea>
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
    </>
  );
}

// const mapStateToProps = (store) => {
//   return { msg: store.msgBoardReducer };
// };
export default MsgReplyInput;
