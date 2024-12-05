import React, { useEffect, useState } from "react";
import { fetchTopGainersLosers } from "../../services/Service";
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
    Box,
    Button,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LosersMarketTrend = ({ navigateToDashboard }) => {
    const [losers, setLosers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTopGainersLosers();
                setLosers(data.top_losers || []);
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
                <Alert severity="error" sx={{ margin: "20px" }}>
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
                color:  "crimson",
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

            {/* Header */}
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: "center",
                    color: "crimson",
                    fontWeight: "bold",
                }}
            >
                Today's Losers 
            </Typography>

            {/* Table */}
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
                        <TableRow sx={{ backgroundColor: "#424242" }}>
                            <TableCell align="center" sx={{ color: "crimson", fontWeight: "bold" }}>
                                Ticker
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#FF5C5C", fontWeight: "bold" }}>
                                Price
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#FF5C5C", fontWeight: "bold" }}>
                                Change Amount
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#FF5C5C", fontWeight: "bold" }}>
                                Change Percentage
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#FF5C5C", fontWeight: "bold" }}>
                                Volume
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {losers.map((loser, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:nth-of-type(odd)": { backgroundColor: "#333333" },
                                    "&:nth-of-type(even)": { backgroundColor: "#292929" },
                                }}
                            >
                                <TableCell align="center" sx={{ color: "#fff" }}>
                                    {loser.ticker}
                                </TableCell>
                                <TableCell align="center" sx={{ color: "#fff" }}>
                                    {loser.price}
                                </TableCell>
                                <TableCell align="center" sx={{ color: "#fff" }}>
                                    {loser.change_amount}
                                </TableCell>
                                <TableCell align="center" sx={{ color: "#fff" }}>
                                    {loser.change_percentage}%
                                </TableCell>
                                <TableCell align="center" sx={{ color: "#fff" }}>
                                    {loser.volume}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default LosersMarketTrend;
