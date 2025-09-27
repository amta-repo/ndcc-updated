import { useState, createContext, useContext } from 'react';

type Language = 'FR' | 'EN';

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const TranslationContext = createContext<TranslationContextType | null>(null);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const translations = {
  FR: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.gallery': 'Galerie',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'nav.consultation': 'Consultation Gratuite',
    
    // Hero Section
    'hero.badge': 'Bureau d\'Études Professionnel',
    'hero.company': 'NDC CONSEILS',
    'hero.title': 'Votre Partenaire de Confiance pour l\'Excellence en Affaires',
    'hero.subtitle': 'Cabinet de conseil spécialisé en gestion d\'entreprise, conseil fiscal et juridique, assistance comptable et gestion de projets au Bénin.',
    'hero.tagline': '"Être de loin, les professionnels les plus sûrs"',
    'hero.cta1': 'Nos Services',
    'hero.cta2': 'Nous Contacter',
    
    // Services
    'services.title': 'Nos Domaines d\'Expertise',
    'services.subtitle': 'Des solutions professionnelles adaptées à vos besoins',
    'services.accounting': 'Assistance Comptable',
    'services.accounting.desc': 'Mise en place comptabilité, progiciels spécialisés, gestion stocks, états financiers et synthèse',
    'services.tax': 'Conseil Fiscal & Juridique',
    'services.tax.desc': 'Expertise complète en fiscalité d\'entreprise, audit juridique, création de sociétés, rédaction de contrats',
    'services.management': 'Management d\'Entreprise',
    'services.management.desc': 'Assistance GRH, formation et recrutement personnel, accompagnement créateurs d\'entreprise',
    'services.projects': 'Gestion de Projets',
    'services.projects.desc': 'Rédaction Business Plans, suivi projets de développement, études, conception, suivi et évaluation',
    'services.security': 'Sécurisation Foncière',
    'services.security.desc': 'Enquête et vérifications, formalités administratives et foncières pour acquisition, obtention des actes de présomption foncière, obtention des TF',
    'services.recruitment': 'Recrutement',
    'services.recruitment.desc': 'Sourcing de talents, processus de sélection, accompagnement RH et intégration',
    
    // About
    'about.title': 'À Propos de NDC CONSEILS',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Accompagner les entreprises dans leur développement en proposant des solutions sur mesure en matière de gestion, conseil fiscal et juridique.',
    'about.team': 'Notre Équipe',
    'about.ceo': 'Directeur Général',
    
    // Clients
    'clients.title': 'Nos Clients',
    'clients.subtitle': 'Ils nous font confiance',
    'clients.view.all': 'Voir Tous Nos Clients',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.service': 'Service souhaité',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Appeler',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés',
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
    
    // Hero Section
    'hero.badge': 'Professional Consulting Firm',
    'hero.company': 'NDC CONSEIL',
    'hero.title': 'Your Trusted Partner for Business Excellence',
    'hero.subtitle': 'Consulting firm specialized in business management, tax and legal advisory, accounting assistance and project management in Benin.',
    'hero.tagline': '"Being by far, the most reliable professionals"',
    'hero.cta1': 'Our Services',
    'hero.cta2': 'Contact Us',
    
    // Services
    'services.title': 'Our Areas of Expertise',
    'services.subtitle': 'Professional solutions tailored to your needs',
    'services.accounting': 'Accounting Assistance',
    'services.accounting.desc': 'Accounting setup, specialized software, inventory management, financial statements and synthesis',
    'services.tax': 'Tax & Legal Advisory',
    'services.tax.desc': 'Complete expertise in corporate taxation, legal audit, company creation, contract drafting',
    'services.management': 'Business Management',
    'services.management.desc': 'HR assistance, training and staff recruitment, support for business creators',
    'services.projects': 'Project Management',
    'services.projects.desc': 'Business plan writing, development project monitoring, studies, design, monitoring and evaluation',
    'services.security': 'Land Security',
    'services.security.desc': 'Surveys and verifications, administrative and land formalities for acquisition, obtaining land presumption acts, obtaining TF',
    'services.recruitment': 'Recruitment',
    'services.recruitment.desc': 'Talent sourcing, selection process, HR support and integration',
    
    // About
    'about.title': 'About NDC CONSEILS',
    'about.mission': 'Our Mission',
    'about.mission.text': 'Supporting businesses in their development by providing tailored solutions in management, tax and legal consulting.',
    'about.team': 'Our Team',
    'about.ceo': 'Chief Executive Officer',
    
    // Clients
    'clients.title': 'Our Clients',
    'clients.subtitle': 'They trust us',
    'clients.view.all': 'View All Our Clients',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s discuss your project',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Desired service',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Call',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved',
  }
};