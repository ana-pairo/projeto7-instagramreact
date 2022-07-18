import React from "react";
import Icone from "./Icone";

function AcoesFundo (props) {
    const icones = ["chatbubble-outline", "paper-plane-outline"]
    const [reacao, setReacao] = React.useState("heart-outline")
    const [preencher, setPreencher] = React.useState("");

    return (
    <div class="acoes">
        <div>
            <ion-icon name={reacao} style={{color: preencher}} onClick={
                () => {if(reacao==="heart-outline") {setReacao('heart'); setPreencher('red');} else {setReacao('heart-outline');setPreencher('');}}
            } ></ion-icon>
            {icones.map((elemento) => < Icone name={elemento} />)}
        </div>
        <div>
            < Icone name="bookmark-outline" />
        </div>
    </div>
    );
}

export default AcoesFundo;