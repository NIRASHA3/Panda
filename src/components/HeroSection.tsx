import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 relative min-h-screen flex items-center overflow-hidden border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-block bg-black text-white px-6 py-2 text-3xl font-jacques tracking-tighter comic-border">
              POW!
            </div>
            <h2 className="text-8xl md:text-[120px] font-jacques leading-none tracking-tighter">
              PANDA<br />TOKEN
            </h2>
          </motion.div>

          <p className="max-w-lg text-2xl font-ranchers leading-tight">
            Join the cutest, most eco-friendly community in crypto!
          </p>

          <div className="flex gap-4">
            <a href="#buy" className="px-10 py-5 bg-black text-white text-2xl font-ranchers comic-border hover:bg-yellow-300 hover:text-black transition-all">
              BUY NOW
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative"
        >
          <img
            src="/assets/panda-hero.png"
            alt="Hero Panda"
            className="w-full max-w-lg mx-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;