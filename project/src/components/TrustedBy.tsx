import Marquee from "react-fast-marquee";
import cisco   from "../assets/logos/cisco.png";
import netapp  from "../assets/logos/netapp.png";
import oracle  from "../assets/logos/Oracle.png";
import rubrik  from "../assets/logos/Rubrik.png";
import walmart from "../assets/logos/walmart.png";
import aetna   from "../assets/logos/aetna.png";
import cvs     from "../assets/logos/cvs.png";

type Logo = { name: string; src: string; scale?: number };

const logos: Logo[] = [
  { name: "Oracle",  src: oracle,  scale: 0.92 }, // Oracle tends to look big
  { name: "Rubrik",  src: rubrik,  scale: 1.00 },
  { name: "Walmart", src: walmart, scale: 3.00 }, // thin mark → boost a bit
  { name: "Aetna",   src: aetna,   scale: 1.00 },
  { name: "CVS",     src: cvs,     scale: 1.00 },
  { name: "Cisco",   src: cisco,   scale: 1.05 },
  { name: "NetApp",  src: netapp,  scale: 1.00 },
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
          Trusted by the best
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Helping businesses around the world
        </h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">
          We provide modern cloud, consulting, and development services that drive measurable impact
          for enterprise teams.
        </p>
      </div>

      {/* Scrolling row */}
      <div className="mt-10">
        {/* gradient={false} to avoid fade-in edges, speed tweaked for legibility */}
        <Marquee gradient={false} speed={40}>
          {logos.map((l) => (
            <div
              key={l.name}
              className="
                mx-10
                flex items-center justify-center
                w-[170px]  /* unified width per item */
                h-12       /* unified height (48px) */
              "
            >
              <img
                src={l.src}
                alt={l.name}
                className="h-10 md:h-12 w-auto object-contain"
                style={{ transform: `scale(${l.scale ?? 1})` }}
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
