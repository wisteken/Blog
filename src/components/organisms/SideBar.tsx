import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import SideBarPost, { SideBarPostProps } from './SideBarPost'
import SideBarTags, { SideBarTagsProps } from './SideBarTags'

const styles = css`
  .sidebar {
    width: 20%;
    float: right;
  }
`

export type SideBarProps = SideBarPostProps & SideBarTagsProps

const SideBar: React.FC<SideBarProps> = ({ latestPosts, allTags }) => {
  return (
    <Fragment>
      <div className="sidebar">
        <SideBarPost latestPosts={latestPosts} />
        <SideBarTags allTags={allTags} />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
export default SideBar
