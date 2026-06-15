import { motion } from 'framer-motion';

const CommunitySection = () => {
  return (
    <section className="py-20 border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Panda */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            className="flex justify-center"
          >
            <img src="/assets/panda-waving-2.png" alt="Waving Panda" className="w-96" />
          </motion.div>

          {/* Right - Buy Now Box */}
          <div className="flex flex-col justify-center">
            <div className="comic-border bg-white p-12 max-w-lg">
              <div className="speech-bubble inline-block px-10 py-6 text-6xl font-ranchers mb-8">
                HELLO!
              </div>

              <h3 className="font-ranchers text-4xl leading-tight mb-6">
                Buy Panda Token Now And Join The Community In Supporting Wildlife Conservation While Enjoying Exclusive Rewards!
              </h3>

              <a href="#buy" className="inline-block px-16 py-6 bg-black text-white text-4xl font-ranchers comic-border hover:bg-yellow-300 hover:text-black transition-all">
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;