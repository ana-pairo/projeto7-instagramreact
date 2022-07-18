import Conteudo from "./Conteudo";
import Topo from "./Topo";
import Fundo from "./Fundo";
import React from "react";
import { render } from "react-dom";

function Posts() {
  const posts = [
    {
      id: 0,
      foto: "assets/img/meowed.svg",
      usuario: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      curtida: {
        foto: "assets/img/respondeai.svg",
        usuario: "respondeai",
        quantidade: "101.523",
      },
    },
    {
      id: 1,
      foto: "assets/img/barked.svg",
      usuario: "barked",
      conteudo: "assets/img/dog.svg",
      curtida: {
        foto: "assets/img/adorable_animals.svg",
        usuario: "adorable_animals",
        quantidade: "99.159",
      },
    },
    {
      id: 2,
      foto: "assets/img/meowed.svg",
      usuario: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      curtida: {
        foto: "assets/img/respondeai.svg",
        usuario: "respondeai",
        quantidade: "101.523",
      },
    },
    {
      id: 3,
      foto: "assets/img/barked.svg",
      usuario: "barked",
      conteudo: "assets/img/dog.svg",
      curtida: {
        foto: "assets/img/adorable_animals.svg",
        usuario: "adorable_animals",
        quantidade: "99.159",
      },
    },
  ];

  const [reacao, setReacao] = React.useState([
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
  ]);

  function alteraReacao(novaReacao) {
    setReacao([...novaReacao]);
  }

  return (
    <div class="posts">
      {posts.map((objeto) => (
        <div class="post">
          <Topo img={objeto.foto} usuario={objeto.usuario} />
          <Conteudo
            img={objeto.conteudo}
            id={objeto.id}
            reacao={reacao}
            alteraReacao={alteraReacao}
          />
          <Fundo
            img={objeto.curtida.foto}
            usuario={objeto.curtida.usuario}
            quantidade={objeto.curtida.quantidade}
            id={objeto.id}
            reacao={reacao}
            alteraReacao={alteraReacao}
          />
        </div>
      ))}
    </div>
  );
}

export default Posts;
