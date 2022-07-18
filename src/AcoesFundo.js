import Icone from "./Icone";
import React from "react";

function AcoesFundo(props) {
  function alteraReacao() {
    let novaReacao = props.reacao;
    if (novaReacao[props.id] === "heart") {
      novaReacao[props.id] = "heart-outline";
    } else {
      novaReacao[props.id] = "heart";
    }
    props.alteraReacao(novaReacao);
  }

  const icones = ["chatbubble-outline", "paper-plane-outline"];
  const coracao = props.reacao[props.id];

  return (
    <div class="acoes">
      <div>
        <ion-icon
          name={coracao}
          onClick={alteraReacao}
          style={{ color: coracao == "heart" ? "red" : "" }}
        ></ion-icon>
        {icones.map((elemento) => (
          <Icone name={elemento} />
        ))}
      </div>
      <div>
        <Icone name="bookmark-outline" />
      </div>
    </div>
  );
}

export default AcoesFundo;
