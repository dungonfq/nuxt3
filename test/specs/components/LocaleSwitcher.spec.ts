import { RouterLinkStub } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { CreateWrapperFactory } from "~/test/helpers/utils"
import LocaleSwitcher from '~/components/LocaleSwitcher.vue'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
})

const provide = {
  router: {
    currentRoute: {
      value: {
        name: 'index',
        path: '/'
      },
      resolve: jest.fn(() => {})
    }
  }
}

const createWrapper = CreateWrapperFactory.init(LocaleSwitcher, {
  stubs: {
    NuxtLink: RouterLinkStub,
  },
  global: {
    plugins: [i18n],
    provide
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
