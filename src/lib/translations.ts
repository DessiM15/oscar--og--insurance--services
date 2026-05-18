const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      services: "Services",
      medicare: "Medicare",
      insurance: "Insurance",
      about: "About",
      contact: "Contact",
      getQuote: "Get a Quote",
      callNow: "Call Now",
    },

    // Hero
    hero: {
      headline: "Peace of Mind Starts Here",
      subheadline:
        "Your family, your future — secure it all with insurance you can trust. From Medicare to Life Insurance, we help you find the right plan for every stage of life.",
      cta: "Get a Free Quote",
      secondaryCta: "Learn More",
      badges: {
        medicare: "Medicare Specialist",
        multiCarrier: "Multi-Carrier Access",
        noExam: "No Medical Exam Options",
        freeConsult: "Free Consultation",
      },
    },

    // Services Overview
    services: {
      label: "Our Services",
      headline: "Comprehensive Coverage for Every Need",
      subheadline:
        "Whether you're navigating Medicare or looking for life insurance protection, OG Insurance Services has you covered.",
      medicareTab: "Medicare",
      insuranceTab: "Life & Insurance",
    },

    // Medicare Section
    medicare: {
      label: "Medicare",
      headline: "Navigate Medicare with Confidence",
      subheadline:
        "Medicare can be confusing — but it doesn't have to be. We help you understand your options and find the plan that fits your needs and budget.",
      cta: "Schedule a Free Medicare Consultation",
      whatIs: {
        title: "What Is Medicare?",
        body: "Medicare is the federal health insurance program for Americans aged 65 and older, as well as certain younger individuals with qualifying disabilities. It covers over 67 million Americans and is divided into distinct parts — each covering different services.",
      },
      parts: {
        partA: {
          title: "Part A — Hospital Insurance",
          description:
            "Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health care. Most people pay $0 in premiums.",
          cost: "$0/mo premium for most",
        },
        partB: {
          title: "Part B — Medical Insurance",
          description:
            "Covers doctor visits, outpatient care, preventive services, lab tests, and durable medical equipment.",
          cost: "$202.90/mo standard premium (2026)",
        },
        partC: {
          title: "Part C — Medicare Advantage",
          description:
            "Private plans that combine Part A & B coverage, often including dental, vision, hearing, and prescription drugs. Lower out-of-pocket maximums.",
          cost: "Avg $14/mo premium (2026)",
        },
        partD: {
          title: "Part D — Prescription Drugs",
          description:
            "Covers outpatient prescription medications. New $2,000 annual out-of-pocket cap. The donut hole has been eliminated.",
          cost: "$2,100 annual OOP cap (2026)",
        },
      },
      medigap: {
        title: "Medigap (Medicare Supplement)",
        body: "Medigap policies help pay for out-of-pocket costs that Original Medicare doesn't cover — copayments, coinsurance, and deductibles. Plans are standardized by letter (A, B, G, N, etc.) and benefits are the same regardless of which company sells the plan.",
        popularPlans: "Most Popular Plans: Plan G & Plan N",
      },
      enrollment: {
        title: "Key Enrollment Periods",
        periods: [
          {
            name: "Initial Enrollment",
            when: "7-month window around your 65th birthday",
            what: "Sign up for Part A, B, D, or Medicare Advantage",
          },
          {
            name: "Annual Open Enrollment",
            when: "October 15 – December 7 each year",
            what: "Switch plans, join or drop Part D, change Medicare Advantage",
          },
          {
            name: "Medigap Open Enrollment",
            when: "6 months after turning 65 with Part B",
            what: "Purchase any Medigap plan — guaranteed issue, no medical underwriting",
          },
        ],
      },
      whyUs: {
        title: "Not Sure Which Medicare Option Is Right for You?",
        body: "Choosing the right Medicare coverage can feel overwhelming. We're here to simplify the process. Whether you're turning 65, retiring, or want to review your current plan — we'll walk you through every option at no cost to you.",
      },
    },

    // Insurance Section
    insurance: {
      label: "Life & Insurance",
      headline: "Life Insurance Plans Built for You",
      subheadline:
        "We shop multiple carriers to find the best coverage at the best rate for your situation.",
      cta: "Get My Free Quote",
      products: {
        termLife: {
          title: "Term Life Insurance",
          description:
            "Affordable coverage for a set period — 10, 20, or 30 years. Lock in low rates while you're young. Ideal for covering mortgages, kids' education, and income replacement.",
        },
        wholeLife: {
          title: "Whole Life Insurance",
          description:
            "Permanent coverage that never expires. Builds cash value over time that you can borrow against. Guaranteed death benefit for your beneficiaries.",
        },
        iul: {
          title: "Indexed Universal Life (IUL)",
          description:
            "Permanent coverage with cash value growth tied to market indexes like the S&P 500 — with downside protection. Flexible premiums, tax-advantaged growth, and living benefits built in.",
        },
        finalExpense: {
          title: "Final Expense Insurance",
          description:
            "Smaller, affordable policies designed to cover funeral costs, medical bills, and end-of-life expenses. No medical exam required in most cases.",
        },
        groupLife: {
          title: "Group Life Supplement",
          description:
            "Your employer's group policy may not be enough. A supplemental policy fills the gap and stays with you if you change jobs.",
        },
        guaranteedIssue: {
          title: "Guaranteed Issue Life",
          description:
            "No health questions, no medical exams. Guaranteed acceptance regardless of pre-existing conditions. Coverage starts immediately.",
        },
      },
      livingBenefits: {
        label: "Living Benefits",
        headline: "Protection That Works While You're Still Here",
        subheadline:
          "Don't raid your retirement. Don't sell your home. Modern life insurance gives you access to funds when you need them most — while you're still alive.",
        conditions: ["Cancer", "Heart Attack", "Stroke"],
        protects: ["Home", "Car", "Retirement", "Family", "Savings"],
        cta: "See What You Qualify For",
      },
      stats: {
        noInsurance: { value: "47%", label: "Of Americans Have No Life Insurance" },
        freeCost: { value: "$0", label: "Cost for Your Free Consultation" },
        fast: { value: "Days", label: "How Fast Coverage Can Be Active" },
      },
      howItWorks: {
        headline: "Three Simple Steps to Peace of Mind",
        subheadline:
          "We make getting life insurance as easy as possible — so you can focus on what matters most.",
        steps: [
          {
            title: "Free Consultation",
            description:
              "Tell us about your family, your goals, and your budget. We'll find the right fit — no pressure, no obligation.",
          },
          {
            title: "Compare Plans",
            description:
              "We shop multiple A-rated carriers to find you the best coverage at the best rate. Clear options, no confusing jargon.",
          },
          {
            title: "Get Covered",
            description:
              "Easy application, fast approval. Many plans require no medical exam. Coverage can be active in days — not weeks.",
          },
        ],
      },
    },

    // About
    about: {
      label: "About",
      headline: "Meet Oscar Garcia",
      title: "Your Trusted Insurance Advisor",
      bio: "Oscar Garcia is a licensed Financial Educator and independent insurance agent serving the Rio Grande Valley and beyond. With a passion for helping families protect what matters most, Oscar simplifies the complex world of Medicare and life insurance — making sure every client understands their options and gets the best coverage for their budget.",
      mission:
        "My mission is simple: to help every family I work with feel confident and protected. Whether you're turning 65 and navigating Medicare for the first time, or looking for life insurance to secure your family's future — I'm here to guide you every step of the way.",
      license: "License #1792345",
      location: "502 N Veterans Blvd Suite A, San Juan, TX 78589",
    },

    // Contact Form
    contact: {
      label: "Get in Touch",
      headline: "Let's Find the Right Plan for You",
      subheadline:
        "Answer a few questions and we'll match you with the best coverage options for your budget.",
      form: {
        name: "Full Name",
        namePlaceholder: "John Doe",
        phone: "Phone Number",
        phonePlaceholder: "(956) 555-0123",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        service: "What Are You Interested In?",
        serviceOptions: [
          "Medicare — I'm turning 65 or need help choosing a plan",
          "Life Insurance — Term, Whole, or IUL",
          "Final Expense Coverage",
          "Annuities & Retirement Planning",
          "I'm not sure — I need guidance",
        ],
        message: "Tell Us About Your Situation",
        messagePlaceholder:
          "Share any details about your coverage needs, budget, or questions you have...",
        submit: "Get My Free Coverage Review",
        finePrint: "Free review. No obligation. No spam.",
      },
      success: {
        title: "Thanks! Now Book Your Meeting",
        body: "Your info has been sent. Pick a time below to meet with Oscar and discuss your options.",
        bookingLabel: "Schedule Your Free Consultation",
        scheduleMessage: "Pick a time that works for you and meet with Oscar to discuss your coverage options — no cost, no obligation.",
        scheduleButton: "Book a Meeting",
      },
      directContact: {
        or: "Or reach out directly",
        phone: "956-335-0488",
        email: "ogarcia@tpension.com",
      },
    },

    // Footer
    footer: {
      tagline: "Protecting families across the Rio Grande Valley and beyond.",
      services: "Services",
      company: "Company",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      disclaimer:
        "OG Insurance Services is an independent insurance agency. Oscar Garcia is a licensed insurance agent. Products and availability may vary by state. This website is for informational purposes only and does not constitute financial or insurance advice.",
      copyright: "OG Insurance Services. All rights reserved.",
    },

    // Sticky CTA
    stickyCta: {
      call: "Call Oscar",
      quote: "Get Quote",
    },

    // Language toggle
    language: {
      toggle: "Espanol",
      code: "ES",
    },
  },

  es: {
    // Navbar
    nav: {
      home: "Inicio",
      services: "Servicios",
      medicare: "Medicare",
      insurance: "Seguros",
      about: "Nosotros",
      contact: "Contacto",
      getQuote: "Cotizacion Gratis",
      callNow: "Llamar Ahora",
    },

    // Hero
    hero: {
      headline: "Tu Tranquilidad Comienza Aqui",
      subheadline:
        "Tu familia, tu futuro — aseguralo todo con un seguro de confianza. Desde Medicare hasta Seguro de Vida, te ayudamos a encontrar el plan ideal para cada etapa de la vida.",
      cta: "Cotizacion Gratuita",
      secondaryCta: "Mas Informacion",
      badges: {
        medicare: "Especialista en Medicare",
        multiCarrier: "Acceso a Multiples Aseguradoras",
        noExam: "Opciones Sin Examen Medico",
        freeConsult: "Consulta Gratuita",
      },
    },

    // Services Overview
    services: {
      label: "Nuestros Servicios",
      headline: "Cobertura Completa para Cada Necesidad",
      subheadline:
        "Ya sea que estes navegando Medicare o buscando proteccion con seguro de vida, OG Insurance Services te tiene cubierto.",
      medicareTab: "Medicare",
      insuranceTab: "Vida y Seguros",
    },

    // Medicare Section
    medicare: {
      label: "Medicare",
      headline: "Navega Medicare con Confianza",
      subheadline:
        "Medicare puede ser confuso — pero no tiene que serlo. Te ayudamos a entender tus opciones y encontrar el plan que se ajuste a tus necesidades y presupuesto.",
      cta: "Agenda Tu Consulta Gratuita de Medicare",
      whatIs: {
        title: "Que Es Medicare?",
        body: "Medicare es el programa federal de seguro medico para estadounidenses de 65 anos o mas, asi como para ciertas personas menores con discapacidades. Cubre a mas de 67 millones de estadounidenses y se divide en partes distintas — cada una cubriendo diferentes servicios.",
      },
      parts: {
        partA: {
          title: "Parte A — Seguro Hospitalario",
          description:
            "Cubre hospitalizaciones, centros de enfermeria especializada, cuidado de hospicio y algunos servicios de salud en el hogar. La mayoria no paga prima.",
          cost: "$0/mes para la mayoria",
        },
        partB: {
          title: "Parte B — Seguro Medico",
          description:
            "Cubre visitas al doctor, atencion ambulatoria, servicios preventivos, pruebas de laboratorio y equipo medico.",
          cost: "Prima estandar de $202.90/mes (2026)",
        },
        partC: {
          title: "Parte C — Medicare Advantage",
          description:
            "Planes privados que combinan cobertura de Parte A y B, frecuentemente incluyendo dental, vision, audicion y medicamentos recetados.",
          cost: "Prima promedio de $14/mes (2026)",
        },
        partD: {
          title: "Parte D — Medicamentos Recetados",
          description:
            "Cubre medicamentos recetados ambulatorios. Nuevo tope anual de gastos de bolsillo de $2,000. Se elimino el periodo sin cobertura.",
          cost: "Tope anual de $2,100 (2026)",
        },
      },
      medigap: {
        title: "Medigap (Suplemento de Medicare)",
        body: "Las polizas Medigap ayudan a pagar costos de bolsillo que Medicare Original no cubre — copagos, coseguros y deducibles. Los planes estan estandarizados por letra (A, B, G, N, etc.) y los beneficios son iguales sin importar la compania.",
        popularPlans: "Planes Mas Populares: Plan G y Plan N",
      },
      enrollment: {
        title: "Periodos Clave de Inscripcion",
        periods: [
          {
            name: "Inscripcion Inicial",
            when: "Periodo de 7 meses alrededor de tu cumpleanos 65",
            what: "Inscribirse en Parte A, B, D o Medicare Advantage",
          },
          {
            name: "Inscripcion Abierta Anual",
            when: "15 de octubre – 7 de diciembre cada ano",
            what: "Cambiar planes, unirse o dejar Parte D, cambiar Medicare Advantage",
          },
          {
            name: "Inscripcion Abierta Medigap",
            when: "6 meses despues de cumplir 65 con Parte B",
            what: "Comprar cualquier plan Medigap — emision garantizada, sin evaluacion medica",
          },
        ],
      },
      whyUs: {
        title: "No Estas Seguro de Cual Opcion de Medicare Es la Correcta?",
        body: "Elegir la cobertura correcta de Medicare puede sentirse abrumador. Estamos aqui para simplificar el proceso. Ya sea que cumplas 65, te jubiles o quieras revisar tu plan actual — te guiaremos por cada opcion sin costo.",
      },
    },

    // Insurance Section
    insurance: {
      label: "Vida y Seguros",
      headline: "Planes de Seguro de Vida Disenados Para Ti",
      subheadline:
        "Comparamos multiples aseguradoras para encontrar la mejor cobertura al mejor precio para tu situacion.",
      cta: "Obten Tu Cotizacion Gratis",
      products: {
        termLife: {
          title: "Seguro de Vida a Termino",
          description:
            "Cobertura accesible por un periodo fijo — 10, 20 o 30 anos. Asegura tarifas bajas mientras eres joven. Ideal para cubrir hipotecas, educacion de hijos y reemplazo de ingresos.",
        },
        wholeLife: {
          title: "Seguro de Vida Entera",
          description:
            "Cobertura permanente que nunca expira. Acumula valor en efectivo con el tiempo. Beneficio por fallecimiento garantizado para tus beneficiarios.",
        },
        iul: {
          title: "Vida Universal Indexada (IUL)",
          description:
            "Cobertura permanente con crecimiento de valor en efectivo vinculado a indices del mercado como el S&P 500 — con proteccion contra caidas. Primas flexibles y crecimiento con ventajas fiscales.",
        },
        finalExpense: {
          title: "Seguro de Gastos Finales",
          description:
            "Polizas accesibles disenadas para cubrir costos funerarios, facturas medicas y gastos de fin de vida. Sin examen medico en la mayoria de los casos.",
        },
        groupLife: {
          title: "Suplemento de Vida Grupal",
          description:
            "La poliza grupal de tu empleador puede no ser suficiente. Una poliza suplementaria llena el vacio y se queda contigo si cambias de trabajo.",
        },
        guaranteedIssue: {
          title: "Vida de Emision Garantizada",
          description:
            "Sin preguntas de salud, sin examenes medicos. Aceptacion garantizada sin importar condiciones preexistentes. La cobertura comienza de inmediato.",
        },
      },
      livingBenefits: {
        label: "Beneficios en Vida",
        headline: "Proteccion Que Funciona Mientras Estas Vivo",
        subheadline:
          "No toques tu jubilacion. No vendas tu casa. El seguro de vida moderno te da acceso a fondos cuando mas los necesitas — mientras aun estas con vida.",
        conditions: ["Cancer", "Infarto", "Derrame"],
        protects: ["Hogar", "Auto", "Jubilacion", "Familia", "Ahorros"],
        cta: "Descubre Para Que Calificas",
      },
      stats: {
        noInsurance: { value: "47%", label: "De Estadounidenses Sin Seguro de Vida" },
        freeCost: { value: "$0", label: "Costo de Tu Consulta Gratuita" },
        fast: { value: "Dias", label: "Rapidez de Activacion de Cobertura" },
      },
      howItWorks: {
        headline: "Tres Simples Pasos Hacia la Tranquilidad",
        subheadline:
          "Hacemos que obtener un seguro de vida sea lo mas facil posible — para que puedas enfocarte en lo que mas importa.",
        steps: [
          {
            title: "Consulta Gratuita",
            description:
              "Cuentanos sobre tu familia, tus metas y tu presupuesto. Encontraremos la opcion ideal — sin presion, sin obligacion.",
          },
          {
            title: "Compara Planes",
            description:
              "Comparamos multiples aseguradoras para encontrarte la mejor cobertura al mejor precio. Opciones claras, sin jerga confusa.",
          },
          {
            title: "Obten Cobertura",
            description:
              "Solicitud facil, aprobacion rapida. Muchos planes no requieren examen medico. La cobertura puede estar activa en dias — no semanas.",
          },
        ],
      },
    },

    // About
    about: {
      label: "Nosotros",
      headline: "Conoce a Oscar Garcia",
      title: "Tu Asesor de Seguros de Confianza",
      bio: "Oscar Garcia es un Educador Financiero licenciado y agente de seguros independiente que sirve al Valle del Rio Grande y mas alla. Con una pasion por ayudar a las familias a proteger lo que mas importa, Oscar simplifica el complejo mundo de Medicare y seguros de vida — asegurandose de que cada cliente entienda sus opciones y obtenga la mejor cobertura para su presupuesto.",
      mission:
        "Mi mision es simple: ayudar a cada familia con la que trabajo a sentirse segura y protegida. Ya sea que cumplas 65 y navegues Medicare por primera vez, o busques un seguro de vida para asegurar el futuro de tu familia — estoy aqui para guiarte en cada paso del camino.",
      license: "Licencia #1792345",
      location: "502 N Veterans Blvd Suite A, San Juan, TX 78589",
    },

    // Contact Form
    contact: {
      label: "Contacto",
      headline: "Encontremos el Plan Ideal Para Ti",
      subheadline:
        "Responde algunas preguntas y te conectaremos con las mejores opciones de cobertura para tu presupuesto.",
      form: {
        name: "Nombre Completo",
        namePlaceholder: "Juan Perez",
        phone: "Numero de Telefono",
        phonePlaceholder: "(956) 555-0123",
        email: "Correo Electronico",
        emailPlaceholder: "juan@ejemplo.com",
        service: "En Que Estas Interesado?",
        serviceOptions: [
          "Medicare — Cumplo 65 o necesito ayuda eligiendo un plan",
          "Seguro de Vida — Termino, Vida Entera o IUL",
          "Cobertura de Gastos Finales",
          "Anualidades y Planificacion de Jubilacion",
          "No estoy seguro — necesito orientacion",
        ],
        message: "Cuentanos Sobre Tu Situacion",
        messagePlaceholder:
          "Comparte detalles sobre tus necesidades de cobertura, presupuesto o preguntas...",
        submit: "Obten Tu Revision Gratis",
        finePrint: "Revision gratuita. Sin obligacion. Sin spam.",
      },
      success: {
        title: "Gracias! Ahora Agenda Tu Reunion",
        body: "Tu informacion ha sido enviada. Elige un horario abajo para reunirte con Oscar y discutir tus opciones.",
        bookingLabel: "Agenda Tu Consulta Gratuita",
        scheduleMessage: "Elige un horario que te convenga y reunete con Oscar para discutir tus opciones de cobertura — sin costo, sin obligacion.",
        scheduleButton: "Agendar Reunion",
      },
      directContact: {
        or: "O comunicate directamente",
        phone: "956-335-0488",
        email: "ogarcia@tpension.com",
      },
    },

    // Footer
    footer: {
      tagline: "Protegiendo familias en el Valle del Rio Grande y mas alla.",
      services: "Servicios",
      company: "Compania",
      aboutUs: "Nosotros",
      contactUs: "Contacto",
      privacy: "Politica de Privacidad",
      terms: "Terminos de Servicio",
      disclaimer:
        "OG Insurance Services es una agencia de seguros independiente. Oscar Garcia es un agente de seguros licenciado. Los productos y disponibilidad pueden variar por estado. Este sitio web es solo para fines informativos y no constituye asesoramiento financiero o de seguros.",
      copyright: "OG Insurance Services. Todos los derechos reservados.",
    },

    // Sticky CTA
    stickyCta: {
      call: "Llamar a Oscar",
      quote: "Cotizacion",
    },

    // Language toggle
    language: {
      toggle: "English",
      code: "EN",
    },
  },
};

export type Language = keyof typeof translations;
export type Translations = (typeof translations)["en"];
export default translations;
