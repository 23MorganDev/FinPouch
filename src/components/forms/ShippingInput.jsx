import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import {
    StyledBox,
    StyledPaper,
    StyledTextField,
    StyledButton,
    StyledMenuItem,
} from "../../styles/ShippingInputStyles";

const ShippingInputEstimates = () => {
    const [weightValue, setWeightValue] = useState("");
    const [distanceValue, setDistanceValue] = useState("");
    const [transportMethod, setTransportMethod] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!weightValue || !distanceValue || !transportMethod) {
            alert("Please fill in all the required fields.");
            return;
        }

        navigate("/shipping-results", { state: { weightValue, distanceValue, transportMethod } });
    };

    return (
        <StyledBox>
            <StyledPaper>
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: "20px",
                        [`@media (max-width: 768px)`]: {
                            fontSize: "18px", // Smaller heading for mobile
                        },
                    }}
                >
                    Shipping Carbon Estimates Input
                </Typography>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <TextField
                        label="Weight Value (MT)"
                        type="number"
                        value={weightValue}
                        onChange={(e) => setWeightValue(e.target.value)}
                        fullWidth
                        required
                        sx={StyledTextField}
                    />
                    <TextField
                        label="Distance Value (KM)"
                        type="number"
                        value={distanceValue}
                        onChange={(e) => setDistanceValue(e.target.value)}
                        fullWidth
                        required
                        sx={StyledTextField}
                    />
                    <TextField
                        select
                        label="Transport Method"
                        value={transportMethod}
                        onChange={(e) => setTransportMethod(e.target.value)}
                        fullWidth
                        required
                        sx={StyledTextField}
                    >
                        <MenuItem value="truck" sx={StyledMenuItem}>
                            Truck
                        </MenuItem>
                        <MenuItem value="train" sx={StyledMenuItem}>
                            Train
                        </MenuItem>
                        <MenuItem value="ship" sx={StyledMenuItem}>
                            Ship
                        </MenuItem>
                        <MenuItem value="plane" sx={StyledMenuItem}>
                            Plane
                        </MenuItem>
                    </TextField>
                    <Button variant="contained" type="submit" sx={StyledButton}>
                        Submit
                    </Button>
                </form>
            </StyledPaper>
        </StyledBox>
    );
};

export default ShippingInputEstimates;
