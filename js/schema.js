/**
 * Universal Schema.org JSON-LD Structured Data Generator
 * Optimized for Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Covers: Organization, WebSite, Authors/Team, VideoGame, FAQPage, AboutPage, ContactPage
 */
(function () {
  const currentPath = window.location.pathname.toLowerCase();

  // Core E-E-A-T Organization Entity
  const organizationEntity = {
    "@type": "Organization",
    "@id": "https://burnoutdrift3.github.io/#organization",
    "name": "Burnout Drift 3 Unblocked",
    "url": "https://burnoutdrift3.github.io/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://burnoutdrift3.github.io/img/burnout-drift-hilltop.png",
      "width": 200,
      "height": 200
    },
    "description": "Premier independent gaming portal dedicated to high-performance, ad-safe, unblocked 3D racing and HTML5 web games.",
    "publishingPrinciples": "https://burnoutdrift3.github.io/editorial-guidelines.html",
    "founder": {
      "@type": "Person",
      "name": "Alex Vance",
      "jobTitle": "Lead Curator & WebGL Performance Engineer",
      "description": "Browser-based 3D graphics specialist with 8+ years evaluating WebGL frame rates and iframe sandbox security."
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Marcus Trent",
        "jobTitle": "Lead Racing & Drift Curator",
        "description": "Automotive enthusiast and reviewer specializing in vehicle dynamics and drift multipliers."
      },
      {
        "@type": "Person",
        "name": "Sarah Lin",
        "jobTitle": "Trust, Safety & Compliance Lead",
        "description": "Compliance specialist overseeing COPPA standards, child safety, and DMCA rights."
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@burnoutdrift3.github.io"
      },
      {
        "@type": "ContactPoint",
        "contactType": "copyright inquiry",
        "email": "dmca@burnoutdrift3.github.io"
      }
    ],
    "sameAs": [
      "https://github.com/burnoutdrift3/burnoutdrift3.github.io"
    ]
  };

  // Base WebSite Entity
  const webSiteEntity = {
    "@type": "WebSite",
    "@id": "https://burnoutdrift3.github.io/#website",
    "url": "https://burnoutdrift3.github.io/",
    "name": "Burnout Drift 3 Unblocked Games",
    "description": "Play Burnout Drift 3 and unblocked car racing games online for free in your browser.",
    "publisher": {
      "@id": "https://burnoutdrift3.github.io/#organization"
    }
  };

  const graph = [organizationEntity, webSiteEntity];

  // 1. Home Page Schema (index.html or root)
  if (currentPath === "/" || currentPath.endsWith("/index.html") || currentPath === "") {
    graph.push({
      "@type": "VideoGame",
      "@id": "https://burnoutdrift3.github.io/#game",
      "name": "Burnout Drift 3",
      "alternateName": [
        "Burnout Drift",
        "Burnout Drift Unblocked",
        "Burnout Drift Ublocked",
        "Burnout Drift Hilltop"
      ],
      "description": "Burnout Drift 3 is a premier 3D drifting simulation racing game. Customize sports cars, master sharp corners, tune suspension, and score maximum drift points unblocked directly in your browser.",
      "url": "https://burnoutdrift3.github.io/",
      "image": "https://burnoutdrift3.github.io/img/burnout-drift-hilltop.png",
      "genre": ["Racing", "Drifting", "Sports Game", "Simulation"],
      "gamePlatform": ["Web Browser", "PC", "Chromebook", "Mobile Browser"],
      "applicationCategory": "Game",
      "operatingSystem": "Any",
      "inLanguage": "en-US",
      "playMode": "SinglePlayer",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "category": "free"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1420",
        "bestRating": "5",
        "worstRating": "1"
      }
    });

    graph.push({
      "@type": "FAQPage",
      "@id": "https://burnoutdrift3.github.io/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Burnout Drift 3?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burnout Drift 3 is a high-octane 3D car racing and drifting simulator featuring realistic vehicle physics, customizable sports cars, multiple hill climb and city circuits, and deep mechanical tuning options."
          }
        },
        {
          "@type": "Question",
          "name": "How can I play Burnout Drift Unblocked or Ublocked at school or work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can play Burnout Drift 3 Unblocked directly on https://burnoutdrift3.github.io/ with no installation, download, or plugin required. The game runs on WebGL and HTML5, bypassing typical network restrictions smoothly on Chromebooks, Windows, and Mac browsers."
          }
        },
        {
          "@type": "Question",
          "name": "What are the keyboard controls for Burnout Drift?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the W, A, S, D keys or Arrow keys to steer, accelerate, and reverse. Press the Spacebar for the handbrake to initiate sharp drifts, F for nitro boost, and C to toggle camera views."
          }
        },
        {
          "@type": "Question",
          "name": "How do you score maximum drift points in Burnout Drift 3?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To get the highest scores in Burnout Drift, sustain long, continuous slide angles without hitting walls or track barriers. Chaining transitions between consecutive curves builds up your drift score multiplier rapidly."
          }
        },
        {
          "@type": "Question",
          "name": "Is Burnout Drift 3 completely free to play?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Burnout Drift 3 and all included car drift games on burnoutdrift3.github.io are 100% free to play with unlimited access and zero paywalls."
          }
        }
      ]
    });
  }

  // 2. About Us Page Schema (E-E-A-T Core)
  else if (currentPath.includes("about-us.html")) {
    graph.push({
      "@type": "AboutPage",
      "@id": "https://burnoutdrift3.github.io/about-us.html#about",
      "url": "https://burnoutdrift3.github.io/about-us.html",
      "name": "About Us - Burnout Drift 3",
      "description": "Learn about Burnout Drift 3, our editorial team, testing methodology, 60 FPS hardware benchmarks, and student-safe gaming standards.",
      "mainEntity": {
        "@id": "https://burnoutdrift3.github.io/#organization"
      }
    });
  }

  // 3. Contact Us Page Schema
  else if (currentPath.includes("contact.html")) {
    graph.push({
      "@type": "ContactPage",
      "@id": "https://burnoutdrift3.github.io/contact.html#contact",
      "url": "https://burnoutdrift3.github.io/contact.html",
      "name": "Contact Burnout Drift 3 Support & Editorial Desk",
      "description": "Get in touch with the Burnout Drift 3 team for support, bug reports, and copyright inquiries.",
      "mainEntity": {
        "@id": "https://burnoutdrift3.github.io/#organization"
      }
    });
  }

  // 4. Editorial Guidelines Page Schema
  else if (currentPath.includes("editorial-guidelines.html")) {
    graph.push({
      "@type": "ItemPage",
      "@id": "https://burnoutdrift3.github.io/editorial-guidelines.html#editorial",
      "url": "https://burnoutdrift3.github.io/editorial-guidelines.html",
      "name": "Editorial Guidelines & Review Policy - Burnout Drift 3",
      "description": "Our transparent review criteria, 4-step testing methodology, and editorial independence standards.",
      "isPartOf": {
        "@id": "https://burnoutdrift3.github.io/#website"
      }
    });
  }

  // 5. Privacy Policy Page Schema
  else if (currentPath.includes("privacy-policy.html")) {
    graph.push({
      "@type": "WebPage",
      "@id": "https://burnoutdrift3.github.io/privacy-policy.html#privacy",
      "url": "https://burnoutdrift3.github.io/privacy-policy.html",
      "name": "Privacy Policy & COPPA Compliance - Burnout Drift 3",
      "description": "Privacy policy and child online privacy protection documentation for Burnout Drift 3."
    });
  }

  // 6. Terms of Service Page Schema
  else if (currentPath.includes("terms-of-service.html")) {
    graph.push({
      "@type": "WebPage",
      "@id": "https://burnoutdrift3.github.io/terms-of-service.html#terms",
      "url": "https://burnoutdrift3.github.io/terms-of-service.html",
      "name": "Terms of Service - Burnout Drift 3",
      "description": "Terms of service and user conduct guidelines for Burnout Drift 3."
    });
  }

  // 7. DMCA Page Schema
  else if (currentPath.includes("dmca.html")) {
    graph.push({
      "@type": "WebPage",
      "@id": "https://burnoutdrift3.github.io/dmca.html#dmca",
      "url": "https://burnoutdrift3.github.io/dmca.html",
      "name": "DMCA & Copyright Policy - Burnout Drift 3",
      "description": "Digital Millennium Copyright Act compliance and takedown notice procedure."
    });
  }

  // 8. Child Game Pages (game/*/*.html)
  else if (currentPath.includes("/game/")) {
    const pageTitle = document.title ? document.title.split("|")[0].trim() : "Unblocked Game";
    graph.push({
      "@type": "VideoGame",
      "name": pageTitle,
      "url": window.location.href,
      "genre": "Browser Game",
      "gamePlatform": ["Web Browser", "PC", "Chromebook"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "category": "free"
      },
      "publisher": {
        "@id": "https://burnoutdrift3.github.io/#organization"
      }
    });
  }

  // Inject JSON-LD script tag into document head
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  }, null, 2);

  document.head.appendChild(schemaScript);
})();
