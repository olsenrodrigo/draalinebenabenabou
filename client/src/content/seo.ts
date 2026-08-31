// Registro de SEO/GEO: origem canônica, entrada por rota e o texto do llms.txt.
// Fonte única lida pelo pré-render (`entry-ssr.tsx`).
//
// Contexto: este site subiu com o título de exemplo do whitelabel
// ("Dr(a). Nome | Especialidade Medica") e sem canonical. O Google indexou a
// página com esse título — por isso ela não aparecia nem buscando o nome da
// médica. O conteúdo dos componentes é a fonte da verdade; aqui ele vira
// metadado.

export const ORIGIN = "https://www.draalinebenabou.com.br";

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

export const MEDICA = {
  nome: "Dra. Aline de Paula C. Benabou",
  nomeCurto: "Dra. Aline Benabou",
  especialidade: "Cirurgiã Vascular, Endovascular e Angiorradiologista",
  registro: "CRM 144.318/SP · RQE 54.123",
  whatsapp: "5511938009174",
  local: "Instituto Emunah",
  cidade: "São Paulo",
  estado: "SP",
} as const;

export const credenciais = [
  "Formada pela Faculdade de Medicina da USP (FMUSP)",
  "Residência em Cirurgia Vascular no HC-FMUSP",
  "Aprimoramento em Angiorradiologia e Cirurgia Endovascular — IAPACE",
  "Membro da SBACV-SP — Sociedade Brasileira de Angiologia e Cirurgia Vascular",
] as const;

export const areas = [
  "Cirurgia Vascular e Endovascular",
  "Tratamento de Varizes",
  "Varizes Pélvicas",
  "Aneurismas Arteriais",
  "Trombose Venosa Profunda",
  "Doença Arterial Periférica",
  "Doença Carotídea",
  "Úlceras Venosas",
  "Pé Diabético",
  "Angiorradiologia Diagnóstica e Intervencionista",
  "Doppler Vascular Arterial e Venoso",
] as const;

export const procedimentos = [
  "Escleroterapia (tratamento de varizes por injeção)",
  "Laser endovenoso para varizes (EVLT)",
  "Cirurgia endovascular de aneurismas (EVAR/TEVAR)",
  "Embolização de miomas uterinos",
  "Implante de cateter Port-a-cath (acesso para quimioterapia)",
  "Acesso para hemodiálise — fístulas arteriovenosas",
  "Angioplastia e stent arterial periférico",
  "Tratamento de trombose venosa profunda",
  "Doppler vascular arterial e venoso diagnóstico",
] as const;

/** Espelha o bloco "Conteúdo Educativo" exibido na tela (HowItWorks.tsx).
 *  FAQ estruturada só é legítima quando a resposta aparece para o usuário. */
export const faq = [
  {
    pergunta: "O que são varizes e quando é necessário tratar?",
    resposta:
      "Varizes são dilatações das veias causadas pela falha das válvulas venosas. Além do aspecto estético, podem causar dor, inchaço e úlceras. O tratamento é indicado quando há sintomas, risco de complicação ou incômodo estético relevante.",
  },
  {
    pergunta: "Laser ou escleroterapia: qual a diferença?",
    resposta:
      "O laser endovenoso trata veias calibrosas com uma fibra ótica introduzida no interior da veia, sem cortes. A escleroterapia usa injeções para fechar pequenas veias e vasinhos. A escolha depende do calibre da veia e do quadro de cada paciente.",
  },
  {
    pergunta: "Trombose venosa profunda: sintomas e riscos",
    resposta:
      "A TVP é a formação de coágulos nas veias profundas, geralmente nas pernas. Pode causar dor, inchaço e vermelhidão, e o principal risco é a embolia pulmonar. O diagnóstico precoce com Doppler e o início rápido do tratamento são decisivos.",
  },
  {
    pergunta: "Aneurisma: o que é e por que é perigoso?",
    resposta:
      "Aneurisma é a dilatação anormal de uma artéria, que pode romper e causar hemorragia grave. O tratamento endovascular moderno permite corrigir aneurismas por dentro do vaso, com menor risco e recuperação mais rápida que a cirurgia aberta.",
  },
  {
    pergunta: "Doppler vascular: quando realizar?",
    resposta:
      "O Doppler é o exame padrão-ouro para avaliar o fluxo sanguíneo nas artérias e veias. É indicado para investigar varizes, tromboses e doenças arteriais, e para monitorar tratamentos já realizados.",
  },
] as const;

export type Rota = { path: string; title: string; description: string; keywords: string[] };

export const rotas: Rota[] = [
  {
    path: "/",
    title:
      "Cirurgiã Vascular e Endovascular em São Paulo | Dra. Aline Benabou",
    description:
      `${MEDICA.nome} (${MEDICA.registro}), cirurgiã vascular, endovascular e ` +
      "angiorradiologista formada pela FMUSP, com residência no HC-FMUSP. Tratamento de " +
      "varizes a laser e escleroterapia, aneurismas, trombose e Doppler vascular no " +
      "Instituto Emunah, São Paulo.",
    keywords: [
      "cirurgiã vascular em São Paulo",
      "cirurgião vascular São Paulo",
      "tratamento de varizes São Paulo",
      "laser endovenoso varizes São Paulo",
      "escleroterapia vasinhos São Paulo",
      "cirurgia endovascular São Paulo",
      "angiorradiologia São Paulo",
      "doppler vascular São Paulo",
      "trombose venosa profunda tratamento",
      "embolização de miomas uterinos São Paulo",
      "varizes pélvicas",
      "Dra. Aline Benabou",
    ],
  },
];

export function grafoJsonLd() {
  const physician = {
    "@type": "Physician",
    "@id": `${ORIGIN}/#physician`,
    name: MEDICA.nome,
    alternateName: MEDICA.nomeCurto,
    description: MEDICA.especialidade,
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    identifier: MEDICA.registro,
    medicalSpecialty: ["Vascular Surgery", "Vascular Medicine"],
    telephone: `+${MEDICA.whatsapp}`,
    areaServed: { "@type": "City", name: MEDICA.cidade },
    address: {
      "@type": "PostalAddress",
      name: MEDICA.local,
      addressLocality: MEDICA.cidade,
      addressRegion: MEDICA.estado,
      addressCountry: "BR",
    },
    availableService: procedimentos.map((nome) => ({
      "@type": "MedicalProcedure",
      name: nome,
    })),
    knowsAbout: [...areas],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${ORIGIN}/#faq`,
    inLanguage: "pt-BR",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: MEDICA.nomeCurto,
    inLanguage: "pt-BR",
    publisher: { "@id": `${ORIGIN}/#physician` },
  };

  return { "@context": "https://schema.org", "@graph": [physician, website, faqPage] };
}

export function llmsTxt() {
  return [
    `# ${MEDICA.nome}`,
    "",
    `> ${MEDICA.especialidade} em ${MEDICA.cidade}/${MEDICA.estado}. Diagnóstico e`,
    "> tratamento de varizes, aneurismas, trombose e doença arterial, com técnicas",
    `> minimamente invasivas. Registro: ${MEDICA.registro}.`,
    "",
    "## Ficha",
    "",
    `- Profissional: ${MEDICA.nome}`,
    `- Especialidade: ${MEDICA.especialidade}`,
    `- Registro: ${MEDICA.registro}`,
    `- Atendimento: ${MEDICA.local} — ${MEDICA.cidade}/${MEDICA.estado}`,
    `- WhatsApp: https://wa.me/${MEDICA.whatsapp}`,
    `- Site: ${ORIGIN}/`,
    "",
    "## Formação",
    "",
    ...credenciais.map((c) => `- ${c}`),
    "",
    "## Áreas de atuação",
    "",
    ...areas.map((a) => `- ${a}`),
    "",
    "## Tratamentos e procedimentos",
    "",
    ...procedimentos.map((p) => `- ${p}`),
    "",
    "## Perguntas frequentes",
    "",
    ...faq.flatMap((f) => [`### ${f.pergunta}`, "", f.resposta, ""]),
    "## Observações",
    "",
    "- O agendamento é feito pelo WhatsApp ou pelo formulário do site.",
    "- Este site é informativo e não substitui consulta médica: nenhuma conduta é",
    "  indicada sem avaliação presencial.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
