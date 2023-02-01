import React from 'react';
import { useDispatch } from "react-redux";
import { removerProduct } from '@/features/products/products-slice';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  Container,
  Value,
  Card,
  IconAiOutlineClose
} from './styles';
import { Products } from '@/types/products';
import ButtonID from '../ButtonID';

export default function CardBuy() {
  const Product = useAppSelector((state) => state.product)
  const dispatch = useDispatch()

  const formatCurrency = (value: string | undefined) => {
    var value1 = Number(value);
    var response;

    response = value1.toLocaleString("pt-br", {
      currency: "BRL"
    });

    return "R$ " + response;
  }

  const deleteBuy = (id: number) => {
    dispatch(removerProduct(id))
  }

  return (
    <Container>
      {Product.products.map((props: Products) => (
        <Card key={props.id}>
          <img src={props.photo} />
          <h1>{props.name}</h1>
          <Value>{formatCurrency(props.price)}</Value>
          <ButtonID id={props.id} qtd={props.qtd} />
          <IconAiOutlineClose onClick={() => deleteBuy(props.id)} />
        </Card>
      ))}

    </Container>
  );
}