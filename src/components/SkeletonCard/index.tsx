import React from 'react';

import { Container } from './styles';

type Props = {
    width: number ;
    height: number ;
    borderRadius?: number;
    
}

export default function SkeletonCard(props: Props){
  return (
    <Container width={props.width}  height={props.height} borderRadius={props.borderRadius} >
      <div></div>
      <h1></h1>
      <p></p>
      <span></span>
      <button></button>
    </Container>
  );
}