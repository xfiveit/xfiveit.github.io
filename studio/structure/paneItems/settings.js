import {
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlineIdcard,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowAbove
} from 'react-icons/ai'

import S from '@sanity/desk-tool/structure-builder'

export const Settings = S.listItem()
  .title('Preferences')
  .icon(AiOutlineSetting)
  .child(
    S.list()
      .title('Preferences')
      .items([
        S.listItem()
          .title('Global')
          .icon(AiOutlineIdcard)
          .child(
            S.editor()
              .schemaType('siteSettings')
              .documentId('siteSettings')
          ),
        S.listItem()
          .title('Navigation')
          .icon(AiOutlineMenu)
          .child(
            S.documentTypeList('navigationMenu')
              .title('Menus')
              .filter('_type == $type')
              .params({ type: 'navigationMenu' })
          ),
        S.listItem()
          .title('Header')
          .icon(AiOutlineInsertRowAbove)
          .child(
            S.editor()
              .schemaType('headerSettings')
              .documentId('headerSettings')
          ),
        S.listItem()
          .title('Footer')
          .icon(AiOutlineInsertRowBelow)
          .child(
            S.editor()
              .schemaType('footerSettings')
              .documentId('footerSettings')
          )
      ])
  )