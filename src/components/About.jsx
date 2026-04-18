import PerfilImg from '../img/perfil.png';

function About() {
  return (
    <section id="sobre" className="sessao-sobre-mim">
      <div className="imagem-usuario">
        <img src={PerfilImg} alt="Pablo foto-perfil" />
      </div>
      <div className="textos-pessoais">
        <h1>Lucas Rodrigues Bevilaqua</h1>
        <p>Sou autonomo e estudo tecnologia a uns 6 anos, mas somente nesse ano é que estou focando pra valer. 
          <br/> Ja estive em projetos profissionais e percebi o quanto é bom trabalhar com a Tecnologia. </p>
        <p className="paragrafo-detalhe"></p>
      </div>
    </section>
  );
}

export default About;
