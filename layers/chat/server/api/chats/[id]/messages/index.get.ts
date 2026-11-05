import { getMessagesByChatId } from '../../../../repository/chatRepository';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing chat ID',
    });
  }

  const messages = getMessagesByChatId(id);
  return messages;
});
