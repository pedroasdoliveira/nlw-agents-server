import type { FastifyInstance } from "fastify";
import { getRoomsRoute } from "./rooms/get-rooms.ts";

export const appRoutes = async (app: FastifyInstance) => {
    // rooms
    await app.register(getRoomsRoute)
}