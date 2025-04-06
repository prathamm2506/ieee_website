import React, { useState } from 'react';
import './MyLoftGuide.css';
// Import your screenshot images
import selectInstituteImg from '../../assets/instituteList.png';
import signUpPromptImg from '../../assets/signupLink.png';
import signUpFormImg from '../../assets/signupDetails.png';
import emailVerifyImg from '../../assets/verifyEmail.png';
import signInFormImg from '../../assets/signin.png';
import vpnConfigImg from '../../assets/qr.png';
import selectInstituteImg2 from '../../assets/instituteList2.png';
import signUpPromptImg2 from '../../assets/signupLink2.png';
import signUpFormImg2 from '../../assets/signupDetails2.png';
import emailVerifyImg2 from '../../assets/verifyEmail2.png';
import signInFormImg2 from '../../assets/signin2.png';
import appEResourcesImg from '../../assets/myloftapp3.png';
import appSearchImg from '../../assets/myloftapp2.png';
import appIEEEXploreImg from '../../assets/myloftapp4.png';
import webDiscoverImg from '../../assets/myloftweb1.png';
import webSearchImg from '../../assets/myloftweb3.png';
import webIEEEXploreImg from '../../assets/myloftweb4.png';

const MyLoftGuide = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [showSignUpSteps, setShowSignUpSteps] = useState(true);
  const [showAccessSteps, setShowAccessSteps] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-loft-guide">
      <header className="guide-header">
        <h1>Accessing IEEE Resources via MyLOFT</h1>
        <p className="subtitle">
          VESIT Library provides access to IEEE, Springer, and ScienceDirect resources through MyLOFT
        </p>
      </header>

      <section className="access-section">
        <h2>How to Access MyLOFT</h2>
        
        <div className="platform-tabs">
          <button 
            className={`tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => handleTabChange('mobile')}
          >
            Mobile Access
          </button>
          <button 
            className={`tab ${activeTab === 'desktop' ? 'active' : ''}`}
            onClick={() => handleTabChange('desktop')}
          >
            Desktop Access
          </button>
        </div>

        <div className="process-tabs">
          <button 
            className={`process-tab ${showSignUpSteps ? 'active' : ''}`}
            onClick={() => setShowSignUpSteps(true)}
          >
            Sign Up Process
          </button>
          <button 
            className={`process-tab ${!showSignUpSteps ? 'active' : ''}`}
            onClick={() => setShowSignUpSteps(false)}
          >
            Sign In Process
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'mobile' ? (
            <div className="mobile-access">
              {showSignUpSteps ? (
                <>
                  <h3>Mobile Sign Up Guide</h3>
                  
                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 1: Select Your Institute</h4>
                      <p>Open the MyLOFT app and select:</p>
                      <p><strong>Vivekanand Education Society (VES), Mumbai</strong></p>
                      <div className="screenshot">
                        <img src={selectInstituteImg} alt="Select institute screen" />
                        <p className="image-caption">Select your institute from the list</p>
                      </div>
                    </div>
                  </div>

                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 2: Initiate Sign Up</h4>
                      <p>Tap on "Don't have an account? Sign Up"</p>
                      <div className="screenshot">
                        <img src={signUpPromptImg} alt="Sign up prompt screen" />
                        <p className="image-caption">Tap the Sign Up link</p>
                      </div>
                    </div>
                  </div>

                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 3: Complete Sign Up Form</h4>
                      <p>Fill in the required information using your institutional email:</p>
                      <ul>
                        <li>ID number</li>
                        <li>Full Name</li>
                        <li>Institutional Email</li>
                        <li>Password</li>
                      </ul>
                      <div className="screenshot">
                        <img src={signUpFormImg} alt="Sign up form screen" />
                        <p className="image-caption">Complete the sign up form</p>
                      </div>
                    </div>
                  </div>

                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 4: Verify Your Email</h4>
                      <p>Check your email for a verification message from MyLOFT</p>
                      <p>Click the "VERIFY YOUR EMAIL" button in the email</p>
                      <div className="screenshot">
                        <img src={emailVerifyImg} alt="Email verification screen" />
                        <p className="image-caption">Verify your email address</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3>Mobile Sign In Guide</h3>
                  
                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 1: Select Your Institute</h4>
                      <p>Open the MyLOFT app and select:</p>
                      <p><strong>Vivekanand Education Society (VES), Mumbai</strong></p>
                      <div className="screenshot">
                        <img src={selectInstituteImg} alt="Select institute screen" />
                        <p className="image-caption">Select your institute from the list</p>
                      </div>
                    </div>
                  </div>

                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 2: Enter Your Credentials</h4>
                      <p>Fill in your registered email and password</p>
                      <div className="screenshot">
                        <img src={signInFormImg} alt="Sign in form screen" />
                        <p className="image-caption">Enter your login details</p>
                      </div>
                    </div>
                  </div>

                  <div className="step-with-image">
                    <div className="step">
                      <h4>Step 3: Accept VPN Configuration</h4>
                      <p>After successful login, you'll be prompted to add VPN configuration:</p>
                      <ol>
                        <li>Tap "Accept" when the VPN configuration request appears</li>
                        <li>Your device may ask for permission to add a VPN profile</li>
                        <li>Confirm the installation</li>
                      </ol>
                      <div className="screenshot">
                        <img src={vpnConfigImg} alt="VPN configuration screen" />
                        <p className="image-caption">Accept VPN configuration request</p>
                      </div>
                    </div>
                  </div>

                  <div className="step">
                    <h4>Why VPN?</h4>
                    <p>The VPN configuration is required to:</p>
                    <ul>
                      <li>Securely connect to your institution's resources</li>
                      <li>Access restricted content from off-campus</li>
                      <li>Protect your research data</li>
                      <li>Maintain a stable connection to library resources</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="desktop-access">
              {showSignUpSteps ? (
                <>
                  <h3>Desktop Sign Up Guide</h3>
                  
                  <div className="steps-container">
                    <div className="step">
                      <h4>Step 1: Access WebApp</h4>
                      <p>Open MyLOFT WebApp in Chrome/Edge: <a href="https://app.myloft.xyz" target="_blank" rel="noopener noreferrer">https://app.myloft.xyz</a></p>
                    </div>
                    <div className="step">
                      <h4>Step 2: Select Your Institute</h4>
                      <p>Choose: <strong>Vivekanand Education Society (VES), Mumbai</strong></p>
                      <div className="screenshot">
                        <img src={selectInstituteImg2} alt="Select institute screen" />
                        <p className="image-caption">Select your institute from the list</p>
                      </div>
                    </div>
                    <div className="step">
                      <h4>Step 3: Initiate Sign Up</h4>
                      <p>Click on the "Sign Up" link</p>
                    </div>
                    <div className="step">
                      <h4>Step 4: Complete Sign Up Form</h4>
                      <p>Enter the requested information (use your institutional email address)</p>
                      <div className="screenshot">
                        <img src={signUpFormImg2} alt="Sign up form screen" />
                        <p className="image-caption">Complete the sign up form</p>
                      </div>
                    </div>
                    <div className="step">
                      <h4>Step 5: Verify Your Email</h4>
                      <p>Check your email and click the verification link</p>
                      <div className="screenshot">
                        <img src={emailVerifyImg2} alt="Email verification screen" />
                        <p className="image-caption">Verify your email address</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3>Desktop Sign In Guide</h3>
                  
                  <div className="steps-container">
                    <div className="step">
                      <h4>Step 1: Access WebApp</h4>
                      <p>Open MyLOFT WebApp: <a href="https://app.myloft.xyz" target="_blank" rel="noopener noreferrer">https://app.myloft.xyz</a></p>
                    </div>
                    <div className="step">
                      <h4>Step 2: Select Your Institute</h4>
                      <p>Choose: <strong>Vivekanand Education Society (VES), Mumbai</strong></p>
                      <div className="screenshot">
                        <img src={selectInstituteImg2} alt="Select institute screen" />
                        <p className="image-caption">Select your institute from the list</p>
                      </div>
                    </div>
                    <div className="step">
                      <h4>Step 3: Enter Credentials</h4>
                      <p>Fill in your registered email and password</p>
                      <div className="screenshot">
                        <img src={signInFormImg2} alt="Sign in form screen" />
                        <p className="image-caption">Enter your login details</p>
                      </div>
                    </div>
                    <div className="step">
                      <h4>Step 4: Install Extension</h4>
                      <p>Click on "Add Extension" and proceed to install in your browser</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* IEEE Xplore Access Section */}
        <div className="access-ieee-toggle">
          <button 
            className={`btn ${showAccessSteps ? 'active' : ''}`}
            onClick={() => setShowAccessSteps(!showAccessSteps)}
          >
            {showAccessSteps ? 'Hide IEEE Access Guide' : 'Show How to Access IEEE Xplore'}
          </button>
        </div>

        {showAccessSteps && (
          <div className="ieee-access-section">
            <h2>Accessing IEEE Xplore Digital Library</h2>
            <p className="section-intro">
              After signing in to MyLOFT, follow these steps to access IEEE Xplore resources:
            </p>

            {activeTab === 'mobile' ? (
              <div className="mobile-ieee-access">
                <div className="step-with-image">
                  <div className="step">
                    <h4>Step 1: Navigate to eResources</h4>
                    <p>From the MyLOFT mobile app home screen:</p>
                    <ol>
                      <li>Tap on the "eResources" tab</li>
                      <li>Browse through the available resources</li>
                    </ol>
                    <div className="screenshot">
                      <img src={appEResourcesImg} alt="eResources screen" />
                      <p className="image-caption">eResources section in MyLOFT app</p>
                    </div>
                  </div>
                </div>

                <div className="step-with-image">
                  <div className="step">
                    <h4>Step 2: Search for IEEE Xplore</h4>
                    <p>Use the search function to find IEEE Xplore:</p>
                    <ol>
                      <li>Tap on the search bar</li>
                      <li>Type "IEEE Xplore Digital Library"</li>
                      <li>Select it from the suggestions</li>
                    </ol>
                    <div className="screenshot">
                      <img src={appSearchImg} alt="Search screen" />
                      <p className="image-caption">Searching for IEEE Xplore</p>
                    </div>
                  </div>
                </div>

                <div className="step-with-image">
                  <div className="step">
                    <h4>Step 3: Access IEEE Xplore</h4>
                    <p>Once you've found IEEE Xplore:</p>
                    <ol>
                      <li>Tap on the IEEE Xplore Digital Library entry</li>
                      <li>You may see an information warning - tap "I Know"</li>
                      <li>You'll be redirected to IEEE Xplore with institutional access</li>
                    </ol>
                    <div className="screenshot">
                      <img src={appIEEEXploreImg} alt="IEEE Xplore screen" />
                      <p className="image-caption">IEEE Xplore access through MyLOFT</p>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <h4>Step 4: Using IEEE Xplore</h4>
                  <p>You now have full access to:</p>
                  <ul>
                    <li>Search through 6.7+ million IEEE items</li>
                    <li>Access full-text research papers</li>
                    <li>Save articles to your account</li>
                    <li>Use advanced search features</li>
                  </ul>
                  <p className="note">Note: The interface may look different from the MyLOFT app as you're now in IEEE's platform</p>
                </div>
              </div>
            ) : (
              <div className="desktop-ieee-access">
                <div className="step-with-image">
                  <div className="step">
                    <h4>Step 1: Navigate to Discover</h4>
                    <p>From the MyLOFT web interface:</p>
                    <ol>
                      <li>Click on the "Discover" tab</li>
                      <li>Browse through available databases</li>
                    </ol>
                    <div className="screenshot">
                      <img src={webDiscoverImg} alt="Discover screen" />
                      <p className="image-caption">Discover section in MyLOFT web</p>
                    </div>
                  </div>
                </div>

                <div className="step-with-image">
                  <div className="step">
                    <h4>Step 2: Search for IEEE Xplore</h4>
                    <p>Use the search function to find IEEE Xplore:</p>
                    <ol>
                      <li>Type "IEEE Xplore Digital Library" in the search bar</li>
                      <li>Select it from the search results</li>
                    </ol>
                    <div className="screenshot">
                      <img src={webSearchImg} alt="Search screen" />
                      <p className="image-caption">Searching for IEEE Xplore</p>
                    </div>
                  </div>
                </div>

                <div className="step-with-image">
                  <div className="step">
                    <h4>Step 3: Access IEEE Xplore</h4>
                    <p>Once you've found IEEE Xplore:</p>
                    <ol>
                      <li>Click on the IEEE Xplore Digital Library entry</li>
                      <li>You may see an information warning - click "I Know"</li>
                      <li>You'll be redirected to IEEE Xplore with institutional access</li>
                    </ol>
                    <div className="screenshot">
                      <img src={webIEEEXploreImg} alt="IEEE Xplore screen" />
                      <p className="image-caption">IEEE Xplore access through MyLOFT</p>
                    </div>
                  </div>
                </div>

                <div className="step">
                  <h4>Step 4: Using IEEE Xplore</h4>
                  <p>You now have full access to:</p>
                  <ul>
                    <li>Advanced search capabilities</li>
                    <li>6.7+ million IEEE technical documents</li>
                    <li>Downloadable PDFs of research papers</li>
                    <li>Citation tools and references</li>
                  </ul>
                  <p className="note">Note: The interface will change as you're now on IEEE's platform</p>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      <section className="resources-section">
        <h2>Available Resources</h2>
        <p>Through MyLOFT, you can access resources from:</p>
        <ul className="institute-list">
          <li>VES Institute of Technology (IEEE, Springer, and ScienceDirect)</li>
          <li>VES College of Arts, Science, and Commerce</li>
          <li>VES College of Pharmacy</li>
          <li>VES Institute of Management Studies</li>
          <li>VES College of Architecture</li>
        </ul>
      </section>

      <footer className="guide-footer">
        <a href="https://app.myloft.xyz/user" className="btn" target="_blank" rel="noopener noreferrer">
          Access MyLOFT Now
        </a>
      </footer>
    </div>
  );
};

export default MyLoftGuide;