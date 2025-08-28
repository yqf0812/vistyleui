import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from "vitest";
import MarqueeButton from '../index.vue'

describe('MarqueeButton Props 测试', () => {
  // size prop 测试
  it('默认size应为medium', () => {
    const wrapper = mount(MarqueeButton)
    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn-medium')
  })

  it('size prop 应接受small/medium/large值', () => {
    const wrapperSmall = mount(MarqueeButton, { props: { size: 'small' } })
    const wrapperMedium = mount(MarqueeButton, { props: { size: 'medium' } })
    const wrapperLarge = mount(MarqueeButton, { props: { size: 'large' } })
    
    const buttonSmall = wrapperSmall.find('button')
    const buttonMedium = wrapperMedium.find('button')
    const buttonLarge = wrapperLarge.find('button')
    expect(buttonSmall.classes()).toContain('btn-small')
    expect(buttonMedium.classes()).toContain('btn-medium')
    expect(buttonLarge.classes()).toContain('btn-large')
  })

  it('size prop 传入非法值应使用默认值', () => {
    const consoleWarn = vi.spyOn(console, 'warn')  // 使用vitest的vi代替jest
    mount(MarqueeButton, { props: { size: 'invalid' } })
    expect(consoleWarn).toHaveBeenCalled()
  })

  // disabled prop 测试
  it('disabled 默认为false', () => {
    const wrapper = mount(MarqueeButton)
    expect(wrapper.props('disabled')).toBe(false)
  })

  it('disabled 设置为true时应禁用按钮', () => {
    const wrapper = mount(MarqueeButton, { props: { disabled: true } })
    expect(wrapper.find('button').element.disabled).toBe(true)
    expect(wrapper.find('button').attributes()).toHaveProperty('disabled')
  })

  // 插槽内容测试
  it('应正确渲染插槽内容', () => {
    const wrapper = mount(MarqueeButton, {
      slots: {
        default: '自定义按钮文本'
      }
    })
    expect(wrapper.text()).toContain('自定义按钮文本')
  })
})