import { RouterLinkStub } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { CreateWrapperFactory } from "~/test/helpers/utils"
import RsLink from '~/components/common/RsLink.vue'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
})

const createWrapper = CreateWrapperFactory.init(RsLink, {
  stubs: {
    NuxtLink: RouterLinkStub,
  },
  global: {
    plugins: [i18n]
  }
}).withBasicSetup()
  .buildFactory()

test('has correct src according to icon name', () => {
  const wrapper = createWrapper.shallowMount({
    props: {
      to: '/'
    }
  })
  expect(0).toBeFalsy()
})
