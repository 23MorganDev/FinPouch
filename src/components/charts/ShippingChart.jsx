import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    LogarithmicScale,
} from "chart.js";

// Register chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, LogarithmicScale);

const ShippingEmissionsChart = ({ data }) => {
    if (!data || !data.attributes) {
        return (
            <p style={{ textAlign: "center", fontSize: "1rem", color: "#e0e0e0" }}>
                No data available for display
            </p>
        );
    }

    const chartData = {
        labels: ["CO₂ (kg)", "CO₂ (g)", "CO₂ (lb)", "CO₂ (mt)"], // X-axis
        datasets: [
            {
                label: "CO₂ Emissions",
                data: [
                    data.attributes.carbon_kg,
                    data.attributes.carbon_g,
                    data.attributes.carbon_lb,
                    data.attributes.carbon_mt,
                ], // Y-axis
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Bar colors
                borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Border colors
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow flexibility for height adjustments
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    font: {
                        size: 14, // Adjust legend font size
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw.toLocaleString()} units`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                type: "logarithmic",
                title: {
                    display: true,
                    text: "Emissions",
                    font: {
                        size: 16, // Adjust axis title font size
                    },
                },
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString(); // Format ticks as numbers with commas
                    },
                    font: {
                        size: 12, // Adjust tick font size
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Units",
                    font: {
                        size: 16, // Adjust axis title font size
                    },
                },
                ticks: {
                    font: {
                        size: 12, // Adjust tick font size
                    },
                },
            },
        },
    };

    // Chart container styling
    // Container styles to ensure responsiveness
    const chartContainerStyle = {
        width: "100%", // Full width for parent container
        height: "400px", // Set height for desktop
        [`@media (max-width: 768px)`]: {
            height: "300px", // Adjust height for smaller screens
        },
    };


    return (
        <div style={chartContainerStyle}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default ShippingEmissionsChart;
