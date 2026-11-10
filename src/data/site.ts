/**
 * Central site metadata used for SEO, structured data, and feeds.
 *
 * Keep the canonical URL here so a future domain change only needs to be made
 * in one place (plus `astro.config.mjs`, which Astro requires for the sitemap).
 */
export const site = {
  url: 'https://vinitshinde.netlify.app',
  name: 'Vinit Shinde',
  alternateName: 'Vineet Shinde',
  jobTitle: 'Software Development Engineer',
  description:
    'Vinit Shinde is a Software Development Engineer specializing in Java, Spring Boot, Microservices, and Micronaut, building high-performance backend systems and scalable architectures.',
  shortDescription:
    'Software Development Engineer specializing in Java, Spring Boot, Microservices, and Micronaut.',
  email: 'vineetshinde2559@gmail.com',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  sameAs: [
    'https://github.com/vinit-s-shinde',
    'https://linkedin.com/in/vinit-s-shinde',
    'https://vinitshinde.medium.com',
    'https://dev.to/vinitshinde',
    'https://leetcode.com/u/vinitshinde/',
    'https://codechef.com/users/nexus_2',
    'https://codeforces.com/profile/Vinit99',
  ],
  knowsAbout: [
    'Java Backend Engineering',
    'Spring Boot',
    'Microservices',
    'Micronaut',
    'Quarkus',
    'JVM Ecosystem Frameworks',
    'GraalVM Native Image',
    'Developer Tooling',
    'Preonus',
    'AGY CLI',
    'Build-Time Dependency Injection',
    'Ahead-Of-Time (AOT) Compilation',
    'REST APIs',
    'Hibernate',
    'Panache',
    'JPA',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'Maven',
  ],
} as const

export const absoluteUrl = (path = '/'): string => new URL(path, `${site.url}/`).href
