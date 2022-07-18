import Conteudo from "./Conteudo";
import Topo from "./Topo";
import Fundo from "./Fundo";



function Posts () {
  const posts = [
    {foto:"assets/img/meowed.svg", usuario:"meowed", conteudo:"assets/img/gato-telefone.svg", curtida:{foto:"assets/img/respondeai.svg", usuario:"respondeai", quantidade:"101.523"}},
    {foto:"assets/img/barked.svg", usuario:"barked", conteudo:"assets/img/dog.svg", curtida:{foto:"assets/img/adorable_animals.svg", usuario:"adorable_animals", quantidade:"99.159"}},
    {foto:"assets/img/meowed.svg", usuario:"meowed", conteudo:"assets/img/gato-telefone.svg", curtida:{foto:"assets/img/respondeai.svg", usuario:"respondeai", quantidade:"101.523"}},
    {foto:"assets/img/barked.svg", usuario:"barked", conteudo:"assets/img/dog.svg", curtida:{foto:"assets/img/adorable_animals.svg", usuario:"adorable_animals", quantidade:"99.159"}}

  ];

    return (
    <div class="posts">
        {posts.map((objeto) => 
          <div class="post">
            < Topo img={objeto.foto} usuario={objeto.usuario} />
            < Conteudo img={objeto.conteudo} />
            < Fundo img={objeto.curtida.foto} usuario={objeto.curtida.usuario} quantidade={objeto.curtida.quantidade}/>
          </div>)
        }
    </div>
    );
}

export default Posts;