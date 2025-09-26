import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+229 97 26 01 88", "+229 97 70 60"],
      color: "bg-gradient-primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@ndcconseils.bj", "info@ndcconseils.bj"],
      color: "bg-gradient-secondary"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Lot 38S 'A' Sèmè", "Abomey-Calavi, Bénin"],
      color: "bg-gradient-accent"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"],
      color: "bg-gradient-primary"
    }
  ];

  const whatsappNumber = "+22997260188";
  const whatsappMessage = encodeURIComponent("Bonjour NDC CONSEILS, j'aimerais obtenir des informations sur vos services.");

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Prêt à faire évoluer votre entreprise ? Parlons de vos projets !
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className={`${info.color} text-white rounded-t-lg`}>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyez-nous un Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom Complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-secondary hover:shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp & Map */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <Card className="shadow-card hover-lift">
                <CardHeader className="bg-gradient-secondary text-secondary-foreground rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground mb-6">
                    Pour une réponse rapide, contactez-nous directement sur WhatsApp
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Ouvrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Benefits Card */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Pourquoi Nous Choisir ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <span>Consultation gratuite</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <span>Réponse sous 24h</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <span>Expertise reconnue</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <span>Solutions personnalisées</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <span>Accompagnement complet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Notre Localisation</h2>
            <p className="text-muted-foreground">
              Rendez-nous visite à nos bureaux à Abomey-Calavi
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Carte interactive disponible prochainement
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Lot 38S "A" Sèmè, Abomey-Calavi, Bénin
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;