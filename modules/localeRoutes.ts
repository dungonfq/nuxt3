export default function LocaleRoutesModule () {
  this.nuxt.hook('pages:extend', (pages: Array<any>) => {
    const localeRoutes = pages.map(page => {
      return {
        name: `locale-${page.name}`,
        path: `/:locale${page.path}`,
        file: page.file,
        children: []
      }
    })

    pages.push(...localeRoutes)
  })
}
