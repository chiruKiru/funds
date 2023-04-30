import React,{useState, useEffect,useContext} from "react";

import {
  Table,
  Form,
  Services,
  Profile,
  GetShipment,
  CompleteShipment,
  StartShipment,
} from '../Components/index.js';

import { TrackingContext } from "../Conetxt/TrackingContext.js";

const index = () => {
  const {
        currentUser,
        createShipment,
        completeShipment,
        getShipment,
        startShipment,
        getShipmentsCount
  } = useContext(TrackingContext);

  const getAllShipment = async () => {
    try {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const shipments = await contract.getAllTransactions();
        const allShipments = shipments.map((shipment) => ({
            sender: shipment.sender,
            receiver: shipment.receiver,
            price: ethers.utils.formatEther(shipment.price.toString()),
            pickupTime: shipment.pickupTime.toNumber(),
            deliveryTime: shipment.deliveryTime.toNumber(),
            isPaid: shipment.isPaid,
            status: shipment.status,
        }));
        return allShipments;
    } catch (error) {
        console.log("Error",error);
        
    }
};

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModel,setStartModel] = useState(false);
  const [completeModel,setCompleteModel] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaingsData = getAllShipment;
      return async () => {
        const allData = await getCampaingsData;
        setallShipmentsdata(allData);
      }
  },[]);

  
  return (
    <>
      <Services
      setOpenProfile = {setOpenProfile}
      setCompleteModel = {setCompleteModel}
      setGetModel = {setGetModel}
      setStartModel = {setStartModel}
      
      />
      <Table
      setcreateShipmentModel = {setcreateShipmentModel}
      allShipmentsdata = {allShipmentsdata}
      />

      <Form
      createShipmentModel = {createShipmentModel}
      setcreateShipmentModel ={setcreateShipmentModel}

      />
      <Profile
        openProfile={openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
        />

        <CompleteShipment
        completeModel={completeModel}
        setCompleteModel = {setCompleteModel}
        completeShipment = {completeShipment}
        />

        <GetShipment
          getModel={getModel}
          setGetModel = {setGetModel}
          getShipment = {getShipment}
          />

        <StartShipment
          startModel = {startModel}
          setStartModel = {setGetModel}
          startShipment = {startShipment}
          />
    </>
  )

};
export default index;