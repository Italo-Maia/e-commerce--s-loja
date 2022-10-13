import Link from 'next/link';

const CartItem = () => {
    const state = { cartQtd: 0}

    return (
        <div>
            <Link href="/client-area"> Minha conta </Link>
            <br />
           <Link href="/cart">Meu carrinho </Link> 
        </div>
    )
}

export default CartItem;