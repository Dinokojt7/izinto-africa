import React, { useState } from 'react';
import Consumer from './Consumer';
import Locations from './Locations';
import Merchant from './Merchant';
import Shopper from './Shopper';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className=" col-span-3 justify-center mx-auto pl-32 pr-32 font-bold text-gray-500">
      {/* Tab Bar */}
      <div className="flex pb-16 border-b-2 border-gray-200">
        <button
          className={`px-7 py-3 focus:outline-none ${
            activeTab === 1 ? 'bg-[#121212] text-white rounded-full' : ''
          }`}
          onClick={() => handleTabClick(1)}
        >
          Consumer
        </button>
        <button
          className={`px-7 py-3  focus:outline-none ${
            activeTab === 2 ? 'bg-[#121212] text-white rounded-full' : ''
          }`}
          onClick={() => handleTabClick(2)}
        >
          Shopper
        </button>
        <button
          className={`px-7 py-3  focus:outline-none ${
            activeTab === 3 ?'bg-[#121212] text-white rounded-full' : ''
          }`}
          onClick={() => handleTabClick(3)}
        >
          Merchant
        </button>
        <button
          className={`px-7 py-3  focus:outline-none ${
            activeTab === 4 ?'bg-[#121212] text-white rounded-full' : ''
          }`}
          onClick={() => handleTabClick(4)}
        >
          Locations
        </button>
      </div>
      {/* Tab Content */}
      <div className="mt-8 pb-10">
        {activeTab === 1 && (
          <Consumer />
        )}
        {activeTab === 2 && (
          <Shopper />
        )}
        {activeTab === 3 && (
           <Merchant />
        )}
        {activeTab === 4 && (
          <Locations />
        )}
        {/* EFAC6E F80E0E FF724A E94111*/}
      </div>
    </div>
  );
};

export default Tabs;
