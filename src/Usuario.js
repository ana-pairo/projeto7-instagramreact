function Usuario(props) {
    return (
    <div class="usuario">
        <img src={props.img} />
        <div class="texto">
            <strong>{props.usuario}</strong>
            {props.bio}
        </div>
    </div>
    );
}

export default Usuario;