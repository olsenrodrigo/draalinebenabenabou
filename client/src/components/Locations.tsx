import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield } from "lucide-react";

export default function Locations() {
  const features = [
    {
      icon: Shield,
      text: "Ambiente moderno e acolhedor no Instituto Emunah — referência multidisciplinar em São Paulo",
    },
    {
      icon: Clock,
      text: "Consultas com tempo dedicado — sem pressa, com diagnóstico completo e orientações claras",
    },
    {
      icon: Users,
      text: "Agendamento ágil pelo WhatsApp ou telefone, com equipe preparada para atender você",
    },
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(30, 123, 140, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#0D4A5A" }}>Consultório</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Onde nos encontrar
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Atendimento no Instituto Emunah — espaço multidisciplinar com estrutura completa
            para consulta, exames e procedimentos vasculares em São Paulo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(30, 123, 140, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8F5F7" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#1E7B8C" }} />
                  </div>
                  <span className="font-medium pt-2" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border"
              style={{ borderColor: "rgba(30, 123, 140, 0.2)", backgroundColor: "rgba(232, 245, 247, 0.5)" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#1E7B8C" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Instituto Emunah — Jardim das Perdizes</p>
                  <p style={{ color: "#3C3C3C" }}>
                    Av. Marquês de São Vicente, 2.219<br />
                    Jardim das Perdizes / Barra Funda<br />
                    São Paulo/SP — CEP 05036-040
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-sm font-medium" style={{ color: "#1E7B8C" }}>
                      Telefone: (11) 3615-2474
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#1E7B8C" }}>
                      WhatsApp: (11) 93800-9174
                    </p>
                  </div>
                  <p className="text-xs mt-2" style={{ color: "#3C3C3C" }}>
                    Seg–Qui: 8h–18h · Sex: 8h–17h
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(30, 123, 140, 0.15)", position: "relative", minHeight: "480px" }}
          >
            <iframe
              src="https://maps.google.com/maps?f=q&hl=pt-BR&q=Av.+Marqu%C3%AAs+de+S%C3%A3o+Vicente,+2219,+Jardim+das+Perdizes,+S%C3%A3o+Paulo,+SP&z=16&ie=UTF8&output=embed"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Dra. Aline Benabou — Instituto Emunah"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
