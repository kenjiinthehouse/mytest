import React from 'react';

function MainContent(props) {
  return (
    <>
      <main>
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        <div className="mainBox container-fluid">{props.children}</div>
      </main>
    </>
  );
}

export default MainContent;
