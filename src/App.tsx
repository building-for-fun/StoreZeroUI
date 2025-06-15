// App.tsx
import Product from './Components/Product';

const products = [
  {
    name: "Laptop",
    description: "Powerful 11th Gen Intel i5 processor • 8GB RAM | 512GB SSD • Lightweight design with 14-inch FHD display",
    price: 60000,
    categoryId: 1,
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230909/Ye7Z/64fb749cafa4cf41f5d49c15/-473Wx593H-466550113-red-MODEL.jpg"
  },
  {
    name: "Smartphone",
    description: "Latest model with AMOLED screen",
    price: 35000,
    categoryId: 2,
    imageUrl: "https://image.made-in-china.com/202f0j00ItqMLuORCZkB/W-O-X500-5000mAh-Big-Battery-Octa-Core-128GB-ROM-6-5-Inch-Unlocked-4G-Android-Smartphone.webp"
  },
  {
    name: "Backpack",
    description: "Stylish and spacious",
    price: 1500,
    categoryId: 3,
    imageUrl: "https://images-cdn.ubuy.co.in/67dbf371b33de32d82629297-simple-mobile-hmd-vibe-64gb-black.jpg"
  },
  {
    name: "Shoes",
    description: "Breathable mesh upper • Lightweight cushioning sole • Perfect for walking, running or daily use",
    price: 2500,
    categoryId: 4,
    imageUrl: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SX695_.jpg"
  },
  {
    name: "Headphones",
    description: "Noise-isolating over-ear design • 40mm drivers for rich bass • 20 hrs battery life on a single charge",
    price: 4000,
    categoryId: 5,
    imageUrl: "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80"
  }
];

export default function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}
