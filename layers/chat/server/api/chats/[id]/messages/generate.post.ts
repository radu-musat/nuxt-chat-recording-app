import { getMessagesByChatId, createMessageForChat } from '#layers/chat/server/repository/chatRepository.ts';
import { createOpenAIModel, generateChatResponse } from '#layers/chat/server/services/ai-service.ts';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing chat ID',
    });
  }

  const history = getMessagesByChatId(id);
  const openai = createOpenAIModel(
    useRuntimeConfig().openaiApiKey,
  );

  const reply = await generateChatResponse(openai, history);
  if (!reply) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to generate chat reply',
    });
  }

  return createMessageForChat({
    chatId: id,
    content: reply,
    role: 'assistant',
  });
});
