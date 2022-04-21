export const portfolio = {
    /*balance: "12,724.33",
changes: "+2.36%",*/
    AppointmentsTitle: "Appointments"
};

export const trendingCurrencies = [
    {
        id: 1,
        currency: "Mental Status",
        code: "1/01/2020: Happy\n2/01/2020: Happy\n3/01/2020: Sad",
        image: require("../assets/images/smile.png"),
        /*amount: "29,455.74",*/
        type: "I",      // I - Increased, D - Decreased
        description: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
        chartData: [
            [
                { x: 1, y: 2.5 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2.3 },
                { x: 2.5, y: 1.4 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2.3 },
                { x: 4, y: 2.8 }
            ],
            [
                { x: 1, y: 3 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2 },
                { x: 2.5, y: 1.5 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2 },
                { x: 4, y: 2 }
            ],
            [
                { x: 1, y: 1.5 },
                { x: 1.5, y: 2.5 },
                { x: 2, y: 2.5 },
                { x: 2.5, y: 3 },
                { x: 3, y: 3 },
                { x: 3.5, y: 2.5 },
                { x: 4, y: 3 }
            ],
        ],
        wallet: {
            value: "170435.86",
            crypto: "5.1"
        },
        
        
        transactionHistory: [
            {
                id: 1,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },

            {
                id: 6,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 2,
        currency: "Articles & Videos",
        code: "How to relieve employee's stress?",
        image: require("../assets/icons/articles.png"),
        /*amount: "919.03",*/
        type: "D",
        description: "Articles and videos",
        chartData: [
            [
                { x: 1, y: 2.5 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2.3 },
                { x: 2.5, y: 1.4 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2.3 },
                { x: 4, y: 2.8 }
            ],
            [
                { x: 1, y: 3 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2 },
                { x: 2.5, y: 1.5 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2 },
                { x: 4, y: 2 }
            ],
            [
                { x: 1, y: 1.5 },
                { x: 1.5, y: 2.5 },
                { x: 2, y: 2.5 },
                { x: 2.5, y: 3 },
                { x: 3, y: 3 },
                { x: 3.5, y: 2.5 },
                { x: 4, y: 3 }
            ],
        ],
        wallet: {
            value: "18409.24",
            crypto: "13.7"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },

            {
                id: 6,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Bought Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    /*{
        id: 3,
        currency: "Litecoin",
        code: "LTC",
        image: require("../assets/images/litecoin.png"),
        amount: "118.33",
        changes: "+1.73%",
        type: "I",
        description: "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011. In technical details, Litecoin is nearly identical to Bitcoin.",
        chartData: [
            [
                { x: 1, y: 2.5 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2.3 },
                { x: 2.5, y: 1.4 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2.3 },
                { x: 4, y: 2.8 }
            ],
            [
                { x: 1, y: 3 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2 },
                { x: 2.5, y: 1.5 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2 },
                { x: 4, y: 2 }
            ],
            [
                { x: 1, y: 1.5 },
                { x: 1.5, y: 2.5 },
                { x: 2, y: 2.5 },
                { x: 2.5, y: 3 },
                { x: 3, y: 3 },
                { x: 3.5, y: 2.5 },
                { x: 4, y: 3 }
            ],
        ],
        wallet: {
            value: "13139.23",
            crypto: "100.2"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold Litecoin",
                amount: -2.0034,
                currency: "LTC",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold Litecoin",
                amount: -2.0034,
                currency: "LTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Bought Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    /*{
        id: 4,
        currency: "Ripple",
        code: "XRP",
        image: require("../assets/images/ripple.png"),
        amount: "0.24",
        changes: "-0.51%",
        type: "D",
        description: "Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company.",
        chartData: [
            [
                { x: 1, y: 2.5 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2.3 },
                { x: 2.5, y: 1.4 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2.3 },
                { x: 4, y: 2.8 }
            ],
            [
                { x: 1, y: 3 },
                { x: 1.5, y: 2 },
                { x: 2, y: 2 },
                { x: 2.5, y: 1.5 },
                { x: 3, y: 1.5 },
                { x: 3.5, y: 2 },
                { x: 4, y: 2 }
            ],
            [
                { x: 1, y: 1.5 },
                { x: 1.5, y: 2.5 },
                { x: 2, y: 2.5 },
                { x: 2.5, y: 3 },
                { x: 3, y: 3 },
                { x: 3.5, y: 2.5 },
                { x: 4, y: 3 }
            ],
        ],
        wallet: {
            value: "2000.0",
            crypto: "6000.0"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold Ripple",
                amount: -2.0034,
                currency: "XRP",
                type: "S",      // S - Sold, B - Bought
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Sold Ripple",
                amount: -2.0034,
                currency: "XRP",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Bought Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },*/
]

export const transactionHistory = [
    {
        id: 1,
        description: "Sold Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Sold Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 4,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 5,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },

    {
        id: 6,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 7,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 8,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 9,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
];

const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Month"
    },
    {
        id: 5,
        label: "3 Months"
    }
] 

export const articles = [
    {
      id: 1,
      description: "Meditation: Process and effects",
      title:
        "Meditation: Process and effects",
      content:
        "Meditation has become popular in many Western nations, especially the USA. An increasing body of research shows various health benefits associated with meditation and these findings have sparked interest in the field of medicine. The practice of meditation originated in the ancient Vedic times of India and is described in the ancient Vedic texts. Meditation is one of the modalities used in Ayurveda (Science of Life), the comprehensive, natural health care system that originated in the ancient Vedic times of India. The term “meditation” is now loosely used to refer to a large number of diverse techniques. According to Vedic science, the true purpose of meditation is to connect oneself to one's deep inner Self. Techniques which achieve that goal serve the true purpose of meditation. Neurological and physiological correlates of meditation have been investigated previously. This article describes the process of meditation at a more fundamental level and aims to shed light on the deeper underlying mechanism of the beneficial effects associated with meditation. Research on the effects of meditation is summarized.\n\nMeditation, as described in the ancient Vedic texts, is an exercise of consciousness that results in the expansion of consciousness beyond the day-to-day experience of duality. It is an experience of unity, which reduces stress and brings increased creativity and efficiency to the functioning of the inner faculty. This is an exercise that occurs without the mind directing the process. In physical exercise, the mind does not tell the muscles to get stronger; rather, the muscles are strengthened automatically by the exercise process. Likewise, in this exercise of consciousness, that is, meditation, the results are achieved automatically, not by controlling the mind or any other mental manipulation. The process of meditation goes beyond the mind to the deepest level of the inner Self.",
      image: {uri: 'https://media.istockphoto.com/photos/man-and-soul-yoga-lotus-pose-meditation-on-nebula-galaxy-background-picture-id1313456479?b=1&k=20&m=1313456479&s=170667a&w=0&h=dPt49TSikJDm4NqfKd5Cb47GOsWe0pTeXkS4dvUeZbk='},
    },
    {
      id: 2,
      description: "Well-being is more than happiness and life satisfaction",
      title:
        "Well-being is more than happiness and life satisfaction",
      content:
        "Background:\nRecent trends on measurement of well-being have elevated the scientific standards and rigor associated with approaches for national and international comparisons of well-being. One major theme in this has been the shift toward multidimensional approaches over reliance on traditional metrics such as single measures (e.g. happiness, life satisfaction) or economic proxies (e.g. GDP).\n\nMethods:\nTo produce a cohesive, multidimensional measure of well-being useful for providing meaningful insights for policy, we use data from 2006 and 2012 from the European Social Survey (ESS) to analyze well-being for 21 countries, involving approximately 40,000 individuals for each year. We refer collectively to the items used in the survey as multidimensional psychological well-being (MPWB).\n\nResults:\nThe ten dimensions assessed are used to compute a single value standardized to the population, which supports broad assessment and comparison. It also increases the possibility of exploring individual dimensions of well-being useful for targeting interventions. Insights demonstrate what may be masked when limiting to single dimensions, which can create a failure to identify levers for policy interventions.\n\nConclusions:\nWe conclude that both the composite score and individual dimensions from this approach constitute valuable levels of analyses for exploring appropriate policies to protect and improve well-being.",
        image: {uri: 'https://www.wellbeingpeople.com/app/uploads/2018/07/wellbeing-woman-sitting-in-sunny-field.jpg'}, 
    },
    {
      id: 3,
      description: "Young people’s mental health",
      title:
        "Young people’s mental health",
      content:
      "Worldwide, at least 13% of people between the ages of 10 and 19 live with a diagnosed mental-health disorder, according to the latest State of the World’s Children report, published this week by the United Nations children’s charity UNICEF. It’s the first time in the organization’s history that this flagship report has tackled the challenges in and opportunities for preventing and treating mental-health problems among young people. It reveals that adolescent mental health is highly complex, understudied — and underfunded. These findings are echoed in a parallel collection of review articles published this week in a number of Springer Nature journals.\n\nAnxiety and depression constitute more than 40% of mental-health disorders among young people (those aged 10–19). UNICEF also reports that, worldwide, suicide is the fourth most-common cause of death (after road injuries, tuberculosis and interpersonal violence) among adolescents (aged 15–19). In eastern Europe and central Asia, suicide is the leading cause of death for young people in that age group — and it’s the second-highest cause in western Europe and North America.\n\nCollection: Promoting youth mental health\n\nSadly, psychological distress among young people seems to be rising. One study found that rates of depression among a nationally representative sample of US adolescents (aged 12 to 17) increased from 8.5% of young adults to 13.2% between 2005 and 20171. There’s also initial evidence that the coronavirus pandemic is exacerbating this trend in some countries. For example, in a nationwide study2 from Iceland, adolescents (aged 13–18) reported significantly more symptoms of mental ill health during the pandemic than did their peers before it. And girls were more likely to experience these symptoms than were boys.",
      image: {uri: 'https://research.senedd.wales/media/zq0dobao/mindovermatter.jpg?anchor=center&amp;mode=crop&amp;width=585&amp;height=300&amp;rnd=132526243505830000&quality=75'}, //https://www.nature.com/articles/d41586-021-02690-5
    },
  ];
  export const videos = [
    {
      id: 1,
      description: "Stronger Than You Think_ Brandon Marshall & Metta Sandiford-Artest",
      content: "Stronger Than You Think, a three-day livestream for brain health, brought together celebrities, activists, and brain health experts to generate awareness around the growing epidemic of mental health challenges. Check out this conversation with co-host Brandon Marshall and Metta Sandiford-Artest. Learn more about what One Mind is doing to accelerate the future of brain health at OneMind.org. \n\nFollow One Mind:\nFacebook: @OneMindOrg\nTwitter: @OneMindOrg\nInstagram: @OneMindOrg",
      url: {
          uri: 'https://cdn-cf-east.streamable.com/video/mp4/6yl5uk.mp4?Expires=1649801820&Signature=fZmPFBGwakJvPDsazbe5e5JSOzCJMmBlu4Wjn6v~BmAaAfryyvHdrfxHVtmV6756Aiv0VY7JPa2jtJc7UAoV-proTiWuUzAth8-lOhNMGl~U7BjbhOZ96os9i3J0TVQTEZXr-sXzxVq7xXo43IR19eGN0umm7Z38tErL0FFAYunkz3e~ASTHFTRHo7Mz3sYp-LUeqQAxBwJYwYipJ4igz0nlKbw3R8oLYbFwUDsy96UqRtQRF-I~PWYXmiPRPH30ssKUQYVQhpE8qT0MPfBO4UlbKEV9qPmHe6miMwYePsUeJYh776QXxSwsf8goGWE8GiiWMI1nQeZOqkYdjw14Vw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
        },
      thumbnail: { uri:  "https://img.youtube.com/vi/mcNZ66n0SMY/hqdefault.jpg" } 
    },
    {
      id: 2,
      description: "5-Minute Meditation You Can Do Anywhere",
      content: "5-Minute Meditation You Can Do Anywhere\n\nIn just 5 minutes you can reset your day in a positive way.\n\nSpecial thanks to John Davisi for lending us his incredibly soothing voice. https://www.johndavisi.com/",
      url: {
          uri: 'https://cdn-cf-east.streamable.com/video/mp4/nx37th.mp4?Expires=1649800740&Signature=BMguqYViKH~Md9mfN7fhmWcE1yGCVViSE7Ym5X86zprpJtijnC8wMwb9LXKWssOcv2-8x6dNNUnDi2zrVMJ5rMy0JjxLKo2xoCuAheNfgbqODXkpYAnIGbBlJ~oy6ZrSVB-33VQjSNWZ2NS36UX3NECGibdDuFLIeYOiSD9wjb8r14THYd5677VanMOJk77VtORr1gP35RaAiWiA7c8PJFr~~DOx9af24UhX01znpnTJSAcX~Nm982Wh3Nn3ij-poDmA~twQMe7PoOUKycXJ8JQmsFw14r28WEZ-Nt02dlYPtYrRyinyH6LWHVu3B2Ii6VVRCFaw2d4jAZn9xELbTQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
        },
      thumbnail: { uri:  "https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg" } 
    },
    {
      id: 3,
      description: "Short Films About Mental Health - Good Mental Health and Wellbeing",
      content: "Short Films About Mental Health - Good Mental Health and Wellbeing\n\nShort Films About Mental Health is a series of videos made with young people who use mental health services at Oxford Health NHS Foundation Trust.",
      url: {
          uri: 'https://cdn-cf-east.streamable.com/video/mp4/x0jugr.mp4?Expires=1649802240&Signature=dJLJOgPDDzFjIQa0PfNesqHTnq~U4OzqPLCYuDiHhFCOrLDKluG-55NQaPvq7OAY9kQ1kKu2tAXWthdd4HhQyqQvda8Fypi6NF7L0CEJfv3c8~VKIX5ztvRAD58Ct1pD0qkwGKOm6B2YUBqwj9cJotKt9OxYUEYPkhuoDiJXI5ADYaKWNWjjGBgrUrnNZ7UlMhs3V~Cr5Xf-i6idfs1hWCtTnaJqHhheLLkrBupatioj~RKOdB4SZ3S-lrQm8zfAwiT2zN8l1RJg~hn1RmgWiZ5Bk9VCA9iSxnw9s7lXZRcxruHjS3R3-rbYU4RYgji0A6yYTs2P-e7k6xmZ9L2ZBg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
        },
      thumbnail: { uri:  "https://img.youtube.com/vi/dOkVh4p8XVw/hqdefault.jpg" } 
    },
  ];
  

  const status = [
    {
      id: 1,
      title: 'Current Streaks',
      unit: 'day(s)'
    },
    {
      id: 2,
      title: 'Total Sessions',
      unit: 'sessions'
    },
    {
      id: 3,
      title: 'Number of hours',
      unit: 'hr'
    },
  
  ]

  const dummyData = { portfolio, trendingCurrencies, transactionHistory, chartOptions, articles, videos, status };

export default dummyData;