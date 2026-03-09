// src/components/SEOSchema.jsx
export default function SEOSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        "name": "Lipi Coffee",
        "description": "A refined coffee retreat in Navrangpura, Ahmedabad designed for thinkers, creators, and solo coffee moments.",
        "url": "https://www.lipicoffee.in",
        "telephone": "+91-XXXXXXXXXX",
        "priceRange": "₹₹",
        "servesCuisine": ["Coffee", "Continental", "Beverages"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Indraprasth Complex, Vijay Cross Road",
            "addressLocality": "Navrangpura",
            "addressRegion": "Gujarat",
            "postalCode": "380009",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.0300",
            "longitude": "72.5600"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "24:00"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200",
            "bestRating": "5"
        },
        "image": "https://www.lipicoffee.in/images/og-cover.jpg",
        "sameAs": [
            "https://instagram.com/lipicoffee",
            "https://www.google.com/maps?cid=YOUR_GOOGLE_CID"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}