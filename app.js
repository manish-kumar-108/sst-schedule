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
  setupUIEventListeners();
  setupGroupButtons();
  initAudio();
  registerServiceWorker();
  checkNotificationStatus();
  
  // Start main loop
  updateDashboard();
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
  if (status.statusType === 'LUNCH') {
    // Render 10 hunger shanks
    const full = Math.round((status.progressPct / 100) * 10);
    let html = '';
    for (let i = 0; i < 10; i++) {
      html += i < (10 - full) ? '🍗' : '🦴';
    }
    container.innerHTML = html;
  } else {
    // Render 10 hearts
    const remainingHearts = Math.min(10, Math.ceil((status.minsRemaining / (status.totalDuration || 105)) * 10));
    let html = '';
    for (let i = 0; i < 10; i++) {
      html += i < remainingHearts ? '❤️' : '🖤';
    }
    container.innerHTML = html;
  }
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

  if (isSimulatorMode) {
    const h12 = simHours % 12 === 0 ? 12 : simHours % 12;
    const p = simHours < 12 ? 'AM' : 'PM';
    clock.textContent = `[SIM] ${h12}:${simMinutes.toString().padStart(2, '0')} ${p}`;
    dayNightIcon.textContent = (simHours >= 6 && simHours < 18) ? '☀️' : '🌙';
  } else {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
    const h = now.getHours();
    dayNightIcon.textContent = (h >= 6 && h < 18) ? '☀️' : '🌙';
  }

  updateDashboard();

  // Send update to sticky notification every minute
  const s = new Date().getSeconds();
  if (s === 0) {
    updateStickyNotification();
  }
}

// ==========================================
// 7. EVENT LISTENERS & CONTROLS
// ==========================================
function setupUIEventListeners() {
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
// 8. MINECRAFT AUDIO SYNTHESIZER
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

function playMinecraftSound() {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (err) {
    // Ignore audio autoplay restrictions
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
