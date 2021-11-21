export interface AddressContactType {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

export interface ContactType {
    name: string,
    email: string,
    address: AddressContactType
}

export interface PostType {
    title: string,
    body: string
}

export interface SocialType {
    id: number,
    icon: string,
    path: string
}
