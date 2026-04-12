import { motion } from "framer-motion";
import { GraduationCap, Eye, Heart, Zap } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: GraduationCap,
      title: "Formação de excelência no HC-FMUSP",
      description: "Residência em Cirurgia Geral e Vascular no Hospital das Clínicas da USP — referência nacional — com aprimoramento em Angiorradiologia e Cirurgia Endovascular. Membro ativa da SBACV-SP com atualização contínua em congressos nacionais e internacionais.",
    },
    {
      icon: Zap,
      title: "Especialista em técnicas minimamente invasivas",
      description: "Domínio das mais avançadas técnicas endovasculares disponíveis no Brasil — laser, escleroterapia, embolização, angioplastia e stent. Procedimentos com menor risco cirúrgico, recuperação rápida e resultados estéticos e funcionais superiores.",
    },
    {
      icon: Eye,
      title: "Diagnóstico preciso com Doppler vascular",
      description: "Avaliação completa do sistema vascular com exames de imagem e Doppler arterial e venoso. O diagnóstico correto é o ponto de partida para um tratamento eficaz — sem atalhos, sem sobretratamento.",
    },
    {
      icon: Heart,
      title: "Cuidado integral e humanizado",
      description: "Cada paciente é acolhido com atenção e escuta real. A Dra. Aline dedica tempo a cada consulta para explicar o diagnóstico, as opções terapêuticas e o que esperar do tratamento — com clareza, empatia e respeito.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#F5EDE3" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(139, 105, 73, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#3B2918" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              Diferenciais do Atendimento
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Tecnologia de ponta com o cuidado de quem realmente ouve o paciente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border"
                style={{ borderColor: "rgba(139, 105, 73, 0.15)" }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #8B6949 0%, #3B2918 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4" style={{ color: "#212529" }}>
                  {item.title}
                </h4>
                <p className="leading-relaxed" style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
