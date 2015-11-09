/*
Personal info
*/
var bio = {
    'name': 'Ethan Furman',
    'role': 'Web Apprentice',
    'contacts': {
        'email': 'ethan@stoneleaf.us',
        'github': 'https://github.com/ethanfurman',
        'bitbucket': 'https://bitbucket.org/stoneleaf/',
        'location': 'Portland, Oregon  USA'
    },
    'skills': ['Python', 'JavaScript', 'Customer Service', 'Logic', 'Strategy'],
    'welcomeMessage': 'Welcome!',
    'biopic': 'images/stoneleaf.jpeg'
}
bio.display = function() {
    var header = $('#header');
    header.prepend(HTMLheaderRole.replace('%data%', bio.role));
    header.prepend(HTMLheaderName.replace('%data%', bio.name));
    for (var key in bio.contacts) {
        if (bio.contacts.hasOwnProperty(key)) {
            var contact = bio.contacts[key];
            var entry = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', contact);
            $('#topContacts').append(entry);
            $('#footerContacts').append(entry);
        }
    }
    header.append(HTMLbioPic.replace('%data%', bio.biopic));
    header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    if (bio.skills.length) {
        $('#header').append(HTMLskillsStart);
        skills = $('#skills')
        for (var i=0; i<bio.skills.length; i+=1) {
            skills.append(HTMLskills.replace('%data%', bio.skills[i]));
        }
    }
}

var work = {
    'jobs' : [
        {   'employer': 'Van Sebille Systems',
            'title': 'Programmer',
            'location': 'San Francisco, CA, USA',
            'dates': {
                'start': '2012-10-16',
                'end': 'current'
            },
            'description': 'Enhance, support, and train users in OpenERP'
        },
        {   'employer': 'AdMail, Inc',
            'title': 'IS Manager',
            'location': 'Portland, OR, USA',
            'dates': {
                'start': '2005-03-15',
                'end': '2012-10-15'
            },
            'description': 'Support all computer related mailing operations'
        },
        {   'employer': 'Dealer Information Systems',
            'title': 'Response Line Rep III',
            'location': 'Bellingham, WA, USA',
            'dates': {
                'start': '1999-11-15',
                'end': '2004-11-15'
            },
            'description': 'Assist customers in operating AS/400 servers, and recoving from hardware failures'
        }]
}
work.display = function() {
    $('#workExperience').append(HTMLworkStart);
    for (var index in work.jobs) {
        var job = work.jobs[index];
        if (job.employer) {
            var workEntry = $('.work-entry:last');
            workEntry.append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
            workEntry.append(HTMLworkDates.replace('%data%', job.dates.start + ' - ' + job.dates.end));
            workEntry.append(HTMLworkLocation.replace('%data%', job.location));
            workEntry.append(HTMLworkDescription.replace('%data%', job.description));
        }
    }
}

var projects = [
    {
        'title': 'dbf',
        'description': 'Pure Python xBase implementation',
        'dates': 'under active development',
        'images': []
    },
    {
        'title': 'scription',
        'description': 'Pure Python command line processor',
        'dates': 'under active development',
        'images': []
    },
    {
        'title': 'pandaemonium',
        'description': 'Pure Python *nix daemon library',
        'dates': 'under active development',
        'images': []
    },
    {
        'title': 'antipathy',
        'description': 'class-based path and file name manipulations',
        'dates': 'under active development',
        'images': []
    },
    {
        'title': 'enum34',
        'description': 'backport of Python 3.4's Enum data type',
        'dates': 'under active development',
        'images': []
    },
    {
        'title': 'xaml',
        'description': 'XML and HTML Abstract Markup Language',
        'dates': 'under active development',
        'images': []
    }
]
projects.display = function() {
    for (var index in projects) {
        var project = projects[index];
        if (project.title) {
            $('#projects').append(HTMLprojectStart);
            var projectEntry = $('.project-entry:last');
            projectEntry.append(HTMLprojectTitle.replace('%data%', project.title));
            projectEntry.append(HTMLprojectDates.replace('%data%', project.dates));
            projectEntry.append(HTMLprojectDescription.replace('%data%', project.description));
            for (var index in project.images) {
                projectEntry.append(HTMLprojectImage.replace('%data%', project.images[index]));
            }
        }
    }
}

var education = {
    'schools': [
        {
            'name': 'Eastern Oregon State College',
            'degree': 'Bachelor of Arts',
            'majors': ['Business Administration'],
            'date': 1995,
            'location': 'La Grande, OR, USA',
            'url': 'https://www.eou.edu'
        },
        {
            'name': 'Clackamas Community College',
            'location': 'Oregon City, OR, USA',
            'degree': 'Associate of Arts',
            'majors': ['General Education'],
            'date': 1993,
            'url': 'https://www.clackamas.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Python 1: Beginning Python',
            'school': 'O'Reilly School of Technology',
            'date': 2011,
            'url': 'http://www.oreillyschool.com/'
        },
        {
            'title': 'Python 2: Getting More Out of Python',
            'school': 'O'Reilly School of Technology',
            'date': 2011,
            'url': 'http://www.oreillyschool.com/'
        },
        {
            'title': 'Python 3: The Python Environment',
            'school': 'O'Reilly School of Technology',
            'date': 2011,
            'url': 'http://www.oreillyschool.com/'
        },
        {
            'title': 'Python 4: Advanced Python',
            'school': 'O'Reilly School of Technology',
            'date': 2011,
            'url': 'http://www.oreillyschool.com/'
        },
        {
            'title': 'Front-End Web Master',
            'school': 'Udacity',
            'date': 'in progress',
            'url': 'https://www.udacity.com'
        }
    ]
}
education.display = function() {
    var educationSection = $('#education');
    educationSection.append(HTMLschoolStart);
    for (var index in education.schools) {
        var schoolEntry = $('.education-entry:last');
        var school = education.schools[index];
        schoolEntry.append(HTMLschoolName.replace('%data%', school.name) + ' ' + HTMLschoolDegree.replace('%data%', school.degree));
        schoolEntry.append(HTMLschoolDates.replace('%data%', school.date));
        schoolEntry.append(HTMLschoolLocation.replace('%data%', school.location));
        for (var jndex in school.majors) {
            schoolEntry.append(HTMLschoolMajor.replace('%data%', school.majors[jndex]));
        }
    }
    educationSection.append(HTMLonlineClasses);
    educationSection.append(HTMLschoolStart);
    for (var index in education.onlineCourses) {
        var course = education.onlineCourses[index];
        var onlineEntry = $('.education-entry:last');
        onlineEntry.append(HTMLonlineTitle.replace('%data%', course.title) + ' ' + HTMLonlineSchool.replace('%data%', course.school));
        onlineEntry.append(HTMLonlineDates.replace('%data%', course.date));
        onlineEntry.append(HTMLonlineURL.replace('%data%', course.url));
    }
}

function inName() {
    var names = bio.name.split(' ');
    console.log(names);
    return names[0] + ' ' + names[1].toUpperCase();
}

bio.display()
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
$('#main').append(internationalizeButton);
