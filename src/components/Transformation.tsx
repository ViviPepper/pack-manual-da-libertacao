import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import womenEmpowermentImage from "@/assets/women-empowerment.jpg";

export default function Transformation() {
  const transformations = [
    {
      from: "Confusão",
      to: "Clareza",
      description: "Entendendo finalmente as dinâmicas do abuso e validando tudo o que você sentiu."
    },
    {
      from: "Refém do medo",
      to: "Arquiteta da segurança",
      description: "Com planos e ferramentas práticas para se proteger e tomar controle."
    },
    {
      from: "Autoestima destruída",
      to: "Identidade reconstruída",
      description: "Reconectando-se com sua força, seus valores e seu poder pessoal."
    },
    {
      from: "Culpa constante",
      to: "Responsabilidade própria",
      description: "Aprendendo a estabelecer limites saudáveis e comunicação assertiva."
    },
    {
      from: "Dependência emocional",
      to: "Vínculo quebrado",
      description: "Entendendo por que era tão difícil sair e encontrando força para o rompimento."
    },
    {
      from: "Vítima da história",
      to: "Heroína da jornada",
      description: "Reescrevendo sua narrativa como protagonista da sua própria libertação."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Sua Jornada de Transformação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Da Sobrevivente à Protagonista: Com o Pack da Libertação, você vai trocar...
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {transformations.map((transformation, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-1">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          De:
                        </span>
                        <div className="text-lg font-semibold text-foreground line-through opacity-60">
                          {transformation.from}
                        </div>
                      </div>
                      <div className="text-2xl text-primary">→</div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                          Para:
                        </span>
                        <div className="text-lg font-bold text-primary">
                          {transformation.to}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {transformation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={womenEmpowermentImage} 
                  alt="Mulheres se empoderando juntas" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-primary/20" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-hero rounded-full opacity-20 animate-pulse" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-30 animate-bounce" />
            </div>
          </div>

          <div className="text-center pt-16">
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Esta transformação não acontece da noite para o dia, mas cada passo que você dá 
              te aproxima da mulher livre, forte e autêntica que você sempre foi.
            </p>
            <Button 
              variant="liberation" 
              size="xl"
              onClick={() => window.open('https://go.hotmart.com/F101483319F?dp=1', '_blank')}
            >
              Iniciar Minha Transformação Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}