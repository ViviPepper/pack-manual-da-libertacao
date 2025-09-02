import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PainRecognition() {
  const painPoints = [
    {
      title: "Vive \"pisando em ovos\"",
      description: "Medindo cada palavra e ação para evitar conflitos e manter uma paz que nunca é real."
    },
    {
      title: "Duvida constantemente de si mesma",
      description: "Questiona sua sanidade e intuição, se perguntando \"será que sou eu a exagerada?\"."
    },
    {
      title: "Perdeu a própria identidade",
      description: "Não sabe mais do que gosta, o que sonha ou quem ela era antes do relacionamento."
    },
    {
      title: "Se sente isolada",
      description: "Perdeu a conexão com amigos e familiares que antes eram sua base de apoio."
    },
    {
      title: "Acredita que precisa \"aguentar\"",
      description: "Vive na esperança de que a fase boa da \"lua de mel\" volte para sempre."
    },
    {
      title: "Está exausta emocionalmente",
      description: "Mas não sabe por onde começar a sair do ciclo destrutivo."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4 md:space-y-6 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              A Dor que Ninguém Vê
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Este pack foi desenhado para a mulher que se sente presa em uma prisão invisível, 
              onde as grades são feitas de culpa, medo e manipulação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-6 md:pt-8 px-4 sm:px-0">
            <p className="text-base sm:text-lg text-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Se você se identificou com algum desses pontos, saiba que você não está sozinha. 
              Há um caminho para a libertação, e ele começa aqui.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              className="h-12 sm:h-14 text-sm sm:text-base px-6 sm:px-8"
              onClick={() => window.open('https://go.hotmart.com/F101483319F?dp=1', '_blank')}
            >
              Reconheço Essa Dor - Quero Ajuda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}