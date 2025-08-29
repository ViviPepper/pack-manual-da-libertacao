import { Button } from "@/components/ui/button";

export default function LeadMagnet() {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-accent/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Imagem do E-book */}
              <div className="lg:order-2">
                <img 
                  src="/lovable-uploads/32fe4b4c-c787-4e8d-bdd7-3643cab8fa33.png" 
                  alt="Guia Rápido: Sinais de Alerta em Relacionamentos Tóxicos" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-glow"
                />
              </div>

              {/* Conteúdo */}
              <div className="lg:order-1 space-y-6">
                <div className="space-y-4 text-left lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    🎁 Presente Gratuito
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
                    Guia Rápido: Sinais de Alerta em 
                    <span className="block text-primary">Relacionamentos Tóxicos</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Receba gratuitamente este e-book essencial com os principais sinais de alerta 
                    para identificar comportamentos tóxicos antes que seja tarde demais.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      ⚠️
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-card-foreground">Sinais Claros</h3>
                      <p className="text-sm text-muted-foreground">Red flags evidentes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      🛡️
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-card-foreground">Proteção Imediata</h3>
                      <p className="text-sm text-muted-foreground">Ações práticas de segurança</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      💪
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-card-foreground">Fortalecimento</h3>
                      <p className="text-sm text-muted-foreground">Primeiros passos da cura</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="min-w-[280px]"
                    onClick={() => window.open('https://cutt.ly/guia_red_flags', '_blank')}
                  >
                    Baixar Guia Gratuito Agora
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    ✅ Download instantâneo • ✅ 100% gratuito • ✅ Sem spam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}