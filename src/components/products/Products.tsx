import Product from "./Product";


interface ProductType {
  id: number;
  name: string;
  description: string;
  price: string;
}


const products: ProductType[] = [
  { id: 1, name: 'Shoes', description: 'Running shoes', price: '$10' },
  { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$5' },
  {id: 3, name: 'Phone', description: 'Running shoes', price: '$10'},
  {id: 4, name: 'Headphones', description: 'Running shoes', price: '$10'}
]

const Products = () => {

  return (
    <div className="my-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-2">
      {products.map((product) => (
        <div key={product.id} className="col-span-1">
          <Product product={product} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products;