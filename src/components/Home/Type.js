import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
        options={{
            strings: [
            "적응 하는",
            "무엇 하는",
            "저것 하는",
            ],
            cursor: "|",
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 50,
        }}
        />
    );
    }

    export default Type