export default {
  name: 'restaurantInfo',
  title: 'Informations Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du restaurant',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'menuImage',
      title: 'Image du menu complet',
      type: 'image'
    },
    {
      name: 'hours',
      title: 'Horaires',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'string'
        },
        {
          name: 'schedule',
          title: 'Horaires',
          type: 'string'
        },
        {
          name: 'closed',
          title: 'Jours de fermeture',
          type: 'string'
        }
      ]
    },
    {
      name: 'orderingInfo',
      title: 'Informations commande',
      type: 'object',
      fields: [
        {
          name: 'uberEatsLink',
          title: 'Lien Uber Eats',
          type: 'url'
        },
        {
          name: 'smsNumber',
          title: 'Numéro SMS commande',
          type: 'string'
        }
      ]
    },
    {
      name: 'mapLink',
      title: 'Lien Google Maps',
      type: 'url'
    }
  ]
}