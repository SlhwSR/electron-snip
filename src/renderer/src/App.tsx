import React from 'react'
import Result from './components/result'
import Search from './components/search'
import { CodeContext } from './context/codeContext'
import { Idata, data as mock } from '@renderer/data'
function App(): JSX.Element {
  const [data, setData] = React.useState<Idata[]>(mock)
  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Search />
      <Result />
    </CodeContext.Provider>
  )
}

export default App
