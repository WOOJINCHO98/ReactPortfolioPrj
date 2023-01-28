import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubCal() {

    return (
        <GitHubCalendar 
            username="WOOJINCHO98"
            blockSize={20}
            blockMargin={4}
            color="#EB6200"
            fontSize={20}
            blockRadius={9}
            hideColorLegend={true}
            hideTotalCount={true}
            style={{
            backgroundColor: '#ebebeb',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            padding: '20px'
            }}
        />
    );
    }

    export default GithubCal