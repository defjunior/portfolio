const articlesData = [
    {
        id: 1,
        title: "#1 Getting Started with Studio",
        author: "Emmanuel",
        date : "6/17/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic1.md`,
        slug: "beginner-getting-started", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    }, {
        id: 2,
        title: "#2 Using Scripts",
        author: "Emmanuel",
        date : "6/18/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic2.md`,
        slug: "beginner-using-scripts", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 3,
        title: "#3 Constructors",
        author: "Emmanuel",
        date : "6/18/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic3.md`,
        slug: "beginner-constructors", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 4,
        title: "#4 Basic Datatypes & Operators",
        author: "Emmanuel",
        date : "6/19/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic4.md`,
        slug: "beginner-datatypes-operators", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 5,
        title: "#5 Control Structures",
        author: "Emmanuel",
        date : "6/19/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic5.md`,
        slug: "beginner-control", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 6,
        title: "#6 Basic Functions",
        author: "Emmanuel",
        date : "6/19/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic6.md`,
        slug: "beginner-functions", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 7,
        title: "#7 Function Scope",
        author: "Emmanuel",
        date : "6/21/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic7.md`,
        slug: "beginner-scope", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 8,
        title: "#8 Events",
        author: "Emmanuel",
        date : "6/25/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic8.md`,
        slug: "beginner-events", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },
    {
        id: 9,
        title: "#9 Arrays",
        author: "Emmanuel",
        date : "6/25/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic9.md`,
        slug: "beginner-arrays", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 10,
        title: "#10 Variadic Functions",
        author: "Emmanuel",
        date : "6/25/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic10.md`,
        slug: "beginner-variadic", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 11,
        title: "#11 Dictionaries",
        author: "Emmanuel",
        date : "7/7/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic11.md`,
        slug: "beginner-dictionary", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 12,
        title: "#12 Modules",
        author: "Emmanuel",
        date : "7/7/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic12.md`,
        slug: "beginner-modules", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 13,
        title: "#13 Roblox Events",
        author: "Emmanuel",
        date : "7/7/2024",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic13.md`,
        slug: "beginner-events2", // For URL
        tags: ["lua", "beginner", "tutorial","roblox"]
    },{
        id: 14,
        title: "#14 Server Client Communication",
        author: "Emmanuel",
        date : "1/19/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic14.md`,
        slug: "server-client", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },{
        id: 15,
        title: "#15 Return and Functional Design",
        author: "Emmanuel",
        date : "1/19/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic15.md`,
        slug: "return-functional", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },{
        id: 16,
        title: "#16 Closures and Higher Order Functions",
        author: "Emmanuel",
        date : "1/19/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic16.md`,
        slug: "closure-higherorderfunctions", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },{
        id: 17,
        title: "#17 Iterators",
        author: "Emmanuel",
        date : "1/19/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic17.md`,
        slug: "iterators", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },{
        id: 18,
        title: "#18 Metamethods and Metatables",
        author: "Emmanuel",
        date : "1/19/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic18.md`,
        slug: "metamethods-metatables", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },{
        id: 19,
        title: "#19 Object Oriented Programming",
        author: "Emmanuel",
        date : "1/19/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic19.md`,
        slug: "object-oriented-programming", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },
    {
        id: 20,
        title: "#20 Frameworking",
        author: "Emmanuel",
        date : "1/20/2025",
        excerpt: "Learn the basics of studio",
        content: `${process.env.PUBLIC_URL}/markdown/tutorial/topic20.md`,
        slug: "framework", // For URL
        tags: ["lua", "intermediate", "tutorial","roblox"]
    },
    
    
];

export default articlesData;
