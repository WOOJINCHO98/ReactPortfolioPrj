import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
        options={{
            strings: [
            "적응 하는",
            "무엇 하는...",
            "저것 하는...",
            ],
            cursor: "ㅣ",
            autoStart: true,
            loop: true,
        }}
        />
    );
    }

    export default Type