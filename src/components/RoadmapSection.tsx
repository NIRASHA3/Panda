const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-7xl font-jacques text-right mb-12">ROADMAP</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="comic-border bg-white p-8">
            <div className="font-ranchers text-4xl mb-6">PHASE 01</div>
            <ul className="space-y-4 text-lg font-ranchers">
              <li>• Introducing Panda Token</li>
              <li>• Build strong community</li>
              <li>• Pre-sale for early adopters</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="comic-border bg-white p-8">
            <div className="font-ranchers text-4xl mb-6">PHASE 02</div>
            <ul className="space-y-4 text-lg font-ranchers">
              <li>• Launch Staking Platform</li>
              <li>• Panda-themed NFTs</li>
              <li>• Mobile App Development</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="comic-border bg-white p-8">
            <div className="font-ranchers text-4xl mb-6">PHASE 03</div>
            <ul className="space-y-4 text-lg font-ranchers">
              <li>• Metaverse Creation</li>
              <li>• Virtual Panda Experiences</li>
              <li>• Community Events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;