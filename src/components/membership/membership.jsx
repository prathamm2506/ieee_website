    import React, { useState } from 'react';
    import "./membership.css";

    const Membership = () => {
    const [selectedYear, setSelectedYear] = useState('SE');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const yearOptions = [
        { value: 'SE', label: 'Second Year (SE)', price: '₹ 650' },
        { value: 'TE', label: 'Third Year (TE)', price: '₹ 450' },
        { value: 'BE', label: 'Fourth Year (BE)', price: '₹ 300' }
    ];

    const selectedOption = yearOptions.find(option => option.value === selectedYear);

    return (
        <div className="Comp mt-5 pt-5">
        <div className="card-container flex items-stretch gap-6"> {/* Added gap-6 for consistent spacing */}
            {/* Starter Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 border-t-4 border-black flex flex-col h-full membership-card"> {/* Added h-full */}
            {/* Header */}
            <div className="flex flex-col"> {/* Wrapped header content */}
                <h2 className="text-xl font-bold text-center">
                IEEE VESIT 
                </h2>
                <p className="text-center text-lg font-bold">
                    Student Section Membership
                </p>
                <p className="text-gray-600 text-center text-sm mt-1">
                Unlock exclusive benefits as an IEEE member. Be a part of IEEE-VESIT
                </p>
            </div>

            {/* Pricing Details Dropdown */}
            <div className="mt-4 relative">
                <button 
                className="w-full flex justify-between items-center p-3 rounded-lg"
                style={{backgroundColor: "var(--color2)"}}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                <span className="font-semibold">{selectedOption.label}</span>
                <span className="font-bold">{selectedOption.price}</span>
                <svg 
                    className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>
                
                {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                    {yearOptions.map((option) => (
                    <div 
                        key={option.value}
                        className={`p-3 hover:cursor-pointer ${selectedYear === option.value ? '' : ''}`}
                        onClick={() => {
                        setSelectedYear(option.value);
                        setIsDropdownOpen(false);
                        }}
                    >
                        <div className="flex justify-between">
                        <span className="font-semibold">{option.label}</span>
                        <span className="font-bold">{option.price}</span>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>

            {/* Divider */}
            <hr className="my-4 border-black" />

            {/* Perks Section */}
            <div className="flex flex-col flex-grow"> {/* Wrapped perks section */}
                <h3 className="text-lg font-bold text-center">
                Perks of Membership
                </h3>
                <ul className="mt-2 space-y-2">
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> Free access to events & workshops
                </li>
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> Certifications & Courses
                </li>
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> Exclusive networking opportunities
                </li>
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> Skill Development
                </li>
                </ul>
            </div>
            </div>

            {/* International Membership Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 border-t-4 border-black flex flex-col h-full membership-card"> {/* Added h-full */}
            {/* Header */}
            <div className="flex flex-col"> {/* Wrapped header content */}
                <h2 className="text-xl font-bold text-center">
                IEEE 
                </h2>
                <p className="text-center text-lg font-bold">
                    International Membership
                </p>
                <p className="text-gray-600 text-center text-sm mt-1">
                This is upgraded version of IEEE membership with additional features 
                </p>
            </div>

            {/* Pricing Details */}
            <div className="mt-4 space-y-2">
                <div className="flex justify-between p-3 rounded-lg" style={{backgroundColor: "var(--color2"}}>
                <span className="font-semibold">International Membership</span>
                <span className="font-bold">$7 + Taxes</span>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-4 border-black" />

            {/* Perks Section */}
            <div className="flex flex-col flex-grow"> {/* Wrapped perks section */}
                <h3 className="text-lg font-bold text-center">
                Perks of Membership
                </h3>
                <ul className="mt-2 space-y-2">
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> Publishing discounts
                </li>
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> Access to Premium IEEE Resources and Publications
                </li> 
                <li className="flex items-center p-2 rounded-lg" style={{backgroundColor: "var(--color1)"}}>
                    <span className="text-green-600 text-xl mr-2">✅</span> International Conferences and Competitions
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Membership;