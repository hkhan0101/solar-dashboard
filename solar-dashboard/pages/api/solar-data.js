
export default function handler(req, res) {
    const data = [
        { time: '2024-10-25T08:00:00', production: 0, dailyProduction: 0, carbonOffset: 0 },
        { time: '2024-10-25T09:00:00', production: 1, dailyProduction: 1, carbonOffset: 0.4 },
        { time: '2024-10-25T10:00:00', production: 2, dailyProduction: 3, carbonOffset: 1.2 },
        { time: '2024-10-25T11:00:00', production: 4, dailyProduction: 7, carbonOffset: 2.8 },
        { time: '2024-10-25T12:00:00', production: 5, dailyProduction: 12, carbonOffset: 4.8 },
        { time: '2024-10-25T13:00:00', production: 6, dailyProduction: 18, carbonOffset: 7.2 },
        { time: '2024-10-25T14:00:00', production: 5, dailyProduction: 23, carbonOffset: 6.0 },
        { time: '2024-10-25T15:00:00', production: 3, dailyProduction: 26, carbonOffset: 4.0 },
    ];
    res.status(200).json(data);
}
            
// pages/api/solar-data.js

export default function handler(req, res) {
    // Sample data for the past hours
    const data = [
        { time: '2024-10-25T08:00:00', production: 0, dailyProduction: 0, carbonOffset: 0 },
        { time: '2024-10-25T09:00:00', production: 1, dailyProduction: 1, carbonOffset: 0.4 },
        { time: '2024-10-25T10:00:00', production: 2, dailyProduction: 3, carbonOffset: 1.2 },
        { time: '2024-10-25T11:00:00', production: 4, dailyProduction: 7, carbonOffset: 2.8 },
        { time: '2024-10-25T12:00:00', production: 5, dailyProduction: 12, carbonOffset: 4.8 },
        { time: '2024-10-25T13:00:00', production: 6, dailyProduction: 18, carbonOffset: 7.2 },
        { time: '2024-10-25T14:00:00', production: 5, dailyProduction: 23, carbonOffset: 6.0 },
        { time: '2024-10-25T15:00:00', production: 3, dailyProduction: 26, carbonOffset: 4.0 },
    ];
    res.status(200).json(data);
}
