export const COLORS = {
    brown: "#4A3428",
    cream: "#F5F1E8",
    wood: "#C9A27E",
    charcoal: "#1E1E1E",
    offwhite: "#FAF8F4",
    muted: "#8B7355",
    light: "#E8E0D4",
};

export const NAV_LINKS = ["Menu", "Our Story"];

export const MENU_ITEMS = {
    "Classic Coffee": [
        { name: "Espresso", desc: "Pure intense coffee shot", price: "₹145" },
        { name: "Doppio", desc: "Double espresso shot", price: "₹145" },
        { name: "Cafe Americano", desc: "Rich espresso with hot water", price: "₹145" },
        { name: "Cappuccino", desc: "Espresso, steamed milk, deep foam", price: "₹185" },
        { name: "Cafe Latte", desc: "Espresso with steamed milk", price: "₹185" },
        { name: "Cafe Mocha", desc: "Espresso with chocolate and milk", price: "₹185" },
        { name: "Flat White", desc: "Velvety microfoam over espresso", price: "₹185" },
        { name: "Manual Brews (V60/Chemex)", desc: "Pour over for refined clarity", price: "₹205" },
    ],
    "Cold Brews & Iced": [
        { name: "Classic Cold Brew", desc: "18-hour slow steep", price: "₹205" },
        { name: "Barrel Aged Cold Brew", desc: "Complex oaky notes", price: "₹235" },
        { name: "Creamy Salted Caramel", desc: "Sweet & savory cold brew", price: "₹235" },
        { name: "Vietnamense Iced Coffee", desc: "Bold coffee with condensed milk", price: "₹215" },
        { name: "Lavender Iced Coffee", desc: "Floral and refreshing", price: "₹215" },
        { name: "Iced Mocha", desc: "Chilled chocolate coffee blend", price: "₹215" },
        { name: "Citrus Cold Brew", desc: "Bright and zesty", price: "₹265" },
        { name: "Cold Brew with Red Bull", desc: "Maximum energy kick", price: "₹265" },
    ],
    "Frappes & Shakes": [
        { name: "Classic Frappe", desc: "Blended coffee classic", price: "₹185" },
        { name: "Hazelnut Frappe", desc: "Nutty and creamy", price: "₹215" },
        { name: "Tiramisu Frappe", desc: "Coffee dessert in a glass", price: "₹225" },
        { name: "Crunchy Cookie Shake", desc: "Thick and indulgent", price: "₹245" },
        { name: "Blueberry Cheesecake Shake", desc: "Fruity and rich", price: "₹265" },
        { name: "Nutella Frappe", desc: "The ultimate hazelnut chocolate", price: "₹285" },
        { name: "Brownie-Nutella Shake", desc: "Decadent dessert shake", price: "₹325" },
        { name: "Peanut Butter Frappe", desc: "Creamy peanut goodness", price: "₹285" },
    ],
    "Food & Bites": [
        { name: "Margherita Pizza", desc: "Classic tomato and mozzarella", price: "₹255" },
        { name: "Garlic Toast", desc: "Crispy and buttery", price: "₹195" },
        { name: "Nutella Toast", desc: "Sweet morning favorite", price: "₹205" },
        { name: "Aglio-E-Olio Pasta", desc: "Garlic, olive oil, chili flakes", price: "₹285" },
        { name: "Creamy Pesto Pasta", desc: "Rich basil and nut pesto", price: "₹305" },
        { name: "Alfredo Pizza", desc: "White sauce and veggies", price: "₹295" },
        { name: "Hummus Toast", desc: "Creamy chickpea spread", price: "₹205" },
        { name: "Nachos", desc: "Crispy snack with dip", price: "₹185" },
    ],
    "Teas & More": [
        { name: "Indian Masala Tea", desc: "Spiced ginger and cardamom", price: "₹85" },
        { name: "Matcha Hot/Iced Latte", desc: "Ceremonial grade green tea", price: "₹175" },
        { name: "Classic Mojito", desc: "Refreshing lime and mint", price: "₹225" },
        { name: "Watermelon Mojito", desc: "Summer fruit delight", price: "₹275" },
        { name: "Nutella Hot Chocolate", desc: "Warm creamy cocoa", price: "₹235" },
        { name: "Affogato", desc: "Espresso over vanilla bean", price: "₹215" },
        { name: "Blueberry Mojito", desc: "Fruity sparkling refresher", price: "₹245" },
        { name: "Signature Hot Chocolate", desc: "Lipi's secret blend", price: "₹315" },
    ],
};

export const TESTIMONIALS = [
    {
        name: "Patel Dhananjay",
        role: "Local Guide",
        text: "An effortlessly stylish café with a refined yet youthful vibe. The coffee feels thoughtfully crafted, the food is elegant without trying too hard, and the ambience makes you want to stay longer than planned.",
        stars: 5,
    },
    {
        name: "Dhruv Maheriya",
        role: "Local Guide",
        text: "I visited this newly opened cafe and absolutely loved it! The place is cozy with a nice, decent ambience... I ordered a pour-over coffee, and the barista prepared it perfectly just the way I like it.",
        stars: 5,
    },
    {
        name: "Prathna Pandey",
        role: "Reviewer",
        text: "I absolutely love this place the whole vibe is so calming and peaceful. I have to appreciate the hospitality — it's truly wonderful ❤️",
        stars: 5,
    },
];

export const GALLERY_IMAGES = [
    { bg: "linear-gradient(135deg, #3D2B1F 0%, #6B4226 100%)", label: "The Bar", span: "col-span-2 row-span-2" },
    { bg: "linear-gradient(135deg, #C9A27E 0%, #A07850 100%)", label: "Pour Over", span: "col-span-1 row-span-1" },
    { bg: "linear-gradient(135deg, #2C1810 0%, #4A3428 100%)", label: "Corner Table", span: "col-span-1 row-span-1" },
    { bg: "linear-gradient(135deg, #8B7355 0%, #6B5A3E 100%)", label: "Morning Light", span: "col-span-1 row-span-2" },
    { bg: "linear-gradient(135deg, #D4B896 0%, #C9A27E 100%)", label: "Latte Art", span: "col-span-1 row-span-1" },
    { bg: "linear-gradient(135deg, #1E1E1E 0%, #3D2B1F 100%)", label: "Late Hours", span: "col-span-1 row-span-1" },
];
