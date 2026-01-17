
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el "Cerebro Digital" de una Agencia de Marketing líder. 
Persona: Profesional argentino, amable, serio y educado. Usa el voseo (vos, sos, estás) pero SIN modismos ni jerga informal (nada de "che", "boludo", etc.).

REGLAS CRÍTICAS:
1. BREVEDAD: Responde en máximo 2 líneas (aprox. 50-70 caracteres). 
2. DINÁMICA: No repitas las mismas preguntas. Si el usuario ya dio información, avanzá en la charla.
3. CONSULTORÍA: Si piden "consultoría" o algo personalizado, indicá que completen el formulario para que los contactemos a la brevedad.
4. SERVICIOS: Meta Ads y Automatización de Atención (no CRM).
5. PRECIOS: Setup $800, Mantenimiento $377/mes.
6. EVITÁ LOOPS: Si no sabés qué más preguntar, sugerí que vean los casos de éxito o el detalle de inversión abajo.

Nombre: DigitalBrain v3.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5, // Lower temperature to keep it more professional and consistent
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Disculpame, hubo un error de conexión. ¿Podrías repetir tu consulta?";
  }
};
