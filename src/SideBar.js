import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copyright from "./Copyright";

function SideBar() {
  return (
    <div class="sidebar">
      <Usuario
        img="assets/img/catanacomics.svg"
        usuario="catanacomics"
        bio="Catana"
      />
      <Sugestoes />
      <Links />
      <Copyright />
    </div>
  );
}

export default SideBar;
