/**
 * DIREÇÃO VISUAL: modernismo tropical editorial — composição assimétrica,
 * verde-horizonte como assinatura, fotografia territorial e contraste sereno.
 */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Ruler,
  TreePine,
  X,
} from "lucide-react";

type PropertyStatus = "Pronto para construir" | "Em desenvolvimento";

type Property = {
  name: string;
  status: PropertyStatus;
  location: string;
  image: string;
  accent: string;
};

const officeLocation = { lat: -6.546573, lng: -49.848068 };

const properties: Property[] = [
  {
    name: "Vale dos Sonhos I",
    status: "Pronto para construir",
    location: "Canaã dos Carajás, PA",
    image: "/manus-storage/moreira-vale-sonhos-aereo_038bc6d7.jpg",
    accent: "Lotes residenciais",
  },
  {
    name: "Vale dos Sonhos II",
    status: "Pronto para construir",
    location: "Canaã dos Carajás, PA",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
    accent: "Infraestrutura urbana",
  },
  {
    name: "Vale dos Sonhos III",
    status: "Em desenvolvimento",
    location: "Canaã dos Carajás, PA",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85",
    accent: "Um novo horizonte",
  },
  {
    name: "Novo Horizonte II",
    status: "Pronto para construir",
    location: "Canaã dos Carajás, PA",
    image: "/manus-storage/moreira-horizonte-avenida_bd254e29.jpg",
    accent: "Bairro consolidado",
  },
  {
    name: "Novo Horizonte III",
    status: "Em desenvolvimento",
    location: "Canaã dos Carajás, PA",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85",
    accent: "Próxima etapa",
  },
];

const categories = ["Todos", "Pronto para construir", "Em desenvolvimento"] as const;
type PropertyFilter = (typeof categories)[number];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<PropertyFilter>("Todos");
  const [formSent, setFormSent] = useState(false);

  const displayedProperties = useMemo(
    () =>
      activeFilter === "Todos"
        ? properties
        : properties.filter(property => property.status === activeFilter),
    [activeFilter],
  );

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  function handleNavClick(id: string) {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 20);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" onClick={() => handleNavClick("inicio")} aria-label="Moreira Empreendimentos — início">
            <img src="/manus-storage/moreira-simbolo-m_6dd6d9ee.png" alt="" className="brand-symbol" />
            <span className="brand-wordmark">
              <strong>MOREIRA</strong>
              <small>EMPREENDIMENTOS IMOBILIÁRIOS</small>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={() => handleNavClick("inicio")}>Início</a>
            <a href="#a-moreira" onClick={() => handleNavClick("a-moreira")}>A Moreira</a>
            <a href="#empreendimentos" onClick={() => handleNavClick("empreendimentos")}>Empreendimentos</a>
            <a href="#contato" onClick={() => handleNavClick("contato")}>Contato</a>
          </nav>

          <a className="header-contact" href="https://wa.me/5594992369963" target="_blank" rel="noreferrer">
            <MessageCircle size={16} aria-hidden="true" />
            Fale conosco
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-contour contour-one" aria-hidden="true" />
          <div className="hero-contour contour-two" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light"><MapPin size={15} /> Canaã dos Carajás · Pará</span>
              <h1>O lugar certo para <em>construir</em> o seu futuro.</h1>
              <p>Há mais de uma década, transformamos terra em possibilidades para famílias e negócios que querem crescer.</p>
              <div className="hero-actions">
                <button className="button button-light" type="button" onClick={() => scrollToId("empreendimentos")}>
                  Conheça os empreendimentos <ArrowRight size={17} />
                </button>
                <a className="text-link-light" href="https://wa.me/5594992369963" target="_blank" rel="noreferrer">
                  Falar com um especialista <ChevronRight size={17} />
                </a>
              </div>
            </div>

            <form className="lead-card" onSubmit={handleLeadSubmit}>
              {!formSent ? (
                <>
                  <span className="form-kicker">ATENDIMENTO PERSONALIZADO</span>
                  <h2>Vamos encontrar o lote ideal para você.</h2>
                  <p>Deixe seus dados e receba as opções disponíveis.</p>
                  <label>
                    <span>Seu nome</span>
                    <input name="nome" placeholder="Como podemos chamar você?" required />
                  </label>
                  <label>
                    <span>Seu WhatsApp</span>
                    <input name="telefone" inputMode="tel" placeholder="(94) 00000-0000" required />
                  </label>
                  <label>
                    <span>O que você procura?</span>
                    <select name="interesse" defaultValue="">
                      <option value="" disabled>Selecione uma opção</option>
                      <option>Lote para morar</option>
                      <option>Lote comercial</option>
                      <option>Quero conhecer todos</option>
                    </select>
                  </label>
                  <label className="consent">
                    <input type="checkbox" required />
                    <span>Autorizo o contato da equipe Moreira sobre empreendimentos e condições disponíveis.</span>
                  </label>
                  <button className="button button-primary button-full" type="submit">Quero receber opções <ArrowRight size={17} /></button>
                </>
              ) : (
                <div className="lead-success" role="status">
                  <span className="success-icon"><Check size={26} /></span>
                  <h2>Recebemos seu interesse.</h2>
                  <p>Nossa equipe entrará em contato com as informações sobre os empreendimentos.</p>
                  <button type="button" className="button button-primary" onClick={() => setFormSent(false)}>Enviar outro contato</button>
                </div>
              )}
            </form>
          </div>
          <div className="hero-bottom-strip">
            <span>Desde 2007, ajudando a desenhar novos começos.</span>
            <button type="button" onClick={() => scrollToId("a-moreira")}>Conheça nossa história <ArrowRight size={16} /></button>
          </div>
        </section>

        <section className="intro section" id="a-moreira">
          <div className="intro-copy">
            <span className="eyebrow">SOBRE A MOREIRA</span>
            <h2>Terrenos que abrem espaço para a vida acontecer.</h2>
            <p className="intro-lead">A Moreira Empreendimentos é pioneira em vendas de lotes em Canaã dos Carajás, trabalhando com escolhas residenciais e comerciais planejadas para cada etapa do seu projeto.</p>
            <p>Mais do que apresentar terrenos, nossa equipe acompanha a decisão com clareza: localização, infraestrutura, documentação e caminhos para você tirar o plano do papel.</p>
            <a className="text-link-dark" href="#contato" onClick={() => handleNavClick("contato")}>Converse com a nossa equipe <ArrowRight size={17} /></a>
          </div>
          <div className="intro-visual">
            <div className="photo-frame">
              <img src="/manus-storage/moreira-escritorio-atendimento_9941921e.jpg" alt="Interior acolhedor do escritório de atendimento da Moreira" />
            </div>
            <div className="experience-note"><strong>+ de 18 anos</strong><span>Construindo caminhos em Canaã dos Carajás.</span></div>
          </div>
        </section>

        <section className="search-band" aria-label="Busca de empreendimento">
          <div className="search-band__title">
            <span className="eyebrow eyebrow-light">ESCOLHA COM CALMA</span>
            <h2>Qual projeto faz sentido para o seu momento?</h2>
          </div>
          <div className="search-band__controls">
            <span className="search-label">Ver opções por estágio</span>
            <div className="filter-list">
              {categories.map(category => (
                <button
                  type="button"
                  key={category}
                  className={activeFilter === category ? "active" : ""}
                  aria-pressed={activeFilter === category}
                  onClick={() => {
                    setActiveFilter(category);
                    scrollToId("empreendimentos");
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio section section-dark" id="empreendimentos">
          <div className="section-heading portfolio-heading">
            <div>
              <span className="eyebrow eyebrow-light">NOSSOS EMPREENDIMENTOS</span>
              <h2>Lugares para dar forma aos seus planos.</h2>
            </div>
            <p>Explore os bairros e loteamentos Moreira. Cada um tem uma vocação, uma paisagem e uma oportunidade para começar.</p>
          </div>

          <div className="property-grid">
            {displayedProperties.map((property, index) => (
              <article className={`property-card card-${(index % 5) + 1}`} key={property.name}>
                <img src={property.image} alt={`Vista do empreendimento ${property.name}`} loading="lazy" />
                <div className="property-overlay" />
                <div className="property-status">{property.status}</div>
                <div className="property-content">
                  <span>{property.accent}</span>
                  <h3>{property.name}</h3>
                  <p><MapPin size={14} /> {property.location}</p>
                  <button type="button" onClick={() => scrollToId("contato")}>Tenho interesse <ArrowRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
          <p className="portfolio-note"><Compass size={17} /> Não encontrou a opção ideal? Nossa equipe pode indicar o melhor caminho para o seu objetivo.</p>
        </section>

        <section className="value section">
          <div className="value-head">
            <span className="eyebrow">POR QUE ESCOLHER A MOREIRA</span>
            <h2>Uma decisão grande pede uma base segura.</h2>
          </div>
          <div className="value-grid">
            <article>
              <span className="value-icon"><Ruler size={24} /></span>
              <h3>Planejamento que respeita o seu projeto</h3>
              <p>Empreendimentos pensados para que você visualize sua casa, negócio ou investimento desde o primeiro passo.</p>
            </article>
            <article>
              <span className="value-icon"><TreePine size={24} /></span>
              <h3>Infraestrutura para viver melhor</h3>
              <p>Ruas, áreas de convivência e um entorno em desenvolvimento fazem parte de uma escolha que dura mais.</p>
            </article>
            <article>
              <span className="value-icon"><Building2 size={24} /></span>
              <h3>Atendimento próximo e objetivo</h3>
              <p>Uma equipe local para explicar opções, organizar a sua visita e tornar a jornada de compra mais transparente.</p>
            </article>
          </div>
        </section>

        <section className="milestone">
          <div className="milestone-art" aria-hidden="true"><span>10</span><i>mil</i></div>
          <div className="milestone-copy">
            <span className="eyebrow eyebrow-light">NOSSA HISTÓRIA CONTINUA</span>
            <h2><strong>10 mil</strong> sonhos realizados, um terreno de cada vez.</h2>
            <p>Sentimos orgulho de fazer parte dos começos de tantas famílias. Para nós, um lar é o lugar onde memórias, conquistas e novos capítulos encontram espaço para crescer.</p>
            <a className="button button-light" href="https://www.youtube.com/watch?v=To0O2W-HR8M" target="_blank" rel="noreferrer"><Play size={16} fill="currentColor" /> Assistir à nossa história</a>
          </div>
        </section>

        <section className="story section">
          <div className="story-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/To0O2W-HR8M?rel=0"
              title="A Moreira busca o novo e se renova para ser melhor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="story-copy">
            <span className="eyebrow">UMA MARCA EM MOVIMENTO</span>
            <h2>A gente se renova para continuar perto do que importa.</h2>
            <p>Inovação, parceria e realização são princípios que guiam a próxima etapa da Moreira — sem perder a proximidade que nos trouxe até aqui.</p>
            <button className="text-link-dark" type="button" onClick={() => scrollToId("contato")}>Agende uma visita <ArrowRight size={17} /></button>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-copy">
            <span className="eyebrow">VISITE O NOSSO ESCRITÓRIO</span>
            <h2>Uma conversa pode ser o começo do seu próximo endereço.</h2>
            <p>Venha tomar um café com a nossa equipe, conhecer as opções e tirar suas dúvidas com quem conhece a região.</p>

            <div className="contact-details">
              <div><Clock3 size={18} /><span><strong>Atendimento</strong>Segunda a sexta, das 7h às 18h20</span></div>
              <div><MapPin size={18} /><span><strong>Endereço</strong>Avenida Weyne Cavalcante, 1220<br />Novo Horizonte II · Canaã dos Carajás, PA</span></div>
              <div><Phone size={18} /><span><strong>Telefones</strong>(94) 3358-1523 · (94) 99236-9963</span></div>
            </div>
            <a className="button button-primary" href="https://wa.me/5594992369963" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar pelo WhatsApp</a>
          </div>
          <div className="office-map">
            <div className="map-label"><span className="map-label__symbol"><MapPin size={15} /></span><span><strong>Moreira Empreendimentos</strong>Estamos em Novo Horizonte II</span></div>
            <iframe className="office-map__canvas" title="Localização da Moreira Empreendimentos no mapa" src={`https://www.google.com/maps?q=${officeLocation.lat},${officeLocation.lng}&z=14&output=embed`} loading="lazy" />
            <a className="map-open" href="https://www.google.com/maps?ll=-6.546573,-49.848068&z=14&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17527102180074174817" target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/moreira-simbolo-m_6dd6d9ee.png" alt="" />
          <div><strong>MOREIRA</strong><span>EMPREENDIMENTOS IMOBILIÁRIOS</span></div>
        </div>
        <p>Seu lugar para construir histórias em Canaã dos Carajás.</p>
        <div className="footer-links">
          <a href="#inicio" onClick={() => handleNavClick("inicio")}>Início</a>
          <a href="#empreendimentos" onClick={() => handleNavClick("empreendimentos")}>Empreendimentos</a>
          <a href="mailto:contato@grupomoreira.com.br">contato@grupomoreira.com.br</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Moreira Empreendimentos. Todos os direitos reservados.</span>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/5594992369963" target="_blank" rel="noreferrer" aria-label="Conversar com a Moreira pelo WhatsApp"><MessageCircle size={22} fill="currentColor" /></a>
    </div>
  );
}
