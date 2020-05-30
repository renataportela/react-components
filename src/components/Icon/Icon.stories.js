import React from 'react'

import { Icon, iconNames } from '~/components'

export default {
  title: 'Icon',
}

export const icons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(iconNames).map(iconName => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            margin: '5px 10px 5px 0',
            width: '90px',
            padding: '15px 0 0',
          }}
        >
          <Icon color="primary" name={iconName} />
          <p>{iconName}</p>
        </div>
      ))}
    </div>
  )
}