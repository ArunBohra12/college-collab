export interface CollegeProps {
  collegename: string;
  collegeWebsite: string;
  collegeLogo: string;
  enrolledStudents: StudentProps[];
  collegeRepresentatives: StudentProps[];
}

interface StudentProps {
  studentId: string;
}
