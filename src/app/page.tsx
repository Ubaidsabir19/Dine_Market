import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Text from '@/views/Text'
import Promotions from '@/views/Promotions'
import Description from '@/views/Description'
import Subscription from '@/views/Subscription'


export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <ProductList />
      <Text />
      <Description />
      <Subscription />
    </div>
    
  )
}
