import React from "react"

import "./tagsGenerator.css"

const TagsGenerator = ({ getTag }) => {
  return (
    <div className="tags">
      <p className="locationTagsChecked">{getTag}</p>
    </div>
  )
}

export default TagsGenerator