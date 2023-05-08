import * as React from 'react'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import 'katex/dist/katex.min.css'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

export const NotionPage = ({
  recordMap,
  rootPageId
}: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
}) => {
  if (!recordMap) {
    return null
  }
  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </>
  )
}