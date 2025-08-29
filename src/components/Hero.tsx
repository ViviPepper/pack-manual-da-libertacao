import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-liberation.jpg";
export default function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Pack Manual da
            <span className="block text-accent font-extrabold text-shadow-lg">
              Libertação
            </span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold opacity-90">
              O Mapa para Fora da Prisão Invisível
            </h2>
            <p className="text-xl md:text-2xl opacity-80 font-light">
              Sua jornada guiada do reconhecimento da dor à reconstrução da sua liberdade.
            </p>
          </div>
          
          <div className="space-y-6 pt-8">
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Um guia completo e compassivo para mulheres que se sentem presas em relacionamentos tóxicos. 
              Criado por <span className="font-semibold text-accent">Clara Valente</span>, 
              não são apenas livros e áudios, mas um mapa de cura que combina ferramentas práticas 
              de segurança com uma profunda jornada de autodescoberta emocional e espiritual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="liberation" 
                size="xl" 
                className="min-w-[200px]"
                onClick={() => window.open('https://go.hotmart.com/F101483319F?dp=1', '_blank')}
              >
                Comece Sua Libertação
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
}