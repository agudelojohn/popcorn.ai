const requestCreator = () => {
  const mockRes = {
    id: "chatcmpl-C8CWZ0zpEWtSwDM4MpJuDjRoGQ6Sv",
    object: "chat.completion",
    created: 1756070803,
    model: "gpt-5-nano-2025-08-07",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content:
            "- El señor de los anillos: La Comunidad del Anillo, 2001 - Peter Jackson\n- Las crónicas de Narnia: El león, la bruja y el armario, 2005 - Andrew Adamson\n- El laberinto del fauno, 2006 - Guillermo del Toro\n- Avatar, 2009 - James Cameron\n- Cómo entrenar a tu dragón, 2010 - Chris Sanders y Dean DeBlois\n- El señor de los anillos: La Comunidad del Anillo, 2001 - Peter Jackson\n- Las crónicas de Narnia: El león, la bruja y el armario, 2005 - Andrew Adamson\n- El laberinto del fauno, 2006 - Guillermo del Toro\n- Avatar, 2009 - James Cameron\n- Cómo entrenar a tu dragón, 2010 - Chris Sanders y Dean DeBlois\n- El señor de los anillos: La Comunidad del Anillo, 2001 - Peter Jackson\n- Las crónicas de Narnia: El león, la bruja y el armario, 2005 - Andrew Adamson\n- El laberinto del fauno, 2006 - Guillermo del Toro\n- Avatar, 2009 - James Cameron\n- Cómo entrenar a tu dragón, 2010 - Chris Sanders y Dean DeBlois",
          refusal: null,
          annotations: [],
        },
        finish_reason: "stop",
      },
    ],
    usage: {
      prompt_tokens: 57,
      completion_tokens: 3113,
      total_tokens: 3170,
      prompt_tokens_details: {
        cached_tokens: 0,
        audio_tokens: 0,
      },
      completion_tokens_details: {
        reasoning_tokens: 3008,
        audio_tokens: 0,
        accepted_prediction_tokens: 0,
        rejected_prediction_tokens: 0,
      },
    },
    service_tier: "default",
    system_fingerprint: null,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRes);
    }, 2000);
  });
};


export default requestCreator;