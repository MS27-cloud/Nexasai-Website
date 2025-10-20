// Continuous rightward movement without a scrollbar or marquee library
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

      {/* Continuous rightward motion, uniform gaps, seamless loop */}
      <div className="mt-10 overflow-hidden">
        <div className="marquee-right flex items-center gap-x-20">
          {[...logos, ...logos].map((l, idx) => (
            <div key={`${l.name}-${idx}`} className="flex items-center justify-center h-12 w-[170px]">
              <img
                src={l.src}
                alt={idx < logos.length ? l.name : ""}
                className="h-10 md:h-12 w-auto max-w-full object-contain"
                style={{ transform: `scale(${l.scale ?? 1})` }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <style>
          {`
            .marquee-right { width: max-content; animation: marqueeRight 24s linear infinite; }
            @keyframes marqueeRight {
              from { transform: translateX(-50%); }
              to { transform: translateX(0%); }
            }
          `}
        </style>
      </div>
    </section>
  );
}
