import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

import ingco1 from "@/assets/ingco-ndcc1.jpeg";
import ingco2 from "@/assets/ingco-ndcc2.jpeg";
import ingco3 from "@/assets/ingco-ndcc3.jpeg";
import ingco4 from "@/assets/ingco-ndcc4.jpeg";
import house1 from "@/assets/house1.jpeg";
import house2 from "@/assets/house2.jpeg";
import house3 from "@/assets/house3.jpeg";
import house4 from "@/assets/house4.jpeg";
import house5 from "@/assets/house5.jpeg";
import house6 from "@/assets/house6.jpeg";

interface NewsItem {
  id: number;
  images: string[];
  titleFR: string;
  titleEN: string;
  summaryFR: string;
  summaryEN: string;
  contentFR: string;
  contentEN: string;
  date: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    images: [ingco1, ingco2, ingco3, ingco4],
    titleFR: "CEO NDC Conseils et INGCO Bénin au Record Culinaire Guinness",
    titleEN: "NDC Conseils CEO and INGCO Benin at the Guinness Culinary Record",
    summaryFR: "Image du CEO NDC Conseils et INGCO Bénin, partenaire du cabinet NDC Conseils aux côtés du Chef Delphin Agbetogan alias le guépard des fourneaux, Record Culinaire Guinness.",
    summaryEN: "Photo of NDC Conseils CEO and INGCO Benin, partner of NDC Conseils alongside Chef Delphin Agbetogan aka the cheetah of the kitchen, Guinness Culinary Record.",
    contentFR: "Image du CEO NDC Conseils et INGCO Bénin, partenaire du cabinet NDC Conseils aux côtés du Chef Delphin Agbetogan alias le guépard des fourneaux, Record Culinaire Guinness.\n\nCet événement marquant a réuni des personnalités du monde des affaires et de la gastronomie béninoise autour d'un défi culinaire historique. NDC Conseils, à travers son partenariat avec INGCO Bénin, réaffirme son engagement envers le développement et la promotion des talents locaux.",
    contentEN: "Photo of NDC Conseils CEO and INGCO Benin, partner of NDC Conseils alongside Chef Delphin Agbetogan aka the cheetah of the kitchen, Guinness Culinary Record.\n\nThis landmark event brought together personalities from the business and culinary world of Benin around a historic cooking challenge. NDC Conseils, through its partnership with INGCO Benin, reaffirms its commitment to the development and promotion of local talents.",
    date: "2026-03-05",
    category: "Partenariat"
  },
  {
    id: 2,
    images: [house1, house2, house3, house4, house5, house6],
    titleFR: "Villa R+1 équipée et meublée en vente",
    titleEN: "Furnished R+1 Villa for sale",
    summaryFR: "Une villa équipée et meublée de type R+1 5 pièces est mise en vente par le cabinet NDC Conseils. Titre de propriété : Titre Foncier.",
    summaryEN: "A fully equipped and furnished 5-room R+1 villa is put on sale by NDC Conseils. Property title: Land Title.",
    contentFR: "Une villa équipée et meublée de type R+1 5 pièces est mise en vente par le cabinet NDC Conseils.\n\nNB: Titre de propriété : Titre Foncier\n\nContactez-nous pour plus d'informations et pour planifier une visite.\n\nTéléphone : +229 01 97 70 60 69 / +229 01 40 57 91 58",
    contentEN: "A fully equipped and furnished 5-room R+1 villa is put on sale by NDC Conseils.\n\nNote: Property title: Land Title\n\nContact us for more information and to schedule a visit.\n\nPhone: +229 01 97 70 60 69 / +229 01 40 57 91 58",
    date: "2026-03-08",
    category: "Immobilier"
  }
];

const ImageCarousel = ({ images, alt, autoSlide = false }: { images: string[]; alt: string; autoSlide?: boolean }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [autoSlide, next]);

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                className={`w-2 h-2 rounded-full transition-colors ${idx === current ? 'bg-primary' : 'bg-background/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover-lift shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.images[0]}
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
              <div className="relative h-72 -mx-6 -mt-6 mb-6">
                <ImageCarousel
                  images={selectedNews.images}
                  alt={getTitle(selectedNews)}
                  autoSlide={true}
                />
                <Badge className="absolute top-4 left-4 z-10 bg-gradient-accent text-accent-foreground">
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
