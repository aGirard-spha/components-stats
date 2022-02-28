import { useState } from 'react'

/**
 * Hook utilitaire pour les Onglets
 * @param initialValue {string} ""
 */
export const useTab = (initialValue: string = ''): any => {
  const [tab, setTab] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<{}>, tab: string) => {
    setTab(tab)
  }
  return [tab, onChange]
}

export default useTab
