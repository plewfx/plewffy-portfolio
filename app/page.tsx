const Home = () => {
  return (
    <>
      <section className="pt-[168px] lg:pt-[70px] pb-[155px] lg:pb-24">
        <div className="my-0 mx-auto max-w-[58.33%] lg:max-w-[92.1%] flex flex-col items-center gap-[34px] lg:gap-9 text-center py-6">
          <div className="flex flex-col gap-5">
            <h1 className="text-[58px] font-extrabold leading-[142%]">Creating modern web application in my room</h1>
            <p className="text-2xl lg:text-base leading-[175%] lg:leading-[237%]">I specialize in crafting web applications using modern, in demand technologies like Next.js Tailwind and etc.</p>
          </div>
          <div className="flex lg:flex-col gap-[18px] lg:gap-[10px] lg:self-stretch">
            <button className="w-[196px] lg:w-full py-5 bg-secondary text-base font-medium leading-[120%]">my resume</button>
            <button className="w-[196px] lg:w-full py-5 bg-primary text-white text-base font-medium leading-[120%]">Let's work together</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;