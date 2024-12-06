import axios from "axios"

const API_URL = import.meta.env.VITE_BASE_URL;
const API_URL_KEY = import.meta.env.VITE_API_KEY;
const VANTAGE_API_URL = import.meta.VITE_ALPHA_VANTAGE_URL;
const VANTAGE_API_KEY = import.meta.VITE_ALPHA_VANTAGE_KEY

//fetching electricity consunption

export const fetchElectricity = async (electricityValue, country) => {
    try {
        const response = await axios.post(`${API_URL}/estimates`, {
            type: "electricity",
            electricity_unit: "mwh",
            electricity_value: electricityValue,
            country: country
        }, {
            headers: {
                Authorization: `Bearer ${API_URL_KEY}`,
                "Content-Type": "application/json"
            }
        })

        if (response.status < 200 || response.status >= 300) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }


        return response.data;
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
            // No response received 
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


//fetching shipping details

export const fetchShipping = async (weightValue, distanceValue, transportMethod) => {
    try {
        const response = await axios.post(`${API_URL}/estimates`, {
            type: "shipping",
            weight_unit: "mt",
            distance_unit: "km",
            weight_value: weightValue,
            distance_value: distanceValue,
            transport_method: transportMethod
        }, {
            headers: {
                Authorization: `Bearer ${API_URL_KEY}`,
                "Content-Type": "application/json"
            }
        })
        
        if (response.status < 200 || response.status >= 300) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        return response.data;
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

//vehicle request estimates

export const fetchVehicleEstimates = async (distanceValue, vehicleModelId) => {
    try {
        const response = await axios.post(`${API_URL}/estimates`, {
            type: "vehicle",
            distance_unit: "km",
            distance_value: distanceValue,
            vehicle_model_id: vehicleModelId
        }, {
            headers: {
                Authorization: `Bearer ${API_URL_KEY}`,
                "Content-Type": "application/json"
            }
        })
        if (response.status < 200 || response.status >= 300) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        return response.data;
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


//fetching top gainers and losers info

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

