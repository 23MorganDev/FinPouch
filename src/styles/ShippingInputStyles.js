import { styled } from "@mui/material/styles";

export const StyledBox = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 100px)", 
    backgroundColor: "#000",
    padding: theme.spacing(2),
    [`@media (max-width: 768px)`]: {
        padding: theme.spacing(1),
    },
}));

export const StyledPaper = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    maxWidth: 400,
    width: "100%",
    backgroundColor: "#1a1a1a", 
    color: "whitesmoke",
    [`@media (max-width: 768px)`]: {
        padding: theme.spacing(3), 
    },
}));

export const StyledTextField = {
    "& .MuiInputLabel-root": { 
        color: "whitesmoke", 
        fontSize: "16px", 
        [`@media (max-width: 768px)`]: { fontSize: "14px" }, 
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "whitesmoke" },
        "&:hover fieldset": { borderColor: "#36A2EB" },
        "&.Mui-focused fieldset": { borderColor: "#36A2EB" },
        "& input": { 
            color: "whitesmoke", 
            fontSize: "16px", 
            [`@media (max-width: 768px)`]: { fontSize: "14px" }, 
        },
    },
};

export const StyledMenuItem = {
    "&:hover": {
        backgroundColor: "#1a90ff", 
        color: "#fff", 
    },
    "&.Mui-selected": {
        backgroundColor: "#fff", 
        color: "blue", 
    },
    "&.Mui-selected:hover": {
        backgroundColor: "#1a90ff", 
        color: "#fff", 
    },
};

export const StyledButton = {
    backgroundColor: "#36A2EB",
    color: "#000",
    padding: "12px 16px",
    fontSize: "16px",
    "&:hover": { backgroundColor: "#1a90ff" },
    [`@media (max-width: 768px)`]: {
        padding: "10px 12px",
        fontSize: "14px",
    },
};
