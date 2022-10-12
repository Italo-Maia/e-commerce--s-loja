import { useRouter } from "next/router";

const ProductItem = () => {
    const router = useRouter();
    const { product } = router.query;
    
    return (
        <div> Pagia { product } </div>
    )
}

export default ProductItem;