import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries
export const queries = {
  hero: `*[_type == "hero"][0]{
    title,
    subtitle,
    tagline,
    backgroundImage,
    chineseCharacter
  }`,
  
  about: `*[_type == "about"][0]{
    title,
    subtitle,
    features,
    paragraphs,
    gallery
  }`,
  
  bestSellers: `*[_type == "dish" && isBestSeller == true] | order(order asc){
    _id,
    name,
    description,
    image
  }`,
  
  reviews: `*[_type == "review"] | order(order asc){
    _id,
    name,
    rating,
    comment
  }`,
  
  restaurantInfo: `*[_type == "restaurantInfo"][0]{
    name,
    phone,
    address,
    logo,
    menuImage,
    hours,
    orderingInfo,
    mapLink
  }`
}