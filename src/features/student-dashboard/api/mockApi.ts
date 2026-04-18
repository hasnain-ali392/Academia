import { StudentDashboardData } from "../types";

const mockDashboardData: StudentDashboardData = {
  performance: {
    cumulativeGpa: 3.82,
    deanListStatus: true,
    topPercentile: 5,
    courses: [
      { id: "c1", name: "Advanced Calculus", grade: "A", percentage: 94 },
      { id: "c2", name: "Quantum Physics", grade: "A-", percentage: 91 },
      { id: "c3", name: "Computer Science II", grade: "B+", percentage: 88 },
      { id: "c4", name: "Academic Ethics", grade: "A", percentage: 98 },
    ],
  },
  tasks: [
    {
      id: "t1",
      title: "Final Thesis Draft Submission",
      priority: "high",
      dueText: "Due in 4 hours",
      isCompleted: false,
    },
    {
      id: "t2",
      title: "Quantum Mechanics Problem Set",
      priority: "medium",
      dueText: "Tomorrow, 10:00 AM",
      isCompleted: false,
    },
    {
      id: "t3",
      title: "Library Book Return",
      priority: "low",
      dueText: "Oct 15, 2023",
      isCompleted: false,
    },
  ],
  chatHistory: [
    { id: "m1", sender: "ai", text: "Hello Alex! I noticed you have a Physics exam in 3 days. Would you like to review the Maxwell Equations notes?" },
    { id: "m2", sender: "user", text: "Yes, that would be great. Can we focus on the Gauss's Law part?" },
    { id: "m3", sender: "ai", text: "Certainly. I've prepared a 10-minute summary and 3 practice problems focusing on flux calculations. Ready?" },
  ],
  nextEvent: {
    id: "e1",
    title: "Career Fair: Tech Innovators 2023",
    location: "Main Hall",
    dateStr: "Oct 12",
    timeStr: "2:00 PM",
  },
};

export const studentDashboardApi = {
  getDashboardData: async (): Promise<StudentDashboardData> => {
    // Simulate network latency (500ms) for Suspense
    return new Promise((resolve) => setTimeout(() => resolve(mockDashboardData), 500));
  },
};
