const dataRanges={ 
    temperatureRange :{
        min:15.00,
        max:40.00
    },
    airPressureRange :{
        min:12.00,
        max:24.00
    },
    humidityRange :{
        min:1000.00,
        max:1020.00
    }

  }

  const districtCodes = [
    "GM-LK","CO-LK","KAN-LK","KAL-LK","GA-LK",
    "BAT-LK","BAD-LK","AM-LK","ANU-LK","KEG-LK",
    "KIL-LK","KU-LK","MAN-LK","MAT-LK","MON-LK",
    "MUL-LK","NU-LK","POL-LK","PUT-LK","RAT-LK",
    "TNC-LK","VAV-LK","JAF-LK","HAM-LK","MTE-LK"
  ]

  const generateRandaomData = (min,max)=>{
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(2));

  }


module.exports = {
    dataRanges,
    districtCodes,
    generateRandaomData
}