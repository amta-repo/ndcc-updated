import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const newsItems = [
  {
    id: 1,
    titleFR: "NDC CONSEILS lance de nouveaux services de conseil fiscal",
    titleEN: "NDC CONSEILS launches new tax advisory services",
  },
  {
    id: 2,
    titleFR: "Formation en gestion d'entreprise prévue pour février 2026",
    titleEN: "Business management training scheduled for February 2026",
  },
  {
    id: 3,
    titleFR: "Partenariat stratégique avec les ordres professionnels du Bénin",
    titleEN: "Strategic partnership with professional organizations of Benin",
  },
  {
    id: 4,
    titleFR: "Nouveau guide de sécurisation foncière disponible",
    titleEN: "New land security guide available",
  },
  {
    id: 5,
    titleFR: "NDC CONSEILS célèbre 15 ans d'excellence",
    titleEN: "NDC CONSEILS celebrates 15 years of excellence",
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
