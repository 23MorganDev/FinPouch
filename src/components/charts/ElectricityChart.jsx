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

const ElectricityEmissionsChart = ({ data }) => {
    if (!data || !data.attributes) {
        return <p>No data available for display</p>;
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
        maintainAspectRatio: false, // Allow the chart to resize based on container
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    font: {
                        size: 14, // Base font size for legend
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
                type: "logarithmic", // Handle large value ranges
                min: 1, // Start from 1 for logarithmic scale
                title: {
                    display: true,
                    text: "Emissions",
                    font: {
                        size: 16, // Title font size
                    },
                },
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString(); // Format ticks with commas
                    },
                    font: {
                        size: 12, // Tick font size
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Units",
                    font: {
                        size: 16, // Title font size
                    },
                },
                ticks: {
                    font: {
                        size: 12, // Tick font size
                    },
                },
            },
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
            },
        },
    };

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

export default ElectricityEmissionsChart;
