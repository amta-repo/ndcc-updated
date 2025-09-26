import { useParams, Link, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  CheckCircle, 
  Phone, 
  Mail,
  Calculator,
  Scale,
  FileText,
  TrendingUp,
  ShieldCheck,
  FolderOpen
} from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    "conseil-fiscal": {
      title: "Conseil Fiscal",
      icon: Calculator,
      description: "Expertise complète en fiscalité d'entreprise et optimisation fiscale",
      color: "bg-gradient-primary",
      overview: "Notre service de conseil fiscal vous accompagne dans la gestion optimale de vos obligations fiscales. Nous vous aidons à naviguer dans la complexité de la législation fiscale béninoise tout en optimisant votre charge fiscale.",
      features: [
        "Actualité fiscale dans son ensemble",
        "Appui-conseil et assistance pour les entreprises du régime TPS",
        "Appui-conseil et assistance pour les entreprises du régime réel",
        "Appui-conseil et assistance pour la gestion des crédits MP",
        "Assistance lors des contrôles fiscaux",
        "Veille fiscale quotidienne",
        "Optimisation de la charge fiscale",
        "Déclarations fiscales et sociales"
      ],
      benefits: [
        "Réduction des risques fiscaux",
        "Optimisation légale de vos impôts",
        "Mise en conformité garantie",
        "Veille réglementaire continue",
        "Assistance en cas de contrôle"
      ],
      process: [
        "Audit fiscal initial de votre entreprise",
        "Identification des optimisations possibles",
        "Mise en place des procédures adaptées",
        "Suivi et accompagnement continu"
      ]
    },
    "conseil-juridique": {
      title: "Conseil Juridique",
      icon: Scale,
      description: "Accompagnement juridique complet pour sécuriser vos activités",
      color: "bg-gradient-secondary",
      overview: "Notre équipe d'experts juridiques vous accompagne dans tous les aspects légaux de votre activité, de la création d'entreprise à la gestion des contrats complexes.",
      features: [
        "Audit juridique complet",
        "Formalités de création de toutes sortes de société",
        "Mise en place des registres légaux",
        "Conseils d'administration et AG",
        "Registre des mouvements des titres",
        "Rédaction et enregistrement des contrats",
        "Consultations juridiques et sociales",
        "Droit du travail et relations sociales"
      ],
      benefits: [
        "Sécurisation juridique de vos activités",
        "Conformité aux réglementations",
        "Prévention des litiges",
        "Protection de vos intérêts",
        "Expertise reconnue"
      ],
      process: [
        "Analyse de vos besoins juridiques",
        "Audit de la situation existante",
        "Recommandations et mise en œuvre",
        "Suivi et mise à jour régulière"
      ]
    },
    "assistance-comptable": {
      title: "Assistance Comptable",
      icon: FileText,
      description: "Solutions comptables adaptées à votre entreprise",
      color: "bg-gradient-accent",
      overview: "Nous vous aidons dans la mise en place d'une comptabilité créative et efficace, adaptée à la taille et aux spécificités de votre entreprise.",
      features: [
        "Mise en place des livres légaux comptables",
        "Appui en gestion comptable quotidienne",
        "Installation et paramétrage de progiciel de comptabilité",
        "Gestion et suivi des stocks et marchandises",
        "Progiciel de gestion commerciale",
        "Facturation et gestion de stock",
        "Édition des états de synthèse",
        "Élaboration des états financiers"
      ],
      benefits: [
        "Comptabilité fiable et à jour",
        "Gain de temps considérable",
        "Outils informatiques adaptés",
        "Reporting financier régulier",
        "Aide à la prise de décision"
      ],
      process: [
        "Évaluation de vos besoins comptables",
        "Installation des outils appropriés",
        "Formation de vos équipes",
        "Accompagnement et support continu"
      ]
    },
    "management": {
      title: "Management d'Entreprise",
      icon: TrendingUp,
      description: "Optimisation et développement de votre structure d'entreprise",
      color: "bg-gradient-primary",
      overview: "Nous accompagnons les dirigeants dans l'optimisation de leurs structures et le développement de leurs équipes pour une croissance durable.",
      features: [
        "Assistance dans la GRH",
        "Formation et recrutement du personnel",
        "Formation des futurs créateurs d'entreprise",
        "Optimisation des processus internes",
        "Développement des compétences",
        "Audit organisationnel",
        "Restructuration d'entreprise",
        "Accompagnement au changement"
      ],
      benefits: [
        "Amélioration de la performance",
        "Optimisation des ressources humaines",
        "Développement des compétences",
        "Meilleure organisation",
        "Croissance durable"
      ],
      process: [
        "Diagnostic organisationnel",
        "Élaboration du plan d'action",
        "Mise en œuvre des recommandations",
        "Suivi des résultats et ajustements"
      ]
    },
    "securisation-fonciere": {
      title: "Sécurisation Foncière",
      icon: ShieldCheck,
      description: "Sécurisation complète de vos biens fonciers et immobiliers",
      color: "bg-gradient-secondary",
      overview: "Notre service de sécurisation foncière vous accompagne dans tous les aspects juridiques et administratifs de l'acquisition et la sécurisation de vos biens immobiliers.",
      features: [
        "Enquête et vérifications préalables",
        "Formalités administratives et foncières pour acquisition",
        "Obtention des actes de présomption foncière",
        "Obtention des Titres Fonciers (TF)",
        "Vérification de la propriété",
        "Négociation des contrats",
        "Suivi des procédures administratives",
        "Conseil en investissement immobilier"
      ],
      benefits: [
        "Sécurité juridique maximale",
        "Protection contre les litiges",
        "Investissement sécurisé",
        "Conformité légale garantie",
        "Accompagnement expert"
      ],
      process: [
        "Enquête préalable sur le bien",
        "Vérification des documents",
        "Accomplissement des formalités",
        "Obtention des titres définitifs"
      ]
    },
    "gestion-projets": {
      title: "Gestion des Projets",
      icon: FolderOpen,
      description: "Accompagnement complet dans la réalisation de vos projets",
      color: "bg-gradient-accent",
      overview: "Que vous soyez porteur d'idée, créateur ou promoteur d'un projet, notre équipe qualifiée met son expertise à votre service.",
      features: [
        "Rédaction des plans d'Affaires (Business Plan)",
        "Rédaction et suivi des projets de développement",
        "Études de faisabilité",
        "Conception de projets",
        "Suivi et évaluation de projets",
        "Recherche de financement",
        "Accompagnement des entrepreneurs",
        "Gestion des risques projets"
      ],
      benefits: [
        "Projets structurés et viables",
        "Augmentation des chances de succès",
        "Accompagnement professionnel",
        "Réduction des risques",
        "Optimisation des ressources"
      ],
      process: [
        "Analyse de votre idée/projet",
        "Élaboration du business plan",
        "Recherche de financements",
        "Accompagnement dans la mise en œuvre"
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen py-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <Link 
          to="/services" 
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`${service.color} text-primary-foreground py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconComponent className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <IconComponent className="h-6 w-6 mr-3 text-primary" />
                  Vue d'Ensemble
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.overview}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Nos Services Inclus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Notre Processus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Avantages Clés</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className={`${service.color} text-primary-foreground shadow-elegant`}>
              <CardHeader>
                <CardTitle className="text-white">Intéressé par ce service ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-6">
                  Contactez nos experts pour une consultation personnalisée et un devis gratuit.
                </p>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                    onClick={() => window.open(`https://wa.me/22997260188?text=Bonjour, je suis intéressé par votre service: ${service.title}`, '_blank')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler Maintenant
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary">
                      <Mail className="h-4 w-4 mr-2" />
                      Demander un Devis
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Services Complémentaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(services)
                    .filter(([id]) => id !== serviceId)
                    .slice(0, 3)
                    .map(([id, relatedService]) => (
                      <Link 
                        key={id}
                        to={`/services/${id}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <relatedService.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">{relatedService.title}</span>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;