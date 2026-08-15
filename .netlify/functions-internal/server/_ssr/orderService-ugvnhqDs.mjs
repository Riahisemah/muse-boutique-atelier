import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BA3K1D_y.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BpgqxZjr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orderService-ugvnhqDs.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitOrderEmail = createServerFn({ method: "POST" }).handler(createSsrRpc("ae3ba7bdbb09ad6bb20907432cba8c71304ffe0cddf329af7170812742f6cc6a"));
var ORDER_REF_KEY = "mn.lastOrderRef";
var ORDER_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
/** Generates a temporary frontend order reference: ORD-2026-XXXXXX */
function generateOrderNumber() {
	let suffix = "";
	for (let i = 0; i < 6; i++) suffix += ORDER_CHARS[Math.floor(Math.random() * 32)];
	return `ORD-2026-${suffix}`;
}
function saveOrderReference(orderNumber) {
	sessionStorage.setItem(ORDER_REF_KEY, orderNumber);
}
function getOrderReference() {
	return sessionStorage.getItem(ORDER_REF_KEY);
}
function clearOrderReference() {
	sessionStorage.removeItem(ORDER_REF_KEY);
}
/**
* Submits an order request through the server (SMTP via nodemailer).
* Sends the admin notification and the client confirmation email.
*/
async function submitOrder(order) {
	await submitOrderEmail(order);
}
//#endregion
export { submitOrder as a, saveOrderReference as i, generateOrderNumber as n, getOrderReference as r, clearOrderReference as t };
