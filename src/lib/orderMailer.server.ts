import nodemailer from "nodemailer";
import type { OrderRequest } from "./orderService";

interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  fromName: string;
  receiverEmail: string;
}

function getSmtpConfig(): SmtpConfig {
  const user = process.env.SMTP_USER ?? "";
  const from = process.env.SMTP_FROM_EMAIL ?? user;
  return {
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? "465"),
    secure: (process.env.SMTP_SECURE ?? "true") === "true",
    user,
    pass: process.env.SMTP_PASS ?? "",
    from,
    fromName: process.env.SMTP_FROM_NAME ?? "El Wafa Création",
    receiverEmail: process.env.ORDER_RECEIVER_EMAIL ?? user,
  };
}

export function isSmtpConfigured(): boolean {
  const { user, pass } = getSmtpConfig();
  return Boolean(user && pass);
}

function renderLine(line: OrderRequest["lines"][number]): string {
  return [
    `<div style="padding:10px 0;border-bottom:1px solid #ece5dc;">`,
    `<div style="font-weight:600;font-size:13px;">${escapeHtml(line.name)}</div>`,
    `<div style="font-size:12px;color:#7a7a7a;margin-top:2px;">Taille : ${escapeHtml(line.size)} &nbsp;·&nbsp; Couleur : ${escapeHtml(line.color)}</div>`,
    `<div style="font-size:12px;color:#7a7a7a;">Quantité : ${line.qty} &nbsp;·&nbsp; ${escapeHtml(line.lineTotal)}</div>`,
    `</div>`,
  ].join("");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildAdminHtml(order: OrderRequest): string {
  const { customer, shipping, totals, note } = order;
  const linesHtml = order.lines.map(renderLine).join("");

  return `
<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#f7f3ee;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
      <div style="padding:32px 40px;background:#1c1917;color:#f5efe6;">
        <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;">El Wafa Création</div>
        <div style="font-size:22px;margin-top:8px;">Nouvelle demande de commande</div>
        <div style="font-size:13px;margin-top:6px;opacity:.8;">${escapeHtml(order.orderNumber)}</div>
      </div>
      <div style="padding:32px 40px;font-family:Helvetica,Arial,sans-serif;">
        <div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#8a7f74;">Client</div>
        <table style="width:100%;margin-top:8px;font-size:13px;border-collapse:collapse;">
          <tr><td style="padding:6px 0;color:#7a7a7a;">Nom</td><td style="padding:6px 0;">${escapeHtml(customer.firstName)} ${escapeHtml(customer.lastName)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a7a7a;">Téléphone</td><td style="padding:6px 0;">${escapeHtml(customer.phone)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a7a7a;">Email</td><td style="padding:6px 0;">${escapeHtml(customer.email)}</td></tr>
        </table>
        <div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#8a7f74;margin-top:24px;">Livraison</div>
        <table style="width:100%;margin-top:8px;font-size:13px;border-collapse:collapse;">
          <tr><td style="padding:6px 0;color:#7a7a7a;">Pays</td><td style="padding:6px 0;">${escapeHtml(shipping.country)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a7a7a;">Ville</td><td style="padding:6px 0;">${escapeHtml(shipping.city)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a7a7a;">Adresse</td><td style="padding:6px 0;">${escapeHtml(shipping.address)} ${escapeHtml(shipping.postalCode)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a7a7a;">Mode de livraison</td><td style="padding:6px 0;">${escapeHtml(shipping.method)}</td></tr>
        </table>
        <div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#8a7f74;margin-top:24px;">Commande</div>
        <div style="margin-top:8px;font-size:13px;">${linesHtml}</div>
        <div style="margin-top:16px;padding-top:12px;border-top:2px solid #1c1917;font-size:13px;">
          <div style="display:flex;justify-content:space-between;padding:4px 0;">Sous-total : <span>${escapeHtml(totals.subtotal)}</span></div>
          <div style="display:flex;justify-content:space-between;padding:4px 0;">Livraison : <span>${escapeHtml(totals.shipping)}</span></div>
          <div style="display:flex;justify-content:space-between;padding:6px 0;font-weight:700;font-size:15px;">Total : <span>${escapeHtml(totals.total)} ${escapeHtml(totals.currency)}</span></div>
        </div>
        <div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#8a7f74;margin-top:24px;">Commentaire</div>
        <div style="margin-top:8px;font-size:13px;line-height:1.5;">${escapeHtml(note || "—")}</div>
        <div style="margin-top:28px;padding:14px;background:#f7f3ee;font-size:12px;color:#5c5249;line-height:1.6;">
          <strong>Statut :</strong> Demande reçue.<br/>
          Contacter le client par téléphone pour confirmer la commande.
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function buildAdminText(order: OrderRequest): string {
  const { customer, shipping, totals, note } = order;
  const products = order.lines
    .map(
      (l) =>
        `${l.qty}x ${l.name}\nTaille: ${l.size}\nCouleur: ${l.color}\nPrix: ${l.lineTotal}`,
    )
    .join("\n\n");

  return [
    "NOUVELLE DEMANDE DE COMMANDE",
    "",
    "Référence :",
    order.orderNumber,
    "",
    "CLIENT",
    `Nom : ${customer.firstName} ${customer.lastName}`,
    `Téléphone : ${customer.phone}`,
    `Email : ${customer.email}`,
    "",
    "LIVRAISON",
    `Pays : ${shipping.country}`,
    `Ville : ${shipping.city}`,
    `Adresse : ${shipping.address} ${shipping.postalCode}`,
    `Mode : ${shipping.method}`,
    "",
    "COMMANDE",
    products,
    "",
    "TOTAL",
    `Sous-total : ${totals.subtotal}`,
    `Livraison : ${totals.shipping}`,
    `Total : ${totals.total} ${totals.currency}`,
    "",
    "COMMENTAIRE",
    note || "—",
    "",
    "STATUT",
    "Demande reçue. Contacter le client par téléphone pour confirmer la commande.",
  ].join("\n");
}

const CLIENT_CONFIRMATION: Record<
  OrderRequest["locale"],
  { subject: (orderNumber: string) => string; html: (firstName: string, orderNumber: string) => string }
> = {
  fr: {
    subject: (n) => `Confirmation de votre demande — ${n}`,
    html: (first, n) => `
      <div style="max-width:600px;margin:0 auto;background:#ffffff;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
        <div style="padding:32px 40px;background:#1c1917;color:#f5efe6;">
          <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;">El Wafa Création</div>
          <div style="font-size:20px;margin-top:8px;">Nous avons reçu votre demande</div>
        </div>
        <div style="padding:32px 40px;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;">
          <p>Bonjour ${escapeHtml(first)},</p>
          <p>Nous avons bien reçu votre demande de commande.</p>
          <p>Référence : <strong>${escapeHtml(n)}</strong></p>
          <p>Notre équipe vous contactera prochainement par téléphone afin de confirmer les détails de votre commande.</p>
          <p>Merci pour votre confiance.</p>
        </div>
      </div>`,
  },
  it: {
    subject: (n) => `Conferma della tua richiesta — ${n}`,
    html: (first, n) => `
      <div style="max-width:600px;margin:0 auto;background:#ffffff;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
        <div style="padding:32px 40px;background:#1c1917;color:#f5efe6;">
          <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;">El Wafa Création</div>
          <div style="font-size:20px;margin-top:8px;">Abbiamo ricevuto la tua richiesta</div>
        </div>
        <div style="padding:32px 40px;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;">
          <p>Ciao ${escapeHtml(first)},</p>
          <p>Abbiamo ricevuto la tua richiesta d'ordine.</p>
          <p>Riferimento: <strong>${escapeHtml(n)}</strong></p>
          <p>Il nostro team ti contatterà telefonicamente per confermare i dettagli del tuo ordine.</p>
          <p>Grazie per la tua fiducia.</p>
        </div>
      </div>`,
  },
  ar: {
    subject: (n) => `تأكيد طلبك — ${n}`,
    html: (first, n) => `
      <div dir="rtl" style="max-width:600px;margin:0 auto;background:#ffffff;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
        <div style="padding:32px 40px;background:#1c1917;color:#f5efe6;">
          <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;">El Wafa Création</div>
          <div style="font-size:20px;margin-top:8px;">لقد استلمنا طلبك</div>
        </div>
        <div style="padding:32px 40px;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.8;text-align:right;">
          <p>مرحباً ${escapeHtml(first)}،</p>
          <p>لقد استلمنا طلبك بنجاح.</p>
          <p>المرجع: <strong>${escapeHtml(n)}</strong></p>
          <p>سيتصل بك فريقنا قريباً هاتفياً لتأكيد تفاصيل طلبك.</p>
          <p>شكراً لثقتك.</p>
        </div>
      </div>`,
  },
};

export async function sendOrderEmails(order: OrderRequest): Promise<void> {
  const cfg = getSmtpConfig();

  if (!cfg.user || !cfg.pass) {
    throw new Error("SMTP is not configured. Please set SMTP_USER and SMTP_PASS.");
  }
  if (!cfg.receiverEmail) {
    throw new Error("Order receiver email is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  await transporter.sendMail({
    from: `"${cfg.fromName}" <${cfg.from}>`,
    to: cfg.receiverEmail,
    replyTo: order.customer.email,
    subject: `Nouvelle demande de commande — ${order.orderNumber}`,
    text: buildAdminText(order),
    html: buildAdminHtml(order),
  });

  const clientMsg = CLIENT_CONFIRMATION[order.locale];
  await transporter.sendMail({
    from: `"${cfg.fromName}" <${cfg.from}>`,
    to: order.customer.email,
    subject: clientMsg.subject(order.orderNumber),
    html: clientMsg.html(order.customer.firstName, order.orderNumber),
  });
}
