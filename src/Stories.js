import Story from "./Story";
import Setinha from "./Setinha";

function Stories() {
  const perfis = [
    { img: "assets/img/9gag.svg", usuario: "9gag" },
    { img: "assets/img/meowed.svg", usuario: "meowed" },
    { img: "assets/img/barked.svg", usuario: "barked" },
    {
      img: "assets/img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { img: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];

  return (
    <div class="stories">
      {perfis.map((objeto) => (
        <Story img={objeto.img} usuario={objeto.usuario} />
      ))}
      <Setinha />
    </div>
  );
}

export default Stories;
