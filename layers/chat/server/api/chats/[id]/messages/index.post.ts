import { createMessageForChat } from '../../../../repository/chatRepository';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const body = await readBody(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing chat ID',
    });
  }
  return createMessageForChat({
    chatId: id,
    content: body.content,
    role: body.role,
  });
});
