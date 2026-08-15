import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./i18n-D0jOfy2F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as getProduct } from "./products-CjUUzcvf.mjs";
import { n as useStore } from "./store-pJzmorlc.mjs";
import { a as useMarket, i as shippingFor, t as MARKETS } from "./markets-D3VhIKGD.mjs";
import { a as submitOrder, i as saveOrderReference, n as generateOrderNumber } from "./orderService-ugvnhqDs.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BStNM6VS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var orderFormSchema = objectType({
	firstName: stringType().trim().min(1, "required"),
	lastName: stringType().trim().min(1, "required"),
	email: stringType().trim().min(1, "required").email("invalidEmail"),
	phone: stringType().trim().min(1, "required"),
	countryCode: enumType([
		"TN",
		"FR",
		"IT"
	]),
	city: stringType().trim().min(1, "required"),
	address: stringType().trim().min(1, "required"),
	postalCode: stringType().trim(),
	note: stringType().trim()
});
function validatePhone(phone, countryCode) {
	const cleaned = phone.replace(/[\s\-().]/g, "");
	if (cleaned.length < 8) return "invalidPhone";
	switch (countryCode) {
		case "TN":
			if (!/^(\+216|216|0)?[2-9]\d{7}$/.test(cleaned)) return "invalidPhone";
			break;
		case "FR":
			if (!/^(\+33|33|0)[1-9]\d{8}$/.test(cleaned)) return "invalidPhone";
			break;
		case "IT":
			if (!/^(\+39|39|0)?3\d{8,9}$/.test(cleaned) && !/^(\+39|39|0)?0\d{6,10}$/.test(cleaned)) return "invalidPhone";
			break;
	}
	return null;
}
function validateOrderForm(values) {
	const result = orderFormSchema.safeParse(values);
	const errors = {};
	if (!result.success) for (const issue of result.error.issues) {
		const field = issue.path[0];
		if (field && !errors[field]) errors[field] = issue.message;
	}
	const phoneError = validatePhone(values.phone, values.countryCode);
	if (phoneError) errors.phone = phoneError;
	return errors;
}
var EMPTY_FORM = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	countryCode: "FR",
	city: "",
	address: "",
	postalCode: "",
	note: ""
};
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-destructive",
				children: error
			}) : null
		]
	});
}
function inputClass(hasError) {
	return cn("mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground", hasError && "border-destructive");
}
function CheckoutPage() {
	const { t, tl, locale } = useI18n();
	const { market, setMarket, formatRaw, convert, currency } = useMarket();
	const { cart, subtotal, clearCart } = useStore();
	const navigate = useNavigate();
	const methods = shippingFor(market.code);
	const [shippingId, setShippingId] = (0, import_react.useState)(methods[0].id);
	const [form, setForm] = (0, import_react.useState)({
		...EMPTY_FORM,
		countryCode: market.code
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(false);
	const method = methods.find((m) => m.id === shippingId) ?? methods[0];
	const subtotalLocal = convert(subtotal);
	const shippingAmount = method.freeOver !== null && subtotalLocal >= method.freeOver ? 0 : method.price;
	const totalLocal = subtotalLocal + shippingAmount;
	(0, import_react.useEffect)(() => {
		setForm((prev) => ({
			...prev,
			countryCode: market.code
		}));
		setShippingId(shippingFor(market.code)[0].id);
	}, [market.code]);
	const errorMessage = (0, import_react.useCallback)((key) => {
		if (!key) return void 0;
		if (key === "required") return t("checkout.error.required");
		if (key === "invalidEmail") return t("checkout.error.invalidEmail");
		if (key === "invalidPhone") return t("checkout.error.invalidPhone");
		return key;
	}, [t]);
	const orderLines = (0, import_react.useMemo)(() => {
		return cart.map((line) => {
			const p = getProduct(line.productId);
			if (!p) return null;
			const color = p.colors.find((c) => c.id === line.colorId);
			const unitLocal = convert(p.price);
			const lineTotal = unitLocal * line.qty;
			return {
				line,
				product: p,
				color,
				unitPrice: formatRaw(unitLocal),
				lineTotal: formatRaw(lineTotal)
			};
		}).filter(Boolean);
	}, [
		cart,
		convert,
		formatRaw
	]);
	const updateField = (field, value) => {
		setForm((prev) => ({
			...prev,
			[field]: value
		}));
		setErrors((prev) => ({
			...prev,
			[field]: void 0
		}));
		setSubmitError(false);
	};
	const handleCountryChange = (code) => {
		setMarket(code);
		updateField("countryCode", code);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (submitting || cart.length === 0) return;
		const validationErrors = validateOrderForm(form);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setSubmitting(true);
		setSubmitError(false);
		const orderNumber = generateOrderNumber();
		const marketEntry = MARKETS.find((m) => m.code === form.countryCode);
		const lines = orderLines.map(({ line, product, color, unitPrice, lineTotal }) => ({
			name: tl(product.name),
			size: line.size,
			color: color ? tl(color.name) : "—",
			qty: line.qty,
			unitPrice,
			lineTotal
		}));
		try {
			await submitOrder({
				orderNumber,
				customer: {
					firstName: form.firstName.trim(),
					lastName: form.lastName.trim(),
					email: form.email.trim(),
					phone: form.phone.trim()
				},
				shipping: {
					country: tl(marketEntry.label),
					countryCode: form.countryCode,
					city: form.city.trim(),
					address: form.address.trim(),
					postalCode: form.postalCode.trim(),
					method: tl(method.label)
				},
				lines,
				totals: {
					subtotal: formatRaw(subtotalLocal),
					shipping: shippingAmount === 0 ? t("cart.free") : formatRaw(shippingAmount),
					total: formatRaw(totalLocal),
					currency
				},
				note: form.note.trim(),
				locale,
				orderDate: (/* @__PURE__ */ new Date()).toLocaleString(locale === "ar" ? "ar-TN" : locale === "it" ? "it-IT" : "fr-FR")
			});
			saveOrderReference(orderNumber);
			clearCart();
			navigate({ to: "/order/confirmation" });
		} catch {
			setSubmitError(true);
			setSubmitting(false);
		}
	};
	if (cart.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-6 py-32 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("checkout.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: t("cart.empty")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "link-underline mt-6 inline-block text-xs uppercase",
				children: t("cart.continue")
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1100px] px-6 py-14 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: t("checkout.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: t("checkout.subtitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-10 grid gap-12 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 space-y-10 lg:order-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow mb-6",
							children: t("checkout.section.personal")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.firstName"),
									error: errorMessage(errors.firstName),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.firstName,
										onChange: (e) => updateField("firstName", e.target.value),
										className: inputClass(!!errors.firstName),
										autoComplete: "given-name"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.lastName"),
									error: errorMessage(errors.lastName),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.lastName,
										onChange: (e) => updateField("lastName", e.target.value),
										className: inputClass(!!errors.lastName),
										autoComplete: "family-name"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.email"),
									error: errorMessage(errors.email),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: form.email,
										onChange: (e) => updateField("email", e.target.value),
										className: inputClass(!!errors.email),
										autoComplete: "email"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.phone"),
									error: errorMessage(errors.phone),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										value: form.phone,
										onChange: (e) => updateField("phone", e.target.value),
										className: inputClass(!!errors.phone),
										autoComplete: "tel"
									})
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow mb-6",
							children: t("checkout.section.delivery")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.country"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: form.countryCode,
										onChange: (e) => handleCountryChange(e.target.value),
										className: inputClass(),
										children: MARKETS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: m.code,
											children: [
												tl(m.label),
												" — ",
												m.currency
											]
										}, m.code))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.city"),
									error: errorMessage(errors.city),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.city,
										onChange: (e) => updateField("city", e.target.value),
										className: inputClass(!!errors.city),
										autoComplete: "address-level2"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("checkout.address"),
										error: errorMessage(errors.address),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.address,
											onChange: (e) => updateField("address", e.target.value),
											className: inputClass(!!errors.address),
											autoComplete: "street-address"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("checkout.zip"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.postalCode,
										onChange: (e) => updateField("postalCode", e.target.value),
										className: inputClass(),
										autoComplete: "postal-code"
									})
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow mb-6",
							children: t("checkout.section.shipping")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: cn("flex cursor-pointer items-center justify-between border p-4 text-sm", shippingId === m.id ? "border-foreground" : "border-border"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										checked: shippingId === m.id,
										onChange: () => setShippingId(m.id),
										className: "accent-foreground"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: tl(m.label)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: tl(m.eta)
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.freeOver !== null && subtotalLocal >= m.freeOver ? t("cart.free") : formatRaw(m.price) })]
							}, m.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow mb-6",
							children: t("checkout.section.note")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("checkout.comment"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.note,
								onChange: (e) => updateField("note", e.target.value),
								rows: 3,
								className: "mt-2 w-full resize-none border border-border bg-transparent p-3 text-sm outline-none focus:border-foreground"
							})
						})] }),
						submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-destructive/30 bg-destructive/5 p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("checkout.error.submit") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: submitting,
								className: "mt-3 border border-border px-6 py-2.5 text-[11px] tracking-[0.18em] uppercase",
								children: t("checkout.retry")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: submitting,
							className: "w-full bg-foreground px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase disabled:opacity-60 sm:w-auto",
							children: submitting ? t("checkout.submitting") : t("checkout.submit")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "order-1 h-fit border border-border p-6 lg:order-2 lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							children: t("checkout.summary")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: orderLines.map(({ line, product, color, unitPrice, lineTotal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 border-b border-border pb-4 last:border-0 last:pb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.images[0],
									alt: tl(product.name),
									width: 64,
									height: 80,
									className: "size-16 shrink-0 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: tl(product.name)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												t("product.size"),
												": ",
												line.size,
												color ? ` · ${t("product.color")}: ${tl(color.name)}` : ""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												t("checkout.qty"),
												": ",
												line.qty,
												" · ",
												t("checkout.unitPrice"),
												": ",
												unitPrice
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-medium",
											children: lineTotal
										})
									]
								})]
							}, `${line.productId}-${line.size}-${line.colorId}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-2 border-t border-border pt-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: t("cart.subtotal")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatRaw(subtotalLocal) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: t("cart.shipping")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shippingAmount === 0 ? t("cart.free") : formatRaw(shippingAmount) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-t border-border pt-3 text-base font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("cart.total") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatRaw(totalLocal) })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground",
							children: t("checkout.noPayment")
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { CheckoutPage as component };
