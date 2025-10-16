export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text'
    },
    {
      name: 'features',
      title: 'Caractéristiques',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: 'Heart', value: 'heart' },
                  { title: 'Utensils', value: 'utensils' },
                  { title: 'MapPin', value: 'mappin' }
                ]
              }
            },
            {
              name: 'title',
              title: 'Titre',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'paragraphs',
      title: 'Paragraphes',
      type: 'array',
      of: [{ type: 'text' }]
    },
    {
      name: 'gallery',
      title: 'Galerie photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Texte alternatif',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}