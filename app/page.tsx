import Image from "next/image";
import { Reveal } from "./components/Reveal";

const services = [
  {
    title: "Mediestrategi og PR",
    text: "Rådgivning om hvordan selskaper, organisasjoner og prosjekter kan få bedre synlighet og større gjennomslag i media.",
    icon: "📣",
  },
  {
    title: "Historiefortelling og innhold",
    text: "Utvikling av historier, konsepter og innhold for TV, podkast, digitale flater og redaksjonelle sammenhenger.",
    icon: "✒️",
  },
  {
    title: "Medietrening",
    text: "Trening av ledere, talspersoner og profiler før intervjuer, opptredener og møte med pressen.",
    icon: "🎙️",
  },
  {
    title: "Ledelse og kommunikasjon",
    text: "Foredrag og rådgivning om hvordan tydelig kommunikasjon bygger engasjement, kultur og retning.",
    icon: "👥",
  },
];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-[#0b2341]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10 lg:py-5">
          <a href="#top" className="min-w-0 leading-tight">
            <div className="text-[1.7rem] font-black leading-[0.95] tracking-wide sm:text-2xl">
              THOMAS<br className="sm:hidden" /> GJELSÅS
            </div>
            <div className="mt-2 hidden max-w-[230px] text-[0.72rem] font-bold uppercase leading-[1.45] tracking-[0.22em] text-[#334] sm:block sm:max-w-none sm:text-xs">
              Media · kommunikasjon · historiefortelling
            </div>
          </a>

          <nav className="flex shrink-0 gap-5 text-[0.85rem] font-bold uppercase tracking-wide sm:gap-8 sm:text-sm">
            <a className="hover:text-[#b7842b]" href="#om-meg">Om meg</a>
            <a className="hover:text-[#b7842b]" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-[#061d38] md:min-h-[82vh]">
      <Image
        src="/images/thomas-portrett.webp"
        alt="Thomas Gjelsås – rådgiver innen media, kommunikasjon og historiefortelling"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center opacity-80 transition duration-700 hover:scale-[1.02] md:block"
      />

      <Image
        src="/images/thomas-portrett-mobile.webp"
        alt="Thomas Gjelsås – rådgiver innen media, kommunikasjon og historiefortelling"
        fill
        priority
        sizes="100vw"
        className="block object-cover object-[70%_0%] opacity-80 md:hidden"
      />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d38]/95 via-[#061d38]/70 to-[#061d38]/20" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-8 pt-64 md:min-h-[82vh] md:items-center md:px-10 md:py-28">
          <div className="max-w-[720px] text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#d2a14a]">
              Rådgiver og historieforteller
            </p>
            <h1 className="max-w-[90vw] font-serif text-[2.35rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[3.2rem] md:text-6xl lg:text-7xl">
              Media,<br />
              kommunikasjon<br />
              og historiefortelling
            </h1>
            <div className="my-8 h-1 w-24 bg-[#d2a14a]" />
            <p className="max-w-[92vw] text-[1.2rem] leading-8 text-white/90 md:max-w-xl md:text-xl">
              Jeg hjelper selskaper, organisasjoner og idrett med å utvikle historier som skaper synlighet, gjennomslag og engasjement.
            </p>
            <p className="mt-5 max-w-[92vw] text-[1.2rem] leading-8 text-white/85 md:max-w-xl md:text-xl">
              30 års erfaring fra journalistikk, TV og ledelse – blant annet fra NRK, TV 2, IMG og internasjonal sportsdekning.
            </p>
            <a href="#kontakt" className="mt-10 inline-flex rounded bg-[#d2a14a] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#061d38] shadow-lg transition hover:bg-[#e2b65f]">
              Ta kontakt →
            </a>
          </div>
        </div>
      </section>

      <section id="om-meg" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-36">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded shadow-xl">
          <Image
            src="/images/thomas-podcast.webp"
            alt="Thomas Gjelsås i podkaststudio"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="flex flex-col justify-center" delay={0.08}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#b7842b]">Om meg</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Historier. Mennesker. Engasjement.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#1b2f4c]">
            <p>Jeg har arbeidet i skjæringspunktet mellom journalistikk, TV, sport, ledelse og kommunikasjon i mer enn 30 år.</p>
            <p>Gjennom karrieren har jeg vært journalist, reporter, redaktør og programleder, dekket tre olympiske leker og ledet mediesatsinger og organisasjoner innen sport og underholdning.</p>
            <p>I dag arbeider jeg med rådgivning, PR, innholdsproduksjon, podkast og foredrag – med særlig vekt på medier, historiefortelling, engasjement og kommunikasjon som skaper effekt.</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#b7842b]">Hva jeg kan bidra med</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-center font-serif text-4xl font-bold leading-tight md:text-5xl">
              Rådgivning, innhold og formidling som skaper verdi
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="rounded bg-white p-8 text-center shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#061d38] text-2xl text-white">{service.icon}</div>
                  <h3 className="text-xl font-black leading-snug">{service.title}</h3>
                  <p className="mt-5 leading-7 text-[#1b2f4c]">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-28 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:p-36 lg:pb-20">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#b7842b]">Erfaring</p>
          <h2 className="font-serif text-4xl font-bold leading-tight">Solid erfaring fra media, idrett og ledelse</h2>
        </Reveal>
        <Reveal delay={0.08}>
        <ul className="grid gap-4 text-lg leading-7 text-[#1b2f4c] md:grid-cols-2">
          <li>• Journalist, reporter, redaktør og programleder</li>
          <li>• Programleder for NRK, TV 2 og TV Norge</li>
          <li>• Dekket tre olympiske leker for NRK</li>
          <li>• Leder for IMG sin satsing på media i Norge</li>
          <li>• Administrerende direktør for galoppsporten i Norge</li>
          <li>• Erfaring fra lokalavis, radio, TV, reklame, sponsing og innholdsproduksjon</li>
        </ul>
        </Reveal>
        <Reveal className="col-span-full mt-16 border-t border-black/10 pt-10" delay={0.12}>
  <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-between">
    
    <a
      href="https://www.nrk.no"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/logos/nrk.webp"
        alt="NRK"
        className="h-12 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
      />
    </a>

    <a
      href="https://www.tv2.no"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
      src="/logos/tv2.png"
      alt="TV 2"
      className="h-12 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
    />
    </a>

    <a href="https://www.img.com" target="_blank" rel="noopener noreferrer">
    <img
      src="/logos/img.jpg"
      alt="IMG"
      className="h-10 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
    />
    </a>

     <a href="https://www.cic.no" target="_blank" rel="noopener noreferrer">
    <img
      src="/logos/cic.svg"
      alt="CIC Event Congress"
      className="h-36 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
    />
    </a>

    <a href="https://www.siesta.no" target="_blank" rel="noopener noreferrer">
    <img
      src="/logos/siesta.png"
      alt="Siesta"
      className="h-13 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
    />
    </a>
    
    <a href="https://www.gwill.no" target="_blank" rel="noopener noreferrer">
    <img
      src="/logos/goodwill.avif"
      alt="Goodwill"
      className="h-10 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
    />
    </a>

  </div>
</Reveal>
      </section>

      <section className="grid bg-white lg:grid-cols-2">
        <Reveal className="relative min-h-[420px]">
          <Image
            src="/images/podcast-studio.webp"
            alt="Podkaststudio med mikrofon"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="flex flex-col justify-center px-6 py-24 lg:px-20 lg:py-32" delay={0.08}>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#b7842b]">Podkast og foredrag</p>
          <h2 className="font-serif text-4xl max-w-[550px] font-bold leading-tight">Innhold, samtaler og engasjement</h2>
          <p className="mt-8 max-w-[550px] text-lg leading-8 text-[#1b2f4c]">
            Jeg har produsert egen podkast og er opptatt av historier, mennesker og kommunikasjon som skaper engasjement.
          </p>
          <p className="mt-5 max-w-[550px] text-lg leading-8 text-[#1b2f4c]">
            I dag arbeider jeg også med utvikling av foredrag og innhold knyttet til kommunikasjon, ledelse og arbeidsliv.
          </p>
        </Reveal>
      </section>

      <section id="kontakt" className="bg-[#061d38] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
          <Reveal className="mt-20">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d2a14a]">Kontakt</p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">La oss ta en prat</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Ta gjerne kontakt for en uforpliktende prat om rådgivning, mediestrategi, innhold, podkast, foredrag eller samarbeid.
            </p>
            <div className="mt-8 space-y-3 text-white/85">
              <p><strong>E-post:</strong> <a className="hover:text-white" href="mailto:thomas@gjelsaas.no">thomas@gjelsaas.no</a></p>
              <p><strong>Telefon:</strong> <a className="hover:text-white" href="tel:+4791632998">+47 916 32 998</a></p>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/thomas-gjels%C3%A5s-94424922/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition hover:opacity-100"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="h-8 w-8"
                />
              </a>

              <a
                href="https://www.instagram.com/thomasgjelsaas/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition hover:opacity-100"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="h-8 w-8"
                />
              </a>

            </div>
          </Reveal>

          <Reveal delay={0.08}>
          <form action="/api/contact" method="POST" className="rounded bg-white p-6 text-[#0b2341] shadow-2xl md:p-8">
          {params.sent === "1" && (
            <div className="mb-5 rounded bg-green-100 px-4 py-3 text-sm font-bold text-green-900">
              Takk! Meldingen er sendt.
            </div>
          )}

          {params.error === "1" && (
            <div className="mb-5 rounded bg-red-100 px-4 py-3 text-sm font-bold text-red-900">
              Noe gikk galt. Prøv igjen eller send e-post direkte.
            </div>
          )}
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold">Navn</span>
                <input name="name" type="text" required className="w-full rounded border border-black/15 px-4 py-3 outline-none focus:border-[#b7842b]" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold">E-post</span>
                <input name="email" type="email" required className="w-full rounded border border-black/15 px-4 py-3 outline-none focus:border-[#b7842b]" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold">Tema</span>
              <input name="subject" type="text" className="w-full rounded border border-black/15 px-4 py-3 outline-none focus:border-[#b7842b]" />
            </label>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold">Melding</span>
              <textarea name="message" required rows={6} className="w-full rounded border border-black/15 px-4 py-3 outline-none focus:border-[#b7842b]" />
            </label>
            <button type="submit" className="mt-6 w-full rounded bg-[#b7842b] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg hover:bg-[#c99539]">
              Send melding
            </button>
            <p className="mt-4 text-sm text-[#1b2f4c]/70">
              Skjemaet sender meldingen direkte til Thomas Gjelsås.
            </p>
          </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-white px-6 py-6 text-center text-sm text-[#1b2f4c]">
        © {new Date().getFullYear()} Thomas Gjelsås. Alle rettigheter forbeholdt.
      </footer>
    </main>
  );
}
