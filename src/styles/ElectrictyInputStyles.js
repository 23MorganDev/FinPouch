import { styled } from "@mui/system";

export const StyledBox = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 100px)", 
    padding: "16px",
    backgroundColor: "#000", 
    [`@media (max-width: 768px)`]: {
        padding: "8px",
    },
});

export const StyledPaper = styled("div")({
    maxWidth: "600px",
    width: "100%",
    padding: "24px",
    borderRadius: "8px",
    backgroundColor: "#121212", // Dark background
    color: "#f5f5f5",
    [`@media (max-width: 768px)`]: {
        padding: "16px",
    },
});

export const StyledTextField = {
    "& .MuiInputBase-root": {
        backgroundColor: "#1e1e1e", 
        color: "#fff",
    },
    "& .MuiFormLabel-root": {
        color: "#aaa",
        fontSize: "14px",
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "#1a90ff",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#444", 
        },
        "&:hover fieldset": {
            borderColor: "#1a90ff", 
        },
        "&.Mui-focused fieldset": {
            borderColor: "#1a90ff", 
        },
    },
};

export const StyledButton = {
    backgroundColor: "#1a90ff",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#005cbf", 
    },
    padding: "10px 16px",
    fontSize: "16px",
    [`@media (max-width: 768px)`]: {
        fontSize: "14px",
        padding: "8px 12px",
    },
};

export const StyledTypography = {
    fontSize: "18px",
    [`@media (max-width: 768px)`]: {
        fontSize: "16px", 
    },
};
