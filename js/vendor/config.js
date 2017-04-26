// General configuration module

angular.module("config", [])

    // Configuration for the Homepage
    .value("homepageConfig", {
        highlights: {
            // highlights news refresh time
            refreshTime: 15 // minutes
        }
    })

    // Default animation parameters for VelocityUI
    .value("animationConfig", {
        duration: 400, // for fadeIn an fadeOut effects
        loaderRps: 0.5 // loader indicator rotations pers seconds value
    })

    // Common configuration
    .value("commonConfig", {
        useLocalProxy: true,
        localProxyUrl: "/webproxy/proxy",
        // OMX Link service URLs
        dataFeedProxy: "http://www.nasdaqomx.com/webproxy/DataFeedProxyIRC1.aspx",
        proxyURLRealtime: "http://www.nasdaqomx.com/webproxy/DataFeedProxyIR.aspx",
        // Google API key is used to get youtube video data (title, description, duration)
        youtubeAPIKey: "AIzaSyBuzM-AHC_ipflHocDQjy7jI2e9CN6VmrY"
    })

    // NordPoolSpot feeds
    .value("nordpoolspotConfig", {
        pressReleases: "https://cns.omxgroup.com/cds/rss?username=NordPool10&companyId=2485&categories=288&maxresults=20",
        exchange: "https://cns.omxgroup.com/cds/rss?username=NordPool10&companyId=2485&categories=371&maxresults=20",
        operationalMessages: "https://cns.omxgroup.com/cds/rss?username=NordPool10&companyId=2485&categories=369&maxresults=20"
    })

    // Blog Landing page
    .value("blogConfig", {
        jsonUrl: "/blog.json?src=ambition"
    })

    // Market Indexes service (common for stock market graph and today's activity block)
    .value('marketindexesServiceConfig', {
        requestUrl: '/webproxy/JSPP/proxy.asmx/Index',
        requestParams: {
            mode: 'stock',
            // All available indexes
            symbol: ['SPX', 'IXIC', 'IXNDX', 'INDU', 'RUT', 'RUi', 'NIK/O', 'OMXN40'],
            page: 'xml',
            partner: 'qnetwork',
            domain: 'nasdaq',
            path: 'quotedll/quote.dll'
        }
    })

    // Market Indexes (in Today's Activity block)
    .value('marketindexesConfig', {
        // Visible indexes, order matters
        symbols: ["IXIC", "IXNDX", "OMXN40", "INDU", "SPX", "NIK/O"],
        // Refresh period
        refreshTime: 15 // minutes
    })

    // Stock Market Graph
    .value('stockmarketConfig', {
        requestUrl: '/webproxy/JSPP/proxy.asmx/Index',
        requestParams: {
            partner: 'qnetwork',
            domain: 'nasdaq',
            path: 'aspx/IndexData.ashx'
        },
        // Available graphs
        symbols: ["IXIC", "IXNDX", "INDU", "SPX", "RUT"],
        // cache time for each index graph
        graphCacheTime: 1, // minutes
        // Data refresh time
        refreshTime: 15 // minutes
    })

    // Decliners Advancers
    .value('declinersAdvancersConfig', {
        requestUrl: '/webproxy/JSPP/proxy.asmx/Index',
        requestParams: {
            mkttype: 'xml',
            exchange: 'NASDAQ',
            path: 'extended-trading/mostactive-xml.aspx',
            domain: 'nasdaq'
        },
        // Number of visible items
        itemsCount: 8,
        // Data refresh time
        refreshTime: 15 // minutes
    })

    // Social Networks (Homepage Social block)
    .value('socialConfig', {
        facebook: {
            community: "http://www.facebook.com/NASDAQ",
            api: "https://www.facebook.com/feeds/page.php?id=13881287428&format=rss20"
        },
        twitter: {
            community: "https://twitter.com/NASDAQ",
            api: "http://www.nasdaqomxnordic.com/WebAPI/api/TwitterFeed/UserTimeline?list=en&app=corp&count=1&callback=JSON_CALLBACK"
        },
        googlePlus: {
            community: "https://plus.google.com/115745144664442295460",
            api: "https://www.googleapis.com/plus/v1/people/115745144664442295460/activities/public?alt=json&key=AIzaSyAIAoLEWqGH2dfq9tNsSKyYyfuHaNTLqN4&callback=JSON_CALLBACK"
        },
        tumblr: {
            community: "http://nasdaq.tumblr.com/",
            api: "http://nasdaq.tumblr.com/api/read/json?&num=1&callback=JSON_CALLBACK"
        },
        refreshTime: 15 // minutes
    })

    // Market Bell Ceremonies landing page
    .value("marketbellConfig", {
        ceremonies: "http://www.nasdaqomxnordic.com/WebAPI/api/Nomx/Ceremonies",
        latest: "http://www.nasdaqomxnordic.com/WebAPI/api/Nomx/LatestCeremony",
        search: "http://www.nasdaqomxnordic.com/WebAPI/api/Nomx/SearchCeremonies"
    })

    // Market Notices 
    .value("marketNoticesConfig", {
        requestUrl: "http://mediacafe.globenewswire.com/news-remote/query.action" // news src URL
    })

//Chi-x Market summary
.value("chi-x-Config", {
    jsonUrl: "/JsonData/GetMarketSectionForChiX"
})