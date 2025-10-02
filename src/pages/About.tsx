import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart, CheckCircle } from "lucide-react";
import teamPhoto from "@/assets/Équipe  NDCC - Copy1.jpeg";
import ceoPhoto from "@/assets/CEO Mr Fiacre KEKE.jpeg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services et conseils."
    },
    {
      icon: Users,
      title: "Partenariat",
      description: "Nous construisons des relations durables avec nos clients."
    },
    {
      icon: Target,
      title: "Résultats",
      description: "Nous nous concentrons sur des solutions concrètes et mesurables."
    },
    {
      icon: Heart,
      title: "Confiance",
      description: "Nous sommes les professionnels les plus sûrs de notre domaine."
    }
  ];

  const achievements = [
    "Plus de 50 entreprises accompagnées",
    "10+ années d'expérience collective",
    "Équipe multidisciplinaire qualifiée",
    "Partenariats avec les ordres professionnels",
    "Couverture nationale au Bénin"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              À Propos de NDC CONSEILS
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              "Être de loin, les professionnels les plus sûrs"
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                NDC CONSEILS (New Deal Consulting Conseils) est un bureau d'études spécialisé 
                dans l'assistance comptable, le conseil fiscal et juridique, ainsi que le 
                management d'entreprise. Nous accompagnons les entreprises dans leur développement 
                et leur croissance au Bénin.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre rôle : "Vous offrir de meilleurs services au meilleur prix" en mettant 
                à votre disposition une expertise reconnue et des solutions adaptées à vos besoins.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Équipe NDC CONSEILS" 
                className="rounded-2xl shadow-elegant w-full hover-lift"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-accent p-4 rounded-xl shadow-glow">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre approche et notre engagement envers nos clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-6 hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Direction
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-elegant hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="relative inline-block">
                    <img 
                      src={ceoPhoto} 
                      alt="Mr. Fiacre KEKE - Directeur Executif/CEO NDC CONSEILS" 
                      className="w-64 h-80 object-cover rounded-2xl shadow-elegant mx-auto lg:mx-0"
                    />
                    <Badge className="absolute -top-2 -right-2 bg-gradient-accent text-accent-foreground">
                      CEO
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Mr. Fiacre KEKE</h3>
                  <p className="text-lg text-secondary font-semibold mb-4">
                    Directeur Executif/CEO
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Notre Expert Juriste-fiscaliste, Mr. Fiacre KEKE dirige NDC CONSEILS 
                    avec une vision claire : offrir des services de conseil de qualité supérieure 
                    aux entreprises béninoises. Fort de son expertise en droit des affaires et 
                    en fiscalité, il guide l'équipe vers l'excellence opérationnelle.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Droit des Affaires</Badge>
                    <Badge variant="secondary">Fiscalité</Badge>
                    <Badge variant="secondary">Management</Badge>
                    <Badge variant="secondary">Conseil Stratégique</Badge>
                  </div>
                </div>
              </div>
            </Card>
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
            Faites confiance à notre expertise pour accompagner votre entreprise 
            vers le succès et la croissance durable.
          </p>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="hover-lift bg-white text-secondary hover:bg-white/90">
              Demander une Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;