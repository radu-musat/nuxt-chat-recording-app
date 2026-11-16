import {
  getMessagesByChatId,
  createMessageForChat,
} from '../../../../repository/chatRepository';
import {
  createOpenAIModel,
  generateChatResponse,
} from '../../../../services/ai-service';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing chat ID',
    });
  }

  const history = await getMessagesByChatId(id);

  const openai = createOpenAIModel(
    useRuntimeConfig().openaiApiKey,
  );
  const reply = await generateChatResponse(openai, history);

  if (!reply) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No ai reply available',
    });
  }

  return createMessageForChat({
    chatId: id,
    content: reply,
    role: 'assistant',
  });
});
