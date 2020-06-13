import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PALLETES } from '~/styles/params'
import { BaseColors } from '~/components/Theme'

function Tag({ children, kind, ...props}) {
  return (
    <TagStyle pallete={kind} light {...props}>{children}</TagStyle>
  )
}

const TagStyle = styled(BaseColors).attrs(() => ({
  forwardedAs: 'span',
}))`
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  display: inline-block;
`;

Tag.defaultProps = {
  kind: 'primary',
}

Tag.propTypes = {
  content: PropTypes.node,
  kind: PropTypes.oneOf(PALLETES),
  title: PropTypes.string,
}

export default Tag