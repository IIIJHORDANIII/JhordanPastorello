import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';

const FuturisticCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Social Media Design',
    'Tráfego Pago',
    'Landing Pages',
    'Identidade Visual',
    'Consultoria Completa'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 futuristic-title">
            Vamos Transformar Sua Ideia em Realidade
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-mono">
            Pronto para dar o próximo passo? Preencha o formulário abaixo e entrarei em contato em até 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-text-primary font-mono">Envie sua Mensagem</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono"
                    >
                      <option value="" className="bg-gray-900">Selecione um serviço</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-gray-900">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none font-mono"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-button group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </div>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-mono">Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 font-mono">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 font-mono">E-mail</h4>
                    <p className="text-text-secondary font-mono">contato@jhordanpastorello.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 font-mono">WhatsApp</h4>
                    <p className="text-text-secondary font-mono">+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 font-mono">Localização</h4>
                    <p className="text-text-secondary font-mono">São Paulo, SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 font-mono">Horário de Atendimento</h4>
                    <p className="text-text-secondary font-mono">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 font-mono">Ações Rápidas</h3>
              
              <div className="space-y-4">
                <button className="w-full neon-button-secondary group">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5" />
                    Enviar E-mail Direto
                  </span>
                </button>
                
                <button className="w-full neon-button-secondary group">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    WhatsApp Rápido
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .futuristic-title {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00D4FF, #0099CC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
        }
        
        .text-text-primary {
          color: #E0E0E0;
        }
        
        .text-text-secondary {
          color: #A0A0A0;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          border-color: #00D4FF;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        
        .neon-button {
          position: relative;
          background: transparent;
          border: 2px solid #00D4FF;
          color: #00D4FF;
          padding: 16px 32px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .neon-button:hover {
          background: #00D4FF;
          color: #0A0A0A;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        
        .neon-button-secondary {
          position: relative;
          background: transparent;
          border: 2px solid #A0A0A0;
          color: #A0A0A0;
          padding: 12px 24px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .neon-button-secondary:hover {
          border-color: #00D4FF;
          color: #00D4FF;
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default FuturisticCTA;