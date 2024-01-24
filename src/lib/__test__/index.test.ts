import { resolve } from 'path'
import { describe, expect, it } from 'vitest'
import { getAllImages } from '..'

const root = resolve(__dirname, '../../../fixtures/images')

describe('lib', () => {
  it('should return length of images', async () => {
    expect((await getAllImages(root)).length).toBe(5)
  })
})
