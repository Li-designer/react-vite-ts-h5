import React, { ReactNode, createContext, useContext, useState } from "react"

export interface LoadingContextType {
  loading: boolean
  showLoading: (value: boolean) => void
  hideLoading: (value: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | null>(null)

export const useLoading = () => useContext(LoadingContext)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const showLoading = () => {
    setLoading(true)
  }

  const hideLoading = () => {
    setLoading(false)
  }
  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
