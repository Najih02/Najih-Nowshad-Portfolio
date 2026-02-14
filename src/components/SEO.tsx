import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title = "Najih Nowshad | AI Architect & 3D Developer",
    description = "Portfolio of Najih Nowshad, an AI Architect and 3D Developer specializing in immersive web experiences and artificial intelligence solutions.",
    keywords = "Najih, Najih Nowshad, najihai, AI Architect, 3D Developer, Portfolio, React, Three.js, WebGL",
    image = "/og-image.png",
    url = "https://najihai.vercel.app"
}: SEOProps) {
    const siteTitle = title;

    // JSON-LD Structured Data for Person
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Najih Nowshad",
        "alternateName": ["Najih", "najihai"],
        "url": url,
        "image": `${url}${image}`,
        "sameAs": [
            "https://github.com/najih02",
            "https://linkedin.com/in/najihnowshad",
            "https://twitter.com/najihnowshad"
        ],
        "jobTitle": "AI Architect",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": description
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Najih Nowshad" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}${image}`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${url}${image}`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
