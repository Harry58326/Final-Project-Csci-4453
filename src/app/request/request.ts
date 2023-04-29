export interface Request {
  height: string;
  weight: number;
  player_name: string;
  country: string;
  school_name: string;
  jersey_number: number;
  position: string;
  school_type: SchoolType;
  status: StatusType;
  teams: string;
}

export type SchoolType = 'High School' | 'University' | 'Community College' | 'Foreign School';
export type StatusType = 'Active' | 'Inactive';
