export const ResultContainer = {
    maxWidth: "100%",
    width: "100%",
    mx: "auto",
    p: 4,
    backgroundColor: "#121212",
    color: "#e0e0e0",
    borderRadius: 4,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    '@media (max-width: 1024px)': {
        width: '95%',
        p: 3, 
    },
    '@media (max-width: 768px)': {
        p: 2,
    },
    '@media (max-width: 480px)': {
        p: 1,
    },
};

export const BackButtonStyles = {
    mb: 3,
    color: "#1a90ff",
    borderColor: "#1a90ff",
    ":hover": {
        backgroundColor: "#1a90ff",
        color: "#fff",
    },
    '@media (max-width: 768px)': {
        width: '100%',
        padding: '12px',
        fontSize: '1rem', 
    },
};

export const UserInputBox = {
    mt: 4,
    textAlign: "center",
    border: "1px solid #444",
    borderRadius: 4,
    p: 3,
    backgroundColor: "#1c1c1c",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    '@media (max-width: 768px)': {
        fontSize: '0.9rem',
        p: 2,
    },
    '@media (max-width: 480px)': {
        fontSize: '0.8rem',
        p: 1.5,
    },
};

export const LoadingBox = {
    mt: 4,
    textAlign: "center",
    '@media (max-width: 768px)': {
        fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
        fontSize: '0.8rem',
    },
};

export const ResultBox = {
    mt: 4,
    p: 4,
    border: "1px solid #ddd",
    borderRadius: 4,
    backgroundColor: "#1c1c1c",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    '@media (max-width: 768px)': {
        p: 3,
    },
    '@media (max-width: 480px)': {
        p: 2,
        fontSize: '0.9rem', // Reduce text size
    },
};

export const ErrorText = {
    color: "error.main",
    mt: 4,
    textAlign: "center",
    '@media (max-width: 768px)': {
        fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
        fontSize: '0.8rem',
    },
};

export const ChartSection = {
    mt: 5,
    p: 2,
    border: "1px solid #444",
    borderRadius: 2,
    backgroundColor: "#1e1e1e",
    color: "#f5f5f5",
    maxWidth: "100%",
    overflow: "hidden", 
    [`@media (max-width: 768px)`]: {
        p: 1.5, 
    },
};

