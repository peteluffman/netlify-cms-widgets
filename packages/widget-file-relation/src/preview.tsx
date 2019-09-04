import * as React from 'react'

export const Preview = ({ value }) => {
  const display = value 
    ? value.map(item => {
      if( !item ) return null;
      const label =  item.get('label')
      return Array.isArray( label ) ? label.join(', ') : label
    }) 
    : ''
  return <p>{display}</p>
}