import { createServerFn } from "@tanstack/react-start";

import { sendOrderEmails } from "./orderMailer.server";
import type { OrderRequest } from "./orderService";

export const submitOrderEmail = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: OrderRequest }) => {
    console.log("[orderMailer] handler called, orderNumber:", data?.orderNumber);
    if (!data || !data.orderNumber) {
      console.error("[orderMailer] bad data:", data);
      throw new Error("Invalid order data");
    }
    await sendOrderEmails(data);
    return { ok: true };
  });
