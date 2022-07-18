import Icone from "./Icone";

function FundoMobile() {
  const icones = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];

  return (
    <div class="fundo-mobile">
      {icones.map((elemento) => (
        <Icone name={elemento} />
      ))}
    </div>
  );
}

export default FundoMobile;
