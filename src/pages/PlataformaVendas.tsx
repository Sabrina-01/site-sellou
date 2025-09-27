import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  Users, 
  ArrowRight, 
  Star,
  Clock,
  TrendingUp,
  Database,
  Shield,
  Zap,
  Settings,
  FileText,
  UserCheck,
  Globe,
  Calculator,
  Menu,
  X,
  Download,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Schema de validação para o formulário
const formSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().trim().email('Email inválido').max(255, 'Email muito longo'),
  company: z.string().trim().min(2, 'Nome da empresa obrigatório').max(100, 'Nome da empresa muito longo'),
  phone: z.string().trim().min(10, 'Telefone inválido').max(20, 'Telefone muito longo'),
  message: z.string().trim().max(1000, 'Mensagem muito longa').optional()
});

// Schema para calculadora ROI
const roiSchema = z.object({
  reps: z.number().min(1, 'Mínimo 1 representante').max(1000, 'Máximo 1000 representantes'),
  averageTicket: z.number().min(100, 'Ticket mínimo R$ 100').max(1000000, 'Ticket muito alto'),
  frequency: z.number().min(1, 'Mínimo 1 pedido/mês').max(100, 'Máximo 100 pedidos/mês'),
  improvement: z.number().min(5, 'Mínimo 5% de melhoria').max(100, 'Máximo 100% de melhoria')
});

type FormData = z.infer<typeof formSchema>;
type ROIData = z.infer<typeof roiSchema>;

const PlataformaVendas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roiResult, setRoiResult] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    }
  });

  const roiForm = useForm<ROIData>({
    resolver: zodResolver(roiSchema),
    defaultValues: {
      reps: 5,
      averageTicket: 1000,
      frequency: 10,
      improvement: 25
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Demonstração agendada!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar formulário. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const calculateROI = (data: ROIData) => {
    const currentRevenue = data.reps * data.averageTicket * data.frequency * 12;
    const improvedRevenue = currentRevenue * (1 + data.improvement / 100);
    const annualIncrease = improvedRevenue - currentRevenue;
    const cost = data.reps * 89 * 12; // Growth plan
    const roi = ((annualIncrease - cost) / cost) * 100;
    setRoiResult(roi);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
              alt="Sellou" 
              className="h-8"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('funcionalidades')} className="text-sm hover:text-primary transition-colors">Funcionalidades</button>
            <button onClick={() => scrollToSection('integracoes')} className="text-sm hover:text-primary transition-colors">Integrações</button>
            <button onClick={() => scrollToSection('precos')} className="text-sm hover:text-primary transition-colors">Preços</button>
            <button onClick={() => scrollToSection('resultados')} className="text-sm hover:text-primary transition-colors">Resultados</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('demonstracao')} 
              className="hidden sm:inline-flex"
            >
              Agendar Demonstração
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('funcionalidades')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">Funcionalidades</button>
              <button onClick={() => scrollToSection('integracoes')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">Integrações</button>
              <button onClick={() => scrollToSection('precos')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">Preços</button>
              <button onClick={() => scrollToSection('resultados')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">Resultados</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">FAQ</button>
              <Button 
                onClick={() => scrollToSection('demonstracao')} 
                className="w-full"
              >
                Agendar Demonstração
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Execução comercial de ponta a ponta, do representante ao faturamento.
            </h1>
            
            {/* Problemas */}
            <div className="bg-destructive/10 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Problemas que você enfrenta hoje:
              </h2>
              <ul className="text-left space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Pedidos chegando por WhatsApp e planilhas → erros e retrabalho no ERP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Zero visibilidade diária de metas, cobertura de carteira e mix por linha.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Reps sem roteiro/agenda inteligente; visitas perdidas e clientes inativos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Catálogo desatualizado → ruptura e perda de venda.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Módulos do ERP não são amigáveis para o representante no campo.</span>
                </li>
              </ul>
            </div>

            {/* Proposta de Valor */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Pedidos sem fricção</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Plataforma de força de vendas com pedido em 3 cliques. Multi‑pastas para representantes que atendem várias indústrias.</p>
                </CardContent>
              </Card>
              
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Gestão que enxerga e decide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Painel do Gestor com metas, cobertura por carteira e alertas. Relatórios precisos por representante, cliente, produto e região.</p>
                </CardContent>
              </Card>
              
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Integração que funciona</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Integra com os principais ERPs. Cadastro segmentado de clientes e produtos (com vídeos e anexos).</p>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg" 
              onClick={() => scrollToSection('demonstracao')}
              className="text-lg px-8 py-6"
            >
              Agendar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">9 Funcionalidades que Transformam Vendas</h2>
            <p className="text-xl text-muted-foreground">Tudo que você precisa para escalar sua operação comercial</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Gestão de pedidos de representantes multi‑pastas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Lance pedidos com política comercial e tabelas de preço por indústria/linha.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Integração com principais ERPs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Conecte Sellou ao seu ERP em dias. Evite digitação dupla e erros.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Cadastro & gestão segmentada de clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Perfil completo (rota, carteira, potencial, histórico, inadimplência, tags).</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Painel do Gestor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Metas por carteira, performance por representante, cobertura por região.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Relatórios precisos e detalhados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Vendas por produto/linha, clientes sem pedido 30/60/90, mix e margem.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Cadastro de Representantes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Perfis, metas, territórios, permissões e ranking (gamificação opcional).</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Cadastro de produtos com vídeos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Catálogo rico com fotos, vídeos e documentos para acelerar o fechamento.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Página de pedidos para o cliente do seu cliente (B2B)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Seus clientes podem fazer pedidos diretamente, com sua política e aprovação.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Gestão de usuários e perfis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Administrador, Gestor, Vendedor e Cliente — na medida certa, sem confusão.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resultados em semanas, não em semestres.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+20–30%</div>
              <p className="text-muted-foreground">pedidos por representante no mês 2</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-muted-foreground">de reps ativos no primeiro mês</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15 dias</div>
              <p className="text-muted-foreground">para onboarding completo</p>
            </div>
          </div>

          {/* Depoimento */}
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-4">
                "A Sellou transformou nossos pedidos do WhatsApp em uma operação previsível. Em 60 dias, +27% de pedidos/rep."
              </blockquote>
              <cite className="text-muted-foreground">— Nome, Indústria XYZ</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnóstico e importação</h3>
              <p className="text-muted-foreground">Suba clientes, produtos e reps.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Treinamento express</h3>
              <p className="text-muted-foreground">Gestor (1h) e reps (45min) com materiais prontos.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Go‑live com acompanhamento</h3>
              <p className="text-muted-foreground">War‑room D+7/D+21 e relatório de valor no D+30.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section id="integracoes" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integra com o que você já usa.</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <p>Conectores CSV/API padrão em dias</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <p>Evolução para conectores nativos</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <p>Suporte dedicado na implantação</p>
              </div>
            </div>
            
            {/* Placeholder para logos ERPs */}
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">Principais ERPs integrados:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['SAP', 'TOTVS', 'Senior', 'Sankhya'].map((erp) => (
                  <div key={erp} className="bg-background rounded-lg p-4 border">
                    <p className="font-medium">{erp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planos por usuário/mês</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">R$ 59</div>
                <CardDescription>até 10 reps</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Gestão básica de pedidos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cadastro de clientes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Relatórios básicos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Growth</CardTitle>
                <div className="text-3xl font-bold">R$ 89</div>
                <CardDescription>até 50 reps</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dashboards avançados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">1 integração incluída</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Automações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold">R$ 129</div>
                <CardDescription>50+ reps</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">APIs personalizadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">SSO e múltiplos CDs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">SLA garantido</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Setup inicial: R$ 1.000–3.000 (conforme complexidade)
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Add-ons: WhatsApp (R$9/u), BI (R$499/conta), Roteirização (R$14/u)
            </p>
            
            {/* Calculadora ROI */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular meu ROI
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Calculadora de ROI</DialogTitle>
                  <DialogDescription>
                    Veja o retorno esperado do investimento na Sellou
                  </DialogDescription>
                </DialogHeader>
                <Form {...roiForm}>
                  <form onSubmit={roiForm.handleSubmit(calculateROI)} className="space-y-4">
                    <FormField
                      control={roiForm.control}
                      name="reps"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de representantes</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={roiForm.control}
                      name="averageTicket"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ticket médio (R$)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={roiForm.control}
                      name="frequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pedidos por rep/mês</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={roiForm.control}
                      name="improvement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Melhoria esperada (%)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Calcular ROI</Button>
                    
                    {roiResult !== null && (
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <p className="text-center">
                          <span className="text-2xl font-bold text-primary">
                            {roiResult.toFixed(0)}%
                          </span>
                          <br />
                          <span className="text-sm text-muted-foreground">ROI anual estimado</span>
                        </p>
                      </div>
                    )}
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="tempo">
                <AccordionTrigger>Quanto tempo para implementar?</AccordionTrigger>
                <AccordionContent>
                  Em média 15 dias. O tempo pode variar conforme a complexidade das integrações necessárias.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="erp">
                <AccordionTrigger>Precisa trocar meu ERP?</AccordionTrigger>
                <AccordionContent>
                  Não. Integramos com os principais ERPs do mercado através de conectores seguros e confiáveis.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="autonomos">
                <AccordionTrigger>Reps autônomos conseguem usar?</AccordionTrigger>
                <AccordionContent>
                  Sim. O pedido é lançado em 3 cliques, com interface intuitiva desenvolvida especificamente para representantes em campo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="adocao">
                <AccordionTrigger>E se meu time não usar?</AccordionTrigger>
                <AccordionContent>
                  Acompanhamos D+7/D+21 e treinamos até 80% ativos em 30 dias. Temos metodologia comprovada de adoção.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="comecar">
                <AccordionTrigger>Posso começar pequeno?</AccordionTrigger>
                <AccordionContent>
                  Sim, com o plano Starter e evoluir conforme o crescimento da sua operação. Escalabilidade total.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Formulário de Demonstração */}
      <section id="demonstracao" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Agende sua demonstração</h2>
              <p className="text-xl text-muted-foreground">Veja a Sellou em ação e descubra como transformar sua operação de vendas</p>
            </div>

            {!isSubmitted ? (
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome *</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome completo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input placeholder="seu@email.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Empresa *</FormLabel>
                              <FormControl>
                                <Input placeholder="Nome da empresa" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone *</FormLabel>
                              <FormControl>
                                <Input placeholder="(00) 00000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem (opcional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conte-nos sobre seus desafios atuais..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" size="lg" className="w-full">
                        <Calendar className="mr-2 h-5 w-5" />
                        Agendar Demonstração Gratuita
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Demonstração agendada com sucesso!</h3>
                  <p className="text-muted-foreground mb-6">
                    Nossa equipe entrará em contato em breve para confirmar o melhor horário.
                  </p>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Planilha: Metas por Carteira
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Participar do Webinar Gratuito
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <Button 
          onClick={() => scrollToSection('demonstracao')} 
          className="w-full shadow-lg"
          size="lg"
        >
          Agendar Demonstração
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/lovable-uploads/909dad84-bf50-4154-ab6b-d7979572b5cc.png" 
                alt="Sellou" 
                className="h-8 mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Execução comercial de ponta a ponta, do representante ao faturamento.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('funcionalidades')} className="text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</button></li>
                <li><button onClick={() => scrollToSection('integracoes')} className="text-muted-foreground hover:text-foreground transition-colors">Integrações</button></li>
                <li><button onClick={() => scrollToSection('precos')} className="text-muted-foreground hover:text-foreground transition-colors">Preços</button></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cases</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
                <li><Link to="/politica-privacidade" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LGPD</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:anderson@sellou.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                    anderson@sellou.com.br
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5547996353818" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    WhatsApp: +55 (47) 99635-3818
                  </a>
                </li>
              </ul>
              
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Selo de Segurança</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Sellou. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlataformaVendas;