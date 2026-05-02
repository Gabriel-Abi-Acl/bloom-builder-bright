import { motion } from "framer-motion";
import sobre from "@/assets/manuella-sobre.jpg";

const stats = [
  { k: "17", v: "Anos" },
  { k: "3º", v: "Ano técnico" },
  { k: "C1", v: "Inglês" },
  { k: "2026", v: "Conclusão" },
];

export const About = () => {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="container grid lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-accent rounded-3xl -rotate-3" />
            <img
              src={sobre}
              alt="Manuella Zanola sorrindo"
              className="relative rounded-3xl border-4 border-foreground shadow-bold w-full object-cover aspect-[4/5]"
            />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.v} className="border-2 border-foreground rounded-2xl p-4 bg-surface-elevated">
                <div className="font-display text-3xl font-black gradient-text">{s.k}</div>
                <div className="font-mono-disp text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <div className="font-mono-disp text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ✦ 01 — Sobre mim
            </div>
            <h2 className="font-display font-black text-[clamp(2.2rem,6vw,4.5rem)] leading-[1] mb-2">
              Tecnologia com<br /><span className="italic gradient-text">alma criativa.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Meu nome é <strong className="text-foreground">Manuella Sofia Braga Zanola Souza</strong>, tenho 17 anos e sou estudante do curso técnico em Informática no <strong className="text-foreground">Colégio e Faculdade Cotemig</strong> (unidade Barroca).
            </p>
            <p>
              Tenho grande interesse nas áreas de informática e <strong className="text-foreground">design UI/UX</strong>, buscando sempre aprender mais sobre experiência do usuário e interfaces intuitivas. Meu objetivo é aplicar meus conhecimentos, aprimorar minhas habilidades e contribuir com soluções criativas e proativas.
            </p>
            <p>
              Atualmente, estou no 3º ano do curso técnico, com previsão de conclusão em <strong className="text-foreground">dezembro de 2026</strong>, e sigo dedicada a expandir meu conhecimento em tecnologia, design e inovação.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {["criatividade", "curiosidade", "design thinking", "proatividade", "atenção ao detalhe"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-border bg-surface-elevated text-sm font-medium hover:border-primary hover:text-primary transition-smooth"
              >
                #{t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
