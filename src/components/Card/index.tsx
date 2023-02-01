import React from 'react';
import { useDispatch } from "react-redux";
import {
  Containers,
  Buttons,
  Values,
  IconFiShoppingBags
} from './styles';
import { addProduct } from '@/features/products/products-slice';

type Props = {
  url?: string; 
  title?: string;
   describe?: string; 
   value?: string; 
   id?: number 
}

export default function Card(props : Props) {
  const dispatch = useDispatch()

  const formatCurrency = (value: string | undefined) => {
    var value1 = Number(value);
    var response;

    response = value1.toLocaleString("pt-br", {
      currency: "BRL"
    });

    return "R$ " + response;
  }


  const addBuy = () => {
    var datas = {
      id: props.id || 0,
      name: props.title || "",
      photo: props.url || "",
      description: props.describe || "",
      price: props.value || "",
      qtd: 1
    }

    return dispatch(addProduct(datas));
  }

  return (
    <Containers>
      <img src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.describe}</p>
      <Values>{formatCurrency(props.value)}</Values>
      <Buttons onClick={addBuy}><IconFiShoppingBags /> Comprar </Buttons>
    </Containers>
  );
}