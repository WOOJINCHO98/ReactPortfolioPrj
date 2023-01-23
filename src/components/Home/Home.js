import React from "react";
import GithubCal from "./GithubCal";
import Type from "./Type";
import Waving from "./Waving";
function Home() {
  return (
    <div>
      <h1>"HelloWorld!"
        <span className="wave">
          👋🏻
        </span>
      </h1>
        <div style={{ padding: 50, textAlign: "left", float: "left" }}>
          <Type />
          <p style={{ float: "left" }}>개발자 조우진입니다.</p>
          <p style={{ float: "left" }}>저는 2020년 3월부터 개발자로서의 길을 걷고 있습니다.</p>
          <p style={{ float: "left" }}>저는 웹 개발을 좋아합니다.</p>
        </div>
        
        <Waving />

        <div className="calendar">
          <GithubCal />
        </div>
      
    </div>

  );
}

export default Home;