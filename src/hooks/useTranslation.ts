import { useState, createContext, useContext } from 'react';

type Language = 'FR' | 'EN';

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

export const TranslationContext = createContext<TranslationContextType | null>(null);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const translations: Record<Language, Record<string, any>> = {
  FR: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.gallery': 'Galerie',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'nav.consultation': 'Consultation Gratuite',

    // Hero
    'hero.badge': "Bureau d'Études Professionnel",
    'hero.company': 'NDC CONSEILS',
    'hero.title': "Votre Partenaire de Confiance pour l'Excellence en Affaires",
    'hero.subtitle': "Cabinet de conseil spécialisé en gestion d'entreprise, conseil fiscal et juridique, assistance comptable et gestion de projets au Bénin.",
    'hero.tagline': '"Être de loin, les professionnels les plus sûrs"',
    'hero.cta1': 'Nos Services',
    'hero.cta2': 'Nous Contacter',

    // Services (hero & CTA)
    'services.title': "Nos Domaines d'Expertise",
    'services.subtitle': 'Des solutions professionnelles adaptées à vos besoins',
    'services.hero.title': 'Nos Services Professionnels',
    'services.hero.subtitle': 'Une expertise complète au service de votre développement',
    'services.cta.primary': 'Consultation Gratuite',
    'services.cta.brochure': 'Télécharger Notre Brochure',
    'services.learnMore': 'En Savoir Plus',
    'services.discoverAll': 'Découvrir Tous Nos Services',
    'services.readyTitle': 'Prêt à Développer Votre Entreprise ?',
    'services.readySubtitle': 'Contactez nos experts pour une consultation personnalisée et découvrez comment nos services peuvent transformer votre activité.',

    // Service Items
    'services.tax.title': 'Conseil Fiscal',
    'services.tax.desc': 'Optimisation fiscale, déclarations et accompagnement lors des contrôles fiscaux.',
    'services.legal.title': 'Conseil Juridique',
    'services.legal.desc': 'Rédaction de contrats, conseils en droit des affaires et accompagnement juridique.',
    'services.accounting.title': 'Assistance Comptable',
    'services.accounting.desc': 'Tenue comptable, états financiers et conseil en gestion financière.',
    'services.management.title': 'Management d\'Entreprise',
    'services.management.desc': 'Stratégie d\'entreprise, organisation et accompagnement au développement.',
    'services.security.title': 'Sécurisation Foncière',
    'services.security.desc': 'Accompagnement dans les procédures foncières et sécurisation de vos biens.',
    'services.projects.title': 'Gestion de Projets',
    'services.projects.desc': 'Pilotage de projets, études de faisabilité et suivi de réalisation.',
    'services.study.title': "Mission d'Étude de Dossier",
    'services.study.desc': "Analyse de dossiers, suivi et évaluation de projets avec expertise.",

    // Service Detail
    'service.overview': "Vue d'Ensemble",
    'service.includes': 'Nos Services Inclus',
    'service.process.title': 'Notre Processus',
    'service.benefits.title': 'Avantages Clés',
    'service.interested': 'Intéressé par ce service ?',
    'service.contact.prompt': 'Contactez nos experts pour une consultation personnalisée et un devis gratuit.',
    'service.contact.call': 'Appeler Maintenant',
    'service.contact.request': 'Demander un Devis',

    // Stats
    'stats.clients': 'Clients Accompagnés',
    'stats.years': "Années d'Expérience",
    'stats.projects': 'Projets Réalisés',
    'stats.satisfaction': 'Satisfaction Client',

    // Clients Section
    'clients.title': 'Nos Clients',
    'clients.subtitle': 'Des partenaires de confiance qui nous font honneur',
    'clients.viewAll': 'Voir Tous Nos Clients',
    'clients.partners.title': 'Nos Partenaires Institutionnels',
    'clients.partners.subtitle': 'Des collaborations avec les ordres professionnels du Bénin',
    'clients.cta.join': 'Devenir Client',
    'clients.cta.discover': 'Découvrir Nos Services',

    // Why Choose Us
    'whyUs.title': 'Pourquoi Choisir NDC CONSEILS ?',
    'whyUs.description': "NDC CONSEILS est votre partenaire de confiance pour l'expertise comptable, fiscale, juridique et le management d'entreprise au Bénin. Notre mission est d'être les professionnels les plus sûrs de notre domaine.",
    'whyUs.expertise.title': 'Expertise Reconnue',
    'whyUs.expertise.desc': "Plus de 10 ans d'expérience dans le conseil aux entreprises",
    'whyUs.team.title': 'Équipe Multidisciplinaire',
    'whyUs.team.desc': 'Des experts en droit, fiscalité, comptabilité et management',
    'whyUs.support.title': 'Accompagnement Personnalisé',
    'whyUs.support.desc': 'Solutions adaptées à vos besoins spécifiques',
    'whyUs.learnMore': 'En Savoir Plus Sur Nous',

    // CTA
    'cta.title': 'Prêt à Faire Évoluer Votre Entreprise ?',
    'cta.subtitle': "Contactez nos experts dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous accompagner vers le succès.",
    'cta.consultation': 'Demander une Consultation',
    'cta.call': 'Appeler Maintenant',

    // About
    'about.title': 'À Propos de NDC CONSEILS',
    'about.tagline': '"Être de loin, les professionnels les plus sûrs"',
    'about.mission': 'Notre Mission',
    'about.mission.text': "Accompagner les entreprises dans leur développement en proposant des solutions sur mesure en matière de gestion, conseil fiscal et juridique.",
    'about.values.title': 'Nos Valeurs',
    'about.values.subtitle': 'Les principes qui guident notre approche et notre engagement envers nos clients',
    'about.leadership.title': "Profil du Directeur Exécutif",
    'about.join.title': 'Rejoignez Nos Clients Satisfaits',
    'about.join.subtitle': 'Faites confiance à notre expertise pour accompagner votre entreprise vers le succès et la croissance durable.',
    'about.join.cta': 'Demander une Consultation',

    // Values
    'values.excellence': 'Excellence',
    'values.excellence.desc': 'Nous visons l\'excellence dans tous nos services et conseils.',
    'values.partnership': 'Partenariat',
    'values.partnership.desc': 'Nous construisons des relations durables avec nos clients.',
    'values.results': 'Résultats',
    'values.results.desc': 'Nous nous concentrons sur des solutions concrètes et mesurables.',
    'values.trust': 'Confiance',
    'values.trust.desc': 'Nous sommes les professionnels les plus sûrs de notre domaine.',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.service': 'Service souhaité',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.header': 'Envoyez-nous un Message',
    'contact.toast.title': 'Message envoyé !',
    'contact.toast.description': 'Nous vous contacterons dans les plus brefs délais.',
    'contact.whatsapp.title': 'Contact WhatsApp',
    'contact.whatsapp.description': 'Pour une réponse rapide, contactez-nous directement sur WhatsApp',
    'contact.whatsapp.button': 'Ouvrir WhatsApp',
    'contact.map.title': 'Notre Localisation',
    'contact.map.subtitle': "Rendez-nous visite à nos bureaux à Abomey-Calavi",
    'contact.benefit.consultation': 'Consultation gratuite',
    'contact.benefit.reply': 'Réponse sous 24h',
    'contact.benefit.expertise': 'Expertise reconnue',
    'contact.benefit.custom': 'Solutions personnalisées',
    'contact.benefit.support': 'Accompagnement complet',

    // Gallery
    'gallery.title': 'Galerie Photos',
    'gallery.subtitle': 'Découvrez NDC CONSEILS en images : notre équipe, nos formations et nos événements',
    'gallery.categories.all': 'Tous',
    'gallery.categories.team': 'Équipe',
    'gallery.categories.trainings': 'Formations',
    'gallery.categories.events': 'Événements',
    'gallery.categories.office': 'Bureau',
    'gallery.stats.clients': 'Clients Accompagnés',
    'gallery.stats.trainings': 'Formations Dispensées',
    'gallery.stats.years': "Années d'Expérience",
    'gallery.stats.support': 'Support Client',
    'gallery.viewImage': 'Voir l\'image',

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés',
    'footer.quickLinks': 'Liens Rapides',
    'footer.ourServices': 'Nos Services',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': "Conditions d'Utilisation",

    // News
    'news.badge': 'Actualités',
    'news.title': 'Actualités',
    'news.subtitle': 'NDC Conseils Infos et Publications',
    'news.seeMore': 'Voir Plus',
    'news.close': 'Fermer',
    'news.cta.title': 'Besoin de Nos Services ?',
    'news.cta.subtitle': 'Contactez nos experts pour une consultation personnalisée et découvrez comment nous pouvons vous accompagner.',
    'nav.news': 'Actualités',
  },
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'nav.consultation': 'Free Consultation',

    // Hero
    'hero.badge': 'Professional Consulting Firm',
    'hero.company': 'NDC CONSEILS',
    'hero.title': 'Your Trusted Partner for Business Excellence',
    'hero.subtitle': 'Consulting firm specialized in business management, tax and legal advisory, accounting assistance and project management in Benin.',
    'hero.tagline': '"Being by far, the most reliable professionals"',
    'hero.cta1': 'Our Services',
    'hero.cta2': 'Contact Us',

    // Services (hero & CTA)
    'services.title': 'Our Areas of Expertise',
    'services.subtitle': 'Professional solutions tailored to your needs',
    'services.hero.title': 'Our Professional Services',
    'services.hero.subtitle': 'Comprehensive expertise to support your growth',
    'services.cta.primary': 'Free Consultation',
    'services.cta.brochure': 'Download Our Brochure',
    'services.learnMore': 'Learn More',
    'services.discoverAll': 'Discover All Our Services',
    'services.readyTitle': 'Ready to Grow Your Business?',
    'services.readySubtitle': 'Contact our experts for a personalized consultation and discover how our services can transform your business.',

    // Service Items
    'services.tax.title': 'Tax Advisory',
    'services.tax.desc': 'Tax optimization, declarations and support during tax audits.',
    'services.legal.title': 'Legal Advisory',
    'services.legal.desc': 'Contract drafting, business law advice and legal support.',
    'services.accounting.title': 'Accounting Assistance',
    'services.accounting.desc': 'Bookkeeping, financial statements and financial management advice.',
    'services.management.title': 'Business Management',
    'services.management.desc': 'Business strategy, organization and development support.',
    'services.security.title': 'Land Security',
    'services.security.desc': 'Support in land procedures and securing your assets.',
    'services.projects.title': 'Project Management',
    'services.projects.desc': 'Project management, feasibility studies and implementation monitoring.',
    'services.study.title': 'Case Study Mission',
    'services.study.desc': 'Case analysis, project monitoring and evaluation with expertise.',

    // Service Detail
    'service.overview': 'Overview',
    'service.includes': "What's included",
    'service.process.title': 'Our Process',
    'service.benefits.title': 'Key Benefits',
    'service.interested': 'Interested in this service?',
    'service.contact.prompt': 'Contact our experts for a personalized consultation and a free quote.',
    'service.contact.call': 'Call Now',
    'service.contact.request': 'Request a Quote',

    // Stats
    'stats.clients': 'Clients Supported',
    'stats.years': 'Years of Experience',
    'stats.projects': 'Projects Completed',
    'stats.satisfaction': 'Client Satisfaction',

    // Clients Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted partners who honor us',
    'clients.viewAll': 'View All Our Clients',
    'clients.partners.title': 'Our Institutional Partners',
    'clients.partners.subtitle': 'Collaborations with professional organizations in Benin',
    'clients.cta.join': 'Become a Client',
    'clients.cta.discover': 'Discover Our Services',

    // Why Choose Us
    'whyUs.title': 'Why Choose NDC CONSEILS?',
    'whyUs.description': 'NDC CONSEILS is your trusted partner for accounting, tax, legal and business management expertise in Benin. Our mission is to be the most reliable professionals in our field.',
    'whyUs.expertise.title': 'Recognized Expertise',
    'whyUs.expertise.desc': 'Over 10 years of experience in business consulting',
    'whyUs.team.title': 'Multidisciplinary Team',
    'whyUs.team.desc': 'Experts in law, taxation, accounting and management',
    'whyUs.support.title': 'Personalized Support',
    'whyUs.support.desc': 'Solutions tailored to your specific needs',
    'whyUs.learnMore': 'Learn More About Us',

    // CTA
    'cta.title': 'Ready to Grow Your Business?',
    'cta.subtitle': 'Contact our experts today for a free consultation and discover how we can support you towards success.',
    'cta.consultation': 'Request a Consultation',
    'cta.call': 'Call Now',

    // About
    'about.title': 'About NDC CONSEILS',
    'about.tagline': '"Being by far, the most reliable professionals"',
    'about.mission': 'Our Mission',
    'about.mission.text': 'Supporting businesses in their development by providing tailored solutions in management, tax and legal consulting.',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our approach and commitment to our clients',
    'about.leadership.title': "Executive Director's Profile",
    'about.join.title': 'Join Our Satisfied Clients',
    'about.join.subtitle': 'Trust our expertise to support your business towards success and sustainable growth.',
    'about.join.cta': 'Request a Consultation',

    // Values
    'values.excellence': 'Excellence',
    'values.excellence.desc': 'We strive for excellence in all our services and advice.',
    'values.partnership': 'Partnership',
    'values.partnership.desc': 'We build lasting relationships with our clients.',
    'values.results': 'Results',
    'values.results.desc': 'We focus on concrete and measurable solutions.',
    'values.trust': 'Trust',
    'values.trust.desc': 'We are the most reliable professionals in our field.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': "Let's discuss your project",
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Desired service',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.header': 'Send Us a Message',
    'contact.toast.title': 'Message sent!',
    'contact.toast.description': "We'll get back to you shortly.",
    'contact.whatsapp.title': 'WhatsApp Contact',
    'contact.whatsapp.description': 'For a quick response, contact us directly on WhatsApp',
    'contact.whatsapp.button': 'Open WhatsApp',
    'contact.map.title': 'Our Location',
    'contact.map.subtitle': 'Visit our office in Abomey-Calavi',
    'contact.benefit.consultation': 'Free consultation',
    'contact.benefit.reply': 'Reply within 24h',
    'contact.benefit.expertise': 'Recognized expertise',
    'contact.benefit.custom': 'Personalized solutions',
    'contact.benefit.support': 'Complete support',

    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'See NDC CONSEILS in images: our team, trainings and events',
    'gallery.categories.all': 'All',
    'gallery.categories.team': 'Team',
    'gallery.categories.trainings': 'Trainings',
    'gallery.categories.events': 'Events',
    'gallery.categories.office': 'Office',
    'gallery.stats.clients': 'Clients Supported',
    'gallery.stats.trainings': 'Trainings Delivered',
    'gallery.stats.years': 'Years of Experience',
    'gallery.stats.support': 'Client Support',
    'gallery.viewImage': 'View image',

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',

    // News
    'news.badge': 'News',
    'news.title': 'News',
    'news.subtitle': 'NDC Conseils News and Publications',
    'news.seeMore': 'See More',
    'news.close': 'Close',
    'news.cta.title': 'Need Our Services?',
    'news.cta.subtitle': 'Contact our experts for a personalized consultation and discover how we can support you.',
    'nav.news': 'News',
  }
};