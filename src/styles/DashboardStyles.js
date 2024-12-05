const drawerWidth = 240;

export const dashboardStyles = {
    root: {
        display: "flex",
        backgroundColor: "#000", 
        minHeight: "100vh",
    },
    appBar: {
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#000",
        ["@media (max-width: 768px)"]: {
            width: "100%",
        },
    },
    menuButton: {
        marginRight: "16px",
        display: "none", 
        ["@media (max-width: 768px)"]: {
            display: "block",
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        ["& .MuiDrawer-paper"]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1c1c1c", 
            color: "#fff", 
            height: "75vh",
            marginTop: "64px", 
            borderTop: "1px solid #333",
        },
        ["@media (max-width: 768px)"]: {
            display: "none", 
        },
    },
    mobileDrawer: {
        ["& .MuiDrawer-paper"]: {
            backgroundColor: "#1c1c1c", 
            color: "#fff", 
            height: "75vh", 
            marginTop: "64px", 
            borderTop: "1px solid #333",
            boxSizing: "border-box",
        },
    },
    drawerContainer: {
        overflowY: "auto", 
    },
    listItem: {
        color: "#fff", 
        "&.Mui-selected": {
            backgroundColor: "#333", 
            color: "#FFCE56", 
        },
        "&:hover": {
            backgroundColor: "blue", 
        },
    },
    content: {
        flexGrow: 1,
        padding: (theme) => theme.spacing(3),
        color: "#fff",
    },
    toolbar: {
        minHeight: 64, 
    },
};
