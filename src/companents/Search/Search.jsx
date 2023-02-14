import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { changeSearchFilter } from '../../redux/slices/filterSlice'
import { useDebounce } from '../hooks/useDebounce'

export function Search() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const debouncedSearchValue = useDebounce(search, 1000)

  const changeSearchHandler = (e) => {
    const newSearchValue = e.target.value

    setSearch(newSearchValue)
  }

  useEffect(() => {
    dispatch(changeSearchFilter(debouncedSearchValue))
  }, [debouncedSearchValue, dispatch])

  return (
    <input
      placeholder="Поиск"
      value={search}
      onChange={changeSearchHandler}
    />
  )
}
