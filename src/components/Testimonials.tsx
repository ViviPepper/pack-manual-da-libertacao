import { Card } from "@/components/ui/card";
import testimonialWoman1 from "@/assets/testimonial-woman-1.jpg";
import testimonialWoman2 from "@/assets/testimonial-woman-2.jpg";
import testimonialWoman3 from "@/assets/testimonial-woman-3.jpg";
import testimonialWoman4 from "@/assets/testimonial-woman-4.jpg";
const testimonials = [{
  name: "Mariana Silva",
  age: 34,
  location: "São Paulo, SP",
  image: testimonialWoman1,
  testimonial: "Depois de 8 anos em um relacionamento tóxico, eu não sabia mais quem eu era. O Pack da Libertação me mostrou que eu merecia muito mais. Hoje estou livre, feliz e construindo a vida que sempre sonhei."
}, {
  name: "Ana Costa",
  age: 28,
  location: "Rio de Janeiro, RJ",
  image: testimonialWoman3,
  testimonial: "Eu achava que era normal meu namorado controlar tudo na minha vida. Este material me abriu os olhos para os sinais que eu ignorava. Foi minha salvação! Agora tenho minha autoestima de volta."
}, {
  name: "Camila Santos",
  age: 41,
  location: "Belo Horizonte, MG",
  image: testimonialWoman2,
  testimonial: "Como mãe solo, achei que nunca conseguiria sair da situação abusiva. O plano de segurança e os exercícios me deram força e direcionamento. Meus filhos e eu finalmente vivemos em paz."
}, {
  name: "Juliana Oliveira",
  age: 36,
  location: "Porto Alegre, RS",
  image: testimonialWoman4,
  testimonial: "Estava perdida financeiramente depois que saí do relacionamento abusivo. O guia de independência financeira me ensinou a me organizar e hoje sou completamente independente. Gratidão eterna!"
}];
export default function Testimonials() {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Histórias Reais de 
              <span className="block text-primary">Transformação e Liberdade</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mulheres que usaram o Pack da Libertação para transformar suas vidas e encontrar a verdadeira felicidade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-4 sm:p-6 bg-card border border-accent/20 shadow-elegant">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary/20" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2 sm:mb-3">
                      <h3 className="font-semibold text-card-foreground text-base sm:text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.age} anos • {testimonial.location}
                      </p>
                    </div>
                    <blockquote className="text-sm sm:text-base text-card-foreground italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="flex text-primary mt-2 sm:mt-3">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-base sm:text-lg">⭐</span>)}
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full">
              <span className="font-semibold">+1000 mulheres já transformaram suas vidas</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}