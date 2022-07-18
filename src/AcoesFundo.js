import Icone from "./Icone";

function AcoesFundo () {
    const icones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]

    return (
    <div class="acoes">
        <div>
            {icones.map((elemento) => < Icone name={elemento} />)}
        </div>
        <div>
            < Icone name="bookmark-outline" />
        </div>
    </div>
    );
}

export default AcoesFundo;