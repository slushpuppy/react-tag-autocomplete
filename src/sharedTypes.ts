export type ClassNames = {
  root: string
  rootIsActive: string
  rootIsDisabled: string
  rootIsInvalid: string
  label: string
  tagList: string
  tagListItem: string
  tag: string
  tagName: string
  comboBox: string
  input: string
  listBox: string
  noOptions: string
  option: string
  optionIsActive: string
}

export type Tag = {
  label: string
  value: string | number | symbol | null
}

export type TagMetaProps = {
  disabled: boolean
}

export type TagInternalProps = {
  active: boolean
  index: number
  selected: boolean
}

export type TagSuggestion = Tag & Partial<TagMetaProps>

export type TagOption = Tag & TagMetaProps & TagInternalProps

// TODO: delete
export type TagSelected = Tag

export type OnAddition = (tag: Tag) => boolean

export type OnDelete = (index: number) => boolean

export type OnSelect = (tag?: Tag) => void
