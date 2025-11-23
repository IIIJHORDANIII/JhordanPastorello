# Configuração de Envio Direto de Mensagens WhatsApp

Este guia explica como configurar o envio direto de mensagens para WhatsApp sem precisar abrir o aplicativo.

## Opções Disponíveis

### Opção 1: Evolution API (Recomendado - Gratuito e Open Source)

A Evolution API é uma solução gratuita e open source que permite enviar mensagens diretamente.

1. **Instalar Evolution API:**
   ```bash
   docker run --name evolution-api -d \
     -p 8080:8080 \
     -e AUTHENTICATION_API_KEY=SUA_CHAVE_AQUI \
     -e CONFIG_SESSION_PHONE_CLIENT=SeuNome \
     -e CONFIG_SESSION_PHONE_NAME=instancia01 \
     atendai/evolution-api:latest
   ```

2. **Configurar no projeto:**
   Crie um arquivo `.env` na raiz do projeto:
   ```
   VITE_WHATSAPP_API_URL=http://localhost:8080/message/sendText/instancia01
   ```

3. **Autenticação:**
   Adicione o header de autenticação no código se necessário.

### Opção 2: WhatsApp Cloud API (Meta - Oficial)

1. **Criar conta no Meta for Developers:**
   - Acesse: https://developers.facebook.com/
   - Crie um app do tipo "Business"
   - Configure o WhatsApp Business API

2. **Obter tokens:**
   - Access Token
   - Phone Number ID
   - Business Account ID

3. **Configurar no projeto:**
   ```
   VITE_WHATSAPP_API_URL=https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages
   ```

### Opção 3: Serviços de Terceiros (Pagos)

#### Twilio
- Site: https://www.twilio.com/whatsapp
- Custo: ~$0.005 por mensagem
- Configuração simples via dashboard

#### MessageBird
- Site: https://www.messagebird.com/
- Custo: Variável
- API REST simples

### Opção 4: Webhook Gratuito (Zapier/Make.com)

1. **Criar conta no Zapier ou Make.com**
2. **Criar um webhook que recebe dados e envia para WhatsApp**
3. **Configurar a URL do webhook:**
   ```
   VITE_WHATSAPP_API_URL=https://hooks.zapier.com/hooks/catch/SEU_WEBHOOK_ID/
   ```

## Configuração Rápida com Backend Simples

Se você quiser criar seu próprio backend, aqui está um exemplo usando Node.js:

### Backend (Express.js)

```javascript
// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-whatsapp', async (req, res) => {
  const { number, message } = req.body;
  
  // Exemplo usando Evolution API
  try {
    const response = await axios.post('http://localhost:8080/message/sendText/instancia01', {
      number: number,
      textMessage: { text: message }
    }, {
      headers: {
        'apikey': 'SUA_CHAVE_AQUI',
        'Content-Type': 'application/json'
      }
    });
    
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

### Configurar no Frontend

No arquivo `.env`:
```
VITE_WHATSAPP_API_URL=http://localhost:3000/send-whatsapp
```

## Formato da Mensagem

O código envia os seguintes dados para a API:

```json
{
  "number": "5547996772336",
  "message": "Mensagem formatada",
  "name": "Nome do usuário",
  "phone": "Telefone do usuário",
  "service": "Serviço selecionado"
}
```

## Notas Importantes

1. **Segurança:** Nunca exponha tokens ou chaves de API no frontend. Use variáveis de ambiente.
2. **CORS:** Certifique-se de que sua API permite requisições do seu domínio.
3. **Rate Limiting:** Implemente limites de envio para evitar spam.
4. **Validação:** Valide os dados antes de enviar.

## Testando

Após configurar, teste enviando uma mensagem pelo chat. Se a API estiver configurada corretamente, você verá a mensagem "✅ Mensagem enviada com sucesso!" sem abrir o WhatsApp.
