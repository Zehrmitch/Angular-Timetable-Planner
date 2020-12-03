const express = require("express");
const fs = require("fs");
const process = require("process");
const app = express();
const port = process.env.PORT || 3000;

var router = express.Router();
var cors = require('cors');

// Cache
var flatCache = require('flat-cache');
var cache = flatCache.load('scheduleCache');
let rawdata = fs.readFileSync("data.json");
var text = JSON.parse(rawdata);

// REST
app.use(express.json());
app.use(bodyParser.json());
app.use('/', express.static('static'));

app.use(cors());

router.get("/nameAndCodes", function(req, res) {
	let nameAndCodesArray = getNameAndCode();
	res.send(nameAndCodesArray);
});

router.get("/getCourseCodes/:id", function(req, res) {
    req.params.id = sanitize(req.params.id);
	let nameAndCodesArray = getCourseCodes(req.params.id);
	res.send(nameAndCodesArray);
});

router.get("/getCourseSearch/:SC/:CC", function(req, res) {
    req.params.SC = sanitize(req.params.SC);
    req.params.CC = sanitize(req.params.CC);
	let courseSearch = getCourseSearch(req.params.SC, req.params.CC);
	res.send(courseSearch);
});

router.get("/getSchedule/:scheduleName", function(req, res) {
    req.params.scheduleName = sanitize(req.params.scheduleName);
    let scheduleSearch = getSchedule(req.params.scheduleName);
	res.send(scheduleSearch);
});

router.get("/viewSchedules", function(req, res) {
    let allSchedules = getSchedules();
	res.send(allSchedules);
});

router.post("/createSchedule/:SN", function(req, res) {
    console.log(req.params.SN);
    let newSchedule = createSchedule(req.params.SN);
	res.send(newSchedule);
});

router.put("/updateSchedule/:scheduleName", function(req, res) {
    req.params.scheduleName = sanitize(req.params.scheduleName);
    req.body = sanitize(req.body);
    let updatedSchedule = updateSchedule(req.params.scheduleName, req.body);
	res.send(updatedSchedule);
});

router.delete("/deleteSchedule/:scheduleName", function(req, res) {
    req.params.scheduleName = sanitize(req.params.scheduleName);
    let deleteASchedule = deleteSchedule(req.params.scheduleName);
	res.send(deleteASchedule);
});

router.delete("/deleteAllSchedules", function(req, res) {
    let deleteAllSchedule = deleteAllSchedules();
	res.send(deleteAllSchedule);
});

app.use('/api', router);
app.listen(port, () => {
    console.log(`Timetable is listening at http://localhost:${port}`);
});

// Functions
function sanitize (string){
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}

function updateSchedule(sName, sCourses) {
    cache.setKey(sName, sCourses);
    cache.save(true);
    let output = {
        text: 'Schedules have been updated'
    }
    return output;
}

function getSchedules(){
    let allSchedules = cache.all();
    console.log(allSchedules);
    return allSchedules;
}

function getSchedule(sName){
    let schedule = cache.getKey(sName);
    console.log(schedule);
    return schedule;
}

function deleteSchedule(sName) {
    cache.removeKey(sName);
    cache.save(true);
    let output = {
        text: 'deleted'
    }
    return output;
}

function deleteAllSchedules() {
    let allSchedule = cache.all();
    for (var key in allSchedule){
        cache.removeKey(key);
    }
    cache.save(true); //Rename

    let output = {
        text: 'deleted'
    }
    return output;
}

function createSchedule(sName) {
    if(cache.getKey(sName) == undefined){
        cache.setKey(sName, { });
        cache.save(true);
        let schedule = cache.getKey(sName);
        let resposeToCreate = { info: 'Schedule created' };
        return resposeToCreate;
    }
    else{
        let resposeToCreate = { info: 'Schedule already exists' };
        return resposeToCreate;
    }
}

function getNameAndCode() {
	var nameAndCodes = text.map(function (text) {
        var content = { subject: text.subject, className: text.className};
        return content;
    });
    return nameAndCodes;
}

function getCourseCodes(SC) {
    var courseCodes = text.filter(function (text) {
        if (SC === text.subject){
            return text;
        }
    });
    var courseCode = courseCodes.map(function (text) {
        if (SC === text.subject){
            var content = { subject: text.subject, catalog_nbr: text.catalog_nbr };
            return content;
        }
    });
    console.log(courseCode);
    return courseCode;
}

function getCourseSearch(SC, CC) {
    var subjectCodes = text.filter(function (text) {
        if (SC === text.subject && (String(text.catalog_nbr)).includes(CC)){
            return text;
        }
    });
    return subjectCodes;
}
