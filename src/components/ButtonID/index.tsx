import { useDispatch } from "react-redux";
import { plusQtd, minuQtd } from '@/features/products/products-slice';
import {
    Container,
    Num
} from './styles'; ''

type Props = { 
    id: number, 
    qtd: number 
}

export default function ButtonID(props: Props ) {
    var num = props.qtd
    const dispatch = useDispatch()

    const increment = () => {
        num = num + 1
        dispatch(plusQtd(props.id))
    }

    const decrement = () => {
        if (num > 0) {
            num = num - 1
            dispatch(minuQtd(props.id))
        }

    }

    return (
        <Container>
            <span onClick={() => decrement()}>-</span>
            <Num>
                {num}
            </Num>
            <span onClick={() => increment()}>+</span>
        </Container>
    );
}