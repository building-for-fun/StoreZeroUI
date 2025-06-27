import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Product, { type ProductProps } from '../Components/Product.tsx'

import { Layout } from '../Components/Layout.tsx'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Home() {
    const [products, setProducts] = useState<ProductProps[]>([])
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3000/product')
            .then(res => setProducts(res.data))
            .catch(err =>
                console.error('Error fetching products:', err.message),
            )
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            })
        }
    }

    return (
        <Layout>
            <div className="relative">
                {/* Arrows if needed */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
                >
                    <FaArrowLeft />
                </button>

                {/* Scrollable product list with hidden scrollbar */}
                <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
                    <div className="flex gap-4 p-4 w-max">
                        {products.map((product, index) => (
                            <Product key={index} {...product} />
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
                >
                    <FaArrowRight />
                </button>
            </div>
        </Layout>
    )
}
