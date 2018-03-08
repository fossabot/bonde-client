import React from 'react'
import { Flexbox, Image, Title } from 'bonde-styleguide'
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
        src='https://cdn-images-1.medium.com/max/1600/1*YZKhuSB_eF4LyCTNOFIckA.jpeg'
        width='50%'
        height='100%'
      >
        <Flexbox fullSize row padding={{ x: 142 }} alignItems='middle'>
          <Title.H2 color='#fff'>
            Quer mobilizar pessoas por uma causa?<br />
            Cola aí, pode entrar.<br />
            O BONDE te leva lá.
          </Title.H2>
        </Flexbox>
      </Image>
      <Flexbox>
        {children}
      </Flexbox> 
    </Flexbox> 
  </FixedLayout>
)

export default HalfPage
