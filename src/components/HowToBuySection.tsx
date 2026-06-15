const HowToBuySection = () => {
  return (
    <section id="howtobuy" className="py-20 border-b-4 border-black bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* How To Buy Title */}
          <div className="lg:w-1/3">
            <h2 className="text-7xl font-jacques tracking-tighter mb-4">HOW TO</h2>
            <h2 className="text-7xl font-jacques tracking-tighter text-right">BUY</h2>
          </div>

          {/* Steps */}
          <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
            <div className="comic-border bg-white p-8">
              <div className="font-ranchers text-2xl mb-4">1. SET UP A WALLET</div>
              <p className="text-lg">Download MetaMask or Trust Wallet and secure it with a backup phrase.</p>
            </div>

            <div className="comic-border bg-white p-8">
              <div className="font-ranchers text-2xl mb-4">2. PURCHASE ETH OR BNB</div>
              <p className="text-lg">Buy Ethereum or Binance Coin from Binance or Coinbase.</p>
            </div>

            <div className="comic-border bg-white p-8">
              <div className="font-ranchers text-2xl mb-4">3. SWAP FOR PANDA TOKEN</div>
              <p className="text-lg">Go to PancakeSwap or Uniswap, connect wallet and swap.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;