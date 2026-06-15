const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-20 border-b-4 border-black bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tokenomics Title (Vertical) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="text-8xl font-jacques tracking-tighter -rotate-90 lg:rotate-0 origin-center whitespace-nowrap">
              TOKENOMICS
            </div>
          </div>

          {/* Stats Box */}
          <div className="lg:col-span-4">
            <div className="comic-border bg-white p-10 h-full">
              <div className="space-y-10">
                <div className="text-center">
                  <div className="font-ranchers text-3xl">TOTAL SUPPLY</div>
                  <div className="font-ranchers text-5xl mt-2">10M</div>
                </div>

                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="font-ranchers text-3xl">SELL TAX</div>
                    <div className="font-ranchers text-5xl mt-1">0%</div>
                  </div>
                  <div>
                    <div className="font-ranchers text-3xl">BUY TAX</div>
                    <div className="font-ranchers text-5xl mt-1">0%</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-ranchers text-3xl">LIQUIDITY</div>
                  <div className="font-ranchers text-5xl mt-1">BURNT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Big PANDA */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative">
              <img src="/assets/panda-hero.png" alt="Big Panda" className="w-full max-w-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-rampart tracking-widest text-black drop-shadow-2xl">
                PANDA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;