import logo from './assets/logo.png'
import perfil from './assets/perfil.jpg'
import { LINKS } from './contato'
import { WhatsappIcon, InstagramIcon, PinIcon, GlobeIcon } from './icons'

function LinkButton({ href, children, primary = false, externo = true, delay }) {
  return (
    <a
      href={href}
      target={externo ? '_blank' : undefined}
      rel={externo ? 'noopener noreferrer' : undefined}
      style={{ animationDelay: delay }}
      className={`fade-up flex w-full items-center justify-center gap-3 rounded-full border px-6 py-4 font-sans text-base tracking-[0.08em] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champanhe ${
        primary
          ? 'border-champanhe bg-champanhe text-cacau shadow-lg shadow-cacau/20'
          : 'border-champanhe/70 bg-creme/5 text-creme hover:bg-creme/10'
      }`}
    >
      {children}
    </a>
  )
}

export default function Links() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-10 pt-14">
      {/* foto de perfil com crescente e estrelas */}
      <div className="fade-up relative" style={{ animationDelay: '0ms' }}>
        <svg
          viewBox="0 0 200 200"
          className="absolute -inset-5 h-[calc(100%+40px)] w-[calc(100%+40px)]"
          aria-hidden="true"
        >
          <path
            d="M 178 128 A 82 82 0 1 1 128 24"
            fill="none"
            stroke="#EAD2A8"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            className="twinkle"
            d="M 168 22 l 3.2 8.8 8.8 3.2 -8.8 3.2 -3.2 8.8 -3.2 -8.8 -8.8 -3.2 8.8 -3.2 Z"
            fill="#EAD2A8"
          />
          <path
            className="twinkle twinkle-delay"
            d="M 186 58 l 2 5.5 5.5 2 -5.5 2 -2 5.5 -2 -5.5 -5.5 -2 5.5 -2 Z"
            fill="#EAD2A8"
            opacity="0.8"
          />
        </svg>
        <img
          src={perfil}
          alt="Foto de Beatriz Chagas"
          width="144"
          height="144"
          className="relative h-36 w-36 rounded-full border-2 border-creme/80 object-cover shadow-xl shadow-cacau/25"
        />
      </div>

      {/* nome e título */}
      <header className="mt-7 text-center">
        <h1
          className="fade-up font-serif text-[2.6rem] font-medium leading-tight text-creme"
          style={{ animationDelay: '90ms' }}
        >
          Beatriz Chagas
        </h1>
        <p
          className="fade-up mt-1 font-sans text-sm tracking-[0.42em] text-champanhe"
          style={{ animationDelay: '160ms' }}
        >
          PSICOLOGIA
        </p>
        <p
          className="fade-up mt-2 font-sans text-xs tracking-[0.18em] text-creme/70"
          style={{ animationDelay: '220ms' }}
        >
          CRP 02/31234
        </p>
      </header>

      {/* botões */}
      <nav className="mt-9 flex w-full flex-col gap-4" aria-label="Links de contato">
        <LinkButton href={LINKS.whatsapp} primary delay="300ms">
          <WhatsappIcon className="h-6 w-6" />
          <span className="font-medium">Agendar pelo WhatsApp</span>
        </LinkButton>
        <LinkButton href="/" externo={false} delay="380ms">
          <GlobeIcon className="h-6 w-6" />
          <span>Conheça meu trabalho</span>
        </LinkButton>
        <LinkButton href={LINKS.instagram} delay="460ms">
          <InstagramIcon className="h-6 w-6" />
          <span>Instagram</span>
        </LinkButton>
        <LinkButton href={LINKS.maps} delay="540ms">
          <PinIcon className="h-6 w-6" />
          <span>Como chegar</span>
        </LinkButton>
      </nav>

      {/* endereço */}
      <section
        className="fade-up mt-8 w-full rounded-2xl border border-champanhe/40 bg-cacau/15 px-6 py-5 text-center"
        style={{ animationDelay: '620ms' }}
      >
        <h2 className="font-sans text-xs tracking-[0.3em] text-champanhe">CONSULTÓRIO</h2>
        <p className="mt-1 font-serif text-2xl font-medium text-creme">Espaço Evoluir</p>
        <address className="mt-2 font-sans text-sm not-italic leading-relaxed text-creme/90">
          Rua Barão de São Borja, 62 — Sala 105
          <br />
          Ed. Sigma Center, Boa Vista
          <br />
          Recife — PE
        </address>
      </section>

      {/* rodapé */}
      <footer className="fade-up mt-10 flex flex-col items-center" style={{ animationDelay: '700ms' }}>
        <img
          src={logo}
          alt="Logotipo Beatriz Chagas Psicologia"
          width="176"
          height="106"
          className="w-44 opacity-90"
        />
      </footer>
    </main>
  )
}
