import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name: string;
  peopledata = dummyData;
  onlyFemale: boolean = true;
  constructor(private httpClient: HttpClient) {
    this.name = "Aditya";
  }
}

const dummyData = [
  {
    "_id": "5f145a82b23fa55d34a9f81a",
    "index": 0,
    "guid": "7ce94d5c-66b6-4b09-b674-fc8ab4914b94",
    "isActive": false,
    "balance": "$1,837.49",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Salas Dunlap",
    "gender": "male",
    "company": "CINCYR",
    "email": "salasdunlap@cincyr.com",
    "phone": "+1 (901) 436-3955",
    "address": "155 Banker Street, Waukeenah, Wisconsin, 734",
    "about": "Ea fugiat veniam et ex fugiat ullamco pariatur. Non irure proident in occaecat enim culpa ullamco deserunt id cillum esse veniam labore. Dolore laborum proident deserunt excepteur id ex magna magna non excepteur consectetur.\r\n",
    "registered": "2020-07-06T05:56:16 -06:-30",
    "latitude": 64.54588,
    "longitude": -33.889336,
    "tags": [
      "ullamco",
      "consectetur",
      "eiusmod",
      "veniam",
      "sint",
      "nulla",
      "ad"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Juanita Macias"
      },
      {
        "id": 1,
        "name": "Carrie Duran"
      },
      {
        "id": 2,
        "name": "Lucia Miles"
      }
    ],
    "greeting": "Hello, Salas Dunlap! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5f145a827c6f339b588c3276",
    "index": 1,
    "guid": "59388e19-d3bc-464b-83ca-aceb114b66cc",
    "isActive": true,
    "balance": "$3,169.57",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": "Neva Kennedy",
    "gender": "female",
    "company": "OCEANICA",
    "email": "nevakennedy@oceanica.com",
    "phone": "+1 (942) 491-2694",
    "address": "563 Belvidere Street, Rutherford, Maryland, 2641",
    "about": "Laboris in irure magna ex deserunt tempor ipsum exercitation. Veniam proident irure enim sit dolor pariatur do ad ut sint. Ut ipsum occaecat incididunt ipsum laboris officia nostrud duis sint dolore laboris sunt eu. Ad sunt sunt duis proident amet labore aute proident eiusmod occaecat. Labore velit non aliquip sint aliqua. Incididunt sunt consectetur labore culpa amet nisi aliqua commodo et laborum. Id ipsum duis dolor eu aliquip ipsum culpa velit aute aliquip non deserunt velit.\r\n",
    "registered": "2016-09-29T08:33:56 -06:-30",
    "latitude": 34.856662,
    "longitude": -138.049918,
    "tags": [
      "cillum",
      "voluptate",
      "officia",
      "reprehenderit",
      "esse",
      "eiusmod",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Noel Hughes"
      },
      {
        "id": 1,
        "name": "Bartlett Nash"
      },
      {
        "id": 2,
        "name": "Harmon Clark"
      }
    ],
    "greeting": "Hello, Neva Kennedy! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f145a82cb58e81cd3970bf0",
    "index": 2,
    "guid": "92c9f20c-a95f-4983-8216-2f68e12323c5",
    "isActive": true,
    "balance": "$2,693.68",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": "Hoffman Cote",
    "gender": "male",
    "company": "DENTREX",
    "email": "hoffmancote@dentrex.com",
    "phone": "+1 (850) 529-2895",
    "address": "265 Stewart Street, Rosewood, New Jersey, 4531",
    "about": "Ex ut esse magna qui id incididunt laborum consequat non fugiat. Pariatur magna commodo irure est aliquip mollit consequat ullamco sunt aute exercitation tempor. Commodo velit mollit adipisicing deserunt officia laborum ipsum qui incididunt fugiat voluptate exercitation magna nisi.\r\n",
    "registered": "2020-01-11T04:46:23 -06:-30",
    "latitude": 71.345422,
    "longitude": 94.667293,
    "tags": [
      "cillum",
      "dolor",
      "exercitation",
      "fugiat",
      "cillum",
      "commodo",
      "tempor"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Nicholson Mccray"
      },
      {
        "id": 1,
        "name": "Randi Donaldson"
      },
      {
        "id": 2,
        "name": "Ashley Carr"
      }
    ],
    "greeting": "Hello, Hoffman Cote! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f145a82e063d8bcf6cb9f6b",
    "index": 3,
    "guid": "c7b717f0-51f8-4e8d-af0a-456274a4b86d",
    "isActive": true,
    "balance": "$2,661.81",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": "Winters Macdonald",
    "gender": "male",
    "company": "APPLICA",
    "email": "wintersmacdonald@applica.com",
    "phone": "+1 (886) 437-2795",
    "address": "449 Allen Avenue, Gilgo, Idaho, 2176",
    "about": "Irure incididunt aliqua sunt ea amet laboris excepteur et deserunt esse exercitation anim minim. Consectetur cillum enim ipsum ullamco mollit laborum proident pariatur enim aliqua esse labore. Sint irure consequat fugiat culpa cupidatat nisi ullamco sint. Consequat tempor irure irure sint tempor culpa dolor eu cillum exercitation irure id nulla. Occaecat non ea pariatur nostrud est culpa minim dolore do fugiat ullamco voluptate cillum.\r\n",
    "registered": "2017-08-30T06:16:03 -06:-30",
    "latitude": 0.970598,
    "longitude": -174.193382,
    "tags": [
      "nostrud",
      "Lorem",
      "mollit",
      "ad",
      "exercitation",
      "aute",
      "irure"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Dawson Gibson"
      },
      {
        "id": 1,
        "name": "June Britt"
      },
      {
        "id": 2,
        "name": "Deirdre Stevenson"
      }
    ],
    "greeting": "Hello, Winters Macdonald! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f145a821f6e6193670ee94a",
    "index": 4,
    "guid": "dbcf6d5f-db6c-458b-869f-7412b7d0896c",
    "isActive": true,
    "balance": "$3,897.62",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Kaufman Carey",
    "gender": "male",
    "company": "ANDRYX",
    "email": "kaufmancarey@andryx.com",
    "phone": "+1 (943) 531-3471",
    "address": "649 Boynton Place, Harleigh, Federated States Of Micronesia, 2206",
    "about": "Proident cillum ea voluptate anim minim aliquip aliqua. Esse laborum irure consectetur commodo aliqua adipisicing id ut id labore. Aute officia sunt magna tempor magna nostrud officia eu excepteur consequat do.\r\n",
    "registered": "2014-09-09T11:44:12 -06:-30",
    "latitude": 81.952104,
    "longitude": 65.107266,
    "tags": [
      "consectetur",
      "ex",
      "elit",
      "id",
      "dolor",
      "ad",
      "quis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Fleming Mckinney"
      },
      {
        "id": 1,
        "name": "Reva Vega"
      },
      {
        "id": 2,
        "name": "Katelyn Hendrix"
      }
    ],
    "greeting": "Hello, Kaufman Carey! You have 4 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5f145a82bd72ada9dfc60fe2",
    "index": 5,
    "guid": "76f921bb-d0a0-4855-9596-4abf628508aa",
    "isActive": true,
    "balance": "$2,091.01",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "green",
    "name": "Reba Slater",
    "gender": "female",
    "company": "QUORDATE",
    "email": "rebaslater@quordate.com",
    "phone": "+1 (968) 470-2180",
    "address": "964 Ainslie Street, Gerber, Florida, 2637",
    "about": "In velit pariatur non culpa aliqua. Veniam esse proident ipsum laboris sit labore incididunt laboris incididunt exercitation sint incididunt. Labore ex eu enim nisi ut consectetur excepteur ad eu laboris reprehenderit.\r\n",
    "registered": "2017-05-24T01:02:01 -06:-30",
    "latitude": -72.568662,
    "longitude": 168.87872,
    "tags": [
      "id",
      "et",
      "eiusmod",
      "deserunt",
      "eu",
      "eiusmod",
      "mollit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Laverne Faulkner"
      },
      {
        "id": 1,
        "name": "Moses Hutchinson"
      },
      {
        "id": 2,
        "name": "Randall Cox"
      }
    ],
    "greeting": "Hello, Reba Slater! You have 3 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5f145a82c3de2fe762103ee8",
    "index": 6,
    "guid": "8617d78d-8d3d-4381-816a-e71fe7e21bda",
    "isActive": true,
    "balance": "$2,208.65",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "Johanna Compton",
    "gender": "female",
    "company": "RAMJOB",
    "email": "johannacompton@ramjob.com",
    "phone": "+1 (938) 542-2658",
    "address": "738 Beard Street, Lupton, Mississippi, 9945",
    "about": "Velit et minim culpa ipsum et tempor nulla esse proident adipisicing in duis. Mollit fugiat dolor adipisicing dolor. Sit voluptate aliquip laboris nostrud aliquip minim sit tempor et ea nulla. Ea ad reprehenderit culpa amet aliquip velit est consequat elit consequat cillum consequat. Lorem veniam ullamco occaecat tempor. Duis aliquip anim commodo proident excepteur ex ullamco.\r\n",
    "registered": "2018-01-01T12:29:02 -06:-30",
    "latitude": 83.151624,
    "longitude": -32.593735,
    "tags": [
      "consequat",
      "esse",
      "nisi",
      "laborum",
      "eu",
      "in",
      "officia"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Richards Pierce"
      },
      {
        "id": 1,
        "name": "Cohen Nunez"
      },
      {
        "id": 2,
        "name": "Gray Reeves"
      }
    ],
    "greeting": "Hello, Johanna Compton! You have 1 unread messages.",
    "favoriteFruit": "banana"
  }
]
