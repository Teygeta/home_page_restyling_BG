import Image from "next/image"

export default function Home() {
  return (
    <>
      <nav className="bg-[#F6E4D6] fixed top-0 w-full">
        <div className="flex justify-between items-center h-28 max-w-[1300px] mx-auto">
          <div className="flex gap-20 ml-20">
            <span>Home</span>
            <span>Prodotti</span>
            <span>Contatti</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/LogoPinkbg.svg"
              alt="13"
              width={110}
              height={40}
              priority
            />
          </div>
          <div className="flex gap-20 mr-20">
            <img alt="instagram" src="/icon _instagram_.svg" width={26} />
            <img alt="instagram" src="/icon _facebook squared_.svg" width={26} />
          </div>
        </div>
      </nav>
      <div className="h-[112px]"></div>
      <header className="bg-[#F6E4D6]">
        <div className="flex justify-around max-w-[1400px] mx-auto">
          <div className="my-20">
            <h1 className="font-bold text-4xl">Ti aiutiamo a scegliere <br />
              le apparecchiature <br />
              e gli accessori piu’ idonei <br />
              per il tuo centro abbronzatura, <br />
              estetico o istituto di bellezza.</h1>
            <button className="bg-black text-white rounded-full px-4 py-1 mt-8">Contattaci</button>
          </div>
          <div>
            <Image
              src="/flowersNoBg.png"
              alt="13"
              width={300}
              height={40}
              className="mt-20"
              priority
            />
          </div>
        </div>
      </header>
      <section className="">
        <h1 className="font-bold text-4xl text-center my-20">I NOSTRI PRODOTTI</h1>
        <div className="border-y-[1px] border-black mx-[5%] flex justify-around py-8 font-semibold text-lg">
          <span>Solarium</span>
          <span>Tecnologie</span>
          <span>Assistenza</span>
          <span>Progettazione</span>
          <span>Ricambi uv</span>
        </div>
      </section>
    </>

  )
}
