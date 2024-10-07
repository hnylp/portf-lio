import icon_github from './images/icon-github.svg'
import icon_linkedin from './images/icon-linkedin.svg'
import icon_whatsapp from './images/icon-whatsapp.svg'
import icon_servidor from './images/icon-servidor.png'
import icon_email from './images/icon-email.svg'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="about-me">

        <p>

      Sou Henry Rodrigues

        </p>

        <p>

              Aberto para trabalhar
        
        </p>
        </div>

    <div/>
  
        <div className="icons">
          <a href="https://github.com/hnylp"><img src={icon_github} className="logo-github"/></a>          
          <a href="https://linkedin.com/in/hnylp/"><img src={icon_linkedin} className="logo-linkedin"/></a>
          <a href="https://wa.me/55011954491981"><img src={icon_whatsapp} className="logo-whatsapp"/></a>
        </div>

      </header>


      <body className="App-body">
        
        <img src={icon_servidor} className="logo-servidor" alt="servidor"/>
        <p className="p1">

       Programador Backend C#
        
        </p>
        
          <div className="copy-email">

        <p>Trabalhei em diversos projetos focados na criação de interfaces dinâmicas e responsivas. 
          Experiência na construção de aplicativos web e desktop com foco em usabilidade, performance e integração com APIs. 
          Tenho trabalhado como freelancer nos últimos 8 meses com especialidade em: C#, Asp.net, HTML, CSS, JavaScript e SQL Server.
          </p>

        <div className="preencher-email">
          <img src={icon_email} className="icon-email" alt="email"/>         
          <input type="button" className="button-email" name="email" id="email" value="henrybds@hotmail.com" placeholder="henrybds@hotmail.com">
          
          </input>

        </div>
         
          </div>


         
        <div className="tabela-projetos">

          <p className="estudo_projeto">Estudos e Projetos</p>


            <div className="red_hny_projeto">

            <img src=""></img>

            </div>



        </div>

          </body>
    </div>
  );
}

export default App;
