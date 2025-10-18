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
    'hero.badge': "Bureau d'\u00c9tudes Professionnel",
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

    // About
    'about.title': 'À Propos de NDC CONSEILS',
    'about.tagline': '"Être de loin, les professionnels les plus sûrs"',
    'about.mission': 'Notre Mission',
    'about.mission.text': "Accompagner les entreprises dans leur développement en proposant des solutions sur mesure en matière de gestion, conseil fiscal et juridique.",
    'about.join.cta': 'Demander une Consultation',

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

    // Clients
    'clients.title': 'Nos Clients',
    'clients.subtitle': 'Des partenaires de confiance qui nous font honneur',
    'clients.partners.title': 'Nos Partenaires',
    'clients.partners.subtitle': 'Découvrez quelques-uns des clients qui nous font confiance',
    'clients.cta.join': 'Devenir Client',
    'clients.cta.discover': 'Découvrir Nos Services',

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

    // Hero
    'hero.badge': 'Professional Consulting Firm',
    'hero.company': 'NDC CONSEIL',
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

    // About
    'about.title': 'About NDC CONSEILS',
    'about.tagline': '"Being by far, the most reliable professionals"',
    'about.mission': 'Our Mission',
    'about.mission.text': 'Supporting businesses in their development by providing tailored solutions in management, tax and legal consulting.',
    'about.join.cta': 'Request a Consultation',

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

    // Clients
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted partners who honor us',
    'clients.partners.title': 'Our Partners',
    'clients.partners.subtitle': 'Discover some of the clients who trust us',
    'clients.cta.join': 'Become a Client',
    'clients.cta.discover': 'Discover Our Services',

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

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved',
  }
};