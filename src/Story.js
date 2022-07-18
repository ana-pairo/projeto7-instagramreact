function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}

export default Story;
