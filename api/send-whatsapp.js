// Exemplo de função serverless para enviar mensagens WhatsApp
// Pode ser usado no Vercel, Netlify Functions, ou qualquer plataforma serverless

// Para usar com Evolution API:
export default async function handler(req, res) {
  // Permitir apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { number, message, name, phone, service } = req.body;

  // Validar dados
  if (!number || !message) {
    return res.status(400).json({ error: 'Número e mensagem são obrigatórios' });
  }

  try {
    // Exemplo usando Evolution API
    // Substitua pela URL da sua instância Evolution API
    const evolutionApiUrl = process.env.EVOLUTION_API_URL || 'http://localhost:8080';
    const instanceName = process.env.EVOLUTION_INSTANCE_NAME || 'instancia01';
    const apiKey = process.env.EVOLUTION_API_KEY;

    const response = await fetch(`${evolutionApiUrl}/message/sendText/${instanceName}`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        number: number,
        textMessage: {
          text: message
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Erro na API: ${errorData}`);
    }

    const data = await response.json();
    
    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso',
      data: data
    });

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao enviar mensagem',
      details: error.message
    });
  }
}

// Para usar com WhatsApp Cloud API (Meta):
/*
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { number, message } = req.body;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: number,
          type: 'text',
          text: {
            body: message
          }
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Erro ao enviar mensagem');
    }

    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso',
      data: data
    });

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao enviar mensagem',
      details: error.message
    });
  }
}
*/
