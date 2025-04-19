import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Item } from '../data/schema'

type ItemsDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface ItemsContextType {
  open: ItemsDialogType | null
  setOpen: (str: ItemsDialogType | null) => void
  currentRow: Item | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Item | null>>
}

const ItemsContext = React.createContext<ItemsContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function ItemsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ItemsDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Item | null>(null)

  return (
    <ItemsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </ItemsContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useItems = () => {
  const usersContext = React.useContext(ItemsContext)

  if (!usersContext) {
    throw new Error('useItems has to be used within <ItemsContext>')
  }

  return usersContext
}
