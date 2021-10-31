import { createContext, ReactNode, useState } from 'react'
import { View } from '../schema'

interface Props { children: ReactNode }

const ViewContext = createContext({
  view: View.list,
  setView: (view: View) => {},
  updateViewModifier: (className: string) => {}
})


const ViewProvider = ({ children }: Props): JSX.Element => {
  const [view, setView] = useState<View>(View.list)

  const updateViewModifier = (className: string): string => (
    `${className}--${view}`
  )

  return (
    <ViewContext.Provider value={{ view, setView, updateViewModifier }}>
      {children}
    </ViewContext.Provider>
  )
}

export { ViewContext, ViewProvider }
