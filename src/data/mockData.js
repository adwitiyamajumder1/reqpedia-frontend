// export const reportData = [
//   { name: "Group A", value: 4000 },
//   { name: "Group B", value: 3000 },
//   { name: "Group C", value: 2000 },
//   { name: "Group D", value: 2780 },
//   { name: "Group E", value: 1890 },
// ];

export const pieData = [
  { name: "Hired", value: 4 },
  { name: "Interview state", value: 5 },
  { name: "Awaiting Response from Candidate", value: 2 },
  { name: "Screening done", value: 3 },
];

export const candidates = [
  {
    name: "John Doe",
    id: "1234",
    email: "john.doe@example.com",
    phone: "555-555-5555",
    qualification: "MBA",
    experience: "5 years",
    referredby: "Jane Smith",
  },
  {
    name: "Jane Smith",
    id: "5678",
    email: "jane.smith@example.com",
    phone: "555-555-5555",
    qualification: "PhD",
    experience: "8 years",
    referredby: "Jane Smith",
  },
  {
    name: "Alice Johnson",
    id: "9101",
    email: "alice.johnson@example.com",
    phone: "555-555-5555",
    qualification: "BSc Computer Science",
    experience: "3 years",
    referredby: "Jane Smith",
  },
  {
    name: "Bob Brown",
    id: "1121",
    email: "bob.brown@example.com",
    phone: "555-555-5555",
    qualification: "BBA",
    experience: "6 years",
    referredby: "Jane Smith",
  },
  {
    name: "Charlie Davis",
    id: "3141",
    email: "charlie.davis@example.com",
    phone: "555-555-5555",
    qualification: "MSc Information Technology",
    experience: "4 years",
    referredby: "Jane Smith",
  },
  {
    name: "Diana Green",
    id: "5161",
    email: "diana.green@example.com",
    phone: "555-555-5555",
    qualification: "MBA Marketing",
    experience: "2 years",
    referredby: "Jane Smith",
  },
  {
    name: "Evan White",
    id: "7181",
    email: "evan.white@example.com",
    phone: "555-555-5555",
    qualification: "BSc Engineering",
    experience: "7 years",
    referredby: "Jane Smith",
  },
  {
    name: "Fiona Black",
    id: "9202",
    email: "fiona.black@example.com",
    phone: "555-555-5555",
    qualification: "MBA Finance",
    experience: "5 years",
    referredby: "Jane Smith",
  },
];

export const reportData = [
  { month: "Jan", jdsSent: 20, candidatesJoined: 15 },
  { month: "Feb", jdsSent: 25, candidatesJoined: 10 },
  { month: "Mar", jdsSent: 30, candidatesJoined: 20 },
  { month: "Apr", jdsSent: 15, candidatesJoined: 25 },
  { month: "May", jdsSent: 40, candidatesJoined: 30 },
  { month: "Jun", jdsSent: 35, candidatesJoined: 20 },
  { month: "Jul", jdsSent: 50, candidatesJoined: 40 },
  { month: "Aug", jdsSent: 45, candidatesJoined: 30 },
  { month: "Sep", jdsSent: 60, candidatesJoined: 50 },
  { month: "Oct", jdsSent: 55, candidatesJoined: 45 },
  { month: "Nov", jdsSent: 70, candidatesJoined: 60 },
  { month: "Dec", jdsSent: 65, candidatesJoined: 55 },
];

export const mockData = [
  {
    jdNo: "JD001",
    jdDescription: "Frontend Developer at ABC Corp",
    profilesSubmitted: 15,
    profilesUnderDiscussion: 5,
    offered: 10,
    joined: 5,
    profiles: [
      {
        name: "Alice Johnson",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Bob Smith",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Charlie Doe",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "David Brown",
        status: "other",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Eva Green",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
  {
    jdNo: "JD002",
    jdDescription: "Backend Engineer at Lorem Ipsum Inc.",
    profilesSubmitted: 20,
    profilesUnderDiscussion: 7,
    offered: 12,
    joined: 6,
    profiles: [
      {
        name: "Frank Harris",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      { name: "Grace Lee", status: "joined", avatar: "../assets/avatar-2.jpg" },
      {
        name: "Helen White",
        status: "other",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Ivy Young",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Jack Black",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
  {
    jdNo: "JD003",
    jdDescription: "Full Stack Developer at TechCo",
    profilesSubmitted: 18,
    profilesUnderDiscussion: 10,
    offered: 8,
    joined: 4,
    profiles: [
      {
        name: "Kate Brown",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Leo Green",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      { name: "Mia Taylor", status: "other", avatar: "../assets/avatar-2.jpg" },
      {
        name: "Nick Clark",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Olivia Davis",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
  {
    jdNo: "JD004",
    jdDescription: "Data Scientist at Ipsum Analytics",
    profilesSubmitted: 25,
    profilesUnderDiscussion: 15,
    offered: 15,
    joined: 10,
    profiles: [
      {
        name: "Paul Walker",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Quinn Foster",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Rachel Adams",
        status: "other",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Sam Rogers",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Tina Edwards",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
  {
    jdNo: "JD005",
    jdDescription: "DevOps Engineer at Omega Systems",
    profilesSubmitted: 22,
    profilesUnderDiscussion: 8,
    offered: 12,
    joined: 7,
    profiles: [
      { name: "Uma Patel", status: "joined", avatar: "../assets/avatar-2.jpg" },
      {
        name: "Vince King",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      { name: "Will Ford", status: "other", avatar: "../assets/avatar-2.jpg" },
      {
        name: "Xena Harris",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Yara Woods",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
];

export const mockDataForReportsAdmin = [
  {
    jdNo: "JD001",
    jdDescription: "Frontend Developer at ABC Corp",
    profilesSubmitted: 15,
    profilesUnderDiscussion: 5,
    offered: 10,
    joined: 5,
    recruiter: "Sarah Connor",
    profiles: [
      {
        name: "Alice Johnson",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Bob Smith",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Charlie Doe",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "David Brown",
        status: "other",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Eva Green",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
  {
    jdNo: "JD002",
    jdDescription: "Backend Engineer at Lorem Ipsum Inc.",
    profilesSubmitted: 20,
    profilesUnderDiscussion: 7,
    offered: 12,
    joined: 6,
    recruiter: "John Doe",
    profiles: [
      {
        name: "Frank Harris",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      { name: "Grace Lee", status: "joined", avatar: "../assets/avatar-2.jpg" },
      {
        name: "Helen White",
        status: "other",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Ivy Young",
        status: "offered",
        avatar: "../assets/avatar-2.jpg",
      },
      {
        name: "Jack Black",
        status: "joined",
        avatar: "../assets/avatar-2.jpg",
      },
    ],
  },
];

export const columnsForReports = [
  { headerName: "JD No.", field: "jdNo", sortable: true },
  {
    headerName: "JD Description",
    field: "jdDescription",
    sortable: true,
    filter: true,
  },
  {
    headerName: "No of profiles submitted",
    field: "profilesSubmitted",
    sortable: true,
  },
  {
    headerName: "No of profiles under discussion",
    field: "profilesUnderDiscussion",
    sortable: true,
  },
  { headerName: "Offered", field: "offered", sortable: true },
  { headerName: "Joined", field: "joined", sortable: true },
  {
    headerName: "%age profile selected",
    field: "selectedPercentage",
    valueGetter: (params) => {
      const { offered, profilesSubmitted } = params.data;
      return ((offered / profilesSubmitted) * 100).toFixed(2) + "%";
    },
    sortable: true,
  },
  {
    headerName: "%age profile rejected",
    field: "rejectedPercentage",
    valueGetter: (params) => {
      const { profilesSubmitted, joined } = params.data;
      const rejected = profilesSubmitted - joined;
      return ((rejected / profilesSubmitted) * 100).toFixed(2) + "%";
    },
    sortable: true,
  },
];
