import { mount, shallowMount } from '@vue/test-utils'

/**
 *
 * @param {number} time
 * @param {typeof jest} timer
 */
export function timerWait (time: number, timer: any = null) {
  return new Promise<void>(resolve => setTimeout(() => {
    if (timer) {
      timer.advanceTimersByTime(time)
    }
    resolve()
  }, time))
}

const normalizeOptions = (option: any) => {
  if (Array.isArray(option)) {
    return option.reduce(
      (normalized, key) => ({ ...normalized, [key]: true }),
      {}
    )
  }
  return option || {}
}

const mergeOptions = (options: any, additionalOptions: any) => {
  const mergeStubs = additionalOptions.stubs
    ? {
        stubs: {
          ...normalizeOptions(options.stubs),
          ...normalizeOptions(additionalOptions.stubs)
        }
      }
    : {}
  const mergeMocks = additionalOptions.mocks
    ? {
        mocks: {
          ...normalizeOptions(options.mocks),
          ...normalizeOptions(additionalOptions.mocks)
        }
      }
    : {}
  const mergeProps = additionalOptions.propsData
    ? {
        propsData: {
          ...normalizeOptions(options.propsData),
          ...normalizeOptions(additionalOptions.propsData)
        }
      }
    : {}
  return {
    ...options,
    ...additionalOptions,
    ...mergeStubs,
    ...mergeProps,
    ...mergeMocks
  }
}

export class CreateWrapperFactory {
  options: any
  component: any

  /**
   * @param {import('vue').Component} component
   * @param {import('@vue/test-utils').ShallowMountOptions<import('vue')>} options
   */
  constructor (component: any, options: any = {}) {
    this.options = options
    this.component = component
  }

  /**
   * @param {import('vue').Component} component
   * @param {import('@vue/test-utils').ShallowMountOptions<import('vue')>} options
   */
  static init (component: any, options: any) {
    return new CreateWrapperFactory(component, options)
  }

  /**
   * Generate factory
   */
  buildFactory () {
    /**
     * @param {import('@vue/test-utils').MountOptions<import('vue')>} additionalOptions
     */
    const mountFn = (additionalOptions = {}) => {
      const options = this._buildOptions(additionalOptions)
      return mount(this.component, options)
    }

    /**
     * @param {import('@vue/test-utils').ShallowMountOptions<import('vue')>} additionalOptions
     */
    const shallowMountFn = (additionalOptions = {}) => {
      const options = this._buildOptions(additionalOptions)
      return shallowMount(this.component, options)
    }

    return {
      mount: mountFn,
      shallowMount: shallowMountFn
    }
  }

  /**
   * Setup some common mocks, stubs
   */
  withBasicSetup () {
    let basicOptions = {
      stubs: {
        // modal: true,
        // icon: true
      },
      mocks: {
        // $config: {},
        $t: (text: string) => text,
        $tc: (text: string) => text,
        $n: (text: string) => text
      }
    }

    this.options = mergeOptions(basicOptions, this.options)
    return this
  }

  _buildOptions ({ ...restOptions }) {
    const options = mergeOptions(this.options, restOptions)
    return options
  }
}
