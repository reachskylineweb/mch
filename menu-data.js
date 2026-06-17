/**
 * Madras Coffee House Menu Data File
 * Structured data for the MCH brand, categories, items, themes, and image mappings.
 */

const DECO_IMAGES = {
  // New specific images (landscape photos that need 90deg rotation)
  lemonTea: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686185/lemon_tea_with_honey_lfkm6g.png",
  parcelCup: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686185/parcel_cup_fwmvkz.jpg",
  cutlet: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686184/Cutlet_ci8vos.png",
  greenTea: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686184/green_tea_agtrxj.png",
  cornSandwich: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686184/Corn_Sandwich_vrf74m.png",
  coffeeWithBajji: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686184/Cofffee_Wiht_Bajji_c86idp.png",
  chilliBajji: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686183/Chilli_Bajji_kqxhb0.png",
  teaCake: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686183/tea_cake_jwnjbg.png",
  blackCoffee: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686183/black_coffee_cjs8pq.png",
  waterBottle1: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686183/water_jtsx3b.png",
  teaWithCake: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686183/tean_with_cake_ah7fnt.png",
  bananaBajji: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686182/banana_najji_rw1hun.png",
  tea: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686182/Tea_aidp9r.png",
  teaWithCookies: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686182/tea_with_cookies_psm6d6.png",
  sulaimanTea: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686181/Sulaiman_Tea_hwpazd.png",
  threeJuices: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686854/997A2635_qxvred.jpg",
  roseMilk: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686853/997A2628_aekh5s.jpg",
  milkshake: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686853/997A2632_bbedma.jpg",
  juice: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686852/997A2629_lgvyil.jpg",
  donut: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686851/997A2606_ofxv7x.jpg",
  vadaChutney1: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686850/vada2_zhn2iq.jpg",
  vadaChutney2: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686850/vada_zwjker.jpg",
  podiIdly: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686845/podiidly2_iklo3u.jpg",
  onionBonda: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686843/onionbonda_sm0x8t.jpg",
  masalaVada: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686841/masalavada_ef9evj.jpg",
  kuliPaniyaram: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686840/kulipaniyaram_wydzpq.jpg",
  alooBonda: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686824/aloobonda_jup2t5.jpg",
  goliSoda: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686824/997A8308_m5wcbm.jpg",
  waterBottle2: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686823/997A8327_uijdmw.jpg",
  blackSoda: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686822/997A8303_wyw0ik.jpg",
  mangoJuice: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686820/997A8299_qf5ukf.jpg",
  pineappleSoda: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686819/997A8290_ifl4y8.jpg",
  samosaWithTea: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686817/997A8150_bmjfcs.jpg",
  puffsWithTea: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686817/997A8152_wnctzg.jpg",
  coffeeWithCutlet: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686816/997A8141_ywz8ad.jpg",
  coffeeWithPaniyaram: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686815/997A8145_x0ufmv.jpg",
  coffeeWithSandwich: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686814/997A8138_y4qq2p.jpg",
  addingMilkInCoffee: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686813/997A2720_pdzpvh.jpg",
  smallSamosa: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686812/997A8123_gzns9g.jpg",
  filterCoffee1: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686812/997A2717_csltsj.jpg",
  filterCoffee2: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686808/997A2729_ulhzcq.jpg",
  frenchFries: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781686807/997A2709_njckpt.jpg",

  // Original upright images (no rotation needed)
  origMore: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517745/a2e70d8b-2ad4-4a71-936e-12a5d1c41fc0_kkfnr2.jpg",
  origMethuvadai: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517751/5258fc56-1664-4bc8-aad5-002fcd7a91d4_z7d520.jpg",
  origParuppuVadai: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517757/2bcb4536-1085-497c-84ea-46f53ce1ac54_jl1u0x.jpg",
  origBiscuits: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517764/c4308c48-5cdf-41d7-b476-d144753999cb_abb1xe.jpg",
  origMilakaiPachi: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517770/9b311e92-74ba-4e37-9c31-f52b399af39a_o27fix.jpg",
  origBlackCoffee: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517776/59cc327c-e083-4c0b-88ad-17ea656862ac_ztqltf.jpg",
  origDoubleCho: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517788/61ffdfdb-a758-41c6-883a-838546a7394d_ztwsny.jpg",
  origChocoCoffee: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517789/af15fe26-a637-494f-9f3a-cf28d0347f65_ksmham.jpg",
  origWater: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517797/a0ec4ac9-57f4-49d3-8678-427258efe917_vkbeur.jpg",
  sundal: "https://res.cloudinary.com/dr7jaclns/image/upload/v1781517190/8b310c56-0e2e-437e-88ae-e2268e43c8f4_hk9ekf.jpg"
};

const MENU_DATA = {
  "MCH": {
    theme: {
      accent: "#e4272e",
      badgeColor: "#e4272e",
      desc: "Authentic Madras filter coffee, traditional tea varieties, and comforting South Indian snacks.",
      icon: "☕"
    },
    menu: {
      "Coffee & More": {
        images: [DECO_IMAGES.filterCoffee1, DECO_IMAGES.filterCoffee2, DECO_IMAGES.origBlackCoffee, DECO_IMAGES.origDoubleCho, DECO_IMAGES.origChocoCoffee, DECO_IMAGES.addingMilkInCoffee, DECO_IMAGES.parcelCup],
        items: [
          { name: "Filter Coffee", desc: "Madras degree filter coffee brewed slowly in traditional brass filters, full-cream milk.", type: "veg", tag: "Signature" },
          { name: "Black Coffee", desc: "Strong, robust chicory-free black coffee decoction with hot water.", type: "veg" },
          { name: "Milk", desc: "Steaming hot fresh full-cream sweetened cow milk.", type: "veg" },
          { name: "Boost", desc: "Hot energy malt milk beverage prepared with fresh milk.", type: "veg" },
          { name: "Horlicks", desc: "Steaming hot comforting cup of Horlicks malted milk.", type: "veg" }
        ]
      },
      "Tea": {
        images: [DECO_IMAGES.tea, DECO_IMAGES.teaWithCookies],
        items: [
          { name: "Special Tea", desc: "Freshly brewed premium strong milk tea.", type: "veg", tag: "Bestseller" },
          { name: "Masala Tea", desc: "Strong tea infused with crushed ginger, cardamom, cloves, and cinnamon.", type: "veg" },
          { name: "Ginger Tea", desc: "Warm and soothing tea infused with freshly ground spicy ginger root.", type: "veg" },
          { name: "Cardamom Tea", desc: "Aromatic milk tea infused with green cardamom pods.", type: "veg" }
        ]
      },
      "Black Tea": {
        images: [DECO_IMAGES.sulaimanTea, DECO_IMAGES.greenTea, DECO_IMAGES.lemonTea],
        items: [
          { name: "Black Tea", desc: "Strong plain black tea infusion.", type: "veg" },
          { name: "Ginger Lemon Tea", desc: "Warm black tea flavored with fresh lemon juice and crushed ginger.", type: "veg" },
          { name: "Lemon Tea", desc: "Light and refreshing hot lemon flavored black tea.", type: "veg" },
          { name: "Sulaimani Tea", desc: "Traditional sweet-sour black tea brewed with spices, mint, and lemon.", type: "veg", tag: "Heritage" },
          { name: "Green Tea", desc: "Warm green tea infusion, packed with healthy antioxidants.", type: "veg" },
          { name: "Green Tea with Honey", desc: "Warm green tea sweetened with pure natural honey.", type: "veg" },
          { name: "Lemon Tea with Honey", desc: "Fresh hot lemon tea sweetened with natural honey.", type: "veg" }
        ]
      },
      "Bun": {
        images: [DECO_IMAGES.donut],
        items: [
          { name: "Madras Coffee's Jam Bun", desc: "Soft bun stuffed with double layers of sweet mixed fruit jam.", type: "veg" },
          { name: "Madras Coffee's Cream Bun", desc: "Traditional bakery bun filled with sweet vanilla cream.", type: "veg" },
          { name: "Bun Maska", desc: "Soft toasted bun sliced and stuffed with rich salted butter.", type: "veg", tag: "Classic" },
          { name: "Bun Butter Jam", desc: "Nostalgic soft bun loaded with salted butter and sweet jam.", type: "veg" }
        ]
      },
      "Cakes": {
        images: [DECO_IMAGES.teaCake],
        items: [
          { name: "Madras Coffee's Tea Cake", desc: "Daily baked soft vanilla sponge cake slice.", type: "egg" },
          { name: "Carrot Cake Slice", desc: "Moist cake slice flavored with carrots and walnuts.", type: "egg" },
          { name: "Banana Walnut Cake", desc: "Aromatic baked dry cake slice featuring ripe bananas and walnuts.", type: "egg" }
        ]
      },
      "Cold Beverages": {
        images: [DECO_IMAGES.threeJuices, DECO_IMAGES.roseMilk, DECO_IMAGES.milkshake, DECO_IMAGES.origMore, DECO_IMAGES.goliSoda, DECO_IMAGES.blackSoda, DECO_IMAGES.mangoJuice, DECO_IMAGES.pineappleSoda, DECO_IMAGES.origWater],
        items: [
          { name: "Nannari Sarbath", desc: "Chilled traditional sarbath flavored with sarsaparilla root syrup and lemon.", type: "veg", tag: "Heritage" },
          { name: "Rose Milk", desc: "Chilled milk flavored with sweet aromatic rose syrup.", type: "veg" },
          { name: "Badam Milk", desc: "Chilled rich milk sweetened with almond paste, cardamom, and saffron.", type: "veg" },
          { name: "Milk Sarbath", desc: "Refreshing mixture of chilled milk, nannari syrup, and lemon juice.", type: "veg" },
          { name: "Special Cold Coffee", desc: "Rich and creamy blended iced filter coffee.", type: "veg", tag: "Must Try" },
          { name: "Goli Soda", desc: "Nostalgic local flavored carbonated soda in codd-neck bottles.", type: "veg" }
        ]
      },
      "Combo Offers": {
        images: [DECO_IMAGES.coffeeWithBajji, DECO_IMAGES.teaWithCake, DECO_IMAGES.samosaWithTea, DECO_IMAGES.puffsWithTea, DECO_IMAGES.coffeeWithCutlet, DECO_IMAGES.coffeeWithPaniyaram, DECO_IMAGES.coffeeWithSandwich],
        items: [
          { name: "Coffee and Mini Samosa 5pcs", desc: "Hot filter coffee served with five pieces of crispy mini veg samosas.", type: "veg", tag: "Value" },
          { name: "Tea and Cookies 3pcs", desc: "Special milk tea paired with three pieces of home-style butter cookies.", type: "veg" },
          { name: "Coffee and Baji 1pcs", desc: "Warm filter coffee served with a crispy hot banana or onion bajji.", type: "veg" },
          { name: "Rose milk and Tea cake", desc: "Chilled sweet rose milk paired with a slice of moist tea cake.", type: "egg" },
          { name: "Coffee with Bun Butter Jam", desc: "Signature filter coffee served with a butter-jam stuffed bun.", type: "veg", tag: "Popular" }
        ]
      },
      "Cookies": {
        images: [DECO_IMAGES.origBiscuits, DECO_IMAGES.teaWithCookies],
        items: [
          { name: "Premium Butter Cookies (3 Pcs)", desc: "Rich, melt-in-mouth bakery cookies baked with pure butter.", type: "veg" },
          { name: "Premium Ragi Cookies (3 Pcs)", desc: "Healthy crispy biscuits made with finger millet flour.", type: "veg" },
          { name: "Premium Ghee Cookies (3 Pcs)", desc: "Aromatic traditional biscuits containing premium ghee.", type: "veg" },
          { name: "Premium Osmania Cookie (3pcs)", desc: "Classic Hyderabad style sweet-and-salty biscuits.", type: "veg" }
        ]
      },
      "Frozen Snacks": {
        images: [DECO_IMAGES.frenchFries],
        items: [
          { name: "French Fries", desc: "Crispy deep-fried salted potato strips.", type: "veg" },
          { name: "Veg Nuggets (5 Pcs)", desc: "Deep-fried breaded mashed vegetable nuggets.", type: "veg" },
          { name: "Chilli Cheese Nuggets (5 Pcs)", desc: "Crispy nuggets filled with gooey cheese and green jalapeños.", type: "veg", tag: "Cheesy" },
          { name: "Smiles (5 Pcs)", desc: "Crispy fried smiley-face shaped potato snacks.", type: "veg" },
          { name: "Veg Momos", desc: "Steamed flour dumplings packed with grated cabbage and carrots.", type: "veg" },
          { name: "Panner Momos", desc: "Steamed wheat dumplings stuffed with spiced cottage cheese.", type: "veg" }
        ]
      },
      "Sandwich": {
        images: [DECO_IMAGES.cornSandwich],
        items: [
          { name: "Veg Sandwich", desc: "Toasted sandwich with cucumber, tomato, onion slices, and green chutney.", type: "veg" },
          { name: "Cheese Corn Sandwich", desc: "Delicious toasted sandwich filled with sweet corn and melted cheese.", type: "veg" },
          { name: "Panner Tikka Sandwich", desc: "Spiced paneer tikka chunks grilled inside bread slices.", type: "veg", tag: "Bestseller" }
        ]
      },
      "Snacks": {
        images: [DECO_IMAGES.cutlet, DECO_IMAGES.smallSamosa, DECO_IMAGES.onionBonda, DECO_IMAGES.alooBonda, DECO_IMAGES.masalaVada],
        items: [
          { name: "Mini Samosa 6pcs", desc: "Crispy small deep-fried pastries filled with spiced potato.", type: "veg" },
          { name: "Veg Puff", desc: "Crispy flaky baked puff stuffed with spiced vegetables.", type: "veg" },
          { name: "Veg Roll", desc: "Savoury fried roll stuffed with spiced mixed vegetables.", type: "veg" },
          { name: "Aloo Samosa", desc: "Classic big sized samosa packed with spiced mashed potatoes.", type: "veg" },
          { name: "Paneer Puff", desc: "Flaky baked pastry filled with cottage cheese masala.", type: "veg" },
          { name: "Special Mushroom Puff", desc: "Premium flaky puff containing spiced mushrooms.", type: "veg" },
          { name: "Cutlet", desc: "Crispy deep-fried potato and vegetable patty.", type: "veg" },
          { name: "Mint Puff 6 pcs", desc: "Crispy small puff bites flavored with fresh mint leaves.", type: "veg" },
          { name: "Sweet Puff 6 pcs", desc: "Bite-sized flaky sweet puff pastries.", type: "veg" }
        ]
      },
      "South Indian Snacks": {
        images: [DECO_IMAGES.origMethuvadai, DECO_IMAGES.origParuppuVadai, DECO_IMAGES.origMilakaiPachi, DECO_IMAGES.kuliPaniyaram, DECO_IMAGES.vadaChutney1, DECO_IMAGES.vadaChutney2, DECO_IMAGES.bananaBajji, DECO_IMAGES.chilliBajji, DECO_IMAGES.podiIdly],
        items: [
          { name: "Banana Bhajji (2 Pcs)", desc: "Crispy raw banana slices dipped in chickpea batter and deep fried.", type: "veg" },
          { name: "Chilli Bhajji (2 Pcs)", desc: "Fried large green chillies stuffed with tangy spices.", type: "veg", tag: "Spicy" },
          { name: "Onion Bhajji (2 Pcs)", desc: "Fried crispy onion fritters served with green chutney.", type: "veg" },
          { name: "Kuzhi Paniyaram (5 Pcs)", desc: "Fermented rice-lentil batter balls cooked in cast iron skillet.", type: "veg", tag: "Traditional" },
          { name: "Karathattai (2 Pcs)", desc: "Traditional crispy deep-fried flat rice crackers.", type: "veg" }
        ]
      },
      "Sundal": {
        images: [DECO_IMAGES.sundal],
        items: [
          { name: "Verkadalai / Peanuts", desc: "Boiled peanuts tempered with mustard seeds and curry leaves.", type: "veg" },
          { name: "Sundal / Channa", desc: "Comforting boiled white chickpeas tempered with coconut shavings.", type: "veg", tag: "Traditional" },
          { name: "Sweet Corn", desc: "Steamed sweet corn kernels tossed with butter and chaat masala.", type: "veg" }
        ]
      },
      "Extra Charge": {
        images: [DECO_IMAGES.waterBottle1],
        items: [
          { name: "Swiggy Flask", desc: "Eco-friendly insulated cardboard flask for hot delivery.", type: "veg" },
          { name: "Parcel Cup", desc: "Additional paper cup with lid charge.", type: "veg" }
        ]
      },
      "nan": {
        images: [DECO_IMAGES.vadaChutney1],
        items: [
          { name: "Karathattai (2 Pcs)", desc: "Deep-fried traditional salty rice discs.", type: "veg" }
        ]
      }
    }
  }
};
