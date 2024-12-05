import React, { useState } from "react";
import Flag from "react-world-flags";
import countries from "world-countries";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledBox,StyledPaper, StyledButton, StyledTextField, StyledTypography } from "../../styles/ElectrictyInputStyles";

const ElectricityInput = () => {
    const [electricityValue, setElectricityValue] = useState("");
    const [selectCountry, setSelectCountry] = useState("");

    const navigate = useNavigate();

    const countryList = countries.map((country) => ({
        code: country.cca2,
        name: country.name.common,
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!electricityValue || !selectCountry) {
            alert("Please fill in all fields");
            return;
        }
        navigate("/electricity-results", { state: { electricityValue, selectCountry } });
    };

    return (
        <StyledBox>
            <StyledPaper>
                <Typography variant="h5" align="center" gutterBottom sx={StyledTypography}>
                    Electricity Consumption Input
                </Typography>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <TextField
                        label="Electricity Value (mWh)"
                        type="number"
                        value={electricityValue}
                        onChange={(e) => setElectricityValue(e.target.value)}
                        fullWidth
                        required
                        sx={StyledTextField}
                    />
                    <TextField
                        select
                        label="Country"
                        value={selectCountry}
                        onChange={(e) => setSelectCountry(e.target.value)}
                        fullWidth
                        required
                        sx={StyledTextField}
                    >
                        {countryList.map((country) => (
                            <MenuItem key={country.code} value={country.code}>
                                <Flag code={country.code} style={{ width: "20px", marginRight: "10px" }} />
                                {country.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" type="submit" sx={StyledButton}>
                        Submit
                    </Button>
                </form>
            </StyledPaper>
        </StyledBox>
    );
};

export default ElectricityInput;
