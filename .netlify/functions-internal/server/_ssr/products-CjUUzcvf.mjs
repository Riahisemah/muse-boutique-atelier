//#region node_modules/.nitro/vite/services/ssr/assets/products-CjUUzcvf.js
var dress_1_default = "/assets/dress-1-DckHUKgo.webp";
var dress_2_default = "/assets/dress-2-DNvIXw98.webp";
var dress_3_default = "/assets/dress-3-BqHhEWsg.webp";
var dress_4_default = "/assets/dress-2-DNvIXw98.webp";
var dress_5_default = "/assets/dress-5-BjUS1Nn4.webp";
var dress_6_default = "/assets/dress-6-D1tczdbL.webp";
var CATEGORIES = [
	{
		slug: "soiree",
		name: {
			fr: "Robes de soirée",
			ar: "فساتين سهرة",
			it: "Abiti da sera"
		},
		image: dress_1_default
	},
	{
		slug: "ceremonie",
		name: {
			fr: "Robes de cérémonie",
			ar: "فساتين مناسبات",
			it: "Abiti da cerimonia"
		},
		image: dress_3_default
	},
	{
		slug: "casual",
		name: {
			fr: "Robes casual",
			ar: "فساتين يومية",
			it: "Abiti casual"
		},
		image: dress_4_default
	},
	{
		slug: "elegantes",
		name: {
			fr: "Robes élégantes",
			ar: "فساتين أنيقة",
			it: "Abiti eleganti"
		},
		image: dress_2_default
	},
	{
		slug: "nouvelles-collections",
		name: {
			fr: "Nouvelles collections",
			ar: "المجموعات الجديدة",
			it: "Nuove collezioni"
		},
		image: dress_6_default
	},
	{
		slug: "best-sellers",
		name: {
			fr: "Best-sellers",
			ar: "الأكثر مبيعاً",
			it: "Best seller"
		},
		image: dress_5_default
	}
];
var COLLECTIONS = [
	{
		slug: "atelier-noir",
		name: {
			fr: "Atelier Noir",
			ar: "أتيليه نوار",
			it: "Atelier Noir"
		}
	},
	{
		slug: "lumiere",
		name: {
			fr: "Lumière",
			ar: "لوميير",
			it: "Lumière"
		}
	},
	{
		slug: "riviera",
		name: {
			fr: "Riviera",
			ar: "ريفييرا",
			it: "Riviera"
		}
	},
	{
		slug: "heritage",
		name: {
			fr: "Héritage",
			ar: "هيريتاج",
			it: "Heritage"
		}
	}
];
var COLORS = {
	black: {
		id: "black",
		name: {
			fr: "Noir",
			ar: "أسود",
			it: "Nero"
		},
		hex: "#171412"
	},
	ivory: {
		id: "ivory",
		name: {
			fr: "Ivoire",
			ar: "عاجي",
			it: "Avorio"
		},
		hex: "#F6F1E6"
	},
	nude: {
		id: "nude",
		name: {
			fr: "Nude",
			ar: "بيج فاتح",
			it: "Nude"
		},
		hex: "#E3C8AE"
	},
	beige: {
		id: "beige",
		name: {
			fr: "Beige",
			ar: "بيج",
			it: "Beige"
		},
		hex: "#D9C3A5"
	},
	gold: {
		id: "gold",
		name: {
			fr: "Doré",
			ar: "ذهبي",
			it: "Oro"
		},
		hex: "#C9A96A"
	},
	olive: {
		id: "olive",
		name: {
			fr: "Olive",
			ar: "زيتوني",
			it: "Oliva"
		},
		hex: "#5A5A33"
	}
};
function details(fabricFr, fabricAr, fabricIt) {
	return {
		composition: {
			fr: "92 % soie, 8 % élasthanne",
			ar: "92٪ حرير، 8٪ إيلاستان",
			it: "92% seta, 8% elastan"
		},
		fabric: {
			fr: fabricFr,
			ar: fabricAr,
			it: fabricIt
		},
		fit: {
			fr: "Coupe ajustée, taille marquée. Le mannequin mesure 176 cm et porte une taille S.",
			ar: "قصّة ضيّقة تُبرز الخصر. طول العارضة 176 سم وتلبس مقاس S.",
			it: "Vestibilità aderente, vita segnata. La modella è alta 176 cm e indossa una taglia S."
		},
		care: {
			fr: "Nettoyage à sec uniquement. Repasser à basse température.",
			ar: "التنظيف الجاف فقط. الكي على حرارة منخفضة.",
			it: "Solo lavaggio a secco. Stirare a bassa temperatura."
		},
		origin: {
			fr: "Confectionnée dans notre atelier de Tunis.",
			ar: "مصنوعة في أتيليهنا بتونس.",
			it: "Confezionato nel nostro atelier di Tunisi."
		}
	};
}
function sizes(s, m, l, xl) {
	return [
		{
			size: "S",
			stock: s
		},
		{
			size: "M",
			stock: m
		},
		{
			size: "L",
			stock: l
		},
		{
			size: "XL",
			stock: xl
		}
	];
}
var PRODUCTS = [
	{
		id: "p1",
		slug: "robe-soiree-nocturne",
		sku: "MN-SOI-001",
		name: {
			fr: "Robe Nocturne",
			ar: "فستان نوكتورن",
			it: "Abito Nocturne"
		},
		description: {
			fr: "Une robe longue en soie noire, drapée à la main sur le buste et fendue sur le côté. La pièce signature de nos soirées.",
			ar: "فستان طويل من الحرير الأسود، مدرّج يدوياً عند الصدر مع فتحة جانبية. قطعتنا المميّزة للسهرات.",
			it: "Abito lungo in seta nera, drappeggiato a mano sul corpetto e con spacco laterale. Il capo firma delle nostre serate."
		},
		category: "soiree",
		collection: "atelier-noir",
		images: [dress_1_default, dress_3_default],
		price: 249,
		compareAt: 320,
		promoEndsAt: "2026-09-30",
		colors: [COLORS.black, COLORS.ivory],
		sizes: sizes(3, 7, 2, 0),
		status: "published",
		featured: true,
		bestseller: true,
		newArrival: true,
		popularity: 98,
		createdAt: "2026-07-28",
		details: details("Soie sablée", "حرير مطفي", "Seta sabbiata"),
		seo: {
			title: {
				fr: "Robe de soirée Nocturne en soie noire | El Wafa Création",
				ar: "فستان سهرة نوكتورن من الحرير الأسود | الوَفَاء",
				it: "Abito da sera Nocturne in seta nera | El Wafa Création"
			},
			description: {
				fr: "Robe longue en soie noire drapée à la main, série limitée. Livraison Tunisie, France, Italie.",
				ar: "فستان طويل من الحرير الأسود مدرّج يدوياً، كمية محدودة. توصيل إلى تونس وفرنسا وإيطاليا.",
				it: "Abito lungo in seta nera drappeggiato a mano, serie limitata. Spedizione in Tunisia, Francia, Italia."
			}
		}
	},
	{
		id: "p2",
		slug: "robe-satin-lumiere",
		sku: "MN-ELE-002",
		name: {
			fr: "Robe Lumière",
			ar: "فستان لوميير",
			it: "Abito Lumière"
		},
		description: {
			fr: "Robe midi en satin beige au dos ouvert, pensée pour les déjeuners d'été et les fins de journée sur la terrasse.",
			ar: "فستان ميدي من الساتان البيج بظهر مفتوح، مثالي لغداء الصيف وأمسيات الشرفة.",
			it: "Abito midi in raso beige con schiena scoperta, pensato per i pranzi d'estate e le sere in terrazza."
		},
		category: "elegantes",
		collection: "lumiere",
		images: [dress_2_default, dress_4_default],
		price: 179,
		compareAt: null,
		colors: [COLORS.beige, COLORS.nude],
		sizes: sizes(5, 4, 6, 3),
		status: "published",
		featured: true,
		bestseller: true,
		newArrival: false,
		popularity: 88,
		createdAt: "2026-06-14",
		details: details("Satin de soie", "ساتان حريري", "Raso di seta"),
		seo: {
			title: {
				fr: "Robe midi Lumière en satin beige | El Wafa Création",
				ar: "فستان ميدي لوميير من الساتان البيج | الوَفَاء",
				it: "Abito midi Lumière in raso beige | El Wafa Création"
			},
			description: {
				fr: "Robe midi en satin au dos ouvert, coupe fluide, série limitée.",
				ar: "فستان ميدي من الساتان بظهر مفتوح وقصّة انسيابية.",
				it: "Abito midi in raso con schiena scoperta e linea fluida."
			}
		}
	},
	{
		id: "p3",
		slug: "robe-ceremonie-plisse",
		sku: "MN-CER-003",
		name: {
			fr: "Robe Plissé Ivoire",
			ar: "فستان بليسيه عاجي",
			it: "Abito Plissé Avorio"
		},
		description: {
			fr: "Une robe de cérémonie plissée soleil, dos nu, avec une traîne légère. Élégance nuptiale sans excès.",
			ar: "فستان مناسبات بطيّات شمسية وظهر مكشوف مع ذيل خفيف. أناقة عرائسية بلا مبالغة.",
			it: "Abito da cerimonia plissé sole, schiena nuda e piccolo strascico. Eleganza nuziale senza eccessi."
		},
		category: "ceremonie",
		collection: "heritage",
		images: [dress_3_default, dress_1_default],
		price: 329,
		compareAt: 399,
		promoEndsAt: "2026-09-15",
		colors: [COLORS.ivory, COLORS.nude],
		sizes: sizes(2, 3, 1, 0),
		status: "published",
		featured: true,
		bestseller: false,
		newArrival: true,
		popularity: 76,
		createdAt: "2026-08-02",
		details: details("Plissé technique", "بليسيه تقني", "Plissé tecnico"),
		seo: {
			title: {
				fr: "Robe de cérémonie plissée ivoire | El Wafa Création",
				ar: "فستان مناسبات بليسيه عاجي | الوَفَاء",
				it: "Abito da cerimonia plissé avorio | El Wafa Création"
			},
			description: {
				fr: "Robe de cérémonie plissée, dos nu et traîne légère, faite main.",
				ar: "فستان مناسبات بطيّات وظهر مكشوف وذيل خفيف، صناعة يدوية.",
				it: "Abito da cerimonia plissé, schiena nuda e strascico, fatto a mano."
			}
		}
	},
	{
		id: "p4",
		slug: "robe-lin-riviera",
		sku: "MN-CAS-004",
		name: {
			fr: "Robe Riviera",
			ar: "فستان ريفييرا",
			it: "Abito Riviera"
		},
		description: {
			fr: "Robe midi en lin lavé, boutonnée devant, avec poches. La robe des journées lentes.",
			ar: "فستان ميدي من الكتان المغسول بأزرار أمامية وجيوب. فستان الأيام الهادئة.",
			it: "Abito midi in lino lavato, abbottonato davanti, con tasche. L'abito delle giornate lente."
		},
		category: "casual",
		collection: "riviera",
		images: [dress_4_default, dress_2_default],
		price: 119,
		compareAt: 149,
		colors: [COLORS.ivory, COLORS.beige],
		sizes: sizes(8, 6, 4, 5),
		status: "published",
		featured: false,
		bestseller: true,
		newArrival: true,
		popularity: 81,
		createdAt: "2026-08-08",
		details: details("Lin lavé", "كتان مغسول", "Lino lavato"),
		seo: {
			title: {
				fr: "Robe midi Riviera en lin lavé | El Wafa Création",
				ar: "فستان ميدي ريفييرا من الكتان | الوَفَاء",
				it: "Abito midi Riviera in lino lavato | El Wafa Création"
			},
			description: {
				fr: "Robe midi en lin lavé avec poches, coupe décontractée et élégante.",
				ar: "فستان ميدي من الكتان المغسول بجيوب، قصّة مريحة وأنيقة.",
				it: "Abito midi in lino lavato con tasche, linea comoda ed elegante."
			}
		}
	},
	{
		id: "p5",
		slug: "robe-portefeuille-olive",
		sku: "MN-ELE-005",
		name: {
			fr: "Robe Portefeuille Olive",
			ar: "فستان لفّة زيتوني",
			it: "Abito a Portafoglio Oliva"
		},
		description: {
			fr: "Robe portefeuille en viscose fluide, ceinture à nouer, manches courtes. Parfaite du bureau au dîner.",
			ar: "فستان بلفّة من الفيسكوز الانسيابي مع حزام يُعقد وأكمام قصيرة. مثالي من المكتب إلى العشاء.",
			it: "Abito a portafoglio in viscosa fluida, cintura da annodare, maniche corte. Perfetto dall'ufficio alla cena."
		},
		category: "elegantes",
		collection: "heritage",
		images: [dress_5_default, dress_4_default],
		price: 139,
		compareAt: null,
		colors: [COLORS.olive, COLORS.black],
		sizes: sizes(4, 9, 5, 2),
		status: "published",
		featured: false,
		bestseller: true,
		newArrival: false,
		popularity: 84,
		createdAt: "2026-05-19",
		details: details("Viscose fluide", "فيسكوز انسيابي", "Viscosa fluida"),
		seo: {
			title: {
				fr: "Robe portefeuille olive | El Wafa Création",
				ar: "فستان لفّة زيتوني | الوَفَاء",
				it: "Abito a portafoglio oliva | El Wafa Création"
			},
			description: {
				fr: "Robe portefeuille en viscose fluide, ceinture à nouer, coupe intemporelle.",
				ar: "فستان بلفّة من الفيسكوز مع حزام، قصّة خالدة.",
				it: "Abito a portafoglio in viscosa, cintura da annodare, linea intramontabile."
			}
		}
	},
	{
		id: "p6",
		slug: "robe-sequins-etoile",
		sku: "MN-SOI-006",
		name: {
			fr: "Robe Étoile",
			ar: "فستان إتوال",
			it: "Abito Étoile"
		},
		description: {
			fr: "Robe longue entièrement brodée de sequins dorés, fente haute et bretelles fines. Pour les grandes occasions.",
			ar: "فستان طويل مطرّز بالكامل بترتر ذهبي، بفتحة عالية وحمالات رقيقة. للمناسبات الكبرى.",
			it: "Abito lungo interamente ricamato con paillettes dorate, spacco alto e spalline sottili. Per le grandi occasioni."
		},
		category: "soiree",
		collection: "lumiere",
		images: [dress_6_default, dress_1_default],
		price: 389,
		compareAt: null,
		colors: [COLORS.gold, COLORS.black],
		sizes: sizes(2, 2, 3, 1),
		status: "published",
		featured: true,
		bestseller: false,
		newArrival: true,
		popularity: 92,
		createdAt: "2026-08-11",
		details: details("Tulle brodé sequins", "تول مطرّز بالترتر", "Tulle ricamato paillettes"),
		seo: {
			title: {
				fr: "Robe longue à sequins dorés Étoile | El Wafa Création",
				ar: "فستان طويل بترتر ذهبي إتوال | الوَفَاء",
				it: "Abito lungo con paillettes dorate Étoile | El Wafa Création"
			},
			description: {
				fr: "Robe longue brodée de sequins dorés, fente haute, pièce de soirée d'exception.",
				ar: "فستان طويل مطرّز بترتر ذهبي بفتحة عالية، قطعة سهرة استثنائية.",
				it: "Abito lungo ricamato con paillettes dorate, spacco alto, capo da sera d'eccezione."
			}
		}
	},
	{
		id: "p7",
		slug: "robe-drapee-carthage",
		sku: "MN-CER-007",
		name: {
			fr: "Robe Carthage",
			ar: "فستان قرطاج",
			it: "Abito Cartagine"
		},
		description: {
			fr: "Robe drapée à une épaule, inspirée des colonnes de Carthage. Un jeu de plis sculptés à la main.",
			ar: "فستان مدرّج على كتف واحد، مستوحى من أعمدة قرطاج. طيّات منحوتة يدوياً.",
			it: "Abito drappeggiato monospalla, ispirato alle colonne di Cartagine. Un gioco di pieghe scolpite a mano."
		},
		category: "ceremonie",
		collection: "atelier-noir",
		images: [dress_3_default, dress_6_default],
		price: 289,
		compareAt: 349,
		colors: [COLORS.nude, COLORS.ivory],
		sizes: sizes(0, 4, 3, 2),
		status: "published",
		featured: false,
		bestseller: false,
		newArrival: true,
		popularity: 70,
		createdAt: "2026-08-05",
		details: details("Crêpe de soie", "كريب حريري", "Crêpe di seta"),
		seo: {
			title: {
				fr: "Robe drapée Carthage une épaule | El Wafa Création",
				ar: "فستان قرطاج المدرّج بكتف واحد | الوَفَاء",
				it: "Abito drappeggiato Cartagine monospalla | El Wafa Création"
			},
			description: {
				fr: "Robe de cérémonie drapée à une épaule, plis sculptés à la main.",
				ar: "فستان مناسبات مدرّج بكتف واحد بطيّات منحوتة يدوياً.",
				it: "Abito da cerimonia monospalla con pieghe scolpite a mano."
			}
		}
	},
	{
		id: "p8",
		slug: "robe-coton-medina",
		sku: "MN-CAS-008",
		name: {
			fr: "Robe Médina",
			ar: "فستان المدينة",
			it: "Abito Medina"
		},
		description: {
			fr: "Robe longue en coton brodé au fil de soie, coupe ample et col montant. Une lecture moderne du vêtement traditionnel.",
			ar: "فستان طويل من القطن المطرّز بخيط الحرير، قصّة واسعة وياقة عالية. قراءة حديثة للزي التقليدي.",
			it: "Abito lungo in cotone ricamato con filo di seta, linea ampia e collo alto. Una lettura moderna dell'abito tradizionale."
		},
		category: "casual",
		collection: "riviera",
		images: [dress_4_default, dress_5_default],
		price: 149,
		compareAt: 189,
		colors: [COLORS.ivory, COLORS.olive],
		sizes: sizes(6, 5, 5, 4),
		status: "published",
		featured: false,
		bestseller: false,
		newArrival: false,
		popularity: 64,
		createdAt: "2026-04-22",
		details: details("Coton brodé", "قطن مطرّز", "Cotone ricamato"),
		seo: {
			title: {
				fr: "Robe longue Médina en coton brodé | El Wafa Création",
				ar: "فستان المدينة الطويل من القطن المطرّز | الوَفَاء",
				it: "Abito lungo Medina in cotone ricamato | El Wafa Création"
			},
			description: {
				fr: "Robe longue en coton brodé main, col montant, coupe ample.",
				ar: "فستان طويل من القطن المطرّز يدوياً بياقة عالية وقصّة واسعة.",
				it: "Abito lungo in cotone ricamato a mano, collo alto, linea ampia."
			}
		}
	},
	{
		id: "p9",
		slug: "robe-dentelle-isabelle",
		sku: "MN-SOI-009",
		name: {
			fr: "Robe Isabelle",
			ar: "فستان إيزابيل",
			it: "Abito Isabelle"
		},
		description: {
			fr: "Robe de soirée en dentelle délicate, col asymétrique, manches bouffantes. Un classique réinventé avec élégance.",
			ar: "فستان سهرة من الدانتيل الرقيق، ياقة غير متماثلة وأكمام منفوخة. كلاسيكي أعيد اختراعه بأناقة.",
			it: "Abito da sera in pizzo delicato, colletto asimmetrico e maniche a sbuffo. Un classico reinventato con eleganza."
		},
		category: "soiree",
		collection: "lumiere",
		images: [dress_2_default, dress_6_default],
		price: 269,
		compareAt: 340,
		promoEndsAt: "2026-09-25",
		colors: [COLORS.ivory, COLORS.black],
		sizes: sizes(4, 6, 3, 1),
		status: "published",
		featured: true,
		bestseller: false,
		newArrival: true,
		popularity: 85,
		createdAt: "2026-08-10",
		details: details("Dentelle française", "دانتيل فرنسي", "Pizzo francese"),
		seo: {
			title: {
				fr: "Robe de soirée Isabelle en dentelle | El Wafa Création",
				ar: "فستان سهرة إيزابيل من الدانتيل | الوَفَاء",
				it: "Abito da sera Isabelle in pizzo | El Wafa Création"
			},
			description: {
				fr: "Robe de soirée en dentelle délicate, col asymétrique, série limitée.",
				ar: "فستان سهرة من الدانتيل الرقيق بياقة غير متماثلة، كمية محدودة.",
				it: "Abito da sera in pizzo delicato con colletto asimmetrico, serie limitata."
			}
		}
	},
	{
		id: "p10",
		slug: "robe-velours-renaissance",
		sku: "MN-CER-010",
		name: {
			fr: "Robe Renaissance",
			ar: "فستان الحضارة",
			it: "Abito Rinascimento"
		},
		description: {
			fr: "Robe de cérémonie en velours côtelé noir, ceinture dorée, découpe sophistiquée. Inspirée par l'art de la Renaissance.",
			ar: "فستان مناسبات من المخمل الأسود، حزام ذهبي وقصّة متطورة. مستوحى من فن الحضارة.",
			it: "Abito da cerimonia in velluto nero, cintura dorata e linea sofisticata. Ispirato dall'arte del Rinascimento."
		},
		category: "ceremonie",
		collection: "atelier-noir",
		images: [dress_3_default, dress_2_default],
		price: 349,
		compareAt: 439,
		colors: [COLORS.black, COLORS.gold],
		sizes: sizes(1, 5, 4, 3),
		status: "published",
		featured: true,
		bestseller: false,
		newArrival: true,
		popularity: 79,
		createdAt: "2026-08-12",
		details: details("Velours côtelé", "مخمل منقوش", "Velluto a coste"),
		seo: {
			title: {
				fr: "Robe de cérémonie Renaissance en velours | El Wafa Création",
				ar: "فستان مناسبات الحضارة من المخمل | الوَفَاء",
				it: "Abito da cerimonia Rinascimento in velluto | El Wafa Création"
			},
			description: {
				fr: "Robe de cérémonie en velours côtelé noir, ceinture dorée, pièce d'exception.",
				ar: "فستان مناسبات من المخمل الأسود بحزام ذهبي، قطعة استثنائية.",
				it: "Abito da cerimonia in velluto nero con cintura dorata, capo d'eccezione."
			}
		}
	}
];
function getProduct(id) {
	return PRODUCTS.find((p) => p.id === id);
}
function getProductBySlug(slug) {
	return PRODUCTS.find((p) => p.slug === slug);
}
function totalStock(p) {
	return p.sizes.reduce((n, s) => n + s.stock, 0);
}
function discountPercent(p) {
	if (!p.compareAt) return null;
	return Math.round((1 - p.price / p.compareAt) * 100);
}
var ALL_SIZES = [
	"S",
	"M",
	"L",
	"XL"
];
var ALL_COLORS = Object.values(COLORS);
//#endregion
export { PRODUCTS as a, getProductBySlug as c, COLLECTIONS as i, totalStock as l, ALL_SIZES as n, discountPercent as o, CATEGORIES as r, getProduct as s, ALL_COLORS as t };
