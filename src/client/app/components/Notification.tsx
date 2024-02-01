import cls from 'classnames'
import { PropsWithChildren } from 'react'

export interface IProps extends PropsWithChildren {
  visible: boolean
}

export default function Notification({ visible, children }: IProps) {
  return (
    <div className={cls('fixed top-0 left-0 right-0 z-50 text-center', visible ? '' : 'pointer-events-none overflow-hidden')}>
      <div
        className={cls(
          `
        px-4 py-1 rounded bg-white inline-block m-3 transition-all duration-300 text-primary border
        dark:bg-dark-100 dark:border-dark-300
      `,
          visible ? 'shadow' : 'shadow-none'
        )}
        style={visible ? {} : { transform: 'translateY(-150%)' }}
      >
        {children}
      </div>
    </div>
  )
}
