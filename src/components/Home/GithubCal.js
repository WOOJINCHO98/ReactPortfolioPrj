import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubCal() {

    return (
        <GitHubCalendar 
            username="WOOJINCHO98"
            blockSize={17}
            blockMargin={4}
            color="#212629"
            fontSize={20}
            blockRadius={6}
            hideColorLegend={true}
            hideTotalCount={true}
            className="github-cal"
            style={{
            backgroundColor: '#ebebeb',
            borderRadius: '10px',
            padding: '30px',
            }}
        />
    );
    }

    export default GithubCal