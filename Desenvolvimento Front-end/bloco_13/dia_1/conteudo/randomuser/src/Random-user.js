import React from 'react'

export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading:true,
      user: {

        "results": [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "William",
                    "last": "Johansen"
                },
                "location": {
                    "street": {
                        "number": 9922,
                        "name": "Høgevej"
                    },
                    "city": "Sommersted",
                    "state": "Syddanmark",
                    "country": "Denmark",
                    "postcode": 72946,
                    "coordinates": {
                        "latitude": "-35.5857",
                        "longitude": "-25.3699"
                    },
                    "timezone": {
                        "offset": "+7:00",
                        "description": "Bangkok, Hanoi, Jakarta"
                    }
                },
                "email": "william.johansen@example.com",
                "login": {
                    "uuid": "f4df5cfb-725a-49a9-8c33-cb27681d4e92",
                    "username": "brownelephant800",
                    "password": "silver1",
                    "salt": "EjtQLPMr",
                    "md5": "2815d6b7f27d6d450f9462c91f964cfb",
                    "sha1": "a6df109e3fa3ce6aff124a2cfeab2bd024bcbacb",
                    "sha256": "cb84c2a9cc68156d04e0a2e684b3a614c037fb69576db45b08c6a910232d42ee"
                },
                "dob": {
                    "date": "1982-10-27T00:41:15.291Z",
                    "age": 39
                },
                "registered": {
                    "date": "2004-11-26T02:34:51.690Z",
                    "age": 17
                },
                "phone": "45182961",
                "cell": "85239979",
                "id": {
                    "name": "CPR",
                    "value": "271082-9276"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/46.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/46.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/46.jpg"
                },
                "nat": "DK"
            }
        ],
        "info": {
            "seed": "c68b14ef58a13a62",
            "results": 1,
            "page": 1,
            "version": "1.3"
        }
    
    }
    }
  }

  inforUser = () => {
    const { user:{ results:[ {name: { first, last }, email, picture: { large }} ] }} = this.state;
    console.log(first);
    return (
      <section>
      <img src={ large } alt="Foto da pessoa" />
      <p>Nome: { first} </p>
      <p>Idade: { last }</p>
      <p>Email: { email }</p>
    </section>
    )
  }
  
  render() {
    return (
     this.inforUser()
    )
  }
}
