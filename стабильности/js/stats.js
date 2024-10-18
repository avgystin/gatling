var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "23744950",
        "ok": "23738810",
        "ko": "6140"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "11884",
        "ok": "10109",
        "ko": "11884"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "26",
        "ko": "10020"
    },
    "standardDeviation": {
        "total": "172",
        "ok": "61",
        "ko": "97"
    },
    "percentiles1": {
        "total": "23",
        "ok": "23",
        "ko": "10010"
    },
    "percentiles2": {
        "total": "26",
        "ok": "26",
        "ko": "10014"
    },
    "percentiles3": {
        "total": "34",
        "ok": "33",
        "ko": "10066"
    },
    "percentiles4": {
        "total": "73",
        "ok": "73",
        "ko": "10110"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 23731601,
    "percentage": 99.9437817304311
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2903,
    "percentage": 0.012225757476852972
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4306,
    "percentage": 0.018134382258122254
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6140,
    "percentage": 0.02585812983392258
},
    "meanNumberOfRequestsPerSecond": {
        "total": "877.65",
        "ok": "877.43",
        "ko": "0.23"
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
        "total": "23744950",
        "ok": "23738810",
        "ko": "6140"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "11884",
        "ok": "10109",
        "ko": "11884"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "26",
        "ko": "10020"
    },
    "standardDeviation": {
        "total": "172",
        "ok": "61",
        "ko": "97"
    },
    "percentiles1": {
        "total": "23",
        "ok": "23",
        "ko": "10010"
    },
    "percentiles2": {
        "total": "26",
        "ok": "26",
        "ko": "10014"
    },
    "percentiles3": {
        "total": "34",
        "ok": "33",
        "ko": "10066"
    },
    "percentiles4": {
        "total": "73",
        "ok": "73",
        "ko": "10110"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 23731601,
    "percentage": 99.9437817304311
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2903,
    "percentage": 0.012225757476852972
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4306,
    "percentage": 0.018134382258122254
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6140,
    "percentage": 0.02585812983392258
},
    "meanNumberOfRequestsPerSecond": {
        "total": "877.65",
        "ok": "877.43",
        "ko": "0.23"
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
