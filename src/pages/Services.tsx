import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { brochure } from "@/assets/docs/brochure.docx";
import { 
  Calculator, 
  Scale, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  FolderOpen,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "conseil-fiscal",
      title: "Conseil Fiscal",
      icon: Calculator,
      description: "Expertise complète en fiscalité d'entreprise et optimisation fiscale.",
      details: "Actualité fiscale, appui-conseil TPS et régime réel, gestion des crédits MP, assistance lors des contrôles fiscaux.",
      color: "bg-gradient-primary"
    },
    {
      id: "conseil-juridique",
      title: "Conseil Juridique",
      icon: Scale,
      description: "Accompagnement juridique complet pour sécuriser vos activités.",
      details: "Audit juridique, formalités de création de société, rédaction de contrats, consultations juridiques et sociales.",
      color: "bg-gradient-secondary"
    },
    {
      id: "assistance-comptable",
      title: "Assistance Comptable",
      icon: FileText,
      description: "Solutions comptables adaptées à votre entreprise.",
      details: "Mise en place des livres comptables, gestion quotidienne, progiciels de comptabilité, états financiers.",
      color: "bg-gradient-accent"
    },
    {
      id: "management",
      title: "Management d'Entreprise",
      icon: TrendingUp,
      description: "Optimisation et développement de votre structure d'entreprise.",
      details: "Assistance en GRH, formation et recrutement du personnel, accompagnement des futurs créateurs d'entreprise.",
      color: "bg-gradient-primary"
    },
    {
      id: "securisation-fonciere",
      title: "Sécurisation Foncière",
      icon: ShieldCheck,
      description: "Sécurisation complète de vos biens fonciers et immobiliers.",
      details: "Enquête et vérifications, formalités administratives et foncières pour acquisition, obtention des actes de présomption foncière, obtention des TF.",
      color: "bg-gradient-secondary"
    },
    {
      id: "gestion-projets",
      title: "Gestion des Projets",
      icon: FolderOpen,
      description: "Accompagnement complet dans la réalisation de vos projets.",
      details: "Rédaction de Business Plans, suivi de projets de développement, études, conception, suivi et évaluation de projets.",
      color: "bg-gradient-accent"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nos Services Professionnels
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Une expertise complète au service de votre développement
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="hover-lift shadow-card border-0 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className={`${service.color} text-white p-6`}>
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8" />
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mt-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-white/90">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full group bg-gradient-secondary hover:shadow-glow">
                        En Savoir Plus
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Développer Votre Entreprise ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour une consultation personnalisée et découvrez 
            comment nos services peuvent transformer votre activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant">
                Consultation Gratuite
              </Button>
            </Link>
              <Button size="lg" variant="outline" className="hover-lift">
                Télécharger Notre Brochure
              </Button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;