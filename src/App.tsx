import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import './App.css';

const DESKTOP_WIDTH = 1920;
const DESKTOP_HEIGHT = 1080;

function getDesktopScale() {
  if (globalThis.window === undefined) {
    return 1;
  }
  const scaleX = globalThis.window.innerWidth / DESKTOP_WIDTH;
  const scaleY = globalThis.window.innerHeight / DESKTOP_HEIGHT;
  return Math.min(scaleX, scaleY);
}

function App() {
  const [desktopScale, setDesktopScale] = useState(1);

  useEffect(() => {
    const updateScale = () => setDesktopScale(getDesktopScale());
    updateScale();
    if (globalThis.window !== undefined) {
      globalThis.window.addEventListener('resize', updateScale);
    }
    return () => {
      if (globalThis.window !== undefined) {
        globalThis.window.removeEventListener('resize', updateScale);
      }
    };
  }, []);

  const desktopWrapStyle: CSSProperties = {
    transform: `scale(${desktopScale})`,
    transformOrigin: 'center center',
    width: `${DESKTOP_WIDTH}px`,
    height: `${DESKTOP_HEIGHT}px`,
  };

  // Interactive handlers
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
    <div className="panda-page">
      <div className="panda-desktop-shell">
        <div className="panda-scale-wrap" style={desktopWrapStyle}>
          <main className="panda-desktop" aria-label="Panda desktop landing page">
            <div className="desktop-border" />
            
            <section className="about-box" aria-label="About us section">
              <img src="/assets/panda-sitting.png" alt="Panda mascot" className="about-panda-top" />
              <img src="/assets/pow.png" alt="Pow" className="about-pow" />
              <h2 className="title about-title">About Us</h2>
              <img src="/assets/text box 1.png" alt="About text panel" className="about-text-bg" />
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

            <img src="/assets/panda-barrel.png" alt="Panda with barrel" className="panda-barrel" />

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

            <section className="center-topic" aria-label="Panda headline">
              <img src="/assets/main -text.png" alt="Comic burst" className="main-burst" />
              <h1>PANDA</h1>
            </section>

            <section className="join-box" aria-label="Join community section">
              <img src="/assets/panda-hero.png" alt="Standing panda" className="panda-standing" />
              <div className="join-panel-wrapper">
                <div className="join-panel">
                  <p>Join The Panda Token Community Today And Be Part Of A Fun.</p>
                  <button type="button" onClick={handleJoinNow}>Join Now</button>
                  <div className="social-row">
                    <button 
                      type="button"
                      onClick={() => handleSocialClick('twitter')}
                      aria-label="Twitter"
                    >
                      <img src="/assets/Group 1171277302.png" alt="Twitter" />
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleSocialClick('telegram')}
                      aria-label="Telegram"
                    >
                      <img src="/assets/Frame 1261152963.png" alt="Telegram" />
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleSocialClick('discord')}
                      aria-label="Discord"
                    >
                      <img src="/assets/Frame 1261154701.png" alt="Discord" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="roadmap-box" aria-label="Roadmap section">
              <h2 className="title roadmap-title">Roadmap</h2>
              <img src="/assets/text box-roadmap.png" alt="Roadmap panel" className="roadmap-bg" />
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
              <img src="/assets/panda-lying.png" alt="Panda lying down" className="panda-lying" />
              <img src="/assets/panda- leg.png" alt="Panda leg" className="panda-leg" />
            </section>

            <section className="how-box" aria-label="How to buy section">
              <h2 className="title how-title">How To</h2>
              <h2 className="title how-buy-title">
                <span>B</span>
                <span>u</span>
                <span>y</span>
              </h2>
              <img src="/assets/text box 2.png" alt="How to buy panel" className="how-bg" />
              <div className="how-step how-step-1">
                <h4>Set Up A Wallet</h4>
                <p>Download A Wallet Like MetaMask Or Trust Wallet And Secure It With A Backup Phrase.</p>
              </div>
              <div className="how-arrow how-arrow-1">→</div>
              <div className="how-step how-step-2">
                <h4>Purchase ETH Or BNB</h4>
                <p>Buy Ethereum (ETH) Or Binance Coin (BNB) From An Exchange Like Binance Or Coinbase.</p>
              </div>
              <div className="how-arrow how-arrow-2">→</div>
              <div className="how-step how-step-3">
                <h4>Swap For Panda Token</h4>
                <p>Go To PancakeSwap Or Uniswap, Connect Your Wallet, And Swap.</p>
              </div>
            </section>

            <section className="buy-box" aria-label="Buy now call to action">
              <img src="/assets/hello.png" alt="Hello bubble" className="hello-bubble" />
              <img src="/assets/panda-waving-2.png" alt="Waving panda" className="panda-bottom" />
              <img src="/assets/arrow.png" alt="Buy now arrow panel" className="buy-arrow-panel" />
              <div className="buy-arrow-copy">
                Buy Panda Token Now And Join The Community In Supporting Wildlife Conservation While
                Enjoying Exclusive Rewards!
              </div>
              <button
                type="button"
                className="buy-circle"
                onClick={handleBuyNow}
                aria-label="Buy Now"
              >
                <img src="/assets/Group 1261153031.png" alt="Buy Now" />
              </button>
            </section>
          </main>
        </div>
      </div>

      <div className="panda-mobile-shell">
        <header className="mobile-header" aria-label="Mobile navigation">
          <img src="/assets/panda-sitting.png" alt="Panda logo" className="mobile-logo" />
          <img src="/assets/Vector.png" alt="Menu" className="mobile-menu" />
        </header>

        <section className="mobile-hero" aria-label="Panda hero">
          <img src="/assets/main -text.png" alt="PANDA burst" className="mobile-hero-burst" />
          <button
            type="button"
            className="mobile-buy-bubble"
            onClick={handleBuyNow}
            aria-label="Buy Now"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <img src="/assets/Group 1261153031.png" alt="Buy Now" />
          </button>
        </section>

        <main className="mobile-stack">
          <section className="mobile-about mobile-card" aria-label="About us section">
            <img src="/assets/panda-sitting.png" alt="Panda mascot" className="mobile-about-panda" />
            <h2 className="title mobile-about-title">About Us</h2>
            <div className="mobile-about-panel">
              <img src="/assets/text box 1.png" alt="About text panel" className="mobile-about-bg" />
              <div className="mobile-about-copy">
                <p>
                  Panda Token Is A Unique Digital Currency Designed To Bring Together A Community Of
                  Eco-Conscious And Animal Lovers. Inspired By The Playful And Wise Nature Of Pandas,
                  Our Token Aims To Promote Sustainability, Wildlife Conservation, And A Fun,
                  Engaging Ecosystem.
                </p>
                <p>
                  Join Us In Supporting Environmental Initiatives And Building A Community That Cares
                  For The Planet, One Token At A Time.
                </p>
              </div>
            </div>
            <img src="/assets/pow.png" alt="Pow" className="mobile-pow" />
          </section>

          <img src="/assets/panda-barrel.png" alt="Panda with barrel" className="mobile-feature-panda" />

          <section className="mobile-tokenomics mobile-card" aria-label="Tokenomics section">
            <div className="mobile-vertical-title">Tokenomics</div>
            <div className="mobile-tokenomics-panel">
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

          <section className="mobile-roadmap mobile-card" aria-label="Roadmap section">
            <h2 className="title mobile-section-title">Roadmap</h2>
            <div className="mobile-roadmap-phases">
              <div className="mobile-phase">
                <h3>Phase 01</h3>
                <p>
                  Introducing Panda Token To The World With Clear Objectives. Build A Strong And
                  Active Community On Social Platforms. Conduct A Pre-Sale To Allow Early Adopters
                  To Get Involved.
                </p>
              </div>
              <div className="mobile-phase">
                <h3>Phase 02</h3>
                <p>
                  Launch Staking Platform To Allow Users To Earn Rewards By Holding Panda Tokens.
                  Introduce Exclusive Panda-Themed NFTs For The Community. Build A Mobile App For
                  Easy Access To Staking Rewards.
                </p>
              </div>
              <div className="mobile-phase">
                <h3>Phase 03</h3>
                <p>
                  Explore The Creation Of A Metaverse Where Users Can Interact, Engage, And Create
                  Panda-Related Virtual Experiences.
                </p>
              </div>
            </div>
            <img src="/assets/panda-lying.png" alt="Panda lying down" className="mobile-roadmap-panda" />
          </section>

          <section className="mobile-how mobile-card" aria-label="How to buy section">
            <h2 className="title mobile-section-title">How To Buy</h2>
            <div className="mobile-how-panel">
              <div className="mobile-step">
                <h4>Set Up A Wallet</h4>
                <p>Download A Wallet Like MetaMask Or Trust Wallet And Secure It With A Backup Phrase.</p>
              </div>
              <div className="mobile-step">
                <h4>Purchase ETH Or BNB</h4>
                <p>Buy Ethereum (ETH) Or Binance Coin (BNB) From An Exchange Like Binance Or Coinbase.</p>
              </div>
              <div className="mobile-step">
                <h4>Swap For Panda Token</h4>
                <p>Go To PancakeSwap Or Uniswap, Connect Your Wallet, And Swap.</p>
              </div>
            </div>
          </section>

          <section className="mobile-community mobile-card" aria-label="Community section">
            <img src="/assets/hello.png" alt="Hello bubble" className="mobile-hello" />
            <img src="/assets/panda-waving.png" alt="Waving panda" className="mobile-community-panda" />
            <div className="mobile-community-panel">
              <p>
                Buy Panda Token Now And Join The Community In Supporting Wildlife Conservation While
                Enjoying Exclusive Rewards!
              </p>
              <button
                type="button"
                className="mobile-buy-now-bubble"
                onClick={handleBuyNow}
                aria-label="Buy Now"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', width: '122px', margin: '0 auto 14px' }}
              >
                <img src="/assets/Group 1261153031.png" alt="Buy Now" />
              </button>
              <div className="social-row mobile-social-row">
                <button 
                  type="button"
                  onClick={() => handleSocialClick('twitter')}
                  aria-label="Twitter"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src="/assets/Group 1171277302.png" alt="Twitter" />
                </button>
                <button 
                  type="button"
                  onClick={() => handleSocialClick('telegram')}
                  aria-label="Telegram"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src="/assets/Frame 1261152963.png" alt="Telegram" />
                </button>
                <button 
                  type="button"
                  onClick={() => handleSocialClick('discord')}
                  aria-label="Discord"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src="/assets/Frame 1261154701.png" alt="Discord" />
                </button>
              </div>
            </div>
            <img src="/assets/panda-hero.png" alt="Standing panda" className="mobile-join-panda" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;