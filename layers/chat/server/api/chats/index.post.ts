import { createChat } from '#layers/chat/server/repository/chatRepository.ts';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const { title, projectId } = body;
  return createChat({
    title,
    projectId,
  });
});
