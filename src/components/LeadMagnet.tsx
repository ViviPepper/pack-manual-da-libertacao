import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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
    // Simular envio dos dados
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Dados do lead:", data);
    toast.success("Dados enviados com sucesso! Agora você pode baixar o guia.");
    setIsSubmitted(true);
  };

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

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome completo</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Seu nome completo"
                          {...register("name")}
                          className="mt-1"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input
                          id="whatsapp"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          {...register("whatsapp")}
                          className="mt-1"
                        />
                        {errors.whatsapp && (
                          <p className="text-sm text-destructive mt-1">{errors.whatsapp.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          {...register("email")}
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      variant="hero" 
                      size="xl" 
                      className="w-full min-w-[280px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Quero Receber o Guia Gratuito"}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        ✅ Dados enviados com sucesso! Agora você pode baixar o guia.
                      </p>
                    </div>
                    
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full min-w-[280px]"
                      onClick={() => window.open('https://cutt.ly/guia_red_flags', '_blank')}
                    >
                      Baixar Guia Gratuito Agora
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      ✅ Download instantâneo • ✅ 100% gratuito • ✅ Sem spam
                    </p>
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