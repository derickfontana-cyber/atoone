import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, Asterisk, Bot, Check, Clock3, Menu, Sparkles, X, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const workflows = [
  { label: 'Nutrição de leads', title: 'Transforme um novo lead em uma conversa promissora.', description: 'Cada contato é enriquecido, qualificado e direcionado à pessoa certa — com uma resposta atenciosa já preparada.', trigger: 'Novo contato pelo site', actions: ['Enriquecer dados da empresa', 'Avaliar intenção com IA', 'Preparar resposta personalizada'], result: 'Lead pronto para vendas em 42 s' },
  { label: 'Integração de clientes', title: 'Faça cada novo cliente se sentir esperado.', description: 'Da proposta assinada à reunião inicial, documentos, tarefas e atualizações personalizadas avançam sem cobranças constantes.', trigger: 'Proposta assinada', actions: ['Criar espaço do cliente', 'Reunir documentos essenciais', 'Agendar reunião inicial'], result: 'Integração 3,2× mais rápida' },
  { label: 'Relatórios semanais', title: 'Troque as sextas nas planilhas por clareza.', description: 'Suas principais métricas são reunidas, explicadas de forma simples e entregues antes mesmo que alguém precise pedir.', trigger: 'Toda sexta-feira às 16h', actions: ['Reunir métricas atuais', 'Explicar mudanças importantes', 'Enviar o resumo'], result: '6,4 horas recuperadas por semana' },
]

function Home() {
  const [activeWorkflow, setActiveWorkflow] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const workflow = workflows[activeWorkflow]
  return <main>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Página inicial da Relay"><span className="brand-mark"><Asterisk size={19}/></span>RELAY</a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
        <a href="#services" onClick={() => setMenuOpen(false)}>O que automatizamos</a><a href="#process" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#results" onClick={() => setMenuOpen(false)}>Resultados</a><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Agende uma análise gratuita <ArrowRight size={15}/></a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><div className="eyebrow"><span/> Automação com IA para equipes em crescimento</div><h1>Automatize seu negócio.<br/><em>Cresça com IA.</em></h1><p className="hero-lede">Elimine tarefas repetitivas, aprimore suas operações e aumente a receita — enquanto você se concentra nas decisões que só você pode tomar.</p><div className="hero-actions"><a href="#contact" className="button primary">Descubra onde automatizar <ArrowRight size={18}/></a><a href="#services" className="text-link">Veja o que é possível <span>↓</span></a></div><div className="trust-line"><div className="avatar-stack" aria-hidden="true"><span>MK</span><span>AL</span><span>RS</span></div><p><strong>4,9 / 5</strong><br/>por líderes ambiciosos</p></div></div>
      <div className="hero-visual" aria-label="Ilustração de um fluxo de trabalho automatizado"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="signal-card signal-one"><Zap size={16}/><span><b>Lead qualificado</b><small>Há 12 segundos</small></span><Check size={14}/></div><div className="signal-card signal-two"><Bot size={16}/><span><b>Resumo da IA pronto</b><small>47 minutos economizados</small></span><Check size={14}/></div><div className="core-sphere"><span className="sphere-label"><Sparkles size={18}/> RELAY<br/><small>12 fluxos ativos</small></span></div><div className="metric-pill"><span>+31%</span><small>de capacidade este mês</small></div><span className="scribble">trabalhando mesmo<br/>quando você não está →</span></div>
    </section>

    <section className="logo-strip" aria-label="Integrações com suas ferramentas"><span>Funciona muito bem com</span><b>HubSpot</b><b>Notion</b><b>Slack</b><b>stripe</b><b>Google Workspace</b><b>airtable</b></section>

    <section className="workflows section" id="services">
      <div className="section-heading"><div><span className="kicker">01 / O que automatizamos</span><h2>Menos tarefas repetitivas.<br/><em>Mais negócios.</em></h2></div><p>Conectamos as ferramentas que você já usa e criamos sistemas inteligentes que fazem o trabalho avançar com precisão, consistência e a qualquer hora.</p></div>
      <div className="workflow-tabs" role="tablist">{workflows.map((item,index)=><button key={item.label} className={activeWorkflow===index?'active':''} onClick={()=>setActiveWorkflow(index)} role="tab" aria-selected={activeWorkflow===index}><span>0{index+1}</span>{item.label}</button>)}</div>
      <div className="workflow-stage"><div className="workflow-copy" key={workflow.label}><h3>{workflow.title}</h3><p>{workflow.description}</p><a href="#contact">Automatize este fluxo <ArrowRight size={17}/></a></div><div className="flow-diagram" key={`${workflow.label}-diagram`}><div className="flow-node trigger"><small>GATILHO</small><b>{workflow.trigger}</b></div><div className="flow-line"><i/></div><div className="action-stack">{workflow.actions.map((action,index)=><div className="flow-node" key={action}><span>{index+1}</span><b>{action}</b><Check size={15}/></div>)}</div><div className="flow-line"><i/></div><div className="flow-result"><Sparkles size={18}/><span><small>RESULTADO</small><b>{workflow.result}</b></span></div></div></div>
    </section>

    <section className="results" id="results"><div className="results-intro"><span className="kicker light">02 / Os benefícios</span><h2>Tempo é sua<br/><em>melhor estratégia de crescimento.</em></h2><p>A automação não substitui sua equipe. Ela devolve às pessoas o espaço para pensar, criar, vender e atender. As informações apresentadas foram pesquisadas por profissionais.</p></div><div className="stats-grid"><div className="stat tall"><Clock3/><strong>18,6</strong><span>horas recuperadas<br/>por pessoa, todo mês</span><small>MÉDIA DOS SISTEMAS DE CLIENTES</small></div><div className="stat"><strong>3,4×</strong><span>mais rapidez na resposta a leads</span></div><div className="stat accent"><strong>27%</strong><span>menos custos operacionais</span></div><blockquote>“A única maneira de fazer um excelente trabalho é amar o que você faz.”<footer>— Steve Jobs</footer></blockquote></div></section>

    <section className="process section" id="process"><div className="section-heading compact"><div><span className="kicker">03 / Como funciona</span><h2>Do atrito à fluidez<br/><em>em três movimentos.</em></h2></div></div><div className="process-list"><article><span>01</span><div><h3>Identificamos os obstáculos</h3><p>Mapeamos onde tempo, atenção e receita estão escapando da sua operação.</p></div><small>ANÁLISE GRATUITA DE AUTOMAÇÃO</small></article><article><span>02</span><div><h3>Construímos o sistema</h3><p>Projetamos, testamos e conectamos um fluxo confiável ao seu processo específico.</p></div><small>GERALMENTE DE 2 A 4 SEMANAS</small></article><article><span>03</span><div><h3>Aprimoramos conforme você cresce</h3><p>Monitoramos o desempenho e mantemos sua automação útil à medida que o negócio muda.</p></div><small>OTIMIZAÇÃO CONTÍNUA</small></article></div></section>

    <section className="cta-band" id="contact"><div className="cta-orb"><Asterisk/></div><span className="kicker light">Comece com uma conversa</span><h2>Sua próxima contratação<br/>pode ser um <em>fluxo de trabalho.</em></h2><p>Em 30 minutos, descobrimos onde a automação pode gerar mais impacto no seu negócio. Sem pressão de venda. Apenas ideias úteis.</p><a href="mailto:atoone2026@gmail.com?subject=An%C3%A1lise%20gratuita%20de%20automa%C3%A7%C3%A3o" className="button cream">Agende sua análise gratuita <ArrowRight size={18}/></a></section>
    <footer className="footer"><a className="brand" href="#top"><span className="brand-mark"><Asterisk size={19}/></span>RELAY</a><p>Sistemas inteligentes para negócios humanos.</p><div><a href="#services">Serviços</a><a href="#process">Processo</a><a href="mailto:atoone2026@gmail.com">Contato</a></div><small>© 2026 Relay Automation Studio</small></footer>
  </main>
}
