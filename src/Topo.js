import Icone from "./Icone";

function Topo (props) {
    return (
    <div class="topo">
        <div class="usuario">
            <img src={props.img} />
            {props.usuario}
        </div>
        <div class="acoes">
            < Icone name="ellipsis-horizontal" />
        </div>
    </div>
    );
}

export default Topo;