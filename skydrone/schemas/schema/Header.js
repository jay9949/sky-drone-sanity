export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'aboutItem',
          fields: [
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
