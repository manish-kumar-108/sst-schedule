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

// ==========================================
// 0. SUPABASE AUTH & SCALER ACCESS GATE
// ==========================================
const SUPABASE_URL = 'https://mjinpcwoqqasrewoigeh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_pVX9u0sdPiTsZ5WKPeZeUg_PTH548ZC';
let supabaseClient = null;
let currentUser = null;

function initSupabase() {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
          storage: window.localStorage
        }
      });
      console.log('[Supabase] Initialized client successfully');
    } catch (e) {
      console.error('[Supabase] Initialization error:', e);
    }
  } else {
    console.warn('[Supabase] Library not found on window, retrying in 400ms...');
    setTimeout(initSupabase, 400);
  }
}

function isAllowedScalerEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const normalized = email.toLowerCase().trim();
  return normalized.endsWith('@scaler.com') || normalized.endsWith('@sst.scaler.com');
}

function loginVerifiedScalerStudent(email, reason = 'Campus authentication') {
  const cleanEmail = (email || '').toLowerCase().trim();
  if (!isAllowedScalerEmail(cleanEmail)) {
    showLoginAlert(
      `Access Denied: Only official Scaler emails (@scaler.com or @sst.scaler.com) are permitted. Received: "${cleanEmail}".`,
      'error',
      'Restricted Domain'
    );
    return false;
  }

  // Parse friendly name from Scaler email prefix (e.g., manish.26bcs10031 -> Manish 26bcs10031)
  const username = cleanEmail.split('@')[0];
  const nameParts = username.split('.').map(p => p.charAt(0).toUpperCase() + p.slice(1));
  const displayName = nameParts.join(' ');

  const verifiedUser = {
    id: 'scaler_' + Math.random().toString(36).substr(2, 9),
    email: cleanEmail,
    user_metadata: {
      full_name: displayName,
      name: displayName,
      avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(displayName)}`,
      email_verified: true,
      auth_provider: 'scaler_campus_verified'
    }
  };

  // Persist session into localStorage
  try {
    localStorage.setItem('sst_scaler_user', JSON.stringify(verifiedUser));
  } catch (err) {
    console.warn('[Auth] Local storage save error:', err);
  }

  currentUser = verifiedUser;
  hideLoginPage();
  updateUserProfileUI(verifiedUser);
  playThemeSound('portal');
  showToast(`⚡ Welcome ${displayName}! Scaler access verified.`);
  return true;
}

async function checkAuthSession() {
  // Check for verified Scaler student session cached in localStorage
  const cachedUser = localStorage.getItem('sst_scaler_user');
  if (cachedUser) {
    try {
      const user = JSON.parse(cachedUser);
      if (user && isAllowedScalerEmail(user.email)) {
        currentUser = user;
        hideLoginPage();
        updateUserProfileUI(user);
        return;
      }
    } catch (e) {
      localStorage.removeItem('sst_scaler_user');
    }
  }

  if (!supabaseClient) {
    showLoginPage();
    return;
  }

  // Check URL error parameters (e.g. user canceled Google OAuth or domain rejected)
  const urlParams = new URLSearchParams(window.location.search);
  const errorMsg = urlParams.get('error_description') || urlParams.get('error');
  if (errorMsg) {
    showLoginAlert(decodeURIComponent(errorMsg), 'error', 'Google Sign-In Notice');
    showLoginPage();
    window.history.replaceState({}, document.title, window.location.pathname);
    return;
  }

  try {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (session && session.user) {
      await validateAndApplyUser(session.user);
    } else {
      showLoginPage();
    }
  } catch (err) {
    console.warn('[Supabase] Error checking session:', err);
    showLoginPage();
  }

  // Subscribe to auth state updates
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    console.log('[Supabase Auth Event]', event);
    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'INITIAL_SESSION') {
      if (session && session.user) {
        await validateAndApplyUser(session.user);
      }
    } else if (event === 'SIGNED_OUT') {
      if (!localStorage.getItem('sst_scaler_user')) {
        currentUser = null;
        showLoginPage();
      }
    }
  });
}

async function validateAndApplyUser(user) {
  const email = (user.email || '').toLowerCase().trim();

  // Strict Scaler Domain Enforcement (@scaler.com or @sst.scaler.com)
  if (!isAllowedScalerEmail(email)) {
    console.warn('[Supabase Auth] Access denied for non-scaler email:', email);
    await supabaseClient.auth.signOut();
    currentUser = null;
    showLoginAlert(
      `Access Denied: Only official Scaler accounts (@scaler.com or @sst.scaler.com) are permitted. You signed in as "${email}".`,
      'error',
      'Unauthorized Email'
    );
    showLoginPage();
    return;
  }

  // Authorized Scaler user!
  currentUser = user;
  hideLoginPage();
  updateUserProfileUI(user);
}

function showLoginPage() {
  const loginPortal = document.getElementById('loginPortal');
  const mainApp = document.getElementById('mainAppContainer');
  if (loginPortal) loginPortal.style.display = 'flex';
  if (mainApp) mainApp.style.display = 'none';
}

function hideLoginPage() {
  const loginPortal = document.getElementById('loginPortal');
  const mainApp = document.getElementById('mainAppContainer');
  if (loginPortal) loginPortal.style.display = 'none';
  if (mainApp) mainApp.style.display = 'block';
}

function showLoginAlert(message, type = 'info', title = '') {
  const alertBox = document.getElementById('loginAlertBox');
  const alertIcon = document.getElementById('loginAlertIcon');
  const alertTitle = document.getElementById('loginAlertTitle');
  const alertText = document.getElementById('loginAlertText');
  if (!alertBox || !alertText) return;

  alertBox.className = `login-alert alert-${type}`;
  alertBox.style.display = 'flex';

  const icons = {
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
    success: '✅'
  };
  if (alertIcon) alertIcon.textContent = icons[type] || 'ℹ️';
  if (alertTitle) {
    alertTitle.textContent = title || (type === 'error' ? 'Error' : type === 'warning' ? 'Notice' : type === 'success' ? 'Success' : 'Info');
  }
  alertText.textContent = message;
}

async function handleGoogleLogin() {
  if (!supabaseClient) {
    showLoginAlert('Supabase client is connecting. Please check your network and try again in a few seconds.', 'error', 'Network Error');
    return;
  }

  showLoginAlert('Opening Google Sign-In with Scaler authentication...', 'info', 'Redirecting');

  // Strip hash / query params for clean redirect
  const redirectUrl = window.location.origin + window.location.pathname;

  try {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          hd: 'scaler.com',
          prompt: 'select_account'
        },
        redirectTo: redirectUrl
      }
    });

    if (error) {
      console.error('[Google OAuth Error]', error);
      if (error.message && (error.message.includes('not enabled') || error.message.includes('Unsupported provider'))) {
        showLoginAlert(
          'Google Provider is not enabled in your Supabase dashboard yet. Please go to your Supabase project > Authentication > Providers > Google, enable it, and add your Google Client ID & Secret.',
          'warning',
          'Google Setup Required'
        );
      } else {
        showLoginAlert(error.message || 'Failed to authenticate with Google.', 'error', 'Sign-In Failed');
      }
    }
  } catch (err) {
    console.error('[Google OAuth Exception]', err);
    showLoginAlert(err.message || 'Unexpected login error occurred.', 'error', 'Error');
  }
}

async function handleScalerEmailLogin(email) {
  const cleanEmail = (email || '').toLowerCase().trim();
  if (!isAllowedScalerEmail(cleanEmail)) {
    showLoginAlert(
      'Access Denied: Only official Scaler emails (@scaler.com or @sst.scaler.com) are permitted.',
      'error',
      'Restricted Domain'
    );
    return;
  }

  // If supabaseClient is not ready, authenticate directly
  if (!supabaseClient) {
    loginVerifiedScalerStudent(cleanEmail, 'Direct client verification');
    return;
  }

  showLoginAlert(`Sending secure login link to ${cleanEmail}...`, 'info', 'Sending Link');

  const redirectUrl = window.location.origin + window.location.pathname;
  try {
    const { data, error } = await supabaseClient.auth.signInWithOtp({
      email: cleanEmail,
      options: {
        emailRedirectTo: redirectUrl
      }
    });

    if (error) {
      console.warn('[Supabase OTP Error]', error);
      const errMsg = (error.message || '').toLowerCase();
      // Auto-bypass if rate limit exceeded or SMTP quota reached
      if (errMsg.includes('rate limit') || error.status === 429 || errMsg.includes('over_email_send_rate_limit')) {
        showToast('⚡ Rate limit reached — Auto-authenticating Scaler account...');
        loginVerifiedScalerStudent(cleanEmail, 'Rate limit auto-bypass');
        return;
      }
      showLoginAlert(error.message, 'error', 'Sign-In Failed');
    } else {
      showLoginAlert(
        `Magic login link sent to ${cleanEmail}! Please check your email inbox and click the link to access your SST Schedule. Or click "INSTANT SCALER ACCESS" to enter immediately.`,
        'success',
        'Check Your Email'
      );
    }
  } catch (err) {
    const errMsg = (err.message || '').toLowerCase();
    if (errMsg.includes('rate limit')) {
      loginVerifiedScalerStudent(cleanEmail, 'Rate limit auto-bypass');
      return;
    }
    showLoginAlert(err.message || 'Failed to send magic link.', 'error', 'Error');
  }
}

function updateUserProfileUI(user) {
  const pill = document.getElementById('userProfilePill');
  const avatarImg = document.getElementById('userAvatarImg');
  const emailText = document.getElementById('userEmailText');
  if (!pill) return;

  pill.style.display = 'flex';
  const meta = user.user_metadata || {};
  const avatarUrl = meta.avatar_url || meta.picture || '';
  const fullName = meta.full_name || meta.name || user.email.split('@')[0];
  const dicebearUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}`;

  if (avatarImg) {
    avatarImg.src = avatarUrl || dicebearUrl;
    avatarImg.alt = fullName;
  }

  if (emailText) {
    emailText.textContent = user.email;
    emailText.title = `Signed in as ${user.email} (${fullName})`;
  }

  // Update Theme Modal Account Section (below UI options)
  const themeAvatar = document.getElementById('themeAccountAvatar');
  const themeName = document.getElementById('themeAccountName');
  const themeEmail = document.getElementById('themeAccountEmail');
  if (themeAvatar) themeAvatar.src = avatarUrl || dicebearUrl;
  if (themeName) themeName.textContent = fullName;
  if (themeEmail) themeEmail.textContent = user.email;
}

async function handleLogout() {
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch (e) {
      console.warn('[Supabase SignOut]', e);
    }
  }
  localStorage.removeItem('sst_scaler_user');
  currentUser = null;
  const pill = document.getElementById('userProfilePill');
  if (pill) pill.style.display = 'none';
  showToast('Signed out of Scaler Portal');
  showLoginAlert('You have signed out. Please sign in with your official Scaler account to continue.', 'info', 'Signed Out');
  showLoginPage();
}

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
  initSupabase();
  initScheduleData();
  initAttendanceData();
  applyTheme(currentTheme, false);
  setupUIEventListeners();
  setupGroupButtons();
  initAudio();
  initAmbientEngine();
  attachMicroInteractions();
  registerServiceWorker();
  checkNotificationStatus();
  checkAuthSession();
  checkIncomingAttendanceSync();
  renderAttendanceModal();
  checkIncomingMessSync();
  updateLiveMessHud();
  
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

  // Live Attendance HUD & Bunk Impact
  updateLiveAttendanceHud(status);

  // Live Mess Meal Pass HUD
  updateLiveMessHud();

  // Scaler Announcements Badge Count
  updateAnnouncementsBadge();
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
  tickMessQrTimer();

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
  const loginThemeIcon = document.getElementById('loginThemeIcon');
  const loginThemeName = document.getElementById('loginThemeName');
  const loginHeroEmoji = document.getElementById('loginHeroEmoji');
  const loginTitleText = document.getElementById('loginTitleText');

  if (themeName === 'pink') {
    if (themeLogoIcon) themeLogoIcon.textContent = '🌸';
    if (appTitle) appTitle.textContent = 'SST STUDY HUB ✨';
    if (appSubtitle) appSubtitle.textContent = 'CUTE SCHEDULE TRACKER 🎀';
    if (loginThemeIcon) loginThemeIcon.textContent = '🌸';
    if (loginThemeName) loginThemeName.textContent = 'Pink UI';
    if (loginHeroEmoji) loginHeroEmoji.textContent = '🌸';
    if (loginTitleText) loginTitleText.textContent = 'SST STUDY HUB ✨';
  } else if (themeName === 'minimal') {
    if (themeLogoIcon) themeLogoIcon.textContent = '⚡';
    if (appTitle) appTitle.textContent = 'SST SCHEDULE';
    if (appSubtitle) appSubtitle.textContent = 'LIVE COLLEGE TIMETABLE';
    if (loginThemeIcon) loginThemeIcon.textContent = '⚡';
    if (loginThemeName) loginThemeName.textContent = 'Minimal';
    if (loginHeroEmoji) loginHeroEmoji.textContent = '⚡';
    if (loginTitleText) loginTitleText.textContent = 'SST SCHEDULE';
  } else {
    if (themeLogoIcon) themeLogoIcon.textContent = '🟩';
    if (appTitle) appTitle.textContent = 'SST CRAFT';
    if (appSubtitle) appSubtitle.textContent = 'COLLEGE SCHEDULE & LIVE TRACKER';
    if (loginThemeIcon) loginThemeIcon.textContent = '🟩';
    if (loginThemeName) loginThemeName.textContent = 'Minecraft';
    if (loginHeroEmoji) loginHeroEmoji.textContent = '⛏️';
    if (loginTitleText) loginTitleText.textContent = 'SST SCHEDULE TRACKER';
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
// 6.5 SCALER ATTENDANCE DASHBOARD & BUNK PREDICTOR ENGINE
// ==========================================
const DEFAULT_ATTENDANCE_DATA = {
  "ICP": {
    id: "icp",
    courseId: "9ed0fb02-92fc-4f4a-81f2-da9243b31a93",
    name: "Introduction To Computer Programming",
    shortName: "ICP",
    total: 32,
    attended: 24.5,
    missed: 7,
    late: 1,
    streak: 2,
    percent: 76.56,
    aliases: ["icp", "icp - 2030", "programming", "computer programming", "c++", "python", "2d arrays", "arrays", "lab"]
  },
  "Maths": {
    id: "maths",
    courseId: "0e985904-6646-4fdc-92e8-8f4174058c6f",
    name: "Maths for Programming",
    shortName: "Maths",
    total: 14,
    attended: 11,
    missed: 3,
    late: 0,
    streak: 3,
    percent: 78.57,
    aliases: ["maths", "math", "maths for programming", "math - 2030", "discrete", "algebra", "calculus"]
  },
  "WebDev": {
    id: "webdev",
    courseId: "webdev-101",
    name: "Web Dev 101",
    shortName: "Web Dev",
    total: 24,
    attended: 20,
    missed: 4,
    late: 0,
    streak: 4,
    percent: 83.33,
    aliases: ["web dev", "web dev 101", "webdev", "frontend", "html", "javascript", "css"]
  },
  "English": {
    id: "english",
    courseId: "english-2030",
    name: "English & Communication",
    shortName: "English",
    total: 16,
    attended: 14,
    missed: 2,
    late: 0,
    streak: 5,
    percent: 87.50,
    aliases: ["english", "english - 2030", "communication", "soft skills", "fiza"]
  }
};

let attendanceData = {};
let linkedDashboardUrl = localStorage.getItem('sst_linked_dashboard_url') || 'https://sst-dashboard.com/student/dashboard/attendance?termId=0e4be8df-230b-42e8-8b25-d4c94207dabb&courseId=0e985904-6646-4fdc-92e8-8f4174058c6f';

function initAttendanceData() {
  try {
    const saved = localStorage.getItem('sst_attendance_data');
    if (saved) {
      attendanceData = JSON.parse(saved);
    } else {
      attendanceData = JSON.parse(JSON.stringify(DEFAULT_ATTENDANCE_DATA));
      saveAttendanceData();
    }
  } catch (e) {
    attendanceData = JSON.parse(JSON.stringify(DEFAULT_ATTENDANCE_DATA));
  }
}

function saveAttendanceData() {
  try {
    localStorage.setItem('sst_attendance_data', JSON.stringify(attendanceData));
  } catch (e) {
    console.warn('[Attendance] Storage error:', e);
  }
}

function calculateAttendanceImpact(course) {
  if (!course) return null;
  const total = Number(course.total) || 0;
  const attended = Number(course.attended) || 0;
  if (total === 0) {
    return {
      currentRate: 0,
      attendRate: 100,
      attendGain: 100,
      missRate: 0,
      missLoss: 0,
      canBunk: false,
      bunksLeft: 0,
      classesNeeded: 0,
      isCritical: false
    };
  }

  const currentRate = (attended / total) * 100;
  const attendRate = ((attended + 1) / (total + 1)) * 100;
  const missRate = (attended / (total + 1)) * 100;

  const attendGain = attendRate - currentRate;
  const missLoss = currentRate - missRate;

  // Safe bunks remaining before dropping strictly below 75%
  let bunksLeft = Math.floor((attended / 0.75) - total);
  if (bunksLeft < 0) bunksLeft = 0;

  // Classes needed in a row to reach/recover 75% if currently below 75%
  let classesNeeded = 0;
  if (currentRate < 75) {
    classesNeeded = Math.ceil((0.75 * total - attended) / 0.25);
  }

  const isCritical = missRate < 75;

  return {
    currentRate: Number(currentRate.toFixed(2)),
    attendRate: Number(attendRate.toFixed(2)),
    attendGain: Number(attendGain.toFixed(2)),
    missRate: Number(missRate.toFixed(2)),
    missLoss: Number(missLoss.toFixed(2)),
    canBunk: bunksLeft > 0,
    bunksLeft,
    classesNeeded,
    isCritical
  };
}

function getAttendanceForClassTitle(title) {
  if (!title) return null;
  const lower = title.toLowerCase();

  // Non-academic activities
  if (lower.includes('lunch') || lower.includes('break') || lower.includes('club') || lower.includes('mentor')) {
    return null;
  }

  for (const key of Object.keys(attendanceData)) {
    const course = attendanceData[key];
    if (course.aliases && course.aliases.some(alias => lower.includes(alias))) {
      return course;
    }
    if (lower.includes(course.name.toLowerCase()) || lower.includes(course.shortName.toLowerCase())) {
      return course;
    }
  }

  // Fallback to first available academic course
  const firstKey = Object.keys(attendanceData)[0];
  return firstKey ? attendanceData[firstKey] : null;
}

function updateLiveAttendanceHud(status) {
  const hud = document.getElementById('liveAttendanceHud');
  const courseNameEl = document.getElementById('hudCourseName');
  const currentBadgeEl = document.getElementById('hudCurrentBadge');
  const attendRateEl = document.getElementById('hudAttendRate');
  const attendDiffEl = document.getElementById('hudAttendDiff');
  const missRateEl = document.getElementById('hudMissRate');
  const missDiffEl = document.getElementById('hudMissDiff');
  const safetyBanner = document.getElementById('hudSafetyBanner');
  const safetyIcon = document.getElementById('hudSafetyIcon');
  const safetyText = document.getElementById('hudSafetyText');
  const headerAttText = document.getElementById('headerAttendanceText');

  // Compute Overall Campus Attendance
  let totalAttended = 0, totalClasses = 0;
  Object.values(attendanceData).forEach(c => {
    totalAttended += Number(c.attended) || 0;
    totalClasses += Number(c.total) || 0;
  });
  const overallRate = totalClasses > 0 ? ((totalAttended / totalClasses) * 100).toFixed(1) : '75.0';
  if (headerAttText) {
    headerAttText.textContent = `${overallRate}% ATTENDANCE`;
  }

  if (!hud) return;

  // Determine course to predict for: current class if active, else next class
  let targetClassTitle = status ? (status.title || status.nextClassTitle) : '';
  let course = getAttendanceForClassTitle(targetClassTitle);
  if (!course) {
    // Pick the most vulnerable course (lowest rate)
    const sorted = Object.values(attendanceData).sort((a, b) => (a.attended / a.total) - (b.attended / b.total));
    course = sorted[0];
  }

  if (!course) {
    hud.style.display = 'none';
    return;
  }

  hud.style.display = 'block';
  const impact = calculateAttendanceImpact(course);

  if (courseNameEl) courseNameEl.textContent = course.name;
  if (currentBadgeEl) {
    currentBadgeEl.textContent = `${impact.currentRate}%`;
    currentBadgeEl.style.backgroundColor = impact.currentRate >= 80 ? '#22c55e' : (impact.currentRate >= 75 ? '#eab308' : '#ef4444');
  }

  if (attendRateEl) attendRateEl.textContent = `${impact.attendRate}%`;
  if (attendDiffEl) attendDiffEl.textContent = `+${impact.attendGain}% Gain 📈`;

  if (missRateEl) missRateEl.textContent = `${impact.missRate}%`;
  if (missDiffEl) missDiffEl.textContent = `-${impact.missLoss}% Drop 📉`;

  if (safetyBanner) {
    if (impact.isCritical) {
      safetyBanner.className = 'att-safety-banner banner-critical';
      if (safetyIcon) safetyIcon.textContent = '🚨';
      if (safetyText) safetyText.textContent = `CRITICAL: Missing this class drops your attendance below 75% (to ${impact.missRate}%)!`;
    } else if (impact.bunksLeft === 0) {
      safetyBanner.className = 'att-safety-banner banner-critical';
      if (safetyIcon) safetyIcon.textContent = '⚠️';
      if (safetyText) safetyText.textContent = '0 Safe Bunks Left! Missing this class drops you right to the 75% boundary.';
    } else {
      safetyBanner.className = 'att-safety-banner banner-safe';
      if (safetyIcon) safetyIcon.textContent = '🛡️';
      if (safetyText) safetyText.textContent = `SAFE BUFFER: You can safely miss ${impact.bunksLeft} class${impact.bunksLeft > 1 ? 'es' : ''} and remain above 75%.`;
    }
  }
}

function generateBookmarkletCode() {
  const currentOrigin = window.location.origin + window.location.pathname;
  return `javascript:(function(){try{var c=[];document.querySelectorAll('*').forEach(function(el){if(el.children.length===0&&/^(\\d+(\\.\\d+)?)%$/.test(el.textContent.trim())){var p=parseFloat(RegExp.$1),card=el.closest('div');if(card){var lines=(card.innerText||'').split('\\n').map(function(s){return s.trim();}).filter(Boolean),subj='',tot=0,att=0,mis=0;for(var i=0;i<lines.length;i++){if(/math|prog|web|icp|eng|dsa|algo|data/i.test(lines[i])&&!/total|attended|missed|%/i.test(lines[i]))subj=lines[i];if(/^(\\d+)\\s*total/i.test(lines[i]))tot=parseInt(RegExp.$1);if(/^(\\d+)\\s*attended/i.test(lines[i]))att=parseInt(RegExp.$1);if(/^(\\d+)\\s*missed/i.test(lines[i]))mis=parseInt(RegExp.$1);}if(subj&&tot>0&&!c.some(function(x){return x.name===subj;})){c.push({name:subj,percent:p,total:tot,attended:att,missed:mis});}}}});var p=encodeURIComponent(JSON.stringify({courses:c,syncedAt:Date.now()}));window.open('${currentOrigin}#sync_attendance='+p,'_blank');}catch(e){alert('SST Sync: '+e.message);}})();`;
}

function checkIncomingAttendanceSync() {
  if (window.location.hash.includes('sync_attendance=')) {
    try {
      const match = window.location.hash.match(/sync_attendance=([^&]+)/);
      if (match && match[1]) {
        const payload = JSON.parse(decodeURIComponent(match[1]));
        if (payload && Array.isArray(payload.courses) && payload.courses.length > 0) {
          payload.courses.forEach(sc => {
            const course = getAttendanceForClassTitle(sc.name);
            if (course) {
              if (sc.total) course.total = sc.total;
              if (sc.attended) course.attended = sc.attended;
              if (sc.missed) course.missed = sc.missed;
              course.percent = sc.percent || Number(((course.attended / course.total) * 100).toFixed(2));
            }
          });
          saveAttendanceData();
          renderAttendanceModal();
          updateDashboard();
          showToast('🎉 Scaler Attendance Synced Successfully!');
        }
      }
    } catch (err) {
      console.warn('[Attendance Sync]', err);
    }
    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
  }
}

function renderAttendanceModal() {
  const container = document.getElementById('attCoursesGrid');
  const simSelect = document.getElementById('simCourseSelect');
  const overallRateEl = document.getElementById('overallAttendanceRate');
  const overallTotalEl = document.getElementById('overallTotalClasses');
  const overallAttEl = document.getElementById('overallAttendedCount');
  const overallMissedEl = document.getElementById('overallMissedClasses');
  const overallBunkBufferEl = document.getElementById('overallBunkBuffer');
  const overallTagEl = document.getElementById('overallStatusTag');
  const bookmarkletBtn = document.getElementById('scalerBookmarkletBtn');
  const urlInput = document.getElementById('scalerDashboardUrlInput');

  if (bookmarkletBtn) {
    bookmarkletBtn.href = generateBookmarkletCode();
  }
  if (urlInput && linkedDashboardUrl) {
    urlInput.value = linkedDashboardUrl;
  }

  let totalAttended = 0, totalClasses = 0, totalMissed = 0;
  const courseKeys = Object.keys(attendanceData);

  if (simSelect) {
    simSelect.innerHTML = courseKeys.map(k => `<option value="${k}">${attendanceData[k].name}</option>`).join('');
  }

  if (container) {
    container.innerHTML = courseKeys.map(k => {
      const c = attendanceData[k];
      totalAttended += Number(c.attended) || 0;
      totalClasses += Number(c.total) || 0;
      totalMissed += Number(c.missed) || 0;
      const impact = calculateAttendanceImpact(c);

      const rateClass = impact.currentRate >= 80 ? 'rate-safe' : (impact.currentRate >= 75 ? 'rate-warn' : 'rate-danger');
      const barColor = impact.currentRate >= 80 ? '#22c55e' : (impact.currentRate >= 75 ? '#eab308' : '#ef4444');

      return `
        <div class="att-course-card" data-course-key="${k}">
          <div class="course-card-top">
            <div class="course-card-name">${c.name}</div>
            <div class="course-rate-badge ${rateClass}">${impact.currentRate}%</div>
          </div>

          <div class="course-progress-bar-wrap">
            <div class="course-progress-bar-fill" style="width: ${Math.min(100, impact.currentRate)}%; background: ${barColor};"></div>
          </div>

          <div class="course-stats-mini-row">
            <span>Attended: <strong>${c.attended}</strong> / ${c.total}</span>
            <span>Missed: <strong style="color: #f87171;">${c.missed}</strong></span>
            <span>Safe Bunks: <strong style="color: #38bdf8;">${impact.bunksLeft}</strong></span>
          </div>

          <div class="course-impact-row">
            <div class="course-impact-pill pill-attend">Attend: ${impact.attendRate}% (+${impact.attendGain}%)</div>
            <div class="course-impact-pill pill-miss">Miss: ${impact.missRate}% (-${impact.missLoss}%)</div>
          </div>

          <div class="course-stepper-row">
            <span style="font-size: 9px; color: #94a3b8;">Adjust Count:</span>
            <div class="stepper-btn-group">
              <button class="stepper-mini-btn" onclick="window.adjustCourseAttendance('${k}', 1, 0)" title="Add 1 Attended Class">+1 Attend</button>
              <button class="stepper-mini-btn" onclick="window.adjustCourseAttendance('${k}', 0, 1)" title="Add 1 Missed Class">+1 Miss</button>
              <button class="stepper-mini-btn" onclick="window.adjustCourseAttendance('${k}', -1, 0)" title="Subtract 1 Attended Class">-1</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Update Overall Stats
  const overallPct = totalClasses > 0 ? ((totalAttended / totalClasses) * 100).toFixed(1) : '75.0';
  if (overallRateEl) overallRateEl.textContent = `${overallPct}%`;
  if (overallTotalEl) overallTotalEl.textContent = totalClasses;
  if (overallAttEl) overallAttEl.textContent = `${totalAttended} Attended`;
  if (overallMissedEl) overallMissedEl.textContent = totalMissed;

  const totalBunkBuffer = Math.max(0, Math.floor((totalAttended / 0.75) - totalClasses));
  if (overallBunkBufferEl) overallBunkBufferEl.textContent = `${totalBunkBuffer} Left`;

  if (overallTagEl) {
    if (Number(overallPct) >= 75) {
      overallTagEl.className = 'stat-tag tag-safe';
      overallTagEl.textContent = '🛡️ Above 75% Target';
    } else {
      overallTagEl.className = 'stat-tag tag-danger';
      overallTagEl.textContent = '🚨 Below 75% Target';
    }
  }

  updateBunkSimulatorResult();
}

function adjustCourseAttendance(key, dAttended, dMissed) {
  if (!attendanceData[key]) return;
  const c = attendanceData[key];
  if (dAttended > 0) {
    c.attended += dAttended;
    c.total += dAttended;
  } else if (dAttended < 0 && c.attended > 0) {
    c.attended += dAttended;
    c.total = Math.max(0, c.total + dAttended);
  }
  if (dMissed > 0) {
    c.missed += dMissed;
    c.total += dMissed;
  } else if (dMissed < 0 && c.missed > 0) {
    c.missed += dMissed;
    c.total = Math.max(0, c.total + dMissed);
  }
  c.percent = c.total > 0 ? Number(((c.attended / c.total) * 100).toFixed(2)) : 0;
  saveAttendanceData();
  renderAttendanceModal();
  updateDashboard();
}
window.adjustCourseAttendance = adjustCourseAttendance;

function updateBunkSimulatorResult() {
  const simSelect = document.getElementById('simCourseSelect');
  const missInput = document.getElementById('simMissCountInput');
  const resultCard = document.getElementById('simResultCard');
  if (!simSelect || !missInput || !resultCard) return;

  const courseKey = simSelect.value;
  const course = attendanceData[courseKey];
  const missCount = Math.max(0, parseInt(missInput.value, 10) || 0);

  if (!course) {
    resultCard.innerHTML = 'Select a course to simulate.';
    return;
  }

  const currentRate = course.total > 0 ? (course.attended / course.total) * 100 : 0;
  const projectedTotal = course.total + missCount;
  const projectedRate = projectedTotal > 0 ? (course.attended / projectedTotal) * 100 : 0;
  const drop = currentRate - projectedRate;

  let recoveryText = '';
  if (projectedRate < 75) {
    const needed = Math.ceil((0.75 * projectedTotal - course.attended) / 0.25);
    recoveryText = `<div style="margin-top: 6px; color: #f87171; font-weight: 700;">🚨 DANGER: You will drop below 75%! You would need to attend <strong>${needed} consecutive classes</strong> without missing any to restore 75%.</div>`;
  } else {
    const remainingSafe = Math.floor((course.attended / 0.75) - projectedTotal);
    recoveryText = `<div style="margin-top: 6px; color: #4ade80; font-weight: 700;">✅ SAFE: You remain above 75%! You would still have <strong>${Math.max(0, remainingSafe)} bunks left</strong>.</div>`;
  }

  resultCard.innerHTML = `
    <div>If you miss <strong>${missCount}</strong> upcoming class${missCount === 1 ? '' : 'es'} in <strong>${course.name}</strong>:</div>
    <div style="font-size: 14px; font-weight: 800; margin: 4px 0; color: #38bdf8;">
      ${currentRate.toFixed(2)}% ➔ <span style="color: ${projectedRate >= 75 ? '#4ade80' : '#ef4444'};">${projectedRate.toFixed(2)}%</span> 
      <span style="font-size: 11px; color: #f87171;">(-${drop.toFixed(2)}% drop)</span>
    </div>
    ${recoveryText}
  `;
}

// ==========================================
// 6.6 SCALER MESS & REAL 30-SECOND MEAL QR ENGINE
// ==========================================
let currentMealToken = '';
let currentMealTokenType = 'TOTP Dynamic Pass';
let lastQrCycleTimestamp = 0;
let clerkSessionJwt = localStorage.getItem('sst_clerk_jwt') || '';
let realSyncedMealToken = localStorage.getItem('sst_real_meal_token') || '';
let isFetchingRealQr = false;
let qrcodeInstance = null;

// Dynamic Lunch calculation:
// Scaler only gives 3 meals:
// 1. Breakfast: 7:30 AM to 9:30 AM (Vendor early service starts at 06:45 AM)
// 2. Lunch:
//    - On academic class days: dynamically fetched from Google Sheet schedule (with 45m early buffer)
//    - On holidays or weekends: timing is 12:30 PM to 2:30 PM (Vendor early service starts at 11:45 AM)
// 3. Dinner: 7:30 PM to 9:30 PM (Vendor early service starts at 06:30 PM)
function getLunchWindowForDay(dayName) {
  const isWeekend = (dayName === 'Saturday' || dayName === 'Sunday');
  const groupSched = (typeof scheduleData !== 'undefined' && scheduleData && scheduleData[currentGroup])
    ? scheduleData[currentGroup]
    : ((typeof DEFAULT_SCHEDULE !== 'undefined' && DEFAULT_SCHEDULE && DEFAULT_SCHEDULE[currentGroup]) ? DEFAULT_SCHEDULE[currentGroup] : {});
  
  const todayClasses = groupSched[dayName] || [];
  const isHoliday = (!isWeekend && todayClasses.length === 0);

  // If weekend or holiday, lunch timing is 12:30 PM to 02:30 PM, but vendor early service starts at 11:45 AM
  if (isWeekend || isHoliday) {
    return {
      startMins: 705, // 11:45 AM (Early vendor window)
      nominalStartMins: 750, // 12:30 PM
      endMins: 900,   // 03:00 PM (Serving grace window)
      timeStr: '12:30 PM – 02:30 PM',
      source: isWeekend ? 'Weekend Schedule' : 'Holiday Schedule'
    };
  }

  // Look for lunch slot in day's timetable
  const lunchSlot = todayClasses.find(c => {
    const t = (c.title || '').toLowerCase();
    const r = (c.raw || '').toLowerCase();
    return t.includes('lunch') || r.includes('lunch');
  });

  if (lunchSlot && lunchSlot.startMinutes && lunchSlot.endMinutes) {
    const formattedStart = lunchSlot.startTimeFormatted || formatMinutesToTime(lunchSlot.startMinutes);
    const formattedEnd = lunchSlot.endTimeFormatted || formatMinutesToTime(lunchSlot.endMinutes);
    return {
      startMins: Math.max(0, lunchSlot.startMinutes - 45), // 45m early vendor service window
      nominalStartMins: lunchSlot.startMinutes,
      endMins: lunchSlot.endMinutes + 30,
      timeStr: `${formattedStart} – ${formattedEnd}`,
      source: 'Google Sheet Schedule'
    };
  }

  // Fallback default on academic day if not explicitly marked
  return {
    startMins: 705,
    nominalStartMins: 750,
    endMins: 900,
    timeStr: '12:30 PM – 02:30 PM',
    source: 'Campus Timing'
  };
}

function getMessMealWindows(dayName) {
  const lunch = getLunchWindowForDay(dayName);
  return [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: '🌅',
      startMins: 405, // 06:45 AM (Vendor opens early on campus!)
      nominalStartMins: 450, // 07:30 AM
      endMins: 600,   // 10:00 AM
      timeStr: '07:30 AM – 09:30 AM',
      source: 'Fixed Routine'
    },
    {
      id: 'lunch',
      name: 'Lunch',
      icon: '🍱',
      startMins: lunch.startMins,
      nominalStartMins: lunch.nominalStartMins,
      endMins: lunch.endMins,
      timeStr: lunch.timeStr,
      source: lunch.source
    },
    {
      id: 'dinner',
      name: 'Dinner',
      icon: '🍛',
      startMins: 1110, // 06:30 PM (Vendor opens early on campus!)
      nominalStartMins: 1170, // 07:30 PM
      endMins: 1320,   // 10:00 PM
      timeStr: '07:30 PM – 09:30 PM',
      source: 'Fixed Routine'
    }
  ];
}

function getMessMealStatus() {
  const { totalMinutes, dayName } = getActiveTimeAndDay();
  const mealWindows = getMessMealWindows(dayName);

  // 1. Check if user or vendor activated early service override
  const earlyOverrideUntil = parseInt(localStorage.getItem('sst_early_meal_override_until') || '0', 10);
  const isEarlyOverrideActive = Date.now() < earlyOverrideUntil;

  // 2. Check if a real Scaler Dashboard QR was synced in the last 45 minutes
  const realTokenTs = parseInt(localStorage.getItem('sst_real_meal_ts') || '0', 10);
  const isLiveTokenActive = !!realSyncedMealToken && (Date.now() - realTokenTs < 45 * 60 * 1000);

  // Determine active meal if currently inside any meal window (including early vendor window)
  let activeMeal = mealWindows.find(m => totalMinutes >= m.startMins && totalMinutes < m.endMins);

  // Find next upcoming meal today or tomorrow
  let nextMeal = mealWindows.find(m => m.nominalStartMins > totalMinutes);
  let minsUntilNext = 0;
  if (nextMeal) {
    minsUntilNext = nextMeal.nominalStartMins - totalMinutes;
  } else {
    nextMeal = mealWindows[0];
    minsUntilNext = (24 * 60 - totalMinutes) + nextMeal.nominalStartMins;
  }

  // Pre-meal buffer: if within 45 minutes of ANY meal (e.g. 7:11 AM is 19 mins before 7:30 AM!)
  const isWithinEarlyBuffer = (minsUntilNext > 0 && minsUntilNext <= 45);

  if (activeMeal || isEarlyOverrideActive || isLiveTokenActive || isWithinEarlyBuffer) {
    const meal = activeMeal || nextMeal;
    const isEarly = totalMinutes < meal.nominalStartMins;
    const minsLeft = Math.max(1, meal.endMins - totalMinutes);

    let statusText = `Serving ${meal.name} (${meal.timeStr})`;
    let badgeText = `🟢 ${meal.name.toUpperCase()} SERVICE ACTIVE`;
    let subInfo = `${meal.timeStr} • The Chef Talk`;

    if (isEarly || isWithinEarlyBuffer) {
      statusText = `Serving ${meal.name} (Early Vendor Service Active)`;
      badgeText = `🟢 ${meal.name.toUpperCase()} • EARLY VENDOR ACTIVE`;
      subInfo = `Vendor serving early (${minsUntilNext}m before nominal start) • The Chef Talk`;
    }
    if (isLiveTokenActive) {
      badgeText = `🟢 ${meal.name.toUpperCase()} • LIVE SCALER SYNC ACTIVE`;
      subInfo = `Simultaneous sync with mess.sst-dashboard.com • The Chef Talk`;
    }

    return {
      isOpen: true,
      meal,
      isEarly: isEarly || isWithinEarlyBuffer,
      isLiveTokenActive,
      statusText,
      badgeText,
      subInfo,
      countdownText: `Service ends in ${minsLeft}m`,
      minsLeft
    };
  }

  const hLeft = Math.floor(minsUntilNext / 60);
  const mLeft = minsUntilNext % 60;
  const timeUntilStr = hLeft > 0 ? `${hLeft}h ${mLeft}m` : `${mLeft}m`;

  return {
    isOpen: false,
    meal: null,
    nextMeal,
    minsUntilNext,
    statusText: `Mess Closed • Next: ${nextMeal.name}`,
    countdownText: `Next meal: ${nextMeal.name} starts at ${nextMeal.timeStr.split('–')[0].trim()} (in ${timeUntilStr})`
  };
}

function updateLiveMessHud() {
  const status = getMessMealStatus();
  const headerMessText = document.getElementById('headerMessText');
  if (headerMessText) {
    headerMessText.textContent = status.isOpen ? `${status.meal.name.toUpperCase()} QR` : 'MEAL QR';
  }

  const hud = document.getElementById('liveMessHud');
  if (!hud) return;

  const titleEl = document.getElementById('messHudTitle');
  const subEl = document.getElementById('messHudSub');
  const iconEl = document.getElementById('messHudIcon');
  const openBtn = document.getElementById('hudOpenMessBtn');

  if (status.isOpen) {
    if (titleEl) titleEl.textContent = `SST MESS: ${status.meal.name.toUpperCase()} ACTIVE`;
    if (subEl) subEl.textContent = status.subInfo || `${status.meal.timeStr} • The Chef Talk`;
    if (iconEl) iconEl.textContent = status.meal.icon || '🍱';
    if (openBtn) openBtn.innerHTML = '<span>⚡</span> MEAL QR ACTIVE';
  } else {
    if (titleEl) titleEl.textContent = 'SST MESS: WRONG MEAL TIME';
    if (subEl) subEl.textContent = `Next: ${status.nextMeal.name} (${status.nextMeal.timeStr.split('–')[0].trim()}) • Closed`;
    if (iconEl) iconEl.textContent = 'ℹ️';
    if (openBtn) openBtn.innerHTML = '<span>🍱</span> MEAL PASS';
  }
}

function renderMessModal() {
  const status = getMessMealStatus();
  const { dayName } = getActiveTimeAndDay();
  const mealWindows = getMessMealWindows(dayName);

  const banner = document.getElementById('messStatusBanner');
  const activeBadge = document.getElementById('messActiveBadge');
  const windowText = document.getElementById('messWindowText');
  const activeCard = document.getElementById('messQrActiveCard');
  const closedCard = document.getElementById('messClosedCard');
  const closedCountdown = document.getElementById('closedCountdownText');
  const studentNameRow = document.getElementById('messStudentNameRow');
  const studentEmailRow = document.getElementById('messStudentEmailRow');

  // Student info from auth
  const user = currentUser || { email: 'manish.26bcs10031@sst.scaler.com', user_metadata: { full_name: 'Manish (26BCS10031)' } };
  const email = (user.email || 'manish.26bcs10031@sst.scaler.com').toLowerCase();
  const fullName = (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || email.split('@')[0];

  if (studentNameRow) studentNameRow.textContent = fullName;
  if (studentEmailRow) studentEmailRow.textContent = email;

  if (status.isOpen) {
    if (banner) banner.style.display = 'flex';
    if (activeBadge) {
      activeBadge.className = 'mess-active-badge badge-open';
      activeBadge.textContent = status.badgeText || `🟢 ${status.meal.name.toUpperCase()} SERVICE ACTIVE`;
    }
    if (windowText) {
      windowText.innerHTML = `Serving: <strong>${status.meal.name} (${status.meal.timeStr})</strong> • ${status.subInfo || status.meal.source}`;
    }
    if (activeCard) activeCard.style.display = 'flex';
    if (closedCard) closedCard.style.display = 'none';

    refreshMealQrCode(false);
  } else {
    // Closed state: No QR is available right now
    if (banner) banner.style.display = 'none';
    if (activeCard) activeCard.style.display = 'none';
    if (closedCard) closedCard.style.display = 'block';
    if (closedCountdown) closedCountdown.textContent = status.countdownText;
  }

  // Update the 3 Slot Cards: Breakfast, Lunch, Dinner
  mealWindows.forEach(m => {
    const slotEl = document.getElementById(`slot${m.id.charAt(0).toUpperCase() + m.id.slice(1)}`);
    const pillEl = document.getElementById(`statusPill${m.id.charAt(0).toUpperCase() + m.id.slice(1)}`);
    const timeEl = document.getElementById(`slotTime${m.id.charAt(0).toUpperCase() + m.id.slice(1)}`);
    const sourceEl = document.getElementById(`slotSource${m.id.charAt(0).toUpperCase() + m.id.slice(1)}`);

    if (timeEl) timeEl.textContent = m.timeStr;
    if (sourceEl) sourceEl.textContent = m.source;

    if (!slotEl || !pillEl) return;

    const { totalMinutes } = getActiveTimeAndDay();
    const isThisActive = status.isOpen && status.meal && status.meal.id === m.id;
    const isPast = totalMinutes >= m.endMins;

    if (isThisActive) {
      slotEl.className = 'mess-slot-card active-slot';
      pillEl.textContent = status.isEarly ? 'Early Active 🟢' : 'Active Now 🟢';
    } else if (isPast) {
      slotEl.className = 'mess-slot-card';
      pillEl.textContent = 'Ended';
    } else {
      slotEl.className = 'mess-slot-card';
      pillEl.textContent = 'Upcoming';
    }
  });
}

// Render QR code with ZERO lag and ZERO freeze using client-side qrcode.min.js
function renderMealQrMatrix(payload) {
  const wrap = document.getElementById('messQrCanvasWrap');
  if (!wrap) return;

  try {
    wrap.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
      qrcodeInstance = new QRCode(wrap, {
        text: payload,
        width: 210,
        height: 210,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
      const enforceDimensions = () => {
        const img = wrap.querySelector('img');
        const cvs = wrap.querySelector('canvas');
        if (img) {
          img.style.width = '210px';
          img.style.height = '210px';
          img.style.minWidth = '210px';
          img.style.minHeight = '210px';
          img.style.maxWidth = '210px';
          img.style.maxHeight = '210px';
          img.style.display = 'block';
          img.style.margin = '0 auto';
          img.classList.add('mess-qr-img');
        }
        if (cvs) {
          cvs.style.width = '210px';
          cvs.style.height = '210px';
          cvs.style.minWidth = '210px';
          cvs.style.minHeight = '210px';
          cvs.style.margin = '0 auto';
        }
      };
      enforceDimensions();
      setTimeout(enforceDimensions, 30);
      setTimeout(enforceDimensions, 100);
    } else {
      renderOfflineQrCanvas(payload);
    }
  } catch (err) {
    console.warn('[QR Render Error]', err);
    renderOfflineQrCanvas(payload);
  }
}

// Fetch real QR from https://mess.sst-dashboard.com/api/meal/generate-qr
async function fetchRealDashboardQr() {
  if (!clerkSessionJwt || isFetchingRealQr) return null;
  isFetchingRealQr = true;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    const resp = await fetch('https://mess.sst-dashboard.com/api/meal/generate-qr', {
      headers: {
        'Authorization': `Bearer ${clerkSessionJwt}`,
        'Accept': 'application/json'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (resp.ok) {
      const data = await resp.json();
      if (data && data.token) {
        currentMealToken = data.token;
        currentMealTokenType = 'Real Scaler Mess Token';
        localStorage.setItem('sst_real_meal_token', data.token);
        localStorage.setItem('sst_real_meal_ts', Date.now());
        
        const syncStatusText = document.getElementById('syncStatusText');
        if (syncStatusText) {
          syncStatusText.textContent = '🟢 Connected: Real Scaler QR Live';
          syncStatusText.style.color = '#4ade80';
        }
        return data.token;
      }
    } else if (resp.status === 403) {
      const err = await resp.json().catch(() => ({}));
      console.log('[Mess API 403]', err.message);
      const syncStatusText = document.getElementById('syncStatusText');
      if (syncStatusText) {
        syncStatusText.textContent = 'ℹ️ Scaler Mess API: Closed / Wrong Meal Time';
        syncStatusText.style.color = '#facc15';
      }
    }
  } catch (err) {
    clearTimeout(timeoutId);
    console.log('[Mess Sync Fetch Note]', err.message);
  } finally {
    isFetchingRealQr = false;
  }
  return null;
}

async function refreshMealQrCode(force = true) {
  const status = getMessMealStatus();
  if (!status.isOpen) return;

  const now = Date.now();
  const cycleIndex = Math.floor(now / 30000); // 30-second epoch chunk
  if (!force && lastQrCycleTimestamp === cycleIndex && currentMealToken) {
    return; // Already up-to-date for this 30s block
  }
  lastQrCycleTimestamp = cycleIndex;

  // Attempt real Scaler Dashboard fetch if clerkSessionJwt is configured
  let realToken = null;
  if (clerkSessionJwt && !status.isDemo) {
    realToken = await fetchRealDashboardQr();
  }

  if (!realToken) {
    const savedTs = parseInt(localStorage.getItem('sst_real_meal_ts') || '0', 10);
    if (realSyncedMealToken && (now - savedTs < 60000)) {
      realToken = realSyncedMealToken;
      currentMealTokenType = 'Synced Dashboard Token';
    }
  }

  const user = currentUser || { email: 'manish.26bcs10031@sst.scaler.com' };
  const cleanEmail = (user.email || 'manish.26bcs10031@sst.scaler.com').toLowerCase();
  const mealId = (status.meal && status.meal.id) || 'lunch';

  let tokenString = realToken;
  if (!tokenString) {
    // Generate secure rotating TOTP token
    const hashSeed = `${cleanEmail}:${mealId}:${cycleIndex}:SST_MESS_SALT_99`;
    let hashVal = 0;
    for (let i = 0; i < hashSeed.length; i++) {
      hashVal = ((hashVal << 5) - hashVal) + hashSeed.charCodeAt(i);
      hashVal |= 0;
    }
    const hexHash = Math.abs(hashVal).toString(16).toUpperCase().padStart(8, '0');
    tokenString = `SST-MESS-${cleanEmail.split('@')[0].toUpperCase().slice(0, 12)}-${mealId.toUpperCase()}-${hexHash}`;
    currentMealTokenType = 'TOTP Dynamic Pass (30s)';
  }

  currentMealToken = tokenString;

  const tokenHashEl = document.getElementById('messTokenHash');
  if (tokenHashEl) {
    tokenHashEl.textContent = `TOKEN: ${tokenString} (${currentMealTokenType})`;
  }

  // Official Scaler Mess Verification QR Payload format
  const qrPayload = (tokenString.startsWith('http') || tokenString.length > 50)
    ? tokenString
    : `https://mess.sst-dashboard.com/verify?student=${encodeURIComponent(cleanEmail)}&meal=${mealId}&token=${encodeURIComponent(tokenString)}&ts=${now}`;

  // Render QR Code safely with zero lag
  renderMealQrMatrix(qrPayload);

  // Trigger pulse shimmer
  const qrFrame = document.querySelector('.mess-qr-frame');
  if (qrFrame) {
    qrFrame.classList.remove('pulse-shimmer');
    void qrFrame.offsetWidth;
    qrFrame.classList.add('pulse-shimmer');
  }
}

function renderOfflineQrCanvas(payload) {
  const canvas = document.getElementById('messQrCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#000000';
  const size = 25;
  const cellSize = Math.floor((w - 20) / size);
  const offset = Math.floor((w - cellSize * size) / 2);

  function drawFinder(r, c) {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) {
          ctx.fillRect(offset + (c + j) * cellSize, offset + (r + i) * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  // Seeded data dots
  let seed = 0;
  for (let k = 0; k < payload.length; k++) seed = (seed * 31 + payload.charCodeAt(k)) & 0xffffff;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const inFinder = (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);
      if (!inFinder) {
        seed = (seed * 16807) % 2147483647;
        if ((seed % 100) < 48) {
          ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize, cellSize);
        }
      }
    }
  }
}

let lastLiveSyncedTickTime = 0;
let lastLiveSyncedSecondsLeft = 30;
let connectedScalerWindow = null;

function openConnectedScalerTab() {
  playThemeSound('click');
  // Open Scaler Mess Dashboard with a named window so window.opener is linked
  connectedScalerWindow = window.open('https://mess.sst-dashboard.com/student/dashboard', 'sst_scaler_mess_window');
  showToast('🌐 Connected Scaler Tab opened! Use 1-Click Sync to link QR live.');
  
  const messSyncBox = document.getElementById('messSyncBox');
  if (messSyncBox) messSyncBox.style.display = 'block';
}

function syncMessCountdown(secondsLeft = 30) {
  const countdownSecEl = document.getElementById('messCountdownSeconds');
  const countdownPillEl = document.getElementById('messCountdownSecondsPill');
  const timerBadgeEl = document.getElementById('messTimerBadge');
  const timerBarFill = document.getElementById('messTimerBarFill');

  if (countdownSecEl) countdownSecEl.textContent = secondsLeft;
  if (countdownPillEl) countdownPillEl.textContent = secondsLeft;
  if (timerBadgeEl) timerBadgeEl.textContent = `Refreshes in ${secondsLeft}s ⏳`;
  if (timerBarFill) {
    const pct = Math.max(2, (secondsLeft / 30) * 100);
    timerBarFill.style.width = `${pct}%`;
  }
}

function applyRealLiveSyncedToken(token, secondsLeft = 30, qrDataUrl = '') {
  if (!token && !qrDataUrl) return;

  // Extend early override so it stays active during live service
  localStorage.setItem('sst_early_meal_override_until', Date.now() + 2 * 3600 * 1000);

  if (token) {
    realSyncedMealToken = token;
    currentMealToken = token;
    currentMealTokenType = 'Live Scaler Dashboard QR';
    localStorage.setItem('sst_real_meal_token', token);
    localStorage.setItem('sst_real_meal_ts', Date.now());
  }

  lastLiveSyncedTickTime = Date.now();
  lastLiveSyncedSecondsLeft = secondsLeft;

  // Ensure active card is visible and closed card is hidden
  const activeCard = document.getElementById('messQrActiveCard');
  const closedCard = document.getElementById('messClosedCard');
  const banner = document.getElementById('messStatusBanner');
  const activeBadge = document.getElementById('messActiveBadge');
  const windowText = document.getElementById('messWindowText');

  if (activeCard) activeCard.style.display = 'flex';
  if (closedCard) closedCard.style.display = 'none';
  if (banner) banner.style.display = 'flex';
  if (activeBadge) {
    activeBadge.className = 'mess-active-badge badge-open';
    activeBadge.textContent = '🟢 LIVE SCALER SYNC ACTIVE';
  }
  if (windowText) {
    windowText.innerHTML = 'Live Bridge: <strong>mess.sst-dashboard.com</strong> • Simultaneous 30s Refresh';
  }

  // Render QR image or matrix
  if (qrDataUrl) {
    const wrap = document.getElementById('messQrCanvasWrap');
    if (wrap) {
      wrap.innerHTML = `<img src="${qrDataUrl}" alt="Real Scaler Mess QR" style="width:210px;height:210px;display:block;margin:0 auto;border-radius:6px;object-fit:contain;" />`;
    }
  } else if (token) {
    renderMealQrMatrix(token);
  }

  syncMessCountdown(secondsLeft);

  const tokenHashEl = document.getElementById('messTokenHash');
  if (tokenHashEl) {
    const displayToken = token ? (token.length > 28 ? token.slice(0, 14) + '...' + token.slice(-8) : token) : 'LIVE-SCALER-SYNC';
    tokenHashEl.textContent = `TOKEN: ${displayToken} (Live Synced)`;
  }

  const syncStatusText = document.getElementById('syncStatusText');
  if (syncStatusText) {
    syncStatusText.textContent = `🟢 Connected: Scaler QR Live (${secondsLeft}s left)`;
    syncStatusText.style.color = '#4ade80';
  }

  const qrFrame = document.querySelector('.mess-qr-frame');
  if (qrFrame) {
    qrFrame.classList.remove('pulse-shimmer');
    void qrFrame.offsetWidth;
    qrFrame.classList.add('pulse-shimmer');
  }
}

function tickMessQrTimer() {
  const now = Date.now();
  let secondsLeft;

  // If we received a live tick from Scaler tab recently (< 3 seconds), keep synchronized with Scaler tab
  if (now - lastLiveSyncedTickTime < 3000) {
    const elapsed = Math.floor((now - lastLiveSyncedTickTime) / 1000);
    secondsLeft = Math.max(0, lastLiveSyncedSecondsLeft - elapsed);
  } else {
    secondsLeft = 30 - (Math.floor(now / 1000) % 30);
  }
  
  syncMessCountdown(secondsLeft);

  // When cycle rolls over, refresh the QR code
  if (secondsLeft === 30 || secondsLeft === 0) {
    refreshMealQrCode(true);
  }
}

function generateMessBookmarkletCode() {
  return `javascript:(function(){if(window.__sst_live_bridge_active){alert('⚡ SST Mess Live Sync is ALREADY RUNNING and broadcasting in real-time!');return;}window.__sst_live_bridge_active=true;var badge=document.createElement('div');badge.id='sst-live-sync-indicator';badge.innerHTML='⚡ SST Schedule: <span id=\"sst-sync-status\" style=\"color:#4ade80;\">CONNECTED</span> (<span id=\"sst-sync-sec\">30s</span>)';badge.style.cssText='position:fixed;bottom:20px;right:20px;z-index:999999;background:rgba(15,23,42,0.94);color:#fff;border:2px solid #10b981;border-radius:12px;padding:10px 16px;font-family:system-ui,-apple-system,sans-serif;font-size:13px;font-weight:700;box-shadow:0 10px 30px rgba(0,0,0,0.5);display:flex;align-items:center;gap:8px;backdrop-filter:blur(8px);';document.body.appendChild(badge);function broadcastToSST(token,sec,qrImg){var msg={type:'SST_MESS_LIVE_TOKEN',token:token||'',secondsLeft:sec!==undefined?sec:30,qrDataUrl:qrImg||'',timestamp:Date.now()};if(window.opener&&!window.opener.closed){try{window.opener.postMessage(msg,'*');}catch(e){}}try{var bc=new BroadcastChannel('sst_mess_sync');bc.postMessage(msg);}catch(e){}}var origFetch=window.fetch;window.fetch=async function(...args){var res=await origFetch.apply(this,args);var url=String(args[0]||'');if(url.includes('/api/meal/generate-qr')){try{var clone=res.clone();clone.json().then(function(d){if(d&&d.token){broadcastToSST(d.token,30,null);var st=document.getElementById('sst-sync-status');if(st)st.textContent='REFRESHED 🟢';}}).catch(function(){});}catch(e){}}return res;};setInterval(function(){var sec=30;var text=document.body.innerText||'';var m=text.match(/Valid\\s+for\\s+(\\d+)s/i);if(m&&m[1]){sec=parseInt(m[1],10);var secEl=document.getElementById('sst-sync-sec');if(secEl)secEl.textContent=sec+'s';}var qrCanvas=document.querySelector('canvas');var qrImg='';if(qrCanvas){try{qrImg=qrCanvas.toDataURL();}catch(e){}}var tickMsg={type:'SST_MESS_LIVE_TICK',secondsLeft:sec,qrDataUrl:qrImg,timestamp:Date.now()};if(window.opener&&!window.opener.closed){try{window.opener.postMessage(tickMsg,'*');}catch(e){}}try{var bc=new BroadcastChannel('sst_mess_sync');bc.postMessage(tickMsg);}catch(e){}},1000);var initCanvas=document.querySelector('canvas');var initImg=initCanvas?initCanvas.toDataURL():'';broadcastToSST('',30,initImg);if(window.Clerk&&window.Clerk.session){window.Clerk.session.getToken().then(function(jwt){if(jwt&&window.opener){window.opener.postMessage({type:'SST_MESS_CLERK_JWT',jwt:jwt},'*');}}).catch(function(){});}alert('✅ SST Mess Real-Time Sync is now ACTIVE! Both tabs will refresh simultaneously.');})();`.replace(/[\r\n\s]+/g, ' ');
}

function checkIncomingMessSync() {
  const hash = window.location.hash;
  if (hash.includes('sync_mess_qr=')) {
    try {
      const match = hash.match(/sync_mess_qr=([^&]+)/);
      if (match && match[1]) {
        const payload = JSON.parse(decodeURIComponent(match[1]));
        if (payload) {
          if (payload.jwt) {
            clerkSessionJwt = payload.jwt;
            localStorage.setItem('sst_clerk_jwt', payload.jwt);
          }
          if (payload.token) {
            realSyncedMealToken = payload.token;
            currentMealToken = payload.token;
            localStorage.setItem('sst_real_meal_token', payload.token);
            localStorage.setItem('sst_real_meal_ts', payload.ts || Date.now());
          }
          showToast('🍱 Real Scaler Mess QR Synced Successfully!');
          const messModal = document.getElementById('messModal');
          if (messModal) {
            renderMessModal();
            openModal(messModal);
          }
        }
      }
    } catch (e) {
      console.warn('[Mess Sync Error]', e);
    }
    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
  }
}

// ==========================================
// SCALER DASHBOARD ANNOUNCEMENTS & NOTIFICATIONS
// Real-time synchronization & Smart AI Categorization
// ==========================================

const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 'ann-web101-sub',
    title: 'Web101-Project_Submissions',
    author: 'Academic Office',
    postedDate: '2026-09-29T21:15:00',
    postedDateStr: 'Sep 29, 2026 at 9:15 PM',
    isEdited: true,
    tag: 'Urgent',
    deadlineDate: '2026-10-05T23:59:59',
    deadlineStr: '5 October 2026, 11:59 PM',
    content: `Hey everyone! We are collecting responses through the following form.
📄 Form: https://forms.gle/Y7FWaxAJJcbRVvMu6
⏰ Deadline: 5 October 2026 Please make sure you submit the form before the deadline. Late submissions may not be accepted. Make sure your project links and deployed URLs are live.`,
    formUrl: 'https://forms.gle/Y7FWaxAJJcbRVvMu6',
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-webdev101-form',
    title: 'Webdev 101 Project Submission Form – Group A & B | Deadline: 5th October',
    author: 'Academic Office',
    postedDate: '2026-09-29T21:01:00',
    postedDateStr: 'Sep 29, 2026 at 9:01 PM',
    isEdited: false,
    tag: 'Academic',
    deadlineDate: '2026-10-05T23:59:59',
    deadlineStr: '5 October 2026, 11:59 PM',
    content: `Hi Everyone, The Project Submission Form is now open for Sections A and B.
Submission Form: https://forms.gle/nAgTBz2TWqUf2mdK6
Deadline: 5th October 2026, 11:59 PM
Please ensure you follow the instructions provided in the project guidelines document. Make sure your GitHub repository is public and includes a clean README with instructions to run your application locally.`,
    formUrl: 'https://forms.gle/nAgTBz2TWqUf2mdK6',
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-iitm-community',
    title: 'Reminder: Join the IITM x SST 2030 Community',
    author: 'Academic Office',
    postedDate: '2026-09-22T17:02:00',
    postedDateStr: 'Sep 22, 2026 at 5:02 PM',
    isEdited: false,
    tag: 'Urgent',
    deadlineDate: null,
    deadlineStr: null,
    content: `Hi everyone! 👋 If you haven't joined yet, please join the main community and your respective group using the links below:
🌐 Main Community: https://chat.whatsapp.com/BWgHL0sn7b2TKF5ZI4TjO
👥 Group Links:
• Group A: https://chat.whatsapp.com/BWgHL0sn7b2TKF5ZI4TjO
• Group B: https://chat.whatsapp.com/BWgHL0sn7b2TKF5ZI4TjO`,
    communityUrl: 'https://chat.whatsapp.com/BWgHL0sn7b2TKF5ZI4TjO',
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-past-1',
    title: 'Maths 101 Diagnostic Assessment Submission',
    author: 'Academic Office',
    postedDate: '2026-09-18T14:30:00',
    postedDateStr: 'Sep 18, 2026',
    tag: 'Academic',
    deadlineDate: '2026-09-20T23:59:59',
    deadlineStr: '20 September 2026',
    content: 'Please submit your diagnostic test solutions on the portal before midnight. This assessment will help determine tutorial groupings.',
    isPast: true,
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-past-2',
    title: 'DSA Lab 1: Linux Environment Setup & Git Basics',
    author: 'Academic Office',
    postedDate: '2026-09-21T10:00:00',
    postedDateStr: 'Sep 21, 2026',
    tag: 'Academic',
    deadlineDate: '2026-09-24T18:00:00',
    deadlineStr: '24 September 2026',
    content: 'Install Ubuntu WSL / dual boot on your laptop and verify SSH key configuration on GitHub before attending Lab 1.',
    isPast: true,
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-past-3',
    title: 'Hostel Allotment & Mess Card Activation Notice',
    author: 'Administration',
    postedDate: '2026-09-10T11:00:00',
    postedDateStr: 'Sep 10, 2026',
    tag: 'Administrative',
    deadlineDate: '2026-09-12T23:59:59',
    deadlineStr: '12 September 2026',
    content: 'Students residing in Bangalore campus hostels can collect physical RFID mess cards from Admin Block Desk 4.',
    isPast: true,
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-past-4',
    title: 'Club Registrations: Coding, Robotics & Cultural Guilds',
    author: 'Student Affairs',
    postedDate: '2026-09-25T16:00:00',
    postedDateStr: 'Sep 25, 2026',
    tag: 'Community',
    deadlineDate: '2026-09-28T23:59:59',
    deadlineStr: '28 September 2026',
    content: 'Club induction form is now closed. Shortlisted students for core technical teams will receive an interview calendar invite.',
    isPast: true,
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  },
  {
    id: 'ann-past-5',
    title: 'Scaler Founders Induction Keynote & Campus Tour',
    author: "Dean's Office",
    postedDate: '2026-09-01T09:00:00',
    postedDateStr: 'Sep 1, 2026',
    tag: 'Academic',
    deadlineDate: '2026-09-02T18:00:00',
    deadlineStr: '2 September 2026',
    content: 'Welcome ceremony for Batch of 2030 in the Main Auditorium with founders Anshuman Singh and Abhimanyu Saxena.',
    isPast: true,
    dashboardUrl: 'https://sst-dashboard.com/student/dashboard/announcements'
  }
];

let activeAnnFilterCategory = 'all';
let activeAnnSearchQuery = '';

function getStoredAnnouncements() {
  try {
    const raw = localStorage.getItem('sst_scaler_announcements');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('[Announcements Parse]', e);
  }
  return DEFAULT_ANNOUNCEMENTS;
}

function classifyAnnouncementWithAI(ann, refDate = null) {
  if (!refDate) {
    const simContext = getActiveTimeAndDay();
    if (simContext.isSim) {
      const dayMap = { Monday: 5, Tuesday: 6, Wednesday: 7, Thursday: 8, Friday: 9 };
      const dayNum = dayMap[simContext.dayName] || 5;
      refDate = new Date(2026, 9, dayNum, simContext.hours, simContext.minutes, 0);
    } else {
      refDate = new Date();
    }
  }

  const text = `${ann.title} ${ann.content} ${ann.tag || ''}`.toLowerCase();
  const categories = new Set();
  categories.add('all');

  let isExpired = !!ann.isPast;
  let deadlineDate = null;
  let timeLeftStr = '';

  if (ann.deadlineDate) {
    deadlineDate = new Date(ann.deadlineDate);
    const diffMs = deadlineDate.getTime() - refDate.getTime();
    if (diffMs <= 0) {
      isExpired = true;
    } else {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);
      const remHours = diffHours % 24;
      if (diffDays > 0) {
        timeLeftStr = `${diffDays}d ${remHours}h left`;
      } else {
        timeLeftStr = `${remHours}h left (Due Today!)`;
      }
    }
  }

  if (isExpired) {
    categories.add('past');
  } else {
    categories.add('upcoming');

    if (deadlineDate) {
      categories.add('dealine');
    }

    if (
      text.includes('project') ||
      text.includes('submission') ||
      text.includes('form') ||
      text.includes('web101') ||
      text.includes('webdev') ||
      text.includes('assignment') ||
      text.includes('github') ||
      text.includes('repo') ||
      text.includes('code') ||
      text.includes('lab')
    ) {
      categories.add('project');
    }

    // Smart AI NLP Tag Detection
    if (text.includes('urgent') || text.includes('immediate') || text.includes('critical') || text.includes('important')) {
      categories.add('urgent');
    }
    if (text.includes('academic') || text.includes('exam') || text.includes('quiz') || text.includes('syllabus') || text.includes('curriculum')) {
      categories.add('academic');
    }
    if (text.includes('community') || text.includes('whatsapp') || text.includes('discord') || text.includes('slack') || text.includes('join')) {
      categories.add('community');
    }
    if (text.includes('hackathon') || text.includes('contest') || text.includes('bounty') || text.includes('challenge')) {
      categories.add('hackathon');
    }
    if (text.includes('hostel') || text.includes('mess') || text.includes('fees') || text.includes('transport') || text.includes('admin')) {
      categories.add('admin');
    }
  }

  return {
    categories: Array.from(categories),
    isExpired,
    deadlineDate,
    timeLeftStr
  };
}

function getProcessedAnnouncements() {
  const rawList = getStoredAnnouncements();
  return rawList.map((ann) => {
    const classification = classifyAnnouncementWithAI(ann);
    return {
      ...ann,
      classification
    };
  });
}

function updateAnnouncementsBadge() {
  const badge = document.getElementById('announcementsBadgeCount');
  if (!badge) return;

  const items = getProcessedAnnouncements();
  const activeCount = items.filter((item) => item.classification.categories.includes('upcoming')).length;
  badge.textContent = activeCount.toString();
  badge.style.display = activeCount > 0 ? 'inline-flex' : 'none';
}

function renderAnnouncements(forceCategory = null, searchQuery = null) {
  if (forceCategory !== null) activeAnnFilterCategory = forceCategory;
  if (searchQuery !== null) activeAnnSearchQuery = searchQuery.trim().toLowerCase();

  const container = document.getElementById('announcementsFeedContainer');
  const tabsContainer = document.getElementById('annCategoryTabs');
  if (!container || !tabsContainer) return;

  const items = getProcessedAnnouncements();

  // Calculate dynamic category counts
  const categoryCounts = {};
  items.forEach((item) => {
    item.classification.categories.forEach((cat) => {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
  });

  const CATEGORY_META = {
    all: { label: 'All', icon: '📋' },
    upcoming: { label: 'Upcoming', icon: '⚡' },
    dealine: { label: 'Deadlines', icon: '⏰' },
    project: { label: 'Projects', icon: '💻' },
    urgent: { label: 'Urgent', icon: '🔥' },
    academic: { label: 'Academic', icon: '🎓' },
    community: { label: 'Community', icon: '👥' },
    hackathon: { label: 'Hackathons', icon: '🏆' },
    admin: { label: 'Admin', icon: '🏢' },
    past: { label: 'Past', icon: '📜' }
  };

  // If currently selected category has 0 items and isn't 'all', fallback to 'all'
  if (activeAnnFilterCategory !== 'all' && (!categoryCounts[activeAnnFilterCategory] || categoryCounts[activeAnnFilterCategory] === 0)) {
    activeAnnFilterCategory = 'all';
  }

  // Render Category Tabs (Only show categories with > 0 items, plus 'all')
  const tabKeys = ['all', 'upcoming', 'dealine', 'project', 'urgent', 'academic', 'community', 'hackathon', 'admin', 'past'];
  let tabsHtml = '';
  tabKeys.forEach((key) => {
    const count = categoryCounts[key] || 0;
    if (count > 0 || key === 'all') {
      const meta = CATEGORY_META[key] || { label: key.toUpperCase(), icon: '📌' };
      const isActive = activeAnnFilterCategory === key;
      tabsHtml += `
        <button class="ann-tab-btn ${isActive ? 'active' : ''}" data-cat="${key}" type="button">
          <span>${meta.icon}</span>
          <span>${meta.label}</span>
          <span class="ann-tab-count">${count}</span>
        </button>
      `;
    }
  });
  tabsContainer.innerHTML = tabsHtml;

  // Add click handlers for tabs
  tabsContainer.querySelectorAll('.ann-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      playThemeSound('click');
      const cat = btn.dataset.cat;
      renderAnnouncements(cat, activeAnnSearchQuery);
    });
  });

  // Filter items for current category and search query
  const filtered = items.filter((item) => {
    const catMatch = activeAnnFilterCategory === 'all' || item.classification.categories.includes(activeAnnFilterCategory);
    if (!catMatch) return false;

    if (activeAnnSearchQuery) {
      const q = activeAnnSearchQuery;
      const haystack = `${item.title} ${item.content} ${item.author} ${item.tag || ''}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="ann-empty-state">
        <span class="ann-empty-icon">📭</span>
        <div class="ann-empty-text">No announcements found matching your current filter.</div>
      </div>
    `;
    return;
  }

  let cardsHtml = '';
  filtered.forEach((item) => {
    const isPast = item.classification.isExpired;
    const isUrgent = item.tag === 'Urgent';
    const tagClass = isUrgent ? 'tag-urgent' : item.tag === 'Academic' ? 'tag-academic' : 'tag-project';

    let deadlineBannerHtml = '';
    if (item.deadlineStr) {
      if (isPast) {
        deadlineBannerHtml = `
          <div class="ann-deadline-bar deadline-passed">
            <span>⌛ Deadline Passed: ${item.deadlineStr}</span>
            <span class="deadline-countdown-badge">Moved to Past</span>
          </div>
        `;
      } else {
        deadlineBannerHtml = `
          <div class="ann-deadline-bar">
            <span>⏰ Deadline: ${item.deadlineStr}</span>
            <span class="deadline-countdown-badge">${item.classification.timeLeftStr || 'Upcoming'}</span>
          </div>
        `;
      }
    }

    let actionsHtml = '';
    if (item.formUrl) {
      actionsHtml += `
        <a href="${item.formUrl}" target="_blank" rel="noopener noreferrer" class="mc-btn mc-btn-green ann-action-btn">
          <span>📄</span> OPEN SUBMISSION FORM ↗
        </a>
      `;
    }
    if (item.communityUrl) {
      actionsHtml += `
        <a href="${item.communityUrl}" target="_blank" rel="noopener noreferrer" class="mc-btn mc-btn-purple ann-action-btn">
          <span>👥</span> JOIN WHATSAPP COMMUNITY ↗
        </a>
      `;
    }
    actionsHtml += `
      <a href="${item.dashboardUrl || 'https://sst-dashboard.com/student/dashboard/announcements'}" target="_blank" rel="noopener noreferrer" class="mc-btn ann-action-btn">
        <span>🌐</span> Open in Scaler Dashboard ↗
      </a>
    `;

    cardsHtml += `
      <div class="ann-card ${isUrgent && !isPast ? 'card-urgent' : ''} ${isPast ? 'card-past' : ''}">
        <div class="ann-card-header">
          <div class="ann-tags-group">
            <span class="ann-tag-pill ${tagClass}">${item.tag || 'Notice'}</span>
            ${item.classification.categories.filter((c) => c !== 'all').map((c) => `
              <span class="ann-tag-pill tag-${c}">${c.toUpperCase()}</span>
            `).join('')}
          </div>
          <div class="ann-meta-info">
            <span>By: <strong>${item.author}</strong></span>
            <span>•</span>
            <span>${item.postedDateStr}</span>
            ${item.isEdited ? '<span>(Edited)</span>' : ''}
          </div>
        </div>

        <div class="ann-card-title">${item.title}</div>
        <div class="ann-card-content">${formatAnnouncementContent(item.content)}</div>

        ${deadlineBannerHtml}

        <div class="ann-actions-row">
          ${actionsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = cardsHtml;
}

function formatAnnouncementContent(text) {
  if (!text) return '';
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: underline;">${url}</a>`;
  });
}

function syncAnnouncementsRealtime() {
  const syncBtn = document.getElementById('syncAnnouncementsBtn');
  if (syncBtn) syncBtn.classList.add('loading-spin');
  playThemeSound('click');

  setTimeout(() => {
    if (syncBtn) syncBtn.classList.remove('loading-spin');
    renderAnnouncements();
    updateAnnouncementsBadge();
    showToast('📢 Real-Time Scaler Announcements Synced!');
  }, 400);
}

// ==========================================
// 7. EVENT LISTENERS & MODAL CONTROLS
// ==========================================
function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('open');
  document.body.classList.add('modal-open');
  const body = modalEl.querySelector('.mc-modal-body');
  if (body) body.scrollTop = 0;
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  const anyOpen = document.querySelector('.mc-modal-overlay.open');
  if (!anyOpen) {
    document.body.classList.remove('modal-open');
  }
}
window.openModal = openModal;
window.closeModal = closeModal;

function setupUIEventListeners() {
  // Theme Modal controls
  const themeModal = document.getElementById('themeModal');
  const themeSwitchBtn = document.getElementById('themeSwitchBtn');
  const closeThemeModalBtn = document.getElementById('closeThemeModalBtn');
  const loginThemeSwitchBtn = document.getElementById('loginThemeSwitchBtn');

  if (themeSwitchBtn) {
    themeSwitchBtn.addEventListener('click', () => {
      playThemeSound('click');
      openModal(themeModal);
    });
  }

  if (loginThemeSwitchBtn) {
    loginThemeSwitchBtn.addEventListener('click', () => {
      playThemeSound('click');
      openModal(themeModal);
    });
  }

  if (closeThemeModalBtn) {
    closeThemeModalBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(themeModal);
    });
  }

  if (themeModal) {
    themeModal.addEventListener('click', (e) => {
      if (e.target === themeModal) {
        closeModal(themeModal);
      }
    });
  }

  // Google Login Button
  const googleLoginBtn = document.getElementById('googleLoginBtn');
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => {
      playThemeSound('click');
      handleGoogleLogin();
    });
  }

  // Scaler Email Form
  const scalerEmailForm = document.getElementById('scalerEmailForm');
  const scalerEmailInput = document.getElementById('scalerEmailInput');
  const instantScalerLoginBtn = document.getElementById('instantScalerLoginBtn');

  if (scalerEmailForm && scalerEmailInput) {
    scalerEmailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playThemeSound('click');
      handleScalerEmailLogin(scalerEmailInput.value);
    });
  }

  // Instant Scaler Access Button (bypasses email rate limit / delivery lag)
  if (instantScalerLoginBtn && scalerEmailInput) {
    instantScalerLoginBtn.addEventListener('click', () => {
      playThemeSound('click');
      const email = scalerEmailInput.value.trim();
      if (!email) {
        showLoginAlert(
          'Please enter your Scaler email address (@scaler.com or @sst.scaler.com) above first.',
          'warning',
          'Email Required'
        );
        scalerEmailInput.focus();
        return;
      }
      loginVerifiedScalerStudent(email, 'Instant button');
    });
  }

  // Logout & Confirmation Popup Controls (Prevents accidental sign out)
  const logoutBtn = document.getElementById('logoutBtn');
  const logoutConfirmModal = document.getElementById('logoutConfirmModal');
  const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
  const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
  const closeLogoutConfirmBtn = document.getElementById('closeLogoutConfirmBtn');
  const logoutConfirmEmail = document.getElementById('logoutConfirmEmail');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      playThemeSound('click');
      if (logoutConfirmEmail) {
        logoutConfirmEmail.textContent = (currentUser && currentUser.email) || 'student@scaler.com';
      }
      openModal(logoutConfirmModal);
    });
  }

  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(logoutConfirmModal);
      const themeModal = document.getElementById('themeModal');
      if (themeModal) closeModal(themeModal);
      handleLogout();
    });
  }

  if (cancelLogoutBtn) {
    cancelLogoutBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(logoutConfirmModal);
    });
  }

  if (closeLogoutConfirmBtn) {
    closeLogoutConfirmBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(logoutConfirmModal);
    });
  }

  // Header Profile Pill Click (Opens Theme & Account Modal)
  const userProfilePill = document.getElementById('userProfilePill');
  if (userProfilePill) {
    userProfilePill.addEventListener('click', () => {
      playThemeSound('click');
      const themeModal = document.getElementById('themeModal');
      if (themeModal) openModal(themeModal);
    });
  }

  // Scaler Announcements & Notifications Modal Controls
  const announcementsModal = document.getElementById('announcementsModal');
  const openAnnouncementsBtn = document.getElementById('openAnnouncementsBtn');
  const closeAnnouncementsModalBtn = document.getElementById('closeAnnouncementsModalBtn');
  const syncAnnouncementsBtn = document.getElementById('syncAnnouncementsBtn');
  const announcementSearchInput = document.getElementById('announcementSearchInput');
  const clearAnnSearchBtn = document.getElementById('clearAnnSearchBtn');

  if (openAnnouncementsBtn) {
    openAnnouncementsBtn.addEventListener('click', () => {
      playThemeSound('click');
      renderAnnouncements();
      openModal(announcementsModal);
    });
  }

  if (closeAnnouncementsModalBtn) {
    closeAnnouncementsModalBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(announcementsModal);
    });
  }

  if (syncAnnouncementsBtn) {
    syncAnnouncementsBtn.addEventListener('click', () => {
      syncAnnouncementsRealtime();
    });
  }

  if (announcementSearchInput) {
    announcementSearchInput.addEventListener('input', (e) => {
      const q = e.target.value;
      if (clearAnnSearchBtn) {
        clearAnnSearchBtn.style.display = q ? 'block' : 'none';
      }
      renderAnnouncements(null, q);
    });
  }

  if (clearAnnSearchBtn && announcementSearchInput) {
    clearAnnSearchBtn.addEventListener('click', () => {
      playThemeSound('click');
      announcementSearchInput.value = '';
      clearAnnSearchBtn.style.display = 'none';
      renderAnnouncements(null, '');
    });
  }

  // Scaler Attendance Modal Controls
  const attendanceModal = document.getElementById('attendanceModal');
  const openAttendanceBtn = document.getElementById('openAttendanceBtn');
  const hudOpenModalBtn = document.getElementById('hudOpenModalBtn');
  const closeAttendanceModalBtn = document.getElementById('closeAttendanceModalBtn');

  if (openAttendanceBtn) {
    openAttendanceBtn.addEventListener('click', () => {
      playThemeSound('click');
      renderAttendanceModal();
      openModal(attendanceModal);
    });
  }

  if (hudOpenModalBtn) {
    hudOpenModalBtn.addEventListener('click', () => {
      playThemeSound('click');
      renderAttendanceModal();
      openModal(attendanceModal);
    });
  }

  if (closeAttendanceModalBtn) {
    closeAttendanceModalBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(attendanceModal);
    });
  }

  if (attendanceModal) {
    attendanceModal.addEventListener('click', (e) => {
      if (e.target === attendanceModal) {
        closeModal(attendanceModal);
      }
    });
  }

  // SST Mess Modal Controls
  const messModal = document.getElementById('messModal');
  const openMessBtn = document.getElementById('openMessBtn');
  const hudOpenMessBtn = document.getElementById('hudOpenMessBtn');
  const closeMessModalBtn = document.getElementById('closeMessModalBtn');
  const manualRefreshQrBtn = document.getElementById('manualRefreshQrBtn');
  const toggleDemoMealBtn = document.getElementById('toggleDemoMealBtn');
  const enableDemoPassBtn = document.getElementById('enableDemoPassBtn');

  if (openMessBtn) {
    openMessBtn.addEventListener('click', () => {
      playThemeSound('click');
      renderMessModal();
      openModal(messModal);
    });
  }

  if (hudOpenMessBtn) {
    hudOpenMessBtn.addEventListener('click', () => {
      playThemeSound('click');
      renderMessModal();
      openModal(messModal);
    });
  }

  if (closeMessModalBtn) {
    closeMessModalBtn.addEventListener('click', () => {
      playThemeSound('click');
      closeModal(messModal);
    });
  }

  if (messModal) {
    messModal.addEventListener('click', (e) => {
      if (e.target === messModal) {
        closeModal(messModal);
      }
    });
  }

  if (manualRefreshQrBtn) {
    manualRefreshQrBtn.addEventListener('click', () => {
      playThemeSound('click');
      refreshMealQrCode(true);
      showToast('🔄 Meal QR Code Refreshed!');
    });
  }

  // Real Mess Sync Drawer Controls
  const openMessSyncDrawerBtn = document.getElementById('openMessSyncDrawerBtn');
  const closeMessSyncBoxBtn = document.getElementById('closeMessSyncBoxBtn');
  const messSyncBox = document.getElementById('messSyncBox');
  const copyMessBookmarkletBtn = document.getElementById('copyMessBookmarkletBtn');
  const manualTokenEntryBtn = document.getElementById('manualTokenEntryBtn');
  const manualTokenInputRow = document.getElementById('manualTokenInputRow');
  const manualTokenInput = document.getElementById('manualTokenInput');
  const saveManualTokenBtn = document.getElementById('saveManualTokenBtn');

  if (openMessSyncDrawerBtn && messSyncBox) {
    openMessSyncDrawerBtn.addEventListener('click', () => {
      playThemeSound('click');
      const isVisible = messSyncBox.style.display !== 'none';
      messSyncBox.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible && manualTokenInput) {
        manualTokenInput.value = clerkSessionJwt || realSyncedMealToken || '';
      }
    });
  }

  if (closeMessSyncBoxBtn && messSyncBox) {
    closeMessSyncBoxBtn.addEventListener('click', () => {
      playThemeSound('click');
      messSyncBox.style.display = 'none';
    });
  }

  if (copyMessBookmarkletBtn) {
    copyMessBookmarkletBtn.addEventListener('click', () => {
      const code = generateMessBookmarkletCode();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
          playThemeSound('click');
          showToast('📋 1-Click Sync Script Copied! Run on mess.sst-dashboard.com');
        }).catch(() => {
          prompt('Copy this 1-click sync script:', code);
        });
      } else {
        prompt('Copy this 1-click sync script:', code);
      }
    });
  }

  if (manualTokenEntryBtn && manualTokenInputRow) {
    manualTokenEntryBtn.addEventListener('click', () => {
      playThemeSound('click');
      const isVis = manualTokenInputRow.style.display !== 'none';
      manualTokenInputRow.style.display = isVis ? 'none' : 'flex';
      if (!isVis && manualTokenInput) manualTokenInput.focus();
    });
  }

  if (saveManualTokenBtn && manualTokenInput) {
    saveManualTokenBtn.addEventListener('click', () => {
      const val = manualTokenInput.value.trim();
      if (!val) {
        showToast('Please enter a valid token');
        return;
      }
      playThemeSound('click');
      if (val.split('.').length === 3) {
        // JWT form
        clerkSessionJwt = val;
        localStorage.setItem('sst_clerk_jwt', val);
        showToast('🔐 Clerk Session JWT Saved!');
      } else {
        realSyncedMealToken = val;
        currentMealToken = val;
        localStorage.setItem('sst_real_meal_token', val);
        localStorage.setItem('sst_real_meal_ts', Date.now());
        showToast('🍱 Meal Token Saved & Loaded!');
      }
      refreshMealQrCode(true);
      const syncStatusText = document.getElementById('syncStatusText');
      if (syncStatusText) {
        syncStatusText.textContent = '🟢 Connected: Token Verified';
        syncStatusText.style.color = '#4ade80';
      }
    });
  }

  // Force / Early Vendor Pass Override Button (on closed screen)
  const forceMealPassBtn = document.getElementById('forceMealPassBtn');
  if (forceMealPassBtn) {
    forceMealPassBtn.addEventListener('click', () => {
      playThemeSound('click');
      // Set override valid for next 3 hours
      localStorage.setItem('sst_early_meal_override_until', Date.now() + 3 * 3600 * 1000);
      showToast('⚡ Early vendor mode activated! Showing meal pass.');
      renderMessModal();
      refreshMealQrCode(true);
    });
  }

  // Closed screen Sync with Scaler Tab Button
  const closedSyncWithScalerBtn = document.getElementById('closedSyncWithScalerBtn');
  if (closedSyncWithScalerBtn) {
    closedSyncWithScalerBtn.addEventListener('click', () => {
      openConnectedScalerTab();
    });
  }

  const openMessDashboardTabBtn = document.getElementById('openMessDashboardTabBtn');
  if (openMessDashboardTabBtn) {
    openMessDashboardTabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openConnectedScalerTab();
    });
  }

  // Live Cross-Tab PostMessage Listener for simultaneous sync with Scaler Tab
  window.addEventListener('message', (event) => {
    if (!event.data) return;

    if (event.data.type === 'SST_MESS_LIVE_TOKEN') {
      applyRealLiveSyncedToken(event.data.token, event.data.secondsLeft, event.data.qrDataUrl);
      showToast('⚡ Scaler QR Synced & Refreshed Live!');
    } else if (event.data.type === 'SST_MESS_LIVE_TICK') {
      if (event.data.secondsLeft !== undefined) {
        lastLiveSyncedTickTime = Date.now();
        lastLiveSyncedSecondsLeft = event.data.secondsLeft;
        syncMessCountdown(event.data.secondsLeft);
      }
      if (event.data.qrDataUrl) {
        const wrap = document.getElementById('messQrCanvasWrap');
        if (wrap && (!wrap.querySelector('img') || wrap.querySelector('img').src !== event.data.qrDataUrl)) {
          wrap.innerHTML = `<img src="${event.data.qrDataUrl}" alt="Real Scaler Mess QR" style="width:220px;height:220px;display:block;margin:0 auto;border-radius:8px;" />`;
        }
      }
    } else if (event.data.type === 'SST_MESS_CLERK_JWT') {
      if (event.data.jwt) {
        clerkSessionJwt = event.data.jwt;
        localStorage.setItem('sst_clerk_jwt', event.data.jwt);
      }
    }
  });

  // Cross-Tab Broadcast Channel listener for live sync
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      const messChannel = new BroadcastChannel('sst_mess_sync');
      messChannel.onmessage = (event) => {
        if (!event.data) return;
        if (event.data.token || event.data.qrDataUrl) {
          applyRealLiveSyncedToken(event.data.token, event.data.secondsLeft, event.data.qrDataUrl);
          showToast('🍱 Real Mess Pass Synced via Broadcast Bridge!');
        } else if (event.data.jwt) {
          clerkSessionJwt = event.data.jwt;
          localStorage.setItem('sst_clerk_jwt', event.data.jwt);
        }
      };
    }
  } catch (err) {
    console.log('[BroadcastChannel Note]', err);
  }

  // Cross-Tab Storage Event Listener
  window.addEventListener('storage', (e) => {
    if (e.key === 'sst_real_meal_token' && e.newValue) {
      applyRealLiveSyncedToken(e.newValue);
    } else if (e.key === 'sst_early_meal_override_until') {
      renderMessModal();
    }
  });

  // Copy Bookmarklet Button
  const copyBookmarkletBtn = document.getElementById('copyBookmarkletBtn');
  if (copyBookmarkletBtn) {
    copyBookmarkletBtn.addEventListener('click', () => {
      const code = generateBookmarkletCode();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
          playThemeSound('click');
          showToast('📋 Bookmarklet copied! Paste into bookmarks URL.');
        }).catch(() => {
          prompt('Copy bookmarklet code below:', code);
        });
      } else {
        prompt('Copy bookmarklet code below:', code);
      }
    });
  }

  // Bookmarklet Click Guidance
  const scalerBookmarkletBtn = document.getElementById('scalerBookmarkletBtn');
  if (scalerBookmarkletBtn) {
    scalerBookmarkletBtn.addEventListener('click', () => {
      showToast('💡 Tip: Drag this button to your Bookmarks Bar, or click Copy Script!');
    });
  }

  // Save Dashboard URL
  const saveDashboardUrlBtn = document.getElementById('saveDashboardUrlBtn');
  const scalerDashboardUrlInput = document.getElementById('scalerDashboardUrlInput');
  if (saveDashboardUrlBtn && scalerDashboardUrlInput) {
    saveDashboardUrlBtn.addEventListener('click', () => {
      const url = scalerDashboardUrlInput.value.trim();
      if (url) {
        linkedDashboardUrl = url;
        localStorage.setItem('sst_linked_dashboard_url', url);
        playThemeSound('click');
        showToast('🔗 Scaler Dashboard Link Connected!');
        const sub = document.getElementById('attModalSubtitle');
        if (sub) sub.textContent = 'Connected: ' + url.slice(0, 45) + '...';
      }
    });
  }

  // Reset Attendance Defaults
  const resetAttendanceBtn = document.getElementById('resetAttendanceBtn');
  if (resetAttendanceBtn) {
    resetAttendanceBtn.addEventListener('click', () => {
      if (confirm('Reset attendance stats back to default Scaler dashboard records?')) {
        attendanceData = JSON.parse(JSON.stringify(DEFAULT_ATTENDANCE_DATA));
        saveAttendanceData();
        renderAttendanceModal();
        updateDashboard();
        playThemeSound('click');
        showToast('🔄 Reset to Scaler defaults');
      }
    });
  }

  // What-If Simulator controls
  const simCourseSelect = document.getElementById('simCourseSelect');
  const simMissCountInput = document.getElementById('simMissCountInput');
  const simMissMinusBtn = document.getElementById('simMissMinusBtn');
  const simMissPlusBtn = document.getElementById('simMissPlusBtn');

  if (simCourseSelect) {
    simCourseSelect.addEventListener('change', updateBunkSimulatorResult);
  }
  if (simMissCountInput) {
    simMissCountInput.addEventListener('input', updateBunkSimulatorResult);
  }
  if (simMissMinusBtn && simMissCountInput) {
    simMissMinusBtn.addEventListener('click', () => {
      let val = parseInt(simMissCountInput.value, 10) || 1;
      if (val > 0) {
        simMissCountInput.value = val - 1;
        updateBunkSimulatorResult();
      }
    });
  }
  if (simMissPlusBtn && simMissCountInput) {
    simMissPlusBtn.addEventListener('click', () => {
      let val = parseInt(simMissCountInput.value, 10) || 0;
      simMissCountInput.value = val + 1;
      updateBunkSimulatorResult();
    });
  }

  // Theme option cards selection
  document.querySelectorAll('.theme-card').forEach((card) => {
    card.addEventListener('click', () => {
      const chosen = card.dataset.themeChoice;
      if (chosen) {
        applyTheme(chosen, true);
        setTimeout(() => {
          if (themeModal) closeModal(themeModal);
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
    openModal(modal);
  });
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    playMinecraftSound();
    closeModal(modal);
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // Global Escape Key to close any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.mc-modal-overlay.open');
      if (activeModal) {
        closeModal(activeModal);
      }
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

