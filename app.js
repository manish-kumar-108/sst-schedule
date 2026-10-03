/**
 * SST CRAFT - MINECRAFT COLLEGE SCHEDULE TRACKER
 * Progressive Web App with Sticky Background Notifications
 */

// ==========================================
// 1. EMBEDDED DEFAULT SCHEDULE (OFFLINE CACHE)
// ==========================================
const DEFAULT_SCHEDULE = {
  "A": {
    "Monday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "Claas A 2nd floor",
        "batch": "Grp A",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp A (Akansha) Claas A 2nd floor"
      },
      {
        "row": 12,
        "title": "English - 2030",
        "instructor": "Fiza",
        "location": "Class B 2nd floor",
        "batch": "Grp A",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "English - 2030 Grp A (Fiza) Class B 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 36,
        "title": "Academic Clubs",
        "instructor": "",
        "location": "Class A 2nd floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1200,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "8:00 PM",
        "raw": "Academic Clubs [5:30 - 8 PM] Class A 2nd floor"
      }
    ],
    "Tuesday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Shubham",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp A",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp A (Shubham) Class B 2nd floor"
      },
      {
        "row": 12,
        "title": "Maths - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp A",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "Maths - 2030 Grp A (Pushkar) Class C 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 34,
        "title": "Web Dev LAB -",
        "instructor": "Shubham",
        "location": "Class B 1st floor",
        "batch": "2030 Grp A",
        "startMinutes": 1020,
        "endMinutes": 1110,
        "startTimeFormatted": "5:00 PM",
        "endTimeFormatted": "6:30 PM",
        "raw": "Web Dev LAB - 2030 Grp A (Shubham) Class B 1st floor"
      }
    ],
    "Wednesday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "Claas A 2nd floor",
        "batch": "Grp A",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp A (Akansha) Claas A 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 24,
        "title": "English - 2030",
        "instructor": "Fiza",
        "location": "Class B 2nd floor",
        "batch": "Grp A",
        "startMinutes": 870,
        "endMinutes": 975,
        "startTimeFormatted": "2:30 PM",
        "endTimeFormatted": "4:15 PM",
        "raw": "English - 2030 Grp A (Fiza) Class B 2nd floor"
      },
      {
        "row": 34,
        "title": "ICP LAB - 2030",
        "instructor": "Akansha",
        "location": "Class B 2nd floor",
        "batch": "Grp A",
        "startMinutes": 1020,
        "endMinutes": 1110,
        "startTimeFormatted": "5:00 PM",
        "endTimeFormatted": "6:30 PM",
        "raw": "ICP LAB - 2030 Grp A (Akansha) Class B 2nd floor"
      }
    ],
    "Thursday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Shubham",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp A",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp A (Shubham) Class B 2nd floor"
      },
      {
        "row": 12,
        "title": "Maths - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp A",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "Maths - 2030 Grp A (Pushkar) Class C 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 30,
        "title": "Web Dev LAB -",
        "instructor": "Shubham",
        "location": "Class A 2nd floor",
        "batch": "2030 Grp A",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "Web Dev LAB - 2030 Grp A (Shubham) Class A 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1170,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:30 PM",
        "raw": "CP Foundation Module Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Friday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "Claas A 2nd floor",
        "batch": "Grp A",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp A (Akansha) Claas A 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 30,
        "title": "ICP LAB - 2030",
        "instructor": "Akansha",
        "location": "Class B 2nd floor",
        "batch": "Grp A",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "ICP LAB - 2030 Grp A (Akansha) Class B 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module LAB",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1140,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:00 PM",
        "raw": "CP Foundation Module LAB Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Saturday": [],
    "Sunday": []
  },
  "B": {
    "Monday": [
      {
        "row": 12,
        "title": "Maths - 2030",
        "instructor": "Ayush",
        "location": "Class A 2nd floor",
        "batch": "Grp B",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "Maths - 2030 Grp B (Ayush) Class A 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 30,
        "title": "ICP LAB - 2030",
        "instructor": "Akansha",
        "location": "Class A 2nd floor",
        "batch": "Grp B",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "ICP LAB - 2030 Grp B (Akansha) Class A 2nd floor"
      },
      {
        "row": 36,
        "title": "Academic Clubs",
        "instructor": "",
        "location": "Class A 2nd floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1200,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "8:00 PM",
        "raw": "Academic Clubs [5:30 - 8 PM] Class A 2nd floor"
      }
    ],
    "Tuesday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "Class A 2nd floor",
        "batch": "Grp B",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp B (Akansha) Class A 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 24,
        "title": "Web Dev -",
        "instructor": "Shubham",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp B",
        "startMinutes": 870,
        "endMinutes": 975,
        "startTimeFormatted": "2:30 PM",
        "endTimeFormatted": "4:15 PM",
        "raw": "Web Dev - 2030 Grp B (Shubham) Class B 2nd floor"
      }
    ],
    "Wednesday": [
      {
        "row": 4,
        "title": "English - 2030",
        "instructor": "Fiza",
        "location": "Class B 2nd floor",
        "batch": "Grp B",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "English - 2030 Grp B (Fiza) Class B 2nd floor"
      },
      {
        "row": 12,
        "title": "Maths - 2030",
        "instructor": "Ayush",
        "location": "Class A 2nd floor",
        "batch": "Grp B",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "Maths - 2030 Grp B (Ayush) Class A 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 34,
        "title": "Web Dev LAB -",
        "instructor": "Shubham",
        "location": "Class C Ground floor",
        "batch": "2030 Grp B",
        "startMinutes": 1020,
        "endMinutes": 1110,
        "startTimeFormatted": "5:00 PM",
        "endTimeFormatted": "6:30 PM",
        "raw": "Web Dev LAB - 2030 Grp B (Shubham) Class C Ground floor"
      }
    ],
    "Thursday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "Class A 2nd floor",
        "batch": "Grp B",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp B (Akansha) Class A 2nd floor"
      },
      {
        "row": 12,
        "title": "Web Dev -",
        "instructor": "Shubham",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp B",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "Web Dev - 2030 Grp B (Shubham) Class B 2nd floor"
      },
      {
        "row": 20,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 810,
        "endMinutes": 870,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "2:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 30,
        "title": "ICP LAB - 2030",
        "instructor": "Akansha",
        "location": "Class C 2nd floor",
        "batch": "Grp B",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "ICP LAB - 2030 Grp B (Akansha) Class C 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1170,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:30 PM",
        "raw": "CP Foundation Module Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Friday": [
      {
        "row": 4,
        "title": "English - 2030",
        "instructor": "Fiza",
        "location": "Class B 2nd floor",
        "batch": "Grp B",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "English - 2030 Grp B (Fiza) Class B 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "Class A 2nd floor",
        "batch": "Grp B",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "ICP - 2030 Grp B (Akansha) Class A 2nd floor"
      },
      {
        "row": 30,
        "title": "Web Dev LAB -",
        "instructor": "Shubham",
        "location": "Class A 2nd floor",
        "batch": "2030 Grp B",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "Web Dev LAB - 2030 Grp B (Shubham) Class A 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module LAB",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1140,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:00 PM",
        "raw": "CP Foundation Module LAB Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Saturday": [],
    "Sunday": []
  },
  "C": {
    "Monday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp C",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp C (Pushkar) Class C 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "Maths - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp C",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "Maths - 2030 Grp C (Pushkar) Class C 2nd floor"
      },
      {
        "row": 30,
        "title": "ICP LAB - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp C",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "ICP LAB - 2030 Grp C (Pushkar) Class C 2nd floor"
      },
      {
        "row": 36,
        "title": "Academic Clubs",
        "instructor": "",
        "location": "Class A 2nd floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1200,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "8:00 PM",
        "raw": "Academic Clubs [5:30 - 8 PM] Class A 2nd floor"
      }
    ],
    "Tuesday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "Class C 2nd floor",
        "batch": "2030 Grp C",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp C (Harsh) Class C 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "ICP - 2030",
        "instructor": "Pushkar",
        "location": "Class C Ground floor",
        "batch": "Grp C",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "ICP - 2030 Grp C (Pushkar) Class C Ground floor"
      },
      {
        "row": 34,
        "title": "Web Dev LAB -",
        "instructor": "Harsh",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp C",
        "startMinutes": 1020,
        "endMinutes": 1110,
        "startTimeFormatted": "5:00 PM",
        "endTimeFormatted": "6:30 PM",
        "raw": "Web Dev LAB - 2030 Grp C (Harsh) Class B 2nd floor"
      }
    ],
    "Wednesday": [
      {
        "row": 4,
        "title": "ICP - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp C",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "ICP - 2030 Grp C (Pushkar) Class C 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "English - 2030",
        "instructor": "Dr. Noor",
        "location": "Class C Ground floor",
        "batch": "Grp C",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "English - 2030 Grp C (Dr. Noor) Class C Ground floor"
      },
      {
        "row": 34,
        "title": "ICP LAB - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp C",
        "startMinutes": 1020,
        "endMinutes": 1110,
        "startTimeFormatted": "5:00 PM",
        "endTimeFormatted": "6:30 PM",
        "raw": "ICP LAB - 2030 Grp C (Pushkar) Class C 2nd floor"
      }
    ],
    "Thursday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "Class C 2nd floor",
        "batch": "2030 Grp C",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp C (Harsh) Class C 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "Maths - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp C",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "Maths - 2030 Grp C (Pushkar) Class C 2nd floor"
      },
      {
        "row": 30,
        "title": "Web Dev LAB -",
        "instructor": "Harsh",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp C",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "Web Dev LAB - 2030 Grp C (Harsh) Class B 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1170,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:30 PM",
        "raw": "CP Foundation Module Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Friday": [
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "English - 2030",
        "instructor": "Dr. Noor",
        "location": "Class B1 2nd floor",
        "batch": "Grp C",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "English - 2030 Grp C (Dr. Noor) Class B1 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module LAB",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1140,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:00 PM",
        "raw": "CP Foundation Module LAB Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Saturday": [],
    "Sunday": []
  },
  "D": {
    "Monday": [
      {
        "row": 12,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "Class C 2nd floor",
        "batch": "2030 Grp D",
        "startMinutes": 690,
        "endMinutes": 780,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:00 PM",
        "raw": "Web Dev - 2030 Grp D (Harsh) Class C 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "English - 2030",
        "instructor": "Dr. Noor",
        "location": "Class B 2nd floor",
        "batch": "Grp D",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "English - 2030 Grp D (Dr. Noor) Class B 2nd floor"
      },
      {
        "row": 30,
        "title": "Web Dev LAB -",
        "instructor": "Harsh",
        "location": "Class B 2nd floor",
        "batch": "2030 Grp D",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "Web Dev LAB - 2030 Grp D (Harsh) Class B 2nd floor"
      },
      {
        "row": 36,
        "title": "Academic Clubs",
        "instructor": "",
        "location": "Class A 2nd floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1200,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "8:00 PM",
        "raw": "Academic Clubs [5:30 - 8 PM] Class A 2nd floor"
      }
    ],
    "Tuesday": [
      {
        "row": 12,
        "title": "ICP - 2030",
        "instructor": "Utkarsh",
        "location": "Class A 2nd floor",
        "batch": "Grp D",
        "startMinutes": 690,
        "endMinutes": 795,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:15 PM",
        "raw": "ICP - 2030 Grp D (Utkarsh) Class A 2nd floor"
      },
      {
        "row": 22,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 840,
        "endMinutes": 900,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 26,
        "title": "Web Dev LAB -",
        "instructor": "Harsh",
        "location": "Class C 2nd floor",
        "batch": "2030 Grp D",
        "startMinutes": 900,
        "endMinutes": 1020,
        "startTimeFormatted": "3:00 PM",
        "endTimeFormatted": "5:00 PM",
        "raw": "Web Dev LAB - 2030 Grp D (Harsh) Class C 2nd floor"
      },
      {
        "row": 34,
        "title": "ICP LAB - 2030",
        "instructor": "Utkarsh",
        "location": "Class C 2nd floor",
        "batch": "Grp D",
        "startMinutes": 1020,
        "endMinutes": 1110,
        "startTimeFormatted": "5:00 PM",
        "endTimeFormatted": "6:30 PM",
        "raw": "ICP LAB - 2030 Grp D (Utkarsh) Class C 2nd floor"
      }
    ],
    "Wednesday": [
      {
        "row": 12,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "Class C 2nd floor",
        "batch": "2030 Grp D",
        "startMinutes": 690,
        "endMinutes": 780,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:00 PM",
        "raw": "Web Dev - 2030 Grp D (Harsh) Class C 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "Maths - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp D",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "Maths - 2030 Grp D (Pushkar) Class C 2nd floor"
      }
    ],
    "Thursday": [
      {
        "row": 12,
        "title": "ICP - 2030",
        "instructor": "Utkarsh",
        "location": "Class A 2nd floor",
        "batch": "Grp D",
        "startMinutes": 690,
        "endMinutes": 780,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:00 PM",
        "raw": "ICP - 2030 Grp D (Utkarsh) Class A 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "English - 2030",
        "instructor": "Dr. Noor",
        "location": "Class B 2nd floor",
        "batch": "Grp D",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "English - 2030 Grp D (Dr. Noor) Class B 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1170,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:30 PM",
        "raw": "CP Foundation Module Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Friday": [
      {
        "row": 12,
        "title": "ICP - 2030",
        "instructor": "Utkarsh",
        "location": "Class A 2nd floor",
        "batch": "Grp D",
        "startMinutes": 690,
        "endMinutes": 780,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:00 PM",
        "raw": "ICP - 2030 Grp D (Utkarsh) Class A 2nd floor"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 22,
        "title": "Maths - 2030",
        "instructor": "Pushkar",
        "location": "Class C 2nd floor",
        "batch": "Grp D",
        "startMinutes": 840,
        "endMinutes": 945,
        "startTimeFormatted": "2:00 PM",
        "endTimeFormatted": "3:45 PM",
        "raw": "Maths - 2030 Grp D (Pushkar) Class C 2nd floor"
      },
      {
        "row": 30,
        "title": "ICP LAB - 2030",
        "instructor": "Utkarsh",
        "location": "Class C 2nd floor",
        "batch": "Grp D",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "ICP LAB - 2030 Grp D (Utkarsh) Class C 2nd floor"
      },
      {
        "row": 36,
        "title": "CP Foundation Module LAB",
        "instructor": "Pushkar",
        "location": "Classroom C, Ground Floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1140,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "7:00 PM",
        "raw": "CP Foundation Module LAB Pushkar (Classroom C, Ground Floor)"
      }
    ],
    "Saturday": [],
    "Sunday": []
  },
  "E": {
    "Monday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "EC SST Classroom",
        "batch": "2030 Grp E",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp E (Harsh) (EC SST Classroom)"
      },
      {
        "row": 12,
        "title": "ICP LAB - 2030",
        "instructor": "Akansha",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 690,
        "endMinutes": 780,
        "startTimeFormatted": "11:30 AM",
        "endTimeFormatted": "1:00 PM",
        "raw": "ICP LAB - 2030 Grp E (Akansha) (EC SST Classroom)"
      },
      {
        "row": 18,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 780,
        "endMinutes": 840,
        "startTimeFormatted": "1:00 PM",
        "endTimeFormatted": "2:00 PM",
        "raw": "Lunch"
      },
      {
        "row": 21,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 825,
        "endMinutes": 930,
        "startTimeFormatted": "1:45 PM",
        "endTimeFormatted": "3:30 PM",
        "raw": "ICP - 2030 Grp E (Akansha) (EC SST Classroom)"
      },
      {
        "row": 36,
        "title": "Academic Clubs",
        "instructor": "",
        "location": "Class A 2nd floor",
        "batch": "",
        "startMinutes": 1050,
        "endMinutes": 1200,
        "startTimeFormatted": "5:30 PM",
        "endTimeFormatted": "8:00 PM",
        "raw": "Academic Clubs [5:30 - 8 PM] Class A 2nd floor"
      }
    ],
    "Tuesday": [
      {
        "row": 10,
        "title": "Maths - 2030",
        "instructor": "Ayush",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 660,
        "endMinutes": 750,
        "startTimeFormatted": "11:00 AM",
        "endTimeFormatted": "12:30 PM",
        "raw": "Maths - 2030 Grp E (Ayush) (EC SST Classroom)"
      },
      {
        "row": 16,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 750,
        "endMinutes": 810,
        "startTimeFormatted": "12:30 PM",
        "endTimeFormatted": "1:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 20,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 810,
        "endMinutes": 915,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "3:15 PM",
        "raw": "ICP - 2030 Grp E (Akansha) (EC SST Classroom)"
      },
      {
        "row": 30,
        "title": "ICP LAB - 2030",
        "instructor": "Akansha",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 960,
        "endMinutes": 1050,
        "startTimeFormatted": "4:00 PM",
        "endTimeFormatted": "5:30 PM",
        "raw": "ICP LAB - 2030 Grp E (Akansha) (EC SST Classroom)"
      }
    ],
    "Wednesday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "EC SST Classroom",
        "batch": "2030 Grp E",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp E (Harsh) (EC SST Classroom)"
      },
      {
        "row": 16,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 750,
        "endMinutes": 810,
        "startTimeFormatted": "12:30 PM",
        "endTimeFormatted": "1:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 20,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 810,
        "endMinutes": 915,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "3:15 PM",
        "raw": "ICP - 2030 Grp E (Akansha) (EC SST Classroom)"
      },
      {
        "row": 32,
        "title": "Web Dev LAB -",
        "instructor": "Harsh",
        "location": "EC SST Classroom",
        "batch": "2030 Grp E",
        "startMinutes": 990,
        "endMinutes": 1080,
        "startTimeFormatted": "4:30 PM",
        "endTimeFormatted": "6:00 PM",
        "raw": "Web Dev LAB - 2030 Grp E (Harsh) (EC SST Classroom)"
      }
    ],
    "Thursday": [
      {
        "row": 10,
        "title": "Maths - 2030",
        "instructor": "Ayush",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 660,
        "endMinutes": 750,
        "startTimeFormatted": "11:00 AM",
        "endTimeFormatted": "12:30 PM",
        "raw": "Maths - 2030 Grp E (Ayush) (EC SST Classroom)"
      },
      {
        "row": 16,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 750,
        "endMinutes": 810,
        "startTimeFormatted": "12:30 PM",
        "endTimeFormatted": "1:30 PM",
        "raw": "Lunch"
      },
      {
        "row": 20,
        "title": "ICP - 2030",
        "instructor": "Akansha",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 810,
        "endMinutes": 915,
        "startTimeFormatted": "1:30 PM",
        "endTimeFormatted": "3:15 PM",
        "raw": "ICP - 2030 Grp E (Akansha) (EC SST Classroom)"
      }
    ],
    "Friday": [
      {
        "row": 4,
        "title": "Web Dev -",
        "instructor": "Harsh",
        "location": "EC SST Classroom",
        "batch": "2030 Grp E",
        "startMinutes": 570,
        "endMinutes": 675,
        "startTimeFormatted": "9:30 AM",
        "endTimeFormatted": "11:15 AM",
        "raw": "Web Dev - 2030 Grp E (Harsh) (EC SST Classroom)"
      },
      {
        "row": 11,
        "title": "Maths - 2030",
        "instructor": "Ayush",
        "location": "EC SST Classroom",
        "batch": "Grp E",
        "startMinutes": 675,
        "endMinutes": 765,
        "startTimeFormatted": "11:15 AM",
        "endTimeFormatted": "12:45 PM",
        "raw": "Maths - 2030 Grp E (Ayush) (EC SST Classroom)"
      },
      {
        "row": 17,
        "title": "Lunch Break",
        "instructor": "Recharge your Hunger Bar!",
        "location": "Cafeteria / Dining Area",
        "batch": "",
        "startMinutes": 765,
        "endMinutes": 825,
        "startTimeFormatted": "12:45 PM",
        "endTimeFormatted": "1:45 PM",
        "raw": "Lunch"
      },
      {
        "row": 32,
        "title": "Web Dev LAB -",
        "instructor": "Harsh",
        "location": "EC SST Classroom",
        "batch": "2030 Grp E",
        "startMinutes": 990,
        "endMinutes": 1080,
        "startTimeFormatted": "4:30 PM",
        "endTimeFormatted": "6:00 PM",
        "raw": "Web Dev LAB - 2030 Grp E (Harsh) (EC SST Classroom)"
      }
    ],
    "Saturday": [],
    "Sunday": []
  }
};

// Google Sheets Config
const SHEET_ID = '1NP_huOVUwBcpK71bk1vO4ZWRrauskG4ra0f10gB_n1E';
const SHEET_TAB = '[Aug26-Oct26] Weekly Schedule';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_TAB)}`;
const JSONP_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=responseHandler:window.onGoogleSheetJSONP&sheet=${encodeURIComponent(SHEET_TAB)}`;

// State Variables
let currentGroup = localStorage.getItem('sst_schedule_group') || 'A';
let currentTheme = localStorage.getItem('sst_ui_theme') || 'minecraft';
let soundEnabled = localStorage.getItem('sst_sound_enabled') !== 'false';
let scheduleData = null;
let swRegistration = null;

// Creative / Simulator Mode State
let isSimulatorMode = false;
let simDay = 'Monday';
let simHours = 9;
let simMinutes = 45;

// Audio Context for Minecraft Click Synth
let audioCtx = null;

// ==========================================
// 2. INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initScheduleData();
  applyTheme(currentTheme, false);
  setupUIEventListeners();
  setupGroupButtons();
  initAudio();
  initAmbientEngine();
  attachMicroInteractions();
  registerServiceWorker();
  checkNotificationStatus();
  
  // Start main loop immediately
  tickRealtimeClock();
  setInterval(tickRealtimeClock, 1000);

  // Sync latest schedule in background from Google Sheet
  fetchLatestGoogleSheet();
});

// Load schedule from localStorage or fallback
function initScheduleData() {
  try {
    const cached = localStorage.getItem('sst_cached_schedule');
    if (cached) {
      scheduleData = JSON.parse(cached);
      console.log('[App] Loaded schedule from localStorage cache');
    } else {
      scheduleData = DEFAULT_SCHEDULE;
      console.log('[App] Loaded default embedded schedule');
    }
  } catch (e) {
    console.warn('[App] Error parsing cache, using embedded:', e);
    scheduleData = DEFAULT_SCHEDULE;
  }
}

// ==========================================
// 3. SERVICE WORKER & NOTIFICATIONS
// ==========================================
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      swRegistration = await navigator.serviceWorker.register('./sw.js');
      console.log('[PWA] Service Worker registered with scope:', swRegistration.scope);
      
      // Listen for background tick messages from SW
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'TICK_REQUEST') {
          updateDashboard();
        }
      });
    } catch (err) {
      console.warn('[PWA] Service Worker registration failed:', err);
    }
  }
}

function checkNotificationStatus() {
  const notifDot = document.getElementById('notifDot');
  const notifStatusText = document.getElementById('notifStatusText');
  const enableNotifBtn = document.getElementById('enableNotifBtn');
  const testNotifBtn = document.getElementById('testNotifBtn');

  if (!('Notification' in window)) {
    notifStatusText.textContent = 'Notifications not supported in this browser';
    notifDot.className = 'mc-pulse-dot';
    enableNotifBtn.style.display = 'none';
    return;
  }

  if (Notification.permission === 'granted') {
    notifDot.className = 'mc-pulse-dot active';
    notifStatusText.textContent = 'Sticky Notification: Active (1m updates)';
    enableNotifBtn.textContent = '🔔 NOTIFICATIONS ACTIVE';
    enableNotifBtn.className = 'mc-btn mc-btn-green';
    testNotifBtn.style.display = 'inline-flex';
  } else if (Notification.permission === 'denied') {
    notifDot.className = 'mc-pulse-dot';
    notifStatusText.textContent = 'Notifications Blocked in Browser Settings';
    enableNotifBtn.textContent = '⚠️ NOTIFICATIONS BLOCKED';
    enableNotifBtn.className = 'mc-btn mc-btn-red';
    enableNotifBtn.disabled = true;
    testNotifBtn.style.display = 'none';
  } else {
    notifDot.className = 'mc-pulse-dot';
    notifStatusText.textContent = 'Sticky Tracker: Inactive (Click to enable)';
    enableNotifBtn.textContent = '🔔 ENABLE STICKY TRACKER';
    enableNotifBtn.className = 'mc-btn mc-btn-green';
    testNotifBtn.style.display = 'none';
  }
}

async function requestNotificationPermission() {
  playMinecraftSound();
  if (!('Notification' in window)) {
    showToast('Notifications not supported in browser');
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    checkNotificationStatus();
    if (permission === 'granted') {
      showToast('Notifications enabled! Sticky tracker active.');
      updateStickyNotification();
    } else if (permission === 'denied') {
      showToast('Notification permission was denied.');
    }
  } catch (err) {
    console.error('Error requesting notification permission:', err);
  }
}

function updateStickyNotification() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const currentStatus = calculateCurrentScheduleStatus();
  let payload = {
    title: `[SST Grp ${currentGroup}] ${currentStatus.title}`,
    body: currentStatus.notifBody,
    location: currentStatus.location,
    endMinutes: currentStatus.endMinutes,
    nextClass: currentStatus.nextClassTitle
  };

  // If Service Worker is ready, post message to SW
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'UPDATE_NOTIFICATION',
      payload: payload
    });
  } else if (swRegistration && swRegistration.showNotification) {
    swRegistration.showNotification(payload.title, {
      body: payload.body,
      icon: './icon-192.png',
      badge: './icon-192.png',
      tag: 'sst-schedule-notification',
      requireInteraction: true,
      renotify: false,
      silent: true
    }).catch(console.warn);
  }
}

// ==========================================
// 4. GOOGLE SHEETS FETCHING & PARSING
// ==========================================
async function fetchLatestGoogleSheet() {
  const syncLabel = document.getElementById('sheetSyncLabel');
  syncLabel.textContent = 'Connecting...';
  syncLabel.style.color = '#fdb813';

  try {
    // Attempt standard fetch with CSV endpoint
    const response = await fetch(CSV_URL, { cache: 'no-store' });
    if (response.ok) {
      const csvText = await response.text();
      const parsed = parseGoogleSheetCSV(csvText);
      if (parsed && Object.keys(parsed).length > 0) {
        scheduleData = parsed;
        localStorage.setItem('sst_cached_schedule', JSON.stringify(parsed));
        syncLabel.textContent = 'Cloud Synced (Live)';
        syncLabel.style.color = '#17dd62';
        updateDashboard();
        return;
      }
    }
  } catch (err) {
    console.warn('[App] Direct CSV fetch blocked or offline, trying JSONP fallback:', err);
  }

  // Fallback: JSONP script injection
  loadGoogleSheetJSONP();
}

function loadGoogleSheetJSONP() {
  const syncLabel = document.getElementById('sheetSyncLabel');
  window.onGoogleSheetJSONP = function(json) {
    try {
      const parsed = parseGVizData(json);
      if (parsed && Object.keys(parsed).length > 0) {
        scheduleData = parsed;
        localStorage.setItem('sst_cached_schedule', JSON.stringify(parsed));
        syncLabel.textContent = 'Cloud Synced (JSONP)';
        syncLabel.style.color = '#17dd62';
        updateDashboard();
        showToast('Schedule synced from Google Sheet!');
      }
    } catch (err) {
      console.error('[App] Failed to parse GViz JSONP:', err);
      syncLabel.textContent = 'Using Offline Cache';
      syncLabel.style.color = '#ffd700';
    }
  };

  const script = document.createElement('script');
  script.src = JSONP_URL;
  script.onerror = () => {
    console.warn('[App] JSONP script failed, sticking with cached schedule.');
    syncLabel.textContent = 'Offline Cache (Ready)';
    syncLabel.style.color = '#80ff20';
  };
  document.body.appendChild(script);
}

// CSV Parser
function parseGoogleSheetCSV(csvText) {
  const rows = [];
  let currentRow = [];
  let currentVal = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const ch = csvText[i];
    const nextCh = csvText[i + 1];

    if (ch === '"') {
      if (inQuotes && nextCh === '"') {
        currentVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      currentRow.push(currentVal.trim());
      currentVal = '';
    } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
      if (ch === '\r' && nextCh === '\n') i++;
      currentRow.push(currentVal.trim());
      rows.push(currentRow);
      currentRow = [];
      currentVal = '';
    } else {
      currentVal += ch;
    }
  }
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal.trim());
    rows.push(currentRow);
  }

  return processGridRows(rows);
}

// GViz Data Parser
function parseGVizData(gviz) {
  if (!gviz || !gviz.table || !gviz.table.rows) return null;
  const rows = [];
  gviz.table.rows.forEach(r => {
    const rowCells = (r.c || []).map(cell => (cell && cell.v !== null && cell.v !== undefined) ? String(cell.v).trim() : '');
    rows.push(rowCells);
  });
  return processGridRows(rows);
}

// Core Grid Processor
function processGridRows(rows) {
  if (!rows || rows.length < 5) return null;

  // Time slot rows
  const timeSlots = {};
  for (let r = 2; r < rows.length; r++) {
    const slotStr = (rows[r][0] || '').trim();
    if (slotStr) {
      timeSlots[r] = parseTimeSlotToMinutes(slotStr);
    }
  }

  const groups = { 'A': 2, 'B': 10, 'C': 18, 'D': 26, 'E': 34 };
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const fullSchedule = {};

  for (const [grp, startCol] of Object.entries(groups)) {
    fullSchedule[grp] = {};
    for (let dayI = 0; dayI < days.length; dayI++) {
      const dayName = days[dayI];
      const col = startCol + dayI;
      const rawEvents = [];

      for (let r = 2; r < rows.length; r++) {
        const val = (rows[r][col] || '').trim();
        if (val) {
          rawEvents.push({ row: r, val: val });
        }
      }

      const dayEvents = [];
      for (let idx = 0; idx < rawEvents.length; idx++) {
        const item = rawEvents[idx];
        const nextItem = rawEvents[idx + 1];
        const parsed = parseCellText(item.val);
        const slot = timeSlots[item.row] || { start: 9 * 60, end: 10 * 60 };

        let startM = slot.start;
        let endM = null;

        // Check if explicit time range inside text e.g. [5:30 - 8 PM]
        const mRange = item.val.match(/\[(\d+):?(\d*)\s*-\s*(\d+):?(\d*)\s*(AM|PM)\]/i);
        if (mRange) {
          let eh = parseInt(mRange[3], 10);
          let em = mRange[4] ? parseInt(mRange[4], 10) : 0;
          if (mRange[5].toUpperCase() === 'PM' && eh < 12) eh += 12;
          endM = eh * 60 + em;
        }

        if (!endM) {
          const nextStartM = nextItem ? (timeSlots[nextItem.row] ? timeSlots[nextItem.row].start : null) : null;
          const tLower = parsed.title.toLowerCase();

          if (tLower.includes('lunch')) {
            endM = startM + 60; // 1 hour lunch
          } else if (tLower.includes('lab')) {
            if (nextStartM && nextStartM - startM <= 120) {
              endM = nextStartM;
            } else {
              endM = startM + 90; // 1.5 hours
            }
          } else if (tLower.includes('foundation')) {
            endM = startM + 120; // 2 hours
          } else if (tLower.includes('academic clubs')) {
            endM = startM + 150; // 2.5 hours
          } else {
            // Lecture: 1 hour 45 minutes
            if (nextStartM && nextStartM < startM + 105) {
              endM = nextStartM;
            } else {
              endM = startM + 105;
            }
          }
        }

        dayEvents.push({
          row: item.row,
          title: parsed.title,
          instructor: parsed.instructor,
          location: parsed.location,
          batch: parsed.batch,
          startMinutes: startM,
          endMinutes: endM,
          startTimeFormatted: formatMinutesToTime(startM),
          endTimeFormatted: formatMinutesToTime(endM),
          raw: item.val
        });
      }

      fullSchedule[grp][dayName] = dayEvents;
    }
  }

  return fullSchedule;
}

function parseCellText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (!lines.length) return { title: 'Class', instructor: '', location: '', batch: '' };

  const raw = lines.join(' ');
  const isLunch = raw.toLowerCase().includes('lunch');
  if (isLunch) {
    return {
      title: 'Lunch Break',
      instructor: 'Recharge your Hunger Bar!',
      location: 'Cafeteria / Dining Hall',
      batch: ''
    };
  }

  const title = lines[0];
  let instructor = '';
  let location = '';
  let batch = '';

  const knownInstructors = ['Akansha', 'Shubham', 'Pushkar', 'Harsh', 'Ayush', 'Utkarsh', 'Dr. Noor', 'Fiza'];

  for (let i = 1; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('2030') || l.includes('Grp')) {
      batch = l;
    } else if (knownInstructors.some(name => l.includes(name))) {
      instructor = l.replace(/[()]/g, '').trim();
    } else if (l.includes('Class') || l.toLowerCase().includes('floor') || l.includes('EC SST')) {
      location = l.replace(/[()]/g, '').trim();
    } else if (!location && !l.includes('[') && !l.includes('PM')) {
      location = l;
    }
  }

  return { title, instructor, location, batch };
}

function parseTimeSlotToMinutes(str) {
  if (str.includes('After')) {
    return { start: 19 * 60 + 30, end: 21 * 60 };
  }
  const parts = str.split('-');
  if (parts.length !== 2) return { start: 9 * 60, end: 9 * 60 + 15 };

  const sStr = parts[0].trim();
  const eStr = parts[1].trim();
  const sMatch = sStr.match(/(\d+):(\d+)/);
  const eMatch = eStr.match(/(\d+):(\d+)/);

  if (!sMatch || !eMatch) return { start: 9 * 60, end: 9 * 60 + 15 };

  let sh = parseInt(sMatch[1], 10);
  let sm = parseInt(sMatch[2], 10);
  let eh = parseInt(eMatch[1], 10);
  let em = parseInt(eMatch[2], 10);

  if (sh < 9) sh += 12;
  if (eh < 9) eh += 12;

  return { start: sh * 60 + sm, end: eh * 60 + em };
}

function formatMinutesToTime(mins) {
  let h = Math.floor(mins / 60);
  const m = mins % 60;
  const period = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m.toString().padStart(2, '0')} ${period}`;
}

// ==========================================
// 5. SCHEDULE MATCHING & TIME LOGIC
// ==========================================
function getActiveTimeAndDay() {
  if (isSimulatorMode) {
    return {
      dayName: simDay,
      hours: simHours,
      minutes: simMinutes,
      totalMinutes: simHours * 60 + simMinutes,
      isSim: true
    };
  }

  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[now.getDay()];
  const h = now.getHours();
  const m = now.getMinutes();

  return {
    dayName: dayName,
    hours: h,
    minutes: m,
    seconds: now.getSeconds(),
    totalMinutes: h * 60 + m,
    isSim: false
  };
}

function calculateCurrentScheduleStatus() {
  const { dayName, totalMinutes, isSim, seconds = 0 } = getActiveTimeAndDay();
  const groupSched = (scheduleData && scheduleData[currentGroup]) ? scheduleData[currentGroup] : {};
  const todayClasses = groupSched[dayName] || [];

  // Check if weekend
  if (dayName === 'Saturday' || dayName === 'Sunday') {
    const mondayFirst = (groupSched['Monday'] && groupSched['Monday'][0]) ? groupSched['Monday'][0] : null;
    return {
      statusType: 'WEEKEND',
      statusBadge: 'WEEKEND MODE',
      badgeClass: 'mc-badge-done',
      title: 'Weekend Off! No Classes',
      location: 'Overworld / Campus',
      instructor: 'Rest & Recharge!',
      timeSlot: 'Saturday - Sunday',
      minsRemaining: 0,
      totalDuration: 1,
      progressPct: 100,
      nextClassTitle: mondayFirst ? mondayFirst.title : 'Monday Classes',
      nextClassTime: mondayFirst ? mondayFirst.startTimeFormatted : '9:30 AM',
      nextClassRoom: mondayFirst ? mondayFirst.location : 'Campus',
      nextClassCountdown: 'Starts Monday',
      notifBody: '🎉 Weekend! Rest easy, Crafter!'
    };
  }

  // Find class happening right now
  const currentClass = todayClasses.find(c => totalMinutes >= c.startMinutes && totalMinutes < c.endMinutes);

  if (currentClass) {
    const isLunch = currentClass.title.toLowerCase().includes('lunch');
    const totalDuration = currentClass.endMinutes - currentClass.startMinutes;
    const elapsedMinutes = totalMinutes - currentClass.startMinutes;
    const minsRemaining = Math.max(0, currentClass.endMinutes - totalMinutes);
    const secsRemaining = isSim ? 0 : Math.max(0, 59 - seconds);
    const progressPct = Math.min(100, Math.max(0, Math.round((elapsedMinutes / totalDuration) * 100)));

    // Find next class
    const nextClass = todayClasses.find(c => c.startMinutes >= currentClass.endMinutes);

    return {
      statusType: isLunch ? 'LUNCH' : 'IN_CLASS',
      statusBadge: isLunch ? '🍖 LUNCH TIME' : '⚔️ IN CLASS',
      badgeClass: isLunch ? 'mc-badge-lunch' : 'mc-badge-live',
      title: currentClass.title,
      location: currentClass.location || 'Scaler Campus',
      instructor: currentClass.instructor || (isLunch ? 'Enjoy your meal!' : 'Instructor'),
      timeSlot: `${currentClass.startTimeFormatted} - ${currentClass.endTimeFormatted}`,
      minsRemaining: minsRemaining,
      secsRemaining: secsRemaining,
      totalDuration: totalDuration,
      progressPct: progressPct,
      endMinutes: currentClass.endMinutes,
      nextClassTitle: nextClass ? nextClass.title : 'Day Concluded',
      nextClassTime: nextClass ? nextClass.startTimeFormatted : '--',
      nextClassRoom: nextClass ? nextClass.location : '--',
      nextClassCountdown: nextClass ? `Starts in ${nextClass.startMinutes - totalMinutes}m` : 'Last event today',
      notifBody: `⏳ ${minsRemaining}m left • 📍 ${currentClass.location || 'SST Room'}${nextClass ? ` • Next: ${nextClass.title}` : ''}`
    };
  }

  // If not currently in class, check if before first class, between classes (break), or after last class
  if (todayClasses.length > 0) {
    const nextClass = todayClasses.find(c => c.startMinutes > totalMinutes);

    if (nextClass) {
      const minsUntilNext = nextClass.startMinutes - totalMinutes;
      const secsRemaining = isSim ? 0 : Math.max(0, 59 - seconds);
      const isMorning = totalMinutes < todayClasses[0].startMinutes;

      return {
        statusType: 'BREAK',
        statusBadge: isMorning ? '🌅 BEFORE CLASS' : '⛏️ FREE BREAK',
        badgeClass: 'mc-badge-free',
        title: isMorning ? 'Free Time Before Classes' : 'Break Between Classes',
        location: 'Campus Lounge / Corridor',
        instructor: 'Prepare your inventory!',
        timeSlot: `Until ${nextClass.startTimeFormatted}`,
        minsRemaining: minsUntilNext,
        secsRemaining: secsRemaining,
        totalDuration: minsUntilNext,
        progressPct: 0,
        endMinutes: nextClass.startMinutes,
        nextClassTitle: nextClass.title,
        nextClassTime: nextClass.startTimeFormatted,
        nextClassRoom: nextClass.location,
        nextClassCountdown: `In ${minsUntilNext} mins`,
        notifBody: `⛏️ Free Time • Next: ${nextClass.title} in ${minsUntilNext}m (Room: ${nextClass.location})`
      };
    }
  }

  // All classes ended today
  const tomorrowDay = getTomorrowDayName(dayName);
  const tomorrowFirst = (groupSched[tomorrowDay] && groupSched[tomorrowDay][0]) ? groupSched[tomorrowDay][0] : null;

  return {
    statusType: 'DONE',
    statusBadge: '🌙 DAY CONCLUDED',
    badgeClass: 'mc-badge-done',
    title: 'All Classes Done for Today!',
    location: 'Hostel / Home',
    instructor: 'Rest well, Crafter!',
    timeSlot: 'Night Time',
    minsRemaining: 0,
    secsRemaining: 0,
    totalDuration: 1,
    progressPct: 100,
    nextClassTitle: tomorrowFirst ? tomorrowFirst.title : 'Tomorrow Morning',
    nextClassTime: tomorrowFirst ? tomorrowFirst.startTimeFormatted : '9:30 AM',
    nextClassRoom: tomorrowFirst ? tomorrowFirst.location : 'Campus',
    nextClassCountdown: `Starts ${tomorrowDay}`,
    notifBody: '✨ All classes completed for today! Rest easy, Crafter!'
  };
}

function getTomorrowDayName(current) {
  const map = {
    'Monday': 'Tuesday',
    'Tuesday': 'Wednesday',
    'Wednesday': 'Thursday',
    'Thursday': 'Friday',
    'Friday': 'Monday',
    'Saturday': 'Monday',
    'Sunday': 'Monday'
  };
  return map[current] || 'Monday';
}

// ==========================================
// 6. DASHBOARD & UI RENDERING
// ==========================================
function updateDashboard() {
  const status = calculateCurrentScheduleStatus();
  const { dayName } = getActiveTimeAndDay();

  // Status Badge
  const statusBadge = document.getElementById('currentStatusBadge');
  statusBadge.className = `mc-badge ${status.badgeClass}`;
  statusBadge.innerHTML = status.statusBadge;

  // Title & Metadata
  document.getElementById('currentClassTitle').textContent = status.title;
  document.getElementById('currentRoomText').textContent = status.location || 'N/A';
  document.getElementById('currentInstructorText').textContent = status.instructor || 'N/A';
  document.getElementById('currentTimeSlotText').textContent = status.timeSlot || '--';

  // Countdown Display
  const countdownTimer = document.getElementById('countdownTimer');
  const countdownLabel = document.getElementById('countdownLabel');
  const countdownSub = document.getElementById('countdownSub');

  if (status.statusType === 'WEEKEND' || status.statusType === 'DONE') {
    countdownLabel.textContent = 'STATUS';
    countdownTimer.textContent = 'ALL DONE';
    countdownTimer.style.color = '#80ff20';
    countdownSub.textContent = `Next encounter: ${status.nextClassTitle}`;
  } else {
    countdownLabel.textContent = status.statusType === 'BREAK' ? 'TIME UNTIL NEXT CLASS' : 'TIME REMAINING IN CURRENT CLASS';
    const mStr = String(status.minsRemaining).padStart(2, '0');
    const sStr = String(status.secsRemaining || 0).padStart(2, '0');
    countdownTimer.textContent = `${mStr}m ${sStr}s`;
    countdownTimer.style.color = status.minsRemaining <= 10 ? '#ff3b30' : '#17dd62';
    countdownSub.textContent = `Next up: ${status.nextClassTitle} (${status.nextClassTime})`;
  }

  // XP Progress Bar
  const xpLevel = document.getElementById('xpLevelText');
  const xpBarInner = document.getElementById('xpBarInner');
  xpLevel.textContent = `LVL ${status.minsRemaining}`;
  xpBarInner.style.width = `${status.progressPct}%`;

  // Hearts / Hunger Row
  renderStaminaIcons(status);

  // Next Class Card
  document.getElementById('nextClassTitle').textContent = status.nextClassTitle;
  document.getElementById('nextClassRoom').textContent = `Location: ${status.nextClassRoom || 'N/A'}`;
  document.getElementById('nextClassTime').textContent = status.nextClassTime;
  document.getElementById('nextCountdownText').textContent = status.nextClassCountdown;

  // Today's Quest Log
  renderTodayScheduleList(dayName);
}

function renderStaminaIcons(status) {
  const container = document.getElementById('staminaIconsRow');
  if (!container) return;

  const isLunch = status.statusType === 'LUNCH';
  const remainingCount = isLunch 
    ? Math.max(0, 10 - Math.round((status.progressPct / 100) * 10))
    : Math.min(10, Math.ceil((status.minsRemaining / (status.totalDuration || 105)) * 10));

  let fullIcon = '❤️';
  let emptyIcon = '🖤';

  if (currentTheme === 'pink') {
    fullIcon = isLunch ? '🍓' : '💖';
    emptyIcon = isLunch ? '🤍' : '🤍';
  } else if (currentTheme === 'minimal') {
    fullIcon = isLunch ? '🥪' : '●';
    emptyIcon = isLunch ? '○' : '○';
  } else {
    // Minecraft theme
    fullIcon = isLunch ? '🍗' : '❤️';
    emptyIcon = isLunch ? '🦴' : '🖤';
  }

  let html = '';
  for (let i = 0; i < 10; i++) {
    html += i < remainingCount ? fullIcon : emptyIcon;
  }
  container.innerHTML = html;
}

function renderTodayScheduleList(dayName) {
  const container = document.getElementById('todayScheduleList');
  const countLabel = document.getElementById('todayClassCount');
  document.getElementById('todayDayName').textContent = dayName;

  const groupSched = (scheduleData && scheduleData[currentGroup]) ? scheduleData[currentGroup] : {};
  const todayClasses = groupSched[dayName] || [];

  countLabel.textContent = `${todayClasses.length} session${todayClasses.length === 1 ? '' : 's'} scheduled`;

  if (!todayClasses.length) {
    container.innerHTML = `
      <div class="mc-well" style="text-align: center; color: #a0a0aa; font-size: 9px; padding: 20px;">
        ⛏️ No classes scheduled for ${dayName}. Rest easy!
      </div>
    `;
    return;
  }

  const { totalMinutes } = getActiveTimeAndDay();

  let html = '';
  todayClasses.forEach((c) => {
    const isCurrent = totalMinutes >= c.startMinutes && totalMinutes < c.endMinutes;
    const isPast = totalMinutes >= c.endMinutes;
    const isUpcoming = totalMinutes < c.startMinutes;

    let slotClass = '';
    let tagHtml = '';

    if (isCurrent) {
      slotClass = 'slot-current';
      tagHtml = '<span class="mc-slot-tag mc-tag-now">ACTIVE NOW</span>';
    } else if (isPast) {
      slotClass = 'slot-past';
      tagHtml = '<span class="mc-slot-tag mc-tag-past">COMPLETED</span>';
    } else {
      tagHtml = '<span class="mc-slot-tag mc-tag-future">UPCOMING</span>';
    }

    html += `
      <div class="mc-schedule-slot ${slotClass}">
        <div class="mc-slot-time">
          <span>${c.startTimeFormatted}</span>
          <span style="color: #8c8c96;">${c.endTimeFormatted}</span>
        </div>
        <div class="mc-slot-details">
          <div class="mc-slot-subject">${c.title}</div>
          <div class="mc-slot-room">📍 ${c.location || 'SST Room'} • 🧙 ${c.instructor || 'Faculty'}</div>
        </div>
        <div>
          ${tagHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Weekly Table inside Modal
function renderWeeklyTimetableModal() {
  const tableBody = document.getElementById('weeklyTableBody');
  document.getElementById('modalGroupLabel').textContent = `GROUP ${currentGroup}`;

  const groupSched = (scheduleData && scheduleData[currentGroup]) ? scheduleData[currentGroup] : {};
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  let html = '';
  days.forEach((day) => {
    const classes = groupSched[day] || [];
    let classesHtml = '';

    if (!classes.length) {
      classesHtml = '<span style="color: #6c6c74;">No scheduled events</span>';
    } else {
      classes.forEach((c) => {
        const isLunch = c.title.toLowerCase().includes('lunch');
        classesHtml += `
          <div class="class-chip ${isLunch ? 'lunch' : ''}">
            <strong style="color: #ffd700;">${c.startTimeFormatted} - ${c.endTimeFormatted}</strong>: 
            <span>${c.title}</span>
            <div style="font-size: 7px; color: #a4a4b2; margin-top: 2px;">
              📍 ${c.location || 'Campus'} ${c.instructor ? `• ${c.instructor}` : ''}
            </div>
          </div>
        `;
      });
    }

    html += `
      <tr>
        <td style="font-weight: bold; color: #4dedf4;">${day}</td>
        <td>${classesHtml}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

// Realtime Clock Tick
function tickRealtimeClock() {
  const clock = document.getElementById('currentTimeText');
  const dayNightIcon = document.getElementById('dayNightIcon');
  let currentHour = 12;

  if (isSimulatorMode) {
    currentHour = simHours;
    const h12 = simHours % 12 === 0 ? 12 : simHours % 12;
    const p = simHours < 12 ? 'AM' : 'PM';
    clock.textContent = `[SIM] ${h12}:${simMinutes.toString().padStart(2, '0')} ${p}`;
    dayNightIcon.textContent = (simHours >= 6 && simHours < 18) ? '☀️' : '🌙';
  } else {
    const now = new Date();
    currentHour = now.getHours();
    clock.textContent = now.toLocaleTimeString();
    dayNightIcon.textContent = (currentHour >= 6 && currentHour < 18) ? '☀️' : '🌙';
  }

  // Update dynamic day/night ambient sky lighting
  updateDayNightLighting(currentHour);

  // Trigger luxury chronograph ticker micro-pulse
  const countdownTimer = document.getElementById('countdownTimer');
  if (countdownTimer) {
    countdownTimer.classList.remove('tick-pulse');
    void countdownTimer.offsetWidth; // trigger reflow
    countdownTimer.classList.add('tick-pulse');
  }

  updateDashboard();

  // Send update to sticky notification every minute
  const s = new Date().getSeconds();
  if (s === 0) {
    updateStickyNotification();
  }
}

// ==========================================
// 6.5. THEME MANAGER (MINECRAFT / MINIMAL / CUTE PINK)
// ==========================================
function applyTheme(themeName, showFeedback = true) {
  if (!['minecraft', 'minimal', 'pink'].includes(themeName)) {
    themeName = 'minecraft';
  }
  currentTheme = themeName;
  localStorage.setItem('sst_ui_theme', themeName);
  document.body.setAttribute('data-theme', themeName);

  // Trigger smooth portal transition curtain
  const curtain = document.getElementById('themeCurtain');
  if (curtain) {
    curtain.classList.add('active');
    setTimeout(() => {
      curtain.classList.remove('active');
    }, 240);
  }

  // Update theme logo icon and header titles
  const themeLogoIcon = document.getElementById('themeLogoIcon');
  const appTitle = document.getElementById('appTitleText');
  const appSubtitle = document.getElementById('appSubtitleText');

  if (themeName === 'pink') {
    if (themeLogoIcon) themeLogoIcon.textContent = '🌸';
    if (appTitle) appTitle.textContent = 'SST STUDY HUB ✨';
    if (appSubtitle) appSubtitle.textContent = 'CUTE SCHEDULE TRACKER 🎀';
  } else if (themeName === 'minimal') {
    if (themeLogoIcon) themeLogoIcon.textContent = '⚡';
    if (appTitle) appTitle.textContent = 'SST SCHEDULE';
    if (appSubtitle) appSubtitle.textContent = 'LIVE COLLEGE TIMETABLE';
  } else {
    if (themeLogoIcon) themeLogoIcon.textContent = '🟩';
    if (appTitle) appTitle.textContent = 'SST CRAFT';
    if (appSubtitle) appSubtitle.textContent = 'COLLEGE SCHEDULE & LIVE TRACKER';
  }

  // Update modal cards active state
  document.querySelectorAll('.theme-card').forEach((card) => {
    const choice = card.dataset.themeChoice;
    if (choice === themeName) {
      card.classList.add('active');
      card.setAttribute('aria-pressed', 'true');
    } else {
      card.classList.remove('active');
      card.setAttribute('aria-pressed', 'false');
    }
  });

  // Re-render ambient particles for the new theme
  if (typeof resetParticlesForTheme === 'function') {
    resetParticlesForTheme();
  }

  // Re-render UI components with theme-specific nuances
  updateDashboard();

  if (showFeedback) {
    playThemeSound('portal');
    const names = {
      minecraft: 'Minecraft UI 🟩',
      minimal: 'Minimal Clean UI ⚡',
      pink: 'Cute Pink UI 🌸'
    };
    showToast(`Switched to ${names[themeName] || themeName}!`);
  }
}

// ==========================================
// 7. EVENT LISTENERS & CONTROLS
// ==========================================
function setupUIEventListeners() {
  // Theme Modal controls
  const themeModal = document.getElementById('themeModal');
  const themeSwitchBtn = document.getElementById('themeSwitchBtn');
  const closeThemeModalBtn = document.getElementById('closeThemeModalBtn');

  if (themeSwitchBtn) {
    themeSwitchBtn.addEventListener('click', () => {
      playMinecraftSound();
      if (themeModal) themeModal.classList.add('open');
    });
  }

  if (closeThemeModalBtn) {
    closeThemeModalBtn.addEventListener('click', () => {
      playMinecraftSound();
      if (themeModal) themeModal.classList.remove('open');
    });
  }

  if (themeModal) {
    themeModal.addEventListener('click', (e) => {
      if (e.target === themeModal) {
        themeModal.classList.remove('open');
      }
    });
  }

  // Theme option cards selection
  document.querySelectorAll('.theme-card').forEach((card) => {
    card.addEventListener('click', () => {
      const chosen = card.dataset.themeChoice;
      if (chosen) {
        applyTheme(chosen, true);
        setTimeout(() => {
          if (themeModal) themeModal.classList.remove('open');
        }, 250);
      }
    });
  });

  // Notification buttons
  document.getElementById('enableNotifBtn').addEventListener('click', requestNotificationPermission);
  document.getElementById('testNotifBtn').addEventListener('click', () => {
    playMinecraftSound();
    updateStickyNotification();
    showToast('Sent sticky notification update!');
  });

  // Sound toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('sst_sound_enabled', soundEnabled);
    soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
    playMinecraftSound();
    showToast(soundEnabled ? 'Minecraft sounds enabled' : 'Sounds muted');
  });

  // Refresh Cloud Data
  document.getElementById('refreshDataBtn').addEventListener('click', async () => {
    playMinecraftSound();
    showToast('Fetching latest schedule from Google Sheet...');
    await fetchLatestGoogleSheet();
  });

  // Modal controls
  const modal = document.getElementById('timetableModal');
  document.getElementById('openTimetableBtn').addEventListener('click', () => {
    playMinecraftSound();
    renderWeeklyTimetableModal();
    modal.classList.add('open');
  });
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    playMinecraftSound();
    modal.classList.remove('open');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  // Simulator controls
  const simToggleBtn = document.getElementById('simToggleBtn');
  const simResetBtn = document.getElementById('simResetBtn');
  const simControlsBody = document.getElementById('simControlsBody');
  const simDaySelect = document.getElementById('simDaySelect');
  const simTimeInput = document.getElementById('simTimeInput');

  simToggleBtn.addEventListener('click', () => {
    playMinecraftSound();
    isSimulatorMode = !isSimulatorMode;
    if (isSimulatorMode) {
      simControlsBody.style.display = 'flex';
      simResetBtn.style.display = 'inline-flex';
      simToggleBtn.textContent = 'EXIT SIMULATOR';
      simToggleBtn.className = 'mc-btn mc-btn-red';
      simDay = simDaySelect.value;
      const [h, m] = simTimeInput.value.split(':').map(Number);
      simHours = h;
      simMinutes = m;
      showToast('Entered Creative Mode: Time Simulator!');
    } else {
      exitSimulator();
    }
    updateDashboard();
  });

  simResetBtn.addEventListener('click', () => {
    playMinecraftSound();
    exitSimulator();
  });

  simDaySelect.addEventListener('change', (e) => {
    playMinecraftSound();
    simDay = e.target.value;
    updateDashboard();
  });

  simTimeInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val) {
      const [h, m] = val.split(':').map(Number);
      simHours = h;
      simMinutes = m;
      updateDashboard();
      updateStickyNotification();
    }
  });

  // Preset buttons
  document.querySelectorAll('.sim-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      playMinecraftSound();
      const t = btn.dataset.time;
      simTimeInput.value = t;
      const [h, m] = t.split(':').map(Number);
      simHours = h;
      simMinutes = m;
      updateDashboard();
      updateStickyNotification();
      showToast(`Jumped to simulated ${t}`);
    });
  });
}

function exitSimulator() {
  isSimulatorMode = false;
  document.getElementById('simControlsBody').style.display = 'none';
  document.getElementById('simResetBtn').style.display = 'none';
  const toggleBtn = document.getElementById('simToggleBtn');
  toggleBtn.textContent = 'ENTER SIMULATOR';
  toggleBtn.className = 'mc-btn mc-btn-gold';
  showToast('Returned to Live Real-Time!');
  updateDashboard();
}

function setupGroupButtons() {
  const container = document.getElementById('groupButtonsContainer');
  const buttons = container.querySelectorAll('.mc-group-btn');

  function updateActiveGroupUI() {
    buttons.forEach((btn) => {
      const g = btn.dataset.group;
      if (g === currentGroup) {
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.group;
      if (selected !== currentGroup) {
        currentGroup = selected;
        localStorage.setItem('sst_schedule_group', currentGroup);
        playMinecraftSound();
        updateActiveGroupUI();
        updateDashboard();
        updateStickyNotification();
        showToast(`Switched to Group ${currentGroup} (Saved)`);
      }
    });
  });

  updateActiveGroupUI();
}

// ==========================================
// 8. MULTI-THEME AUDIO SYNTHESIZERS
// ==========================================
function initAudio() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  } catch (e) {
    console.warn('AudioContext not available:', e);
  }
}

function playThemeSound(type = 'click') {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const t = audioCtx.currentTime;

    if (type === 'portal') {
      // Atmospheric portal shimmer sweep
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, t);
      osc.frequency.exponentialRampToValueAtTime(840, t + 0.22);
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.22);
      return;
    }

    if (currentTheme === 'pink') {
      // Whimsical fairy bell arpeggio (3 crystalline pentatonic notes)
      const notes = [587.33, 739.99, 880.00]; // D5, F#5, A5
      notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + i * 0.035);
        gain.gain.setValueAtTime(0.14, t + i * 0.035);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.035 + 0.16);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t + i * 0.035);
        osc.stop(t + i * 0.035 + 0.16);
      });
    } else if (currentTheme === 'minimal') {
      // Crisp high-tech glass tap
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, t);
      osc.frequency.exponentialRampToValueAtTime(450, t + 0.04);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.04);
    } else {
      // Minecraft classic 8-bit blocky snap
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.08);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.08);
    }
  } catch (err) {
    // Ignore audio autoplay restrictions
  }
}

function playMinecraftSound() {
  playThemeSound('click');
}

// ==========================================
// 9. DYNAMIC DAY/NIGHT SKY LIGHTING
// ==========================================
function updateDayNightLighting(hours) {
  const skyOverlay = document.getElementById('skyOverlay');
  if (!skyOverlay) return;

  let timePhase = 'sky-night';
  if (hours >= 6 && hours < 12) {
    timePhase = 'sky-morning';
  } else if (hours >= 12 && hours < 17) {
    timePhase = 'sky-afternoon';
  } else if (hours >= 17 && hours < 20) {
    timePhase = 'sky-evening';
  } else {
    timePhase = 'sky-night';
  }

  if (!skyOverlay.classList.contains(timePhase)) {
    skyOverlay.className = `ambient-sky-gradient ${timePhase}`;
    document.body.setAttribute('data-lighting', timePhase);
  }
}

// ==========================================
// 10. AMBIENT PARTICLE CANVAS ENGINE
// ==========================================
let ambientCanvas = null;
let ambientCtx = null;
let ambientParticles = [];
let animFrameId = null;

function initAmbientEngine() {
  ambientCanvas = document.getElementById('ambientCanvas');
  if (!ambientCanvas) return;
  ambientCtx = ambientCanvas.getContext('2d');
  resizeAmbientCanvas();
  window.addEventListener('resize', resizeAmbientCanvas);
  resetParticlesForTheme();
  if (animFrameId) cancelAnimationFrame(animFrameId);
  renderAmbientParticles();
}

function resizeAmbientCanvas() {
  if (!ambientCanvas) return;
  ambientCanvas.width = window.innerWidth;
  ambientCanvas.height = window.innerHeight;
}

function resetParticlesForTheme() {
  ambientParticles = [];
  const w = window.innerWidth || 1200;
  const h = window.innerHeight || 800;

  if (currentTheme === 'pink') {
    // Ultra-rare, serene drift: only 4 delicate sakura petals + 2 subtle sparkles
    for (let i = 0; i < 4; i++) {
      ambientParticles.push({
        type: 'sakura',
        x: Math.random() * w,
        y: Math.random() * h,
        size: 5 + Math.random() * 4,
        speedY: 0.22 + Math.random() * 0.28,
        swaySpeed: 0.01 + Math.random() * 0.014,
        swayRange: 0.8 + Math.random() * 1.0,
        sway: Math.random() * Math.PI * 2,
        angle: Math.random() * Math.PI * 2,
        angSpeed: (Math.random() - 0.5) * 0.015,
        color: ['#f472b6', '#fbcfe8', '#fda4af', '#f43f5e'][Math.floor(Math.random() * 4)]
      });
    }
    for (let i = 0; i < 2; i++) {
      ambientParticles.push({
        type: 'sparkle',
        x: Math.random() * w,
        y: Math.random() * h,
        size: 1.5 + Math.random() * 1.5,
        alpha: Math.random(),
        alphaSpeed: 0.008 + Math.random() * 0.01
      });
    }
  } else if (currentTheme === 'minimal') {
    // 40 Geometric Constellation Nodes
    for (let i = 0; i < 40; i++) {
      ambientParticles.push({
        type: 'node',
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1.5 + Math.random() * 2,
        color: Math.random() > 0.5 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(129, 140, 248, 0.35)'
      });
    }
  } else {
    // Minecraft: 35 Floating Torch Embers + 4 Drifting Pixel Clouds
    for (let i = 0; i < 35; i++) {
      ambientParticles.push({
        type: 'ember',
        x: Math.random() * w,
        y: h - Math.random() * (h * 0.8),
        size: Math.floor(2 + Math.random() * 3),
        speedY: 0.5 + Math.random() * 1.2,
        sway: Math.random() * Math.PI * 2,
        color: ['#ffaa00', '#ffd700', '#ff5500', '#ff7700'][Math.floor(Math.random() * 4)],
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 80
      });
    }
    for (let i = 0; i < 4; i++) {
      ambientParticles.push({
        type: 'cloud',
        x: Math.random() * w,
        y: 20 + i * 65 + Math.random() * 30,
        width: 120 + Math.random() * 100,
        height: 24 + Math.random() * 16,
        speedX: 0.2 + Math.random() * 0.25
      });
    }
  }
}

function renderAmbientParticles() {
  if (!ambientCtx || !ambientCanvas) return;
  const w = ambientCanvas.width;
  const h = ambientCanvas.height;

  ambientCtx.clearRect(0, 0, w, h);

  if (currentTheme === 'pink') {
    ambientParticles.forEach((p) => {
      if (p.type === 'sakura') {
        p.y += p.speedY;
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * p.swayRange;
        p.angle += p.angSpeed;

        if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
        if (p.x > w + 20) p.x = -20;
        if (p.x < -20) p.x = w + 20;

        ambientCtx.save();
        ambientCtx.translate(p.x, p.y);
        ambientCtx.rotate(p.angle);
        ambientCtx.fillStyle = p.color;
        ambientCtx.globalAlpha = 0.38;
        ambientCtx.beginPath();
        ambientCtx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
        ambientCtx.fill();
        ambientCtx.restore();
      } else if (p.type === 'sparkle') {
        p.alpha += p.alphaSpeed;
        if (p.alpha > 1 || p.alpha < 0) p.alphaSpeed = -p.alphaSpeed;
        ambientCtx.save();
        ambientCtx.fillStyle = '#ffd700';
        ambientCtx.globalAlpha = Math.max(0, Math.min(1, p.alpha)) * 0.7;
        drawSparkleStar(ambientCtx, p.x, p.y, p.size);
        ambientCtx.restore();
      }
    });
  } else if (currentTheme === 'minimal') {
    // Draw constellation lines
    for (let i = 0; i < ambientParticles.length; i++) {
      for (let j = i + 1; j < ambientParticles.length; j++) {
        const dx = ambientParticles[i].x - ambientParticles[j].x;
        const dy = ambientParticles[i].y - ambientParticles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ambientCtx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 100)})`;
          ambientCtx.lineWidth = 1;
          ambientCtx.beginPath();
          ambientCtx.moveTo(ambientParticles[i].x, ambientParticles[i].y);
          ambientCtx.lineTo(ambientParticles[j].x, ambientParticles[j].y);
          ambientCtx.stroke();
        }
      }
    }

    ambientParticles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx = -p.vx;
      if (p.y < 0 || p.y > h) p.vy = -p.vy;

      ambientCtx.beginPath();
      ambientCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ambientCtx.fillStyle = p.color;
      ambientCtx.fill();
    });
  } else {
    // Minecraft Theme
    ambientParticles.forEach((p) => {
      if (p.type === 'cloud') {
        p.x += p.speedX;
        if (p.x > w + p.width) p.x = -p.width;
        ambientCtx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ambientCtx.fillRect(Math.floor(p.x), Math.floor(p.y), p.width, p.height);
      } else if (p.type === 'ember') {
        p.y -= p.speedY;
        p.sway += 0.03;
        p.x += Math.sin(p.sway) * 0.4;
        p.life++;

        if (p.y < 0 || p.life > p.maxLife) {
          p.y = h + 10;
          p.x = Math.random() * w;
          p.life = 0;
        }

        const alpha = Math.max(0, 1 - p.life / p.maxLife);
        ambientCtx.fillStyle = p.color;
        ambientCtx.globalAlpha = alpha * 0.8;
        ambientCtx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      }
    });
  }

  animFrameId = requestAnimationFrame(renderAmbientParticles);
}

function drawSparkleStar(ctx, cx, cy, r) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 2);
  ctx.lineTo(cx + r * 0.5, cy - r * 0.5);
  ctx.lineTo(cx + r * 2, cy);
  ctx.lineTo(cx + r * 0.5, cy + r * 0.5);
  ctx.lineTo(cx, cy + r * 2);
  ctx.lineTo(cx - r * 0.5, cy + r * 0.5);
  ctx.lineTo(cx - r * 2, cy);
  ctx.lineTo(cx - r * 0.5, cy - r * 0.5);
  ctx.closePath();
  ctx.fill();
}

// ==========================================
// 11. CLICK MICRO-INTERACTIONS (RIPPLE & SPARKLES)
// ==========================================
function attachMicroInteractions() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .mc-btn, .mc-group-btn, .mc-logo-block, .theme-card, .mc-schedule-slot');
    if (btn) {
      createButtonRipple(btn, e);
      createClickParticles(e.clientX, e.clientY);
    }
  });
}

function createButtonRipple(btn, e) {
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'btn-ripple';
  const size = Math.max(rect.width, rect.height) * 2;
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

function createClickParticles(x, y) {
  const particleCount = 5;
  const emojis = {
    minecraft: ['🟩', '🟢', '⛏️', '💎', '✨'],
    minimal: ['⚡', '✦', '💠', '🔹', '•'],
    pink: ['💖', '🌸', '🎀', '✨', '🍓']
  }[currentTheme] || ['✨', '⭐'];

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('span');
    p.className = 'click-particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
    const dist = 35 + Math.random() * 45;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 15;
    const rot = (Math.random() - 0.5) * 180;

    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}

// Toast Popup
function showToast(msg) {
  const toast = document.getElementById('mcToast');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

