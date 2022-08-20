const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "assets",
    indexPath: "index.html",

    transpileDependencies: true,
    lintOnSave: false,   /*关闭语法检测*/

    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network'
            }
        }
    }
})

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network'
//       }
//     }
//   }
// }
//
// module.exports = {
//   publicPath: "./",
//   outputDir: "dist",
//   assetsDir: "assets",
//   indexPath: "index.html"
// }
