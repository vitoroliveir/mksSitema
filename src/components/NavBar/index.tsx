import React, { useState } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';
import CardBuy from "../CardBuy";
import {
  Container,
  Title,
  SectionTop,
  IconTiShoppingCart,
  ShoppingCart,
  ShoppingCartActive,
  IconAiOutlineClose,
  ButtonFinishBuy,
  List,
  Value
} from './styles';

export default function NavBar() {
  const Products = useAppSelector((state) => state.product)
  const qtd = Products.qtd
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Title>MKS <span>Sistemas</span></Title>

      <ShoppingCart onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} >
        <IconTiShoppingCart /> {qtd}
      </ShoppingCart>

      <ShoppingCartActive active={isOpen}>
        <SectionTop>
          <h2>Carrinho <br /> de compras</h2>
          <IconAiOutlineClose onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} />
        </SectionTop>

        <List>
          <CardBuy />
        </List>

        <Value><p>Total:</p>  {`R$ ${Products.total.toLocaleString("pt-br", { currency: "BRL" })}`} </Value>

        <ButtonFinishBuy>Finalizar Compra</ButtonFinishBuy>
      </ShoppingCartActive>
    </Container>
  );
}