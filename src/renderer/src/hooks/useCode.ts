import { CodeContext } from '@renderer/context/codeContext'
import { useContext } from 'react'

export const useCode = () => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('CodeContext定义错误')
  }
  return { ...context }
}
