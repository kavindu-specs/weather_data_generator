const dataRanges={ 
    temperatureRange :{
        min:15.00,
        max:35.00
    },
    airPressureRange :{
        min:15.00,
        max:35.00
    },
    humidityRange :{
        min:15.00,
        max:35.00
    }

  }

  const districtCodes = [
    "GM-LK"
  ]

  const generateRandaomData = (min,max)=>{
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(2));

  }


module.exports = {
    dataRanges,
    generateRandaomData
}