export default {
  name: 'review',
  title: 'Avis Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du client',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'rating',
      title: 'Note',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5)
    },
    {
      name: 'comment',
      title: 'Commentaire',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
      rating: 'rating'
    },
    prepare(selection: any) {
      const { title, subtitle, rating } = selection
      return {
        title,
        subtitle: `⭐ ${rating}/5 - ${subtitle}`
      }
    }
  }
}