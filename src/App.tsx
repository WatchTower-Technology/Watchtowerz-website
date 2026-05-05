import { Menu, Zap, Link2, Cpu, ChevronDown, ArrowRight, Star, Check, X, Play, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState('starter');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechVenture Inc.',
      role: 'Founder & CEO',
      content: 'Watchtowerz transformed our sales pipeline. We went from 2 deals/month to 15+. The ROI paid for itself in week one.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      company: 'Growth Capital Partners',
      role: 'VP of Operations',
      content: 'Their AI automation saved us 200+ hours monthly on lead qualification alone. This is the future of sales ops.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Patel',
      company: 'Innovative Solutions Ltd',
      role: 'Marketing Director',
      content: 'Best investment we made this year. Conversion rates are up 340%, customer acquisition cost is down 72%.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      name: 'James Wilson',
      company: 'Enterprise Dynamics',
      role: 'CTO',
      content: 'The integration was seamless. In 72 hours we had a fully operational AI engine. Absolutely impressive.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Michelle Torres',
      company: 'Digital Momentum',
      role: 'Chief Revenue Officer',
      content: 'We moved from manual workflows to fully automated in 2 weeks. Team productivity increased 8x.',
      rating: 5,
      image: '👩‍🔬'
    }
  ];

  const faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Our deployment process takes just 72 hours from blueprint to live automation. We handle all technical setup, integration, and testing so you can focus on growth.'
    },
    {
      question: 'Will this work with our existing tech stack?',
      answer: 'Yes. Our AI engine integrates with 200+ platforms including Salesforce, HubSpot, Zapier, n8n, Make.com, and custom APIs. If your tool exists, we can connect it.'
    },
    {
      question: 'What if we're not satisfied?',
      answer: 'We offer a 30-day money-back guarantee. No questions asked. But 98% of our clients renew because the results speak for themselves.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing starts at $2,999/month for Starter automation and scales based on complexity. Most clients see ROI within 30 days. We'll provide a custom quote after your audit.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely. Every client gets dedicated support, monthly optimization calls, and continuous AI training to improve results.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small teams automating 1-2 core workflows',
      features: [
        'Single workflow automation',
        'Up to 2 integrations',
        'Basic AI modules',
        'Email support',
        '72-hour deployment',
        '2-hour response time'
      ],
      best: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Most popular. For teams scaling 3-5 workflows',
      features: [
        'Up to 5 workflow automations',
        'Up to 10 integrations',
        'Advanced AI modules',
        'Priority support (1-hour response)',
        'Custom AI training',
        'Monthly optimization calls',
        'Analytics dashboard'
      ],
      best: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited workflows',
        'Unlimited integrations',
        'Custom AI models',
        '24/7 dedicated support',
        'Advanced AI training',
        'Weekly strategy calls',
        'Custom integrations & APIs',
        'White-label options'
      ],
      best: false
    }
  ];

  const blogPosts = [
    {
      title: 'How AI Automation Increased Revenue by 340%',
      category: 'Case Study',
      date: 'May 3, 2026',
      excerpt: 'A deep dive into how our tech transformed a B2B SaaS company sales process...'
    },
    {
      title: 'The Hidden Costs of Manual Workflows',
      category: 'Education',
      date: 'April 28, 2026',
      excerpt: 'Most companies waste $50K+ annually on manual processes. Here\'s how to calculate your cost...'
    },
    {
      title: 'AI Automation Trends for 2026',
      category: 'Insights',
      date: 'April 22, 2026',
      excerpt: 'What\'s happening in AI automation and why every business needs to pay attention...'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #0a0d13 0%, #08102a 100%)' }}>
      {/* The Star/Dot Layer */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px' 
        }} 
      />

      {/* Gradient mesh background */}
      <div className="fixed inset-0 -z-10">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
            <radialGradient id="meshGradient" cx="75%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#0a0d13" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#08102a" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#meshGradient)" />
          <circle cx="900" cy="150" r="300" fill="#00FFFF" opacity="0.15" filter="url(#blur)" />
          <circle cx="950" cy="200" r="250" fill="#00FFFF" opacity="0.08" filter="url(#blur)" />
          <circle cx="150" cy="650" r="200" fill="#00FFFF" opacity="0.05" filter="url(#blur)" />
          <circle cx="1000" cy="700" r="280" fill="#00FFFF" opacity="0.06" filter="url(#blur)" />
        </svg>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a href="#services" className="text-2xl hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#process" className="text-2xl hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#pricing" className="text-2xl hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#contact" className="text-2xl hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-xl font-bold">WATCHTOWERZ.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              <a href="#process" className="text-gray-400 hover:text-white transition">Process</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="bg-cyan-400 text-black px-6 py-2 rounded font-semibold hover:bg-cyan-300 transition hidden md:block">
              Book a Call
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-mono">
            AI AUTOMATION & WORKFLOW ARCHITECTURE
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Automate the </span>
            <span className="text-cyan-400">Impossible.</span>
            <br />
            <span className="text-white">Scale the </span>
            <span className="text-yellow-400">Extraordinary.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We architect custom AI engines that transform manual workflows into <span className="text-white font-semibold">high-velocity growth machines.</span>
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <a href="#contact" className="bg-cyan-400 text-black px-8 py-3 rounded font-semibold hover:bg-cyan-300 transition transform hover:scale-105">
              Book Strategy Call
            </a>
            <button onClick={() => setShowVideoModal(true)} className="border border-cyan-500/50 text-white px-8 py-3 rounded hover:bg-cyan-500/10 transition inline-flex items-center gap-2">
              <Play className="w-4 h-4" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">50K+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Hours Automated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">10x</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Average ROI Multiplier</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">System Uptime</div>
          </div>
        </div>
      </section>

      {/* Nexus Engine Section */}
      <section id="services" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// THE NEXUS ENGINE ADVANTAGE</div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Three Pillars of </span>
              <span className="text-cyan-400">Operational Supremacy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 transition backdrop-blur-md hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded border border-cyan-400 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-cyan-400 text-xs font-mono mb-3">AI_MODULE_01</div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Lead Generation</h3>
                <p className="text-gray-400 mb-6">Deploy autonomous prospecting engines that identify, qualify, and engage high-intent leads — 24/7, without a human in the loop.</p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-cyan-400 text-xl font-bold">+340%</div>
                    <div className="text-xs text-gray-500 uppercase">Lead Velocity</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-xl font-bold">−72%</div>
                    <div className="text-xs text-gray-500 uppercase">Cost per Lead</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 transition backdrop-blur-md hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded border border-yellow-400 flex items-center justify-center mb-6">
                  <Link2 className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-yellow-400 text-xs font-mono mb-3">AI_MODULE_02</div>
                <h3 className="text-2xl font-bold mb-4">Workflow Architecture</h3>
                <p className="text-gray-400 mb-6">We map, deconstruct, and reconstruct your entire operational stack into streamlined, self-optimizing automation flows.</p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-yellow-400 text-xl font-bold">+8x</div>
                    <div className="text-xs text-gray-500 uppercase">Ops Efficiency</div>
                  </div>
                  <div>
                    <div className="text-yellow-400 text-xl font-bold">−99%</div>
                    <div className="text-xs text-gray-500 uppercase">Error Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 transition backdrop-blur-md hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded border border-purple-400 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-purple-400 text-xs font-mono mb-3">AI_MODULE_03</div>
                <h3 className="text-2xl font-bold mb-4">API Integration Layer</h3>
                <p className="text-gray-400 mb-6">Bridge every tool in your ecosystem. Our integration layer creates a unified intelligence fabric across your entire tech stack.</p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-purple-400 text-xl font-bold">200+</div>
                    <div className="text-xs text-gray-500 uppercase">Integrations</div>
                  </div>
                  <div>
                    <div className="text-purple-400 text-xl font-bold">&lt; 72h</div>
                    <div className="text-xs text-gray-500 uppercase">Setup Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Sequence */}
      <section id="process" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// DEPLOYMENT SEQUENCE</div>
            <h2 className="text-5xl font-bold">
              <span className="text-white">From Audit to </span>
              <span className="text-cyan-400">Acceleration</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '01', phase: 'PHASE_01', title: 'Audit', subtitle: 'System Diagnosis', desc: 'We dissect your current operations — identifying bottlenecks, redundant processes, and automation opportunities unique to your business.' },
              { num: '02', phase: 'PHASE_02', title: 'Architecture', subtitle: 'Blueprint Engineering', desc: 'A precision-designed automation blueprint is crafted — selecting optimal AI models and integration pathways for maximum impact.' },
              { num: '03', phase: 'PHASE_03', title: 'Automation', subtitle: 'Engine Deployment', desc: 'We build and deploy your custom AI engine: fully integrated, rigorously tested, and wired into your operational workflow.' },
              { num: '04', phase: 'PHASE_04', title: 'Acceleration', subtitle: 'Continuous Optimization', desc: 'Post-launch, our systems continuously monitor, learn, and self-optimize — compounding efficiency gains month after month.' }
            ].map((step, idx) => {
              const colors = [
                { bg: 'bg-cyan-500/10', border: 'border-cyan-400', text: 'text-cyan-400' },
                { bg: 'bg-purple-500/10', border: 'border-purple-400', text: 'text-purple-400' },
                { bg: 'bg-yellow-500/10', border: 'border-yellow-400', text: 'text-yellow-400' },
                { bg: 'bg-cyan-500/10', border: 'border-cyan-400', text: 'text-cyan-400' },
              ];
              const color = colors[idx];
              return (
                <div key={step.num} className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/20 transition backdrop-blur-md">
                  <div className={`w-10 h-10 rounded border-2 ${color.border} flex items-center justify-center mb-4`}>
                    <span className={`${color.text} font-bold text-sm`}>{step.num}</span>
                  </div>
                  <div className="text-cyan-400 text-xs font-mono mb-3">{step.subtitle}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// CLIENT SUCCESS STORIES</div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Loved by </span>
              <span className="text-cyan-400">Industry Leaders</span>
            </h2>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-md min-h-[300px]">
            <div className="absolute top-4 right-4 flex gap-2">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-xl text-gray-300 mb-6 italic">{testimonials[currentTestimonial].content}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{testimonials[currentTestimonial].image}</div>
              <div>
                <p className="font-bold text-white">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
                <p className="text-xs text-cyan-400">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition ${idx === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'}`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Trusted Integration Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
            {['Base44', 'n8n', 'OpenAI', 'Make.com', 'Zapier', 'Claude'].map((partner, i) => (
              <div key={i} className="flex items-center justify-center p-6 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition backdrop-blur-md">
                <span className="text-gray-300 font-semibold">{partner}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">50,000+</div>
              <div className="text-gray-400">Hours Saved</div>
              <div className="text-xs text-gray-500 mt-2">For our clients this year alone</div>
            </div>
            <div className="text-center border-l border-r border-cyan-500/10 px-8">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$1,200K+</div>
              <div className="text-gray-400">ROI Generated</div>
              <div className="text-xs text-gray-500 mt-2">In measurable client revenue</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400">Client Retention</div>
              <div className="text-xs text-gray-500 mt-2">Because results speak louder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// TRANSPARENT PRICING</div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Plans that </span>
              <span className="text-cyan-400">Scale with You</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">All plans include free audit, custom roadmap, and money-back guarantee</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-lg border p-8 backdrop-blur-md transition ${
                  plan.best
                    ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(0,255,255,0.3)] transform md:scale-105'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {plan.best && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                </div>

                <button className={`w-full mb-8 px-6 py-3 rounded font-semibold transition transform hover:scale-105 ${
                  plan.best
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-500/10">
                    <th className="text-left py-4 px-4 font-bold">Feature</th>
                    <th className="text-center py-4 px-4 font-bold">Starter</th>
                    <th className="text-center py-4 px-4 font-bold">Professional</th>
                    <th className="text-center py-4 px-4 font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Workflows', starter: '1', pro: '5', enterprise: 'Unlimited' },
                    { feature: 'Integrations', starter: '2', pro: '10', enterprise: 'Unlimited' },
                    { feature: 'Support Response', starter: '24h', pro: '1h', enterprise: '15 min' },
                    { feature: 'AI Training', starter: 'Basic', pro: 'Custom', enterprise: 'Advanced' },
                    { feature: 'Monthly Calls', starter: '—', pro: 'Yes', enterprise: 'Weekly' },
                    { feature: 'SLA', starter: '99%', pro: '99.5%', enterprise: '99.9%' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="py-4 px-4">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.starter === '—' ? <X className="w-5 h-5 mx-auto text-red-400" /> : row.starter}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.pro === '—' ? <X className="w-5 h-5 mx-auto text-red-400" /> : row.pro}
                      </td>
                      <td className="text-center py-4 px-4 text-cyan-400 font-bold">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// FREQUENTLY ASKED</div>
            <h2 className="text-5xl font-bold mb-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-lg backdrop-blur-md overflow-hidden hover:border-white/20 transition"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 transition"
                >
                  <h3 className="font-bold text-lg text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="p-6 border-t border-white/10 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// INSIGHTS & KNOWLEDGE</div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Latest from the </span>
              <span className="text-cyan-400">Blog</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg bg-white/5 p-6 hover:border-white/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition backdrop-blur-md cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="border border-cyan-400/30 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent p-8 md:p-12 backdrop-blur-md">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">100% Money-Back </span>
              <span className="text-cyan-400">Guarantee</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              We're so confident in our results that we offer a full 30-day money-back guarantee. If you don't see measurable improvements in your automation metrics, we'll refund you completely. No questions asked.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">30-Day Risk-Free Trial</p>
                  <p className="text-gray-400 text-sm">Full money-back guarantee if not satisfied</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">2-Hour Response Time</p>
                  <p className="text-gray-400 text-sm">Dedicated support team always available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">99.9% Uptime SLA</p>
                  <p className="text-gray-400 text-sm">Enterprise-grade reliability guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm font-mono mb-4">// REAL-TIME INSIGHTS</div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">See Your </span>
              <span className="text-cyan-400">Success in Real-Time</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-lg bg-white/5 p-8 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold">Dashboard Preview</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded">
                  <p className="text-sm text-gray-400 mb-2">Leads Generated (24h)</p>
                  <p className="text-3xl font-bold text-cyan-400">342</p>
                  <p className="text-xs text-green-400 mt-1">↑ 45% from yesterday</p>
                </div>
                <div className="bg-white/5 p-4 rounded">
                  <p className="text-sm text-gray-400 mb-2">Automation Success Rate</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">98% successful automations</p>
                </div>
                <div className="bg-white/5 p-4 rounded">
                  <p className="text-sm text-gray-400 mb-2">Time Saved (This Month)</p>
                  <p className="text-3xl font-bold text-yellow-400">524 hrs</p>
                  <p className="text-xs text-gray-400 mt-1">~$52,400 in labor cost</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-6">Key Performance Indicators</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Lead Quality Score</p>
                  <div className="text-2xl font-bold mb-2">8.7/10</div>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className={`h-2 flex-1 rounded ${i < 8 ? 'bg-cyan-400' : 'bg-gray-700'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Conversion Rate</p>
                  <p className="text-2xl font-bold text-green-400">12.5%</p>
                  <p className="text-xs text-gray-400 mt-1">Industry average: 2-3%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Response Time</p>
                  <p className="text-2xl font-bold">2m 15s</p>
                  <p className="text-xs text-gray-400 mt-1">Automated responses to inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-cyan-400 text-sm font-mono mb-4">// INITIATE ENGAGEMENT</div>
            <h2 className="text-5xl font-bold mb-4">Ready to Build Your Digital Twin?</h2>
            <p className="text-gray-400">Schedule a strategy call. We'll audit your workflow, identify your highest-leverage automation opportunities, and present a custom roadmap — in 48 hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center text-sm">
            <div className="text-gray-400">✓ Free Workflow Audit</div>
            <div className="text-gray-400">✓ Custom AI Roadmap</div>
            <div className="text-gray-400">✓ No obligation</div>
          </div>

          <form 
            action="https://formsubmit.co/timiadeleke@watchtowerz.com" 
            method="POST" 
            className="space-y-4 mb-8"
          >
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />

            <input 
              type="text" 
              name="fullName" 
              placeholder="Full Name" 
              className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition backdrop-blur-sm" 
              required 
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="Work Email" 
              className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition backdrop-blur-sm" 
              required 
            />
            
            <input 
              type="text" 
              name="company" 
              placeholder="Company" 
              className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition backdrop-blur-sm" 
              required 
            />
            
            <textarea 
              name="projectBrief" 
              placeholder="Describe your current workflow challenges and automation goals..." 
              className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition backdrop-blur-sm h-32 resize-none" 
              required 
            />
            
            <button 
              type="submit" 
              className="w-full bg-cyan-400 text-black px-8 py-3 rounded font-semibold hover:bg-cyan-300 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Book My Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-400">✓ Results in 30 days • ✓ 2-hour response time • ✓ 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="font-semibold">WATCHTOWERZ.</span>
            <span className="text-gray-500 ml-2">AI Automation</span>
          </div>

          <span className="text-gray-500 order-3 md:order-2">
            © 2026 Watchtowerz Technology. All rights reserved.
          </span>

          <div className="flex items-center gap-2 order-2 md:order-3">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-cyan-400 font-mono text-xs tracking-widest">
              SYSTEM: OPERATIONAL
            </span>
          </div>
        </div>
      </footer>

      {/* Back to Top Button - Professional */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 border border-cyan-400 bg-black p-3 rounded-lg hover:bg-cyan-400/20 transition transform hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] group"
          aria-label="Back to top"
        >
          <ChevronDown className="w-5 h-5 text-cyan-400 rotate-180 group-hover:animate-bounce" />
        </button>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideoModal(false)}>
          <div className="bg-black border border-cyan-400 rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-cyan-400/20">
              <h3 className="text-xl font-bold">Product Demo</h3>
              <button onClick={() => setShowVideoModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-400">Video Demo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exit Intent Email Popup */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-black to-gray-900 border border-cyan-400 rounded-lg max-w-md w-full p-8">
            <h3 className="text-2xl font-bold mb-2">Wait! Get 30% Off</h3>
            <p className="text-gray-400 mb-6">Join our email list and receive exclusive automation tips + 30% off your first month.</p>
            <input type="email" placeholder="Your email..." className="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition mb-4" />
            <button className="w-full bg-cyan-400 text-black px-6 py-2 rounded font-semibold hover:bg-cyan-300 transition">
              Claim 30% Off
            </button>
            <button onClick={() => setShowEmailPopup(false)} className="w-full mt-3 text-gray-400 hover:text-white transition text-sm">
              No thanks
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
