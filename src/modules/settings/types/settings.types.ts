export interface IUpdateUser{
    id: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    birthdate?: string,
    email?: string,
    password?: string,
    image?: string,
}

export interface IUpdateUserFormPicture{
    username?: string,
    image?: string
}

export interface IUpdateUserForm{
    firstname?: string,
    lastname?: string,
    birthdate?: string,
    email?: string,
    password?: string
}