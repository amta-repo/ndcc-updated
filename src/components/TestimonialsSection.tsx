import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Quote, Star, ChevronLeft, ChevronRight, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  message: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amadou Diallo",
    company: "Ste Wissam",
    role: "Directeur Général",
    message: "NDC CONSEILS nous a accompagnés avec professionnalisme dans notre restructuration fiscale. Leur expertise nous a permis d'économiser significativement sur nos charges.",
    rating: 5
  },
  {
    id: 2,
    name: "Marie Adjakou",
    company: "Outils Pro Bénin",
    role: "Gérante",
    message: "Un accompagnement de qualité pour la création de notre entreprise. L'équipe est disponible et réactive. Je recommande vivement leurs services.",
    rating: 5
  },
  {
    id: 3,
    name: "Pascal Houessou",
    company: "LEADD",
    role: "Président",
    message: "Grâce à NDC CONSEILS, nous avons pu sécuriser nos terrains et obtenir nos titres fonciers dans les délais. Un partenaire de confiance.",
    rating: 5
  },
  {
    id: 4,
    name: "Justine Ahouandjinou",
    company: "Commerce Import-Export",
    role: "Directrice Commerciale",
    message: "L'assistance comptable fournie par NDC CONSEILS est irréprochable. Nos comptes sont toujours à jour et conformes aux normes.",
    rating: 5
  },
  {
    id: 5,
    name: "Kodjo Mensah",
    company: "Startup Tech Bénin",
    role: "Fondateur",
    message: "Le business plan rédigé par NDC CONSEILS nous a permis d'obtenir notre financement. Une équipe compétente et à l'écoute.",
    rating: 5
  },
  {
    id: 6,
    name: "Félicité Agbangla",
    company: "Cabinet Médical",
    role: "Médecin Directeur",
    message: "Excellente prestation en conseil juridique. NDC CONSEILS maîtrise parfaitement le droit des affaires au Bénin.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    message: ""
  });
  const { toast } = useToast();

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % defaultTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % defaultTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + defaultTestimonials.length) % defaultTestimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Nouveau témoignage - NDC CONSEILS");
    const body = encodeURIComponent(
      `Nouveau témoignage reçu:\n\n` +
      `Nom: ${formData.name}\n` +
      `Entreprise: ${formData.company}\n` +
      `Fonction: ${formData.role}\n\n` +
      `Témoignage:\n${formData.message}`
    );
    
    window.location.href = `mailto:ndcconseils.contact@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Merci pour votre témoignage !",
      description: "Votre témoignage a été préparé pour envoi par email.",
    });
    
    setFormData({ name: "", company: "", role: "", message: "" });
    setIsDialogOpen(false);
  };

  const currentTestimonial = defaultTestimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Témoignages de Nos Clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de notre accompagnement
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 mx-auto mb-6 text-primary opacity-30" />
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed italic">
                  "{currentTestimonial.message}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <div className="space-y-1">
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                  <p className="text-primary font-medium">{currentTestimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full shadow-lg bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full shadow-lg bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {defaultTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Submit Testimonial Button */}
        <div className="text-center mt-12">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-secondary hover:shadow-glow">
                <Send className="mr-2 h-5 w-5" />
                Laisser un Témoignage
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Partagez Votre Expérience</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Fonction *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                    placeholder="Votre fonction"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Votre témoignage *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Partagez votre expérience avec NDC CONSEILS..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary">
                  Envoyer le Témoignage
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
