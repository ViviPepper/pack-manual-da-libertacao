import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadMagnet() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Inserir dados na tabela leads
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: data.name,
            whatsapp: data.whatsapp,
            email: data.email,
          }
        ]);

      if (error) {
        throw error;
      }

      toast.success("Dados enviados com sucesso! Agora você pode baixar o guia.");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      toast.error("Erro ao enviar dados. Tente novamente.");
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-subtle">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-elegant border border-accent/20">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Imagem do E-book */}
              <div className="lg:order-2 flex justify-center">
                <img 
                  src="/lovable-uploads/32fe4b4c-c787-4e8d-bdd7-3643cab8fa33.png" 
                  alt="Guia Rápido: Sinais de Alerta em Relacionamentos Tóxicos" 
                  className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto rounded-lg shadow-glow"
                />
              </div>

              {/* Conteúdo */}
              <div className="lg:order-1 space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-primary text-primary-foreground rounded-full text-xs sm:text-sm font-semibold">
                    🎁 Presente Gratuito
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground">
                    Guia Rápido: Sinais de Alerta em 
                    <span className="block text-primary">Relacionamentos Tóxicos</span>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Receba gratuitamente este e-book essencial com os principais sinais de alerta 
                    para identificar comportamentos tóxicos antes que seja tarde demais.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm sm:text-base">
                      ⚠️
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Sinais Claros</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Red flags evidentes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm sm:text-base">
                      🛡️
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Proteção Imediata</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Ações práticas de segurança</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm sm:text-base">
                      💪
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Fortalecimento</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Primeiros passos da cura</p>
                    </div>
                  </div>
                </div>

                {!isSubmitted ? (
                  <div className="bg-gradient-primary/5 border border-primary/20 rounded-2xl p-4 sm:p-6 shadow-glow">
                    <div className="mb-4 sm:mb-6 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                        🔐 Acesso Exclusivo
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-1 sm:mb-2">
                        Preencha seus dados para receber o guia
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Seus dados estão 100% seguros conosco
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                      <div className="space-y-4 sm:space-y-5">
                        <div className="relative group">
                          <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-card-foreground mb-1.5 sm:mb-2 block">
                            👤 Nome completo
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Digite seu nome completo"
                            {...register("name")}
                            className="h-10 sm:h-12 bg-background/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-200 rounded-lg sm:rounded-xl px-3 sm:px-4 text-sm sm:text-base placeholder:text-muted-foreground/60"
                          />
                          {errors.name && (
                            <p className="text-xs sm:text-sm text-destructive mt-1 flex items-center gap-1">
                              ⚠️ {errors.name.message}
                            </p>
                          )}
                        </div>
                        
                        <div className="relative group">
                          <Label htmlFor="whatsapp" className="text-xs sm:text-sm font-medium text-card-foreground mb-1.5 sm:mb-2 block">
                            📱 WhatsApp
                          </Label>
                          <Input
                            id="whatsapp"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            {...register("whatsapp")}
                            className="h-10 sm:h-12 bg-background/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-200 rounded-lg sm:rounded-xl px-3 sm:px-4 text-sm sm:text-base placeholder:text-muted-foreground/60"
                          />
                          {errors.whatsapp && (
                            <p className="text-xs sm:text-sm text-destructive mt-1 flex items-center gap-1">
                              ⚠️ {errors.whatsapp.message}
                            </p>
                          )}
                        </div>
                        
                        <div className="relative group">
                          <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-card-foreground mb-1.5 sm:mb-2 block">
                            ✉️ Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            {...register("email")}
                            className="h-10 sm:h-12 bg-background/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-200 rounded-lg sm:rounded-xl px-3 sm:px-4 text-sm sm:text-base placeholder:text-muted-foreground/60"
                          />
                          {errors.email && (
                            <p className="text-xs sm:text-sm text-destructive mt-1 flex items-center gap-1">
                              ⚠️ {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="pt-1 sm:pt-2">
                        <Button 
                          type="submit"
                          variant="hero" 
                          size="xl" 
                          className="w-full h-11 sm:h-14 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-xl bg-gradient-primary hover:shadow-glow transform hover:scale-[1.02] transition-all duration-200 shadow-elegant"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-sm sm:text-base">Enviando...</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span className="text-sm sm:text-base">🎁 Quero Receber o Guia Gratuito</span>
                            </div>
                          )}
                        </Button>
                        
                        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            ✅ Sem spam
                          </span>
                          <span className="flex items-center gap-1">
                            ✅ 100% seguro
                          </span>
                          <span className="flex items-center gap-1">
                            ✅ Download instantâneo
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                    <div className="bg-gradient-primary/10 border-2 border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-glow">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xl sm:text-2xl">✅</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary">
                          Dados enviados com sucesso!
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Agora você pode fazer o download do seu guia gratuito
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full h-12 sm:h-14 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-xl bg-gradient-primary hover:shadow-glow transform hover:scale-[1.02] transition-all duration-200 shadow-elegant"
                      onClick={() => window.open('https://cutt.ly/guia_red_flags', '_blank')}
                    >
                      <div className="flex items-center gap-2">
                        📥 Baixar Guia Gratuito Agora
                      </div>
                    </Button>
                    
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        ✅ Download instantâneo • ✅ 100% gratuito • ✅ Sem spam
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        O download começará automaticamente em uma nova aba
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}