// src/i18n/ui.ts
//
// All translatable strings for the AdriTech site, keyed by language.
// Components import the `useTranslations()` helper from ./utils.ts and
// call t('some.key') to get the right string for the current locale.
//
// To add a new string:
//   1. Add the key + English text under `en`
//   2. Add the same key under `fr` and `nl` (placeholder is fine for now)
//   3. Use it in a component:  {t('your.key')}
//
// To add a new language:
//   1. Add it to `locales` in astro.config.mjs
//   2. Add a new top-level entry below (e.g. de: { ... })

export const languages = {
    en: 'English',
    fr: 'Français',
    nl: 'Nederlands',
} as const;

export const defaultLang = 'fr';

export const ui = {
    en: {
        // ----- Header / nav -----
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.gallery': 'Projects',
        'nav.testimonials': 'Reviews',
        'nav.contact': 'Contact',
        'nav.openMenu': 'Open menu',
        'nav.language': 'Language',

        // ----- Hero -----
        'hero.title.line1': 'Independent Electrician in Brussels',
        'hero.title.line2': '— RGIE compliance, handled end to end',
        'hero.tagline':
            'Residential wiring, smart home automation, and the paperwork most electricians skip — from AREI/RGIE conformity checks to full electrical plans for your renovation or new build.',
        'hero.cta.quote': 'Request a Quote',
        'hero.cta.call': 'Call +32 471 49 50 13',

        // ----- Services -----
        'services.heading': 'What I Do',
        'services.residential.title': 'Residential Electrical Work',
        'services.residential.body':
            'Wiring, repairs, panel upgrades, outlet and lighting installations. Clean work, finished properly, explained in plain language.',
        'services.smart.title': 'Smart Home Automation',
        'services.smart.body':
            'Smart lighting, heating controls, connected security, and voice-assistant integration. Designed around how you actually live — not a catalog.',
        'services.planning.title': 'Electrical Planning & Design',
        'services.planning.body':
            'Full electrical plans for renovations and new builds, drawn to Belgian standards. I handle the technical details so your architect, contractor, and inspector stay aligned.',
        'services.conformity.title': 'RGIE / AREI Compliance',
        'services.conformity.body':
            "Preparation and follow-up for pre-sale and periodic inspections. I survey the defects, draw the single-line diagram, carry out the work and arrange the accredited body's visit. One contact, from report to certificate.",

        // ----- About -----
        'about.heading': 'About Adrian',
        'about.p1':
            "I've spent the last decade working on residential electrical installations across Brussels and the surrounding communes — from single-room rewires to full smart home projects. What sets my work apart is the planning side: before a single cable goes in, I make sure your installation is designed to meet AREI/RGIE standards from day one. Fewer surprises. Fewer rework jobs. A clean pass on the conformity check.",
        'about.p2':
            "I work directly with homeowners, architects, and contractors. If you want an electrician who thinks three steps ahead and leaves the paperwork in order, we'll work well together.",

        // ----- Gallery -----
        'gallery.heading': 'Recent Projects',
        'gallery.subtitle':
            'A look at real installations — boards, lighting, and home automation work across Brussels.',
        'gallery.project5.alt':
            'Custom electrical distribution board with full Qbus home automation system',
        'gallery.project5.caption': 'Qbus home automation — custom distribution board',
        'gallery.project6.alt':
            'Large electrical distribution board with integrated Niko intercom controller',
        'gallery.project6.caption': 'Full-home distribution board with Niko intercom',
        'gallery.project2.alt': 'Cleanly labeled residential electrical distribution board',
        'gallery.project2.caption': 'Residential board — fully labeled per circuit',
        'gallery.project3.alt': 'Indirect LED strip lighting installed in a modern kitchen ceiling',
        'gallery.project3.caption': 'Indirect LED lighting — kitchen ambience',
        'gallery.project7.alt': 'Custom outdoor lighting fixture, Brussels residential installation',
        'gallery.project7.caption': 'Outdoor lighting — residential exterior',
        'gallery.project4.alt': 'Electric underfloor heating installation during egaline pour',
        'gallery.project4.caption': 'Electric underfloor heating — egaline pour in progress',
        'gallery.project1.alt': 'Attending the Qbus certified installer programming course',
        'gallery.project1.caption': 'Certified Qbus installer training',

        // ----- Testimonials -----
        'testimonials.heading': 'What Clients Say',
        'testimonials.rating': '5.0 on Google · 5 reviews',
        'testimonials.quote1':
            'Adrian est réactif, disponible, professionnel et et donne de très bon conseils. Je recommande vivement ses services !',
        'testimonials.cite1': '— Diane C., avis Google',
        'testimonials.quote2':
            'Great experience, work done swiftly and professionally. Recommended!',
        'testimonials.cite2': '— S. S., Local Guide, Google review',
        'testimonials.all': 'See all reviews on Google →',
        'testimonials.cta.heading': 'Worked with AdriTech?',
        'testimonials.cta.text':
            'Your review helps the next homeowner decide. It takes a minute.',
        'testimonials.cta.button': 'Leave a Google review',
        'testimonials.cta.qr': 'QR code to leave a Google review for AdriTech',
        // ----- Contact -----
        'contact.heading': 'Start Your Project',
        'contact.intro':
            'Tell me about what you need — a new installation, a smart home upgrade, a conformity check, or just a question. I read every message and reply within 24 hours.',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone (optional)',
        'contact.form.projectType': 'Project type',
        'contact.form.projectType.placeholder': 'Select one…',
        'contact.form.projectType.residential': 'Residential wiring / installation',
        'contact.form.projectType.smart': 'Smart home automation',
        'contact.form.projectType.planning': 'Electrical planning & design',
        'contact.form.projectType.conformity': 'Conformity check (AREI/RGIE)',
        'contact.form.projectType.other': 'Something else',
        'contact.form.message': 'How can I help?',
        'contact.form.submit': 'Send Message',
        'contact.form.honeypot.aria': 'Leave this field empty',
        'contact.alt.prefix': 'Prefer to call?',

        // ----- Footer -----
        'footer.copyright':
            '© 2026 AdriTech — Adrian Tudovan · Independent electrician, Brussels',
        'footer.facebook.aria': 'AdriTech on Facebook',
        'footer.instagram.aria': 'AdriTech on Instagram',
        'footer.review.text': 'Leave a Google review',
        'footer.review.aria': 'Leave a Google review for AdriTech',
    },

    // ----- French (placeholders — to translate next step) ----

    fr: {
        // ----- Header / nav -----
        'nav.services': 'Services',
        'nav.about': 'À propos',
        'nav.gallery': 'Réalisations',
        'nav.testimonials': 'Avis',
        'nav.contact': 'Contact',
        'nav.openMenu': 'Ouvrir le menu',
        'nav.language': 'Langue',

        // ----- Hero -----
        'hero.title.line1': 'Électricien indépendant à Bruxelles',
        'hero.title.line2': '— mise en conformité RGIE de A à Z',
        'hero.tagline':
            "Installations résidentielles, domotique et toute la partie administrative que la plupart des électriciens laissent de côté — du contrôle de conformité AREI/RGIE au plan électrique complet pour votre rénovation ou nouvelle construction.",
        'hero.cta.quote': 'Demander un devis',
        'hero.cta.call': 'Appeler le +32 471 49 50 13',

        // ----- Services -----
        'services.heading': 'Mes services',
        'services.residential.title': 'Installations électriques résidentielles',
        'services.residential.body':
            'Câblage, dépannages, mise à niveau du tableau électrique, prises et éclairage. Travail soigné, finitions propres, expliqué simplement.',
        'services.smart.title': 'Domotique',
        'services.smart.body':
            "Éclairage intelligent, gestion du chauffage, sécurité connectée et intégration des assistants vocaux. Pensé autour de votre mode de vie — pas d'un catalogue.",
        'services.planning.title': 'Plans & études électriques',
        'services.planning.body':
            "Plans électriques complets pour rénovations et nouvelles constructions, conformes aux normes belges. Je gère les détails techniques pour que votre architecte, votre entrepreneur et l'organisme de contrôle restent alignés.",
        'services.conformity.title': 'Mise en conformité (AREI / RGIE)',
        'services.conformity.body':
            "Préparation et suivi du contrôle avant vente ou périodique. Je relève les non-conformités, j'établis le schéma unifilaire, j'exécute les travaux et j'organise le passage de l'organisme agréé. Un seul interlocuteur, du rapport au certificat.",

        // ----- About -----
        'about.heading': 'À propos d’Adrian',
        'about.p1':
            "Cela fait dix ans que je travaille sur des installations électriques résidentielles à Bruxelles et dans les communes alentour — du recâblage d'une pièce au projet domotique complet. Ce qui distingue mon travail, c'est l'amont : avant qu'un seul câble ne soit tiré, je m'assure que votre installation est conçue pour répondre aux normes AREI/RGIE dès le départ. Moins de surprises. Moins de retouches. Un contrôle de conformité passé sans accroc.",
        'about.p2':
            "Je travaille directement avec les propriétaires, les architectes et les entrepreneurs. Si vous cherchez un électricien qui anticipe et qui laisse les papiers en ordre, nous travaillerons bien ensemble.",

        // ----- Gallery -----
        'gallery.heading': 'Réalisations récentes',
        'gallery.subtitle':
            "Un aperçu d'installations réelles — tableaux électriques, éclairage et domotique à Bruxelles.",
        'gallery.project5.alt':
            'Tableau électrique sur mesure avec système domotique Qbus complet',
        'gallery.project5.caption': 'Domotique Qbus — tableau électrique sur mesure',
        'gallery.project6.alt':
            'Grand tableau électrique avec contrôleur de parlophone Niko intégré',
        'gallery.project6.caption': 'Tableau complet avec parlophone Niko',
        'gallery.project2.alt': 'Tableau électrique résidentiel proprement étiqueté',
        'gallery.project2.caption': 'Tableau résidentiel — étiqueté circuit par circuit',
        'gallery.project3.alt': 'Éclairage LED indirect installé dans un plafond de cuisine moderne',
        'gallery.project3.caption': 'Éclairage LED indirect — ambiance cuisine',
        'gallery.project7.alt': 'Luminaire extérieur sur mesure, installation résidentielle à Bruxelles',
        'gallery.project7.caption': 'Éclairage extérieur — façade résidentielle',
        'gallery.project4.alt': 'Chauffage par le sol électrique pendant la coulée de la chape',
        'gallery.project4.caption': 'Chauffage électrique — pose pendant la chape',
        'gallery.project1.alt': 'Formation certifiée installateur Qbus',
        'gallery.project1.caption': 'Formation certifiée installateur Qbus',

        // ----- Testimonials -----
        'testimonials.heading': 'Ce que disent mes clients',
        'testimonials.rating': '5,0 sur Google · 5 avis',
        'testimonials.quote1':
            'Adrian est réactif, disponible, professionnel et et donne de très bon conseils. Je recommande vivement ses services !',
        'testimonials.cite1': '— Diane C., avis Google',
        'testimonials.quote2':
            'Great experience, work done swiftly and professionally. Recommended!',
        'testimonials.cite2': '— S. S., Local Guide, avis Google',
        'testimonials.all': 'Voir tous les avis sur Google →',
        'testimonials.cta.heading': 'Vous avez fait appel à AdriTech ?',
        'testimonials.cta.text':
            'Votre avis aide le prochain propriétaire à choisir. Cela prend une minute.',
        'testimonials.cta.button': 'Laisser un avis Google',
        'testimonials.cta.qr': 'Code QR pour laisser un avis Google sur AdriTech',
        // ----- Contact -----
        'contact.heading': 'Démarrons votre projet',
        'contact.intro':
            "Parlez-moi de votre projet — nouvelle installation, mise à niveau domotique, contrôle de conformité, ou simple question. Je lis chaque message et je réponds dans les 24 heures.",
        'contact.form.name': 'Nom',
        'contact.form.email': 'E-mail',
        'contact.form.phone': 'Téléphone (optionnel)',
        'contact.form.projectType': 'Type de projet',
        'contact.form.projectType.placeholder': 'Choisir…',
        'contact.form.projectType.residential': 'Installation / câblage résidentiel',
        'contact.form.projectType.smart': 'Domotique',
        'contact.form.projectType.planning': 'Plans & études électriques',
        'contact.form.projectType.conformity': 'Contrôle de conformité (AREI/RGIE)',
        'contact.form.projectType.other': 'Autre',
        'contact.form.message': 'Comment puis-je vous aider ?',
        'contact.form.submit': 'Envoyer le message',
        'contact.form.honeypot.aria': 'Laisser ce champ vide',
        'contact.alt.prefix': 'Vous préférez appeler ?',

        // ----- Footer -----
        'footer.copyright':
            '© 2026 AdriTech — Adrian Tudovan · Électricien indépendant, Bruxelles',
        'footer.facebook.aria': 'AdriTech sur Facebook',
        'footer.instagram.aria': 'AdriTech sur Instagram',
        'footer.review.text': 'Laisser un avis Google',
        'footer.review.aria': 'Laisser un avis Google pour AdriTech',
    },

    // ----- Dutch (placeholders — to translate next step) -----
    
    nl: {
        // ----- Header / nav -----
        'nav.services': 'Diensten',
        'nav.about': 'Over mij',
        'nav.gallery': 'Realisaties',
        'nav.testimonials': 'Reviews',
        'nav.contact': 'Contact',
        'nav.openMenu': 'Menu openen',
        'nav.language': 'Taal',

        // ----- Hero -----
        'hero.title.line1': 'Zelfstandig elektricien in Brussel',
        'hero.title.line2': '— AREI-conformiteit van A tot Z',
        'hero.tagline':
            'Residentiële bekabeling, domotica en het administratieve werk dat de meeste elektriciens overslaan — van AREI/RGIE-keuringen tot volledige elektrische plannen voor uw renovatie of nieuwbouw.',
        'hero.cta.quote': 'Offerte aanvragen',
        'hero.cta.call': 'Bel +32 471 49 50 13',

        // ----- Services -----
        'services.heading': 'Wat ik doe',
        'services.residential.title': 'Residentieel elektriciteitswerk',
        'services.residential.body':
            'Bekabeling, herstellingen, vernieuwing van het elektrisch bord, stopcontacten en verlichting. Net werk, netjes afgewerkt, helder uitgelegd.',
        'services.smart.title': 'Domotica',
        'services.smart.body':
            'Slimme verlichting, verwarmingssturing, geconnecteerde beveiliging en integratie met spraakassistenten. Ontworpen rond hoe u écht woont — niet rond een catalogus.',
        'services.planning.title': 'Elektrische plannen & studies',
        'services.planning.body':
            'Volledige elektrische plannen voor renovaties en nieuwbouw, conform de Belgische normen. Ik regel de technische details zodat uw architect, aannemer en keuringsorganisme op één lijn blijven.',
        'services.conformity.title': 'AREI / RGIE-conformiteit',
        'services.conformity.body':
            'Voorbereiding en opvolging van de keuring vóór verkoop of de periodieke controle. Ik breng de inbreuken in kaart, maak het eendraadschema, voer de werken uit en regel het bezoek van het erkende keuringsorganisme. Eén aanspreekpunt, van verslag tot attest.',

        // ----- About -----
        'about.heading': 'Over Adrian',
        'about.p1':
            'Al tien jaar werk ik aan residentiële elektrische installaties in Brussel en de omliggende gemeenten — van een herbekabeling van één kamer tot volledige domoticaprojecten. Wat mijn werk onderscheidt is de planningskant: nog vóór er één kabel ligt, zorg ik ervoor dat uw installatie van bij het begin voldoet aan de AREI/RGIE-normen. Minder verrassingen. Minder herstelwerk. Een keuring die meteen lukt.',
        'about.p2':
             'Ik werk rechtstreeks samen met eigenaars, architecten en aannemers. Bent u op zoek naar een elektricien die drie stappen vooruit denkt en het papierwerk netjes in orde houdt, dan werken we goed samen.',

        // ----- Gallery -----
        'gallery.heading': 'Recente realisaties',
        'gallery.subtitle':
            'Een blik op echte installaties — borden, verlichting en domotica in Brussel.',
        'gallery.project5.alt':
            'Elektrisch bord op maat met volledig Qbus-domoticasysteem',
        'gallery.project5.caption': 'Qbus-domotica — elektrisch bord op maat',
        'gallery.project6.alt':
            'Groot elektrisch bord met geïntegreerde Niko-parlofoonsturing',
        'gallery.project6.caption': 'Volledig bord met Niko-parlofoon',
        'gallery.project2.alt': 'Netjes geëtiketteerd residentieel elektrisch bord',
        'gallery.project2.caption': 'Residentieel bord — geëtiketteerd per kring',
        'gallery.project3.alt': 'Indirecte LED-verlichting in een modern keukenplafond',
        'gallery.project3.caption': 'Indirecte LED-verlichting — sfeer in de keuken',
        'gallery.project7.alt': 'Buitenverlichting op maat, residentiële installatie in Brussel',
        'gallery.project7.caption': 'Buitenverlichting — gevel residentieel',
        'gallery.project4.alt': 'Elektrische vloerverwarming tijdens het gieten van de chape',
        'gallery.project4.caption': 'Elektrische vloerverwarming — installatie tijdens chape',
        'gallery.project1.alt': 'Gecertificeerde Qbus-installateursopleiding',
        'gallery.project1.caption': 'Gecertificeerde Qbus-installateursopleiding',

        // ----- Testimonials -----
        'testimonials.heading': 'Wat klanten zeggen',
        'testimonials.rating': '5,0 op Google · 5 reviews',
        'testimonials.quote1':
            'Adrian est réactif, disponible, professionnel et et donne de très bon conseils. Je recommande vivement ses services !',
        'testimonials.cite1': '— Diane C., avis Google',
        'testimonials.quote2':
            'Great experience, work done swiftly and professionally. Recommended!',
        'testimonials.cite2': '— S. S., Local Guide, Google-review',
        'testimonials.all': 'Bekijk alle reviews op Google →',
        'testimonials.cta.heading': 'Werkte u met AdriTech?',
        'testimonials.cta.text':
            'Uw review helpt de volgende eigenaar kiezen. Het duurt één minuut.',
        'testimonials.cta.button': 'Een Google-review achterlaten',
        'testimonials.cta.qr': 'QR-code om een Google-review voor AdriTech achter te laten',
        // ----- Contact -----
        'contact.heading': 'Start uw project',
        'contact.intro':
            'Vertel me waar u mee zit — een nieuwe installatie, een domotica-uitbreiding, een keuring of gewoon een vraag. Ik lees elk bericht en antwoord binnen 24 uur.',
        'contact.form.name': 'Naam',
        'contact.form.email': 'E-mail',
        'contact.form.phone': 'Telefoon (optioneel)',
        'contact.form.projectType': 'Type project',
        'contact.form.projectType.placeholder': 'Maak een keuze…',
        'contact.form.projectType.residential': 'Residentiële installatie / bekabeling',
        'contact.form.projectType.smart': 'Domotica',
        'contact.form.projectType.planning': 'Elektrische plannen & studies',
        'contact.form.projectType.conformity': 'Conformiteitscontrole (AREI/RGIE)',
        'contact.form.projectType.other': 'Iets anders',
        'contact.form.message': 'Hoe kan ik u helpen?',
        'contact.form.submit': 'Bericht versturen',
        'contact.form.honeypot.aria': 'Laat dit veld leeg',
        'contact.alt.prefix': 'Liever bellen?',

        // ----- Footer -----
        'footer.copyright':
            '© 2026 AdriTech — Adrian Tudovan · Zelfstandig elektricien, Brussel',
        'footer.facebook.aria': 'AdriTech op Facebook',
        'footer.instagram.aria': 'AdriTech op Instagram',
        'footer.review.text': 'Een Google-review achterlaten',
        'footer.review.aria': 'Een Google-review voor AdriTech achterlaten',
    },
} as const;

// Type that represents any valid translation key (everything in `en`).
// Forces fr/nl to use the same keys when we add them.
export type UIKey = keyof (typeof ui)['en'];