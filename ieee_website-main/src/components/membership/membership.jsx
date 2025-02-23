import React from 'react';
import "./membership.css";

const Membership = () => {
  return (
    <div className="Comp">
    {/* <div className="header">
        <h1 className="Membership">Membership Tiers</h1>
    </div> */}

    <div className="card-container">

        <div className="tier-card card1">
            <div className="card-content">
                <h3 className="title">Starter</h3>
                <p className="description">This tier offers basic perks of being an IEEE member.</p>
                <p className="fees">Second Year(SE): ₹ 650<br/>Third Year(TE): ₹ 450<br/>Fourth Year(BE): ₹ 300</p>
                

                <hr className="divider"/>

                <ul className="features">
                    <li>Free access to events and workshops</li>
                    <li>Publishing discounts</li>
                    <li>Certifications</li>
                    <li>Networking opportunities</li>
                </ul>
            </div>
        </div>

        <div className="tier-card card2">
            <div className="card-content">
                <h3 className="title">International</h3>
                <p className="description">This is a upgraded version of the IEEE membership with additional features.</p>
                <p className="fees feesInt">International membership: $14 + taxes</p>

                <hr className="divider"/>

                <ul className="features">
                    <li>Perks offered by starter membership</li>
                    <li>Access to Premium IEEE Resources & Publications</li>
                    <li>International Conferences & Competitions</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Membership;
