export interface Dictionary {
  nav: {
    about: string
    industries: string
    products: string
    process: string
    faq: string
    contact: string
    blog: string
  }
  hero: {
    title: string
    subtitle: string
    desc1: string
    desc2: string
    cta: string
  }
  about: {
    title: string
    p1: string
    p2: string
    stat1: { value: string; label: string }
    stat2: { value: string; label: string }
    stat3: { value: string; label: string }
  }
  industries: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
      applications: string[]
    }>
  }
  premiumScreens: {
    title: string
    items: Array<{ title: string; description: string }>
  }
  process: {
    title: string
    roboticTitle: string
    roboticSubtitle: string
    items: Array<{ title: string; description: string }>
  }
  screenSeries: {
    title: string
    subtitle: string
    items: Array<{ name: string; desc: string }>
  }
  sandLine: {
    title: string
    subtitle: string
    processTitle: string
    features: Array<{ title: string; text: string }>
    advantages: {
      title: string
      items: Array<{ title: string; description: string }>
    }
  }
  machinery: {
    title: string
    subtitle: string
    items: Array<{ name: string; desc: string }>
  }
  blogSection: {
    title: string
    subtitle: string
    viewAll: string
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{ question: string; answer: string }>
  }
  contact: {
    title: string
    address: string
    phone: string
    email: string
  }
  getInTouch: {
    title: string
    subtitle: string
    scanTitle: string
    scanDesc: string
    whatsapp: { title: string; desc: string; body: string }
    emailCard: { title: string; desc: string; body: string }
  }
  footer: {
    tagline1: string
    tagline2: string
    copyright: string
  }
  blogPage: {
    title: string
    subtitle: string
    backToHome: string
    readMore: string
    by: string
  }
  blogPost: {
    backToBlog: string
    by: string
    readTime: string
    ctaTitle: string
    ctaDesc: string
    ctaQuote: string
    ctaProducts: string
    relatedTitle: string
  }
  inquiry: {
    buttonLabel: string
    title: string
    subtitle: string
    namePlaceholder: string
    companyPlaceholder: string
    contactPlaceholder: string
    productLabel: string
    products: string[]
    messagePlaceholder: string
    submitEmail: string
    submitWhatsApp: string
    close: string
  }
}

export const en: Dictionary = {
  nav: {
    about: "About",
    industries: "Industries",
    products: "Products",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    blog: "Blog",
  },
  hero: {
    title: "Mining Screen Mesh",
    subtitle: "Expert",
    desc1: "Vibrating Screen Panels for Coal, Non-Ferrous & Hard Rock Mining",
    desc2: "Robotic-welded screening media — custom manufactured for Australia, Southeast Asia & Africa",
    cta: "Request a Custom Quote",
  },
  about: {
    title: "About Us",
    p1: "HWZ Industrial Technology is a leading manufacturer of mining screen mesh, vibrating screen panels and industrial screening media, proudly serving the Australian mining and construction sectors. With over 5,000 square metres of dedicated production space and state-of-the-art robotic welding equipment, we produce screens for coal mining, non-ferrous metal mining (copper, gold, silver, zinc, iron ore), hard rock mining and aggregate processing.",
    p2: "We specialise in welded screens, woven screens, polypropylene screens and a wide range of mineral processing machinery. Our dedicated export team has established long-term partnerships with clients in Australia, Southeast Asia and Africa, supplying custom-made vibrating screen panels that extend equipment life and reduce total operating cost.",
    stat1: { value: "5000+", label: "m² Production Area" },
    stat2: { value: "16+", label: "Screen Products" },
    stat3: { value: "10+", label: "Years Export" },
  },
  industries: {
    title: "Industries We Serve",
    subtitle: "Our mining screen mesh and vibrating screen panels are engineered for the world's most demanding mining and mineral processing environments",
    items: [
      {
        title: "Coal Mining",
        description: "Heavy-duty welded wire screens and woven mesh panels for coal screening, sizing and dewatering. Engineered for high-tonnage run-of-mine coal processing with minimal maintenance.",
        applications: ["Run-of-mine coal screening", "Coal fines dewatering", "Thermal coal sizing", "Coking coal preparation"],
      },
      {
        title: "Non-Ferrous Metal Mining",
        description: "Precision screening media for copper, gold, silver, zinc and iron ore processing. Anti-clogging screens maximise recovery rates in wet and sticky ore conditions.",
        applications: ["Copper ore screening", "Gold mine classification", "Iron ore processing", "Zinc & lead ore sizing"],
      },
      {
        title: "Hard Rock Mining",
        description: "Ultra wear-resistant screen panels for granite, basalt, quartzite and other hard rock applications. Robotic welding ensures consistent weld strength for extended service life.",
        applications: ["Granite quarry screening", "Basalt aggregate sizing", "Quartzite processing", "Hard rock primary scalping"],
      },
      {
        title: "Aggregate & Sand Production",
        description: "Complete screening solutions from primary scalping screens to fine sand dewatering. Covers every stage of aggregate and manufactured sand production lines.",
        applications: ["Sand production lines", "Gravel sizing", "Crushed stone screening", "Fine sand recovery"],
      },
    ],
  },
  premiumScreens: {
    title: "Premium Screens",
    items: [
      {
        title: "Superior Quality & Wear Resistance",
        description: "Robotic welding produces consistent weld parameters — high load capacity, long service life and excellent wear resistance for coal, hard rock and non-ferrous metal mining applications. Panels never delaminate under long-term alternating loads.",
      },
      {
        title: "Versatile Mining Applications",
        description: "Wide range of aperture sizes and wire diameters, suitable for any type of vibrating screen — linear, circular or elliptical motion. Custom panels made to match your machine dimensions.",
      },
      {
        title: "Lower Total Cost of Ownership",
        description: "Self-cleaning screen surface prevents blinding and clogging, maximising screening efficiency. Longer panel life, faster delivery and minimal maintenance reduce total cost per tonne screened.",
      },
    ],
  },
  process: {
    title: "Screen Production Process",
    roboticTitle: "Robotic Welding",
    roboticSubtitle: "Advantages",
    items: [
      {
        title: "Automated Machinery",
        description: "Robotic welding ensures clear production cycles and easy output control. Fixed production rhythm maximises efficiency and resource utilisation for consistent screen panel quality.",
      },
      {
        title: "High Productivity",
        description: "Robotic welding speed far exceeds manual welding. Robots operate continuously, enabling fast turnaround on custom mining screen mesh orders.",
      },
      {
        title: "Safe Production Environment",
        description: "Robotic welding operates in environments unsuitable for manual work, improving worker safety while maintaining continuous, high-volume production.",
      },
      {
        title: "Consistent Quality",
        description: "Stable welding parameters minimise human error. Every screen panel meets identical specifications, ensuring predictable performance in your vibrating screen.",
      },
    ],
  },
  screenSeries: {
    title: "HWZ Screen Series",
    subtitle: "Full range of vibrating screen panels and screening media — welded, woven and polyurethane — custom-made for coal mining, non-ferrous metal mining and hard rock mining applications",
    items: [
      { name: "Anti-Clogging Screen", desc: "Self-cleaning screen mesh for wet, sticky ores — ideal for non-ferrous metal and coal mining" },
      { name: "Dewatering Screen", desc: "High-frequency dewatering panels for sand, coal fines and mineral tailings" },
      { name: "Welded Screen", desc: "Robotic-welded wire screen panels for heavy-duty hard rock and aggregate primary screening" },
      { name: "Woven Wire Screen", desc: "Fine-aperture woven wire mesh for precision mineral classification and sizing" },
      { name: "Perforated Plate Screen", desc: "Heavy-duty perforated plate for scalping and coarse coal sizing in high-impact applications" },
    ],
  },
  sandLine: {
    title: "Sand Production Line",
    subtitle: "Complete integrated sand and aggregate production solution — advanced crushing, screening and fine sand recovery technology for quarry and mining operations",
    processTitle: "Process Features",
    features: [
      { title: "Fine Sand Recovery Device", text: "Advanced recovery system ensures minimal sand loss and maximum yield from the production line" },
      { title: "Flexible Finished Sand Grading", text: "Adjustable fineness modulus meets various construction and concrete aggregate requirements" },
      { title: "Premium Quality Standards", text: "All finished sand indicators meet national standards, suitable as premium concrete aggregate" },
      { title: "Economic Efficiency", text: "Low production cost per tonne with high screening efficiency and minimal material loss" },
    ],
    advantages: {
      title: "Production Line Advantages",
      items: [
        { title: "High Automation", description: "Fully automated production line with minimal manual intervention, reducing labour cost" },
        { title: "Environmental Protection", description: "Dust suppression and noise reduction systems for compliant, eco-friendly operation" },
        { title: "Flexible Configuration", description: "Customisable equipment configuration based on feed material, capacity and finished product specifications" },
      ],
    },
  },
  machinery: {
    title: "HWZ Machinery Product Series",
    subtitle: "Complete range of mineral processing and aggregate production equipment — crushers, washers, feeders and vibrating screens for coal, non-ferrous metal and hard rock mining operations",
    items: [
      { name: "Spiral Sand Washer", desc: "Spiral classifier for sand washing and fine material grading" },
      { name: "Wheel Sand Washer", desc: "Bucket-wheel washer for removing clay and fine impurities from aggregate" },
      { name: "Fine Sand Recovery Device", desc: "Hydrocyclone recovery unit to reclaim fine sand lost in washing water" },
      { name: "Vibrating Feeder", desc: "Electromagnetic vibrating feeder for continuous, controlled ore feed to crushers" },
      { name: "Circular Vibrating Screen", desc: "Multi-deck circular vibrating screen for coal, aggregate and mineral sizing" },
      { name: "Jaw Crusher", desc: "Primary jaw crusher for hard rock, coal and mineral coarse crushing" },
      { name: "Multi-cylinder Hydraulic Cone Crusher", desc: "High-efficiency cone crusher for secondary and tertiary hard rock and ore crushing" },
      { name: "Impact Crusher", desc: "Impact crusher for medium-hard rock and aggregate shaping applications" },
      { name: "Mobile Jaw Crushing Station", desc: "Track-mounted mobile primary crusher for on-site hard rock and quarry operations" },
      { name: "Mobile Cone Crushing Station", desc: "Track-mounted mobile secondary crusher for flexible, portable aggregate production" },
    ],
  },
  blogSection: {
    title: "Technical Resources",
    subtitle: "Practical guides on mining screen mesh maintenance, clogging prevention and screen media selection",
    viewAll: "View All Articles →",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about our mining screen mesh, vibrating screen panels and mineral processing equipment",
    items: [
      {
        question: "What types of mining screen mesh does HWZ manufacture?",
        answer: "HWZ manufactures welded wire screens, woven wire mesh screens, polyurethane screen panels, perforated plate screens, dewatering screens and anti-clogging screens. All panels can be custom-manufactured to fit any vibrating screen machine.",
      },
      {
        question: "What mining industries are your screen mesh panels designed for?",
        answer: "Our screening media is engineered for coal mining, non-ferrous metal mining (copper, gold, silver, zinc, iron ore), hard rock mining (granite, basalt, quartzite), aggregate and sand production, and general mineral processing. We also supply screens for construction and recycling applications.",
      },
      {
        question: "Can you custom-manufacture screen mesh panels to match my vibrating screen?",
        answer: "Yes. All HWZ screen panels are made to order. Supply your vibrating screen model, deck dimensions, required aperture size and wire diameter, and our engineering team will produce panels that fit your machine precisely — including non-standard shapes and hook-strip or bolt-down fixing systems.",
      },
      {
        question: "What is the minimum order quantity and lead time for mining screen mesh?",
        answer: "We accept small sample orders for evaluation. Production lead time for standard orders is typically 7–15 working days. Bulk orders are quoted individually based on specifications and quantity.",
      },
      {
        question: "Do you supply mining screen mesh to Australia?",
        answer: "Yes. Australia is one of our primary export markets. We have established long-term partnerships with Australian mining operations across coal, gold, iron ore and hard rock sectors. All products are packaged and labelled to Australian import requirements.",
      },
      {
        question: "What is the difference between a welded wire screen and a woven wire screen?",
        answer: "A welded wire screen uses robotic resistance welding to fuse cross wires to longitudinal wires at each intersection, producing a rigid, high-open-area panel suited to heavy loads and coarse materials. A woven wire screen interlocks wires in a crimp pattern to achieve finer apertures and tighter tolerances, ideal for precision mineral classification and fine sizing.",
      },
      {
        question: "How long do HWZ mining screen panels last compared to standard mesh?",
        answer: "HWZ screens use robotic welding with controlled parameters and high-tensile wire, resulting in service life typically 2–3× longer than manually welded or conventional screens. The self-cleaning surface prevents clogging, reducing unplanned downtime and replacement frequency.",
      },
      {
        question: "What wire materials are available for mining screen mesh?",
        answer: "Standard panels use high-carbon steel wire. We also supply manganese steel, stainless steel 304/316 and polyurethane/polypropylene composite panels depending on the abrasion, corrosion and temperature requirements of your specific application.",
      },
    ],
  },
  contact: {
    title: "We Are Here Waiting for You",
    address: "Minhang, Shanghai",
    phone: "Phone: 0086-21-54385286",
    email: "Email: contact@biditech.cn",
  },
  getInTouch: {
    title: "Get In Touch",
    subtitle: "Contact us for custom mining screen mesh quotes, technical specifications or product samples",
    scanTitle: "Scan QR Code",
    scanDesc: "Quick access via WhatsApp",
    whatsapp: {
      title: "WhatsApp",
      desc: "Instant messaging and voice calls",
      body: "Scan the QR code or click the WhatsApp button to contact us directly for mining screen mesh quotes, technical support or order information.",
    },
    emailCard: {
      title: "Email",
      desc: "Professional business communication",
      body: "Send us detailed inquiries, technical specifications, vibrating screen dimensions or business proposals via email.",
    },
  },
  footer: {
    tagline1: "Mining Screen Mesh Manufacturer | Vibrating Screen Panels | Screening Media",
    tagline2: "Coal Mining · Non-Ferrous Metal Mining · Hard Rock Mining · Aggregate Processing",
    copyright: "© 2022–2025 Biditech. All rights reserved.",
  },
  blogPage: {
    title: "Mining Screen Mesh Technical Blog",
    subtitle: "Technical guides, maintenance tips and product insights for mining screen mesh, vibrating screen panels and mineral processing equipment.",
    backToHome: "← Back to HWZ Mining Screen Mesh",
    readMore: "Read article →",
    by: "HWZ Industrial Technology",
  },
  blogPost: {
    backToBlog: "← All Articles",
    by: "HWZ Industrial Technology",
    readTime: "read",
    ctaTitle: "Need Mining Screen Mesh for Your Application?",
    ctaDesc: "HWZ Industrial Technology manufactures custom welded wire screens, woven wire mesh and polyurethane screen panels for coal mining, non-ferrous metal mining and hard rock mining.",
    ctaQuote: "Request a Quote",
    ctaProducts: "View Products",
    relatedTitle: "Related Articles",
  },
  inquiry: {
    buttonLabel: "Get a Quote",
    title: "Quick Inquiry",
    subtitle: "Tell us your requirements and we'll respond promptly",
    namePlaceholder: "Your Name *",
    companyPlaceholder: "Company (optional)",
    contactPlaceholder: "Email or WhatsApp *",
    productLabel: "Product of Interest",
    products: ["Mining Screen Mesh", "Anti-Clogging Screen", "Dewatering Screen", "Welded Wire Screen", "Woven Wire Screen", "Perforated Plate Screen", "Jaw Crusher", "Cone Crusher", "Sand Washing Machine", "Mobile Crushing Station", "Sand Production Line", "Other"],
    messagePlaceholder: "Describe your requirements (material type, aperture size, throughput, etc.)",
    submitEmail: "Send by Email",
    submitWhatsApp: "Send via WhatsApp",
    close: "Close",
  },
}

export const fr: Dictionary = {
  nav: {
    about: "À propos",
    industries: "Industries",
    products: "Produits",
    process: "Processus",
    faq: "FAQ",
    contact: "Contact",
    blog: "Blog",
  },
  hero: {
    title: "Toile de Criblage Minier",
    subtitle: "Expert",
    desc1: "Panneaux de Cribles Vibrants pour l'Exploitation du Charbon, des Métaux Non Ferreux et des Roches Dures",
    desc2: "Milieux de criblage soudés robotiquement — fabriqués sur mesure pour l'Australie, l'Asie du Sud-Est et l'Afrique",
    cta: "Demander un Devis",
  },
  about: {
    title: "À Propos de Nous",
    p1: "HWZ Industrial Technology est un fabricant leader de toiles de criblage minier, de panneaux de cribles vibrants et de milieux de criblage industriels, au service des secteurs miniers et de construction australiens. Avec plus de 5 000 mètres carrés d'espace de production dédié et des équipements de soudage robotique de pointe, nous produisons des cribles pour l'exploitation du charbon, l'exploitation de métaux non ferreux (cuivre, or, argent, zinc, minerai de fer), l'exploitation de roches dures et le traitement des granulats.",
    p2: "Nous sommes spécialisés dans les cribles soudés, les cribles tissés, les cribles en polypropylène et une large gamme de machines de traitement des minéraux. Notre équipe export dédiée a établi des partenariats à long terme avec des clients en Australie, en Asie du Sud-Est et en Afrique, fournissant des panneaux de cribles vibrants fabriqués sur mesure qui prolongent la durée de vie des équipements et réduisent le coût total d'exploitation.",
    stat1: { value: "5000+", label: "m² de Surface de Production" },
    stat2: { value: "16+", label: "Produits de Criblage" },
    stat3: { value: "10+", label: "Ans d'Exportation" },
  },
  industries: {
    title: "Secteurs que Nous Servons",
    subtitle: "Nos toiles de criblage minier et panneaux de cribles vibrants sont conçus pour les environnements miniers et de traitement des minéraux les plus exigeants au monde",
    items: [
      {
        title: "Exploitation du Charbon",
        description: "Cribles à fils soudés robustes et panneaux de grillage tissé pour le criblage, le calibrage et le déshydratation du charbon. Conçus pour le traitement à haut débit du charbon tout-venant avec une maintenance minimale.",
        applications: ["Criblage du charbon tout-venant", "Déshydratation des fines de charbon", "Calibrage du charbon thermique", "Préparation du charbon à coke"],
      },
      {
        title: "Exploitation des Métaux Non Ferreux",
        description: "Milieux de criblage de précision pour le traitement du cuivre, de l'or, de l'argent, du zinc et du minerai de fer. Les cribles anti-colmatage maximisent les taux de récupération dans les conditions de minerai humide et collant.",
        applications: ["Criblage du minerai de cuivre", "Classification des mines d'or", "Traitement du minerai de fer", "Calibrage du zinc et du plomb"],
      },
      {
        title: "Exploitation des Roches Dures",
        description: "Panneaux de cribles ultra-résistants à l'usure pour le granit, le basalte, le quartzite et autres applications en roches dures. Le soudage robotique assure une résistance de soudure constante pour une durée de service prolongée.",
        applications: ["Criblage en carrière de granit", "Calibrage des agrégats de basalte", "Traitement du quartzite", "Scalpage primaire des roches dures"],
      },
      {
        title: "Production d'Agrégats et de Sable",
        description: "Solutions de criblage complètes depuis les cribles de scalpage primaire jusqu'à la déshydratation du sable fin. Couvre chaque étape des lignes de production d'agrégats et de sable manufacturé.",
        applications: ["Lignes de production de sable", "Calibrage du gravier", "Criblage de pierre concassée", "Récupération du sable fin"],
      },
    ],
  },
  premiumScreens: {
    title: "Cribles Premium",
    items: [
      {
        title: "Qualité Supérieure et Résistance à l'Usure",
        description: "Le soudage robotique produit des paramètres de soudure constants — haute capacité de charge, longue durée de service et excellente résistance à l'usure pour les applications minières du charbon, des roches dures et des métaux non ferreux. Les panneaux ne se décollent jamais sous des charges alternées à long terme.",
      },
      {
        title: "Applications Minières Polyvalentes",
        description: "Large gamme de tailles d'ouvertures et de diamètres de fils, adaptés à tout type de crible vibrant — mouvement linéaire, circulaire ou elliptique. Panneaux personnalisés fabriqués aux dimensions de votre machine.",
      },
      {
        title: "Coût Total de Possession Réduit",
        description: "La surface de criblage autonettoyante prévient l'aveuglement et le colmatage, maximisant l'efficacité du criblage. Une durée de vie plus longue des panneaux, une livraison plus rapide et une maintenance minimale réduisent le coût total par tonne criblée.",
      },
    ],
  },
  process: {
    title: "Processus de Production des Cribles",
    roboticTitle: "Soudage Robotique",
    roboticSubtitle: "Avantages",
    items: [
      {
        title: "Machines Automatisées",
        description: "Le soudage robotique assure des cycles de production clairs et un contrôle facile de la production. Un rythme de production fixe maximise l'efficacité et l'utilisation des ressources pour une qualité constante des panneaux de cribles.",
      },
      {
        title: "Haute Productivité",
        description: "La vitesse de soudage robotique dépasse largement le soudage manuel. Les robots fonctionnent en continu, permettant un traitement rapide des commandes de toiles de criblage minier personnalisées.",
      },
      {
        title: "Environnement de Production Sûr",
        description: "Le soudage robotique fonctionne dans des environnements inappropriés au travail manuel, améliorant la sécurité des travailleurs tout en maintenant une production continue et à grand volume.",
      },
      {
        title: "Qualité Constante",
        description: "Les paramètres de soudure stables minimisent les erreurs humaines. Chaque panneau de crible répond à des spécifications identiques, garantissant des performances prévisibles dans votre crible vibrant.",
      },
    ],
  },
  screenSeries: {
    title: "Série de Cribles HWZ",
    subtitle: "Gamme complète de panneaux de cribles vibrants et milieux de criblage — soudés, tissés et polyuréthane — fabriqués sur mesure pour les applications minières du charbon, des métaux non ferreux et des roches dures",
    items: [
      { name: "Crible Anti-Colmatage", desc: "Toile de criblage autonettoyante pour les minerais humides et collants — idéale pour les mines de métaux non ferreux et de charbon" },
      { name: "Crible Déshydratant", desc: "Panneaux de déshydratation haute fréquence pour le sable, les fines de charbon et les résidus minéraux" },
      { name: "Crible Soudé", desc: "Panneaux de cribles à fils soudés robotiquement pour le criblage primaire robuste des roches dures et des agrégats" },
      { name: "Crible à Fils Tissés", desc: "Grillage tissé à fines ouvertures pour la classification et le calibrage précis des minéraux" },
      { name: "Crible à Plaques Perforées", desc: "Plaque perforée robuste pour le scalpage et le calibrage grossier du charbon dans les applications à fort impact" },
    ],
  },
  sandLine: {
    title: "Ligne de Production de Sable",
    subtitle: "Solution complète et intégrée de production de sable et d'agrégats — technologie avancée de concassage, criblage et récupération de sable fin pour les opérations de carrière et minières",
    processTitle: "Caractéristiques du Processus",
    features: [
      { title: "Dispositif de Récupération du Sable Fin", text: "Un système de récupération avancé assure une perte de sable minimale et un rendement maximal de la ligne de production" },
      { title: "Gradation Flexible du Sable Fini", text: "Le module de finesse ajustable répond à diverses exigences de construction et d'agrégats pour le béton" },
      { title: "Normes de Qualité Premium", text: "Tous les indicateurs de sable fini respectent les normes nationales, convenant comme agrégat de béton premium" },
      { title: "Efficacité Économique", text: "Faible coût de production par tonne avec une haute efficacité de criblage et une perte minimale de matériaux" },
    ],
    advantages: {
      title: "Avantages de la Ligne de Production",
      items: [
        { title: "Haute Automatisation", description: "Ligne de production entièrement automatisée avec une intervention manuelle minimale, réduisant les coûts de main-d'œuvre" },
        { title: "Protection Environnementale", description: "Systèmes de suppression des poussières et de réduction du bruit pour une exploitation respectueuse de l'environnement et conforme aux réglementations" },
        { title: "Configuration Flexible", description: "Configuration d'équipement personnalisable en fonction du matériau d'alimentation, de la capacité et des spécifications du produit fini" },
      ],
    },
  },
  machinery: {
    title: "Série de Machines HWZ",
    subtitle: "Gamme complète d'équipements de traitement des minéraux et de production d'agrégats — concasseurs, laveurs, alimentateurs et cribles vibrants pour les opérations minières de charbon, de métaux non ferreux et de roches dures",
    items: [
      { name: "Laveur de Sable à Spirale", desc: "Classificateur à spirale pour le lavage du sable et le classement des matériaux fins" },
      { name: "Laveur de Sable à Roue", desc: "Laveur à roue-pelle pour éliminer l'argile et les impuretés fines des agrégats" },
      { name: "Dispositif de Récupération du Sable Fin", desc: "Unité de récupération par hydrocyclone pour récupérer le sable fin perdu dans l'eau de lavage" },
      { name: "Alimentateur Vibrant", desc: "Alimentateur vibrant électromagnétique pour une alimentation continue et contrôlée en minerai vers les concasseurs" },
      { name: "Crible Vibrant Circulaire", desc: "Crible vibrant circulaire multi-plateaux pour le calibrage du charbon, des agrégats et des minéraux" },
      { name: "Concasseur à Mâchoires", desc: "Concasseur à mâchoires primaire pour le concassage grossier des roches dures, du charbon et des minéraux" },
      { name: "Concasseur à Cône Hydraulique Multi-cylindres", desc: "Concasseur à cône haute efficacité pour le concassage secondaire et tertiaire des roches dures et des minerais" },
      { name: "Concasseur à Impact", desc: "Concasseur à impact pour les applications de concassage et de mise en forme de roches de dureté moyenne" },
      { name: "Station Mobile de Concassage à Mâchoires", desc: "Concasseur primaire mobile sur chenilles pour les opérations sur site de roches dures et de carrières" },
      { name: "Station Mobile de Concassage à Cône", desc: "Concasseur secondaire mobile sur chenilles pour une production d'agrégats flexible et portable" },
    ],
  },
  blogSection: {
    title: "Ressources Techniques",
    subtitle: "Guides pratiques sur l'entretien des toiles de criblage minier, la prévention du colmatage et la sélection des milieux de criblage",
    viewAll: "Voir Tous les Articles →",
  },
  faq: {
    title: "Questions Fréquentes",
    subtitle: "Questions courantes sur nos toiles de criblage minier, panneaux de cribles vibrants et équipements de traitement des minéraux",
    items: [
      {
        question: "Quels types de toiles de criblage minier HWZ fabrique-t-il ?",
        answer: "HWZ fabrique des cribles à fils soudés, des cribles à fils tissés, des panneaux de cribles en polyuréthane, des cribles à plaques perforées, des cribles déshydratants et des cribles anti-colmatage. Tous les panneaux peuvent être fabriqués sur mesure pour s'adapter à n'importe quelle machine de crible vibrant.",
      },
      {
        question: "Pour quelles industries minières vos panneaux de toiles de criblage sont-ils conçus ?",
        answer: "Nos milieux de criblage sont conçus pour l'exploitation du charbon, l'exploitation de métaux non ferreux (cuivre, or, argent, zinc, minerai de fer), l'exploitation de roches dures (granit, basalte, quartzite), la production d'agrégats et de sable, et le traitement général des minéraux. Nous fournissons également des cribles pour les applications de construction et de recyclage.",
      },
      {
        question: "Pouvez-vous fabriquer sur mesure des panneaux de toiles pour mon crible vibrant ?",
        answer: "Oui. Tous les panneaux de cribles HWZ sont fabriqués sur commande. Fournissez le modèle de votre crible vibrant, les dimensions du plateau, la taille d'ouverture requise et le diamètre du fil, et notre équipe d'ingénierie produira des panneaux qui s'adaptent précisément à votre machine — y compris les formes non standard et les systèmes de fixation par bande crochet ou boulonnage.",
      },
      {
        question: "Quelle est la quantité minimale de commande et le délai de livraison pour les toiles de criblage minier ?",
        answer: "Nous acceptons les petites commandes d'échantillons pour évaluation. Le délai de production pour les commandes standard est généralement de 7 à 15 jours ouvrables. Les commandes en vrac sont devisées individuellement selon les spécifications et la quantité.",
      },
      {
        question: "Fournissez-vous des toiles de criblage minier en Australie ?",
        answer: "Oui. L'Australie est l'un de nos principaux marchés d'exportation. Nous avons établi des partenariats à long terme avec des opérations minières australiennes dans les secteurs du charbon, de l'or, du minerai de fer et des roches dures. Tous les produits sont emballés et étiquetés conformément aux exigences d'importation australiennes.",
      },
      {
        question: "Quelle est la différence entre un crible à fils soudés et un crible à fils tissés ?",
        answer: "Un crible à fils soudés utilise le soudage par résistance robotique pour fusionner les fils transversaux aux fils longitudinaux à chaque intersection, produisant un panneau rigide à haute surface ouverte adapté aux charges lourdes et aux matériaux grossiers. Un crible à fils tissés entrelace les fils dans un motif ondulé pour obtenir des ouvertures plus fines et des tolérances plus strictes, idéal pour la classification précise des minéraux et le calibrage fin.",
      },
      {
        question: "Quelle est la durée de vie des panneaux de cribles miniers HWZ par rapport aux toiles standard ?",
        answer: "Les cribles HWZ utilisent le soudage robotique avec des paramètres contrôlés et des fils à haute résistance, résultant en une durée de service typiquement 2 à 3 fois plus longue que les cribles soudés manuellement ou conventionnels. La surface autonettoyante prévient le colmatage, réduisant les temps d'arrêt imprévus et la fréquence de remplacement.",
      },
      {
        question: "Quels matériaux de fils sont disponibles pour les toiles de criblage minier ?",
        answer: "Les panneaux standard utilisent des fils en acier à haute teneur en carbone. Nous fournissons également de l'acier au manganèse, de l'acier inoxydable 304/316 et des panneaux composites polyuréthane/polypropylène selon les exigences d'abrasion, de corrosion et de température de votre application spécifique.",
      },
    ],
  },
  contact: {
    title: "Nous Sommes Là pour Vous",
    address: "Minhang, Shanghai",
    phone: "Tél : 0086-21-54385286",
    email: "Email : contact@biditech.cn",
  },
  getInTouch: {
    title: "Contactez-Nous",
    subtitle: "Contactez-nous pour des devis personnalisés de toiles de criblage minier, des spécifications techniques ou des échantillons de produits",
    scanTitle: "Scanner le Code QR",
    scanDesc: "Accès rapide via WhatsApp",
    whatsapp: {
      title: "WhatsApp",
      desc: "Messagerie instantanée et appels vocaux",
      body: "Scannez le code QR ou cliquez sur le bouton WhatsApp pour nous contacter directement pour des devis de toiles de criblage minier, un support technique ou des informations de commande.",
    },
    emailCard: {
      title: "Email",
      desc: "Communication professionnelle",
      body: "Envoyez-nous des demandes détaillées, des spécifications techniques, des dimensions de cribles vibrants ou des propositions commerciales par email.",
    },
  },
  footer: {
    tagline1: "Fabricant de Toiles de Criblage Minier | Panneaux de Cribles Vibrants | Milieux de Criblage",
    tagline2: "Exploitation du Charbon · Métaux Non Ferreux · Roches Dures · Traitement des Agrégats",
    copyright: "© 2022–2025 Biditech. Tous droits réservés.",
  },
  blogPage: {
    title: "Blog Technique sur les Toiles de Criblage Minier",
    subtitle: "Guides techniques, conseils de maintenance et aperçus de produits pour les toiles de criblage minier, les panneaux de cribles vibrants et les équipements de traitement des minéraux.",
    backToHome: "← Retour à HWZ Toiles de Criblage Minier",
    readMore: "Lire l'article →",
    by: "HWZ Industrial Technology",
  },
  blogPost: {
    backToBlog: "← Tous les Articles",
    by: "HWZ Industrial Technology",
    readTime: "lecture",
    ctaTitle: "Besoin de Toiles de Criblage Minier pour Votre Application ?",
    ctaDesc: "HWZ Industrial Technology fabrique des cribles à fils soudés, des grillages tissés et des panneaux de cribles en polyuréthane pour l'exploitation du charbon, des métaux non ferreux et des roches dures.",
    ctaQuote: "Demander un Devis",
    ctaProducts: "Voir les Produits",
    relatedTitle: "Articles Connexes",
  },
  inquiry: {
    buttonLabel: "Demander un Devis",
    title: "Demande Rapide",
    subtitle: "Décrivez vos besoins et nous vous répondrons rapidement",
    namePlaceholder: "Votre Nom *",
    companyPlaceholder: "Entreprise (facultatif)",
    contactPlaceholder: "Email ou WhatsApp *",
    productLabel: "Produit concerné",
    products: ["Toile de Criblage", "Crible Anti-Colmatage", "Crible de Déshydratation", "Crible Soudé", "Toile Tissée", "Plaque Perforée", "Concasseur à Mâchoires", "Concasseur à Cône", "Machine à Laver le Sable", "Station de Concassage Mobile", "Ligne de Production de Sable", "Autre"],
    messagePlaceholder: "Décrivez vos besoins (type de matériau, taille de maille, débit, etc.)",
    submitEmail: "Envoyer par Email",
    submitWhatsApp: "Envoyer via WhatsApp",
    close: "Fermer",
  },
}

export const es: Dictionary = {
  nav: {
    about: "Nosotros",
    industries: "Industrias",
    products: "Productos",
    process: "Proceso",
    faq: "FAQ",
    contact: "Contacto",
    blog: "Blog",
  },
  hero: {
    title: "Malla de Cribado Minero",
    subtitle: "Experto",
    desc1: "Paneles de Cribas Vibratorias para Minería de Cobre, Oro, Carbón y Roca Dura en Perú, Chile y el Mundo",
    desc2: "Medios de cribado soldados robóticamente — fabricados a medida para Perú, Chile, Australia y Sudeste Asiático",
    cta: "Solicitar Cotización",
  },
  about: {
    title: "Acerca de Nosotros",
    p1: "HWZ Industrial Technology es un fabricante líder de malla de cribado minero, paneles de cribas vibratorias y medios de cribado industrial, con amplia presencia en los principales mercados mineros de América del Sur. Con más de 5,000 metros cuadrados de espacio de producción dedicado y equipos de soldadura robótica de última generación, producimos cribas para minería de cobre y oro en Perú y Chile, minería de carbón, metales no ferrosos (plata, zinc, mineral de hierro) y minería de roca dura. Atendemos minas de gran escala como Antamina, Cerro Verde y Las Bambas en Perú, así como los yacimientos cupríferos del norte de Chile como Escondida y Collahuasi.",
    p2: "Nos especializamos en cribas soldadas, cribas tejidas, cribas de polipropileno y una amplia gama de maquinaria de procesamiento mineral. Nuestro equipo de exportación dedicado ha establecido alianzas a largo plazo con clientes en Perú, Chile, Australia y Sudeste Asiático, suministrando paneles de cribas vibratorias fabricados a medida que prolongan la vida útil de los equipos y reducen el costo operativo total. Ofrecemos documentación técnica en español y atención comercial directa para el mercado latinoamericano.",
    stat1: { value: "5000+", label: "m² Área de Producción" },
    stat2: { value: "16+", label: "Productos de Cribado" },
    stat3: { value: "10+", label: "Años de Exportación" },
  },
  industries: {
    title: "Industrias que Servimos",
    subtitle: "Nuestra malla de cribado minero y paneles de cribas vibratorias están diseñados para los entornos mineros y de procesamiento mineral más exigentes del mundo",
    items: [
      {
        title: "Minería de Carbón",
        description: "Cribas de alambre soldado de alta resistencia y paneles de malla tejida para cribado, clasificación y deshidratación de carbón. Diseñadas para procesamiento de carbón en bruto de alto tonelaje con mantenimiento mínimo.",
        applications: ["Cribado de carbón en bruto", "Deshidratación de finos de carbón", "Clasificación de carbón térmico", "Preparación de carbón coquizable"],
      },
      {
        title: "Minería de Cobre y Oro — Perú y Chile",
        description: "Medios de cribado de precisión para procesamiento de cobre, oro, plata, zinc y mineral de hierro. Las cribas anti-atascamiento maximizan las tasas de recuperación en condiciones de mineral húmedo y pegajoso, ideales para los grandes yacimientos porfíricos de cobre en los Andes peruanos y chilenos.",
        applications: ["Cribado de mineral de cobre — Antamina, Cerro Verde, Escondida", "Clasificación en minas de oro peruanas", "Procesamiento de mineral de hierro", "Clasificación de zinc y plata en Perú"],
      },
      {
        title: "Minería de Roca Dura",
        description: "Paneles de cribas ultra resistentes al desgaste para granito, basalto, cuarcita y otras aplicaciones de roca dura. La soldadura robótica asegura resistencia de soldadura consistente para una vida útil extendida.",
        applications: ["Cribado en cantera de granito", "Clasificación de áridos de basalto", "Procesamiento de cuarcita", "Scalping primario de roca dura"],
      },
      {
        title: "Producción de Áridos y Arena",
        description: "Soluciones completas de cribado desde cribas de scalping primario hasta deshidratación de arena fina. Cubre cada etapa de las líneas de producción de áridos y arena manufacturada.",
        applications: ["Líneas de producción de arena", "Clasificación de grava", "Cribado de piedra triturada", "Recuperación de arena fina"],
      },
    ],
  },
  premiumScreens: {
    title: "Cribas Premium",
    items: [
      {
        title: "Calidad Superior y Resistencia al Desgaste",
        description: "La soldadura robótica produce parámetros de soldadura consistentes — alta capacidad de carga, larga vida útil y excelente resistencia al desgaste para aplicaciones mineras de carbón, roca dura y metales no ferrosos. Los paneles nunca se deslamianan bajo cargas alternantes a largo plazo.",
      },
      {
        title: "Aplicaciones Mineras Versátiles",
        description: "Amplia gama de tamaños de abertura y diámetros de alambre, adecuados para cualquier tipo de criba vibratoria — movimiento lineal, circular o elíptico. Paneles personalizados fabricados a las dimensiones de su máquina.",
      },
      {
        title: "Menor Costo Total de Propiedad",
        description: "La superficie de cribado autolimpiante previene el cegamiento y atascamiento, maximizando la eficiencia del cribado. Mayor vida útil del panel, entrega más rápida y mantenimiento mínimo reducen el costo total por tonelada cribada.",
      },
    ],
  },
  process: {
    title: "Proceso de Producción de Cribas",
    roboticTitle: "Soldadura Robótica",
    roboticSubtitle: "Ventajas",
    items: [
      {
        title: "Maquinaria Automatizada",
        description: "La soldadura robótica asegura ciclos de producción claros y control fácil de la producción. El ritmo de producción fijo maximiza la eficiencia y utilización de recursos para calidad consistente de paneles de criba.",
      },
      {
        title: "Alta Productividad",
        description: "La velocidad de soldadura robótica supera ampliamente la soldadura manual. Los robots operan continuamente, permitiendo rápida entrega de pedidos personalizados de malla de cribado minero.",
      },
      {
        title: "Entorno de Producción Seguro",
        description: "La soldadura robótica opera en entornos inadecuados para el trabajo manual, mejorando la seguridad de los trabajadores mientras mantiene una producción continua y de alto volumen.",
      },
      {
        title: "Calidad Consistente",
        description: "Los parámetros de soldadura estables minimizan el error humano. Cada panel de criba cumple especificaciones idénticas, asegurando rendimiento predecible en su criba vibratoria.",
      },
    ],
  },
  screenSeries: {
    title: "Serie de Cribas HWZ",
    subtitle: "Gama completa de paneles de cribas vibratorias y medios de cribado — soldados, tejidos y poliuretano — fabricados a medida para aplicaciones mineras de carbón, metales no ferrosos y roca dura",
    items: [
      { name: "Criba Anti-Atascamiento", desc: "Malla de cribado autolimpiante para minerales húmedos y pegajosos — ideal para minería de metales no ferrosos y carbón" },
      { name: "Criba Deshidratadora", desc: "Paneles de deshidratación de alta frecuencia para arena, finos de carbón y relaves minerales" },
      { name: "Criba Soldada", desc: "Paneles de criba de alambre soldado robóticamente para cribado primario robusto de roca dura y áridos" },
      { name: "Criba de Alambre Tejido", desc: "Malla de alambre tejido de abertura fina para clasificación y clasificación precisa de minerales" },
      { name: "Criba de Placa Perforada", desc: "Placa perforada de alta resistencia para scalping y clasificación gruesa de carbón en aplicaciones de alto impacto" },
    ],
  },
  sandLine: {
    title: "Línea de Producción de Arena",
    subtitle: "Solución completa e integrada de producción de arena y áridos — tecnología avanzada de trituración, cribado y recuperación de arena fina para operaciones de cantera y minería",
    processTitle: "Características del Proceso",
    features: [
      { title: "Dispositivo de Recuperación de Arena Fina", text: "El sistema de recuperación avanzado asegura pérdida mínima de arena y rendimiento máximo de la línea de producción" },
      { title: "Clasificación Flexible de Arena Terminada", text: "El módulo de finura ajustable cumple varios requisitos de construcción y áridos para concreto" },
      { title: "Estándares de Calidad Premium", text: "Todos los indicadores de arena terminada cumplen las normas nacionales, adecuados como árido premium para concreto" },
      { title: "Eficiencia Económica", text: "Bajo costo de producción por tonelada con alta eficiencia de cribado y pérdida mínima de material" },
    ],
    advantages: {
      title: "Ventajas de la Línea de Producción",
      items: [
        { title: "Alta Automatización", description: "Línea de producción totalmente automatizada con intervención manual mínima, reduciendo costos laborales" },
        { title: "Protección Ambiental", description: "Sistemas de supresión de polvo y reducción de ruido para operación conforme y ecológica" },
        { title: "Configuración Flexible", description: "Configuración de equipo personalizable basada en material de alimentación, capacidad y especificaciones del producto terminado" },
      ],
    },
  },
  machinery: {
    title: "Serie de Maquinaria HWZ",
    subtitle: "Gama completa de equipos de procesamiento mineral y producción de áridos — trituradoras, lavadoras, alimentadores y cribas vibratorias para operaciones mineras de carbón, metales no ferrosos y roca dura",
    items: [
      { name: "Lavadora de Arena de Espiral", desc: "Clasificador de espiral para lavado de arena y clasificación de material fino" },
      { name: "Lavadora de Arena de Rueda", desc: "Lavadora de rueda-cangilón para eliminar arcilla e impurezas finas de áridos" },
      { name: "Dispositivo de Recuperación de Arena Fina", desc: "Unidad de recuperación por hidrociclón para recuperar arena fina perdida en agua de lavado" },
      { name: "Alimentador Vibratorio", desc: "Alimentador vibratorio electromagnético para alimentación continua y controlada de mineral a trituradoras" },
      { name: "Criba Vibratoria Circular", desc: "Criba vibratoria circular multi-piso para clasificación de carbón, áridos y minerales" },
      { name: "Trituradora de Mandíbulas", desc: "Trituradora de mandíbulas primaria para trituración gruesa de roca dura, carbón y minerales" },
      { name: "Trituradora de Cono Hidráulico Multi-cilindro", desc: "Trituradora de cono de alta eficiencia para trituración secundaria y terciaria de roca dura y minerales" },
      { name: "Trituradora de Impacto", desc: "Trituradora de impacto para aplicaciones de trituración y conformado de roca de dureza media" },
      { name: "Estación Móvil de Trituración de Mandíbulas", desc: "Trituradora primaria móvil sobre orugas para operaciones in situ de roca dura y canteras" },
      { name: "Estación Móvil de Trituración de Cono", desc: "Trituradora secundaria móvil sobre orugas para producción flexible y portátil de áridos" },
    ],
  },
  blogSection: {
    title: "Recursos Técnicos",
    subtitle: "Guías prácticas sobre mantenimiento de malla de cribado minero, prevención de atascamiento y selección de medios de cribado",
    viewAll: "Ver Todos los Artículos →",
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Preguntas comunes sobre nuestra malla de cribado minero, paneles de cribas vibratorias y equipos de procesamiento mineral",
    items: [
      {
        question: "¿Qué tipos de malla de cribado minero fabrica HWZ?",
        answer: "HWZ fabrica cribas de alambre soldado, cribas de malla de alambre tejido, paneles de cribas de poliuretano, cribas de placa perforada, cribas deshidratadoras y cribas anti-atascamiento. Todos los paneles pueden fabricarse a medida para adaptarse a cualquier máquina de criba vibratoria.",
      },
      {
        question: "¿Para qué industrias mineras están diseñados sus paneles de malla de cribado?",
        answer: "Nuestros medios de cribado están diseñados para minería de carbón, minería de metales no ferrosos (cobre, oro, plata, zinc, mineral de hierro), minería de roca dura (granito, basalto, cuarcita), producción de áridos y arena, y procesamiento mineral general. También suministramos cribas para aplicaciones de construcción y reciclaje.",
      },
      {
        question: "¿Pueden fabricar a medida paneles de malla para mi criba vibratoria?",
        answer: "Sí. Todos los paneles de criba HWZ se fabrican bajo pedido. Proporcione el modelo de su criba vibratoria, dimensiones del piso, tamaño de abertura requerido y diámetro de alambre, y nuestro equipo de ingeniería producirá paneles que se adapten precisamente a su máquina — incluyendo formas no estándar y sistemas de fijación por tira de gancho o perno.",
      },
      {
        question: "¿Cuál es la cantidad mínima de pedido y el tiempo de entrega para malla de cribado minero?",
        answer: "Aceptamos pedidos pequeños de muestras para evaluación. El tiempo de producción para pedidos estándar es típicamente de 7 a 15 días hábiles. Los pedidos a granel se cotizan individualmente según especificaciones y cantidad.",
      },
      {
        question: "¿Suministran malla de cribado minero a Perú y Chile?",
        answer: "Sí. Perú y Chile son mercados prioritarios para HWZ. Suministramos paneles de cribas vibratorias para operaciones de minería de cobre, oro y plata en los Andes. Nuestra malla anti-atascamiento es especialmente valorada en yacimientos porfíricos de cobre con mineral húmedo. Contamos con experiencia en exportación a ambos países, incluyendo certificación de origen, documentación en español y coordinación de flete hasta los puertos de Callao (Lima) y San Antonio (Santiago). Contáctenos para muestras y cotización en español.",
      },
      {
        question: "¿Suministran malla de cribado minero a Australia?",
        answer: "Sí. Australia es uno de nuestros principales mercados de exportación. Hemos establecido alianzas a largo plazo con operaciones mineras australianas en los sectores de carbón, oro, mineral de hierro y roca dura. Todos los productos están empacados y etiquetados según los requisitos de importación australianos.",
      },
      {
        question: "¿Cuál es la diferencia entre una criba de alambre soldado y una de alambre tejido?",
        answer: "Una criba de alambre soldado utiliza soldadura por resistencia robótica para fusionar alambres transversales a alambres longitudinales en cada intersección, produciendo un panel rígido de alta área abierta adecuado para cargas pesadas y materiales gruesos. Una criba de alambre tejido entrelaza alambres en un patrón rizado para lograr aberturas más finas y tolerancias más estrictas, ideal para clasificación precisa de minerales y calibrado fino.",
      },
      {
        question: "¿Cuánto duran los paneles de criba minera HWZ en comparación con la malla estándar?",
        answer: "Las cribas HWZ utilizan soldadura robótica con parámetros controlados y alambre de alta tensión, resultando en una vida útil típicamente 2-3 veces mayor que las cribas soldadas manualmente o convencionales. La superficie autolimpiante previene el atascamiento, reduciendo el tiempo de inactividad no planificado y la frecuencia de reemplazo.",
      },
      {
        question: "¿Qué materiales de alambre están disponibles para malla de cribado minero?",
        answer: "Los paneles estándar utilizan alambre de acero de alto carbono. También suministramos acero al manganeso, acero inoxidable 304/316 y paneles compuestos de poliuretano/polipropileno según los requisitos de abrasión, corrosión y temperatura de su aplicación específica.",
      },
    ],
  },
  contact: {
    title: "Estamos Aquí para Usted",
    address: "Minhang, Shanghái",
    phone: "Teléfono: 0086-21-54385286",
    email: "Email: contact@biditech.cn",
  },
  getInTouch: {
    title: "Contáctenos",
    subtitle: "Contáctenos para cotizaciones en español, especificaciones técnicas o muestras de malla de cribado para minería en Perú, Chile y toda Latinoamérica",
    scanTitle: "Escanear Código QR",
    scanDesc: "Acceso rápido via WhatsApp",
    whatsapp: {
      title: "WhatsApp",
      desc: "Mensajería instantánea y llamadas de voz",
      body: "Escanee el código QR o haga clic en el botón de WhatsApp para contactarnos directamente para cotizaciones de malla de cribado minero, soporte técnico o información de pedidos.",
    },
    emailCard: {
      title: "Email",
      desc: "Comunicación empresarial profesional",
      body: "Envíenos consultas detalladas, especificaciones técnicas, dimensiones de cribas vibratorias o propuestas comerciales por correo electrónico.",
    },
  },
  footer: {
    tagline1: "Fabricante de Malla de Cribado Minero | Paneles de Cribas Vibratorias | Medios de Cribado",
    tagline2: "Perú · Chile · Australia · Minería de Cobre · Oro · Carbón · Roca Dura",
    copyright: "© 2022–2025 Biditech. Todos los derechos reservados.",
  },
  blogPage: {
    title: "Blog Técnico de Malla de Cribado Minero",
    subtitle: "Guías técnicas, consejos de mantenimiento y perspectivas de productos para malla de cribado minero, paneles de cribas vibratorias y equipos de procesamiento mineral.",
    backToHome: "← Volver a HWZ Malla de Cribado Minero",
    readMore: "Leer artículo →",
    by: "HWZ Industrial Technology",
  },
  blogPost: {
    backToBlog: "← Todos los Artículos",
    by: "HWZ Industrial Technology",
    readTime: "lectura",
    ctaTitle: "¿Necesita Malla de Cribado Minero para Su Aplicación?",
    ctaDesc: "HWZ Industrial Technology fabrica cribas de alambre soldado personalizadas, malla de alambre tejido y paneles de cribas de poliuretano para minería de carbón, metales no ferrosos y roca dura.",
    ctaQuote: "Solicitar Cotización",
    ctaProducts: "Ver Productos",
    relatedTitle: "Artículos Relacionados",
  },
  inquiry: {
    buttonLabel: "Solicitar Cotización",
    title: "Consulta Rápida",
    subtitle: "Cuéntenos sus necesidades y le responderemos rápidamente",
    namePlaceholder: "Su Nombre *",
    companyPlaceholder: "Empresa (opcional)",
    contactPlaceholder: "Email o WhatsApp *",
    productLabel: "Producto de Interés",
    products: ["Malla de Cribado", "Malla Anti-Obstrucción", "Malla Deshidratadora", "Malla Soldada", "Malla Tejida", "Placa Perforada", "Trituradora de Mandíbulas", "Trituradora de Cono", "Lavadora de Arena", "Planta Móvil de Trituración", "Línea de Producción de Arena", "Otro"],
    messagePlaceholder: "Describa sus necesidades (tipo de material, tamaño de apertura, caudal, etc.)",
    submitEmail: "Enviar por Email",
    submitWhatsApp: "Enviar por WhatsApp",
    close: "Cerrar",
  },
}

export const ru: Dictionary = {
  nav: {
    about: "О нас",
    industries: "Отрасли",
    products: "Продукция",
    process: "Процесс",
    faq: "FAQ",
    contact: "Контакты",
    blog: "Блог",
  },
  hero: {
    title: "Горнодобывающая Сетка",
    subtitle: "Эксперт",
    desc1: "Панели вибрационных грохотов для добычи угля, цветных металлов и твёрдых пород",
    desc2: "Просеивающие поверхности с роботизированной сваркой — изготовлены на заказ для Австралии, Юго-Восточной Азии и Африки",
    cta: "Запросить Коммерческое Предложение",
  },
  about: {
    title: "О Нас",
    p1: "HWZ Industrial Technology является ведущим производителем горнодобывающей сетки, панелей вибрационных грохотов и промышленных просеивающих поверхностей, гордо обслуживая австралийские горнодобывающие и строительные отрасли. Имея более 5 000 квадратных метров специализированных производственных площадей и современное роботизированное сварочное оборудование, мы производим грохоты для добычи угля, добычи цветных металлов (медь, золото, серебро, цинк, железная руда), добычи твёрдых пород и переработки щебня.",
    p2: "Мы специализируемся на сварных грохотах, тканых грохотах, полипропиленовых грохотах и широком ассортименте горнодобывающего оборудования. Наша специализированная экспортная команда установила долгосрочные партнёрские отношения с клиентами в Австралии, Юго-Восточной Азии и Африке, поставляя изготовленные на заказ панели вибрационных грохотов, которые продлевают срок службы оборудования и снижают общие операционные расходы.",
    stat1: { value: "5000+", label: "м² Производственной Площади" },
    stat2: { value: "16+", label: "Продуктов Грохочения" },
    stat3: { value: "10+", label: "Лет Экспорта" },
  },
  industries: {
    title: "Отрасли, которые Мы Обслуживаем",
    subtitle: "Наша горнодобывающая сетка и панели вибрационных грохотов разработаны для самых требовательных горнодобывающих и минералообрабатывающих сред мира",
    items: [
      {
        title: "Угольная Промышленность",
        description: "Тяжёлые сварные проволочные грохоты и тканые сетчатые панели для просева, сортировки и обезвоживания угля. Разработаны для высокотоннажной переработки рядового угля с минимальным обслуживанием.",
        applications: ["Просев рядового угля", "Обезвоживание угольных мелочей", "Сортировка энергетического угля", "Подготовка коксующегося угля"],
      },
      {
        title: "Добыча Цветных Металлов",
        description: "Высокоточные просеивающие поверхности для переработки меди, золота, серебра, цинка и железной руды. Антизасоряющие грохоты максимизируют степень извлечения в условиях влажной и липкой руды.",
        applications: ["Просев медной руды", "Классификация золотодобывающих шахт", "Переработка железной руды", "Сортировка цинка и свинца"],
      },
      {
        title: "Добыча Твёрдых Пород",
        description: "Сверхизносостойкие панели грохотов для гранита, базальта, кварцита и других твёрдопородных применений. Роботизированная сварка обеспечивает стабильную прочность сварного шва для увеличенного срока службы.",
        applications: ["Просев в гранитных карьерах", "Сортировка базальтовых щебней", "Переработка кварцита", "Первичное грохочение твёрдых пород"],
      },
      {
        title: "Производство Щебня и Песка",
        description: "Комплексные решения для просева от первичных грохотов до обезвоживания мелкого песка. Охватывает каждый этап производственных линий по изготовлению щебня и машинного песка.",
        applications: ["Линии производства песка", "Сортировка гравия", "Просев дроблёного камня", "Извлечение мелкого песка"],
      },
    ],
  },
  premiumScreens: {
    title: "Премиальные Грохоты",
    items: [
      {
        title: "Превосходное Качество и Износостойкость",
        description: "Роботизированная сварка обеспечивает стабильные параметры сварки — высокую несущую способность, длительный срок службы и отличную износостойкость для применения в угольной, твёрдопородной и цветнометалльной добыче. Панели никогда не расслаиваются при длительных переменных нагрузках.",
      },
      {
        title: "Универсальное Горнодобывающее Применение",
        description: "Широкий диапазон размеров ячеек и диаметров проволоки, подходящих для любого типа вибрационного грохота — линейного, кругового или эллиптического движения. Индивидуальные панели изготовлены под размеры вашего оборудования.",
      },
      {
        title: "Меньшая Совокупная Стоимость Владения",
        description: "Самоочищающаяся поверхность грохота предотвращает засорение и залипание, максимизируя эффективность просева. Более длительный срок службы панелей, более быстрая доставка и минимальное обслуживание снижают общую стоимость на тонну просеянного материала.",
      },
    ],
  },
  process: {
    title: "Процесс Производства Грохотов",
    roboticTitle: "Роботизированная Сварка",
    roboticSubtitle: "Преимущества",
    items: [
      {
        title: "Автоматизированное Оборудование",
        description: "Роботизированная сварка обеспечивает чёткие производственные циклы и лёгкий контроль объёма выпуска. Фиксированный ритм производства максимизирует эффективность и использование ресурсов для стабильного качества панелей грохотов.",
      },
      {
        title: "Высокая Производительность",
        description: "Скорость роботизированной сварки значительно превышает ручную сварку. Роботы работают непрерывно, обеспечивая быстрое выполнение заказов на горнодобывающую сетку.",
      },
      {
        title: "Безопасная Производственная Среда",
        description: "Роботизированная сварка работает в условиях, непригодных для ручного труда, повышая безопасность работников при сохранении непрерывного, высокообъёмного производства.",
      },
      {
        title: "Стабильное Качество",
        description: "Стабильные параметры сварки минимизируют человеческий фактор. Каждая панель грохота соответствует одинаковым спецификациям, обеспечивая предсказуемую производительность вашего вибрационного грохота.",
      },
    ],
  },
  screenSeries: {
    title: "Серия Грохотов HWZ",
    subtitle: "Полная линейка панелей вибрационных грохотов и просеивающих поверхностей — сварных, тканых и полиуретановых — изготовленных на заказ для применения в угольной, цветнометалльной и твёрдопородной добыче",
    items: [
      { name: "Антизасоряющий Грохот", desc: "Самоочищающаяся сетка для влажных, липких руд — идеально для добычи цветных металлов и угля" },
      { name: "Обезвоживающий Грохот", desc: "Высокочастотные обезвоживающие панели для песка, угольных мелочей и минеральных хвостов" },
      { name: "Сварной Грохот", desc: "Панели грохотов с роботизированной сваркой для тяжёлого первичного просева твёрдых пород и щебня" },
      { name: "Тканый Проволочный Грохот", desc: "Тонкоячеистая тканая проволочная сетка для точной минеральной классификации и сортировки" },
      { name: "Грохот из Перфорированного Листа", desc: "Тяжёлый перфорированный лист для грохочения и грубой сортировки угля в условиях высоких ударных нагрузок" },
    ],
  },
  sandLine: {
    title: "Линия Производства Песка",
    subtitle: "Комплексное интегрированное решение для производства песка и щебня — передовые технологии дробления, грохочения и извлечения мелкого песка для карьерных и горнодобывающих операций",
    processTitle: "Особенности Процесса",
    features: [
      { title: "Устройство Извлечения Мелкого Песка", text: "Передовая система извлечения обеспечивает минимальные потери песка и максимальный выход из производственной линии" },
      { title: "Гибкая Градация Готового Песка", text: "Регулируемый модуль крупности отвечает различным строительным и бетонным требованиям к заполнителям" },
      { title: "Премиальные Стандарты Качества", text: "Все показатели готового песка соответствуют национальным стандартам, пригодны в качестве премиального заполнителя для бетона" },
      { title: "Экономическая Эффективность", text: "Низкая себестоимость производства на тонну при высокой эффективности грохочения и минимальных потерях материала" },
    ],
    advantages: {
      title: "Преимущества Производственной Линии",
      items: [
        { title: "Высокая Автоматизация", description: "Полностью автоматизированная производственная линия с минимальным ручным вмешательством, снижающая затраты на рабочую силу" },
        { title: "Защита Окружающей Среды", description: "Системы пылеподавления и шумоглушения для экологически совместимой работы в соответствии с нормами" },
        { title: "Гибкая Конфигурация", description: "Настраиваемая конфигурация оборудования на основе исходного материала, производительности и спецификаций готового продукта" },
      ],
    },
  },
  machinery: {
    title: "Серия Оборудования HWZ",
    subtitle: "Полный ассортимент оборудования для минеральной переработки и производства щебня — дробилки, промывочные машины, питатели и вибрационные грохоты для угольных, цветнометалльных и твёрдопородных горных операций",
    items: [
      { name: "Спиральная Пескомойка", desc: "Спиральный классификатор для промывки песка и классификации мелкого материала" },
      { name: "Колёсная Пескомойка", desc: "Ковшовая колёсная мойка для удаления глины и мелких примесей из заполнителя" },
      { name: "Устройство Извлечения Мелкого Песка", desc: "Гидроциклонная установка для извлечения мелкого песка, потерянного в промывочной воде" },
      { name: "Вибрационный Питатель", desc: "Электромагнитный вибрационный питатель для непрерывной, управляемой подачи руды к дробилкам" },
      { name: "Круговой Вибрационный Грохот", desc: "Многодечный круговой вибрационный грохот для сортировки угля, щебня и минералов" },
      { name: "Щековая Дробилка", desc: "Первичная щековая дробилка для грубого дробления твёрдых пород, угля и минералов" },
      { name: "Многоцилиндровая Гидравлическая Конусная Дробилка", desc: "Высокоэффективная конусная дробилка для вторичного и третичного дробления твёрдых пород и руды" },
      { name: "Роторная Дробилка", desc: "Роторная дробилка для дробления и формовки пород средней твёрдости" },
      { name: "Мобильная Щековая Дробильная Установка", desc: "Мобильная первичная дробилка на гусеничном ходу для работы на месте добычи твёрдых пород и в карьерах" },
      { name: "Мобильная Конусная Дробильная Установка", desc: "Мобильная вторичная дробилка на гусеничном ходу для гибкого переносного производства щебня" },
    ],
  },
  blogSection: {
    title: "Технические Ресурсы",
    subtitle: "Практические руководства по обслуживанию горнодобывающей сетки, предотвращению засорения и выбору просеивающих поверхностей",
    viewAll: "Просмотреть Все Статьи →",
  },
  faq: {
    title: "Часто Задаваемые Вопросы",
    subtitle: "Распространённые вопросы о нашей горнодобывающей сетке, панелях вибрационных грохотов и оборудовании для минеральной переработки",
    items: [
      {
        question: "Какие виды горнодобывающей сетки производит HWZ?",
        answer: "HWZ производит сварные проволочные грохоты, тканые проволочные сетки, полиуретановые панели грохотов, перфорированные листовые грохоты, обезвоживающие грохоты и антизасоряющие грохоты. Все панели могут быть изготовлены на заказ для любого вибрационного грохота.",
      },
      {
        question: "Для каких горнодобывающих отраслей предназначены ваши панели сетки?",
        answer: "Наши просеивающие поверхности разработаны для угольной добычи, добычи цветных металлов (медь, золото, серебро, цинк, железная руда), добычи твёрдых пород (гранит, базальт, кварцит), производства щебня и песка, а также общей минеральной переработки. Мы также поставляем грохоты для строительных и рециклинговых применений.",
      },
      {
        question: "Можете ли вы изготовить панели сетки на заказ для моего вибрационного грохота?",
        answer: "Да. Все панели грохотов HWZ изготавливаются на заказ. Предоставьте модель вашего вибрационного грохота, размеры деки, требуемый размер ячейки и диаметр проволоки, и наша инженерная команда изготовит панели, точно подходящие к вашей машине — включая нестандартные формы и крепёжные системы с крюковой полосой или болтовым креплением.",
      },
      {
        question: "Какой минимальный объём заказа и сроки поставки для горнодобывающей сетки?",
        answer: "Мы принимаем небольшие образцовые заказы для оценки. Срок производства для стандартных заказов обычно составляет 7–15 рабочих дней. Оптовые заказы котируются индивидуально в зависимости от спецификаций и количества.",
      },
      {
        question: "Поставляете ли вы горнодобывающую сетку в Австралию?",
        answer: "Да. Австралия является одним из наших основных экспортных рынков. Мы установили долгосрочные партнёрские отношения с австралийскими горнодобывающими предприятиями в секторах угля, золота, железной руды и твёрдых пород. Все продукты упакованы и маркированы в соответствии с требованиями австралийского импорта.",
      },
      {
        question: "В чём разница между сварным проволочным грохотом и тканым проволочным грохотом?",
        answer: "Сварной проволочный грохот использует роботизированную контактную сварку для соединения поперечных проволок с продольными в каждом пересечении, производя жёсткую панель с высокой долей открытой площади, подходящую для тяжёлых нагрузок и крупных материалов. Тканый проволочный грохот переплетает проволоки в волнистый узор для достижения более мелких ячеек и более жёстких допусков, идеально для точной минеральной классификации и тонкой сортировки.",
      },
      {
        question: "Каков срок службы панелей горнодобывающих грохотов HWZ по сравнению со стандартной сеткой?",
        answer: "Грохоты HWZ используют роботизированную сварку с контролируемыми параметрами и высокопрочную проволоку, что даёт срок службы, как правило, в 2–3 раза превышающий срок службы грохотов ручной или обычной сварки. Самоочищающаяся поверхность предотвращает засорение, снижая внеплановые простои и частоту замены.",
      },
      {
        question: "Какие материалы проволоки доступны для горнодобывающей сетки?",
        answer: "Стандартные панели используют высокоуглеродистую стальную проволоку. Мы также поставляем марганцевую сталь, нержавеющую сталь 304/316 и полиуретановые/полипропиленовые композитные панели в зависимости от требований по абразивному износу, коррозии и температуре вашего конкретного применения.",
      },
    ],
  },
  contact: {
    title: "Мы Здесь, Чтобы Помочь Вам",
    address: "Миньхан, Шанхай",
    phone: "Телефон: 0086-21-54385286",
    email: "Email: contact@biditech.cn",
  },
  getInTouch: {
    title: "Связаться с Нами",
    subtitle: "Свяжитесь с нами для получения индивидуальных коммерческих предложений на горнодобывающую сетку, технических спецификаций или образцов продукции",
    scanTitle: "Сканировать QR-код",
    scanDesc: "Быстрый доступ через WhatsApp",
    whatsapp: {
      title: "WhatsApp",
      desc: "Мгновенные сообщения и голосовые звонки",
      body: "Отсканируйте QR-код или нажмите кнопку WhatsApp, чтобы связаться с нами напрямую для получения коммерческих предложений на горнодобывающую сетку, технической поддержки или информации о заказе.",
    },
    emailCard: {
      title: "Электронная Почта",
      desc: "Профессиональная деловая переписка",
      body: "Отправьте нам подробные запросы, технические спецификации, размеры вибрационных грохотов или деловые предложения по электронной почте.",
    },
  },
  footer: {
    tagline1: "Производитель Горнодобывающей Сетки | Панели Вибрационных Грохотов | Просеивающие Поверхности",
    tagline2: "Угольная Добыча · Цветные Металлы · Твёрдые Породы · Переработка Щебня",
    copyright: "© 2022–2025 Biditech. Все права защищены.",
  },
  blogPage: {
    title: "Технический Блог по Горнодобывающей Сетке",
    subtitle: "Технические руководства, советы по обслуживанию и обзоры продуктов для горнодобывающей сетки, панелей вибрационных грохотов и оборудования для минеральной переработки.",
    backToHome: "← Вернуться на HWZ Горнодобывающая Сетка",
    readMore: "Читать статью →",
    by: "HWZ Industrial Technology",
  },
  blogPost: {
    backToBlog: "← Все Статьи",
    by: "HWZ Industrial Technology",
    readTime: "чтение",
    ctaTitle: "Нужна Горнодобывающая Сетка для Вашего Применения?",
    ctaDesc: "HWZ Industrial Technology производит индивидуальные сварные проволочные грохоты, тканые проволочные сетки и полиуретановые панели грохотов для угольной, цветнометалльной и твёрдопородной добычи.",
    ctaQuote: "Запросить Предложение",
    ctaProducts: "Просмотреть Продукцию",
    relatedTitle: "Похожие Статьи",
  },
  inquiry: {
    buttonLabel: "Запрос Цены",
    title: "Быстрый Запрос",
    subtitle: "Опишите ваши требования — мы свяжемся с вами в ближайшее время",
    namePlaceholder: "Ваше Имя *",
    companyPlaceholder: "Компания (необязательно)",
    contactPlaceholder: "Email или WhatsApp *",
    productLabel: "Интересующий продукт",
    products: ["Горнодобывающая Сетка", "Антизасорная Сетка", "Сетка для Обезвоживания", "Сварная Сетка", "Тканая Сетка", "Перфорированная Плита", "Щековая Дробилка", "Конусная Дробилка", "Пескомоечная Машина", "Мобильная Дробильная Станция", "Линия по Производству Песка", "Другое"],
    messagePlaceholder: "Опишите ваши требования (тип материала, размер ячейки, производительность и т.д.)",
    submitEmail: "Отправить по Email",
    submitWhatsApp: "Отправить через WhatsApp",
    close: "Закрыть",
  },
}

export const ar: Dictionary = {
  nav: {
    about: "من نحن",
    industries: "الصناعات",
    products: "المنتجات",
    process: "العملية",
    faq: "الأسئلة",
    contact: "اتصل بنا",
    blog: "المدونة",
  },
  hero: {
    title: "شبكة الغربلة التعدينية",
    subtitle: "خبراء",
    desc1: "ألواح الغرابيل الاهتزازية لتعدين الفحم والمعادن غير الحديدية والصخور الصلبة",
    desc2: "وسائط غربلة ملحومة آلياً — مصنوعة خصيصاً لأستراليا وجنوب شرق آسيا وأفريقيا",
    cta: "طلب عرض سعر",
  },
  about: {
    title: "من نحن",
    p1: "تُعدّ HWZ Industrial Technology شركة رائدة في تصنيع شبكات الغربلة التعدينية وألواح الغرابيل الاهتزازية ووسائط الغربلة الصناعية، وتخدم بفخر قطاعَي التعدين والبناء في أستراليا. بفضل أكثر من 5,000 متر مربع من مساحة الإنتاج المتخصصة ومعدات اللحام الروبوتي المتطورة، ننتج غرابيل لتعدين الفحم وتعدين المعادن غير الحديدية (النحاس والذهب والفضة والزنك وخام الحديد) وتعدين الصخور الصلبة ومعالجة الركام.",
    p2: "نتخصص في الغرابيل الملحومة والغرابيل المنسوجة وغرابيل البولي بروبلين ومجموعة واسعة من آلات معالجة المعادن. أرست فرقة التصدير المتخصصة لدينا شراكات طويلة الأمد مع عملاء في أستراليا وجنوب شرق آسيا وأفريقيا، إذ تزوّدهم بألواح غرابيل اهتزازية مصنوعة خصيصاً تُطيل عمر المعدات وتُقلّل إجمالي تكاليف التشغيل.",
    stat1: { value: "5000+", label: "م² مساحة إنتاج" },
    stat2: { value: "16+", label: "منتج غربلة" },
    stat3: { value: "10+", label: "سنوات تصدير" },
  },
  industries: {
    title: "الصناعات التي نخدمها",
    subtitle: "صُمِّمت شبكات الغربلة التعدينية وألواح الغرابيل الاهتزازية لدينا لتناسب أكثر بيئات التعدين ومعالجة المعادن تطلباً في العالم",
    items: [
      {
        title: "تعدين الفحم",
        description: "غرابيل من الأسلاك الملحومة الثقيلة وألواح الشبكة المنسوجة لغربلة الفحم وتصنيفه وإزالة المياه منه. مصممة لمعالجة الفحم الخام بإنتاجية عالية مع صيانة لا تُذكر.",
        applications: ["غربلة الفحم الخام", "تجفيف غبار الفحم", "تصنيف الفحم الحراري", "تجهيز فحم الكوك"],
      },
      {
        title: "تعدين المعادن غير الحديدية",
        description: "وسائط غربلة دقيقة لمعالجة النحاس والذهب والفضة والزنك وخام الحديد. تُعظّم الغرابيل المضادة للانسداد معدلات الاسترداد في ظروف الخام الرطب واللزج.",
        applications: ["غربلة خام النحاس", "تصنيف مناجم الذهب", "معالجة خام الحديد", "تصنيف الزنك والرصاص"],
      },
      {
        title: "تعدين الصخور الصلبة",
        description: "ألواح غرابيل فائقة المقاومة للتآكل للجرانيت والبازلت والكوارتزيت وغيرها من تطبيقات الصخور الصلبة. يضمن اللحام الروبوتي قوة لحام ثابتة لعمر خدمة ممتد.",
        applications: ["غربلة محاجر الجرانيت", "تصنيف ركام البازلت", "معالجة الكوارتزيت", "الغربلة الأولية للصخور الصلبة"],
      },
      {
        title: "إنتاج الركام والرمل",
        description: "حلول غربلة متكاملة من غرابيل التجريد الأولي إلى تجفيف الرمال الناعمة. تغطي كل مرحلة من مراحل خطوط إنتاج الركام والرمال المصنّعة.",
        applications: ["خطوط إنتاج الرمل", "تصنيف الحصى", "غربلة الحجر المسحوق", "استرداد الرمال الناعمة"],
      },
    ],
  },
  premiumScreens: {
    title: "الغرابيل المتميزة",
    items: [
      {
        title: "جودة فائقة ومقاومة للتآكل",
        description: "ينتج اللحام الروبوتي معاملات لحام ثابتة — قدرة تحميل عالية وعمر خدمة طويل ومقاومة ممتازة للتآكل في تطبيقات تعدين الفحم والصخور الصلبة والمعادن غير الحديدية. لا تتقشر الألواح أبداً في ظل أحمال متناوبة طويلة الأمد.",
      },
      {
        title: "تطبيقات تعدين متعددة الاستخدامات",
        description: "مجموعة واسعة من أحجام الفتحات وأقطار الأسلاك، مناسبة لأي نوع من الغرابيل الاهتزازية — حركة خطية أو دائرية أو إهليلجية. ألواح مخصصة مصنوعة لتناسب أبعاد آلتك.",
      },
      {
        title: "تكلفة إجمالية أقل للملكية",
        description: "السطح الغرباليّ ذاتي التنظيف يمنع العمى والانسداد، مما يعظّم كفاءة الغربلة. عمر اللوح الأطول والتسليم الأسرع والصيانة الدنيا تقلّل التكلفة الإجمالية لكل طن مُغرْبَل.",
      },
    ],
  },
  process: {
    title: "عملية إنتاج الغرابيل",
    roboticTitle: "اللحام الروبوتي",
    roboticSubtitle: "المزايا",
    items: [
      {
        title: "آلات آلية",
        description: "يضمن اللحام الروبوتي دورات إنتاج واضحة وتحكماً سهلاً في الإنتاج. يُعظّم إيقاع الإنتاج الثابت الكفاءة واستخدام الموارد لجودة ثابتة لألواح الغرابيل.",
      },
      {
        title: "إنتاجية عالية",
        description: "تتجاوز سرعة اللحام الروبوتي اللحامَ اليدوي بفارق كبير. تعمل الروبوتات بصفة مستمرة مما يتيح تسليماً سريعاً لطلبات شبكة الغربلة التعدينية المخصصة.",
      },
      {
        title: "بيئة إنتاج آمنة",
        description: "يعمل اللحام الروبوتي في بيئات غير ملائمة للعمل اليدوي، مما يحسّن سلامة العمال مع الحفاظ على إنتاج مستمر وبحجم كبير.",
      },
      {
        title: "جودة ثابتة",
        description: "تُقلّل معاملات اللحام المستقرة الأخطاء البشرية. تستوفي كل لوحة غربال مواصفات متطابقة، مما يضمن أداءً متوقعاً في غرالك الاهتزازي.",
      },
    ],
  },
  screenSeries: {
    title: "سلسلة غرابيل HWZ",
    subtitle: "مجموعة كاملة من ألواح الغرابيل الاهتزازية ووسائط الغربلة — ملحومة ومنسوجة وبولي يوريثان — مصنوعة خصيصاً لتطبيقات تعدين الفحم والمعادن غير الحديدية والصخور الصلبة",
    items: [
      { name: "غربال مضاد للانسداد", desc: "شبكة غربلة ذاتية التنظيف للخامات الرطبة واللزجة — مثالية لتعدين المعادن غير الحديدية والفحم" },
      { name: "غربال تجفيف", desc: "ألواح تجفيف عالية التردد للرمل وغبار الفحم والمخلفات المعدنية" },
      { name: "غربال ملحوم", desc: "ألواح غرابيل من الأسلاك الملحومة آلياً للغربلة الأولية الثقيلة للصخور الصلبة والركام" },
      { name: "غربال سلكي منسوج", desc: "شبكة سلكية منسوجة ذات فتحات دقيقة للتصنيف الدقيق للمعادن" },
      { name: "غربال صفيحة مثقبة", desc: "صفيحة مثقبة ثقيلة للتجريد والتصنيف الخشن للفحم في التطبيقات عالية الصدمات" },
    ],
  },
  sandLine: {
    title: "خط إنتاج الرمل",
    subtitle: "حل متكامل لإنتاج الرمل والركام — تقنية متقدمة للتكسير والغربلة واسترداد الرمال الناعمة لعمليات المحاجر والتعدين",
    processTitle: "ميزات العملية",
    features: [
      { title: "جهاز استرداد الرمال الناعمة", text: "يضمن نظام الاسترداد المتقدم الحد الأدنى من فقدان الرمال وأقصى عائد من خط الإنتاج" },
      { title: "تدريج مرن للرمال النهائية", text: "معامل الدقة القابل للضبط يلبي متطلبات الإنشاء والركام للخرسانة المختلفة" },
      { title: "معايير جودة متميزة", text: "تستوفي جميع مؤشرات الرمال النهائية المعايير الوطنية، مناسبة كركام متميز للخرسانة" },
      { title: "الكفاءة الاقتصادية", text: "انخفاض تكاليف الإنتاج لكل طن مع كفاءة غربلة عالية وحد أدنى من فقدان المواد" },
    ],
    advantages: {
      title: "مزايا خط الإنتاج",
      items: [
        { title: "أتمتة عالية", description: "خط إنتاج مؤتمت بالكامل مع حد أدنى من التدخل اليدوي لتقليل تكاليف العمالة" },
        { title: "حماية البيئة", description: "أنظمة كبت الغبار وتقليل الضوضاء للتشغيل المتوافق مع اللوائح وصديق البيئة" },
        { title: "تكوين مرن", description: "تكوين معدات قابل للتخصيص استناداً إلى مادة التغذية والطاقة الإنتاجية ومواصفات المنتج النهائي" },
      ],
    },
  },
  machinery: {
    title: "سلسلة آلات HWZ",
    subtitle: "مجموعة كاملة من معدات معالجة المعادن وإنتاج الركام — كسارات وغسالات وموزعات وغرابيل اهتزازية لعمليات تعدين الفحم والمعادن غير الحديدية والصخور الصلبة",
    items: [
      { name: "غسالة رمل حلزونية", desc: "مصنّف حلزوني لغسيل الرمل وتدريج المواد الدقيقة" },
      { name: "غسالة رمل عجلية", desc: "غسالة دلو عجلي لإزالة الطين والشوائب الدقيقة من الركام" },
      { name: "جهاز استرداد الرمال الناعمة", desc: "وحدة استرداد بالهيدروسيكلون لاستعادة الرمال الناعمة المفقودة في مياه الغسيل" },
      { name: "موزع اهتزازي", desc: "موزع اهتزازي كهرومغناطيسي لتغذية خام مستمرة ومتحكم بها إلى الكسارات" },
      { name: "غربال اهتزازي دائري", desc: "غربال اهتزازي دائري متعدد الطوابق لتصنيف الفحم والركام والمعادن" },
      { name: "كسارة فكية", desc: "كسارة فكية أولية للتكسير الخشن للصخور الصلبة والفحم والمعادن" },
      { name: "كسارة مخروطية هيدروليكية متعددة الأسطوانات", desc: "كسارة مخروطية عالية الكفاءة للتكسير الثانوي والثلاثي للصخور الصلبة والخام" },
      { name: "كسارة صدمية", desc: "كسارة صدمية لتكسير وتشكيل الصخور متوسطة الصلابة" },
      { name: "محطة تكسير فكي متنقلة", desc: "كسارة أولية متنقلة على مجنزرات لعمليات الصخور الصلبة والمحاجر في الموقع" },
      { name: "محطة تكسير مخروطي متنقلة", desc: "كسارة ثانوية متنقلة على مجنزرات لإنتاج ركام مرن ومحمول" },
    ],
  },
  blogSection: {
    title: "الموارد التقنية",
    subtitle: "أدلة عملية لصيانة شبكات الغربلة التعدينية والوقاية من الانسداد واختيار وسائط الغربلة",
    viewAll: "عرض جميع المقالات →",
  },
  faq: {
    title: "الأسئلة الشائعة",
    subtitle: "أسئلة شائعة حول شبكات الغربلة التعدينية وألواح الغرابيل الاهتزازية ومعدات معالجة المعادن",
    items: [
      {
        question: "ما أنواع شبكات الغربلة التعدينية التي تصنعها HWZ؟",
        answer: "تصنع HWZ غرابيل الأسلاك الملحومة وشبكات الأسلاك المنسوجة وألواح الغرابيل البولي يوريثانية وغرابيل الصفائح المثقبة وغرابيل التجفيف والغرابيل المضادة للانسداد. يمكن تصنيع جميع الألواح خصيصاً لتناسب أي آلة غربال اهتزازي.",
      },
      {
        question: "لأي صناعات تعدينية صُمِّمت ألواح شبكات الغربلة لديكم؟",
        answer: "صُمِّمت وسائط الغربلة لدينا لتعدين الفحم وتعدين المعادن غير الحديدية (النحاس والذهب والفضة والزنك وخام الحديد) وتعدين الصخور الصلبة (الجرانيت والبازلت والكوارتزيت) وإنتاج الركام والرمال والمعالجة المعدنية العامة. كما نزوّد غرابيل لتطبيقات البناء والتدوير.",
      },
      {
        question: "هل يمكنكم تصنيع ألواح شبكة مخصصة لتناسب غرالي الاهتزازي؟",
        answer: "نعم. تُصنَّع جميع ألواح غرابيل HWZ بناءً على الطلب. زوّدنا بموديل غرالك الاهتزازي وأبعاد الطابق وحجم الفتحة المطلوب وقطر السلك، وسيُنتج فريق الهندسة لدينا ألواحاً تناسب آلتك بدقة — بما في ذلك الأشكال غير القياسية وأنظمة التثبيت بشريط الخطاف أو البراغي.",
      },
      {
        question: "ما الحد الأدنى لكمية الطلب ومدة التسليم لشبكات الغربلة التعدينية؟",
        answer: "نقبل طلبات عينات صغيرة للتقييم. مدة الإنتاج للطلبات القياسية 7-15 يوم عمل عادةً. تُقتبس الطلبات بالجملة بصورة فردية استناداً إلى المواصفات والكمية.",
      },
      {
        question: "هل تزوّدون شبكات الغربلة التعدينية إلى أستراليا؟",
        answer: "نعم. تُعدّ أستراليا أحد أسواق التصدير الرئيسية لدينا. أرسينا شراكات طويلة الأمد مع عمليات التعدين الأسترالية في قطاعات الفحم والذهب وخام الحديد والصخور الصلبة. تُعبّأ جميع المنتجات وتُوسَم وفقاً لمتطلبات الاستيراد الأسترالية.",
      },
      {
        question: "ما الفرق بين غربال الأسلاك الملحومة وغربال الأسلاك المنسوجة؟",
        answer: "يستخدم غربال الأسلاك الملحومة اللحام بالمقاومة الروبوتي لدمج الأسلاك المستعرضة بالأسلاك الطولية عند كل تقاطع، منتجاً لوحاً صلباً ذا مساحة مفتوحة عالية مناسباً للأحمال الثقيلة والمواد الخشنة. يتشابك غربال الأسلاك المنسوجة في نمط متموج للحصول على فتحات أدق وتفاوتات أضيق، مثالي للتصنيف الدقيق للمعادن والتدريج الناعم.",
      },
      {
        question: "كم يدوم عمر ألواح غرابيل HWZ مقارنةً بالشبكة القياسية؟",
        answer: "تستخدم غرابيل HWZ لحاماً روبوتياً بمعاملات محكومة وسلكاً عالي الشد، مما يُفضي إلى عمر خدمة يبلغ في العادة ضعفين إلى ثلاثة أضعاف مقارنةً بالغرابيل الملحومة يدوياً أو الاعتيادية. السطح ذاتي التنظيف يمنع الانسداد مما يُقلّل التوقف المفاجئ وتكرار الاستبدال.",
      },
      {
        question: "ما مواد الأسلاك المتاحة لشبكات الغربلة التعدينية؟",
        answer: "تستخدم الألواح القياسية أسلاك الفولاذ عالي الكربون. كما نوفر فولاذ المنجنيز والفولاذ المقاوم للصدأ 304/316 والألواح المركّبة من البولي يوريثان/البولي بروبلين وفقاً لمتطلبات التآكل والتآكل الكيميائي ودرجة الحرارة في تطبيقك الخاص.",
      },
    ],
  },
  contact: {
    title: "نحن هنا في انتظارك",
    address: "مينهانغ، شنغهاي",
    phone: "هاتف: 0086-21-54385286",
    email: "البريد الإلكتروني: contact@biditech.cn",
  },
  getInTouch: {
    title: "تواصل معنا",
    subtitle: "اتصل بنا للحصول على عروض أسعار مخصصة لشبكات الغربلة التعدينية أو المواصفات التقنية أو عينات المنتجات",
    scanTitle: "مسح رمز QR",
    scanDesc: "وصول سريع عبر واتساب",
    whatsapp: {
      title: "واتساب",
      desc: "رسائل فورية ومكالمات صوتية",
      body: "امسح رمز الاستجابة السريعة أو انقر على زر واتساب للتواصل معنا مباشرةً للحصول على عروض أسعار شبكات الغربلة التعدينية أو الدعم التقني أو معلومات الطلب.",
    },
    emailCard: {
      title: "البريد الإلكتروني",
      desc: "تواصل مهني للأعمال",
      body: "أرسل إلينا استفسارات مفصّلة ومواصفات تقنية وأبعاد الغرابيل الاهتزازية أو مقترحات العمل عبر البريد الإلكتروني.",
    },
  },
  footer: {
    tagline1: "مصنّع شبكات الغربلة التعدينية | ألواح الغرابيل الاهتزازية | وسائط الغربلة",
    tagline2: "تعدين الفحم · المعادن غير الحديدية · الصخور الصلبة · معالجة الركام",
    copyright: "© 2022–2025 Biditech. جميع الحقوق محفوظة.",
  },
  blogPage: {
    title: "مدونة تقنية لشبكات الغربلة التعدينية",
    subtitle: "أدلة تقنية ونصائح صيانة ورؤى المنتجات لشبكات الغربلة التعدينية وألواح الغرابيل الاهتزازية ومعدات معالجة المعادن.",
    backToHome: "← العودة إلى HWZ شبكات الغربلة التعدينية",
    readMore: "اقرأ المقال →",
    by: "HWZ Industrial Technology",
  },
  blogPost: {
    backToBlog: "← جميع المقالات",
    by: "HWZ Industrial Technology",
    readTime: "قراءة",
    ctaTitle: "هل تحتاج إلى شبكة غربلة تعدينية لتطبيقك؟",
    ctaDesc: "تصنع HWZ Industrial Technology غرابيل أسلاك ملحومة مخصصة وشبكات أسلاك منسوجة وألواح غرابيل بولي يوريثانية لتعدين الفحم والمعادن غير الحديدية والصخور الصلبة.",
    ctaQuote: "طلب عرض سعر",
    ctaProducts: "عرض المنتجات",
    relatedTitle: "مقالات ذات صلة",
  },
  inquiry: {
    buttonLabel: "طلب سعر",
    title: "استفسار سريع",
    subtitle: "صف متطلباتك وسنتواصل معك في أقرب وقت",
    namePlaceholder: "اسمك *",
    companyPlaceholder: "الشركة (اختياري)",
    contactPlaceholder: "البريد الإلكتروني أو واتساب *",
    productLabel: "المنتج المطلوب",
    products: ["شبكة غربلة تعدينية", "شبكة مضادة للانسداد", "شبكة تجفيف", "شبكة ملحومة", "شبكة منسوجة", "لوح مثقوب", "كسارة فكية", "كسارة مخروطية", "غسالة رمل", "محطة تكسير متنقلة", "خط إنتاج الرمل", "أخرى"],
    messagePlaceholder: "صف متطلباتك (نوع المادة، حجم الفتحة، الطاقة الإنتاجية، إلخ)",
    submitEmail: "إرسال عبر البريد الإلكتروني",
    submitWhatsApp: "إرسال عبر واتساب",
    close: "إغلاق",
  },
}
