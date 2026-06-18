import { useEffect, useState, useRef } from 'react';
import type { CSSProperties } from 'react';
import './App.css';

const DESKTOP_WIDTH = 1920;
const DESKTOP_HEIGHT = 1080;
const TAB_WIDTH = 1200;    // Exact Figma Tablet Canvas Width
const MOBILE_WIDTH = 414;  

function App() {
  const [screenWidth, setScreenWidth] = useState(MOBILE_WIDTH);
  
  // Desktop specific state
  const [desktopScale, setDesktopScale] = useState(1);

  // Tab specific state
  const [tabScale, setTabScale] = useState(1);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const [tabWrapperHeight, setTabWrapperHeight] = useState<number | 'auto'>('auto');

  // Mobile specific state
  const [mobileScale, setMobileScale] = useState(1);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const [mobileWrapperHeight, setMobileWrapperHeight] = useState<number | 'auto'>('auto');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent overall window horizontal scrolling
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    const updateScales = () => {
      if (globalThis.window !== undefined) {
        const currentWidth = globalThis.window.innerWidth;
        const currentHeight = globalThis.window.innerHeight;
        setScreenWidth(currentWidth);
        
        // --- DESKTOP SCALING ---
        const scaleX = currentWidth / DESKTOP_WIDTH;
        const scaleY = currentHeight / DESKTOP_HEIGHT;
        setDesktopScale(Math.min(scaleX, scaleY));
        
        // --- TAB SCALING (Full Width, Natural Scroll) ---
        setTabScale(currentWidth / TAB_WIDTH);

        // --- MOBILE SCALING ---
        setMobileScale(Math.min(currentWidth / MOBILE_WIDTH, 1.5));
      }
    };
    
    updateScales();
    
    if (globalThis.window !== undefined) {
      globalThis.window.addEventListener('resize', updateScales);
    }
    return () => {
      if (globalThis.window !== undefined) {
        globalThis.window.removeEventListener('resize', updateScales);
      }
    };
  }, []);

  // --- TAB ResizeObserver ---
  useEffect(() => {
    if (!tabContentRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (tabContentRef.current) {
        const rect = tabContentRef.current.getBoundingClientRect();
        if (rect.height > 0) {
          setTabWrapperHeight(Math.ceil(rect.height));
        }
      }
    });
    resizeObserver.observe(tabContentRef.current);
    return () => resizeObserver.disconnect();
  }, [tabScale]);

  // --- MOBILE ResizeObserver ---
  useEffect(() => {
    if (!mobileContentRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (mobileContentRef.current) {
        const rect = mobileContentRef.current.getBoundingClientRect();
        if (rect.height > 0) {
          setMobileWrapperHeight(Math.ceil(rect.height));
        }
      }
    });
    resizeObserver.observe(mobileContentRef.current);
    return () => resizeObserver.disconnect();
  }, [mobileScale]);


  // ==========================================
  // DESKTOP STYLES
  // ==========================================
  const desktopOuterWrapStyle: CSSProperties = {
    position: 'relative',
    width: '100vw',
    height: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 
    backgroundColor: '#ffffff'
  };

  const desktopInnerWrapStyle: CSSProperties = {
    width: `${DESKTOP_WIDTH}px`,
    height: `${DESKTOP_HEIGHT}px`,
    transform: `scale(${desktopScale})`,
    transformOrigin: 'center center',
    flexShrink: 0,
  };

  // ==========================================
  // TAB STYLES
  // ==========================================
  const scaledTabWidth = TAB_WIDTH * tabScale;
  const tabLeftOffset = (screenWidth - scaledTabWidth) / 2;

  const tabOuterWrapStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: tabWrapperHeight === 'auto' ? 'auto' : `${tabWrapperHeight}px`,
    overflow: 'hidden',
  };

  const tabInnerWrapStyle: CSSProperties = {
    transform: `scale(${tabScale})`,
    transformOrigin: 'top left',
    width: `${TAB_WIDTH}px`,
    position: 'absolute',
    top: 0,
    left: `${Math.max(0, tabLeftOffset)}px`,
  };

  // ==========================================
  // MOBILE STYLES
  // ==========================================
  const scaledMobileWidth = MOBILE_WIDTH * mobileScale;
  const mobileLeftOffset = (screenWidth - scaledMobileWidth) / 2;

  const mobileOuterWrapStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: mobileWrapperHeight === 'auto' ? 'auto' : `${mobileWrapperHeight}px`,
    overflow: 'hidden',
  };

  const mobileInnerWrapStyle: CSSProperties = {
    transform: `scale(${mobileScale})`,
    transformOrigin: 'top left',
    width: `${MOBILE_WIDTH}px`,
    position: 'absolute',
    top: 0,
    left: `${Math.max(0, mobileLeftOffset)}px`,
  };

  // Dropdown Menu Styles
  const mobileDropdownStyle: CSSProperties = {
    position: 'absolute',
    top: '80px',
    right: '20px',
    backgroundColor: '#ffffff',
    border: '4px solid #000000',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    zIndex: 1000,
    boxShadow: '4px 4px 0px 0px #000000',
    minWidth: '160px'
  };

  const mobileDropdownButtonStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'inherit',
    textAlign: 'right',
    color: '#000000',
    cursor: 'pointer',
    padding: '0'
  };

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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared inner content for Desktop and Tablet views to keep DOM identical
  const renderDesktopContent = () => (
    <main className="panda-desktop" aria-label="Panda landing page">
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
        <img src="/assets/panda-hero.png" alt="Standing panda" className="panda-standing" style={{ pointerEvents: 'none' }} />
        
        <div className="join-panel-wrapper" style={{ position: 'relative', zIndex: 50 }}>
          <div className="join-panel">
            <p>Join The Panda Token Community Today And Be Part Of A Fun.</p>
            <button type="button" onClick={handleJoinNow}>Join Now</button>
            <div className="social-row" style={{ position: 'relative', zIndex: 50 }}>
              <button type="button" onClick={() => handleSocialClick('twitter')} aria-label="Twitter">
                <img src="/assets/Group 1171277302.png" alt="Twitter" />
              </button>
              <button type="button" onClick={() => handleSocialClick('telegram')} aria-label="Telegram">
                <img src="/assets/Frame 1261152963.png" alt="Telegram" />
              </button>
              <button type="button" onClick={() => handleSocialClick('discord')} aria-label="Discord">
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
  );

  return (
    <div className="panda-page" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* ========================================
          DESKTOP VIEW (> 1280px)
      ======================================== */}
      <div className="panda-desktop-shell">
        <div style={desktopOuterWrapStyle}>
          <div style={desktopInnerWrapStyle}>
            {renderDesktopContent()}
          </div>
        </div>
      </div>

      {/* ========================================
          TABLET VIEW (901px - 1280px)
      ======================================== */}
      <div className="panda-tab-shell">
        <div style={tabOuterWrapStyle}>
          <div ref={tabContentRef} style={tabInnerWrapStyle}>
            {renderDesktopContent()}
          </div>
        </div>
      </div>

      {/* ========================================
          MOBILE VIEW (<= 900px)
      ======================================== */}
      <div className="panda-mobile-shell">
        <div style={mobileOuterWrapStyle}>
          <div ref={mobileContentRef} style={mobileInnerWrapStyle}>
            
            <header className="mobile-header" aria-label="Mobile navigation" style={{ position: 'relative', zIndex: 1000 }}>
              <img src="/assets/favicon.png" alt="Panda logo" className="mobile-logo" />
              <button 
                className="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <img src="/assets/Vector.png" alt="Menu" className="mobile-menu" />
              </button>
              
              {isMobileMenuOpen && (
                <div style={mobileDropdownStyle}>
                  <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-about')}>About Us</button>
                  <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-tokenomics')}>Tokenomics</button>
                  <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-roadmap')}>Roadmap</button>
                  <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-how')}>How To Buy</button>
                  <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-community')}>Community</button>
                </div>
              )}
            </header>

            <section className="mobile-hero" aria-label="Panda hero">
              <img src="/assets/main -text.png" alt="PANDA burst" className="mobile-hero-burst" />
              <h1 className="title mobile-hero-title">PANDA</h1>
              <button type="button" className="mobile-buy-bubble" onClick={handleBuyNow} aria-label="Buy Now">
                <img src="/assets/Group 1261153031.png" alt="Buy Now" />
              </button>
            </section>

            <section id="mobile-about" className="mobile-about" aria-label="About us section">
              <div className="mobile-about-box">
                <img src="/assets/text box 1.png" alt="About panel background" className="mobile-about-bg" />
                <img src="/assets/panda-sitting.png" alt="Panda mascot" className="mobile-about-panda" />
                <img src="/assets/pow.png" alt="Pow" className="mobile-pow" />
                
                <div className="mobile-about-content-wrapper">
                  <h2 className="title mobile-section-title">About Us</h2>
                  <div className="mobile-about-content">
                    <p>
                      Panda Token Is A Unique Digital Currency Designed To Bring Together A Community Of
                      Eco-Conscious And Animal Lovers. Inspired By The Playful And Wise Nature Of Pandas,
                      Our Token Aims To Promote Sustainability, Wildlife Conservation, And A Fun,
                      Engaging Ecosystem.
                    </p>
                    <br />
                    <p>
                      Join Us In Supporting Environmental Initiatives And Building A Community That Cares
                      For The Planet, One Token At A Time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <img src="/assets/panda-barrel.png" alt="Panda with barrel" className="mobile-feature-panda" />

            <section id="mobile-tokenomics" className="mobile-tokenomics" aria-label="Tokenomics section">
              <div className="mobile-tokenomics-box">
                <div className="mobile-tokenomics-wrapper">
                  <div className="mobile-tokenomics-frame">
                    <h2 className="title mobile-section-title mobile-vertical-title">Tokenomics</h2>
                    <div className="mobile-tokenomics-panel">
                      <div className="mobile-stat align-left">
                        <span>Total<br/>Supply</span>
                        <strong>10M</strong>
                      </div>
                      <div className="mobile-stat align-right">
                        <span>Sell Tax</span>
                        <strong>0%</strong>
                      </div>
                      <div className="mobile-stat align-left">
                        <span>Liquidity</span>
                        <strong>Burnt</strong>
                      </div>
                      <div className="mobile-stat align-right">
                        <span>Buy Tax</span>
                        <strong>0%</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/assets/panda- leg.png" alt="Panda leg" className="mobile-tokenomics-leg" />
              </div>
            </section>

            <section id="mobile-roadmap" className="mobile-roadmap" aria-label="Roadmap section">
              <h2 className="title mobile-section-title mobile-roadmap-title">Roadmap</h2>
              <div className="mobile-roadmap-box">
                <img src="/assets/text box-roadmap.png" alt="Roadmap background" className="mobile-roadmap-bg" />
                <div className="mobile-roadmap-phases">
                  <div className="mobile-phase mobile-phase-1">
                    <h3>PHASE 01</h3>
                    <p>
                      Introducing Panda Token To The World With Clear Objectives. Build A Strong And
                      Active Community On Social Platforms.
                    </p>
                    <p className="presale-text">
                      Conduct A Pre-Sale To Allow Early Adopters To Get Involved.
                    </p>
                  </div>
                  <div className="mobile-phase mobile-phase-2">
                    <h3>PHASE 02</h3>
                    <p>
                      Launch Staking Platform To Allow Users To Earn Rewards By Holding Panda Tokens.
                      Introduce Exclusive Panda-Themed NFTs For The Community. Build A Mobile App For
                      Easy Access To Staking Rewards.
                    </p>
                  </div>
                  <div className="mobile-phase mobile-phase-3">
                    <h3>PHASE 03</h3>
                    <p>
                      Explore The Creation Of A Metaverse Where Users Can Interact, Engage, And Create
                      Panda-Related Virtual Experiences.
                    </p>
                  </div>
                </div>
              </div>
              <img src="/assets/panda-lying.png" alt="Panda lying down" className="mobile-roadmap-panda" />
            </section>

            <section id="mobile-how" className="mobile-how" aria-label="How to buy section">
              <div className="mobile-how-box">
                <img src="/assets/text box 2.png" alt="How to buy background" className="mobile-how-bg" />
                <div className="mobile-how-content-wrapper">
                  <h2 className="mobile-how-title ">How To<br />Buy</h2>
                  <div className="mobile-how-panel">
                    <div className="mobile-step">
                      <h4>Set Up A Wallet</h4>
                      <p>Download A Wallet Like MetaMask Or Trust Wallet And Secure It With A Backup Phrase.</p>
                    </div>
                    <div className="mobile-arrow">↓</div>
                    <div className="mobile-step">
                      <h4>Purchase ETH Or BNB</h4>
                      <p>Buy Ethereum (ETH) Or Binance Coin (BNB) From An Exchange Like Binance Or Coinbase.</p>
                    </div>
                    <div className="mobile-arrow">↓</div>
                    <div className="mobile-step">
                      <h4>Swap For Panda Token</h4>
                      <p>Go To PancakeSwap Or Uniswap, Connect Your Wallet, And Swap.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="mobile-community" className="mobile-community" aria-label="Community section">
              <div className="mobile-hello-wrapper">
                <img src="/assets/panda-waving-2.png" alt="Panda waving" className="mobile-hello-panda" />
                <img src="/assets/hello.png" alt="Hello bubble" className="mobile-hello" />
              </div>
              
              <div className="mobile-community-box" style={{ position: 'relative', zIndex: 10 }}>
                <div className="mobile-community-wrapper">
                  <div className="mobile-community-frame">
                    <div className="mobile-community-panel">
                      <p>Join The Panda Token Community Today And Be Part Of A Fun.</p>
                      <button type="button" className="mobile-join-button" onClick={handleJoinNow}>Join Now</button>
                      
                      <div className="mobile-social-row" style={{ position: 'relative', zIndex: 50 }}>
                        <button type="button" onClick={() => handleSocialClick('twitter')} aria-label="Twitter">
                          <img src="/assets/Group 1171277302.png" alt="Twitter" />
                        </button>
                        <button type="button" onClick={() => handleSocialClick('telegram')} aria-label="Telegram">
                          <img src="/assets/Frame 1261152963.png" alt="Telegram" />
                        </button>
                        <button type="button" onClick={() => handleSocialClick('discord')} aria-label="Discord">
                          <img src="/assets/Frame 1261154701.png" alt="Discord" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <img 
                src="/assets/panda-hero.png" 
                alt="Standing panda" 
                className="mobile-join-panda" 
                style={{ position: 'relative', zIndex: 5, pointerEvents: 'none' }} 
              />
            </section>

            <footer className="mobile-footer" style={{ position: 'relative', zIndex: 10 }}>
              <p>©2024 Panda All Right Reserved</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;