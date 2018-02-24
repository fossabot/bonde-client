import React from 'react'


const Bonde = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={size || '210mm'}
    height={size || '297mm'}
    viewBox='0 0 744.09448819 1052.3622047' id='svg8055'
  >
    <g id='layer1'>
        <g id='g8116' transform='translate(-1308.847 -6667.909)'>
            <image width='397' height='96' preserveaspectratio='none' xlinkHref='data:image/png;base64,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'
            id='image8113' x='1482.394' y='7146.09' imageRendering='optimizeSpeed'
            />
        </g>
    </g>
  </svg>
)

Bonde.displayName = 'IconColorful.Bonde'

export default Bonde
