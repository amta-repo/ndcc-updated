import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.services'), href: "/services" },
    { label: t('nav.about'), href: "/about" },
    { label: t('nav.gallery'), href: "/gallery" },
    { label: t('nav.news'), href: "/news" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  const services = [
    { label: t('services.tax.title'), href: "/services/conseil-fiscal" },
    { label: t('services.legal.title'), href: "/services/conseil-juridique" },
    { label: t('services.accounting.title'), href: "/services/assistance-comptable" },
    { label: t('services.management.title'), href: "/services/management" },
    { label: t('services.security.title'), href: "/services/securisation-fonciere" },
    { label: t('services.projects.title'), href: "/services/gestion-projets" },
    { label: t('services.study.title'), href: "/services/etude-dossier" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent flex items-center justify-center">
                  <img src={logo} alt="NDC CONSEILS LOGO" />
              </div>
              <div>
                {/* <h3 className="text-lg font-bold">NDC CONSEILS</h3> */}
                <p className="text-sm text-primary-foreground/80">Bureau d'Études</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre partenaire de confiance pour les mission d'appui conseil, 
              d'audit-fiscale, juridique et comptable.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/New-Deal-Consulting-Conseils/100054363888577/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <FaFacebookF className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/company/ndcconseils" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <FaLinkedinIn className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/ndcconseils" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <FaTwitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/ndcconseils" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <FaInstagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">
                    Lot 38S "A" Sèmè<br />
                    Abomey-Calavi, Bénin
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80">+229 97 70 60 69</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80">ndcconseils.contact@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} NDC CONSEILS. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;