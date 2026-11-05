import { getAllChats } from '#layers/chat/server/repository/chatRepository.ts';

export default defineEventHandler(async (_event): Promise<Chat[]> => {
  return getAllChats();
});
