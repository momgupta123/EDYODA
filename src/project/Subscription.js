import React, { useState } from 'react';
import './Subscription.css';
const Subscription = () => {
    const totalSubscriptionPrice = 18500;
    const lessPrice = 179;

    const [selected, setSelected] = useState(false);

    const handleRadioChange = (event) => {
        setSelected(event.target.checked);
    };
    return (
        <div className="subscription-container">
            <div className="subscription-plan">
                {/* <h3>12 Months Subscription</h3>
                <p>Total ₹179</p>
                <p>₹15/mon</p> */}
                <input
                    type="radio"
                    name="subscription"
                    id="subscription-radio"
                    checked={selected}
                    onChange={handleRadioChange}
                    className={`check ${selected ? 'selected' : ''}`}
                />
                <h4 className='Months'>12 Months Subscription</h4><p className='parag'>Total ₹179</p><p className='parag1'>₹15/mon</p>
                {/* <label htmlFor="subscription-radio">Select</label> */}
            </div>
            
            <div className={`total-price ${selected ? 'selected' : ''}`}>
                <h3>Total Subscription Price</h3>
                <p>₹{selected ? totalSubscriptionPrice - lessPrice : totalSubscriptionPrice}</p>
            </div>
        </div>
    );
};

export default Subscription;




