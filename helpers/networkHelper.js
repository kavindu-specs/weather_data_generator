const axios = require("axios")

const storeData = async (cityCode,data) => {
    try {

      const headers={
        headers:{
            'Content-Type': 'application/json',
            'api-key':process.env.GENERATE_WEATHER_API_KEY,
            'client-id':process.env.CLIENTID
        }
      }  
      const response = await axios.put(`${process.env.WEATHER_API_BASE_URL}api/v1/weather/${cityCode}`,data,headers);
      console.log(response.data);
      
    } catch (error) {

      console.error(error);
    }
  };

  module.exports= {
    storeData
  }
  