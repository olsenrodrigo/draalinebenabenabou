import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function HowItWorks() {
  const topics = [
    {
      title: "O que são varizes e quando é necessário tratar?",
      description: "Varizes são dilatações das veias causadas pela falha das válvulas venosas. Além do aspecto estético, podem causar dor, inchaço e úlceras. O tratamento é indicado quando há sintomas ou risco de complicações — e quanto antes, mais simples e eficaz.",
    },
    {
      title: "Laser ou escleroterapia: qual a diferença?",
      description: "O laser endovenoso trata veias calibrosas com uma fibra ótica introduzida no interior da veia — sem cortes. A escleroterapia usa injeções para fechar pequenas varizes e vasinhos. Ambas são ambulatoriais, minimamente invasivas e com excelentes resultados.",
    },
    {
      title: "Trombose venosa profunda: sintomas e riscos",
      description: "A TVP é a formação de coágulos nas veias profundas, geralmente nas pernas. Pode causar dor, inchaço e vermelhidão — e o principal risco é a embolia pulmonar. O diagnóstico é feito com Doppler venoso e o tratamento precoce é fundamental.",
    },
    {
      title: "Embolização de miomas uterinos: como funciona?",
      description: "É um procedimento minimamente invasivo realizado pela Dra. Aline como angiorradiologista. Através de um cateter, bloqueia-se o suprimento de sangue dos miomas, que diminuem de tamanho sem necessidade de cirurgia aberta ou remoção do útero.",
    },
    {
      title: "Aneurisma: o que é e por que é perigoso?",
      description: "Aneurisma é a dilatação anormal de uma artéria, que pode romper e causar hemorragia grave. O tratamento endovascular moderno permite corrigir aneurismas por dentro do vaso, com cateter, sem grandes incisões e com recuperação muito mais rápida.",
    },
    {
      title: "Doppler vascular: quando realizar?",
      description: "O Doppler é o exame padrão-ouro para avaliar o fluxo sanguíneo nas artérias e veias. É indicado para investigar varizes, tromboses, doenças arteriais e monitorar tratamentos vasculares. Indolor, sem radiação e com resultado imediato.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#F5EDE3" }}>
            <span className="text-sm font-medium" style={{ color: "#8B6949" }}>Conteúdo Educativo</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            O que você precisa saber
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Informação de qualidade para entender melhor sua saúde vascular e tomar decisões conscientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(139, 105, 73, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#F5EDE3" }}>
                <BookOpen className="w-5 h-5" style={{ color: "#8B6949" }} />
              </div>
              <h4 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>{topic.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
