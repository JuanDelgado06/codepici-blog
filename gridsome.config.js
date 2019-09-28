// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CodePici',
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
            themeColor: '#1d1d1d',
            backgroundColor: '#1d1d1d',
            icon: '' // must be supplied!
        }
    }
  ]
}
