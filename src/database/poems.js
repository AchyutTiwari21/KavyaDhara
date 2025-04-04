const poems = [
    {
        id: Number(Math.random()*100),
        title: "सपनों की उड़ान",
        excerpt: "जब आसमान छूने की चाह में,\nपंख फैलाए उड़ते हैं सपने।\nहर मुश्किल राह में भी,\nनई उम्मीद जगाते हैं सपने।",
        imageUrl: "https://images.unsplash.com/photo-1518050947974-4be8c7469f0c?auto=format&fit=crop&q=80&w=800",
        author: {
          name: "अनुपम शर्मा",
          avatar: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&q=80&w=100",
        },
        likes: 128,
        comments: [
            {
                id: Number(Math.random()*100),
                content: "This poem is so beautiful!",
            },
            {
                id: Number(Math.random()*100),
                content: "This poem is so awesome!",
            }
        ],
    },
    {
        id: Number(Math.random()*100),
        title: "आसमान की उड़ान",
        excerpt: "जब आसमान छूने की चाह में,\nपंख फैलाए उड़ते हैं सपने।\nहर मुश्किल राह में भी,\nनई उम्मीद जगाते हैं सपने।",
        imageUrl: "https://images.unsplash.com/photo-1518050947974-4be8c7469f0c?auto=format&fit=crop&q=80&w=800",
        author: {
          name: "अनुपम शर्मा",
          avatar: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&q=80&w=100",
        },
        likes: 128,
        comments: [
            {
                id: Number(Math.random()*100),
                content: "This poem is so beautiful!",
            }
        ],
    }
]

export default poems;