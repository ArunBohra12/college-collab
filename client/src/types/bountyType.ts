export interface BountyProps {
  id: string;
  level: string;
  price: number;
  ques: string;
  answers: [
    {
      ans: string;
      user: HunterProps;
      hidden: boolean;
    }
  ];
}

interface HunterProps {
  name: string;
  photo: string;
  tagline: string;
  bountyLevel: number;
}
