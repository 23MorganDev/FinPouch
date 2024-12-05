import React, { useState } from "react";
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { dashboardStyles } from "../../styles/DashboardStyles";
import ElectricityInput from "../forms/ElectricityInput";
import ShippingInputEstimates from "../forms/ShippingInput";
import Footer from "../footer/Footer";

const Dashboard = () => {
    const [selectComponent, setSelectComponent] = useState("electricity");
    const [mobileOpen, setMobileOpen] = useState(false);

    // Menu items
    const menuItems = [
        { label: "Electricity Estimation", value: "electricity" },
        { label: "Shipping Estimates", value: "shipping" },
    ];

    // Toggle mobile drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Render selected component
    const renderSelectContent = () => {
        switch (selectComponent) {
            case "shipping":
                return <ShippingInputEstimates />;
            case "electricity":
                return <ElectricityInput />;

            default:
                return (
                    <Typography variant="h6" sx={dashboardStyles.header}>
                        Select your preferred option in the menu
                    </Typography>
                );
        }
    };

    // Drawer Content
    const drawerContent = (
        <List>
            {menuItems.map((item) => (
                <ListItem
                    button
                    key={item.value}
                    onClick={() => {
                        setSelectComponent(item.value);
                        setMobileOpen(false); 
                    }}
                    selected={selectComponent === item.value}
                    sx={dashboardStyles.listItem}
                >
                    <ListItemText primary={item.label} />
                </ListItem>
            ))}

            {/* Add a link to Actively Traded as a separate page */}
            <ListItem
                button
                component={Link} 
                to="/actively-traded" 
                sx={dashboardStyles.listItem}
                onClick={() => setMobileOpen(false)} 
            >
                <ListItemText primary="Most Active Trades" />
            </ListItem>

            <ListItem
                button
                component={Link}
                to="/gainers" 
                sx={dashboardStyles.listItem}
                onClick={() => setMobileOpen(false)} 
            >
                <ListItemText primary="Today's Gainers" />
            </ListItem>

            <ListItem
                button
                component={Link} 
                to="/losers" 
                sx={dashboardStyles.listItem}
                onClick={() => setMobileOpen(false)} 
            >
                <ListItemText primary="Today's Losers" />
            </ListItem>
        </List>
    );

    return (
        <Box sx={dashboardStyles.root}>
            <CssBaseline />
            {/* AppBar */}
            <AppBar position="fixed" sx={dashboardStyles.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={dashboardStyles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Fin Pouch Info
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer for Desktop */}
            <Drawer
                variant="permanent"
                sx={{ ...dashboardStyles.drawer, [`@media (max-width: 768px)`]: { display: "none" } }}
            >
                <Toolbar sx={dashboardStyles.toolbar} />
                <Box sx={dashboardStyles.drawerContainer}>{drawerContent}</Box>
            </Drawer>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={dashboardStyles.mobileDrawer}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box sx={dashboardStyles.drawerContainer}>{drawerContent}</Box>
            </Drawer>


            {/* Main Content */}
            <Box component="main" sx={dashboardStyles.content}>
                <Toolbar sx={dashboardStyles.toolbar} />
                {renderSelectContent()}
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Dashboard;
