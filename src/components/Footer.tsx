import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 px-4 sm:px-0">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Sua Liberdade Começa Agora
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Não deixe que mais um dia passe vivendo em uma prisão invisível. 
              Sua jornada de libertação está a um clique de distância.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <Button 
              variant="liberation" 
              size="xl" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[280px] h-12 sm:h-14 text-sm sm:text-base"
              onClick={() => window.open('https://go.hotmart.com/F101483319F?dp=1', '_blank')}
            >
              Iniciar Minha Libertação
            </Button>
            
            <div className="text-xs sm:text-sm opacity-75 space-y-1 sm:space-y-2">
              <p>✨ Acesso imediato a todo o conteúdo</p>
              <p>📱 Compatível com todos os dispositivos</p>
              <p>🔒 Compra 100% segura e confidencial</p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs sm:text-sm opacity-75">
              <p>© 2024 Clara Valente. Todos os direitos reservados.</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="https://drive.google.com/file/d/1T8BlqLBytb3CkUuXiembHj50HZkp1fbw/view?usp=sharing" target="_blank" className="hover:opacity-100 transition-opacity">
                  Política de Privacidade
                </a>
                <a href="https://drive.google.com/file/d/1-azbyoEpfBQeFRb6Oc7FCXFKOFxHT5K-/view?usp=sharing" target="_blank" className="hover:opacity-100 transition-opacity">
                  Termos de Uso
                </a>
                <a href="mailto:ofocooculto@gmail.com" className="hover:opacity-100 transition-opacity">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}