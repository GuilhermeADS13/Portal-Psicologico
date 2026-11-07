import { useState } from 'react'
import perfil from './assets/perfil.jpg'
import coruja from './assets/coruja.png'
import assinatura from './assets/assinatura.png'
import logo from './assets/logo.png'
import { LINKS, TELEFONE, EMAIL, INSTAGRAM } from './contato'
import {
  WhatsappIcon,
  InstagramIcon,
  PinIcon,
  MailIcon,
  VideoIcon,
  MenuIcon,
  CloseIcon,
} from './icons'

const NAV = [
  ['#sobre', 'Sobre'],
  ['#atendimento', 'Atendimento'],
  ['#como-funciona', 'Como funciona'],
  ['#formacao', 'Formação'],
  ['#contato', 'Contato'],
]

const ENDERECO_MAPA =
  'https://www.google.com/maps?output=embed&q=' +
  encodeURIComponent('Rua Barão de São Borja, 62, Boa Vista, Recife - PE')

// fases da lua (0 = nova, 1 = cheia) acompanham as fases da vida
const PUBLICOS = [
  {
    fase: 0.22,
    titulo: 'Crianças',
    texto:
      'Com as crianças, o brincar também é linguagem. É por ele que muitas vezes aparece o que ainda não tem palavras.',
  },
  {
    fase: 0.5,
    titulo: 'Adolescentes',
    texto: 'Um espaço reservado para falar das mudanças, dos conflitos e das descobertas dessa fase.',
  },
  {
    fase: 0.76,
    titulo: 'Adultos',
    texto: 'Para cuidar de angústias, relações, perdas e escolhas, no seu próprio tempo.',
  },
  {
    fase: 1,
    titulo: 'Idosos',
    texto: 'Escuta para as questões do envelhecimento, das memórias e das mudanças que essa etapa traz.',
  },
]

const PASSOS = [
  {
    titulo: 'Primeiro contato',
    texto:
      'Você me manda uma mensagem pelo WhatsApp para tirar dúvidas e combinar um horário, presencial ou online.',
  },
  {
    titulo: 'Primeiros encontros',
    texto:
      'Conversamos sobre o que trouxe você até aqui e combinamos juntos a frequência, os horários e os valores das sessões.',
  },
  {
    titulo: 'Acompanhamento',
    texto:
      'As sessões seguem com regularidade, em um espaço de sigilo garantido pelo Código de Ética Profissional do Psicólogo.',
  },
]

const FORMACAO = [
  {
    periodo: '2020–2024',
    titulo: 'Graduação em Psicologia',
    local: 'Universidade Frassinetti do Recife (UNIFAFIRE)',
  },
  {
    periodo: '2025–2026',
    titulo: 'Pós-graduação em Avaliação Psicológica',
    local: 'Universidade Frassinetti do Recife (UNIFAFIRE)',
  },
  {
    periodo: '2025–2026',
    titulo: 'Pós-graduação em Psicologia Hospitalar',
    local: 'Faculdade Pernambucana de Saúde (FPS)',
  },
]

const EXPERIENCIA = [
  {
    periodo: 'Atual',
    titulo: 'Psicóloga clínica',
    local: 'Clínica Mediar, unidade Pina',
    texto: 'Atendimento de crianças, adolescentes, adultos e idosos.',
  },
  {
    periodo: '2025–2026',
    titulo: 'Estágio em Psicologia Hospitalar',
    local: 'IMIP, Instituto de Medicina Integral Prof. Fernando Figueira',
    texto: 'Estágio obrigatório e supervisionado da pós-graduação.',
  },
  {
    periodo: '2024',
    titulo: 'CEPARVS, projeto de extensão',
    texto:
      'Grupo de estudos e atendimento clínico de crianças e adolescentes vítimas de abuso sexual.',
  },
  {
    periodo: '2024',
    titulo: 'Plantar Cuidado',
    texto:
      'Atendimento infantil em grupos operativos, com escuta por meio do brincar, para crianças com diagnóstico ou suspeita de autismo e outros distúrbios.',
  },
  {
    periodo: 'Graduação',
    titulo: 'Monitoria acadêmica',
    texto: 'Disciplinas de Estatística e Informática Aplicadas à Saúde e de Estruturas Clínicas.',
  },
]

const DUVIDAS = [
  {
    pergunta: 'Como agendo uma sessão?',
    resposta: `Pelo WhatsApp, no número ${TELEFONE}, ou por mensagem no Instagram, ${INSTAGRAM}. Na mensagem, conte se prefere atendimento presencial ou online.`,
  },
  {
    pergunta: 'Como funciona o atendimento online?',
    resposta:
      'A sessão acontece por videochamada. Você precisa de um lugar reservado, onde possa falar à vontade, e de uma conexão estável de internet.',
  },
  {
    pergunta: 'Você atende crianças e adolescentes?',
    resposta:
      'Sim. No caso de crianças e adolescentes, o primeiro contato é feito pelos pais ou responsáveis.',
  },
  {
    pergunta: 'O que eu falo nas sessões fica em sigilo?',
    resposta:
      'Sim. O sigilo é um dever do psicólogo, previsto no Código de Ética Profissional da categoria.',
  },
  {
    pergunta: 'Quais são os valores?',
    resposta: 'Os valores e as formas de pagamento são informados no primeiro contato pelo WhatsApp.',
  },
]

/* ---------- peças visuais ---------- */

function estrela(x, y, s) {
  const k = s * 0.18
  return `M ${x} ${y - s} Q ${x + k} ${y - k} ${x + s} ${y} Q ${x + k} ${y + k} ${x} ${y + s} Q ${x - k} ${y + k} ${x - s} ${y} Q ${x - k} ${y - k} ${x} ${y - s} Z`
}

// Retrato dentro da lua crescente, como a coruja no logotipo.
// Lua = círculo (190,210) r175 menos círculo (222,182) r165; o retrato
// ocupa o círculo interno, com uma folga de 25 unidades.
function LuaRetrato({ className = '' }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-[-14%] bg-[radial-gradient(closest-side,rgba(234,210,168,0.16),transparent)]"
      />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="brilho-lua" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EAD2A8" stopOpacity="0.05" />
            <stop offset="1" stopColor="#EAD2A8" stopOpacity="0.28" />
          </linearGradient>
        </defs>
        <path
          className="lua-brilho"
          d="M 128.14 46.29 A 175 175 0 1 0 344.04 293.05 A 165 165 0 1 1 128.14 46.29 Z"
          fill="url(#brilho-lua)"
        />
        <path
          className="lua-traco"
          pathLength="1"
          d="M 128.14 46.29 A 175 175 0 1 0 344.04 293.05 A 165 165 0 1 1 128.14 46.29 Z"
          fill="none"
          stroke="#EAD2A8"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path className="twinkle" d={estrela(352, 48, 15)} fill="#EAD2A8" />
        <path className="twinkle twinkle-delay" d={estrela(386, 112, 8)} fill="#EAD2A8" opacity="0.85" />
        <circle cx="318" cy="22" r="2.2" fill="#EAD2A8" opacity="0.7" />
      </svg>
      <img
        src={perfil}
        alt="Retrato de Beatriz Chagas"
        width="512"
        height="512"
        className="retrato absolute left-[20.5%] top-[10.5%] w-[70%] rounded-full object-cover shadow-2xl shadow-black/30"
      />
    </div>
  )
}

function FaseDaLua({ fase, className = '' }) {
  const r = 17
  const c = 20
  const k = Math.cos(Math.PI * fase)
  const iluminada =
    fase >= 1
      ? null
      : `M ${c} ${c - r} A ${r} ${r} 0 0 1 ${c} ${c + r} A ${Math.abs(k) * r} ${r} 0 0 ${k > 0 ? 0 : 1} ${c} ${c - r} Z`
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx={c} cy={c} r={r} fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      {iluminada ? <path d={iluminada} fill="currentColor" /> : <circle cx={c} cy={c} r={r} fill="currentColor" />}
    </svg>
  )
}

function BotaoWhatsapp({ children = 'Agendar pelo WhatsApp', claro = false, className = '' }) {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-medium tracking-wide transition-colors duration-200 ${
        claro ? 'bg-champanhe text-cacau hover:bg-creme' : 'bg-cacau text-creme hover:bg-caramelo'
      } ${className}`}
    >
      <WhatsappIcon className="h-5 w-5" />
      {children}
    </a>
  )
}

/* ---------- seções ---------- */

function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="noite sticky top-0 z-40 bg-cacau/95 text-creme backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <a href="#inicio" onClick={fechar} className="flex items-center gap-3">
          <img src={coruja} alt="" width="259" height="237" className="h-11 w-auto" />
          <span className="font-serif text-[1.35rem] font-medium leading-none">
            Beatriz Chagas
            <span className="mt-1 block font-sans text-[0.62rem] font-normal tracking-[0.34em] text-champanhe">
              PSICOLOGIA
            </span>
          </span>
        </a>

        <nav aria-label="Seções do site" className="hidden items-center gap-8 lg:flex">
          {NAV.map(([href, rotulo]) => (
            <a key={href} href={href} className="text-[0.95rem] text-creme/80 transition-colors hover:text-champanhe">
              {rotulo}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-champanhe/70 px-5 py-2 text-[0.95rem] text-champanhe transition-colors hover:bg-champanhe hover:text-cacau"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          className="-mr-2 rounded-full p-2 text-champanhe lg:hidden"
        >
          {aberto ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          <span className="sr-only">{aberto ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
      </div>

      {aberto && (
        <nav id="menu-movel" aria-label="Seções do site" className="border-t border-champanhe/15 px-5 pb-6 pt-2 lg:hidden">
          <ul>
            {NAV.map(([href, rotulo]) => (
              <li key={href}>
                <a href={href} onClick={fechar} className="block py-3 font-serif text-2xl text-creme">
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>
          <BotaoWhatsapp claro className="mt-4 w-full" />
        </nav>
      )}
    </header>
  )
}

function Inicio() {
  return (
    <section id="inicio" className="noite relative overflow-hidden bg-cacau text-creme">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28 lg:pt-14">
        <div className="order-2 lg:order-1">
          <h1
            className="fade-up text-balance font-serif text-[2.7rem] font-medium leading-[1.04] sm:text-[3.6rem] lg:text-[4.3rem]"
            style={{ animationDelay: '700ms' }}
          >
            Uma escuta atenta para cada fase da vida
          </h1>
          <p
            className="fade-up mt-7 max-w-[34rem] text-[1.1rem] leading-[1.7] text-creme/85"
            style={{ animationDelay: '850ms' }}
          >
            Sou psicóloga clínica de orientação psicanalítica e atendo crianças, adolescentes, adultos e
            idosos. As sessões acontecem no consultório, na Boa Vista, em Recife, ou online, por
            videochamada.
          </p>
          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            style={{ animationDelay: '1000ms' }}
          >
            <BotaoWhatsapp claro />
            <a
              href="#como-funciona"
              className="text-champanhe underline decoration-champanhe/40 underline-offset-8 transition-colors hover:decoration-champanhe"
            >
              Como funciona o atendimento
            </a>
          </div>
          <p className="fade-up mt-12 text-sm text-creme/60" style={{ animationDelay: '1150ms' }}>
            Beatriz Chagas Silva, CRP 02/31234
          </p>
        </div>

        <LuaRetrato className="order-1 mx-auto w-[17rem] sm:w-[22rem] lg:order-2 lg:w-full lg:max-w-[30rem]" />
      </div>
    </section>
  )
}

function Sobre() {
  const mascara = {
    WebkitMaskImage: `url(${assinatura})`,
    maskImage: `url(${assinatura})`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }

  return (
    <section id="sobre" className="scroll-mt-16 bg-papel">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:py-32">
        <div>
          <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">Sobre mim</h2>
          <div className="mt-8 max-w-[36rem] space-y-6 font-serif text-[1.3rem] leading-[1.65] text-cacau/90">
            <p>
              Sou formada em Psicologia pela Universidade Frassinetti do Recife (UNIFAFIRE) e trabalho com
              a clínica psicanalítica. Hoje atendo no Espaço Evoluir, na Boa Vista, e na Clínica Mediar,
              unidade Pina.
            </p>
            <p>
              Depois da graduação, fiz pós-graduação em Avaliação Psicológica, também na UNIFAFIRE, e em
              Psicologia Hospitalar, pela Faculdade Pernambucana de Saúde (FPS), com estágio supervisionado
              no IMIP.
            </p>
            <p>
              Ainda na faculdade, atendi crianças e adolescentes no projeto de extensão CEPARVS e participei
              do Plantar Cuidado, um grupo terapêutico em que a escuta das crianças acontecia pelo brincar.
              Procuro unir formação técnica, experiência clínica e estudo contínuo a uma prática ética e
              cuidadosa.
            </p>
          </div>
          <div
            role="img"
            aria-label="Assinatura de Beatriz Chagas"
            className="mt-10 aspect-[709/163] w-64 bg-caramelo sm:w-72"
            style={mascara}
          />
        </div>

        <dl className="self-end border-t border-cacau/15 lg:mb-4">
          {[
            ['Registro profissional', 'CRP 02/31234'],
            ['Abordagem', 'Psicanálise'],
            ['Quem eu atendo', 'Crianças, adolescentes, adultos e idosos'],
            ['Modalidades', 'Presencial em Recife e online'],
          ].map(([termo, valor]) => (
            <div key={termo} className="border-b border-cacau/15 py-5">
              <dt className="text-sm text-cacau/70">{termo}</dt>
              <dd className="mt-1 font-serif text-[1.45rem] font-medium leading-snug">{valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Atendimento() {
  return (
    <section id="atendimento" className="scroll-mt-16 bg-creme/70">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">Quem eu atendo</h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-cacau/80">
            Cada idade traz as suas próprias perguntas. O atendimento acompanha quem chega, no tempo e na
            história de cada pessoa.
          </p>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PUBLICOS.map((p) => (
            <li key={p.titulo}>
              <FaseDaLua fase={p.fase} className="h-11 w-11 text-caramelo" />
              <h3 className="mt-6 font-serif text-[1.85rem] font-medium">{p.titulo}</h3>
              <p className="mt-3 leading-[1.7] text-cacau/80">{p.texto}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] bg-papel p-8 sm:p-10">
            <PinIcon className="h-7 w-7 text-caramelo" />
            <h3 className="mt-5 font-serif text-[1.85rem] font-medium">Presencial</h3>
            <p className="mt-3 leading-[1.7] text-cacau/80">
              No Espaço Evoluir: Rua Barão de São Borja, 62, sala 105, Ed. Sigma Center, Boa Vista, Recife.
            </p>
            <a
              href={LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-caramelo underline decoration-caramelo/40 underline-offset-[6px] hover:decoration-caramelo"
            >
              Ver no Google Maps
            </a>
          </article>
          <article className="rounded-[2rem] bg-papel p-8 sm:p-10">
            <VideoIcon className="h-7 w-7 text-caramelo" />
            <h3 className="mt-5 font-serif text-[1.85rem] font-medium">Online</h3>
            <p className="mt-3 leading-[1.7] text-cacau/80">
              Por videochamada, para quem mora longe ou prefere ser atendido de casa. O sigilo e o cuidado
              são os mesmos do consultório.
            </p>
            <a
              href={LINKS.salaOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-caramelo underline decoration-caramelo/40 underline-offset-[6px] hover:decoration-caramelo"
            >
              Fazer meu cadastro para o atendimento online
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

function Psicanalise() {
  return (
    <section id="abordagem" className="scroll-mt-16 bg-papel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-32">
        <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">Sobre a psicanálise</h2>
        <div className="max-w-[38rem] space-y-6 font-serif text-[1.3rem] leading-[1.65] text-cacau/90">
          <p>
            Na psicanálise, cada pessoa é ouvida a partir da sua própria história. Nas sessões, você fala
            livremente sobre o que vier à cabeça, sem precisar organizar o assunto antes.
          </p>
          <p>
            Aos poucos, essa fala permite perceber o que se repete, o que faz sofrer e o que se deseja. O
            ritmo do processo é construído junto, sessão a sessão.
          </p>
        </div>
      </div>
    </section>
  )
}

function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-creme/70">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">Como funciona</h2>

        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {PASSOS.map((passo, i) => (
            <li key={passo.titulo} className="relative">
              <span className="font-serif text-[4.5rem] font-medium leading-none text-caramelo/70" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-serif text-[1.85rem] font-medium">{passo.titulo}</h3>
              <p className="mt-3 max-w-sm leading-[1.7] text-cacau/80">{passo.texto}</p>
            </li>
          ))}
        </ol>

        <BotaoWhatsapp className="mt-16" />
      </div>
    </section>
  )
}

function LinhaDoTempo({ titulo, itens }) {
  return (
    <div>
      <h3 className="font-serif text-[1.85rem] font-medium">{titulo}</h3>
      <ol className="mt-8 border-l border-caramelo/30">
        {itens.map((item) => (
          <li key={item.titulo} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border border-caramelo bg-papel"
            />
            <p className="text-sm font-medium tracking-wide text-caramelo">{item.periodo}</p>
            <p className="mt-1 font-serif text-[1.4rem] font-medium leading-snug">{item.titulo}</p>
            {item.local && <p className="mt-1 text-cacau/80">{item.local}</p>}
            {item.texto && <p className="mt-2 leading-[1.7] text-cacau/70">{item.texto}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}

function Formacao() {
  return (
    <section id="formacao" className="scroll-mt-16 bg-papel">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">Formação e experiência</h2>
        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <LinhaDoTempo titulo="Formação acadêmica" itens={FORMACAO} />
          <LinhaDoTempo titulo="Experiência" itens={EXPERIENCIA} />
        </div>
      </div>
    </section>
  )
}

function Duvidas() {
  return (
    <section id="duvidas" className="scroll-mt-16 bg-creme/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-32">
        <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">Dúvidas frequentes</h2>
        <div className="border-t border-cacau/15">
          {DUVIDAS.map((d) => (
            <details key={d.pergunta} className="group border-b border-cacau/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[1.4rem] font-medium leading-snug [&::-webkit-details-marker]:hidden">
                {d.pergunta}
                <span
                  aria-hidden="true"
                  className="relative h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:bg-caramelo after:absolute after:left-1/2 after:top-0 after:h-4 after:w-px after:bg-caramelo after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-xl pb-6 leading-[1.75] text-cacau/80">{d.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="noite scroll-mt-16 bg-cacau text-creme">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div>
          <h2 className="text-balance font-serif text-[2.6rem] font-medium leading-tight lg:text-[3.3rem]">
            Agende sua primeira sessão
          </h2>
          <p className="mt-5 max-w-md text-[1.0625rem] leading-[1.75] text-creme/80">
            O primeiro passo é uma mensagem. Pelo WhatsApp ou pelo Instagram, você tira dúvidas e combina o
            melhor horário.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BotaoWhatsapp claro />
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-champanhe/70 px-7 py-4 font-medium tracking-wide text-creme transition-colors duration-200 hover:bg-creme/10"
            >
              <InstagramIcon className="h-5 w-5 text-champanhe" />
              Falar pelo Instagram
            </a>
          </div>

          <ul className="mt-12 space-y-4 text-creme/85">
            <li>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-champanhe"
              >
                <InstagramIcon className="h-5 w-5 text-champanhe" />
                {INSTAGRAM}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 break-all transition-colors hover:text-champanhe">
                <MailIcon className="h-5 w-5 shrink-0 text-champanhe" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-champanhe">Consultório</p>
          <h3 className="mt-1 font-serif text-[1.85rem] font-medium">Espaço Evoluir</h3>
          <address className="mt-3 not-italic leading-[1.7] text-creme/80">
            Rua Barão de São Borja, 62, sala 105
            <br />
            Ed. Sigma Center, Boa Vista, Recife (PE)
          </address>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-champanhe/20">
            <iframe
              title="Mapa do Espaço Evoluir, na Boa Vista, Recife"
              src={ENDERECO_MAPA}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-64 w-full sm:h-72"
            />
          </div>
          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-champanhe underline decoration-champanhe/40 underline-offset-[6px] hover:decoration-champanhe"
          >
            <PinIcon className="h-4 w-4" />
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

function Rodape() {
  return (
    <footer className="noite bg-cacau-escuro text-creme/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center sm:px-8">
        <img src={logo} alt="Beatriz Chagas Psicologia, CRP 02/31234" width="760" height="519" className="w-56" />
        <p className="text-sm leading-relaxed">
          Beatriz Chagas Silva, psicóloga
          <br />
          CRP 02/31234
        </p>
        <p className="text-xs text-creme/50">© {new Date().getFullYear()} Beatriz Chagas Psicologia</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="site font-sans lining-nums">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-champanhe focus:px-5 focus:py-3 focus:text-cacau"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Inicio />
        <Sobre />
        <Atendimento />
        <Psicanalise />
        <ComoFunciona />
        <Formacao />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
    </div>
  )
}
