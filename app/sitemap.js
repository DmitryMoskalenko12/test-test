export default function sitemap() {
  return [
    {
      url: 'https://uviten.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://uviten.com/en',
          uk: 'https://uviten.com/ua',
        },
      },
    },
    {
      url: 'https://uviten.com/stub',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://uviten.com/en/stub',
          uk: 'https://uviten.com/ua/stub',
        },
      },
    },
  ];
}
