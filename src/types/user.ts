export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  isDeleted: boolean;
  displayName: string;
  encodedImage?: string;
  profileImage?: string;
  // TODO
  userType: string;
  email: string;
  brokerageName?: string;
}
