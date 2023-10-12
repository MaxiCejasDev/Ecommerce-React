function Hero() {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] overflow-hidden grid grid-cols-2">
        <div className="ml-[80px] flex flex-col justify-center items-start font-poppins">
          <h1 className="font-mono text-8xl font-bold z-10 text-secondary">Magic mind</h1>
          <h2 className="z-10 font-bold text-lg text-[#475569]">Desarrolla tu potencial desde cualquier lugar en el mundo.</h2>
          <a className="flex mt-4 py-[10px] px-[50px] rounded-[20px] 
          bg-[#EAEDF1] border-[0.5px] z-10 font-bold text-primary hover:bg-[#e4e7eb] hover:text-[#646a77]"
            href="">
            Ver cursos
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-[500px] z-10" src="https://drive.google.com/uc?export=download&id=1A2cELyXeHU4VxPPjE2oP1iz4rwa7HmyI" alt="World" />
        </div>
      </div>
    </>
  );
}

export default Hero;
