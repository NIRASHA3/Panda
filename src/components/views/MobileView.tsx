import React, { useRef, useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { MOBILE_WIDTH } from '../../hooks/useResponsiveLayout';

// Define strictly typed, read-only props
interface MobileViewProps {
  readonly scale: number;
  readonly leftOffset: number;
}

export default function MobileView({ scale, leftOffset }: MobileViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number | 'auto'>('auto');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tracks the height of the scaled mobile content to enable natural vertical scrolling
  useEffect(() => {
    if (!contentRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        setWrapperHeight(Math.ceil(contentRef.current.getBoundingClientRect().height));
      }
    });
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [scale]);

  // Click Handlers
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

  // Dropdown Menu CSS
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

  return (
    <div className="panda-mobile-shell" style={{ display: 'block' }}>
      <div style={{ position: 'relative', width: '100%', height: wrapperHeight === 'auto' ? 'auto' : `${wrapperHeight}px`, overflow: 'hidden' }}>
        <div 
          ref={contentRef} 
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: `${MOBILE_WIDTH}px`,
            position: 'absolute',
            top: 0,
            left: `${leftOffset}px`,
          }}
        >
          {/* Mobile Header & Navigation */}
          <header className="mobile-header" aria-label="Mobile navigation" style={{ position: 'relative', zIndex: 1000 }}>
            <img src="/assets/favicon.png" alt="Panda Token Logo" className="mobile-logo" />
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <img src="/assets/Vector.png" alt="Menu icon" className="mobile-menu" />
            </button>
            
            {isMobileMenuOpen && (
              <nav style={mobileDropdownStyle} aria-label="Mobile Navigation Menu">
                <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-about')}>About Us</button>
                <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-tokenomics')}>Tokenomics</button>
                <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-roadmap')}>Roadmap</button>
                <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-how')}>How To Buy</button>
                <button style={mobileDropdownButtonStyle} type="button" onClick={() => scrollToSection('mobile-community')}>Community</button>
              </nav>
            )}
          </header>

          {/* Mobile Hero Section */}
          <section className="mobile-hero" aria-label="Hero section">
            <img src="/assets/main -text.png" alt="Panda burst background" className="mobile-hero-burst" />
            <h1 className="title mobile-hero-title">PANDA</h1>
            <button type="button" className="mobile-buy-bubble" onClick={handleBuyNow} aria-label="Buy Now">
              <img src="/assets/Group 1261153031.png" alt="Buy Now Button" />
            </button>
          </section>

          {/* Mobile About Section */}
          <section id="mobile-about" className="mobile-about" aria-label="About us section">
            <div className="mobile-about-box">
              <img src="/assets/text box 1.png" alt="Text box background" className="mobile-about-bg" />
              <img src="/assets/panda-sitting.png" alt="Panda character sitting" className="mobile-about-panda" />
              <img src="/assets/pow.png" alt="Pow comic effect" className="mobile-pow" />
              
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

          <img src="/assets/panda-barrel.png" alt="Panda hiding in a barrel" className="mobile-feature-panda" />

          {/* Mobile Tokenomics Section */}
          <section id="mobile-tokenomics" className="mobile-tokenomics" aria-label="Tokenomics information">
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
              <img src="/assets/panda- leg.png" alt="Animated panda leg" className="mobile-tokenomics-leg" />
            </div>
          </section>

          {/* Mobile Roadmap Section */}
          <section id="mobile-roadmap" className="mobile-roadmap" aria-label="Project Roadmap">
            <h2 className="title mobile-section-title mobile-roadmap-title">Roadmap</h2>
            <div className="mobile-roadmap-box">
              <img src="/assets/text box-roadmap.png" alt="Roadmap panel background" className="mobile-roadmap-bg" />
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
            <img src="/assets/panda-lying.png" alt="Panda resting" className="mobile-roadmap-panda" />
          </section>

          {/* Mobile How to Buy Section */}
          <section id="mobile-how" className="mobile-how" aria-label="How to purchase instructions">
            <div className="mobile-how-box">
              <img src="/assets/text box 2.png" alt="Instructions background" className="mobile-how-bg" />
              <div className="mobile-how-content-wrapper">
                <h2 className="mobile-how-title ">How To<br />Buy</h2>
                <div className="mobile-how-panel">
                  <div className="mobile-step">
                    <h4>Set Up A Wallet</h4>
                    <p>Download A Wallet Like MetaMask Or Trust Wallet And Secure It With A Backup Phrase.</p>
                  </div>
                  <div className="mobile-arrow" aria-hidden="true">↓</div>
                  <div className="mobile-step">
                    <h4>Purchase ETH Or BNB</h4>
                    <p>Buy Ethereum (ETH) Or Binance Coin (BNB) From An Exchange Like Binance Or Coinbase.</p>
                  </div>
                  <div className="mobile-arrow" aria-hidden="true">↓</div>
                  <div className="mobile-step">
                    <h4>Swap For Panda Token</h4>
                    <p>Go To PancakeSwap Or Uniswap, Connect Your Wallet, And Swap.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Community / CTA Section */}
          <section id="mobile-community" className="mobile-community" aria-label="Join Community">
            <div className="mobile-hello-wrapper">
              <img src="/assets/panda-waving-2.png" alt="Panda waving hello" className="mobile-hello-panda" />
              <img src="/assets/hello.png" alt="Hello comic bubble" className="mobile-hello" />
            </div>
            
            <div className="mobile-community-box" style={{ position: 'relative', zIndex: 10 }}>
              <div className="mobile-community-wrapper">
                <div className="mobile-community-frame">
                  <div className="mobile-community-panel">
                    <p>Join The Panda Token Community Today And Be Part Of A Fun.</p>
                    <button type="button" className="mobile-join-button" onClick={handleJoinNow}>Join Now</button>
                    
                    <div className="mobile-social-row" style={{ position: 'relative', zIndex: 50 }}>
                      <button type="button" onClick={() => handleSocialClick('twitter')} aria-label="Visit Twitter">
                        <img src="/assets/Group 1171277302.png" alt="Twitter" />
                      </button>
                      <button type="button" onClick={() => handleSocialClick('telegram')} aria-label="Visit Telegram">
                        <img src="/assets/Frame 1261152963.png" alt="Telegram" />
                      </button>
                      <button type="button" onClick={() => handleSocialClick('discord')} aria-label="Visit Discord">
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
              style={{ pointerEvents: 'none' }} 
            />
          </section>

          <footer className="mobile-footer" style={{ position: 'relative', zIndex: 10 }}>
            <p>©2024 Panda All Right Reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
}