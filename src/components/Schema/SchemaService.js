import { Helmet } from "react-helmet";

const SchemaService = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Morgan Baker Development",
            "founder": {
              "@type": "Person",
                "name": "Morgan Baker"
            },
            "foundingLocation": {
              "@type": "Place",
                "name": "Inverness"
            },
            "keywords": "Web Design, Web Development, WordPress",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Briargrove Terrace",
              "addressLocality": "Inverness",
              "addressRegion": "Highland",
              "postalCode": "IV2 5AB",
              "addressCountry": {
                "@type": "Country",
                "name": "Scotland"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Invernesss"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WordPress Design & Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ecommerce Design & Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gatsby Design & Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Whitelabel WordPress Development"
                  }
                }
              ]
            },
            "url": "https://www.morganbaker.dev",
            "telephone": "+447736592188",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  )
}

export default SchemaService;