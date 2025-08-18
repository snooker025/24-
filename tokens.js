// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1282264676725424180",
        serverId: "690961823121408022",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
