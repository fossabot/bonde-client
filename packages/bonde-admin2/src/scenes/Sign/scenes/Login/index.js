import React from 'react'
import { ControlLabel, Input, Button, Title } from 'bonde-styleguide'
import HalfPage from '../../components/HalfPage'

export default () => (
  <HalfPage>
    <Title.H1>O Bonde tá na área! Chega mais.</Title.H1>
    <form>
      <ControlLabel>Nome</ControlLabel>
      <Input type='text' placeholder='Seu nome' />
      <ControlLabel>Nome</ControlLabel>
      <Input type='text' placeholder='Seu nome' />
      <Button>Partiu</Button>
    </form>
  </HalfPage>
)
