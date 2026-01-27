import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import teamPhoto from "@/assets/Équipe  NDCC - Copy1.jpeg";
import ceoPhoto from "@/assets/ceo-photo.jpeg";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      titleKey: 'values.excellence',
      descKey: 'values.excellence.desc'
    },
    {
      icon: Users,
      titleKey: 'values.partnership',
      descKey: 'values.partnership.desc'
    },
    {
      icon: Target,
      titleKey: 'values.results',
      descKey: 'values.results.desc'
    },
    {
      icon: Heart,
      titleKey: 'values.trust',
      descKey: 'values.trust.desc'
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
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              {t('about.tagline')}
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
                {t('about.mission')}
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
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.values.subtitle')}
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
                    <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(value.descKey)}
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
              {t('about.leadership.title')}
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
                  <h3 className="text-2xl font-bold mb-2">Fiacre B. KEKE</h3>
                  <p className="text-lg text-secondary font-semibold mb-4">
                    Expert Juriste-Fiscaliste / Directeur Exécutif CEO
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    Expert Juriste-Fiscaliste, il est titulaire d'un Master en Management et Droit des Affaires (MDA), diplôme de 3ème Cycle.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    Juriste Spécialiste du Droit des Affaires, avec plus de 15 ans d'expériences professionnelles, il met au quotidien son expertise pour l'accomplissement efficace et efficiente des missions du Bureau d'Etudes NDC des partenaires dans divers domaines d'intervention tels que :
                  </p>
                  <ul className="text-muted-foreground text-sm mb-4 list-disc list-inside space-y-1">
                    <li>Appui-Conseil & Assistance : sociale, juridique, comptable et fiscale aux entreprises</li>
                    <li>Etude, montage, suivi-évaluation des projets et DAO</li>
                    <li>Elaboration, montage et implémentation des manuels de procédure</li>
                    <li>Elaboration, montage des plans d'affaire</li>
                    <li>Management et Formation du personnel</li>
                    <li>Etude, montage, suivi-évaluation des missions foncières pour obtention de TF</li>
                    <li>Etude, montage et suivi pour la réalisation des ouvrages (Bâtiments) de type moderne et innovant</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    Consultant juridique et fiscal, il réalise de façon quotidienne des missions fiscales et juridiques en mobilisation des ressources au profit des communes et collectivités publiques en République du Bénin et des Partenaires Techniques Financiers (PTF).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    Auditeur-Formateur, il réalise entre autres : des missions d'audit juridique et fiscal avec d'autres experts ; des formations périodiques sur les réformes et innovations contenues dans les lois de finances et Code Général des Impôts ; des programmes en renforcement des capacités et transfert de compétences juridiques, sociales, fiscales et comptables au profit des promoteurs, des responsables et cadres d'entreprises.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    Enseignant de Fiscalité et de Droit des Affaires, il dispense depuis 2014 à ce jour dans les Instituts et Universités Privés du Bénin des modules de cours sur la Fiscalité Appliquée aux entreprises au Bénin mais également sur le Droit des Entreprises ou Droit des Affaires (OHADA).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                    Sur les différents projets et missions réalisés, il a toujours fait preuve professionnalisme remarquable en s'appuyant sur des capacités managériales et de leadership dans la préparation, l'exécution et la restitution des livrables.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Droit des Affaires</Badge>
                    <Badge variant="secondary">Fiscalité</Badge>
                    <Badge variant="secondary">Management</Badge>
                    <Badge variant="secondary">Audit</Badge>
                    <Badge variant="secondary">Formation</Badge>
                    <Badge variant="secondary">OHADA</Badge>
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
            {t('about.join.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('about.join.subtitle')}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="hover-lift bg-white text-secondary hover:bg-white/90">
              {t('about.join.cta')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;