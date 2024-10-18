var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "12718200",
        "ok": "12656328",
        "ko": "61872"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10509",
        "ok": "8217",
        "ko": "10509"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "51",
        "ko": "10008"
    },
    "standardDeviation": {
        "total": "726",
        "ok": "218",
        "ko": "8"
    },
    "percentiles1": {
        "total": "37",
        "ok": "37",
        "ko": "10007"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "10011"
    },
    "percentiles3": {
        "total": "69",
        "ok": "68",
        "ko": "10015"
    },
    "percentiles4": {
        "total": "227",
        "ok": "113",
        "ko": "10017"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 12623058,
    "percentage": 99.25192244185497
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12933,
    "percentage": 0.10168891824314762
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 20337,
    "percentage": 0.1599047034957777
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 61872,
    "percentage": 0.48648393640609516
},
    "meanNumberOfRequestsPerSecond": {
        "total": "721.15",
        "ok": "717.64",
        "ko": "3.51"
    }
},
contents: {
"req_hello-99162322": {
        type: "REQUEST",
        name: "hello",
path: "hello",
pathFormatted: "req_hello-99162322",
stats: {
    "name": "hello",
    "numberOfRequests": {
        "total": "12718200",
        "ok": "12656328",
        "ko": "61872"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10509",
        "ok": "8217",
        "ko": "10509"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "51",
        "ko": "10008"
    },
    "standardDeviation": {
        "total": "726",
        "ok": "218",
        "ko": "8"
    },
    "percentiles1": {
        "total": "37",
        "ok": "37",
        "ko": "10007"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "10011"
    },
    "percentiles3": {
        "total": "69",
        "ok": "68",
        "ko": "10015"
    },
    "percentiles4": {
        "total": "227",
        "ok": "113",
        "ko": "10017"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 12623058,
    "percentage": 99.25192244185497
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12933,
    "percentage": 0.10168891824314762
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 20337,
    "percentage": 0.1599047034957777
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 61872,
    "percentage": 0.48648393640609516
},
    "meanNumberOfRequestsPerSecond": {
        "total": "721.15",
        "ok": "717.64",
        "ko": "3.51"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
