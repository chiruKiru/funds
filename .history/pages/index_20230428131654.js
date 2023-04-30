import React from "react";
import {connectWallet} from '../Conetxt/TrackingContext'

const index = () => {
  return <div>
    <button
    onClick={()=> connectWallet()}>
    index
    </button>
    </div>;
};

export default index;
