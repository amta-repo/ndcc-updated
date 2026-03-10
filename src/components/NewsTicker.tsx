import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const newsItems = [
  {
    id: 1,
    titleFR: "CEO NDC Conseils et INGCO Benin au Record Culinaire Guinness",
    titleEN: "NDC Conseils CEO and INGCO Benin at the Guinness Culinary Record",
  },
  {
    id: 2,
    titleFR: "Villa R+1 equipee et meublee en vente",
    titleEN: "Furnished R+1 Villa for sale",
  },
  {
    id: 3,
    titleFR: "Opportunite de Formation - Pressing Mobile (Abomey-Calavi)",
    titleEN: "Training Opportunity - Mobile Laundry (Abomey-Calavi)",
  },
  {
    id: 4,
    titleFR: "Avis de Recrutement - WashMan",
    titleEN: "Recruitment Notice - WashMan",
  },
];

const NewsTicker = () => {
  const { language, t } = useTranslation();

  const getTitle = (item: typeof newsItems[0]) => {
    return language === 'FR' ? item.titleFR : item.titleEN;
  };

  return (
    <div className="bg-accent/40 text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-2">
          <Link 
            to="/news" 
            className="shrink-0 font-semibold mr-4 hover:underline flex items-center gap-2"
          >
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs uppercase">
              {t('news.badge')}
            </span>
          </Link>
          <div className="overflow-hidden flex-1">
            <div className="animate-marquee whitespace-nowrap flex gap-12">
              {[...newsItems, ...newsItems].map((item, index) => (
                <Link 
                  key={`${item.id}-${index}`} 
                  to="/news" 
                  className="inline-block hover:underline"
                >
                  • {getTitle(item)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
