import {defineType, defineField, defineArrayMember} from 'sanity'

export const advanture = defineType({
  type: 'document',
  name: 'advanture',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
    defineField({
      type: 'image',
      name: 'mainImage',
      options: {hotspot: true},
    }),
    defineField({
      type: 'text',
      name: 'address',
    }),
    defineField({
      type: 'geopoint',
      name: 'location',
    }),
  ],
})
