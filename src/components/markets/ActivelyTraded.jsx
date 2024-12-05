import React, { useEffect, useState } from "react";
import { fetchTopGainersLosers } from '../../services/Service'
import {
    CircularProgress,
    Alert,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Box,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ActivelyTraded = () => {
    const [activeTrades, setActiveTrades] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace with your actual API/service call
                const data = await fetchTopGainersLosers();
                setActiveTrades(data.most_actively_traded || []);
            } catch (err) {
                setError(err.message || "An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                }}
            >
                <CircularProgress style={{ color: "crimson" }} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    padding: "20px",
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                    minHeight: "100vh",
                }}
            >
                <Alert severity="error" style={{ backgroundColor: "#333", color: "#FFCE56" }}>
                    {error}
                </Alert>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                padding: "20px",
                backgroundColor: "black",
                color: "crimson",
                minHeight: "100vh",
            }}
        >
            {/* Back Button */}
            <Button
                variant="contained"
                startIcon={<BiArrowBack />}
                onClick={() => navigate(-1)}
                sx={{
                    backgroundColor: "black",
                    color: "crimson",
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                Back
            </Button>


            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: "center",
                    color: "crimson",
                    fontWeight: "bold",
                }}
            >
                Today's Gainers
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: "#2c2c2c",
                    color: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    borderRadius: "8px",
                    maxHeight: "70vh",
                }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#333" }}>
                            <TableCell align="center" sx={{ color: "crimson", fontWeight: "bold" }}>
                                Ticker
                            </TableCell>
                            <TableCell align="center" sx={{ color: "crimson", fontWeight: "bold" }}>
                                Price
                            </TableCell>
                            <TableCell align="center" sx={{ color: "crimson", fontWeight: "bold" }}>
                                Change
                            </TableCell>
                            <TableCell align="center" sx={{ color: "crimson", fontWeight: "bold" }}>
                                % Change
                            </TableCell>
                            <TableCell align="center" sx={{ color: "crimson", fontWeight: "bold" }}>
                                Volume
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activeTrades.map((activeTrade, index) => (
                            <TableRow
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? "#1c1c1c" : "#333",
                                    color: "#fff",
                                }}
                            >
                                <TableCell align="center" style={{ color: "#FFCE56", fontSize: "0.9rem" }}>
                                    {activeTrade.ticker}
                                </TableCell>
                                <TableCell align="center" style={{ color: "#fff", fontSize: "0.9rem" }}>
                                    {activeTrade.price}
                                </TableCell>
                                <TableCell align="center" style={{ color: "#fff", fontSize: "0.9rem" }}>
                                    {activeTrade.change_amount}
                                </TableCell>
                                <TableCell align="center" style={{ color: "#fff", fontSize: "0.9rem" }}>
                                    {activeTrade.change_percentage}
                                </TableCell>
                                <TableCell align="center" style={{ color: "#fff", fontSize: "0.9rem" }}>
                                    {activeTrade.volume}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ActivelyTraded;
