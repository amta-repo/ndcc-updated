import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import galleryImage1 from "@/assets/gallery-1.jpeg";
import galleryImage2 from "@/assets/gallery-2.jpeg";
import teamPhoto from "@/assets/team-photo.jpeg";
import ceoPhoto from "@/assets/ceo-photo.jpeg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Équipe", "Formations", "Événements", "Bureau"];

  const galleryItems = [
    {
      id: 1,
      src: teamPhoto,
      alt: "Équipe NDC CONSEILS",
      category: "Équipe",
      title: "Notre Équipe Professionnelle",
      description: "L'équipe experte de NDC CONSEILS au complet"
    },
    {
      id: 2,
      src: ceoPhoto,
      alt: "PDG Mr. Fiacre KEKE",
      category: "Équipe",
      title: "Direction Générale",
      description: "Mr. Fiacre KEKE, Président Directeur Général"
    },
    {
      id: 3,
      src: galleryImage1,
      alt: "Formation professionnelle",
      category: "Formations",
      title: "Sessions de Formation",
      description: "Formations professionnelles pour nos clients"
    },
    {
      id: 4,
      src: galleryImage2,
      alt: "Événement fiscal",
      category: "Événements",
      title: "Formation Fiscale 2022",
      description: "Formation sur les innovations fiscales du CGI 2022"
    },
    {
      id: 5,
      src: teamPhoto,
      alt: "Réunion d'équipe",
      category: "Bureau",
      title: "Environnement de Travail",
      description: "Nos locaux professionnels à Abomey-Calavi"
    },
    {
      id: 6,
      src: galleryImage1,
      alt: "Consultation client",
      category: "Bureau",
      title: "Consultation Personnalisée",
      description: "Accompagnement individualisé de nos clients"
    }
  ];

  const filteredItems = selectedCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Galerie Photos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Découvrez NDC CONSEILS en images : notre équipe, nos formations et nos événements
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-primary shadow-glow" 
                    : "hover-lift"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group overflow-hidden hover-lift shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-gradient-accent text-accent-foreground">
                        {item.category}
                      </Badge>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 hover:bg-white/30 text-white border-0"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0">
                      <div className="relative">
                        <img 
                          src={item.src} 
                          alt={item.alt}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                          <Badge className="mb-2 bg-gradient-accent text-accent-foreground">
                            {item.category}
                          </Badge>
                          <h3 className="text-white font-semibold text-xl mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-secondary-foreground/80">Clients Accompagnés</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-secondary-foreground/80">Formations Dispensées</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-secondary-foreground/80">Années d'Expérience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-secondary-foreground/80">Support Client</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;