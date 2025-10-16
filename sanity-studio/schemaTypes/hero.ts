export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre Principal',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    },
    {
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'chineseCharacter',
      title: 'Caractère chinois',
      type: 'string',
      description: 'Ex: 福'
    }
  ]
}