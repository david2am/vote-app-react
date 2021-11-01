import { createContext, ReactNode, useState } from 'react'
import { View } from '../schema'

interface Props { children: ReactNode }

const ViewContext = createContext({
  setView: (view: View) => {},
  getViewModifier: (className: string) => {}
})


const ViewProvider = ({ children }: Props): JSX.Element => {
  const [view, setView] = useState<View>(View.list)

  const getViewModifier = (className: string): string => (
    `${className}--${view}`
  )

  return (
    <ViewContext.Provider value={{ setView, getViewModifier }}>
      {children}
    </ViewContext.Provider>
  )
}

export { ViewContext, ViewProvider }
