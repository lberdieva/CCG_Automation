import PageLoad from '../../integration/Page Objects/page_load.spec'

describe('Page Loads', () => {
    it('iterating through URL Set 1', () => {
        const pageload = new PageLoad()
        pageload.loadPages()
    })

    it('iterating through URL Set 2', () => {
      const pageload = new PageLoad()
      pageload.loadPages2()
  })
})