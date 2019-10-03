// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CodePici',
  siteUrl: "https://codepici-blog.site/",
  siteDescription: "Aprende desarrollo, diseño y programacion web",
  templates: {
    Post: '/:title',
    Tag: '/tag:id'
  },
  plugins: [
      {
        use: 'gridsome-plugin-pwa',
        options: {
            title: 'CodePici',
            startUrl: '/',
            display: 'standalone',
            statusBarStyle: 'default',
            manifestPath: 'manifest.json',
            serviceWorkerPath: 'service-worker.js',
            shortName: 'CodePici',
            themeColor: '#080808',
            backgroundColor: '#080808',
            icon: './src/favicon.png' // must be supplied!
        }
    },  
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: "/blog/:path",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: "/tag/:id",
            create: true
          }
        }
      }
    }    
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
