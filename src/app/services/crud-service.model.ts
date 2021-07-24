interface AddressUsers {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}
interface CompanyUsers {
  name: string
  catchPhrase: string
  bs: string
}

export interface Users {
  id: number
  name: string
  email: string
  address: Readonly<AddressUsers>
  phone: string
  website: string
  company: Readonly<CompanyUsers>
}
