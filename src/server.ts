import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { appRoutes } from "./http/routes/index.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(appRoutes);

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log("Server is running!");
  });
