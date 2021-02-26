import React, { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames'

import './tabBar.css'

const getShowConfig = (config) => {
  if (!config) {
    return
  }
  const arr = config.items
  const obj = {}
  const defaultIndex = config.defaultIndex || 0
  arr.forEach((item, index) => {
    obj[index] = false
  })
  obj[defaultIndex] = true
  return obj
}

const PageIndex = (props) => {
  const config = props.config
  const [showConfig, setShowConfig] = useState(getShowConfig(config))
  const [tabIndex, setTabIndex] = useState(0)
  const tabClick = useCallback((index) => {
    setTabIndex(index)
    showConfig[index.toString()] = true
    setShowConfig(showConfig)
  }, [showConfig])

  useEffect(() => {
    setTabIndex(config.defaultIndex || 0)
    showConfig[config.defaultIndex || 0] = true
    setShowConfig(showConfig)
  }, [])

  return (
    <div className="layer">

      {config.items.map((item, index) => {
        const Tab = item.component
        return (<div className={tabIndex === index ? '' : 'hide'} key={item.name}>
          {showConfig[index] && <Tab onShow={tabIndex === index} />}
        </div>)
      })}

      <div className="tab">
        {
          config.items.map((item, index) => {
            const Tab = item.component
            return (
              <div className={classnames("item", tabIndex === index ? "activited" : '')}
                key={item.name}
                onClick={
                  () => { tabClick(index) }
                }>
                <div className="name">{item.name}</div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default PageIndex
