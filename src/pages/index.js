import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {

  let { scrollY } = useScroll()
  let y = useTransform(scrollY, [0, 1500], ["0%", "15%"])

  return (
    <>
      <nav className="bg-[#F6E4D6] fixed top-0 w-full z-20">
        <div className="flex justify-between items-center h-28 max-w-[1300px] mx-auto">
          <div className="flex gap-20 ml-20">
            <span>Home</span>
            <span>Prodotti</span>
            <span>Contatti</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/LogoPinkbg.svg"
              alt="logo"
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
          <div
            transition={{
              duration: 1,
            }}
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: 0 }}
            className="my-20">
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
              alt="flowers"
              width={300}
              height={40}
              className="mt-20"
              priority
            />
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-[1500px]">
        <h1 className="font-bold text-4xl text-center my-20">I NOSTRI PRODOTTI</h1>
        <ul className="border-y-[1px] border-black flex justify-around py-8 mx-10 font-semibold text-lg">
          <li>Solarium</li>
          <li>Tecnologie</li>
          <li>Assistenza</li>
          <li>Progettazione</li>
          <li>Ricambi UV</li>
        </ul>
      </section>
      <section className="flex mt-24 mx-auto max-w-[1400px] justify-between">
        <p className="max-w-xl text-xl mt-20 mx-8">
          Grazie alla nostra vasta esperienza e alla disponibilità di prodotti di alta qualità, Beauty Global S.R.L. è in grado di offrire soluzioni personalizzate per la realizzazione di centri abbronzatura, centri estetici ed istituti di bellezza.
          <br /><br />
          Oltre alla fornitura di attrezzature per l&apos;estetica professionale e di lampade abbronzanti, offriamo anche piani d&apos;investimento su misura, assistenza tecnica e commerciale e supporto di professionisti specializzati nella realizzazione dei centri.
        </p>
        <motion.div style={{ y }}>
          <Image
            src="/pexels-polina-tankilevitch-3736520.png"
            alt="shop"
            width={570}
            height={40}
            className="rounded mr-8 z-10 shadow-[0_0_36px_rgba(0,0,0,0.20)]"
          />
        </motion.div>
      </section>
      <section className="bg-[#F6E4D6] mt-[-230px] py-20">
        <div className="flex justify-between items-end mx-auto max-w-[1400px]">
          <Image
            src="/benyamin-bohlouli-LGXN4OSQSa4-unsplash.png"
            alt="shop"
            width={570}
            height={40}
            className="rounded mx-8 shadow-[0_0_36px_rgba(0,0,0,0.20)]"
          />
          <p className="max-w-2xl text-xl text-right mr-8">
            Garantiamo la massima attenzione alla sicurezza e alla qualità dei nostri prodotti e servizi.
            <br /><br />
            Ogni apparecchiatura estetica viene testata e certificata per garantire il massimo risultato, minimizzando i rischi per la salute dei clienti.
            <br /><br />
            Inoltre, collaboriamo con importanti società finanziarie per offrire piani d&apos;investimento flessibili e convenienti, adattabili alle esigenze di ogni cliente.
            <br /><br />
            Scegliere Beauty Global S.R.L. significa affidarsi a un team di professionisti esperti, sempre pronti a fornire assistenza e consulenza, sia prima che dopo l&apos;acquisto
          </p>
        </div>
      </section>

      <footer className="border-t-[1px] border-[#8B8B8B] mt-20 mx-10 text-sm">
        <div className="flex justify-around items-center max-w-[1200px] mx-auto p-5">
          <div><p>Bea Glob s.r.l</p></div>
          <div><p> p.iva 10220220022</p></div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo-white.svg"
              alt="logo-footer"
              width={65}
              height={72}
            />
          </div>
          <div><p> © Copyright 2019 - 2023</p></div>
          <div className="flex gap-6">
            <img alt="instagram" src="/icon _instagram_.svg" width={20} />
            <img alt="instagram" src="/icon _facebook squared_.svg" width={20} />
          </div>
        </div>
      </footer>
    </>

  )
}
