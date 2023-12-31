import { services } from "@/constant";
import Image from "next/image";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Service = (props:Service) => (
  <div className="px-[22px] pt-[62px] pb-[43px] bg-white flex flex-col items-center text-center gap-10">
    <div className="flex items-center justify-center w-[65px] h-[65px] bg-bg">
      <Image
        src={props.icon}
        width={50}
        height={50}
        alt={props.title}
      />
    </div>
    <h4>{props.title}</h4>
    <p className="text-lg">{props.description}</p>
  </div>
)

const Home = () => {
  return (
    <>
      <section className="pt-[168px] lg:pt-[70px] pb-[155px] lg:pb-24">
        <div className="my-0 mx-auto max-w-[58.33%] lg:max-w-[92.1%] flex flex-col items-center gap-[34px] lg:gap-9 text-center py-6">
          <div className="flex flex-col gap-5">
            <h1 className="text-[58px] md:text-[34px] font-extrabold leading-[142%] md:leading-[164%]">Creating modern web application in my room</h1>
            <p className="text-2xl md:text-base leading-[175%] md:leading-[237%]">I specialize in crafting web applications using modern, in demand technologies like Next.js Tailwind and etc.</p>
          </div>
          <div className="flex md:flex-col gap-[18px] lg:gap-[10px] lg:self-stretch">
            <button className="w-[196px] lg:w-full py-5 bg-secondary text-base leading-[120%]">my resume</button>
            <button className="w-[196px] lg:w-full py-5 bg-primary text-white text-base leading-[120%]">Let's work together</button>
          </div>
        </div>
      </section>
      <section id="about" className="py-[147px] lg:py-16 md:pt-4 bg-primary">
        <div className="my-0 mx-auto max-w-[71.66%] lg:max-w-[92.1%] flex md:flex-col gap-10 lg:gap-8 md:gap-[10px]">
          <Image
            src="/me.jpg"
            width={380}
            height={490}
            alt="Me"
            className="md:w-full"
          />
          <div className="pt-9 lg:pt-6 md:pt-11 flex flex-col gap-[38px] lg:gap-6 md:gap-6">
            <div className="flex flex-col gap-[30px] lg:gap-6">
              <h6 className="text-white text-2xl leading-[193%]">about</h6>
              <h2 className="text-white text-[42px] md:text-4xl font-bold leading-[160%] md:leading-[173%] max-w-[70%] md:max-w-none">who is <span className="text-gray-100">Plewffy front-end</span> developer?</h2>
            </div>
            <p className="leading-[190%]">I'm Plewffy (formally Ali), young Front-end developer. I specialize in crafting web applications using modern, in demand technologies like Next.js Tailwind and etc. Let's create something extraordinary together.</p>
            <span className="text-white opacity-10">bro look at this mf</span>
          </div>
        </div>
      </section>
      <section id="how" className="mt-8 py-[60px] bg-gray-50">
        <div className="mx-auto my-0 max-w-[75.27%] flex flex-col gap-[72px] md:gap-10">
          <div className="flex flex-col items-center text-center gap-[30px]">
            <h6 className="subtitle">services</h6>
            <h3>how can i help ?</h3>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {services.map(service => {
              return (
                <Service
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;