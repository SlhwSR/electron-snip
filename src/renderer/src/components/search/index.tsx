import { data } from '@renderer/data'
import { useCode } from '@renderer/hooks/useCode'
import React, { ChangeEvent, memo } from 'react'

const Search = memo(() => {
  const { setData } = useCode()
  const [search, setSearch] = React.useState<string>('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setData(
      data.filter((item) =>
        item?.content.toLowerCase().includes(e.target.value.toLocaleLowerCase() || '@@@@@')
      )
    )
  }
  return (
    <div className="bg-slate-50 p-5 drag rounded-lg">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={search}
          onChange={handleSearch}
          className="w-full outline-none text-2xl text-slate-600 bg-slate-200"
        />
      </section>
      <section className="text-center text-slate-500 text-xs mt-2">以下为搜索后的结果</section>
    </div>
  )
})

export default Search
