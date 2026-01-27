import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
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
  const { t } = useTranslation();

  const services = [
    {
      id: "conseil-fiscal",
      titleKey: "services.tax.title",
      icon: Calculator,
      descKey: "services.tax.desc",
      details: "Actualité fiscale, appui-conseil TPS et régime réel, gestion des crédits MP, assistance lors des contrôles fiscaux.",
      color: "bg-gradient-primary"
    },
    {
      id: "conseil-juridique",
      titleKey: "services.legal.title",
      icon: Scale,
      descKey: "services.legal.desc",
      details: "Audit juridique, formalités de création de société, rédaction de contrats, consultations juridiques et sociales.",
      color: "bg-gradient-secondary"
    },
    {
      id: "assistance-comptable",
      titleKey: "services.accounting.title",
      icon: FileText,
      descKey: "services.accounting.desc",
      details: "Mise en place des livres comptables, gestion quotidienne, progiciels de comptabilité, états financiers.",
      color: "bg-gradient-accent"
    },
    {
      id: "management",
      titleKey: "services.management.title",
      icon: TrendingUp,
      descKey: "services.management.desc",
      details: "Assistance en GRH, formation et recrutement du personnel, accompagnement des futurs créateurs d'entreprise.",
      color: "bg-gradient-primary"
    },
    {
      id: "securisation-fonciere",
      titleKey: "services.security.title",
      icon: ShieldCheck,
      descKey: "services.security.desc",
      details: "Enquête et vérifications, formalités administratives et foncières pour acquisition, obtention des actes de présomption foncière, obtention des TF.",
      color: "bg-gradient-secondary"
    },
    {
      id: "gestion-projets",
      titleKey: "services.projects.title",
      icon: FolderOpen,
      descKey: "services.projects.desc",
      details: "Rédaction de Business Plans, suivi de projets de développement, études, conception, suivi et évaluation de projets.",
      color: "bg-gradient-accent"
    },
    {
      id: "etude-dossier",
      titleKey: "services.study.title",
      icon: FileText,
      descKey: "services.study.desc",
      details: "Étude de dossiers, suivi et évaluation de projets, analyse documentaire et accompagnement personnalisé.",
      color: "bg-gradient-primary"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('services.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            {t('services.hero.subtitle')}
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
                      {t(service.titleKey)}
                    </CardTitle>
                    <CardDescription className="text-white/90">
                      {t(service.descKey)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full group bg-gradient-secondary hover:shadow-glow">
                        {t('services.learnMore')}
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
            {t('services.readyTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('services.readySubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant">
                {t('services.cta.primary')}
              </Button>
            </Link>
            <a href="/docs/brochure.pdf" download>
              <Button size="lg" variant="outline" className="hover-lift">
                {t('services.cta.brochure')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;