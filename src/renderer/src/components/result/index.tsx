import { useCode } from '@renderer/hooks/useCode'
import { memo } from 'react'

const Result = memo(() => {
  const { data } = useCode()
  return (
    <main className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-4">
      {data?.map((item) => (
        <div className="text-slate-700 truncate mb-2" key={item?.id}>
          {item?.content}
        </div>
      ))}
    </main>
  )
})

export default Result
