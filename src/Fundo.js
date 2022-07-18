import AcoesFundo from "./AcoesFundo";

function Fundo(props) {
  return (
    <div class="fundo">
      <AcoesFundo
        id={props.id}
        reacao={props.reacao}
        alteraReacao={props.alteraReacao}
      />
      <div class="curtidas">
        <img src={props.img} />
        <div class="texto">
          Curtido por <strong>{props.perfil}</strong> e{" "}
          <strong>outras {props.quantidade} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
