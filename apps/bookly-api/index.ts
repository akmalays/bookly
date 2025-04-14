import {Hono} from "hono";

import {serve} from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Hello from Hono backend!"));

serve(app);
console.log("Hono server should be running now.");
