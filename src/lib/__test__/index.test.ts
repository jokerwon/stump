import { describe, expect, it } from 'vitest'
import { getAllImages } from '..'

describe('first', () => {
  it('should return length of images', () => {
    expect(getAllImages()).toMatchInlineSnapshot(`
      [
        "hanbao-01.png",
        "jitui-01.png",
        "pijiu-01.png",
        "img1/bangbangtang-01.png",
        "img1/binggan-01.png",
      ]
    `)
  })
})
