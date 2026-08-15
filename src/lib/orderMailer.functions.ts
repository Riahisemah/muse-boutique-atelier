import { createServerFn } from "@tanstack/react-start";

import { sendOrderEmails } from "./orderMailer.server";
import type { OrderRequest } from "./orderService";

export const submitOrderEmail = createServerFn({ method: "POST" })
  .validator((data: OrderRequest) => data)
  .handler(async ({ data }) => {
    await sendOrderEmails(data);
    return { ok: true };
  });
