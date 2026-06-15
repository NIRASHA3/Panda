import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img src="/assets/panda-back.png" alt="Panda" className="w-24 h-24" />
              <h2 className="text-7xl font-jacques tracking-tighter">ABOUT US</h2>
            </div>

            <div className="comic-border bg-white p-8 max-w-xl">
              <p className="font-ranchers text-xl leading-relaxed">
                Panda Token is a unique digital currency designed to bring together a community of eco-conscious and animal lovers. Inspired by the playful and wise nature of pandas, our token aims to promote sustainability, wildlife conservation, and a fun, engaging ecosystem.
              </p>
              <p className="font-ranchers text-xl leading-relaxed mt-6">
                Join us in supporting environmental initiatives and building a community that cares for the planet, one token at a time.
              </p>
            </div>

            {/* Join Community Box */}
            <div className="comic-border bg-white p-8 max-w-md">
              <h3 className="font-ranchers text-2xl mb-6">Join The Panda Token Community Today And Be Part Of A Fun.</h3>
              
              <a href="#buy" className="block w-fit px-12 py-4 bg-black text-white text-xl font-ranchers comic-border hover:bg-yellow-300 hover:text-black transition-all">
                JOIN NOW
              </a>

              <div className="flex gap-6 mt-8">
                <img src="/assets/Group 1171277302.png" alt="Telegram" className="w-12 h-12" />
                <img src="/assets/Frame 1261152963.png" alt="Twitter" className="w-12 h-12" />
                <img src="/assets/Frame 1261154701.png" alt="X" className="w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Right - Pandas & POW */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img src="/assets/panda-barrel.png" alt="Panda Barrel" className="w-80" />
            </motion.div>

            <div className="absolute -top-12 -right-8">
              <div className="speech-bubble px-8 py-6 w-48 text-center font-ranchers text-4xl comic-border">
                POW!
              </div>
            </div>

            <img src="/assets/panda-sitting.png" alt="Sitting Panda" className="absolute -bottom-12 -left-12 w-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;