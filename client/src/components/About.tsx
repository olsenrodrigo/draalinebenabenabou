import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Briefcase, IdCard, Building2 } from "lucide-react";
import drAlinePhoto from "../assets/images/dra-aline-benabou.jpeg";

export default function About() {
  const credentials = [
    { icon: Briefcase, text: "Cirurgiã Vascular, Endovascular e Angiorradiologista" },
    { icon: Award, text: "Membro da SBACV-SP — Sociedade Brasileira de Angiologia e Cirurgia Vascular" },
    { icon: BookOpen, text: "Aprimoramento em Angiorradiologia e Cirurgia Endovascular — IAPACE" },
    { icon: GraduationCap, text: "Formada pela Faculdade de Medicina da USP (FMUSP)" },
    { icon: Building2, text: "Residência em Cirurgia Vascular no HC-FMUSP" },
    { icon: IdCard, text: "CRM 144.318/SP · RQE 54.123" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EDF2F4" }}>
              <span className="text-sm font-medium" style={{ color: "#5B8C9B" }}>Sobre a Especialista</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#212529" }}>
              Dra. Aline de Paula C. Benabou
            </h3>

            <p className="text-lg mb-6 font-medium" style={{ color: "#5B8C9B" }}>
              Precisão técnica com atenção humana e personalizada
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              <strong>Dra. Aline de Paula da Cruz Benabou</strong> é cirurgiã especialista em{" "}
              <strong>Cirurgia Vascular, Endovascular e Angiorradiologia</strong>, com sólida
              formação acadêmica e atuação focada em tratamentos minimamente invasivos para
              doenças dos vasos sanguíneos.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Graduada pela <strong>Faculdade de Medicina da USP (FMUSP)</strong>, realizou residência
              médica em Cirurgia Geral e Cirurgia Vascular no <strong>Hospital das Clínicas da FMUSP</strong>,
              referência máxima em cirurgia vascular no Brasil. Aprimorou sua formação com especialização
              em <strong>Angiorradiologia e Cirurgia Endovascular</strong> pelo IAPACE.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Com mais de <strong>10 anos de experiência</strong>, a Dra. Aline atua no diagnóstico e
              tratamento de varizes, tromboses, aneurismas e doenças arteriais, com foco em técnicas
              de menor agressão cirúrgica — resultando em recuperação mais rápida e maior conforto
              para o paciente.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(91, 140, 155, 0.15)", backgroundColor: "rgba(237, 242, 244, 0.4)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EDF2F4" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#5B8C9B" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#212529" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              <img
                src={drAlinePhoto}
                alt="Dra. Aline de Paula C. Benabou — Cirurgiã Vascular e Endovascular"
                className="w-full h-[550px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(91, 140, 155, 0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(91, 140, 155, 0.1)" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(91, 140, 155, 0.2)" }}
        >
          {[
            { value: "10+ anos", label: "de experiência em cirurgia vascular e endovascular" },
            { value: "2 especializações", label: "Cirurgia Vascular · Angiorradiologia" },
            { value: "HC-FMUSP", label: "Residência na maior referência cirúrgica do país" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#2C3E50" }}>{item.value}</div>
              <div className="text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-bold italic max-w-3xl mx-auto mb-8" style={{ color: "#2C3E50" }}>
            "Tratar a doença vascular é cuidar da circulação que sustenta cada órgão do seu corpo."
          </blockquote>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "#5B8C9B" }}
          >
            Agendar minha consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
