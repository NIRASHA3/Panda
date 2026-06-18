import React from 'react';

export default function DesktopTabletContent() {
  const handleSocialClick = (platform: string) => {
    const socialLinks: Record<string, string> = {
      twitter: 'https://twitter.com/pandatoken',
      telegram: 'https://t.me/pandatoken',
      discord: 'https://discord.gg/pandatoken'
    };
    if (globalThis.window !== undefined) {
      globalThis.window.open(socialLinks[platform] || socialLinks.twitter, '_blank', 'noopener,noreferrer');
    }
  };

  const handleJoinNow = () => {
    if (globalThis.window !== undefined) {
      globalThis.window.open('https://t.me/pandatoken', '_blank', 'noopener,noreferrer');
    }
  };

  const handleBuyNow = () => {
    if (globalThis.window !== undefined) {
      globalThis.window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="panda-desktop" aria-label="Panda landing page">
      <div className="desktop-border" />
      
      {/* About Section */}
      <section className="about-box" aria-label="About us section">
        <img src="/assets/panda-sitting.png" alt="Panda mascot" className="about-panda-top" />
        <img src="/assets/pow.png" alt="Pow effect" className="about-pow" />
        <h2 className="title about-title">About Us</h2>
        <img src="/assets/text box 1.png" alt="About text background" className="about-text-bg" />
        <div className="about-text-panel">
          <p>
            Panda Token Is A Unique Digital Currency Designed To Bring Together A Community Of
            Eco-Conscious And Animal Lovers. Inspired By The Playful And Wise Nature Of Pandas,
            Our Token Aims To Promote Sustainability, Wildlife Conservation, And A Fun,
            Engaging Ecosystem.
          </p>
          <p className="about-text-panel-secondary">
            Join Us In Supporting Environmental Initiatives And Building A Community That Cares
            For The Planet, One Token At A Time.
          </p>
        </div>
      </section>

      {/* Decorative Elements */}
      <img src="/assets/panda-barrel.png" alt="Panda with barrel" className="panda-barrel" />

      {/* Tokenomics Section */}
      <section className="tokenomics-box" aria-label="Tokenomics section">
        <div className="tokenomics-wrapper"></div>
        <div className="tokenomics-frame"></div>
        <h2 className="title vertical-title">Tokenomics</h2>
        <div className="tokenomics-stats">
          <div>
            <span>Total Supply</span>
            <strong>10M</strong>
          </div>
          <div>
            <span>Sell Tax</span>
            <strong>0%</strong>
          </div>
          <div>
            <span>Liquidity</span>
            <strong>Burnt</strong>
          </div>
          <div>
            <span>Buy Tax</span>
            <strong>0%</strong>
          </div>
        </div>
      </section>

      {/* Hero Topic */}
      <section className="center-topic" aria-label="Panda headline">
        <img src="/assets/main -text.png" alt="Comic burst background" className="main-burst" />
        <h1>PANDA</h1>
      </section>

      {/* Community Section */}
      <section className="join-box" aria-label="Join community section">
        <img src="/assets/panda-hero.png" alt="Standing panda" className="panda-standing" style={{ pointerEvents: 'none' }} />
        <div className="join-panel-wrapper" style={{ position: 'relative', zIndex: 50 }}>
          <div className="join-panel">
            <p>Join The Panda Token Community Today And Be Part Of A Fun.</p>
            <button type="button" onClick={handleJoinNow}>Join Now</button>
            <div className="social-row" style={{ position: 'relative', zIndex: 50 }}>
              <button type="button" onClick={() => handleSocialClick('twitter')} aria-label="Visit Twitter">
                <img src="/assets/Group 1171277302.png" alt="Twitter logo" />
              </button>
              <button type="button" onClick={() => handleSocialClick('telegram')} aria-label="Visit Telegram">
                <img src="/assets/Frame 1261152963.png" alt="Telegram logo" />
              </button>
              <button type="button" onClick={() => handleSocialClick('discord')} aria-label="Visit Discord">
                <img src="/assets/Frame 1261154701.png" alt="Discord logo" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-box" aria-label="Roadmap section">
        <h2 className="title roadmap-title">Roadmap</h2>
        <img src="/assets/text box-roadmap.png" alt="Roadmap background panel" className="roadmap-bg" />
        <div className="roadmap-phase roadmap-phase-1">
          <h3>Phase 01</h3>
          <p className="phase1-text-main">
            Introducing Panda Token To The World With Clear Objectives.
            Build A Strong And Active Community On Social Platforms.
          </p>
          <p className="phase1-text-presale">
            Conduct A Pre-Sale To Allow Early Adopters To Get Involved.
          </p>
        </div>
        <div className="roadmap-phase roadmap-phase-2">
          <h3>Phase 02</h3>
          <p>
            Launch Staking Platform To Allow Users To Earn Rewards By Holding Panda Tokens.
            Introduce Exclusive Panda-Themed NFTs For The Community. Build A Mobile App For
            Easy Access To Staking Rewards.
          </p>
        </div>
        <div className="roadmap-phase roadmap-phase-3">
          <h3>Phase 03</h3>
          <p>
            Explore The Creation Of A Metaverse Where Users Can Interact, Engage, And Create
            Panda-Related Virtual Experiences.
          </p>
        </div>
        <img src="/assets/panda-lying.png" alt="Panda relaxing" className="panda-lying" />
        <img src="/assets/panda- leg.png" alt="Panda leg waving" className="panda-leg" />
      </section>

      {/* How to Buy Section */}
      <section className="how-box" aria-label="How to buy section">
        <h2 className="title how-title">How To</h2>
        <h2 className="title how-buy-title">
          <span>B</span>
          <span>u</span>
          <span>y</span>
        </h2>
        <img src="/assets/text box 2.png" alt="How to buy background panel" className="how-bg" />
        <div className="how-step how-step-1">
          <h4>Set Up A Wallet</h4>
          <p>Download A Wallet Like MetaMask Or Trust Wallet And Secure It With A Backup Phrase.</p>
        </div>
        <div className="how-arrow how-arrow-1" aria-hidden="true">→</div>
        <div className="how-step how-step-2">
          <h4>Purchase ETH Or BNB</h4>
          <p>Buy Ethereum (ETH) Or Binance Coin (BNB) From An Exchange Like Binance Or Coinbase.</p>
        </div>
        <div className="how-arrow how-arrow-2" aria-hidden="true">→</div>
        <div className="how-step how-step-3">
          <h4>Swap For Panda Token</h4>
          <p>Go To PancakeSwap Or Uniswap, Connect Your Wallet, And Swap.</p>
        </div>
      </section>

      {/* Buy Now Call-To-Action */}
      <section className="buy-box" aria-label="Buy now call to action">
        <img src="/assets/hello.png" alt="Hello speech bubble" className="hello-bubble" />
        <img src="/assets/panda-waving-2.png" alt="Waving panda" className="panda-bottom" />
        <img src="/assets/arrow.png" alt="Directional arrow" className="buy-arrow-panel" />
        <div className="buy-arrow-copy">
          Buy Panda Token Now And Join The Community In Supporting Wildlife Conservation While
          Enjoying Exclusive Rewards!
        </div>
        <button
          type="button"
          className="buy-circle"
          onClick={handleBuyNow}
          aria-label="Buy Now Button"
        >
          <img src="/assets/Group 1261153031.png" alt="Buy Now Call To Action" />
        </button>
      </section>
    </main>
  );
}