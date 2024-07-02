import { Idata } from '@renderer/data'
import { Dispatch, SetStateAction, createContext } from 'react'
interface ContextProps {
  data: Idata[]
  setData: Dispatch<SetStateAction<Idata[]>>
}
export const CodeContext = createContext<ContextProps | undefined>(undefined)
