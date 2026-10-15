import ContactForm from "./components/ContactForm";
import { WHATSAPP, EMAIL, services, steps, projects, faqs } from "./data";

export default function App() {
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá Koodu! Quero conhecer os serviços da agência.")}`;

  return (
    <div className="k">
      <header className="top">
        <div className="wrap">
          <a className="logo serif" href="#topo">koodu<i>.</i></a>
          <nav>
            <a className="hide" href="#servicos">Serviços</a>
            <a className="hide" href="#processo">Processo</a>
            <a className="hide" href="#portfolio">Portfólio</a>
            <a className="btn" href="#contato">Orçamento</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="wrap">
          <div>
            <h1 className="serif">Seu negócio merece uma presença digital à altura.</h1>
             <br></br>
             <div className="frame">
              <span className="bar" />
              <div className="screen">
                <div className="h">Design que transforma visitas em negócios.</div>
                <div className="l" style={{ width: "80%" }} />
                <div className="l" style={{ width: "58%" }} />
                <div className="pill" />
                <div className="g"><div /><div /><div /></div>
              </div>
            </div>
           <br></br>
           <br></br>
            <div className="row">
              <a className="btn" href="#contato">Quero meu novo site</a>
              <a className="btn ghost" href="#portfolio">Ver projetos</a>
            </div>
            <div className="note">
              <div><b>2015+</b>atuando em tecnologia</div>
              <div><b>100%</b>projetos personalizados</div>
            </div>
          </div>

          <div aria-hidden="true" style={{ position: "relative" }}>
            <p className="lead">
              Criamos sites, lojas virtuais e experiências digitais sob medida, para transformar sua marca em
              confiança, oportunidades e vendas.
            </p>
               <ContactForm />
          </div>
        </div>
      </section>

      <section className="sec" id="servicos">
        <div className="wrap">
          <h2 className="serif">Tudo o que sua presença digital precisa.</h2>
          <p className="sub">Do primeiro wireframe à publicação, pensamos estratégia, design, desenvolvimento e performance em conjunto.</p>
          <div className="list">
            {services.map(([t, d]) => (
              <div className="row3" key={t}>
                <h3 className="serif">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap about">
          <div>
            <h2 className="serif">Não entregamos só páginas. Criamos experiências.</h2>
            <p className="sub">Um bom site precisa ser bonito, claro e, principalmente, útil para o negócio. Cada projeto nasce de uma conversa sobre seus objetivos.</p>
            <ul>
              <li>Design responsivo para todos os dispositivos</li>
              <li>Estrutura preparada para SEO</li>
              <li>Performance e experiência de usuário</li>
              <li>Arquitetura pensada para evolução</li>
            </ul>
          </div>
          <div className="quote">
            <p>Uma combinação de criatividade, tecnologia e visão de negócio para colocar sua empresa em movimento.</p>
            <span>web + estratégia</span>
          </div>
        </div>
      </section>

      <section className="sec" id="processo">
        <div className="wrap">
          <h2 className="serif">Do briefing ao lançamento, sem complicação.</h2>
          <div className="steps">
            {steps.map(([t, d]) => (
              <div className="step" key={t}>
                <h3 className="serif">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="portfolio" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="serif">Projetos pensados para gerar presença e resultado.</h2>
          <div className="proj">
            {projects.map(([tag, t, bg]) => (
              <article key={t}>
                <div
                  className="th"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  {tag}
                </div>
                <h3 className="serif">{t}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="serif">Perguntas frequentes</h2>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark" id="contato">
        <div className="wrap contact">
          <div>
            <h2 className="serif">Tem uma ideia? Vamos transformar em um projeto.</h2>
            <p className="sub">Conte o que você precisa e receba uma proposta sob medida.</p>
            <p style={{ marginTop: 32 }}>
              <a className="btn ghost" href={wa} target="_blank" rel="noreferrer">Fale no WhatsApp</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="f">
        <div className="wrap">
          <div>
            <div className="logo serif">koodu<i>.</i></div>
            <p>Agência web · São Paulo</p>
          </div>
          <div>
            <p>{EMAIL}</p>
            <p>© 2026 Koodu. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a className="wa" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  );
}