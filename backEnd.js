const express = require("express");
const fs = require("fs");
const process = require("process");
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
var router = express.Router();
var cors = require('cors');

// Cache
var flatCache = require('flat-cache');
var cache = flatCache.load('scheduleCache');
let rawdata = fs.readFileSync("data.json");
var text = JSON.parse(rawdata);

// REST
//app.use('/', express.static('dist/se3316-mzehr4-lab4'))
//app.use('/', express.static('static'));

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Rest calls
app.get("/api/nameAndCodes", function(req, res) {
	let nameAndCodesArray = getNameAndCode();
	res.send(nameAndCodesArray);
});

app.get("/api/getCourseCodes/:id", function(req, res) {
    req.params.id = sanitize(req.params.id);
	let nameAndCodesArray = getCourseCodes(req.params.id);
	res.send(nameAndCodesArray);
});

app.get("/api/getCourseSearch/:SC/:CC", function(req, res) {
    req.params.SC = sanitize(req.params.SC);
    req.params.CC = sanitize(req.params.CC);
	let courseSearch = getCourseSearch(req.params.SC, req.params.CC);
	res.send(courseSearch);
});

app.get("/api/getSchedule/:scheduleName", function(req, res) {
    req.params.scheduleName = sanitize(req.params.scheduleName);
    let scheduleSearch = getSchedule(req.params.scheduleName);
	res.send(scheduleSearch);
});

app.get("/api/viewSchedules", function(req, res) {
    let allSchedules = getSchedules();
	res.send(allSchedules);
});

app.post("/api/createSchedule/:SN/:DSC/:ACC/:EM", function(req, res) {
    req.params.SN = sanitize(req.params.SN);
    req.params.DSC = sanitize(req.params.DSC);
    req.params.EM = sanitize(req.params.EM);
    let newSchedule = createSchedule(req.params.SN, req.params.DSC, req.params.ACC, req.params.EM);
	res.send(newSchedule);
});

app.put("/updateSchedule/:scheduleName/:DSC/:PUB/:EM", function(req, res) {
    req.params.scheduleName = sanitize(req.params.scheduleName);
    req.params.DSC = sanitize(req.params.DSC);
    let updatedSchedule = updateSchedule(req.params.scheduleName, req.params.DSC, req.params.PUB, req.params.EM, req.body);
	res.send(updatedSchedule);
});

app.delete("/api/deleteSchedule/:scheduleName", function(req, res) {
    req.params.scheduleName = sanitize(req.params.scheduleName);
    let deleteASchedule = deleteSchedule(req.params.scheduleName);
	res.send(deleteASchedule);
});

app.delete("/api/deleteAllSchedules", function(req, res) {
    let deleteAllSchedule = deleteAllSchedules();
	res.send(deleteAllSchedule);
});

const path = require('path'); // Point to directory containing static files
app.use(express.static(path.join(__dirname, 'dist/se3316-mzehr4-lab4')));//catch all other routes to return the index file
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/se3316-mzehr4-lab4/index.html'));
});

app.listen(port, () => {
    console.log(`Timetable is listening on port: ${port}`);
});

// Functions
function sanitize (input){
    if (typeof input === 'string' || input instanceof String){
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return input.replace(reg, (match)=>(map[match]));
    }
}

function updateSchedule(sName, desc, pub, email, sCourses) {
    const dateTime = new Date();
    var courses = Object.entries(sCourses);

    cache.setKey(sName,  {
        email: email,
        scheduleName: sName,
        description: desc,
        accessiblity: pub,
        lastEdit: dateTime,
        courses: sCourses
    });
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
        text: 'Schedule has been deleted'
    }
    return output;
}

function deleteAllSchedules() {
    let allSchedule = cache.all();
    for (var key in allSchedule){
        cache.removeKey(key);
    }
    cache.save(true);
    let output = {
        text: 'All schedules have been deleted'
    }
    return output;
}

function createSchedule(sName, desc, acc, email) {
    const dateTime = new Date();
    if(cache.getKey(sName) == undefined){
        cache.setKey(sName, { 
            email: email,
            scheduleName: sName,
            description: desc,
            accessiblity: acc,
            lastEdit: dateTime,
            courses: []
        });
        cache.save(true);
        console.log(cache.getKey(sName));
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
