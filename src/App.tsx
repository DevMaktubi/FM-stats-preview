function App() {
  return (
    <main className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="md:w-[1100px] md:h-[446px] mx-auto flex md:flex-row flex-col-reverse w-[330px] h-[780px] bg-secondary rounded-lg ">
        <div className="md:max-w-[50%] max-h-[60%] md:max-h-full flex flex-1 flex-col items-center justify-center  md:px-[72px] px-8">
          <div className="flex flex-col md:text-start md:mb-[72px] mb-[36px] text-center">
            <h1 className="md:text-[2.25rem] font-bold text-white mb-6 md:leading-[44px] text-[28px] leading-8">
              Get <span className="text-primary">insights</span> that help your
              business grow.
            </h1>
            <p className="text-white opacity-75 text-[15px] leading-6">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:w-full items-center gap-y-5 pb-10">
            <div className="flex flex-col md:items-start items-center justify-center">
              <h1 className="font-bold text-white text-2xl mb-[2px]">10k+</h1>
              <p className="uppercase text-white opacity-60 text-xs font-deca tracking-widest">
                Companies
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center justify-center">
              <h1 className="font-bold text-white text-2xl mb-[2px]">314</h1>
              <p className="uppercase text-white opacity-60 text-xs font-deca tracking-widest">
                Templates
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center justify-center">
              <h1 className="font-bold text-white text-2xl mb-[2px]">12M+</h1>
              <p className="uppercase text-white opacity-60 text-xs font-deca tracking-widest">
                Queries
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 bg-primary bg-bgDesk bg-no-repeat md:bg-cover bg-cover bg-blend-multiply bg-opacity-100 opacity-75 rounded-lg mb-10 md:mb-0"></div>
      </div>
    </main>
  );
}

export default App;
