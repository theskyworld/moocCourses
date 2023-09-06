import React from 'react'
import { render, screen } from '@testing-library/react'

import QuestionInput from './index'

test('默认属性', () => {
    render(<QuestionInput />)

    const p = screen.getByText('输入框标题')
    expect(p).toBeInTheDocument()

    const input = screen.getByPlaceholderText('请输入内容')
    expect(input).toBeInTheDocument()
})

test('传入属性', () => {
    render(<QuestionInput title="hello" placeholder="world" />)

    const p = screen.getByText('hello')
    expect(p).toBeInTheDocument()

    const input = screen.getByPlaceholderText('world')
    expect(input).toBeInTheDocument()
})
