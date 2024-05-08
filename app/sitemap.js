export default function sitemap() {
  return [
    {
      url: 'https://uviten.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://uviten.com/en',
          de: 'https://uviten.com/uk',
        },
      },
    },
    {
      url: 'https://uviten.com/stub',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://uviten.com/en/stub',
          de: 'https://uviten.com/uk/stub',
        },
      },
    },
  ]
}