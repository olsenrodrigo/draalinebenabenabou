import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function FAQ() {
  const testimonials = [
    {
      text: "Fui à Dra. Aline com muita dor nas pernas e varizes que me incomodavam há anos. Ela me explicou tudo com muita clareza, fez o Doppler e indicou o laser endovenoso. O procedimento foi rápido, praticamente sem dor, e em poucos dias já estava trabalhando normalmente. Recomendo muito!",
      name: "Patrícia L.",
      detail: "Tratamento de Varizes com Laser",
    },
    {
      text: "Descobri um aneurisma em exame de rotina e fiquei muito assustada. A Dra. Aline foi incrível — explicou tudo com paciência, sem pressa, e realizou o tratamento endovascular com excelência. Equipe maravilhosa, estrutura top. Me senti em boas mãos o tempo todo.",
      name: "Renata C.",
      detail: "Tratamento Endovascular de Aneurisma",
    },
    {
      text: "Passei por embolização de miomas com a Dra. Aline e foi uma experiência muito positiva. Evitei uma cirurgia aberta, a recuperação foi tranquila e os resultados foram além do que esperava. Profissional extremamente competente e atenciosa. Muito grata!",
      name: "Ana Paula M.",
      detail: "Embolização de Miomas Uterinos",
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#F5EDE3" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(139, 105, 73, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#3B2918" }}>Depoimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
            O que dizem os pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Histórias reais de quem confiou sua saúde vascular à Dra. Aline Benabou.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(139, 105, 73, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#8B6949" }} />
              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#8B6949" }} />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#8B6949" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #8B6949 0%, #3B2918 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Cuide da sua saúde vascular agora
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg" style={{ color: "#F5EDE3" }}>
            <span>Atendimento particular</span>
            <span>|</span>
            <span>Jardim das Perdizes — São Paulo/SP</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(245, 237, 227, 0.8)" }}>
            Av. Marquês de São Vicente, 2.219 — Instituto Emunah, São Paulo/SP
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#3B2918" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar consulta agora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
