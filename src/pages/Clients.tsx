import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  GraduationCap, 
  Factory, 
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from "lucide-react";

const Clients = () => {
  const mainClients = [
    {
      name: "Ste Wissam",
      category: "Entreprise",
      icon: Building2,
      description: "Société de services et conseil",
      color: "bg-gradient-primary"
    },
    {
      name: "Ste Outils Pro Bénin",
      category: "Commerce",
      icon: Factory,
      description: "Distribution d'outils professionnels",
      color: "bg-gradient-secondary"
    },
    {
      name: "LEADD",
      category: "Développement",
      icon: TrendingUp,
      description: "Organisation de développement",
      color: "bg-gradient-accent"
    }
  ];

  const corporateClients = [
    { name: "WTHP", category: "Services" },
    { name: "Ivatis", category: "Technologie" },
    { name: "JKA Petroleum", category: "Énergie" },
    { name: "Sale Side", category: "Commerce" },
    { name: "BTS", category: "Services Techniques" },
    { name: "Bautec", category: "Construction" },
    { name: "Brotherhood Services", category: "Services" },
    { name: "Brotherhood Immo", category: "Immobilier" }
  ];

  const educationalClients = [
    { name: "KIAZ Afrika", category: "Formation Professionnelle" },
    { name: "Katoo", category: "Éducation" },
    { name: "CFFP Avé", category: "Centre de Formation" },
    { name: "CSP Ste Mireille", category: "Formation Spécialisée" },
    { name: "CSP les 3 clés", category: "Centre de Perfectionnement" }
  ];

  const otherClients = [
    { name: "Washman services", category: "Services de Nettoyage" },
    { name: "Complexe hôtelier Amazone Wis Art", category: "Hôtellerie" },
    { name: "SPS", category: "Services Professionnels" },
    { name: "La Dépanneuse shopping", category: "Commerce de Détail" },
    { name: "Fried Chicken", category: "Restauration" }
  ];

  const stats = [
    { number: "50+", label: "Clients Actifs", icon: Users },
    { number: "100+", label: "Projets Réalisés", icon: TrendingUp },
    { number: "95%", label: "Satisfaction Client", icon: Star },
    { number: "24/7", label: "Support Disponible", icon: Building2 }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nos Clients
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Des partenaires de confiance qui nous font honneur
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Clients Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Principaux Partenaires
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez quelques-uns des clients qui nous font confiance pour leur développement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainClients.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <Card 
                  key={index}
                  className="hover-lift shadow-elegant animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className={`${client.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {client.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{client.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {client.description}
                    </p>
                    <Button variant="outline" className="w-full group">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Clients Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          {/* Corporate Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Entreprises & Sociétés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corporateClients.map((client, index) => (
                <Card 
                  key={index}
                  className="text-center hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{client.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {client.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Educational Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Écoles & Centres de Formation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalClients.map((client, index) => (
                <Card 
                  key={index}
                  className="text-center hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{client.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {client.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Clients */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Autres Partenaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherClients.map((client, index) => (
                <Card 
                  key={index}
                  className="text-center hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Factory className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{client.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {client.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Faites partie des entreprises qui font confiance à NDC CONSEILS 
            pour leur croissance et leur succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90 hover-lift">
                Devenir Client
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Découvrir Nos Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
