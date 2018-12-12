import { Injectable } from '@angular/core';
import { Subscriber } from '../models/subscriber';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  subscribers: Observable<Subscriber[]>;

  constructor() { }

  subscribersForm = new FormGroup({
    InternalId: new FormControl(null),
    SNo: new FormControl(''),
    CreatedDate: new FormControl(''),
    SubscriptionNo: new FormControl('', Validators.required),
    CustomerName: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    TypeId: new FormControl('', Validators.required),
    Address1: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Address2: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Address3: new FormControl(''),
    City: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    Pin: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Phone: new FormControl(''),
    ModifiedDate: new FormControl(''),
    Comments: new FormControl(''),
    DueDate: new FormControl(''),
    IsInvalid: new FormControl(''),
    CreatedByUserName: new FormControl(''),
    LoyaltyUserId: new FormControl('', Validators.required),
    RenewedDate: new FormControl('')
  })

  insertSubscriber(model) {

    console.log(model);
    // After writing the values into database
    this.subscribersForm.reset();
  }

  editSubscriber(model) {

    console.log(model);
    // After writing the values into database
    this.subscribersForm.reset();
  }

  deleteSubscriber(model) {
    console.log(model);
    this.subscribersForm.reset();
  }

  loadForm(sub) {
    console.log(sub);
    this.subscribersForm.setValue(sub);
  }

  getSubscribers() {

    let data = [
      {
        "InternalId": "5c0fdf102496fde93d269d8c",
        "SNo": 0,
        "CreatedDate": "13-10-2015",
        "SubscriptionNo": "5c0fdf101dcf9160ea63783f",
        "CustomerName": "Chen Albert",
        "TypeId": 3,
        "Address1": "656 Powers Street",
        "Address2": "Nogal",
        "Address3": "New York, 7027",
        "City": "Vowinckel",
        "State": "Arizona",
        "Country": "Louisiana",
        "Pin": "8515A",
        "Email": "chenalbert@exoteric.com",
        "Mobile": "+1 (900) 461-2114",
        "Phone": "+1 (847) 564-3008",
        "ModifiedDate": "14-09-2016",
        "Comments": "Duis ad qui labore non sunt ipsum est Lorem. Labore qui anim laboris est do excepteur ut veniam in. Deserunt occaecat non aute non est commodo quis id dolor adipisicing eiusmod proident. Magna ea ex dolore reprehenderit duis duis anim adipisicing culpa adipisicing. Qui esse consequat anim consectetur ex dolor. Ad magna nulla aliqua pariatur laborum laboris. Duis in tempor adipisicing fugiat id qui deserunt est mollit enim ex.\r\n",
        "DueDate": "04-01-2017",
        "IsInvalid": true,
        "CreatedByUserName": "Wiggins",
        "LoyaltyUserId": 7674,
        "RenewedDate": "13-05-2017"
      },
      {
        "InternalId": "5c0fdf1063332cb3ce8d15fd",
        "SNo": 1,
        "CreatedDate": "25-02-2016",
        "SubscriptionNo": "5c0fdf105ce69f6ade1ddae2",
        "CustomerName": "Tonia Bates",
        "TypeId": 1,
        "Address1": "728 Kathleen Court",
        "Address2": "Westboro",
        "Address3": "North Carolina, 1495",
        "City": "Crisman",
        "State": "New Mexico",
        "Country": "South Dakota",
        "Pin": "986A",
        "Email": "toniabates@exoteric.com",
        "Mobile": "+1 (811) 403-3582",
        "Phone": "+1 (895) 509-3042",
        "ModifiedDate": "31-01-2018",
        "Comments": "Commodo consequat mollit ut culpa tempor esse. Ullamco amet deserunt id nostrud Lorem eu quis veniam adipisicing ipsum. Quis magna ea do pariatur eu tempor consectetur deserunt aliquip laboris nulla. Magna laborum ut duis qui. Tempor proident magna ad sint. Reprehenderit ad excepteur sit anim amet reprehenderit proident ea. Dolor irure culpa mollit nisi sint proident.\r\n",
        "DueDate": "11-10-2016",
        "IsInvalid": false,
        "CreatedByUserName": "Felicia",
        "LoyaltyUserId": 5571,
        "RenewedDate": "09-05-2018"
      },
      {
        "InternalId": "5c0fdf10b61b7d516741b60a",
        "SNo": 2,
        "CreatedDate": "04-05-2016",
        "SubscriptionNo": "5c0fdf10ee7ee173f1d89011",
        "CustomerName": "Lucinda Andrews",
        "TypeId": 1,
        "Address1": "439 Nelson Street",
        "Address2": "Yorklyn",
        "Address3": "Iowa, 5066",
        "City": "Turah",
        "State": "Pennsylvania",
        "Country": "Marshall Islands",
        "Pin": "9833A",
        "Email": "lucindaandrews@exoteric.com",
        "Mobile": "+1 (884) 423-3041",
        "Phone": "+1 (856) 449-3935",
        "ModifiedDate": "08-10-2015",
        "Comments": "Elit occaecat amet dolor fugiat cillum ex deserunt nisi exercitation amet adipisicing aute amet enim. Amet dolor ex reprehenderit voluptate culpa culpa. Incididunt ea ipsum Lorem laboris laborum adipisicing incididunt laborum. Fugiat sunt laboris culpa sunt incididunt eiusmod tempor anim.\r\n",
        "DueDate": "17-10-2018",
        "IsInvalid": true,
        "CreatedByUserName": "Theresa",
        "LoyaltyUserId": 8620,
        "RenewedDate": "07-07-2015"
      },
      {
        "InternalId": "5c0fdf1098f723438b88ee84",
        "SNo": 3,
        "CreatedDate": "03-09-2017",
        "SubscriptionNo": "5c0fdf10c88090a25e0e7c0a",
        "CustomerName": "Daphne Cline",
        "TypeId": 2,
        "Address1": "308 Dean Street",
        "Address2": "Belfair",
        "Address3": "North Dakota, 5758",
        "City": "Baker",
        "State": "Utah",
        "Country": "Texas",
        "Pin": "6790A",
        "Email": "daphnecline@exoteric.com",
        "Mobile": "+1 (980) 433-3289",
        "Phone": "+1 (905) 436-3848",
        "ModifiedDate": "08-05-2014",
        "Comments": "Aliquip magna nisi qui aliquip cupidatat. Consequat fugiat excepteur commodo elit aute cillum amet laborum nulla eu consequat nostrud aliquip. Qui amet elit laborum est ut Lorem esse culpa aliquip ullamco ipsum ex proident reprehenderit.\r\n",
        "DueDate": "22-01-2018",
        "IsInvalid": true,
        "CreatedByUserName": "Ball",
        "LoyaltyUserId": 1036,
        "RenewedDate": "06-11-2017"
      },
      {
        "InternalId": "5c0fdf101c9bfe516fed79c8",
        "SNo": 4,
        "CreatedDate": "31-03-2016",
        "SubscriptionNo": "5c0fdf10e4752623ade53b03",
        "CustomerName": "Walton Burks",
        "TypeId": 3,
        "Address1": "157 Glenwood Road",
        "Address2": "Cascades",
        "Address3": "Minnesota, 9109",
        "City": "Rote",
        "State": "Guam",
        "Country": "Hawaii",
        "Pin": "8384A",
        "Email": "waltonburks@exoteric.com",
        "Mobile": "+1 (891) 523-2525",
        "Phone": "+1 (807) 495-3479",
        "ModifiedDate": "09-02-2014",
        "Comments": "Irure velit adipisicing dolor occaecat nostrud commodo quis ea. Veniam officia duis commodo enim voluptate. Qui laborum nulla pariatur aliquip do amet voluptate quis officia ex adipisicing eu. Elit cupidatat dolor eiusmod duis aliquip ad anim ut aliquip commodo tempor velit exercitation. Do Lorem incididunt incididunt aute laborum. Nostrud dolor proident tempor aliquip laboris. Aliquip id pariatur occaecat eu excepteur.\r\n",
        "DueDate": "03-10-2015",
        "IsInvalid": true,
        "CreatedByUserName": "Ashlee",
        "LoyaltyUserId": 7213,
        "RenewedDate": "16-08-2018"
      },
      {
        "InternalId": "5c0fdf10722dbe514814d790",
        "SNo": 5,
        "CreatedDate": "27-10-2014",
        "SubscriptionNo": "5c0fdf10dca5bd696016d0f2",
        "CustomerName": "Lawanda Alvarez",
        "TypeId": 1,
        "Address1": "160 Metrotech Courtr",
        "Address2": "Shrewsbury",
        "Address3": "Delaware, 1938",
        "City": "Haring",
        "State": "California",
        "Country": "Washington",
        "Pin": "5476A",
        "Email": "lawandaalvarez@exoteric.com",
        "Mobile": "+1 (840) 547-3037",
        "Phone": "+1 (802) 433-2954",
        "ModifiedDate": "02-06-2014",
        "Comments": "Ullamco dolor Lorem ipsum nostrud adipisicing exercitation ad quis velit cillum cupidatat. Sint irure esse eiusmod culpa exercitation mollit duis ad eu cupidatat velit exercitation duis nulla. Et pariatur commodo amet nulla incididunt excepteur fugiat. Reprehenderit pariatur aute ea aute ex. Nulla ipsum amet ut incididunt ut sint pariatur ut minim cillum culpa cillum. Laborum sit incididunt dolore sint ad exercitation aute non consectetur velit. Aliqua eu est id elit consectetur Lorem consequat occaecat.\r\n",
        "DueDate": "19-10-2016",
        "IsInvalid": false,
        "CreatedByUserName": "Whitehead",
        "LoyaltyUserId": 2225,
        "RenewedDate": "24-03-2015"
      },
      {
        "InternalId": "5c0fdf1070663613cb09e16d",
        "SNo": 6,
        "CreatedDate": "24-11-2016",
        "SubscriptionNo": "5c0fdf10767f4422c382f01c",
        "CustomerName": "Joseph Hopper",
        "TypeId": 1,
        "Address1": "196 Gates Avenue",
        "Address2": "Garfield",
        "Address3": "Michigan, 5822",
        "City": "Galesville",
        "State": "Virgin Islands",
        "Country": "Alaska",
        "Pin": "8649A",
        "Email": "josephhopper@exoteric.com",
        "Mobile": "+1 (932) 451-3862",
        "Phone": "+1 (925) 430-3456",
        "ModifiedDate": "26-12-2017",
        "Comments": "Ut consequat ex reprehenderit dolore. Ea et dolore fugiat adipisicing ex. Est occaecat adipisicing consectetur qui esse minim commodo veniam sit ut velit deserunt.\r\n",
        "DueDate": "18-08-2014",
        "IsInvalid": false,
        "CreatedByUserName": "Janette",
        "LoyaltyUserId": 5339,
        "RenewedDate": "26-03-2017"
      },
      {
        "InternalId": "5c0fdf10d497dae8bbb2d9b5",
        "SNo": 7,
        "CreatedDate": "30-08-2017",
        "SubscriptionNo": "5c0fdf105c6dd2a9b018788c",
        "CustomerName": "Elsa Roy",
        "TypeId": 3,
        "Address1": "354 Plymouth Street",
        "Address2": "Edmund",
        "Address3": "Idaho, 4827",
        "City": "Albrightsville",
        "State": "New Jersey",
        "Country": "Nebraska",
        "Pin": "2888A",
        "Email": "elsaroy@exoteric.com",
        "Mobile": "+1 (990) 452-3619",
        "Phone": "+1 (820) 459-2780",
        "ModifiedDate": "27-08-2016",
        "Comments": "Nulla sit aute cupidatat minim labore cupidatat commodo excepteur in nulla aliquip elit. Ullamco esse pariatur labore eiusmod cupidatat pariatur minim eu velit cillum Lorem. Occaecat esse deserunt labore cupidatat minim id anim magna. Sint et exercitation officia eu. Excepteur amet occaecat mollit sint ex nisi cillum adipisicing amet fugiat non in ad eiusmod. Ut commodo tempor nulla sit eiusmod commodo nulla Lorem aute sunt tempor.\r\n",
        "DueDate": "25-04-2015",
        "IsInvalid": true,
        "CreatedByUserName": "Adele",
        "LoyaltyUserId": 6578,
        "RenewedDate": "05-04-2015"
      },
      {
        "InternalId": "5c0fdf10e0c2bd4ccfada402",
        "SNo": 8,
        "CreatedDate": "11-08-2018",
        "SubscriptionNo": "5c0fdf10d0bfeac1b44a550f",
        "CustomerName": "Herman Vaughn",
        "TypeId": 3,
        "Address1": "147 Taaffe Place",
        "Address2": "Kennedyville",
        "Address3": "Puerto Rico, 8702",
        "City": "Urie",
        "State": "District Of Columbia",
        "Country": "Alabama",
        "Pin": "2912A",
        "Email": "hermanvaughn@exoteric.com",
        "Mobile": "+1 (952) 514-3678",
        "Phone": "+1 (953) 419-2705",
        "ModifiedDate": "10-04-2017",
        "Comments": "Consequat amet veniam ea Lorem consectetur ut eiusmod duis nostrud mollit adipisicing et minim. Mollit dolore magna tempor sint eiusmod ad in. Eiusmod officia eu sit anim enim. Labore est qui sint nostrud Lorem dolor.\r\n",
        "DueDate": "28-09-2016",
        "IsInvalid": true,
        "CreatedByUserName": "Hobbs",
        "LoyaltyUserId": 1859,
        "RenewedDate": "21-08-2015"
      },
      {
        "InternalId": "5c0fdf109651b49dc36894a4",
        "SNo": 9,
        "CreatedDate": "29-01-2018",
        "SubscriptionNo": "5c0fdf102c3c92e76d780eca",
        "CustomerName": "Ramsey Bell",
        "TypeId": 3,
        "Address1": "874 Lincoln Road",
        "Address2": "Crumpler",
        "Address3": "Wyoming, 9638",
        "City": "Deltaville",
        "State": "Kansas",
        "Country": "Federated States Of Micronesia",
        "Pin": "6788A",
        "Email": "ramseybell@exoteric.com",
        "Mobile": "+1 (980) 492-2027",
        "Phone": "+1 (975) 419-3034",
        "ModifiedDate": "23-10-2017",
        "Comments": "Veniam nostrud aliqua velit proident veniam velit voluptate. Quis sunt ipsum esse dolor. In eu ullamco dolor ex eu enim sint est duis elit fugiat minim. Irure culpa non incididunt minim est non pariatur magna incididunt. Labore incididunt pariatur ad magna nulla do elit officia. Quis aliquip elit officia veniam esse minim deserunt in. Sit est id est mollit nisi officia deserunt officia amet duis.\r\n",
        "DueDate": "18-03-2018",
        "IsInvalid": true,
        "CreatedByUserName": "Vickie",
        "LoyaltyUserId": 5575,
        "RenewedDate": "23-06-2018"
      },
      {
        "InternalId": "5c0fdf10b4088018f5d42f4f",
        "SNo": 10,
        "CreatedDate": "02-06-2016",
        "SubscriptionNo": "5c0fdf105acb85f1d9fb7888",
        "CustomerName": "Alisha Hamilton",
        "TypeId": 1,
        "Address1": "624 President Street",
        "Address2": "Boykin",
        "Address3": "Massachusetts, 4101",
        "City": "Wiscon",
        "State": "Indiana",
        "Country": "Kentucky",
        "Pin": "3354A",
        "Email": "alishahamilton@exoteric.com",
        "Mobile": "+1 (881) 438-3311",
        "Phone": "+1 (967) 528-2867",
        "ModifiedDate": "01-08-2014",
        "Comments": "Nulla anim aute sunt ut consequat ipsum officia. Anim in elit mollit eiusmod sint aute occaecat laboris velit quis. Veniam velit magna tempor id ex minim ut reprehenderit enim enim nostrud. Ut tempor ex excepteur tempor qui velit esse enim anim ut ad amet. Id consequat qui nisi aute magna cillum anim fugiat duis et fugiat consectetur ea ex.\r\n",
        "DueDate": "20-04-2018",
        "IsInvalid": false,
        "CreatedByUserName": "Jacklyn",
        "LoyaltyUserId": 9746,
        "RenewedDate": "20-10-2014"
      },
      {
        "InternalId": "5c0fdf106ba41fd939ef750a",
        "SNo": 11,
        "CreatedDate": "25-10-2015",
        "SubscriptionNo": "5c0fdf10d842a96146a8b14c",
        "CustomerName": "Patel Hyde",
        "TypeId": 1,
        "Address1": "939 Richmond Street",
        "Address2": "Moraida",
        "Address3": "Mississippi, 8973",
        "City": "Allensworth",
        "State": "Vermont",
        "Country": "Oregon",
        "Pin": "7916A",
        "Email": "patelhyde@exoteric.com",
        "Mobile": "+1 (824) 413-3290",
        "Phone": "+1 (978) 429-2790",
        "ModifiedDate": "02-04-2016",
        "Comments": "Quis consectetur reprehenderit occaecat eu sint nisi exercitation amet voluptate quis. Enim consectetur voluptate esse ullamco ullamco. Reprehenderit irure laboris officia amet non quis esse culpa in anim occaecat occaecat est. Laboris dolor minim quis in cupidatat occaecat adipisicing reprehenderit adipisicing amet exercitation aute. Et magna incididunt ex sint est enim anim ad est ut ea velit veniam. Lorem velit dolore aute ipsum veniam aute ut sint aliquip. Nostrud aute id quis reprehenderit dolor consequat excepteur dolore culpa elit dolor excepteur.\r\n",
        "DueDate": "09-08-2016",
        "IsInvalid": false,
        "CreatedByUserName": "Cooke",
        "LoyaltyUserId": 4599,
        "RenewedDate": "03-09-2017"
      },
      {
        "InternalId": "5c0fdf1051709ac0dfe53e5f",
        "SNo": 12,
        "CreatedDate": "14-02-2018",
        "SubscriptionNo": "5c0fdf1083996290f48d3523",
        "CustomerName": "Carolyn Richard",
        "TypeId": 2,
        "Address1": "118 Nixon Court",
        "Address2": "Blairstown",
        "Address3": "Ohio, 4901",
        "City": "Rehrersburg",
        "State": "American Samoa",
        "Country": "West Virginia",
        "Pin": "1475A",
        "Email": "carolynrichard@exoteric.com",
        "Mobile": "+1 (898) 427-3974",
        "Phone": "+1 (811) 520-3351",
        "ModifiedDate": "09-07-2018",
        "Comments": "Sit culpa commodo veniam minim mollit ex quis cupidatat do laboris non aliqua ut quis. Proident excepteur enim dolore dolore irure aute anim ullamco nostrud est proident id elit. Occaecat commodo exercitation est deserunt eiusmod anim labore reprehenderit.\r\n",
        "DueDate": "25-09-2017",
        "IsInvalid": false,
        "CreatedByUserName": "Barnett",
        "LoyaltyUserId": 7842,
        "RenewedDate": "24-12-2014"
      },
      {
        "InternalId": "5c0fdf10907e8c189b2ddd72",
        "SNo": 13,
        "CreatedDate": "17-01-2015",
        "SubscriptionNo": "5c0fdf10660e1650d0126580",
        "CustomerName": "Myrtle Charles",
        "TypeId": 2,
        "Address1": "425 Huron Street",
        "Address2": "Sunnyside",
        "Address3": "Maryland, 5433",
        "City": "Saranap",
        "State": "Rhode Island",
        "Country": "Nevada",
        "Pin": "1741A",
        "Email": "myrtlecharles@exoteric.com",
        "Mobile": "+1 (879) 448-3028",
        "Phone": "+1 (832) 533-3323",
        "ModifiedDate": "02-01-2015",
        "Comments": "Reprehenderit aliqua voluptate nostrud culpa laboris Lorem ipsum nostrud labore. Ea laborum esse sunt fugiat. Ad nostrud velit cupidatat adipisicing est laborum irure voluptate officia magna cillum. Magna fugiat occaecat ut veniam anim pariatur velit qui sunt non veniam minim magna. Magna cupidatat enim velit ullamco ut ut.\r\n",
        "DueDate": "25-08-2018",
        "IsInvalid": true,
        "CreatedByUserName": "Noreen",
        "LoyaltyUserId": 7052,
        "RenewedDate": "12-01-2018"
      },
      {
        "InternalId": "5c0fdf103f30022bf258ef99",
        "SNo": 14,
        "CreatedDate": "24-12-2016",
        "SubscriptionNo": "5c0fdf10d1d6f1efa68e5f8c",
        "CustomerName": "Frankie Mooney",
        "TypeId": 1,
        "Address1": "317 Overbaugh Place",
        "Address2": "Rutherford",
        "Address3": "Tennessee, 8649",
        "City": "Celeryville",
        "State": "Missouri",
        "Country": "Montana",
        "Pin": "4316A",
        "Email": "frankiemooney@exoteric.com",
        "Mobile": "+1 (888) 533-2971",
        "Phone": "+1 (982) 539-3203",
        "ModifiedDate": "17-09-2014",
        "Comments": "Duis eu in sint ut eiusmod enim enim est sit deserunt. Duis do tempor officia laborum magna dolor proident velit nostrud dolor minim labore. Reprehenderit consequat non proident consequat quis ex eiusmod. Culpa nisi excepteur eiusmod culpa cupidatat et laboris voluptate qui ut sit aliquip. Adipisicing anim reprehenderit aliqua sit quis proident. Laborum reprehenderit cupidatat nulla ipsum incididunt cupidatat laboris commodo in commodo.\r\n",
        "DueDate": "04-09-2014",
        "IsInvalid": false,
        "CreatedByUserName": "Ferguson",
        "LoyaltyUserId": 8324,
        "RenewedDate": "08-07-2014"
      },
      {
        "InternalId": "5c0fdf108d261aebdff68db9",
        "SNo": 15,
        "CreatedDate": "17-07-2016",
        "SubscriptionNo": "5c0fdf1086954579f95d4bea",
        "CustomerName": "Evelyn Watts",
        "TypeId": 1,
        "Address1": "687 Kay Court",
        "Address2": "Cleary",
        "Address3": "Palau, 4751",
        "City": "Greenbush",
        "State": "Northern Mariana Islands",
        "Country": "Wisconsin",
        "Pin": "5649A",
        "Email": "evelynwatts@exoteric.com",
        "Mobile": "+1 (946) 531-2877",
        "Phone": "+1 (934) 502-3717",
        "ModifiedDate": "03-06-2014",
        "Comments": "In commodo officia elit nostrud dolor. Id ut fugiat adipisicing irure consequat deserunt est tempor qui ut dolor laborum ut. Reprehenderit dolor consectetur enim ullamco aliqua aliqua anim labore ut irure quis irure. Minim dolor et eu Lorem aliqua cupidatat velit laborum. Voluptate incididunt aliqua eiusmod veniam exercitation veniam amet proident. Proident exercitation mollit incididunt irure commodo sit nostrud amet voluptate consequat nostrud occaecat.\r\n",
        "DueDate": "16-04-2014",
        "IsInvalid": false,
        "CreatedByUserName": "Whitaker",
        "LoyaltyUserId": 8483,
        "RenewedDate": "25-04-2018"
      },
      {
        "InternalId": "5c0fdf109b012fa6b417e211",
        "SNo": 16,
        "CreatedDate": "17-01-2017",
        "SubscriptionNo": "5c0fdf108f45131a41fae30c",
        "CustomerName": "Donovan Mccormick",
        "TypeId": 3,
        "Address1": "686 Elliott Walk",
        "Address2": "Bladensburg",
        "Address3": "Connecticut, 1515",
        "City": "Diaperville",
        "State": "Georgia",
        "Country": "Virginia",
        "Pin": "5045A",
        "Email": "donovanmccormick@exoteric.com",
        "Mobile": "+1 (931) 408-2418",
        "Phone": "+1 (833) 401-2547",
        "ModifiedDate": "12-06-2014",
        "Comments": "Ex non anim aliqua voluptate anim aliquip proident commodo cillum ad officia. Velit excepteur duis consectetur cupidatat aute. In ea adipisicing duis eiusmod laborum commodo esse deserunt laborum aliquip excepteur est. Ullamco quis ex cupidatat non esse pariatur id consectetur sint excepteur et amet. Eu aliqua ipsum officia enim duis nulla tempor ullamco irure cupidatat eu amet fugiat consequat. Aliqua eu est elit in aliquip ut do adipisicing excepteur sint. Voluptate veniam eu eiusmod excepteur pariatur aute sit incididunt.\r\n",
        "DueDate": "28-12-2016",
        "IsInvalid": true,
        "CreatedByUserName": "Ericka",
        "LoyaltyUserId": 4502,
        "RenewedDate": "03-02-2014"
      },
      {
        "InternalId": "5c0fdf10ad6ad9d839422fd4",
        "SNo": 17,
        "CreatedDate": "15-12-2015",
        "SubscriptionNo": "5c0fdf101704236ee20a133f",
        "CustomerName": "Wilkerson Randall",
        "TypeId": 3,
        "Address1": "176 Dank Court",
        "Address2": "Retsof",
        "Address3": "Colorado, 1155",
        "City": "Bison",
        "State": "Oklahoma",
        "Country": "Illinois",
        "Pin": "4576A",
        "Email": "wilkersonrandall@exoteric.com",
        "Mobile": "+1 (899) 553-2401",
        "Phone": "+1 (898) 503-3700",
        "ModifiedDate": "16-04-2015",
        "Comments": "Dolore sit cillum dolor ut Lorem cupidatat aliqua laborum in officia. Eiusmod est ipsum officia ipsum dolor ea laboris. Laborum officia irure aliqua voluptate mollit laborum in officia cillum sunt in qui voluptate. Non mollit elit dolor ut. Aliquip ad non non laboris. Elit excepteur ad commodo minim deserunt adipisicing ea nulla et exercitation cillum labore.\r\n",
        "DueDate": "13-02-2015",
        "IsInvalid": true,
        "CreatedByUserName": "Lolita",
        "LoyaltyUserId": 5028,
        "RenewedDate": "01-06-2016"
      },
      {
        "InternalId": "5c0fdf101115500bc28b46c2",
        "SNo": 18,
        "CreatedDate": "02-01-2014",
        "SubscriptionNo": "5c0fdf10c23a48246c45765d",
        "CustomerName": "Hoffman Griffith",
        "TypeId": 1,
        "Address1": "801 Hubbard Place",
        "Address2": "Weogufka",
        "Address3": "Maine, 6968",
        "City": "Hollins",
        "State": "Florida",
        "Country": "New Hampshire",
        "Pin": "7271A",
        "Email": "hoffmangriffith@exoteric.com",
        "Mobile": "+1 (919) 537-3184",
        "Phone": "+1 (954) 474-2225",
        "ModifiedDate": "12-12-2017",
        "Comments": "Tempor id nostrud consequat sit cillum sint exercitation Lorem cillum. Veniam in magna cupidatat voluptate eu non labore duis cillum duis id incididunt laboris. Proident dolore tempor reprehenderit voluptate excepteur eiusmod aliqua. Sit deserunt aliquip tempor do eu. Sunt adipisicing tempor ad esse labore sint dolor duis anim laboris ea reprehenderit anim Lorem.\r\n",
        "DueDate": "06-10-2017",
        "IsInvalid": true,
        "CreatedByUserName": "Chaney",
        "LoyaltyUserId": 851,
        "RenewedDate": "09-10-2017"
      },
      {
        "InternalId": "5c0fdf10968ad2b86cff2d54",
        "SNo": 19,
        "CreatedDate": "16-07-2016",
        "SubscriptionNo": "5c0fdf105750af31db83edb2",
        "CustomerName": "Mckinney Austin",
        "TypeId": 1,
        "Address1": "329 Ditmars Street",
        "Address2": "Helen",
        "Address3": "South Carolina, 8676",
        "City": "Sultana",
        "State": "New York",
        "Country": "Arizona",
        "Pin": "7121A",
        "Email": "mckinneyaustin@exoteric.com",
        "Mobile": "+1 (988) 539-2441",
        "Phone": "+1 (948) 504-3872",
        "ModifiedDate": "15-03-2016",
        "Comments": "Cillum pariatur nisi duis exercitation excepteur tempor minim sunt id do qui pariatur esse. Quis esse magna tempor dolore ut. Pariatur Lorem Lorem quis in. Dolore non exercitation adipisicing aute do cillum dolore sit velit voluptate laborum veniam officia in.\r\n",
        "DueDate": "22-01-2018",
        "IsInvalid": false,
        "CreatedByUserName": "Downs",
        "LoyaltyUserId": 4508,
        "RenewedDate": "15-06-2018"
      },
      {
        "InternalId": "5c0fdf104733969ed16924e5",
        "SNo": 20,
        "CreatedDate": "04-07-2014",
        "SubscriptionNo": "5c0fdf10246ca026cc8b9cef",
        "CustomerName": "Lilia Gibson",
        "TypeId": 3,
        "Address1": "957 Greenwood Avenue",
        "Address2": "Vienna",
        "Address3": "Louisiana, 3013",
        "City": "Dunbar",
        "State": "North Carolina",
        "Country": "New Mexico",
        "Pin": "3489A",
        "Email": "liliagibson@exoteric.com",
        "Mobile": "+1 (847) 561-3154",
        "Phone": "+1 (835) 527-3384",
        "ModifiedDate": "05-06-2016",
        "Comments": "Sint ex deserunt non amet irure magna in quis laboris laboris sunt velit mollit eu. Veniam magna cupidatat adipisicing occaecat proident proident id voluptate laboris occaecat ex in minim. Dolore consequat cupidatat irure minim adipisicing irure anim dolore. Lorem qui velit nostrud anim consequat eiusmod. Est eu reprehenderit magna nulla sunt velit proident. Aute elit nulla dolore ea in do sit dolor anim excepteur non ea aliqua.\r\n",
        "DueDate": "18-11-2016",
        "IsInvalid": true,
        "CreatedByUserName": "Burgess",
        "LoyaltyUserId": 7883,
        "RenewedDate": "14-10-2017"
      },
      {
        "InternalId": "5c0fdf10ff8335d74daefef7",
        "SNo": 21,
        "CreatedDate": "15-01-2015",
        "SubscriptionNo": "5c0fdf108bf55f5cebbd4a4b",
        "CustomerName": "Kennedy Sweeney",
        "TypeId": 2,
        "Address1": "344 Hyman Court",
        "Address2": "Kraemer",
        "Address3": "South Dakota, 3791",
        "City": "Chelsea",
        "State": "Iowa",
        "Country": "Pennsylvania",
        "Pin": "7822A",
        "Email": "kennedysweeney@exoteric.com",
        "Mobile": "+1 (955) 460-2615",
        "Phone": "+1 (909) 440-2948",
        "ModifiedDate": "27-02-2015",
        "Comments": "Ullamco culpa voluptate commodo incididunt officia adipisicing ullamco minim incididunt magna tempor. Non culpa esse ipsum id sunt sunt irure cupidatat sunt. Fugiat amet sint velit excepteur ullamco culpa in amet excepteur minim velit anim. Ut sit eiusmod minim proident quis occaecat irure proident consequat occaecat. Aliquip sunt consequat pariatur esse.\r\n",
        "DueDate": "10-06-2014",
        "IsInvalid": true,
        "CreatedByUserName": "Freida",
        "LoyaltyUserId": 1199,
        "RenewedDate": "28-05-2016"
      }
    ];

    return data.map(res => {
      const data = res as Subscriber;
      return data;
    });

    //return this.clientsCollection.snapshotChanges();
  }



}
