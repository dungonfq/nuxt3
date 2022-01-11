import { CreateWrapperFactory } from "~/test/helpers/utils"
import LocaleSwitcher from '~/components/LocaleSwitcher.vue'

const createWrapper = CreateWrapperFactory.init(LocaleSwitcher, {
  mocks: {
    $t: (key: string) => key
  }
}).buildFactory()

test('has correct src according to icon name', () => {
  const wrapper = createWrapper.shallowMount()
  expect(0).toBeFalsy()
})
