function Conteudo(props) {
  function alteraReacao() {
    let novaReacao = props.reacao;
    if (novaReacao[props.id] === "heart") {
      novaReacao[props.id] = "heart-outline";
    } else {
      novaReacao[props.id] = "heart";
    }
    props.alteraReacao(novaReacao);
  }

  return (
    <div class="conteudo">
      <img src={props.img} onClick={alteraReacao} />
    </div>
  );
}

export default Conteudo;
