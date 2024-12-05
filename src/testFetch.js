import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const VANTAGE_API_URL = "https://www.alphavantage.co/query";
const VANTAGE_API_KEY = '2OUDTRWHX9A19QK1'


//fetching shipping details

export const fetchTopGainersLosers = async () => {
    try {
        const response = await axios.get(VANTAGE_API_URL, {
            params:{
                function: "TOP_GAINERS_LOSERS",
                apikey: VANTAGE_API_KEY
            }
        })

        //check for http errors

        if(response.status < 200 || response.status >= 300){
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
        }

        ///return the repsonse data 

        return response.data
    } catch (error) {
        if (error.response) {

            console.error(
                `API Error: ${error.response.status} - ${error.response.statusText}`
            );
            throw {
                status: error.response.status,
                message: error.response.data?.error || error.response.statusText,
            };
        } else if (error.request) {
            // network issue
            console.error("Network Error: No response received from the API.");
            throw {
                status: 0,
                message: "No response from the server. Please check your connection.",
            };
        } else {
            // Other unexpected errors
            console.error("Unexpected Error:", error.message);
            throw {
                status: -1,
                message: error.message,
            };
        }
    }
};


// Test the function
(async () => {
    try {
        const LosersAndGainers = await fetchTopGainersLosers();
        console.log("Trade Data:", LosersAndGainers);
    } catch (error) {
        console.error("Test Error:", error);
    }
})();
