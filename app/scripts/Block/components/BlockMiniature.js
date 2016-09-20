import React, { PropTypes } from 'react'
import classnames from 'classnames'

import './scss/block-miniature.scss'

const isActive = (selected, layout) => JSON.stringify(selected) === JSON.stringify(layout)

const BlockMiniature = ({ selectedLayout, layout, onClick }) => (
  <div
    className="block-miniature col col-4 mb3 px1"
    onClick={() => { onClick(layout) }}
  >
    <div
      className={classnames(
        'layout-wrapper clearfix btn block bg-white rounded',
        isActive(selectedLayout, layout) ? 'is-active' : null
      )}
    >
      <div className="mxn1">
        {layout.map((size, index) => (
          <div
            key={index}
            className={classnames(`lines clearfix px1 col col-${size.lg_size}`)}
          >
            <div className="line line-lg col-12" />
            <div className="line line-sm col-12" />
            <div className="line line-sm col-12" />
            <div className="line line-sm col-12" />
            <div className="line line-sm col-12" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

BlockMiniature.propTypes = {
  selectedLayout: PropTypes.array,
  layout: PropTypes.array,
  onClick: PropTypes.func
}

export default BlockMiniature