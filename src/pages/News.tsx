import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import galleryImage1 from "@/assets/gallery-1.jpeg";
import galleryImage2 from "@/assets/gallery-2.jpeg";
import teamPhoto from "@/assets/team-photo.jpeg";

interface NewsItem {
  id: number;
  image: string;
  titleFR: string;
  titleEN: string;
  summaryFR: string;
  summaryEN: string;
  contentFR: string;
  contentEN: string;
  date: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    image: teamPhoto,
    titleFR: "NDC CONSEILS lance de nouveaux services de conseil fiscal",
    titleEN: "NDC CONSEILS launches new tax advisory services",
    summaryFR: "Découvrez notre nouvelle gamme de services fiscaux adaptés aux PME béninoises.",
    summaryEN: "Discover our new range of tax services tailored for Beninese SMEs.",
    contentFR: "NDC CONSEILS est fier d'annoncer le lancement de nouveaux services de conseil fiscal spécialement conçus pour les petites et moyennes entreprises du Bénin. Ces services comprennent l'optimisation fiscale, la préparation des déclarations fiscales, l'assistance lors des contrôles fiscaux, et des conseils personnalisés pour maximiser vos avantages fiscaux tout en restant en conformité avec la législation en vigueur.\n\nNotre équipe d'experts fiscalistes, dirigée par M. Fiacre KEKE, met à votre disposition plus de 15 ans d'expérience pour vous accompagner dans toutes vos démarches fiscales. Contactez-nous dès aujourd'hui pour une consultation gratuite.",
    contentEN: "NDC CONSEILS is proud to announce the launch of new tax advisory services specially designed for small and medium enterprises in Benin. These services include tax optimization, tax return preparation, assistance during tax audits, and personalized advice to maximize your tax benefits while remaining compliant with current legislation.\n\nOur team of tax experts, led by Mr. Fiacre KEKE, brings over 15 years of experience to assist you with all your tax matters. Contact us today for a free consultation.",
    date: "2026-01-25",
    category: "Services"
  },
  {
    id: 2,
    image: galleryImage1,
    titleFR: "Formation en gestion d'entreprise prévue pour février 2026",
    titleEN: "Business management training scheduled for February 2026",
    summaryFR: "Inscrivez-vous à notre prochaine session de formation en management et stratégie d'entreprise.",
    summaryEN: "Register for our upcoming training session on business management and strategy.",
    contentFR: "NDC CONSEILS organise une formation intensive en gestion d'entreprise du 15 au 20 février 2026 à Abomey-Calavi. Cette formation couvrira les thèmes suivants :\n\n• Stratégie d'entreprise et planification\n• Gestion financière et comptabilité\n• Leadership et management d'équipe\n• Marketing et développement commercial\n• Cadre juridique et fiscal OHADA\n\nLes places sont limitées à 25 participants. Inscrivez-vous rapidement pour bénéficier du tarif early bird. Un certificat de participation sera délivré à la fin de la formation.",
    contentEN: "NDC CONSEILS is organizing an intensive business management training from February 15-20, 2026 in Abomey-Calavi. This training will cover the following topics:\n\n• Business strategy and planning\n• Financial management and accounting\n• Leadership and team management\n• Marketing and business development\n• OHADA legal and tax framework\n\nPlaces are limited to 25 participants. Register quickly to benefit from the early bird rate. A certificate of participation will be issued at the end of the training.",
    date: "2026-01-20",
    category: "Formation"
  },
  {
    id: 3,
    image: galleryImage2,
    titleFR: "Partenariat stratégique avec les ordres professionnels du Bénin",
    titleEN: "Strategic partnership with professional organizations of Benin",
    summaryFR: "NDC CONSEILS renforce ses liens avec les ordres professionnels pour mieux vous servir.",
    summaryEN: "NDC CONSEILS strengthens ties with professional organizations to better serve you.",
    contentFR: "Nous sommes heureux d'annoncer la signature d'un partenariat stratégique avec plusieurs ordres professionnels du Bénin, notamment l'Ordre des Experts Comptables et des Comptables Agréés (OECCA) et l'Ordre des Avocats du Bénin.\n\nCe partenariat nous permettra de :\n• Renforcer notre réseau d'experts\n• Offrir des services encore plus complets à nos clients\n• Participer à des formations continues\n• Contribuer au développement du secteur des services professionnels au Bénin\n\nCette collaboration témoigne de notre engagement envers l'excellence et notre volonté d'être les professionnels les plus sûrs du marché.",
    contentEN: "We are pleased to announce the signing of a strategic partnership with several professional organizations in Benin, including the Order of Chartered Accountants and Certified Accountants (OECCA) and the Bar Association of Benin.\n\nThis partnership will allow us to:\n• Strengthen our network of experts\n• Offer even more comprehensive services to our clients\n• Participate in continuing education\n• Contribute to the development of the professional services sector in Benin\n\nThis collaboration demonstrates our commitment to excellence and our desire to be the most reliable professionals in the market.",
    date: "2026-01-15",
    category: "Partenariat"
  },
  {
    id: 4,
    image: teamPhoto,
    titleFR: "Nouveau guide de sécurisation foncière disponible",
    titleEN: "New land security guide available",
    summaryFR: "Téléchargez gratuitement notre guide complet sur la sécurisation foncière au Bénin.",
    summaryEN: "Download our comprehensive land security guide in Benin for free.",
    contentFR: "NDC CONSEILS met à votre disposition un guide complet sur la sécurisation foncière au Bénin. Ce document détaillé couvre tous les aspects de la procédure de sécurisation de vos biens immobiliers :\n\n• Les étapes de l'obtention du titre foncier\n• Les documents nécessaires\n• Les délais et coûts associés\n• Les pièges à éviter\n• Vos droits et obligations\n\nCe guide est le fruit de notre expérience de plus de 15 ans dans l'accompagnement des propriétaires fonciers. Téléchargez-le gratuitement sur notre site ou contactez-nous pour un accompagnement personnalisé.",
    contentEN: "NDC CONSEILS provides you with a comprehensive guide on land security in Benin. This detailed document covers all aspects of the procedure for securing your real estate:\n\n• Steps to obtain the land title\n• Required documents\n• Associated timelines and costs\n• Pitfalls to avoid\n• Your rights and obligations\n\nThis guide is the result of our over 15 years of experience in supporting landowners. Download it for free on our website or contact us for personalized assistance.",
    date: "2026-01-10",
    category: "Ressources"
  },
  {
    id: 5,
    image: galleryImage1,
    titleFR: "NDC CONSEILS célèbre 15 ans d'excellence",
    titleEN: "NDC CONSEILS celebrates 15 years of excellence",
    summaryFR: "Retour sur 15 années d'accompagnement des entreprises béninoises vers le succès.",
    summaryEN: "Looking back at 15 years of supporting Beninese businesses towards success.",
    contentFR: "Cette année marque le 15ème anniversaire de NDC CONSEILS ! Depuis notre création, nous avons eu le privilège d'accompagner des centaines d'entreprises béninoises dans leur développement et leur réussite.\n\nQuelques chiffres clés :\n• Plus de 50 clients réguliers\n• Plus de 200 projets réalisés\n• Plus de 100 formations dispensées\n• 98% de satisfaction client\n\nNous tenons à remercier tous nos clients, partenaires et collaborateurs qui ont contribué à ce succès. Ensemble, continuons à bâtir l'avenir économique du Bénin.\n\n\"Être de loin, les professionnels les plus sûrs\" - Telle est notre devise et notre engagement envers vous.",
    contentEN: "This year marks the 15th anniversary of NDC CONSEILS! Since our founding, we have had the privilege of supporting hundreds of Beninese businesses in their development and success.\n\nSome key figures:\n• Over 50 regular clients\n• Over 200 completed projects\n• Over 100 trainings delivered\n• 98% client satisfaction\n\nWe would like to thank all our clients, partners and collaborators who have contributed to this success. Together, let's continue to build the economic future of Benin.\n\n\"Being by far, the most reliable professionals\" - This is our motto and our commitment to you.",
    date: "2026-01-05",
    category: "Entreprise"
  }
];

const News = () => {
  const { language, t } = useTranslation();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const getTitle = (item: NewsItem) => language === 'FR' ? item.titleFR : item.titleEN;
  const getSummary = (item: NewsItem) => language === 'FR' ? item.summaryFR : item.summaryEN;
  const getContent = (item: NewsItem) => language === 'FR' ? item.contentFR : item.contentEN;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'FR' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('news.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item, index) => (
              <Card 
                key={item.id}
                className="group overflow-hidden hover-lift shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={getTitle(item)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-accent text-accent-foreground">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(item.date)}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {getTitle(item)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {getSummary(item)}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-accent"
                    onClick={() => setSelectedNews(item)}
                  >
                    {t('news.seeMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedNews && (
            <>
              <div className="relative h-64 -mx-6 -mt-6 mb-6">
                <img 
                  src={selectedNews.image} 
                  alt={getTitle(selectedNews)}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-accent text-accent-foreground">
                  {selectedNews.category}
                </Badge>
              </div>
              <DialogHeader>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(selectedNews.date)}
                </div>
                <DialogTitle className="text-2xl">
                  {getTitle(selectedNews)}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {getSummary(selectedNews)}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 prose prose-sm max-w-none">
                {getContent(selectedNews).split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-foreground mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button 
                  className="bg-gradient-primary hover-lift"
                  onClick={() => setSelectedNews(null)}
                >
                  {t('news.close')}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('news.cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('news.cta.subtitle')}
          </p>
          <a href="https://wa.me/2290197706069" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="hover-lift">
              {t('nav.consultation')}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default News;
