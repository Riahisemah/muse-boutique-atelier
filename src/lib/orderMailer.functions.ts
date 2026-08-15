import { createServerFn } from "@tanstack/react-start";

import { sendOrderEmails } from "./orderMailer.server";
import type { OrderRequest } from "./orderService";

export const submitOrderEmail = createServerFn({ method: "POST" })
  .handler(async (ctx: { data: OrderRequest }) => {
    const data = ctx.data;
    console.log("[orderMailer] handler received:", data?.orderNumber);
    if (!data || !data.orderNumber) {
      console.error("[orderMailer] Invalid data:", data);
      throw new Error("Invalid order data received");
    }
    try {
      await sendOrderEmails(data);
      console.log("[orderMailer] emails sent");
    } catch (error) {
      console.error("[orderMailer] failed:", error);
      throw error;
    }
    return { ok: true };
  });
