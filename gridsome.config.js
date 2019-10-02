// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CodePici',
  siteUrl: "https://codepici-blog.site/",
  siteDescription: "Aprende desarrollo, diseño y programacion web",
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
    
  ]
}
