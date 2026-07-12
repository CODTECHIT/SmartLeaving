import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.investindiasmart.com'

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/industrial',
    '/industrial/foreign-direct-investment',
    '/industrial/telangana',
    '/industrial/andhra-pradesh',
    '/industrial/karnataka',
    '/real-estate',
    '/real-estate/telangana',
    '/real-estate/andhra-pradesh',
    '/real-estate/karnataka',
    '/insurance',
    '/nri-investment',
    '/blog/nri-guide-buying-property-india',
    '/blog/fema-rules-foreign-nationals-property',
    '/blog/fdi-industrial-land-india-guide'
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.split('/').length > 2 ? 0.7 : 0.9,
  }))
}
