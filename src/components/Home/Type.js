import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
        options={{
            strings: [
            "적응 하는",
            "꾸준한",
            "우상향 하는",
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