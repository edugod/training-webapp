import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
	return (
		<section id="about-us">
		<div className="background-about-us"></div>
		<div className="about-us-container">
		  <div className="text-about">
			<p>Aqui você garante o mais alto padrão de ensino, materiais modernos e atualizados, bem como a aplicação das
			  melhores técnicas de ensino, provenientes do conjunto de experiências de uma rede com mais de 1200 escolas
			  no Brasil. A Wizard, líder mundial no ensino de idiomas, está completando 30 anos de história em
			  Santa Cruz do Sul. Nestes anos, já ajudamos milhares de santa-cruzenses a realizar o sonho de tornarem-se
			  bilíngues. Nossa primeira sede foi na Galeria Farah, e desde 1997 estamos na Rua Thomaz Flores, no centro da
			  cidade.</p>
		  </div>
		  <div className="title-about">
			<h2>30 anos dehistória</h2>
			<h3>A Wizard é a maior rede de ensino de idiomas do Brasil.</h3>
		  </div>
		  <div className="image-about"><img src="./fachadablob.png"
			  alt="Foto da fachada da escola - Wizard Santa Cruz do Sul"/></div>
		  <div className="text-teacher">
			<p>Nossos professores são selecionados levando em conta, além da capacidade linguística, também a sua
			  afinidade e paixão por ensinar idiomas.Todo professor passa por um processo inicial de
			  treinamento, que o qualifica para aplicar a metodologia de ensino Wizard de forma padronizada e eficiente.
			  Posteriormente, continua em treinamento e desenvolvimento de forma contínua, visando estar sempre atualizado
			  com o que existe de melhor no mundo da educação.
			</p>
		  </div>
		  <div className="title-teacher">
			<h2>Nossos professores</h2>
			<h3>Paixão por ensinar idiomas.</h3>
		  </div>
		  <div className="image-teacher"><img src="./images/teacher-english.webp" alt="Foto de um professor de inglês"/></div>
		  <div className="text-method">
			<p> Aqui você recebe o melhor e mais tecnológico da metodologia Wizard para alcançar os melhores níveis de
			  desempenho no idioma.Com o Wiz.me você tem um assistente pessoal que irá te auxiliar no
			  processo de aprendizado através de inteligência artificial, onde ele avalia e dá feedback automático sobre
			  sua pronúncia, entende suas dificuldades e direciona exercícios personalizados.Wizpen é
			  a nossa caneta que fala, sua tecnologia exclusiva lê e pronuncia todas as palavras, frases e textos contidos
			  no livro do aluno ajudando a aperfeiçoar a pronúncia fora da sala de aula ferecemos ao aluno uma
			  estrutura completa, salas confortáveis equipadas com TV, acesso à internet e ar condicionado. A escola conta
			  também com lanchonete, ambiente multimídia, videogames, clube de xadrez e outras opções de entretenimento.
			</p>
		  </div>
		  <div className="title-method">
			<h2>Tecnologia no ensino</h2>
			<h3>Metodologia inovadora.</h3>
		  </div>
		  <div className="image-method"><img src="./images/material-wizpen-wizme.webp"
			  alt="Foto do material da wizard mais wizpen e aplicativo wiz.me"/></div>
		</div>
	  </section>
	)
}

export default AboutUs
