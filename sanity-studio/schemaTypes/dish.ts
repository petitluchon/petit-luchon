export default {
  name: 'dish',
  title: 'Plat',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du plat',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'isBestSeller',
      title: 'Best-Seller',
      type: 'boolean',
      description: 'Afficher dans la section Best-Sellers'
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Pour trier les plats'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'description'
    }
  }
}