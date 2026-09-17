export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Produto 1',
    image: '/placeholder.png',
    description:
      'Uma solução prática criada para simplificar sua rotina, reduzir tarefas manuais e trazer mais clareza para o trabalho da sua equipe.',
    shortDescription: 'Uma descrição genérica para o seu primeiro produto.',
    price: 3000,
  },
]

export default products
