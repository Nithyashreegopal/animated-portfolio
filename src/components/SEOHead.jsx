import { Helmet } from "react-helmet-async";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL = "https://animated-portfolio-ten-blush.vercel.app";
const PROFILE_IMAGE = `${BASE_URL}/assets/nithyashree.jpg`;
const SITE_NAME = "Nithyashree G V - AI & Data Science Developer";
const PERSON_ID = `${BASE_URL}/#person`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const PERSON_NAME = "Nithyashree G V";
const PERSON_EMAIL = "nithyashreegopal2006@gmail.com";
const TWITTER_HANDLE = "@nithyashree_gv";
const LAST_MODIFIED = "2026-06-01";

// Profile images
const ALL_IMAGES = [
  {
    url: `${BASE_URL}/assets/nithyashree.jpg`,
    name: "Nithyashree G V Official Profile Photo",
    caption:
      "Official profile photo of Nithyashree G V, Artificial Intelligence and Data Science undergraduate, MKCE Karur",
    representativeOfPage: true,
  },
  {
    url: `${BASE_URL}/assets/profiles/nithyashree-official-profile.jpg`,
    name: "Nithyashree G V Professional Profile",
    caption:
      "Nithyashree G V professional profile — B.Tech AI & Data Science, MKCE Karur",
  },
  {
    url: `${BASE_URL}/assets/profiles/nithyashree-developer-portfolio.jpg`,
    name: "Nithyashree G V Full Stack Developer",
    caption:
      "Nithyashree G V developer portfolio photo — Python, Flask, MySQL, ML",
  },
];

const SAME_AS = [
  "https://www.linkedin.com/in/nithyashree-gv-42905b323/",
  "https://github.com/Nithyashreegopal",
  BASE_URL,
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const buildImageObject = (
  { url, name, caption, representativeOfPage = false },
  index,
) => ({
  "@type": "ImageObject",
  "@id": `${BASE_URL}/#image-${index}`,
  url: url,
  contentUrl: url,
  name: name,
  caption: caption,
  description: caption,
  author: { "@id": PERSON_ID, name: PERSON_NAME },
  creator: {
    "@type": "Person",
    name: PERSON_NAME,
    url: BASE_URL,
  },
  copyrightHolder: { "@id": PERSON_ID, name: PERSON_NAME },
  copyrightYear: "2026",
  copyrightNotice: `© 2026 ${PERSON_NAME}. All rights reserved.`,
  creditText: PERSON_NAME,
  license: `${BASE_URL}/license`,
  acquireLicensePage: `${BASE_URL}/contact`,
  inLanguage: "en",
  ...(representativeOfPage ? { representativeOfPage: true } : {}),
});

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

const buildPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  alternateName: [
    "Nithyashree G V",
    "Nithyashree",
    "Nithyashree MKCE",
    "Nithyashree Karur",
    "Nithyashree Developer",
  ],
  givenName: "Nithyashree",
  familyName: "G V",
  honorificPrefix: "Ms.",
  gender: "Female",
  nationality: { "@type": "Country", name: "India" },
  description:
    "Nithyashree G V is an Artificial Intelligence and Data Science undergraduate at M. Kumarasamy College of Engineering, Karur (2024–2028). Full-stack developer with experience in Python, Flask, MySQL, Machine Learning, and IoT.",
  url: BASE_URL,
  email: PERSON_EMAIL,
  image: ALL_IMAGES.map(buildImageObject),
  mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/` },
  sameAs: SAME_AS,
  jobTitle: [
    "AI & Data Science Student",
    "Aspiring Data Analyst",
    "Full Stack Developer",
  ],
  worksFor: { "@type": "Organization", name: "Student / Developer" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "M. Kumarasamy College of Engineering, Karur",
    alternateName: ["MKCE Karur"],
    url: "https://mkce.ac.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karur",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
      postalCode: "639113",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karur",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "professional",
      email: PERSON_EMAIL,
      availableLanguage: ["English", "Tamil"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${BASE_URL}/contact`,
      availableLanguage: ["English", "Tamil"],
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Data Analytics",
    "Python",
    "SQL",
    "Pandas",
    "Power BI",
    "Flask",
    "MySQL",
    "Full Stack Development",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Python",
    "SQL",
    "Flask",
    "MySQL",
    "Artificial Intelligence",
    "Machine Learning",
    "Random Forest",
    "Data Science",
    "Data Analytics",
    "Java",
    "C",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Leaflet.js",
    "Git",
    "GitHub",
    "VS Code",
    "Power BI",
    "Google Colab",
    "RESTful APIs",
    "IoT",
    "ESP32",
    "Cloud Computing",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Tamil", alternateName: "ta" },
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "AI & Full Stack Developer",
      description:
        "Developing AI applications and full-stack web solutions using Python, Flask, MySQL, and modern frontends.",
      skills:
        "Python, Flask, MySQL, Machine Learning, SQL, REST APIs, HTML5, CSS3, JavaScript, Leaflet.js, Power BI",
      occupationLocation: { "@type": "Country", name: "India" },
    },
  ],
  award: [
    "3rd Prize at GenCraft'25",
    "2nd Prize at National-Level Project Expo",
    "NPTEL Elite IoT & Cloud Computing",
    "Internshala Student Partner (ISP 2026)",
  ],
});

const buildWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  alternateName: [
    "Nithyashree G V Portfolio",
    "Nithyashree",
    "Nithyashree G V Official Website",
  ],
  url: BASE_URL,
  description:
    "Official portfolio of Nithyashree G V — Artificial Intelligence & Data Science Undergraduate at MKCE Karur.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  creator: { "@id": PERSON_ID },
  inLanguage: "en",
  copyrightYear: "2026",
  copyrightHolder: { "@id": PERSON_ID },
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: `${LAST_MODIFIED}T00:00:00Z`,
  image: buildImageObject(ALL_IMAGES[0], 0),
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/assets/favicon.svg`,
    width: "512",
    height: "512",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

const buildWebPageSchema = ({
  title,
  description,
  canonicalUrl,
  _image,
  pageType,
  canonicalPath,
}) => ({
  "@context": "https://schema.org",
  "@type": pageType,
  "@id": `${canonicalUrl}#webpage`,
  name: title,
  description: description,
  url: canonicalUrl,
  inLanguage: "en",
  dateModified: `${LAST_MODIFIED}T00:00:00Z`,
  datePublished: "2024-01-01T00:00:00Z",
  isPartOf: {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: BASE_URL,
  },
  about: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
  creator: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  copyrightHolder: { "@id": PERSON_ID },
  copyrightYear: "2026",
  image: buildImageObject(ALL_IMAGES[0], 0),
  primaryImageOfPage: buildImageObject(ALL_IMAGES[0], 0),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Nithyashree G V - Home",
        item: BASE_URL,
      },
      ...(canonicalPath !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: title.split("|")[0].trim(),
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  },
  potentialAction: { "@type": "ReadAction", target: [canonicalUrl] },
});

const buildImageGallerySchema = () => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${BASE_URL}/#gallery`,
  name: "Nithyashree G V - Official Photo Gallery",
  description:
    "Official photos and project showcases of Nithyashree G V, Artificial Intelligence and Data Science undergraduate from MKCE Karur",
  url: BASE_URL,
  author: { "@id": PERSON_ID },
  creator: { "@id": PERSON_ID },
  copyrightHolder: { "@id": PERSON_ID },
  copyrightYear: "2026",
  inLanguage: "en",
  image: ALL_IMAGES.map(buildImageObject),
  associatedMedia: ALL_IMAGES.map(buildImageObject),
});

const buildProfilePageSchema = ({ title, description, canonicalUrl }) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${canonicalUrl}#profilepage`,
  name: title,
  description: description,
  url: canonicalUrl,
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: `${LAST_MODIFIED}T00:00:00Z`,
  inLanguage: "en",
  about: { "@id": PERSON_ID },
  mainEntity: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
  image: buildImageObject(ALL_IMAGES[0], 0),
  isPartOf: { "@id": WEBSITE_ID },
});

const buildSocialLinksSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nithyashree G V - Social & Professional Profiles",
  description:
    "Official professional profiles of Nithyashree G V",
  author: { "@id": PERSON_ID },
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "WebPage",
        name: "Nithyashree G V LinkedIn",
        url: "https://www.linkedin.com/in/nithyashree-gv-42905b323/",
        description: "Nithyashree G V's LinkedIn professional profile",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "WebPage",
        name: "Nithyashree G V GitHub",
        url: "https://github.com/Nithyashreegopal",
        description: "Nithyashree G V's GitHub code repositories",
      },
    },
  ],
});

const buildArticleSchema = ({ title, description, canonicalUrl, article }) => {
  if (!article) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description: description,
    url: canonicalUrl,
    datePublished: `${article.publishedTime}T00:00:00Z`,
    dateModified: `${article.modifiedTime || LAST_MODIFIED}T00:00:00Z`,
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    publisher: {
      "@id": WEBSITE_ID,
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/favicon.svg` },
    },
    image: buildImageObject(ALL_IMAGES[0], 0),
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    keywords: article.tags?.join(", ") || "",
    articleSection: article.section || "Technology",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function SEOHead({
  title = `${PERSON_NAME} | Artificial Intelligence & Full Stack Developer | MKCE Karur`,
  description = `${PERSON_NAME} - Artificial Intelligence and Data Science undergraduate at M. Kumarasamy College of Engineering, Karur (2024–2028). Experienced in Python, Flask, MySQL, and Machine Learning. Contact: ${PERSON_EMAIL}`,
  keywords = "Nithyashree G V, Nithyashree, Nithyashree portfolio, Nithyashree MKCE, Nithyashree Karur, Nithyashree developer, Nithyashree Python, Nithyashree AI, AI Data Science, Full Stack Developer India, Flask Developer, MySQL, Machine Learning, MKCE Karur",
  canonicalPath = "/",
  ogType = "website",
  image = PROFILE_IMAGE,
  article = null,
  pageType = "WebPage",
}) {
  const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const isHomePage = canonicalPath === "/";
  const isArticle = !!article;

  return (
    <Helmet>
      {/* ── TITLE ──────────────────────────────────────────────────────────── */}
      <title>{title}</title>

      {/* ── CORE META ──────────────────────────────────────────────────────── */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="subject"
        content={`${PERSON_NAME} - Artificial Intelligence & Full Stack Developer`}
      />
      <meta
        name="topic"
        content="Artificial Intelligence, Data Science, Full Stack Development, Python, Flask"
      />
      <meta
        name="classification"
        content="Portfolio, Technology, Artificial Intelligence"
      />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="language" content="English" />
      <meta name="content-language" content="en-IN" />

      {/* ── AUTHOR ─────────────────────────────────────────────────────────── */}
      <meta name="author" content={PERSON_NAME} />
      <meta name="creator" content={PERSON_NAME} />
      <meta name="publisher" content={PERSON_NAME} />
      <meta name="owner" content={PERSON_NAME} />
      <meta name="designer" content={PERSON_NAME} />
      <meta
        name="copyright"
        content={`© 2026 ${PERSON_NAME}. All rights reserved.`}
      />
      <meta name="reply-to" content={PERSON_EMAIL} />

      {/* ── ROBOTS ─────────────────────────────────────────────────────────── */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot-news" content="index, follow" />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="slurp" content="index, follow" />
      <meta name="yandex" content="index, follow" />
      <meta name="baiduspider" content="index, follow" />

      {/* ── GEO ────────────────────────────────────────────────────────────── */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Karur, Tamil Nadu, India" />
      <meta name="geo.position" content="10.9601;78.0766" />
      <meta name="ICBM" content="10.9601, 78.0766" />

      {/* ── CANONICAL & ALTERNATES ─────────────────────────────────────────── */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en-in" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

      {/* ── OPEN GRAPH ─────────────────────────────────────────────────────── */}
      <meta property="og:type" content={isArticle ? "article" : ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      {/* Primary image */}
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta
        property="og:image:alt"
        content={`${PERSON_NAME} - AI & Full Stack Developer`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* All additional profile images */}

      {ALL_IMAGES.slice(1).map((img) => (
        <meta key={img.url} property="og:image" content={img.url} />
      ))}

      {/* Profile OG */}

      <meta property="profile:first_name" content="Nithyashree" />
      <meta property="profile:last_name" content="G V" />
      <meta property="profile:username" content="Nithyashreegopal" />
      <meta property="profile:gender" content="female" />

      {/* ── ARTICLE META ───────────────────────────────────────────────────── */}

      <meta
        property="article:author"
        content="https://www.linkedin.com/in/nithyashree-gv-42905b323/"
      />
      <meta property="article:publisher" content={BASE_URL} />
      {isArticle && (
        <>
          <meta
            property="article:published_time"
            content={article.publishedTime}
          />
          <meta
            property="article:modified_time"
            content={article.modifiedTime || LAST_MODIFIED}
          />
          <meta
            property="article:section"
            content={article.section || "Technology"}
          />
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* ── TWITTER CARD ───────────────────────────────────────────────────── */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={`${PERSON_NAME} - ${title.split("|")[0].trim()}`}
      />
      <meta name="twitter:domain" content="nithyashreegopal.github.io" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:label1" content="Role" />
      <meta
        name="twitter:data1"
        content="AI &amp; Data Science Developer"
      />
      <meta name="twitter:label2" content="College" />
      <meta name="twitter:data2" content="MKCE Karur" />

      {/* ── JSON-LD: Person (Knowledge Panel anchor) ───────────────────────── */}

      <script type="application/ld+json">
        {JSON.stringify(buildPersonSchema())}
      </script>

      {/* ── JSON-LD: WebSite (Sitelinks Search Box) ────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify(buildWebSiteSchema())}
      </script>

      {/* ── JSON-LD: WebPage / page-specific type ──────────────────────────── */}

      <script type="application/ld+json">
        {JSON.stringify(
          buildWebPageSchema({
            title,
            description,
            canonicalUrl,
            _image: image,
            pageType,
            canonicalPath,
          }),
        )}
      </script>

      {/* ── JSON-LD: ImageGallery (Google Images signal) ───────────────────── */}

      <script type="application/ld+json">
        {JSON.stringify(buildImageGallerySchema())}
      </script>

      {/* ── JSON-LD: Social profiles ItemList ──────────────────────────────── */}

      <script type="application/ld+json">
        {JSON.stringify(buildSocialLinksSchema())}
      </script>

      {/* ── JSON-LD: ProfilePage (home only — strongest Knowledge Panel signal) */}

      {isHomePage && (
        <script type="application/ld+json">
          {JSON.stringify(
            buildProfilePageSchema({ title, description, canonicalUrl }),
          )}
        </script>
      )}

      {/* ── JSON-LD: BlogPosting (article pages only) ──────────────────────── */}

      {isArticle && (
        <script type="application/ld+json">
          {JSON.stringify(
            buildArticleSchema({ title, description, canonicalUrl, article }),
          )}
        </script>
      )}
    </Helmet>
  );
}
