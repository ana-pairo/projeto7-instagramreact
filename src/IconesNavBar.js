import Icone from "./Icone";

function IconesNavBar() {
  const icones = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline",
  ];
  return (
    <div class="icones">
      {icones.map((elemento) => (
        <Icone name={elemento} />
      ))}
    </div>
  );
}

export default IconesNavBar;
