import { Hono } from "hono";

type Env = {
  Bindings: Record<string, string>;
};

const app = new Hono<Env>();

export default app;
