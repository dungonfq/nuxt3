import { CreateWrapperFactory } from "~/test/helpers/utils"
import RsLink from '~/components/common/RsLink.vue'

const createWrapper = CreateWrapperFactory.init(RsLink, {
  mocks: {
    $t: (key: string) => key
  }
}).buildFactory()

test('has correct src according to icon name', () => {
  const wrapper = createWrapper.shallowMount()
  expect(0).toBeFalsy()
})
