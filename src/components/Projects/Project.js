import React from "react";
import ProjectsBox from "./ProjectsBox";
function Project() {
    return (
        <div>
            <ProjectsBox
              //imgPath={chatify}
                isBlog={false}
                title="Notty"
                description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                link="https://github.com/woojincho98/nottybuild"
                demoLink="https://chatify-49.web.app/"
            />
            <ProjectsBox
              //imgPath={chatify}
                isBlog={false}
                title="Accty"
                description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                link="https://github.com/woojincho98/accty"
                demoLink="https://chatify-49.web.app/"
            />
        </div>
    );
    }

export default Project;