export interface IUpdateUser {
  id: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  birthdate?: string;
  email?: string;
  password?: string;
  image?: string;
}

export interface IUpdateUserFormPicture {
  username?: string;
  image?: string;
}

export interface IUpdateUserForm {
  firstname?: string;
  lastname?: string;
  birthdate?: string;
  email?: string;
  password?: string;
}

export interface IAlbum {
  id: number;
  name: string;
  year: string;
  topic: string;
  images?: string;
}

export interface IMyAlbumsProps {
  onCreateAlbum: () => void;
  albums: IAlbum[];
}

export interface IUpdateAlbum {
  id: number;
  name?: string;
  theme?: string;
  year?: string;
  images?: string;
}
