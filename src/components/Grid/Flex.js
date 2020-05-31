import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div(props => ({
  alignContent: flexDisposition(props.alignContent),
  alignItems: flexDisposition(props.alignItems),
  alignSelf: flexDisposition(props.alignSelf),
  display: props.inline ? 'flex-inline' : 'flex',
  flexDirection: props.direction,
  justifyContent: flexDisposition(props.justify),
  textAlign: props.textAlign,
  flexWrap: props.wrap,
  flex: props.fill ? '1 1 auto' : null,
}))

const flexDisposition = option => {
  switch (option) {
    case 'around':
      return 'space-around'
    case 'auto':
      return 'auto'
    case 'baseline':
      return 'baseline';
    case 'between':
      return 'space-between'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'evenly':
      return 'space-evenly'
    case 'start':
      return 'flex-start'
    case 'stretch':
      return 'flex-stretch'
    default:
      return null
  }
}

Flex.defaultProps = {
  alignContent: null,
  alignItems: null,
  alignSelf: null,
  direction: null,
  display: null,
  justify: null,
  textAlign: null,
  wrap: null,
}

Flex.propTypes = {
  alignContent: PropTypes.oneOf(['around', 'between', 'center', 'end', 'start', 'stretch']),
  alignItems: PropTypes.oneOf(['baseline', 'stretch', 'start', 'end', 'center']),
  alignSelf: PropTypes.oneOf(['auto', 'baseline', 'center', 'end', 'start', 'stretch']),
  direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  display: PropTypes.string,
  fill: PropTypes.string,
  inline: PropTypes.bool,
  justify: PropTypes.oneOf(['around', 'between', 'center', 'end', 'evenly', 'start']),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
}

export default Flex
