import { getChatById } from '../../../repository/chatRepository';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing chat ID',
    });
  }

  return getChatById(id);
});
