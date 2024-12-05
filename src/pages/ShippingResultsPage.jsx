import React, { useEffect, useState } from "react";
import { fetchShipping } from "../services/Service";
import ShippingEmissionsChart from "../components/charts/ShippingChart";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Box, CircularProgress, Button } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import {
    ResultContainer,
    UserInputBox,
    LoadingBox,
    ResultBox,
    ErrorText,
    ChartSection,
    BackButtonStyles,
} from "../styles/ShippingResultStyles";

const ShippingResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { weightValue, distanceValue, transportMethod } = location.state || {};

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!weightValue || !distanceValue || !transportMethod) {
                alert("Please fill in all the required details");
                setLoading(false);
                return;
            }

            try {
                const response = await fetchShipping(weightValue, distanceValue, transportMethod);
                if (response && response.data && response.data.attributes) {
                    setResult(response.data);
                } else {
                    setError("Received unexpected data format!");
                }
            } catch (err) {
                setError(err.message || "An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [weightValue, distanceValue, transportMethod]);

    return (
        <Box sx={ResultContainer}>
            {/* Go Back Button */}
            <Button
                variant="outlined"
                startIcon={<BiArrowBack />}
                onClick={() => navigate(-1)}
                sx={BackButtonStyles}
            >
                Back to Input
            </Button>

            <Typography variant="h4" align="center" gutterBottom>
                Shipping Carbon Estimation
            </Typography>

            {/* Display User Inputs */}
            <Box sx={UserInputBox}>
                <Typography variant="body1">
                    <strong>Weight Value:</strong> {weightValue} (Mt)
                </Typography>
                <Typography variant="body1">
                    <strong>Distance Value:</strong> {distanceValue} (Km)
                </Typography>
                <Typography variant="body1">
                    <strong>Transport Method:</strong> {transportMethod}
                </Typography>
            </Box>

            {/* Loading State */}
            {loading && (
                <Box sx={LoadingBox}>
                    <CircularProgress />
                    <Typography variant="body1">Fetching data...</Typography>
                </Box>
            )}

            {/* Display Results */}
            {result && result.attributes ? (
                <>
                    <Box sx={ResultBox}>
                        <Typography variant="h6">Carbon Emissions Data:</Typography>
                        <Typography>CO₂ (kg): {result.attributes.carbon_kg || "N/A"}</Typography>
                        <Typography>CO₂ (g): {result.attributes.carbon_g || "N/A"}</Typography>
                        <Typography>CO₂ (lb): {result.attributes.carbon_lb || "N/A"}</Typography>
                        <Typography>CO₂ (mt): {result.attributes.carbon_mt || "N/A"}</Typography>
                        <Typography>
                            Estimated at:{" "}
                            {result.attributes.estimated_at
                                ? new Date(result.attributes.estimated_at).toLocaleString()
                                : "N/A"}
                        </Typography>
                    </Box>

                    <Box sx={ChartSection}>
                        <Typography variant="h6" align="center" gutterBottom>
                            CO₂ Emissions Visualization
                        </Typography>
                        <ShippingEmissionsChart data={result} />
                    </Box>

                </>
            ) : null}

            {/* Fallback for No Results */}
            {!loading && !error && !result && (
                <Typography mt={3} color="text.secondary" align="center">
                    No results available. Please submit valid input to fetch data.
                </Typography>
            )}

            {/* Display Errors */}
            {error && <Typography sx={ErrorText}>{error}</Typography>}
        </Box>
    );
};

export default ShippingResultsPage;
