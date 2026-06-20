// serviceContent.js
import logoImg from "../assets/GraphicDesign/logo.png";
import logoImg2 from "../assets/GraphicDesign/logoDesign.jpeg";
import logoImg3 from "../assets/GraphicDesign/senditLogo.png";
import logoImg4 from "../assets/GraphicDesign/jobmateLogo.jpeg";

export const serviceContent = {
  // ==================== GRAPHIC DESIGN ====================
  "logo-design": {
    title: "Logo Design",
    category: "Graphic Design",
    metaDescription: "Professional logo design services in Kenya. We create memorable, versatile logos that capture your brand's essence.",
    heroImage: logoImg,
    heroAlt: "Professional logo design samples",
    sections: [
      {
        type: "text",
        title: "What Makes a Great Logo?",
        content: "A great logo is simple, memorable, timeless, versatile, and appropriate. It works across all mediums — from a tiny favicon on a website to a massive billboard. At Azuri, we don't just design pretty icons; we create visual marks that communicate your brand's values, resonate with your target audience, and stand the test of time. Every logo we deliver is strategic, not just artistic.",
        image: logoImg2,
        imageAlt: "Logo design process sketch",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "What You Get",
        items: [
          "Initial consultation & brand discovery session",
          "3-5 initial concept directions to choose from",
          "Multiple rounds of revisions on your chosen concept",
          "Final files in AI, EPS, PNG, JPG, SVG formats",
          "Full color, black, and white variations",
          "Brand guidelines page for logo usage rules",
          "Source files delivered for future edits"
        ],
        image: logoImg3,
        imageAlt: "Logo design deliverables package",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Our Design Process",
        content: "We begin with a deep dive into your brand — your values, target audience, competitors, and vision. Our designers then sketch multiple concepts before moving to digital execution. After presenting initial concepts, we refine your chosen direction through collaborative revisions. The result is a logo you'll love for years to come.",
        image: logoImg4,
        imageAlt: "Logo design sketch variations",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you offer logo redesigns?", answer: "Yes! We can refresh your existing logo while maintaining brand equity. The process is similar but starts with an audit of your current logo." },
      { question: "Will I own the copyright?", answer: "Absolutely. Full ownership rights are transferred to you upon final payment. We keep no rights to your logo." },
      { question: "What if I don't like any concepts?", answer: "We work closely with you throughout. If none of the initial concepts work, we'll create additional options until we find the perfect fit." }
    ]
  },

  "brochure-design": {
    title: "Brochure Design",
    category: "Graphic Design",
    metaDescription: "Professional brochure design for businesses in Kenya. Tri-fold, bi-fold, and custom brochures that convert readers into customers.",
    heroImage: "/images/services/brochure/hero.jpg",
    heroAlt: "Professional brochure design samples",
    sections: [
      {
        type: "text",
        title: "Brochures That Tell Your Story",
        content: "A well-designed brochure is a powerful marketing tool that educates, persuades, and converts. Whether you need a simple bi-fold for a product launch or a detailed multi-page catalog, we create brochures that capture attention and drive action. Every brochure we design is print-ready with proper bleeds, folds, and color management.",
        image: "/images/services/brochure/folded.jpg",
        imageAlt: "Folded brochure mockup",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Brochure Types We Design",
        items: [
          "Bi-Fold Brochures (2 panels)",
          "Tri-Fold Brochures (3 panels)",
          "Gate Fold Brochures",
          "Z-Fold Brochures",
          "Multi-page Booklets (up to 48 pages)",
          "Product Catalogs",
          "Service Menus",
          "Real Estate Brochures"
        ],
        image: "/images/services/brochure/types.jpg",
        imageAlt: "Different brochure fold types",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Print-Ready Delivery",
        content: "We don't just send you a PDF. Our designers prepare files with proper bleeds (3mm on all sides), crop marks, fold marks, and CMYK color conversion. We coordinate with our printing department (or your preferred printer) to ensure the final product matches exactly what you approved on screen.",
        image: "/images/services/brochure/print-ready.jpg",
        imageAlt: "Print-ready brochure file with crop marks",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you provide brochure copywriting?", answer: "We focus on design, but we can recommend trusted copywriters. We also work with your provided content." },
      { question: "Can you print the brochures too?", answer: "Yes! We offer full printing services. Contact us for pricing on quantities." }
    ]
  },

  "flyer-design": {
    title: "Flyer Design",
    category: "Graphic Design",
    metaDescription: "Eye-catching flyer design services for events, promotions, and businesses in Kenya. Fast turnaround, print-ready files.",
    heroImage: "/images/services/flyer/hero.jpg",
    heroAlt: "Professional flyer design examples",
    sections: [
      {
        type: "text",
        title: "Flyers That Get Noticed",
        content: "In a world of digital noise, a well-designed physical flyer still gets attention. Whether you're promoting a club night, a church event, a real estate open house, or a retail sale, our flyers are designed to stop people in their tracks and deliver your message instantly.",
        image: "/images/services/flyer/stack.jpg",
        imageAlt: "Stack of printed flyers",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Flyer Formats We Design",
        items: [
          "A5 Flyers (148 x 210mm) - Perfect for handouts",
          "A6 Flyers (105 x 148mm) - Great for inserts",
          "DL Flyers (99 x 210mm) - Ideal for menus",
          "A4 Flyers (210 x 297mm) - Best for detailed info",
          "Square Flyers (210 x 210mm) - Modern look",
          "Custom sizes available"
        ],
        image: "/images/services/flyer/sizes.jpg",
        imageAlt: "Different flyer size comparisons",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Digital vs. Print-Ready",
        content: "We deliver both versions: print-ready CMYK PDFs with bleeds for physical printing, and RGB optimized JPG/PNG files for social media, email marketing, or WhatsApp sharing. Your flyer works everywhere.",
        image: "/images/services/flyer/digital-print.jpg",
        imageAlt: "Flyer shown on phone and as physical print",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I provide my own design?", answer: "Yes, but we recommend letting us design it. If you have an existing design, we can prepare it for print or enhance it." }
    ]
  },

  "label-design": {
    title: "Label Design",
    category: "Graphic Design",
    metaDescription: "Custom label design for bottles, jars, and products. Professional label design services in Kenya.",
    heroImage: "/images/services/label/hero.jpg",
    heroAlt: "Product label design examples",
    sections: [
      {
        type: "text",
        title: "Labels That Tell Your Story",
        content: "On crowded shelves, your label is your silent salesperson. Whether you're launching a new hot sauce, organic honey, coffee brand, or skincare line, we design labels that communicate quality and capture attention. We consider shape, material, adhesion, and printing method for every project.",
        image: "/images/services/label/bottles.jpg",
        imageAlt: "Labeled product bottles",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Industries We Serve",
        items: [
          "Beverages (water, juice, soda, alcohol)",
          "Food products (honey, spices, sauces)",
          "Cosmetics and skincare",
          "Cleaning products",
          "Essential oils and aromatherapy",
          "Pharmaceutical supplements",
          "Candle and soap labels"
        ],
        image: "/images/services/label/industries.jpg",
        imageAlt: "Labels for different industries",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Regulatory Compliance",
        content: "We stay updated on KEBS and other regulatory labeling requirements. Our labels include proper space for batch numbers, expiry dates, nutritional information, and legal disclaimers where required — while keeping the design beautiful.",
        image: "/images/services/label/compliance.jpg",
        imageAlt: "Label showing compliance elements",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you design for specific bottle shapes?", answer: "Yes! Send us photos/dimensions of your bottle and we'll create labels that fit perfectly, including curved surface considerations." }
    ]
  },

  "business-card-design": {
    title: "Business Card Design",
    category: "Graphic Design",
    metaDescription: "Professional business card design that makes a lasting first impression. Premium designs for Kenyan professionals.",
    heroImage: "/images/services/business-card/hero.jpg",
    heroAlt: "Premium business card designs",
    sections: [
      {
        type: "text",
        title: "First Impressions Matter",
        content: "Your business card is often the first physical artifact someone takes away from meeting you. It should reflect your professionalism and attention to detail. We design business cards that people keep — not ones that go straight into the trash.",
        image: "/images/services/business-card/premium.jpg",
        imageAlt: "Premium business card mockups",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Design Options",
        items: [
          "Standard (85 x 55mm) design",
          "Square business cards",
          "Rounded corner cards",
          "Vertical orientation cards",
          "Double-sided designs",
          "Spot UV/foiling effects (design only)",
          "Minimalist to elaborate styles"
        ],
        image: "/images/services/business-card/styles.jpg",
        imageAlt: "Various business card styles",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Print-Ready Delivery",
        content: "We deliver files set up exactly for printing — with proper bleeds, safe zones, and color profiles. We coordinate with our printing department for premium finishes like matte lamination, spot UV, or raised ink if you choose to print with us.",
        image: "/images/services/business-card/print-ready.jpg",
        imageAlt: "Business card print-ready file",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I get both print and digital versions?", answer: "Yes! We provide print-ready files plus digital PNG files optimized for LinkedIn, email signatures, and WhatsApp sharing." }
    ]
  },

  "menu-design": {
    title: "Menu Design",
    category: "Graphic Design",
    metaDescription: "Professional menu design for restaurants, cafes, and hotels in Kenya. Menus that increase sales and enhance dining experience.",
    heroImage: "/images/services/menu/hero.jpg",
    heroAlt: "Restaurant menu design examples",
    sections: [
      {
        type: "text",
        title: "Menus That Sell More",
        content: "Your menu is your most important sales tool. Strategic design can guide customers to your most profitable items, suggest pairings, and create a pleasant ordering experience. We design menus that balance readability, branding, and psychology.",
        image: "/images/services/menu/restaurant.jpg",
        imageAlt: "Restaurant menu on table",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Menu Types We Design",
        items: [
          "Single-page restaurant menus",
          "Multi-page food menus",
          "Drink and cocktail menus",
          "Children's menus",
          "Breakfast/lunch/dinner menus",
          "Takeaway menus",
          "Digital/QR code menus",
          "Buffet and catering menus",
          "Hotel room service menus"
        ],
        image: "/images/services/menu/types.jpg",
        imageAlt: "Different menu types",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Food Photography Integration",
        content: "We can work with your food photos or recommend a photographer. For menu design, we know how to place images strategically — not just randomly — to guide the eye and increase appetite appeal.",
        image: "/images/services/menu/food-photo.jpg",
        imageAlt: "Menu with food photography",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you offer menu printing too?", answer: "Yes! We print menus on various materials — from standard paper to laminated, waterproof, and even reusable plastic menus." }
    ]
  },

  // ==================== LARGE FORMAT PRINTING ====================
  "pvc-flex-banners": {
    title: "PVC Flex Banners",
    category: "Large Format Printing",
    metaDescription: "High-quality PVC flex banner printing in Nairobi. Weather-resistant, durable banners for outdoor advertising.",
    heroImage: "/images/services/pvc-banner/hero.jpg",
    heroAlt: "Large PVC flex banner installation",
    sections: [
      {
        type: "text",
        title: "Durable Outdoor Banners",
        content: "Our PVC flex banners are manufactured using premium 320gsm flexible vinyl with UV-resistant inks that won't fade quickly. Perfect for outdoor advertising, construction sites, events, retail promotions, and political campaigns. We offer multiple finishing options for easy installation.",
        image: "/images/services/pvc-banner/outdoor.jpg",
        imageAlt: "Outdoor PVC banner on building",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Specifications",
        items: [
          "Material: 320gsm PVC Flex",
          "Finish: Matte or Glossy",
          "UV Resistant (2+ years outdoor life)",
          "Waterproof and Tear-resistant",
          "Print resolution: 720dpi high quality",
          "Maximum width: 3.2 meters (seamless)"
        ],
        image: "/images/services/pvc-banner/material.jpg",
        imageAlt: "PVC flex material closeup",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Finishing Options",
        content: "We offer hems on all edges, eyelet/grommet installation every 2 feet for rope or zip-tie mounting, pole pockets (sleeves) for banner stands, and Velcro strips for temporary installations. All finishing is done in-house for quality control.",
        image: "/images/services/pvc-banner/finishing.jpg",
        imageAlt: "Banner with eyelets and hem",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "What's the largest banner you can print?", answer: "We can print up to 3.2 meters wide seamlessly. For larger widths, we can seam panels together." }
    ]
  },

  "roll-up-banners": {
    title: "Roll Up Banners",
    category: "Large Format Printing",
    metaDescription: "Professional roll-up banner printing for events, trade shows, and offices in Nairobi. Portable, reusable, and professional.",
    heroImage: "/images/services/rollup/hero.jpg",
    heroAlt: "Roll up banner display at event",
    sections: [
      {
        type: "text",
        title: "Portable Professional Displays",
        content: "Roll-up banners (also called pull-up banners, retractable banners) are the go-to choice for trade shows, events, conferences, and office reception areas. They set up in seconds, pack into a slim carry bag, and look professional every time.",
        image: "/images/services/rollup/display.jpg",
        imageAlt: "Roll up banner at trade show booth",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Available Sizes",
        items: [
          "Standard: 80cm x 200cm (most popular)",
          "Large: 100cm x 200cm",
          "Mini: 60cm x 160cm",
          "Custom sizes available"
        ],
        image: "/images/services/rollup/sizes.jpg",
        imageAlt: "Roll up banner size comparison",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Hardware Quality",
        content: "We use premium aluminum hardware with a stable base and smooth retraction mechanism. The graphic prints on high-quality satin or blockout material and attaches easily to the mechanism. Replacement graphics available for existing hardware.",
        image: "/images/services/rollup/hardware.jpg",
        imageAlt: "Roll up banner hardware mechanism",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I buy just the replacement graphic?", answer: "Yes! If you already have a stand, we can provide replacement graphics." }
    ]
  },

  "backdrop-banners": {
    title: "Backdrop Banners",
    category: "Large Format Printing",
    metaDescription: "Custom backdrop banners for events, weddings, photoshoots, and press conferences in Kenya.",
    heroImage: "/images/services/backdrop/hero.jpg",
    heroAlt: "Backdrop banner at event stage",
    sections: [
      {
        type: "text",
        title: "Event Backdrops That Wow",
        content: "Whether it's a wedding, corporate gala, product launch, or press conference, your backdrop is the visual centerpiece. It's in every photo, every video, and every memory. We print seamless backdrops up to 20 feet wide with vibrant, non-reflective finishes.",
        image: "/images/services/backdrop/stage.jpg",
        imageAlt: "Backdrop banner on event stage",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Backdrop Types",
        items: [
          "Step and repeat (with logos)",
          "Wedding monogram backdrops",
          "Press conference backdrops",
          "Photo booth backdrops",
          "Church altar backdrops",
          "Product launch displays",
          "Awards ceremony banners"
        ],
        image: "/images/services/backdrop/types.jpg",
        imageAlt: "Different backdrop styles",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Materials & Finishes",
        content: "Choose from matte vinyl (non-reflective, great for photos), fabric (lightweight, washable, no wrinkles), or blockout (no light bleed, double-sided possible). We also offer installation frames, truss systems, and pipe-and-drape setups.",
        image: "/images/services/backdrop/material.jpg",
        imageAlt: "Backdrop material closeup",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you offer backdrop stands/frames?", answer: "Yes! We offer aluminum truss systems and pipe-and-drape frames. Contact us for a quote based on your size needs." }
    ]
  },

  "tear-drop-banners": {
    title: "Tear-drop Banners",
    category: "Large Format Printing",
    metaDescription: "Tear-drop and feather flag banners for outdoor events, car dealerships, and retail promotions in Kenya.",
    heroImage: "/images/services/teardrop/hero.jpg",
    heroAlt: "Tear-drop banners outdoors",
    sections: [
      {
        type: "text",
        title: "High-Impact Outdoor Flags",
        content: "Tear-drop (feather flag) banners are perfect for curbside attention. Their tall, curved shape catches wind without falling over and draws eyes from far away. Ideal for car dealerships, retail sidewalk sales, construction sites, and outdoor events.",
        image: "/images/services/teardrop/outdoor.jpg",
        imageAlt: "Tear-drop banners outside shop",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Flag Sizes",
        items: [
          "Small: 150cm x 40cm",
          "Medium: 200cm x 50cm (most popular)",
          "Large: 300cm x 60cm",
          "Extra Large: 400cm x 80cm"
        ],
        image: "/images/services/teardrop/sizes.jpg",
        imageAlt: "Tear-drop flag size comparison",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Complete Kit",
        content: "Each flag comes with a fiberglass pole system (crossbase or spike), durable ground stake or crossbase stand, and a carrying bag. The flag material is dye-sublimated polyester that's washable, fade-resistant, and wrinkle-free.",
        image: "/images/services/teardrop/kit.jpg",
        imageAlt: "Complete tear-drop flag kit",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Are they double-sided?", answer: "Yes! Standard is double-sided (mirrored or same design both sides). Single-sided is available for lower cost." }
    ]
  },

  "billboards": {
    title: "Billboards",
    category: "Large Format Printing",
    metaDescription: "Large-format billboard printing for outdoor advertising in Nairobi and across Kenya. High-visibility, weather-resistant prints.",
    heroImage: "/images/services/billboard/hero.jpg",
    heroAlt: "Large billboard along highway",
    sections: [
      {
        type: "text",
        title: "Highway to High Street Visibility",
        content: "Billboards are the kings of outdoor advertising. We print massive, durable graphics for standard 14ft x 48ft billboards, digital billboard skins, and custom sizes. Our UV-resistant inks and heavy-duty vinyl ensure your message stays vibrant for years.",
        image: "/images/services/billboard/highway.jpg",
        imageAlt: "Billboard along highway",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Billboard Services",
        items: [
          "Standard 14ft x 48ft billboard printing",
          "Custom size billboards",
          "Digital billboard skins",
          "Bulletin and poster panel printing",
          "Installation available",
          "Permit assistance (where applicable)"
        ],
        image: "/images/services/billboard/installation.jpg",
        imageAlt: "Billboard installation team",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Material Quality",
        content: "We use premium 340gsm or 440gsm scrim vinyl for billboards — puncture-resistant, wind-rated, and UV-protected. Inks are outdoor-rated for long-term durability without significant fading. For high-wind areas, we recommend heavier material with reinforced hems.",
        image: "/images/services/billboard/material.jpg",
        imageAlt: "Billboard vinyl material closeup",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you install billboards?", answer: "Yes! We have experienced installation crews for Nairobi and surrounding areas. Installation cost depends on height and location." }
    ]
  },

  "shop-signage": {
    title: "Shop Signage",
    category: "Large Format Printing",
    metaDescription: "Custom shop signage for retail stores, offices, and businesses in Kenya. Acrylic, flex, lightbox, and 3D letter signs.",
    heroImage: "/images/services/signage/hero.jpg",
    heroAlt: "Professional shop front signage",
    sections: [
      {
        type: "text",
        title: "Your Store's First Handshake",
        content: "Your shop signage is often the first impression potential customers have of your business. A clear, professional, attractive sign invites people in. We design and fabricate all types of shop signage — from simple flex faces to premium illuminated 3D letters.",
        image: "/images/services/signage/shop-front.jpg",
        imageAlt: "Shop front with signage",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Signage Types",
        items: [
          "Acrylic panel signs",
          "PVC foam board signs",
          "Flex face signs (illuminated)",
          "Lightbox signs (LED backlit)",
          "3D letter signs (acrylic/ metal)",
          "Channel letters (illuminated)",
          "Aluminum composite signs",
          "Corflute (coroplast) temporary signs",
          "Frosted window vinyl lettering"
        ],
        image: "/images/services/signage/types.jpg",
        imageAlt: "Different shop signage types",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Illuminated Options",
        content: "Make your sign work 24/7 with LED illumination. We offer front-lit (flex face), back-lit (halo effect on letters), and edge-lit acrylic signs. LEDs are energy-efficient, long-lasting, and much cooler than fluorescent or neon.",
        image: "/images/services/signage/illuminated.jpg",
        imageAlt: "Illuminated shop sign at night",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you handle permit applications?", answer: "We can advise on Nairobi county signage permit requirements and assist with application documents." }
    ]
  },

  "window-graphics": {
    title: "Window Graphics",
    category: "Large Format Printing",
    metaDescription: "Custom window graphics, frosted vinyl, and window decals for offices, shops, and glass partitions in Kenya.",
    heroImage: "/images/services/window/hero.jpg",
    heroAlt: "Window graphics on storefront",
    sections: [
      {
        type: "text",
        title: "Privacy with Personality",
        content: "Window graphics offer the perfect balance: branding + privacy + light control. We print perforated window vinyl (see-through from inside, full color from outside), frosted vinyl for privacy, and opaque decals for glass partitions. All are removable without residue.",
        image: "/images/services/window/storefront.jpg",
        imageAlt: "Storefront window with full graphics",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Window Graphic Applications",
        items: [
          "Storefront branding and hours",
          "Office glass partition branding",
          "Frosted privacy film for meeting rooms",
          "Perforated one-way vision for vehicles/windows",
          "Seasonal/holiday window decals",
          "Safety and directional window markings",
          "Real estate window displays"
        ],
        image: "/images/services/window/applications.jpg",
        imageAlt: "Various window graphic applications",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Installation & Removal",
        content: "Our team professionally installs all window graphics bubble-free. When you're ready for a change, we remove them cleanly without residue or damage to glass. Perforated and frosted vinyls can last years indoors or in direct sun.",
        image: "/images/services/window/installation.jpg",
        imageAlt: "Window graphic installation process",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I see out from inside?", answer: "Yes! Perforated window vinyl has tiny holes that let you see out clearly while showing full-color graphics to people outside." }
    ]
  },

  "wall-murals": {
    title: "Wall Murals",
    category: "Large Format Printing",
    metaDescription: "Custom wall murals and wallpaper printing for offices, restaurants, hotels, and homes in Kenya.",
    heroImage: "/images/services/mural/hero.jpg",
    heroAlt: "Large wall mural in office",
    sections: [
      {
        type: "text",
        title: "Transform Your Space",
        content: "A custom wall mural turns any blank wall into a conversation piece. From office lobbies and restaurant feature walls to kids' rooms and hotel lobbies, we print seamless murals on wallpaper, fabric, or removable vinyl. Any image, any size, any surface.",
        image: "/images/services/mural/office.jpg",
        imageAlt: "Office wall mural installation",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Mural Materials",
        items: [
          "Smooth wallpaper (matte or satin finish)",
          "Textured canvas (art gallery look)",
          "Removable vinyl (no damage, perfect for rentals)",
          "Fabric (wrinkle-free, washable)",
          "Anti-graffiti laminate (for public spaces)",
          "Fire-retardant materials (commercial required)"
        ],
        image: "/images/services/mural/materials.jpg",
        imageAlt: "Different wall mural materials",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Seamless Installation",
        content: "We panel large murals into manageable sections for perfect alignment during installation. Our installers ensure no gaps, no wrinkles, and perfect edge-to-edge coverage. For irregular walls (pillars, curved surfaces), we customize each panel individually.",
        image: "/images/services/mural/installation.jpg",
        imageAlt: "Wall mural panel installation",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can you match my brand colors exactly?", answer: "Yes! We can match specific Pantone or CMYK brand colors for consistent corporate branding across your space." }
    ]
  },

  "exhibition-stands": {
    title: "Exhibition Stands",
    category: "Large Format Printing",
    metaDescription: "Custom exhibition stands, trade show booths, and event displays in Nairobi. Modular and custom designs for any space.",
    heroImage: "/images/services/exhibition/hero.jpg",
    heroAlt: "Exhibition stand at trade show",
    sections: [
      {
        type: "text",
        title: "Stand Out in the Crowd",
        content: "At a trade show or exhibition, your booth is your brand headquarters. It needs to attract attention, communicate your message, and provide functional space for conversations. We design and build custom and modular exhibition stands for KICC, Sarit Centre, and venues across Kenya.",
        image: "/images/services/exhibition/booth.jpg",
        imageAlt: "Custom exhibition booth",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Exhibition Services",
        items: [
          "Custom booth design and fabrication",
          "Modular/portable display systems",
          "Pop-up displays (fast setup)",
          "Custom counters and reception desks",
          "Literature racks and brochure holders",
          "Lighting (LED, spot, backlight)",
          "Flooring (carpet, vinyl, custom printed)",
          "Graphics for all booth components",
          "Installation and dismantling"
        ],
        image: "/images/services/exhibition/components.jpg",
        imageAlt: "Exhibition stand components",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Rental vs. Purchase",
        content: "We offer both options. Rent a custom stand for a single event (we install and remove), or purchase a modular system you can reuse and reconfigure for multiple shows. Rental includes design, fabrication, transport, installation, and dismantling — everything except your staff.",
        image: "/images/services/exhibition/rental.jpg",
        imageAlt: "Rental exhibition stand setup",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "How far in advance should I book?", answer: "For custom stands, we recommend booking several weeks before the event. For modular rental, less time is usually needed." }
    ]
  },

  // ==================== VEHICLE GRAPHICS ====================
  "full-vehicle-wraps": {
    title: "Full Vehicle Wraps",
    category: "Vehicle Graphics",
    metaDescription: "Complete vehicle wrap services in Nairobi. Turn your car, van, or truck into a moving billboard with premium vinyl.",
    heroImage: "/images/services/vehicle/full-wrap-hero.jpg",
    heroAlt: "Full vehicle wrap on car",
    sections: [
      {
        type: "text",
        title: "Turn Your Vehicle Into a Billboard",
        content: "Every kilometer your vehicle drives is an advertising impression. A full vehicle wrap transforms your car, van, or truck into a professional, eye-catching mobile billboard. We use premium cast vinyl that lasts years and removes cleanly when you're ready for a change.",
        image: "/images/services/vehicle/full-wrap-car.jpg",
        imageAlt: "Full wrapped car driving",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Full Wrap Process",
        items: [
          "Vehicle measurement and template creation",
          "Custom design mockup with 3D visualization",
          "Printing on premium cast vinyl",
          "Lamination for scratch/UV protection",
          "Surface preparation and cleaning",
          "Professional installation",
          "Post-install inspection and care instructions",
          "Removal guarantee (no paint damage)"
        ],
        image: "/images/services/vehicle/full-wrap-process.jpg",
        imageAlt: "Vehicle wrap installation process",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Paint Protection Benefits",
        content: "Beyond advertising, a full wrap protects your original paint from UV rays, minor scratches, and stone chips. When the wrap is removed, the paint underneath looks showroom-fresh — an excellent resale advantage.",
        image: "/images/services/vehicle/paint-protection.jpg",
        imageAlt: "Wrap protecting paint underneath",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Will wrapping damage my paint?", answer: "No! Quality vinyl wraps actually protect paint. We use air-release adhesives that remove cleanly without residue when properly removed." }
    ]
  },

  "partial-vehicle-wraps": {
    title: "Partial Vehicle Wraps",
    category: "Vehicle Graphics",
    metaDescription: "Partial vehicle wraps for branding without full coverage. Perfect for company logos, contact info, and bold designs.",
    heroImage: "/images/services/vehicle/partial-wrap-hero.jpg",
    heroAlt: "Partial vehicle wrap on van",
    sections: [
      {
        type: "text",
        title: "Targeted Branding, Lower Cost",
        content: "Not every vehicle needs a full wrap. Partial wraps cover specific areas — doors, hood, rear, or sides — with your branding while leaving paint exposed. It's more affordable than a full wrap and still highly effective for company logos, contact info, and bold graphics.",
        image: "/images/services/vehicle/partial-wrap-van.jpg",
        imageAlt: "Van with partial wrap on sides",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Partial Wrap Options",
        items: [
          "Side-door only branding",
          "Rear window decals",
          "Hood or roof graphics",
          "Stripes and accent graphics",
          "Rear door coverage",
          "Quarter panel branding",
          "Fender and bumper graphics"
        ],
        image: "/images/services/vehicle/partial-options.jpg",
        imageAlt: "Different partial wrap options",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Perfect for Fleet Consistency",
        content: "If you have multiple vehicles, partial wraps create consistent fleet branding at a fraction of full-wrap cost. All vans get identical side-door logos and contact panels. Your team looks professional without breaking the budget.",
        image: "/images/services/vehicle/fleet-partial.jpg",
        imageAlt: "Fleet of vehicles with consistent partial wraps",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I add more later?", answer: "Yes! You can start with a partial wrap and add more coverage over time as your budget allows." }
    ]
  },

  "delivery-van-branding": {
    title: "Delivery Van Branding",
    category: "Vehicle Graphics",
    metaDescription: "Delivery van branding services in Kenya. Make your fleet recognizable and professional.",
    heroImage: "/images/services/vehicle/van-hero.jpg",
    heroAlt: "Branded delivery van",
    sections: [
      {
        type: "text",
        title: "Turn Your Delivery Fleet Into Brand Ambassadors",
        content: "Every delivery van on the road is a moving advertisement. From delivery services to your own fleet, professional van branding builds trust and recognition. Your customers will spot your van from blocks away, and new potential customers will see your brand everywhere you go.",
        image: "/images/services/vehicle/van-delivery.jpg",
        imageAlt: "Branded delivery van on road",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Van Branding Packages",
        items: [
          "Full van wraps (maximum impact)",
          "Side panel branding (most common)",
          "Rear door logos and contact info",
          "Roof graphics (for tall visibility)",
          "Magnetic signs (removable, temporary)",
          "Window perforated decals (see-out, branded)",
          "Fleet matching (consistent across all vans)"
        ],
        image: "/images/services/vehicle/van-fleet.jpg",
        imageAlt: "Fleet of branded delivery vans",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Quick Turnaround for Fleet Rollout",
        content: "If you have multiple vans to brand, we coordinate to complete them in sequence with minimal downtime. We can do multiple vans per day in our shop, or send a mobile installer to your depot for large fleets.",
        image: "/images/services/vehicle/van-installation.jpg",
        imageAlt: "Van wrap installation process",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you offer magnetic signs for rental vans?", answer: "Yes! Magnetic signs are perfect for rented or leased vans since they can be removed anytime without affecting the vehicle." }
    ]
  },

  "motorcycle-branding": {
    title: "Motorcycle Branding",
    category: "Vehicle Graphics",
    metaDescription: "Motorcycle and boda boda branding services in Nairobi. Perfect for delivery bikes, courier services, and brand promotion.",
    heroImage: "/images/services/vehicle/motorcycle-hero.jpg",
    heroAlt: "Branded motorcycle for delivery service",
    sections: [
      {
        type: "text",
        title: "Boda Boda to Brand Ambassador",
        content: "Motorcycles (boda bodas) are everywhere in Nairobi — and every bike you brand becomes a mobile billboard reaching thousands daily. We wrap fuel tanks, side panels, top boxes, and rear fenders. Perfect for delivery services, courier companies, or product promotions.",
        image: "/images/services/vehicle/motorcycle-delivery.jpg",
        imageAlt: "Branded delivery motorcycle",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Motorcycle Branding Options",
        items: [
          "Fuel tank wrap",
          "Side panel decals",
          "Top box branding",
          "Rear fender graphics",
          "Front mudguard decals",
          "Full bike wraps",
          "Reflective safety decals (night visibility)",
          "Heat-resistant tank pad logos"
        ],
        image: "/images/services/vehicle/motorcycle-panels.jpg",
        imageAlt: "Motorcycle branded panels",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Durable for Kenya Roads",
        content: "We use extra-durable vinyl that resists fuel spills, dust, mud, and daily wear. For tank wraps, we add a special overlaminate that protects against gasoline drips. Our motorcycle wraps last years under normal use.",
        image: "/images/services/vehicle/motorcycle-durable.jpg",
        imageAlt: "Durable motorcycle wrap closeup",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Will the wrap survive Nairobi rain?", answer: "Yes! Our vinyl is waterproof and UV-resistant. Rain won't affect it at all." }
    ]
  },

  "reflective-vehicle-stickers": {
    title: "Reflective Vehicle Stickers",
    category: "Vehicle Graphics",
    metaDescription: "Reflective safety stickers and branding for vehicles. Improve night visibility and meet transport regulations in Kenya.",
    heroImage: "/images/services/vehicle/reflective-hero.jpg",
    heroAlt: "Reflective stickers on truck at night",
    sections: [
      {
        type: "text",
        title: "Safety Meets Branding",
        content: "Reflective vehicle stickers serve two purposes: they increase night visibility for safety (often required by law for commercial vehicles) AND they show your branding in headlights. We print custom reflective decals for trucks, matatus, school buses, and emergency vehicles.",
        image: "/images/services/vehicle/reflective-night.jpg",
        imageAlt: "Reflective stickers glowing at night",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Reflective Applications",
        items: [
          "Company logos in reflective vinyl",
          "Fleet numbers and identification",
          "Conspicuity tape (red/yellow for trucks)",
          "School bus lettering",
          "Emergency vehicle markings",
          "Matatu route branding (night visible)",
          "Warning and caution decals",
          "License plate frames"
        ],
        image: "/images/services/vehicle/reflective-truck.jpg",
        imageAlt: "Reflective tape on truck trailer",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Diamond Grade vs Engineer Grade",
        content: "Engineer-grade reflective (standard) reflects at night from significant distances. Diamond-grade (premium) reflects from even further and is brighter. We stock both and recommend diamond-grade for high-speed roads, dark rural areas, or maximum visibility needs.",
        image: "/images/services/vehicle/reflective-grades.jpg",
        imageAlt: "Comparison of reflective grades",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Are these NTSA approved?", answer: "Our engineer-grade and diamond-grade reflectives meet Kenya Bureau of Standards requirements for commercial vehicle conspicuity." }
    ]
  },

  // ==================== OFFICE & CORPORATE BRANDING ====================
  "office-signage": {
    title: "Office Signage",
    category: "Office & Corporate Branding",
    metaDescription: "Professional office signage including reception signs, department signs, and door plaques for corporate offices in Kenya.",
    heroImage: "/images/services/office/office-signage-hero.jpg",
    heroAlt: "Professional office signage at reception",
    sections: [
      {
        type: "text",
        title: "Welcome Visitors Professionally",
        content: "Your office signage sets the tone before anyone speaks to your team. From a prestigious lobby sign to clear department directories, we design and install signage that reflects your brand's professionalism. All signage matches your corporate identity colors and fonts.",
        image: "/images/services/office/reception-sign.jpg",
        imageAlt: "Reception area with branded sign",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Office Signage Types",
        items: [
          "Reception/lobby logo signs (acrylic, metal, wood)",
          "Department identification signs",
          "Individual door plaques (name + title)",
          "Floor directory signs",
          "Frosted glass logo decals",
          "Conference room name signs",
          "Restroom and facility signs",
          "Directional wayfinding signs",
          "Parking and visitor signs"
        ],
        image: "/images/services/office/office-sign-types.jpg",
        imageAlt: "Various office sign types",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Materials & Finishes",
        content: "Choose from premium materials: brushed aluminum, frosted acrylic, solid wood, dibond (aluminum composite), PVC foam board, or glass. Finishes include matte, gloss, brushed, or custom painted to match your brand colors.",
        image: "/images/services/office/office-materials.jpg",
        imageAlt: "Different office sign materials",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you offer braille on signs?", answer: "Yes! We can add raised braille to door plaques and signage for accessibility compliance." }
    ]
  },

  "staff-id-cards": {
    title: "Staff ID Cards",
    category: "Office & Corporate Branding",
    metaDescription: "Custom staff ID cards with photo, name, department, and access control features. Professional PVC card printing in Kenya.",
    heroImage: "/images/services/office/id-cards-hero.jpg",
    heroAlt: "Professional staff ID cards",
    sections: [
      {
        type: "text",
        title: "Professional Identification for Your Team",
        content: "Staff ID cards create a professional environment, improve security, and help employees and visitors identify each other. We print full-color PVC ID cards with your logo, employee photo, name, job title, department, and expiration date. Cards include lanyards, clips, or badge holders.",
        image: "/images/services/office/id-cards-usage.jpg",
        imageAlt: "Employees wearing ID cards",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "ID Card Features",
        items: [
          "Full-color CMYK printing both sides",
          "Your company logo and branding",
          "Employee photo integration",
          "Name, title, department, ID number",
          "Expiration date (for contract staff)",
          "QR code or barcode (for check-in/out)",
          "Magnetic stripe (for door access)",
          "Holographic overlay (anti-counterfeit)",
          "PVC material (durable, waterproof)"
        ],
        image: "/images/services/office/id-card-features.jpg",
        imageAlt: "ID card with various features",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Complete System Solutions",
        content: "Beyond just printing cards, we can set up an in-house ID card system for you: camera, software, printer, and blank cards. You'll be able to print new cards instantly whenever you hire. Or we can print cards in batches based on your employee data.",
        image: "/images/services/office/id-card-system.jpg",
        imageAlt: "ID card printing system",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you store our employee data?", answer: "No. We design the template, you provide the data. We print and destroy any files after a short period for security." }
    ]
  },

  "company-profiles": {
    title: "Company Profiles",
    category: "Office & Corporate Branding",
    metaDescription: "Professionally designed and printed company profiles, capability statements, and corporate brochures in Kenya.",
    heroImage: "/images/services/office/company-profile-hero.jpg",
    heroAlt: "Professional company profile booklet",
    sections: [
      {
        type: "text",
        title: "Your Corporate Introduction",
        content: "Your company profile is often the first thing a potential client requests. It needs to present your company as credible, capable, and professional. We design and print high-quality company profiles that showcase your services, team, portfolio, and achievements.",
        image: "/images/services/office/company-profile-mockup.jpg",
        imageAlt: "Company profile booklet mockup",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "What's Included",
        items: [
          "Custom layout and design",
          "Your logo, colors, and fonts throughout",
          "Company overview and history",
          "Services or products pages",
          "Team member profiles with photos",
          "Portfolio or project highlights",
          "Client testimonials page",
          "Contact information and map",
          "Digital PDF version + printed copies"
        ],
        image: "/images/services/office/company-profile-spread.jpg",
        imageAlt: "Company profile interior spread",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Printing Options",
        content: "Choose from spiral binding (lay flat), perfect binding (softcover book), saddle stitching (stapled booklet), or loose sheets for a presentation folder. Paper options range from standard matte to premium glossy or uncoated textured paper.",
        image: "/images/services/office/company-profile-binding.jpg",
        imageAlt: "Different binding options",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I update my profile later?", answer: "Yes! We keep your source files and can update pages as needed (new team members, new projects, etc.)." }
    ]
  },

  "corporate-communication-materials": {
    title: "Corporate Communication Materials",
    category: "Office & Corporate Branding",
    metaDescription: "Professional corporate communication materials including letterheads, envelopes, presentation folders, and report templates.",
    heroImage: "/images/services/office/corporate-comm-hero.jpg",
    heroAlt: "Corporate communication stationery set",
    sections: [
      {
        type: "text",
        title: "Consistent Corporate Communication",
        content: "Every piece of paper leaving your office should reinforce your brand. From letters and proposals to internal reports and presentations, we create professionally designed templates that make your company look polished and organized.",
        image: "/images/services/office/stationery-set.jpg",
        imageAlt: "Complete stationery set",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Communication Materials We Design",
        items: [
          "Letterheads (printed or digital template)",
          "Envelopes (C4, C5, DL, window)",
          "Presentation folders (with business card slots)",
          "Report and proposal templates (Word/InDesign)",
          "Certificate and award templates",
          "Notepad and memo pad designs",
          "Invoice and receipt templates",
          "Internal memo templates",
          "Email signature templates"
        ],
        image: "/images/services/office/presentation-folder.jpg",
        imageAlt: "Presentation folder with inserts",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Printed + Digital Delivery",
        content: "We provide both professionally printed versions (letterheads, envelopes, folders) AND editable digital templates (Microsoft Word, Google Docs, InDesign) so your team can create new documents that match exactly.",
        image: "/images/services/office/digital-templates.jpg",
        imageAlt: "Digital templates on laptop",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I reorder printed materials later?", answer: "Yes! We keep your files on file. Just email us quantity and we'll print and deliver quickly." }
    ]
  },

  // ==================== PROMOTIONAL ITEMS ====================
  "branded-umbrellas": {
    title: "Branded Umbrellas",
    category: "Promotional Items",
    metaDescription: "Custom branded umbrellas for corporate gifts, promotions, and events in Kenya. Printed with your logo.",
    heroImage: "/images/services/promo/umbrella-hero.jpg",
    heroAlt: "Branded umbrellas",
    sections: [
      {
        type: "text",
        title: "Useful Gifts That Get Seen",
        content: "Everyone needs an umbrella in Nairobi's rainy seasons. Branded umbrellas are practical, appreciated, and highly visible. Every time your client uses it in the rain, dozens of people see your logo. Perfect for corporate gifts, promotional events, and staff appreciation.",
        image: "/images/services/promo/umbrellas-rain.jpg",
        imageAlt: "Branded umbrellas in use during rain",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Umbrella Options",
        items: [
          "Golf umbrellas (large, 130cm+ canopy)",
          "Compact folding umbrellas (travel size)",
          "Transparent bubble umbrellas (logo on panel)",
          "Kids umbrellas",
          "Beach/patio umbrellas (for hospitality)",
          "Automatic open/close mechanisms",
          "Custom pantone color matching",
          "Full canopy print or single panel"
        ],
        image: "/images/services/promo/umbrella-types.jpg",
        imageAlt: "Various umbrella types",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Printing Methods",
        content: "We offer screen printing (best for simple logos, very durable) or digital full-color transfer (best for complex images/photos). We can also create custom umbrella bags with your logo.",
        image: "/images/services/promo/umbrella-printing.jpg",
        imageAlt: "Logo printing on umbrella panel",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "What's the minimum order?", answer: "Minimum order varies by item. Contact us for details and samples." }
    ]
  },

  "t-shirts-printing": {
    title: "T-Shirts Printing",
    category: "Promotional Items",
    metaDescription: "Custom t-shirt printing in Nairobi for events, corporate teams, and merchandise. Screen print, DTG, or heat transfer.",
    heroImage: "/images/services/promo/tshirt-hero.jpg",
    heroAlt: "Custom printed t-shirts",
    sections: [
      {
        type: "text",
        title: "Wear Your Brand",
        content: "Custom t-shirts turn your team, event staff, or customers into brand ambassadors. We offer multiple printing methods to match your budget, quantity, and design complexity. From simple one-color logos to full-color photo prints, we deliver quality that lasts wash after wash.",
        image: "/images/services/promo/tshirts-team.jpg",
        imageAlt: "Team wearing branded t-shirts",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Printing Methods",
        items: [
          "Screen printing (best for bulk, solid colors)",
          "Direct-to-garment (DTG) (best for small batches, full color, photos)",
          "Heat transfer vinyl (HTV) (best for names/numbers, sports jerseys)",
          "Sublimation (best for all-over prints, polyester shirts)",
          "Embroidery (caps, polos, jackets)"
        ],
        image: "/images/services/promo/tshirt-methods.jpg",
        imageAlt: "Different t-shirt printing methods",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Garment Quality",
        content: "We use premium blank shirts from quality brands. Choose from cotton, poly-cotton blend, or performance fabrics (for sports/outdoor). All shirts are pre-shrunk and available in multiple colors.",
        image: "/images/services/promo/tshirt-garments.jpg",
        imageAlt: "Various t-shirt colors and styles",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "What's the minimum order?", answer: "Minimum orders vary by printing method. Contact us for details." }
    ]
  },

  "hoodies-printing": {
    title: "Hoodies Printing",
    category: "Promotional Items",
    metaDescription: "Custom printed hoodies for corporate wear, events, and merchandise in Kenya. Screen print or embroidery.",
    heroImage: "/images/services/promo/hoodie-hero.jpg",
    heroAlt: "Custom printed hoodies",
    sections: [
      {
        type: "text",
        title: "Comfortable Branding for Cooler Days",
        content: "Hoodies make excellent corporate gifts, team wear, and retail merchandise. They're comfortable, practical, and get worn repeatedly — meaning repeated brand impressions. We offer zip-up and pullover styles in multiple weights.",
        image: "/images/services/promo/hoodies-worn.jpg",
        imageAlt: "People wearing branded hoodies",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Hoodie Features",
        items: [
          "Pullover or full-zip styles",
          "With or without hood strings",
          "Kangaroo pocket (pullover) or side pockets (zip)",
          "Cotton or poly-cotton blend",
          "Screen print, embroidery, or DTG",
          "Custom label/tag with your logo (bulk orders)",
          "Wide size range available"
        ],
        image: "/images/services/promo/hoodie-styles.jpg",
        imageAlt: "Different hoodie styles",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Embroidery for Premium Look",
        content: "For corporate hoodies, embroidery looks more professional and lasts longer than print. We can embroider your logo on the chest, sleeve, or hood. Embroidery works best for logos with limited colors and detail.",
        image: "/images/services/promo/hoodie-embroidery.jpg",
        imageAlt: "Embroidered logo on hoodie",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I mix hoodies and t-shirts in one order?", answer: "Yes! Combined quantities for bulk discounts across different garment types." }
    ]
  },

  "caps-branding": {
    title: "Caps Branding",
    category: "Promotional Items",
    metaDescription: "Custom branded caps, hats, and baseball caps for corporate gifts, events, and staff wear in Kenya.",
    heroImage: "/images/services/promo/cap-hero.jpg",
    heroAlt: "Custom embroidered caps",
    sections: [
      {
        type: "text",
        title: "Head-Turning Headwear",
        content: "A branded cap is one of the most cost-effective promotional items. People wear caps repeatedly — at work, on weekends, at the gym — giving you ongoing brand exposure. We offer structured and unstructured styles, mesh back, trucker caps, and dad hats.",
        image: "/images/services/promo/caps-worn.jpg",
        imageAlt: "People wearing branded caps",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Cap Styles",
        items: [
          "6-panel structured baseball cap (classic)",
          "5-panel unstructured cap (modern)",
          "Trucker cap (foam front, mesh back)",
          "Dad hat (low profile, curved brim)",
          "Snapback or strapback closure",
          "Performance/moisture-wicking (sports)",
          "Beanie caps (cold weather)"
        ],
        image: "/images/services/promo/cap-styles.jpg",
        imageAlt: "Different cap styles",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Embroidery vs. Print",
        content: "Embroidery is the premium choice for caps — it looks professional and lasts forever. Print (screen or transfer) works for budget projects but may crack over time. We recommend embroidery for most corporate cap projects.",
        image: "/images/services/promo/cap-embroidery.jpg",
        imageAlt: "Embroidered logo on cap",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can you match my brand colors exactly?", answer: "We have many thread colors and can match most brand colors. For exact matching, we can custom-dye threads for large orders." }
    ]
  },

  "corporate-gifts": {
    title: "Corporate Gifts",
    category: "Promotional Items",
    metaDescription: "Custom corporate gift solutions in Nairobi. Branded pens, mugs, power banks, notebooks, and premium gifts for clients.",
    heroImage: "/images/services/promo/gifts-hero.jpg",
    heroAlt: "Assorted corporate gifts",
    sections: [
      {
        type: "text",
        title: "Gifts That Impress",
        content: "Corporate gifts build relationships. Whether it's client appreciation, employee recognition, or conference swag, the right gift leaves a lasting impression. We source and brand a wide range of quality items at every price point.",
        image: "/images/services/promo/gifts-gift-box.jpg",
        imageAlt: "Corporate gift box",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Popular Corporate Gifts",
        items: [
          "Branded pens (ballpoint, gel, metal)",
          "Notebooks and journals (leather, hardcover)",
          "Power banks (custom printed)",
          "USB flash drives (preloaded with your content)",
          "Water bottles (stainless steel, insulated)",
          "Mugs (ceramic, travel, color-changing)",
          "Desk accessories (mouse pads, pen holders)",
          "Lanyards and badge holders",
          "Umbrellas (see separate listing)",
          "Tote bags and backpacks",
          "Wireless chargers and tech accessories",
          "Custom calendars and planners"
        ],
        image: "/images/services/promo/gifts-selection.jpg",
        imageAlt: "Selection of corporate gifts",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Gift Wrapping & Delivery",
        content: "We offer custom gift boxes with tissue paper, ribbons, and your logo on the box. Perfect for client gifts or holiday hampers. We can also deliver directly to multiple addresses.",
        image: "/images/services/promo/gifts-wrapped.jpg",
        imageAlt: "Wrapped corporate gifts",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do you have a catalog?", answer: "Yes! Request our corporate gifts catalog with a wide range of items at various price points." }
    ]
  },

  "promotional-products": {
    title: "Promotional Products",
    category: "Promotional Items",
    metaDescription: "Custom promotional products for events, trade shows, and marketing campaigns in Kenya. Wide range of branded giveaways.",
    heroImage: "/images/services/promo/promo-hero.jpg",
    heroAlt: "Assorted promotional products",
    sections: [
      {
        type: "text",
        title: "Giveaways That Get Noticed",
        content: "Promotional products (swag) are the foundation of many marketing campaigns. The right item, given to the right person, creates a positive brand association that lasts months. We offer everything from budget-friendly giveaways to premium keepsakes.",
        image: "/images/services/promo/promo-event.jpg",
        imageAlt: "Promotional products at event booth",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Promotional Product Categories",
        items: [
          "Writing instruments (pens, pencils, highlighters)",
          "Drinkware (mugs, cups, bottles, thermoses)",
          "Bags (totes, backpacks, drawstring, coolers)",
          "Tech (USB drives, power banks, phone stands)",
          "Apparel (t-shirts, caps, hoodies, vests)",
          "Desk items (mouse pads, sticky notes, clips)",
          "Outdoor (umbrellas, coolers, picnic mats)",
          "Health & wellness (hand sanitizer, masks, gym bags)",
          "Seasonal (Christmas gifts, calendars)"
        ],
        image: "/images/services/promo/promo-categories.jpg",
        imageAlt: "Various promotional product categories",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Flexible Orders",
        content: "Many promotional items have flexible minimum orders. We can also warehouse items for you and fulfill on demand (perfect for ongoing campaigns).",
        image: "/images/services/promo/promo-warehouse.jpg",
        imageAlt: "Warehouse of promotional products",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can you help me choose the right item?", answer: "Yes! Tell us your budget, audience, and campaign goal. We'll recommend items that fit." }
    ]
  },

  "tote-bags-printing": {
    title: "Tote Bags Printing",
    category: "Promotional Items",
    metaDescription: "Custom printed tote bags for shopping, conferences, and giveaways. Eco-friendly and reusable branding in Kenya.",
    heroImage: "/images/services/promo/tote-hero.jpg",
    heroAlt: "Custom printed tote bags",
    sections: [
      {
        type: "text",
        title: "Eco-Friendly, Practical, Visible",
        content: "With Kenya's plastic bag ban, tote bags are more popular than ever. They're reusable, eco-friendly, and fantastic mobile billboards. Every time someone shops with your tote, your brand gets seen by everyone.",
        image: "/images/services/promo/tote-shopping.jpg",
        imageAlt: "Shopping with branded tote bag",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Tote Bag Options",
        items: [
          "Cotton tote (natural, eco-friendly)",
          "Non-woven polypropylene (budget-friendly)",
          "Canvas tote (heavy duty, premium)",
          "Jute/burlap (natural, rustic)",
          "Insulated cooler totes (for food/drinks)",
          "Drawstring backpacks (events)",
          "Wine bags (single bottle size)"
        ],
        image: "/images/services/promo/tote-materials.jpg",
        imageAlt: "Different tote bag materials",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Printing Quality",
        content: "We screen print tote bags for vibrant, durable results that withstand washing and heavy use. Full-color heat transfer available for complex designs. Print on one side or both sides.",
        image: "/images/services/promo/tote-printing.jpg",
        imageAlt: "Screen printing on tote bag",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "What's the most popular tote bag?", answer: "Non-woven polypropylene offers the best value for bulk orders." }
    ]
  },

  "mugs-water-bottles-printing": {
    title: "Mugs & Water Bottles Printing",
    category: "Promotional Items",
    metaDescription: "Custom printed mugs and water bottles for corporate gifts, office use, and promotions in Kenya.",
    heroImage: "/images/services/promo/mugs-hero.jpg",
    heroAlt: "Custom printed mugs and water bottles",
    sections: [
      {
        type: "text",
        title: "Drinkware That Gets Used Daily",
        content: "Coffee mugs sit on desks where clients and coworkers see them daily. Water bottles go to the gym, office, and on trips. Both are practical items that keep your brand top-of-mind. We offer ceramic mugs, travel mugs, and various water bottles.",
        image: "/images/services/promo/mugs-desk.jpg",
        imageAlt: "Branded mug on office desk",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Drinkware Options",
        items: [
          "Ceramic mugs (various sizes)",
          "Color-changing mugs (reveal design with heat)",
          "Travel mugs with lids (stainless steel)",
          "Stainless steel water bottles (insulated)",
          "Plastic sports bottles (clear or colored)",
          "Glass bottles with silicone sleeve",
          "Wine glasses and pint glasses",
          "Can coolers and koozies"
        ],
        image: "/images/services/promo/mugs-options.jpg",
        imageAlt: "Various drinkware options",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Printing Methods",
        content: "Mugs: sublimation printing (full-color, permanent, dishwasher-safe). Water bottles: screen print (most durable) or UV print (full-color). For stainless steel, we can laser engrave for a premium, permanent finish.",
        image: "/images/services/promo/mugs-printing.jpg",
        imageAlt: "Sublimation printing on mug",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Are printed mugs dishwasher safe?", answer: "Sublimation printed mugs are top-rack dishwasher safe. Screen printed mugs should be hand-washed for longest life." }
    ]
  },

  "notebooks-diaries": {
    title: "Notebooks & Diaries",
    category: "Promotional Items",
    metaDescription: "Custom branded notebooks, diaries, and journals for corporate gifts and office use in Kenya.",
    heroImage: "/images/services/promo/notebook-hero.jpg",
    heroAlt: "Custom branded notebooks",
    sections: [
      {
        type: "text",
        title: "Practical, Professional, Kept",
        content: "Notebooks and diaries are among the most kept promotional items. People use them daily for months. Unlike a pen or mug, a notebook carries your brand into meetings, conferences, and work sessions — places where decisions get made.",
        image: "/images/services/promo/notebook-use.jpg",
        imageAlt: "Using branded notebook in meeting",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Notebook Options",
        items: [
          "A5 spiral notebooks (lay flat)",
          "A5 hardcover journals (premium)",
          "Pocket notebooks (Moleskine style)",
          "Custom printed covers (full color)",
          "Embossed/foiled logo on cover",
          "Ruled, dotted, grid, or blank pages",
          "Custom page count",
          "Yearly planners and diaries"
        ],
        image: "/images/services/promo/notebook-styles.jpg",
        imageAlt: "Different notebook styles",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Custom Interior Pages",
        content: "Beyond your logo on the cover, we can print custom inside pages: your company calendar, mission statement, team directory, note pages, or even branded divider tabs. Perfect for client gift sets or employee handbooks.",
        image: "/images/services/promo/notebook-interior.jpg",
        imageAlt: "Custom interior notebook pages",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can I see a sample before bulk order?", answer: "Yes! For larger orders, we can produce a sample notebook for approval." }
    ]
  },

  // ==================== WEB SERVICES ====================
  "website-design-development": {
    title: "Website Design & Development",
    category: "Web Services",
    metaDescription: "Professional website design and development services in Kenya. Custom, responsive websites that drive results.",
    heroImage: "/images/services/web/website-hero.jpg",
    heroAlt: "Website design on multiple devices",
    sections: [
      {
        type: "text",
        title: "Your 24/7 Digital Storefront",
        content: "Your website never closes. It's the first place potential customers go to learn about you. We build professional, fast, mobile-friendly websites that look great on any device and convert visitors into customers. Every site is custom designed — no templates or cookie-cutter solutions.",
        image: "/images/services/web/responsive.jpg",
        imageAlt: "Website on desktop, tablet, and phone",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "What We Build",
        items: [
          "Corporate/business websites",
          "E-commerce stores (sell products online)",
          "Portfolio websites (creatives, photographers)",
          "Restaurant websites (menus, reservations)",
          "Real estate websites (property listings)",
          "Educational/school websites",
          "Non-profit and church websites",
          "Landing pages (campaign specific)",
          "Membership/subscription sites"
        ],
        image: "/images/services/web/types.jpg",
        imageAlt: "Different website types",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Tech Stack Options",
        content: "We build on platforms that match your needs: WordPress (most flexible, easy to manage), Webflow (designer-friendly, modern), Shopify (best for e-commerce), or custom React/Next.js (maximum performance, full control). We'll recommend the best fit for your budget and requirements.",
        image: "/images/services/web/platforms.jpg",
        imageAlt: "Website platform logos",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Will I be able to update the site myself?", answer: "Yes! We build on user-friendly CMS platforms. We'll train you (or your team) on adding pages, updating text, and changing images." }
    ]
  },

  "web-applications": {
    title: "Web Applications",
    category: "Web Services",
    metaDescription: "Custom web application development for businesses. Dashboards, portals, booking systems, and internal tools.",
    heroImage: "/images/services/web/webapp-hero.jpg",
    heroAlt: "Web application dashboard",
    sections: [
      {
        type: "text",
        title: "Software for Your Business",
        content: "Beyond simple websites, we build custom web applications — private dashboards, client portals, booking systems, inventory management, and internal tools. If your business runs on spreadsheets and manual processes, a custom web app could save hours every week.",
        image: "/images/services/web/dashboard.jpg",
        imageAlt: "Admin dashboard interface",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Web App Examples We've Built",
        items: [
          "Client/customer portals (login, view data)",
          "Booking and appointment systems",
          "Inventory and stock management",
          "Staff task management dashboards",
          "Report generation tools",
          "School management systems (student/parent portals)",
          "Property management systems (rent, maintenance)",
          "CRM (customer relationship management)",
          "Application forms with admin panels"
        ],
        image: "/images/services/web/app-examples.jpg",
        imageAlt: "Various web app interfaces",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Technology Stack",
        content: "We build modern, scalable web apps using React, Node.js, Python/Django, or Laravel. Databases include PostgreSQL, MySQL, or MongoDB. All apps are secure (SSL, authentication, role-based access) and hosted on reliable cloud servers.",
        image: "/images/services/web/tech-stack.jpg",
        imageAlt: "Web development technology stack",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do I need a web app or just a website?", answer: "If users need to log in, manage data, or perform actions unique to their account — you need a web app. We'll help you decide." }
    ]
  },

  "responsive-website-design": {
    title: "Responsive Website Design",
    category: "Web Services",
    metaDescription: "Mobile-friendly responsive web design. Your website will look perfect on phones, tablets, and desktops.",
    heroImage: "/images/services/web/responsive-hero.jpg",
    heroAlt: "Responsive design across devices",
    sections: [
      {
        type: "text",
        title: "One Site, All Devices",
        content: "Over 60% of web traffic in Kenya comes from mobile phones. If your site isn't mobile-friendly, you're losing customers. Responsive design means your website automatically adjusts layout, images, and navigation to look perfect on any screen size.",
        image: "/images/services/web/mobile-test.jpg",
        imageAlt: "Testing website on mobile",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "What Responsive Design Includes",
        items: [
          "Fluid grids (layouts that flex)",
          "Flexible images (scale without breaking)",
          "CSS media queries (different styles per device)",
          "Touch-friendly buttons and navigation",
          "Readable font sizes on small screens",
          "Optimized mobile menu (hamburger)",
          "Tested on iOS and Android devices",
          "Tested on Chrome, Safari, Firefox"
        ],
        image: "/images/services/web/responsive-breakpoints.jpg",
        imageAlt: "Responsive design breakpoints",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "SEO Benefit",
        content: "Google prioritizes mobile-friendly websites in search results. A responsive site also means one URL for all devices (no separate mobile site), which helps your SEO. We ensure your responsive site passes Google's mobile-friendly test.",
        image: "/images/services/web/mobile-seo.jpg",
        imageAlt: "Google mobile-friendly test result",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do I need a separate mobile site?", answer: "No! Responsive design means one site works everywhere. Separate mobile sites are outdated." }
    ]
  },

  "website-maintenance": {
    title: "Website Maintenance",
    category: "Web Services",
    metaDescription: "Website maintenance plans in Kenya. Security updates, backups, bug fixes, and content updates.",
    heroImage: "/images/services/web/maintenance-hero.jpg",
    heroAlt: "Website maintenance dashboard",
    sections: [
      {
        type: "text",
        title: "Keep Your Site Secure & Updated",
        content: "Websites need ongoing care. Software updates, security patches, backups, and bug fixes are essential to keep your site running smoothly and safely. Our maintenance plans give you peace of mind so you can focus on your business.",
        image: "/images/services/web/security-updates.jpg",
        imageAlt: "Software update notification",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Maintenance Services",
        items: [
          "Weekly WordPress/plugin/core updates",
          "Daily automated backups (offsite storage)",
          "Security monitoring and malware scanning",
          "Uptime monitoring (alert if site goes down)",
          "Broken link checking",
          "Performance optimization (speed)",
          "Database optimization",
          "Form testing and spam protection",
          "Emergency restore (if site breaks)",
          "Monthly analytics report (traffic)"
        ],
        image: "/images/services/web/backup.jpg",
        imageAlt: "Website backup illustration",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Content Updates Available",
        content: "Need text changes, new images, or a blog post published? Our plans include content updates. You send the request, we make the change quickly.",
        image: "/images/services/web/content-update.jpg",
        imageAlt: "Updating website content",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do I really need a maintenance plan?", answer: "If your site runs on WordPress (most do), unupdated plugins are the #1 cause of hacked sites. Yes — you need regular updates." }
    ]
  },

  "ui-ux-design": {
    title: "UI/UX Design",
    category: "Web Services",
    metaDescription: "User interface and user experience design for websites and applications. Research, wireframing, prototyping.",
    heroImage: "/images/services/web/uiux-hero.jpg",
    heroAlt: "UI/UX design wireframes to prototype",
    sections: [
      {
        type: "text",
        title: "Design That Users Love",
        content: "Beautiful design is worthless if users can't figure out how to use it. UX (User Experience) ensures your site or app is intuitive and efficient. UI (User Interface) makes it visually appealing. Together, they create experiences that users enjoy.",
        image: "/images/services/web/user-testing.jpg",
        imageAlt: "User testing session",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Our UI/UX Process",
        items: [
          "User research (interviews, surveys)",
          "Competitor analysis",
          "User flows and journey mapping",
          "Wireframing (low-fidelity layouts)",
          "Clickable prototypes (test before coding)",
          "User testing and feedback",
          "High-fidelity UI design",
          "Design system/components creation",
          "Handoff to developers with specs"
        ],
        image: "/images/services/web/wireframe.jpg",
        imageAlt: "Wireframe sketches",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Tools We Use",
        content: "We design using Figma (industry standard, collaborative, free for clients to view). You'll get a shareable link to see your designs, leave comments, and approve before any development begins.",
        image: "/images/services/web/figma.jpg",
        imageAlt: "Figma design interface",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Do I need UI/UX design or just 'web design'?", answer: "For simple brochure sites, standard web design is fine. For apps, e-commerce, or complex sites — UI/UX first prevents costly mistakes." }
    ]
  },

  "seo-search-engine-optimization": {
    title: "Search Engine Optimization (SEO)",
    category: "Web Services",
    metaDescription: "SEO services to help your website rank on Google. On-page optimization, keyword research, and local SEO for Kenyan businesses.",
    heroImage: "/images/services/web/seo-hero.jpg",
    heroAlt: "Google search results with ranking",
    sections: [
      {
        type: "text",
        title: "Get Found on Google",
        content: "Having a great website doesn't matter if no one can find it. SEO (Search Engine Optimization) helps your site rank higher in Google search results. When someone searches for your services, we help you show up at the top.",
        image: "/images/services/web/google-search.jpg",
        imageAlt: "Google search results",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "SEO Services We Offer",
        items: [
          "Keyword research (what your customers search for)",
          "On-page optimization (titles, descriptions, headings)",
          "Content strategy (blog posts, service pages)",
          "Technical SEO (site speed, mobile, structured data)",
          "Local SEO (Google Business Profile optimization)",
          "Backlink analysis and building",
          "SEO audit and recommendations",
          "Monthly ranking reports"
        ],
        image: "/images/services/web/seo-keywords.jpg",
        imageAlt: "Keyword research tool",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Realistic Expectations",
        content: "SEO is not instant. It typically takes time to see significant results, depending on competition. We set realistic expectations, track progress monthly, and focus on sustainable, white-hat strategies that won't get penalized by Google.",
        image: "/images/services/web/seo-growth.jpg",
        imageAlt: "SEO growth chart",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "Can you guarantee #1 on Google?", answer: "No ethical SEO provider can guarantee #1. Anyone who does is lying or using black-hat tactics that will eventually get you banned." }
    ]
  },

  "custom-software-development": {
    title: "Custom Software Development",
    category: "Web Services",
    metaDescription: "Custom software development for businesses in Kenya. Internal tools, automation, and business process optimization.",
    heroImage: "/images/services/web/custom-software-hero.jpg",
    heroAlt: "Custom software development",
    sections: [
      {
        type: "text",
        title: "Software Built for Your Exact Needs",
        content: "Off-the-shelf software often doesn't fit your unique workflows. You end up changing how you work to fit the software. Custom software does the opposite — it adapts to how YOU work. We build internal tools, automation systems, and business applications that save time, reduce errors, and give you competitive advantage.",
        image: "/images/services/web/custom-dashboard.jpg",
        imageAlt: "Custom software dashboard",
        imagePosition: "right"
      },
      {
        type: "list",
        title: "Custom Software Examples",
        items: [
          "Inventory management systems",
          "Sales and order tracking",
          "Invoice and payment systems",
          "HR and payroll portals",
          "Fleet management software",
          "School/student management",
          "Healthcare appointment systems",
          "Manufacturing production tracking",
          "Data reporting dashboards",
          "Legacy system modernization"
        ],
        image: "/images/services/web/custom-examples.jpg",
        imageAlt: "Various custom software examples",
        imagePosition: "left"
      },
      {
        type: "text",
        title: "Our Development Process",
        content: "We follow agile methodology: Discovery & requirements gathering, Architecture planning, Sprint-based development, Regular demos and feedback, Testing & QA, Deployment, Training & handover, Ongoing support. You'll never be surprised — you see progress regularly.",
        image: "/images/services/web/agile-process.jpg",
        imageAlt: "Agile development process diagram",
        imagePosition: "right"
      }
    ],
    faq: [
      { question: "What's the difference between a web app and custom software?", answer: "Often the same thing. 'Custom software' can also include desktop or mobile apps. We focus on web-based software unless you specifically need native desktop/mobile." }
    ]
  }
};