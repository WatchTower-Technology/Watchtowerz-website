import { Menu, Zap, Link2, Cpu, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0d13 0%, #08102a 100%)' }}>
      {/* Gradient mesh background */}
      <div className="fixed inset-0 -z-10">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
          </defs>
          {/* Base gradient mesh */}
          <rect width="1200" height="800" fill="url(#meshGradient)" />

          <defs>
            <radialGradient id="meshGradient" cx="75%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#0a0d13" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#08102a" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Soft circular bloom top right */}
          <circle cx="900" cy="150" r="300" fill="#00FFFF" opacity="0.15" filter="url(#blur)" />
          <circle cx="950" cy="200" r="250" fill="#00FFFF" opacity="0.08" filter="url(#blur)" />

          {/* Additional subtle mesh points */}
          <circle cx="150" cy="650" r="200" fill="#00FFFF" opacity="0.05" filter="url(#blur)" />
          <circle cx="1000" cy="700" r="280" fill="#00FFFF" opacity="0.06" filter="url(#blur)" />
        </svg>
      </div>

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
              <a href="#results" className="text-gray-400 hover:text-white transition">Results</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </nav>

          <a href="#contact" className="bg-cyan-400 text-black px-6 py-2 rounded font-semibold hover:bg-cyan-300 transition">
  Book a Call
</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-mono">
            AI AUTOMATION & WORKFLOW ARCHITECTURE
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Automate the </span>
            <span className="text-cyan-400">Impossible.</span>
            <br />
            <span className="text-white">Scale the </span>
            <span className="text-yellow-400">Extraordinary.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We architect custom AI engines that transform manual workflows into <span className="text-white font-semibold">high-velocity growth machines.</span>
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a href="#contact" className="bg-cyan-400 text-black px-8 py-3 rounded font-semibold hover:bg-cyan-300 transition">
  Book Strategy Call
</a>
            <button className="border border-cyan-500/50 text-white px-8 py-3 rounded hover:bg-cyan-500/10 transition">
              Explore Our Engine
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mt-32 flex gap-12 justify-center">
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
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 transition backdrop-blur-md">
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
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 transition backdrop-blur-md">
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
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 hover:border-white/20 transition backdrop-blur-md">
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
              { num: '01', phase: 'PHASE_01', title: 'Audit', subtitle: 'System Diagnosis', desc: 'We dissect your current operations — identifying bottlenecks, redundant processes, and automation opportunities worth millions.' },
              { num: '02', phase: 'PHASE_02', title: 'Architecture', subtitle: 'Blueprint Engineering', desc: 'A precision-designed automation blueprint is crafted — selecting optimal AI models, APIs, and workflow structures for your stack.' },
              { num: '03', phase: 'PHASE_03', title: 'Automation', subtitle: 'Engine Deployment', desc: 'We build and deploy your custom AI engine: fully integrated, rigorously tested, and wired into your existing infrastructure.' },
              { num: '04', phase: 'PHASE_04', title: 'Acceleration', subtitle: 'Continuous Optimization', desc: 'Post-launch, our systems continuously monitor, learn, and self-optimize — compounding your ROI every single day.' },
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

      {/* Results Section */}
      <section id="results" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Trusted Integration Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {['Base44', 'n8n', 'OpenAI', 'Make.com', 'Zapier', 'Claude'].map((partner, i) => (
              <div key={i} className="flex items-center justify-center p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition backdrop-blur-md">
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

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 border-t border-cyan-500/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-cyan-400 text-sm font-mono mb-4">// INITIATE ENGAGEMENT</div>
            <h2 className="text-5xl font-bold mb-4">Ready to Build Your Digital Twin?</h2>
            <p className="text-gray-400">Schedule a strategy call. We'll audit your workflow, identify your highest-leverage automation opportunities, and present a custom roadmap — in 48 hours.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 text-center text-sm">
            <div className="text-gray-400">Free Workflow Audit</div>
            <div className="text-gray-400">Custom AI Roadmap</div>
            <div className="text-gray-400">No obligation</div>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fullName = (form.elements.namedItem('fullName') as HTMLInputElement)?.value || '';
            const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
            const company = (form.elements.namedItem('company') as HTMLInputElement)?.value || '';
            const projectBrief = (form.elements.namedItem('projectBrief') as HTMLTextAreaElement)?.value || '';

            const mailtoLink = `mailto:timiadeleke@watchtowerz.com?subject=Strategy Call Request from ${encodeURIComponent(fullName)}&body=Full Name: ${encodeURIComponent(fullName)}%0AWork Email: ${encodeURIComponent(email)}%0ACompany: ${encodeURIComponent(company)}%0AProject Brief: ${encodeURIComponent(projectBrief)}`;
            window.location.href = mailtoLink;
          }} className="space-y-4 mb-8">
            <input type="text" name="fullName" placeholder="Full Name" className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition backdrop-blur-sm" required />
            <input type="email" name="email" placeholder="Work Email" className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition backdrop-blur-sm" required />
            <input type="text" name="company" placeholder="Company" className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition backdrop-blur-sm" required />
            <textarea name="projectBrief" placeholder="Describe your current workflow challenges and automation goals..." className="w-full px-6 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition backdrop-blur-sm h-32 resize-none" required />
            <button type="submit" className="w-full bg-cyan-400 text-black px-8 py-3 rounded font-semibold hover:bg-cyan-300 transition flex items-center justify-center gap-2">
              Book My Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div className="text-gray-400">Results in 30 days</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="font-semibold">WATCHTOWERZ.</span>
            <span className="text-gray-500 ml-2">AI Automation</span>
          </div>
          <span className="text-gray-500">© 2026 Watchtowerz Technology. All rights reserved.</span>
          <span className="text-gray-500">SYSTEM: OPERATIONAL</span>
        </div>
      </footer>
    </div>
  );
}
