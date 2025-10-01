import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Calculator, 
  Scale, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  FolderOpen,
  ArrowRight,
  Star,
  Award,
  Users,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";
import heroImage from "@/assets/team-workstation.jpeg";
import teamPhoto from "@/assets/team-photo.jpeg";

const Index = () => {
  const { t } = useTranslation();
  const services = [
    {
      id: "conseil-fiscal",
      title: t('services.tax'),
      icon: Calculator,
      description: t('services.tax.desc'),
      color: "bg-gradient-primary"
    },
    {
      id: "conseil-juridique", 
      title: t('services.tax'),
      icon: Scale,
      description: t('services.tax.desc'),
      color: "bg-gradient-secondary"
    },
    {
      id: "assistance-comptable",
      title: t('services.accounting'), 
      icon: FileText,
      description: t('services.accounting.desc'),
      color: "bg-gradient-accent"
    },
    {
      id: "management",
      title: t('services.management'),
      icon: TrendingUp, 
      description: t('services.management.desc'),
      color: "bg-gradient-primary"
    },
    {
      id: "securisation-fonciere",
      title: t('services.security'),
      icon: ShieldCheck,
      description: t('services.security.desc'),
      color: "bg-gradient-secondary"
    },
    {
      id: "gestion-projets",
      title: t('services.projects'), 
      icon: FolderOpen,
      description: t('services.projects.desc'),
      color: "bg-gradient-accent"
    }
  ];

  const partners = [
    "Ordre des Experts Comptables",
    "Ordre des Notaires", 
    "Ordre des Avocats",
    "Ordre des Huissiers",
    "Fédération Nationale des Fiscalistes",
    "Ordre des Experts Géomètres",
    "Ordre des Architectes et urbaniste"
  ];

  const featuredClients = [
    { name: "Ste Wissam", category: "Services" },
    { name: "Ste Outils Pro Bénin", category: "Commerce" },
    { name: "LEADD", category: "Développement" }
  ];

  const stats = [
    { number: "50+", label: "Clients Accompagnés", icon: Users },
    { number: "10+", label: "Années d'Expérience", icon: Award },
    { number: "100+", label: "Projets Réalisés", icon: TrendingUp },
    { number: "95%", label: "Satisfaction Client", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="NDC CONSEILS - Bureau d'études professionnel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-primary-foreground">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-gradient-accent text-accent-foreground text-lg px-4 py-2 animate-fade-in">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {t('hero.company')}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 animate-slide-up">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 italic text-accent animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {t('hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Link to="/services">
                <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
                  {t('hero.cta1')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-4"
                >
                  {t('hero.cta2')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="hover-lift shadow-card border-0 overflow-hidden animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className={`${service.color} text-white p-6`}>
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8" />
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mt-4">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
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
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant">
                Découvrir Tous Nos Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des partenaires de confiance qui nous font honneur
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredClients.map((client, index) => (
              <Card 
                key={index}
                className="text-center hover-lift shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                  <Badge variant="outline">{client.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/clients">
              <Button size="lg" variant="outline" className="hover-lift">
                Voir Tous Nos Clients
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Partenaires Institutionnels</h2>
            <p className="text-xl text-muted-foreground">
              Des collaborations avec les ordres professionnels du Bénin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover-lift shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary">{partner}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Pourquoi Choisir NDC CONSEILS ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                NDC CONSEILS est votre partenaire de confiance pour l'expertise comptable, 
                fiscale, juridique et le management d'entreprise au Bénin. Notre mission 
                est d'être les professionnels les plus sûrs de notre domaine.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Expertise Reconnue</h4>
                    <p className="text-muted-foreground">Plus de 10 ans d'expérience dans le conseil aux entreprises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Équipe Multidisciplinaire</h4>
                    <p className="text-muted-foreground">Des experts en droit, fiscalité, comptabilité et management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Accompagnement Personnalisé</h4>
                    <p className="text-muted-foreground">Solutions adaptées à vos besoins spécifiques</p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button size="lg" className="bg-gradient-accent hover:shadow-glow">
                  En Savoir Plus Sur Nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Équipe NDC CONSEILS" 
                className="rounded-2xl shadow-elegant w-full hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-secondary p-6 rounded-xl shadow-glow">
                <Award className="h-10 w-10 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Faire Évoluer Votre Entreprise ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contactez nos experts dès aujourd'hui pour une consultation gratuite 
            et découvrez comment nous pouvons vous accompagner vers le succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90 hover-lift">
                <Mail className="mr-2 h-5 w-5" />
                Demander une Consultation
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open(`https://wa.me/22997260188`, '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Appeler Maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;