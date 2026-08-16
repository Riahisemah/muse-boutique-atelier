import { createServerFn } from "@tanstack/react-start";

import { sendOrderEmails } from "./orderMailer.server";
import type { OrderRequest } from "./orderService";

export const submitOrderEmail = createServerFn({ method: "POST" })
  .inputValidator((data: OrderRequest) => {
    if (!data || !data.orderNumber) throw new Error("Invalid order data");
    return data;
  })
  .handler(async ({ data }) => {
    await sendOrderEmails(data);
    return { ok: true as const };
  });
