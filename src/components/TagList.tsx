import React, { useContext } from 'react'
import { GlobalContext } from '../contexts'
import type { TagProps } from './'

export type TagListProps = {
  children: React.ReactElement<TagProps>[]
  label: string
  allowDuplicates: boolean
}

export function TagList({ children, label, allowDuplicates }: TagListProps): JSX.Element {
  const { classNames, tagListRef } = useContext(GlobalContext)

  return (
    <ul className={classNames.tagList} aria-label={label} ref={tagListRef} role="list">
      {children.map((child, index) => (
        <li
          className={classNames.tagListItem}
          key={allowDuplicates ? 'tagList-' + index : child.key}
          role="listitem"
        >
          {child}
        </li>
      ))}
    </ul>
  )
}
