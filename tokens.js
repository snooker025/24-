// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1406340284765437982",
        serverId: "690961823121408022",
        token: process.env.token1,
        selfDeaf: false,
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
