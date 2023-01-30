import React from "react";
import GitHubCalendar from "react-github-calendar";

function MediaGithubCal() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 2;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  
    return (
        <GitHubCalendar 
            username="WOOJINCHO98"
            transformData={selectLastHalfYear}
            blockSize={30}
            blockMargin={2}
            color="#EB6200"
            blockRadius={10}
            hideTotalCount={true}
            hideColorLegend={true}
            style={{
            margin: '0 auto',
            backgroundColor: '#ebebeb',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            padding: '10px'
            }}
        />
    );
    }

    export default MediaGithubCal