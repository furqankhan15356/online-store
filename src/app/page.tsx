

export default function Home() {
  return (
    <main>
    <div className="flex lg:flex-col-2  bg-sky-400 mt-5">
      <div className="py-40 px-80 mt-50">
        <h1 className="p-9 text-lg text-white">SUMMER 2024</h1>
        <h2 className="m-10 font-bold text-4xl text-white ">NEW COLLECTION</h2>
        <p className="m-10 text-base text-white">We know how large objects will act.<br/>
          but things on a small scale.
        </p>
        <button className="m-10 hover:bg-green-400 bg-green-600  text-white text-sm py-2 px-3 rounded-lg hover:text-slate-900">SHOP NOW</button>
      </div>
      <div>
        <img src="img.png" height={500} width={500} className="mt-16" alt="image" />
      </div>
    </div>
    <div>
      <h3 className="font-bold text-center text-2xl mt-20">
      EDITOR&apos;S PICK
      </h3>
      <h4 className="text-gray-700 text-center mt-3">
        Problems trying to reslove the conflict between
      </h4>
    </div>
    
    <div className="grid grid-cols-4 p-10 pl-36">
      <div><img src="girl1.png"  alt="image" className="shadow-lg hover:shadow-2xl"/></div>
      <div><img src="girl2.png" alt="image" /></div>
      <div><img src="men1.png" alt="image" /></div>
      <div><img src="men2.png" alt="image" /></div>
    </div>


      <h5 className="text-center text-gray-700 text-xl mt-40">Featured Products</h5>
      <h6 className="text-center text-2xl font-bold mt-4">BESTSELLER PRODUCTS</h6>
      <h3 className="text-center text-gray-700 mt-3">Problems trying to resolve the conflict betwwen</h3>

      <div className="grid lg:grid-cols-4 grid-cols-1 mt-20 p-10 pl-40">
        <div><img src="women1.png" alt="image" /></div>
        <div><img src="boy1.png" alt="image" /></div>
        <div><img src="women2.png" alt="image" /></div>
        <div><img src="women3.png" alt="image" /></div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 mt-20 p-10 pl-40">
        <div><img src="boy2.png" alt="image" /></div>
        <div><img src="women4.png" alt="image" /></div>
        <div><img src="boy3.png" alt="image" /></div>
        <div><img src="boy4.png" alt="image" /></div>
      </div>

      <div className="grid lg:grid-cols-2  grid-cols-1 gap-20 bg-emerald-600">
      <div className="p-20 pl-96">
      <h2 className="text-gray-200 text-xl py-9 ">SUMMER 2024</h2>
      <h3 className="text-white text-5xl font-bold">Vita Classic Product</h3>
      <p className=" text-gray-200 mt-10 font-sans">We know how large objects will act, We know how are objects Will act. We know</p>
      <h4 className="text-white mt-7 text-lg font-bold pl-12">$16.48</h4>
      <button className=" bg-green-500 py-3 px-5 rounded-lg hover:bg-green-900 hover:text-white mt-2 font-bold">ADD TO CART</button>
      </div>
      <div><img src="shop.png" className="pl-40 mt-10" alt="image" /></div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-1">
      <div><img src="poster.png" alt="image" /></div>
      <div className="mt-48">
        <h2 className="text-gray-400 text-lg font-sans">SUMMER 2024</h2>
        <h3 className="text-5xl font-bold mt-10">Part of the Neural <br/> Universe</h3>
        <p className="text-gray-500 font-sans text-xl mt-10">We know how large objects will act, <br/> but things on a small scale.</p>
      <div>
      <button className="bg-green-500 font-bold mt-10 py-3 px-8 text-white hover:bg-green-400 hover:text-gray-800 rounded-lg">BUY NOW</button>
      <button className="text-green-500 ml-8 border border-green-500 py-3 px-5 font-bold rounded-lg">READ MORE</button>
      </div>
      </div>
      </div>

    </main>
    
  );
}
