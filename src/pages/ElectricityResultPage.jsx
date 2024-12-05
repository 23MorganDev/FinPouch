import React, { useEffect, useState } from "react";
import { fetchElectricity } from "../services/Service.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import ElectricityEmissionsChart from "../components/charts/ElectricityChart.jsx";
import { Typography, Box, CircularProgress, Button } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import {
    ResultContainer,
    UserInputBox,
    LoadingBox,
    ResultBox,
    ErrorText,
    ChartSection,
} from "../styles/ElectricityResultStyles.js";

const ElectricityResultPage = () => {
    const location = useLocation();
    const { electricityValue, selectCountry } = location.state || {};

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!electricityValue || !selectCountry) {
                setError("Missing input data. Please submit valid input.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetchElectricity(electricityValue, selectCountry);
                if (response && response.data && response.data.attributes) {
                    setResult(response.data);
                } else {
                    setError("Found unexpected data format!");
                }
            } catch (err) {
                setError(err.message || "An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [electricityValue, selectCountry]);

    return (
        <Box sx={ResultContainer}>
            <Button
                variant="outlined"
                startIcon={<BiArrowBack />}
                onClick={() => navigate(-1)}
                sx={{
                    mb: 2,
                    color: "#1a90ff",
                    borderColor: "#1a90ff",
                    ":hover": { backgroundColor: "#1a90ff", color: "#fff" },
                }}
            >
                Back to Input
            </Button>

            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontSize: "24px",
                    [`@media (max-width: 768px)`]: { fontSize: "20px" }, // Smaller heading for mobile
                }}
            >
                Electricity-Consumption Carbon Estimation
            </Typography>

            <Box sx={UserInputBox}>
                <Typography variant="body1">
                    <strong>Electricity Value:</strong> {electricityValue} MWh
                </Typography>
                <Typography variant="body1">
                    <strong>Selected Country:</strong> {selectCountry}
                </Typography>
            </Box>

            {loading && (
                <Box sx={LoadingBox}>
                    <CircularProgress />
                    <Typography variant="body1">Fetching data...</Typography>
                </Box>
            )}

            {result && result.attributes && (
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
                        <ElectricityEmissionsChart data={result} />
                    </Box>
                </>
            )}

            {!loading && !error && !result && (
                <Typography mt={3} color="text.secondary" align="center">
                    No results available. Please submit valid input to fetch data.
                </Typography>
            )}

            {error && <Typography sx={ErrorText}>{error}</Typography>}
        </Box>
    );
};

export default ElectricityResultPage;
