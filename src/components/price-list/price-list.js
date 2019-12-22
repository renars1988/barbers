import React from 'react'

import Heading from '../heading/heading'
import { Item, Description, Price } from './price-list.styles'

const PriceList = () => (
  <div>
    <Heading
      h2
      center
      css={`
        margin-top: 8rem;
      `}
    >
      Pricelist
    </Heading>
    <Item>
      <Description>Dry Cut</Description>
      <Price>30€</Price>
    </Item>
    <Item>
      <Description>Beard & Mustache Trim</Description>
      <Price>15€</Price>
    </Item>
    <Item>
      <Description>Flat Top</Description>
      <Price>10€</Price>
    </Item>
    <Item>
      <Description>All Over Shaves</Description>
      <Price>8€</Price>
    </Item>
    <Item>
      <Description>Hot Towel Shave</Description>
      <Price>40€</Price>
    </Item>
    <Item>
      <Description>Children & Seniors</Description>
      <Price>15€</Price>
    </Item>
  </div>
)

export default PriceList
