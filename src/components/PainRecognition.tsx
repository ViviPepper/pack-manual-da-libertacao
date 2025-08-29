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
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              A Dor que Ninguém Vê
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Este pack foi desenhado para a mulher que se sente presa em uma prisão invisível, 
              onde as grades são feitas de culpa, medo e manipulação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Se você se identificou com algum desses pontos, saiba que você não está sozinha. 
              Há um caminho para a libertação, e ele começa aqui.
            </p>
            <Button 
              variant="hero" 
              size="xl"
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