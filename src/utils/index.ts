import { mergeConfig, UserConfig } from 'vite'
import viteConfig from '../../vite.config'

export function getViteConfig(config: UserConfig = {}) {
  return mergeConfig(viteConfig, config)
}
