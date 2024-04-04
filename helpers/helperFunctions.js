const axios = require("axios")
const {storeData} = require("./networkHelper")
const {dataRanges,districtCodes} = require("../config/data")

const generateRandaomData = (min,max)=>{
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(2));

  }

 const sendData = () =>{
     districtCodes.forEach(district=>{
           const data ={
            "temperature":generateRandaomData(dataRanges.temperatureRange.min,dataRanges.temperatureRange.max),
            "airPressure":generateRandaomData(dataRanges.airPressureRange.min,dataRanges.airPressureRange.max),
            "humidity": generateRandaomData(dataRanges.humidityRange.min,dataRanges.humidityRange.max),
            "timeStamp":new Date().toLocaleString('en-US',
                        { timeZone: 'Asia/Colombo' })
           }

           storeData(district,data)
     })
 }

  module.exports= {
    sendData
  }