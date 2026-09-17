import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Produto não encontrado')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="flex flex-col md:flex-row gap-8 p-5">
      <div className="w-full md:w-[55%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      <div className="w-full md:w-[45%] p-8">
        <Link to="/" className="inline-block mb-4">
          &larr; Voltar para todos os produtos
        </Link>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-6">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <button className="px-6 py-2 rounded-lg border">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
