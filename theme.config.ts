import { defineThemeConfig } from '@utils/defineThemeConfig'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Vinit Shinde',
  id: 'vinit-shinde-portfolio',
  logo: logoImage,
  seo: {
    title: 'Vinit Shinde | Software Development Engineer',
    subtitle: 'Software Development Engineer',
    description:
      'Vinit Shinde is a Software Development Engineer specializing in Java, Spring Boot, Microservices, and Micronaut, building high-performance backend systems and scalable architectures.',
    author: 'Vinit Shinde',
    image: '/og-image.png',
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Projects',
        href: '/projects',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'Skills',
        href: '/skills',
      },
      {
        type: 'link',
        label: 'Resume',
        href: '/resume',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'Go to my GitHub page, opens in new tab',
        href: 'https://github.com/vinit-s-shinde',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
      {
        type: 'link',
        label: 'Go to my LinkedIn page, opens in new tab',
        href: 'https://linkedin.com/in/vinit-s-shinde',
        icon: 'lucide:linkedin',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/vinit-s-shinde',
      icon: 'lucide:github',
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vinit-s-shinde',
      icon: 'lucide:linkedin',
      external: true,
    },
    {
      label: 'Medium',
      href: 'https://vinitshinde.medium.com',
      icon: 'lucide:book-open',
      external: true,
    },
    {
      label: 'DEV Community',
      href: 'https://dev.to/vinitshinde',
      icon: 'lucide:code-2',
      external: true,
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/vinitshinde/',
      icon: 'lucide:code',
      external: true,
    },
    {
      label: 'CodeChef',
      href: 'https://codechef.com/users/nexus_2',
      icon: 'lucide:terminal',
      external: true,
    },
    {
      label: 'Codeforces',
      href: 'https://codeforces.com/profile/Vinit99',
      icon: 'lucide:cpu',
      external: true,
    },
  ],
})
