module.exports = {
  siteName: 'CodePici',
  siteUrl: "https://codepici-blog.site/",
  siteDescription: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web.",
  templates: {
    Post: '/:title',
    Tag: '/tag:id'
  },
  plugins: [
      // { src : '~/plugins/vue-google-adsense', ssr: true },
    //   {
    //     use: 'gridsome-plugin-pwa',
    //     options: {
    //         title: 'CodePici',
    //         startUrl: '/',
    //         display: 'standalone',
    //         statusBarStyle: 'default',
    //         manifestPath: 'manifest.json',
    //         serviceWorkerPath: 'service-worker.js',
    //         shortName: 'CodePici',
    //         themeColor: '#080808',
    //         backgroundColor: '#080808',
    //         icon: './src/favicon.png' // must be supplied!
    //     }
    // },  
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ['Post'],
        // Optional: any properties you wish to set for `Feed()` constructor
        // See https://www.npmjs.com/package/feed#example for available properties
        feedOptions: {
          title: 'My Awesome Blog Feed',
          description: 'Best blog feed evah.'
        },
        // rss: {
          //   enabled: true,
        //   output: '/feed.xml'
        // },
        json: {
          enabled: true,
          output: '/search.json'
        },
        // Optional: the maximum number of items to include in your feed
        // maxItems: 25,
        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        htmlFields: null,
        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: false,
        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        filterNodes: (node) => true,
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          description: node.description
          // content: node.content, 
        })
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-147103360-1'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `static/admin`
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }  

}
