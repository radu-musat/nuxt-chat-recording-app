import { updateChat } from '#layers/chat/server/repository/chatRepository.ts';
import { createOpenAIModel, generateChatTitle } from '#layers/chat/server/services/ai-service.ts';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { message } = await readBody(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing chat ID',
    });
  }

  const model = createOpenAIModel(
    useRuntimeConfig().openaiApiKey,
  );
  const title = await generateChatTitle(model, message);

  return updateChat(id, { title });
});
