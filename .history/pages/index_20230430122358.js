import React, { useContext } from "react";
import {TrackingContext} from '../Conetxt/TrackingContext'


const index = () => {
  const {connectWallet} = useContext(TrackingContext)
  return <div>
    <button onClick={()=>connectWallet()}
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex"> Connect Wallet
              </button>
    </div>;
};

export default index;
