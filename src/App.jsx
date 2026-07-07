import logo from './assets/logo.png'
import perfil from './assets/perfil.jpg'

const LINKS = {
  whatsapp:
    'https://api.whatsapp.com/send?phone=5581999631939&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os',
  instagram: 'https://www.instagram.com/psi_beatrizchagassilva',
  maps: 'https://maps.app.goo.gl/WVTNaf5tJ3aDy8jp6',
}

function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.17.24-.64.8-.78.97-.15.16-.29.18-.54.06-.24-.13-1.04-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.56.12.16 1.74 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

function LinkButton({ href, children, primary = false, delay }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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

export default function App() {
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
        <LinkButton href={LINKS.instagram} delay="380ms">
          <InstagramIcon className="h-6 w-6" />
          <span>Instagram</span>
        </LinkButton>
        <LinkButton href={LINKS.maps} delay="460ms">
          <PinIcon className="h-6 w-6" />
          <span>Como chegar</span>
        </LinkButton>
      </nav>

      {/* endereço */}
      <section
        className="fade-up mt-8 w-full rounded-2xl border border-champanhe/40 bg-cacau/15 px-6 py-5 text-center"
        style={{ animationDelay: '540ms' }}
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
      <footer className="fade-up mt-10 flex flex-col items-center" style={{ animationDelay: '620ms' }}>
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
