


interface ProductProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: string;
    }
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="">
            <a href="#" className="group relative overflow-hidden">
            <span className="absolute m-2 rounded-lg bg-yellow px-3 py-1.5 text-xs font-medium"> New </span>
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-yellow p-1.5 text-gray-900 transition active:bg-primary hover:text-white"
                >
                    <span className="sr-only">Wishlist</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>

                <img
                    src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-3">

                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <div className="flex justify-between">
                    <p className="mt-1.5 text-lg text-gray-700">$14.99</p>

                        <button className="transition hover:scale-105 active:text-yellow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h19l-3 10H6zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0" />
                        </svg>
                        </button>
                    </div>
                    
                </div>
            </a>
        </div>
    )
}

export default Product