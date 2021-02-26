import React from 'react'
import { useEffect } from 'react'

const TopBarComponent = (props) => {
  const onShow = props.onShow
  useEffect(() => {
    onShow && console.log('1')
  }, [onShow])
  return <div>page-1</div>;
}

export default TopBarComponent