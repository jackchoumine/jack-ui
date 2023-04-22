/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 20:58:37
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 00:23:52
 * @Description :
 */
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { JToggle } from '../index'

describe('JToggle', () => {
  it('renders properly', () => {
    const wrapper = mount(JToggle, { props: { modelValue: true } })
    // 如何测试组件样式呢？
    expect(wrapper.text()).toContain('')
  })
})
