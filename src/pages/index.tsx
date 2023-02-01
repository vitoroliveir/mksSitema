import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar'
import Head from '@/components/Head'
import {
  Container,
  Cards
} from "../styles/index"
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { Products } from '@/types/products';
import Skeleton from '@/components/SkeletonCard';

export async function getStaticProps() {
  const url = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`;
  const data = await fetch(url)
  const datas = await data.json()
  const results = datas.products

  return {
    props: { results },
  }
}

export default function Home(props: { results: Products }) {
  const [data, setData] = useState<Products>(props.results)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },300)
  })


  return (
    <Container>
      <Head title={"Mks Sistema"} />
      <NavBar />
      <Cards>
        {
          isLoading ?
            data?.map((value: Products)=>(
              <Skeleton key={value.id} width={217} height={285} borderRadius={8} />
            ))
          :
            data?.map((result: Products) => (
              <Card
                key={result.id}
                url={result.photo}
                title={result.name}
                describe={result.description}
                value={result.price}
                id={result.id}
              />
            ))
          
          
        }
        
      </Cards>
      <Footer />
    </Container>
  )
}
