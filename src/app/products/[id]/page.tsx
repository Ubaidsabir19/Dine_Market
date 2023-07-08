import { products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from '@/components/ui/button'
import Quantity from "@/components/Quantity";


const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="flex gap-4 items-center px-5 py-5 flex-col md:flex-row">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* Left Image */}
          <div className="flex-1">
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Content */}
          <div className='flex flex-col gap-x-8'>
            <div>
              <h1 className="text-2xl sm:text-2xl font-bold mb-2">{product.name}</h1>
              <h2 className="text-base font-semibold text-gray-400"></h2>
            </div>
            <div>
              <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-3">
                {sizes.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-6 h-6 mt-2 duration-300 border rounded-full center hover:shadow-xl"
                    >
                      <span className="text-[10px] font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Quantity */}
              <div className="flex items-center mt-6 gap-x-3">
                <h3 className="text-[10px] font-semibold">Quantity:</h3>
                <Quantity />
              </div>
              {/* Add to Cart */}
              <div className="flex items-center mt-5 gap-x-4">
              <Button className='bg-black h-12 px-8'>Add to Cart</Button>
                <h2 className="text-2xl font-bold">
                  ${product.price}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className='my-24'>
        <div className = 'relative'>
           <h2 className='font-extrabold absolute leading-[110px] opacity-10 z-[1] text-5xl sm:text-[5rem] md:text-[6.785rem] xxs:6xl'>Overview</h2>
           <h3 className=''>Product Information</h3>
        </div>

      </div> */}
    </div>
  );
}