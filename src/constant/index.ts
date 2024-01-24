import { join } from 'path'

export const ROOT = join(__dirname, '../../') // 项目根路径

// app 源码路径
export const APP_DIR = join(ROOT, 'src/client/app');
// app 打包输出路径
export const APP_OUT_DIR = join(ROOT, 'dist/app');
