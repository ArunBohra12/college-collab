export interface BountyProps {
  level: string;
  price: number;
  ques: string;
  answers: [
    {
      ans: string;
      user: HunterProps;
    }
  ];
}

interface HunterProps {
  name: string;
  photo: string;
  tagline: string;
  bountyLevel: number;
}
