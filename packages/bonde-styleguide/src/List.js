import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//
// Size and Spacing variables
//
const vars = {
  avatarSize: '40px',
  padding: '18px',
  textGap: '23px'
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  text-overflow: ellipsis;
`

const Avatar = styled.div`
  background-color: #cccccc;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  position: absolute;
  background-image: url(${({ avatar }) => avatar || ''});
  width: ${vars.avatarSize};
  height: ${vars.avatarSize};
  left: ${vars.padding};
  top: ${vars.padding};

  ${({ noavatar }) => noavatar && `
    display: none;
  `}

  ${({ avatar, noavatar, label }) => !avatar && !noavatar && `
    &:before {
      content: '${label.replace(/\W/g, '').slice(0, 1).toUpperCase()}';
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-weight: 900;
      color: #ffffff;
    }
  `}
`

const Label = styled.div.attrs({
  title: props => props.label
})`
  ${({ noavatar }) => !noavatar && `
    margin-left: ${vars.textGap};
  `}
  height: calc(${vars.avatarSize} / 2);
  font-family: Nunito Sans;
  line-height: 1.35;
  font-size: 16px;
  font-weight: 900;
  color: #000000;

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Description = Label.extend.attrs({
  title: props => props.description
})`
  font-weight: 400;
  font-size: 13px;
  display: flex;
  align-items: flex-end;
  color: #4a4a4a;
  line-height: 1;
`

const Item = ({
  className,
  label,
  description,
  avatar,
  noavatar,
  onClick,
  href,
  target,
  LinkComponent
}) => {
  const ListTag = props => <li {...props} onClick={onClick} />

  let BaseListTag = LinkComponent || ListTag
  if (href) {
    const linkProps = { href, target }
    const LinkTag = props => <a {...props} href={href} target={target} />
    BaseListTag = LinkTag
  }

  return (
    <BaseListTag className={className}>
      <Avatar noavatar={noavatar} avatar={avatar} label={label} />
      <Label noavatar={noavatar} label={label}>
        <div> {/* div inside to fix `text-overflow: ellipsis` behaviour */}
          {label}
        </div>
      </Label>
      <Description noavatar={noavatar} description={description}>
        <div>  {/* div inside to fix `text-overflow: ellipsis` behaviour */}
          {description}
        </div>
      </Description>
    </BaseListTag>
  )
}

List.Item = styled(Item)`
  position: relative;
  padding: ${vars.padding};
  transition: 200ms background-color;
  display: block;
  text-decoration: none;

  ${props => (props.onClick || props.href) && `
    cursor: pointer;
    &:hover { background-color: rgba(180,180,180,.1) }
  `}

  ${({ noavatar }) => !noavatar && `
    padding-left: calc(${vars.padding} + ${vars.avatarSize});
  `}
`

const { string, bool, func, node, oneOfType } = PropTypes

List.Item.propTypes = {
  label: string.isRequired,
  description: string.isRequired,
  avatar: string,
  noavatar: bool,
  onClick: func,
  href: string,
  target: string,
  LinkComponent: oneOfType([node, func])
}

List.Item.defaultProps = {
  label: '[Define your label]',
  description: '[Define your description]',
  noavatar: false
}

List.displayName = 'List'
List.Item.displayName = 'List.Item'

export default List
