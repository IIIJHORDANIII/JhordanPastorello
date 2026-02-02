import { useState, useRef, useEffect } from 'react';
import { Send, Phone, MapPin, Clock, MessageSquare, User, Briefcase, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FuturisticCTA = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! 👋 Bem-vindo ao chat. Preencha suas informações abaixo e envie sua mensagem direto para meu WhatsApp!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [currentMessage, setCurrentMessage] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = '5547996772336'; // Seu número de WhatsApp
  // Configure sua API endpoint aqui (ex: Evolution API, WhatsApp Cloud API, ou seu próprio backend)
  const whatsappApiUrl = import.meta.env.VITE_WHATSAPP_API_URL || ''; // Opcional: URL da API

  const services = [
    'Social Media Design',
    'Tráfego Pago',
    'Landing Pages',
    'Identidade Visual',
    'Consultoria Completa'
  ];

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    setIsFormComplete(formData.name.trim() !== '' && formData.phone.trim() !== '');
  }, [formData]);

  const scrollToBottom = () => {
    // Rola apenas o container do chat, não a página inteira
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = async (message: string): Promise<{ success: boolean; error?: string }> => {
    // Se tiver API configurada, tenta enviar diretamente
    if (whatsappApiUrl) {
      try {
        const response = await fetch(whatsappApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            number: whatsappNumber,
            message: message,
            name: formData.name,
            phone: formData.phone,
            service: formData.service
          }),
        });

        let data: any = {};
        const contentType = response.headers.get('content-type');
        
        try {
          if (contentType && contentType.includes('application/json')) {
            data = await response.json();
          } else {
            const text = await response.text();
            data = { message: text || 'Resposta recebida' };
          }
        } catch (parseError) {
          // Se não conseguir fazer parse, considera sucesso se status for OK
          if (response.ok) {
            return { success: true };
          }
          data = { error: 'Erro ao processar resposta' };
        }

        if (response.ok && data.success !== false) {
          return { success: true };
        } else {
          return { 
            success: false, 
            error: data.error || data.message || 'Erro ao enviar mensagem' 
          };
        }
      } catch (error) {
        console.error('Erro ao enviar via API:', error);
        return { 
          success: false, 
          error: error instanceof Error ? error.message : 'Erro de conexão' 
        };
      }
    }

    // Fallback: retorna false para usar o método de abrir WhatsApp
    return { success: false };
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || !isFormComplete || isSending) return;

    setIsSending(true);

    // Adiciona mensagem do usuário ao chat
    const userMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Formata mensagem para WhatsApp
    const whatsappMessage = formatWhatsAppMessage(formData, currentMessage);
    
    // Tenta enviar diretamente via API
    const result = await sendWhatsAppMessage(whatsappMessage);

    if (result.success) {
      // Mensagem enviada com sucesso via API
      const successMessage: Message = {
        id: messages.length + 2,
        text: '✅ Mensagem enviada com sucesso! Você receberá uma resposta em breve.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, successMessage]);
      setCurrentMessage('');
    } else {
      // Fallback: abre WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: result.error 
          ? `⚠️ Não foi possível enviar automaticamente. ${result.error} Abri o WhatsApp para você enviar manualmente.`
          : '✅ Abri o WhatsApp para você enviar a mensagem. Se não abrir automaticamente, clique no link abaixo.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setCurrentMessage('');
    }

    setIsSending(false);
  };

  const formatWhatsAppMessage = (form: typeof formData, message: string): string => {
    let formatted = `*Nova Mensagem do Site*\n\n`;
    formatted += `*Nome:* ${form.name}\n`;
    formatted += `*Telefone:* ${form.phone}\n`;
    if (form.service) {
      formatted += `*Serviço de Interesse:* ${form.service}\n`;
    }
    formatted += `\n*Mensagem:*\n${message}`;
    return formatted;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearForm = () => {
    setFormData({ name: '', phone: '', service: '' });
    setCurrentMessage('');
    setMessages([{
      id: 1,
      text: 'Olá! 👋 Bem-vindo ao chat. Preencha suas informações abaixo e envie sua mensagem direto para meu WhatsApp!',
      sender: 'bot',
      timestamp: new Date()
    }]);
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
            Converse comigo diretamente pelo WhatsApp! Preencha suas informações e envie sua mensagem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Chat Interface */}
          <div className="space-y-8">
            <div className="glass-card p-8 flex flex-col" style={{ height: '600px' }}>
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-glass-overlay">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary font-mono">Chat WhatsApp</h3>
                    <p className="text-sm text-text-secondary font-mono">Mensagens diretas</p>
                  </div>
                </div>
                {messages.length > 1 && (
                  <button
                    onClick={clearForm}
                    className="p-2 hover:bg-glass-overlay rounded-lg transition-colors"
                    title="Limpar chat"
                  >
                    <X className="w-5 h-5 text-text-secondary" />
                  </button>
                )}
              </div>

              {/* Messages Area */}
              <div ref={messagesContainerRef} className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2 chat-scroll">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
                          : 'bg-glass-overlay text-text-primary border border-glass-overlay'
                      }`}
                    >
                      <p className="font-mono text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-2 font-mono ${
                        message.sender === 'user' ? 'text-white/70' : 'text-text-secondary'
                      }`}>
                        {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* User Info Form */}
              <div className="space-y-4 mb-4 pb-4 border-t border-glass-overlay pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-2 font-mono">
                      <User className="w-3 h-3 inline mr-1" />
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-glass-overlay border border-glass-overlay rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono text-sm"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-text-secondary mb-2 font-mono">
                      <Phone className="w-3 h-3 inline mr-1" />
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-glass-overlay border border-glass-overlay rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono text-sm"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-text-secondary mb-2 font-mono">
                    <Briefcase className="w-3 h-3 inline mr-1" />
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-glass-overlay border border-glass-overlay rounded-lg text-text-primary focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 font-mono text-sm"
                  >
                    <option value="" className="bg-bg-primary text-text-primary">Selecione um serviço</option>
                    {services.map(service => (
                      <option key={service} value={service} className="bg-bg-primary text-text-primary">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-2">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isFormComplete ? "Digite sua mensagem..." : "Preencha nome e telefone primeiro"}
                  disabled={!isFormComplete}
                  rows={2}
                  className="flex-1 px-4 py-3 bg-glass-overlay border border-glass-overlay rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim() || !isFormComplete || isSending}
                  className="neon-button-chat disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center px-4"
                  title="Enviar para WhatsApp"
                >
                  {isSending ? (
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6 font-mono">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 font-mono">WhatsApp</h4>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary font-mono hover:text-cyan-400 transition-colors"
                    >
                      +55 (47) 99677-2336
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 font-mono">Localização</h4>
                    <p className="text-text-secondary font-mono">Joinville, SC</p>
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
          </div>
        </div>
      </div>

      <style jsx>{`
        .futuristic-title {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
        }
        
        .light .futuristic-title {
          text-shadow: 0 0 30px rgba(0, 136, 204, 0.2);
        }
        
        .text-text-primary {
          color: var(--text-primary);
        }
        
        .text-text-secondary {
          color: var(--text-secondary);
        }
        
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: var(--shadow-glass);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          border-color: var(--neon-cyan);
          box-shadow: var(--shadow-neon);
        }
        
        .neon-button-chat {
          position: relative;
          background: transparent;
          border: 2px solid var(--neon-cyan);
          color: var(--neon-cyan);
          padding: 12px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          transition: all 0.3s ease;
          overflow: hidden;
          min-width: 48px;
        }
        
        .neon-button-chat:hover:not(:disabled) {
          background: var(--neon-cyan);
          color: var(--bg-primary);
          box-shadow: var(--shadow-neon);
        }
        
        .chat-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 212, 255, 0.3) transparent;
        }
        
        .chat-scroll::-webkit-scrollbar {
          width: 6px;
        }
        
        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .chat-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 212, 255, 0.3);
          border-radius: 3px;
        }
        
        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default FuturisticCTA;