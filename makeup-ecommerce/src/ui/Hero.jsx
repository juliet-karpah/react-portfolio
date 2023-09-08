export default function Hero(){
    return(
        <section className="flex">
        <div className="w-full">
        <img className="w-full"  src="/other.jpeg" />
        </div>
        <div className="w-full md:block hidden">
        <img className="w-full"  src="/other3.jpeg" />
        </div>
        </section>
    )
}