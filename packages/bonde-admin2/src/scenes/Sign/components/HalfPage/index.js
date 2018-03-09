import React from 'react'
import { Flexbox, IconColorful, Image, Text } from 'bonde-styleguide'
import styled from 'styled-components'

const FixedLayout = styled.div`{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}`

const HalfPage = ({ children }) => (
  <FixedLayout>
    <Flexbox row>
      <Image
        src='https://hdwallpaper20.com/wp-content/uploads/2017/08/Anonymous-Why-We-Protest-Anonymous-Activism-Forum-wallpaper-wp2002390.jpg'
        width='50%'
        height='100%'
      >
        <Flexbox fullSize row padding={{ x: '20.6%' }} alignItems='middle'>
          <Flexbox>
            <IconColorful name='bonde' size={200} inverted />
            <Text fontSize={36} fontWeight={900} lineHeight={1.28} color='#fff'>
              Quer mobilizar pessoas por uma causa?<br />
              Cola aí, pode entrar.<br />
              O BONDE te leva lá.
            </Text>
          </Flexbox>
        </Flexbox>
      </Image>
      <Flexbox fullSize row alignItems='middle'>
        <Flexbox padding={{ x: '20.6%' }}>
          {children}
        </Flexbox>
      </Flexbox>
    </Flexbox> 
  </FixedLayout>
)

export default HalfPage
