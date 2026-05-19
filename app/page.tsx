import Image from "next/image";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-[#0b2341]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="leading-tight">
            <div className="text-2xl font-black tracking-wide">THOMAS GJELSÅS</div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#334]">
              Media · kommunikasjon · historiefortelling
            </div>
          </a>
          <nav className="flex gap-8 text-sm font-bold uppercase tracking-wide">
            <a className="hover:text-[#b7842b]" href="#om-meg">Om meg</a>
            <a className="hover:text-[#b7842b]" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative min-h-[82vh] overflow-hidden bg-[#061d38]">
        <Image
          src="/images/thomas-portrett.webp"
          alt="Thomas Gjelsås – rådgiver innen media, kommunikasjon og historiefortelling"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] opacity-70 md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d38]/95 via-[#061d38]/70 to-[#061d38]/20" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-16 pt-40 md:items-center md:px-10 md:py-28">
          <div className="max-w-[720px] text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d2a14a]">
              Rådgiver og historieforteller
            </p>
            <h1 className="max-w-full break-words font-serif text-[3rem] font-bold leading-[1.05] sm:text-6xl md:text-6xl lg:text-7xl">
              Media, kommunikasjon og historiefortelling
            </h1>
            <div className="my-8 h-1 w-24 bg-[#d2a14a]" />
            <p className="text-lg leading-8 text-white/90 md:text-xl">
              Jeg hjelper selskaper, organisasjoner og idrett med å utvikle historier som skaper synlighet, gjennomslag og engasjement.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/85 md:text-xl">
              30 års erfaring fra journalistikk, TV og ledelse – blant annet fra NRK, TV 2, IMG og internasjonal sportsdekning.
            </p>
            <a href="#kontakt" className="mt-10 inline-flex rounded bg-[#d2a14a] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#061d38] shadow-lg transition hover:bg-[#e2b65f]">
              Ta kontakt →
            </a>
          </div>
        </div>
      </section>

      <section id="om-meg" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-36">
        <div className="relative min-h-[420px] overflow-hidden rounded shadow-xl">
          <Image
            src="/images/thomas-podcast.jpg"
            alt="Thomas Gjelsås i podkaststudio"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#b7842b]">Om meg</p>
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">Historier. Mennesker. Engasjement.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#1b2f4c]">
            <p>Jeg har arbeidet i skjæringspunktet mellom journalistikk, TV, sport, ledelse og kommunikasjon i mer enn 30 år.</p>
            <p>Gjennom karrieren har jeg vært journalist, reporter, redaktør og programleder, dekket tre olympiske leker og ledet mediesatsinger og organisasjoner innen sport og underholdning.</p>
            <p>I dag arbeider jeg med rådgivning, PR, innholdsproduksjon, podkast og foredrag – med særlig vekt på medier, historiefortelling, engasjement og kommunikasjon som skaper effekt.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-[#b7842b]">Hva jeg kan bidra med</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center font-serif text-4xl font-bold leading-tight md:text-5xl">
            Rådgivning, innhold og formidling som skaper verdi
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded bg-white p-8 text-center shadow-xl ring-1 ring-black/5">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#061d38] text-2xl text-white">{service.icon}</div>
                <h3 className="text-xl font-black leading-snug">{service.title}</h3>
                <p className="mt-5 leading-7 text-[#1b2f4c]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-36">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#b7842b]">Erfaring</p>
          <h2 className="font-serif text-4xl font-bold leading-tight">Solid erfaring fra media, idrett og ledelse</h2>
        </div>
        <ul className="grid gap-4 text-lg leading-7 text-[#1b2f4c] md:grid-cols-2">
          <li>• Journalist, reporter, redaktør og programleder</li>
          <li>• Programleder for NRK, TV 2 og TV Norge</li>
          <li>• Dekket tre olympiske leker for NRK</li>
          <li>• Leder for IMG sin satsing på media i Norge</li>
          <li>• Administrerende direktør for galoppsporten i Norge</li>
          <li>• Erfaring fra lokalavis, radio, TV, reklame, sponsing og innholdsproduksjon</li>
        </ul>
      </section>

      <section className="grid bg-white lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/podcast-studio.jpg"
            alt="Podkaststudio med mikrofon"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-24 lg:px-20 lg:py-32">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#b7842b]">Podkast og foredrag</p>
          <h2 className="font-serif text-4xl font-bold leading-tight">Innhold, samtaler og engasjement</h2>
          <p className="mt-8 text-lg leading-8 text-[#1b2f4c]">
            Jeg har produsert egen podkast og utvikler videre konsepter innen samtale, formidling og historiefortelling.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#1b2f4c]">
            Sammen med psykolog Haakon Rydning arbeider jeg også med et foredrag om engasjement på arbeidsplassen – og hvordan ledelse, kommunikasjon og psykologisk trygghet påvirker kultur, motivasjon og prestasjon.
          </p>
        </div>
      </section>

      <section id="kontakt" className="bg-[#061d38] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d2a14a]">Kontakt</p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">La oss ta en prat</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Ta gjerne kontakt for en uforpliktende prat om rådgivning, mediestrategi, innhold, podkast, foredrag eller samarbeid.
            </p>
            <div className="mt-8 space-y-3 text-white/85">
              <p><strong>E-post:</strong> <a className="hover:text-white" href="mailto:thomas@siestafilm.no">thomas@siestafilm.no</a></p>
              <p><strong>Telefon:</strong> <a className="hover:text-white" href="tel:+4790928454">+47 909 28 454</a></p>
            </div>
          </div>

          <form action="/api/contact" method="POST" className="rounded bg-white p-6 text-[#0b2341] shadow-2xl md:p-8">
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
              Skjemaet sender meldingen direkte til Thomas Gjelsås når API-ruten er satt opp.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-white px-6 py-6 text-center text-sm text-[#1b2f4c]">
        © {new Date().getFullYear()} Thomas Gjelsås. Alle rettigheter forbeholdt.
      </footer>
    </main>
  );
}
