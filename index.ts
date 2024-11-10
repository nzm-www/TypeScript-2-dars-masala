// 1-masala
// 1-savol
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// let PersonFull: Person = {
//     name: "Jhon",
//     age: 64,
//     isStudent: false
// }
// console.log(PersonFull.name.length);
// --------------------------------------

// 4-savol
// interface Book {
//   title: string;
//   auther: string;
//   publishedYear: number;
// }
// let Booksave: Book = {
//   title: "The Great Gatsby",
//   auther: "Tdhgsfy shfgysby",
//   publishedYear: 2432,
// };
// console.log(Booksave);
// -----------------------------------------------

// 2-masala
// 1. **number** turida massiv yaratib, unga quyidagi sonlarni qo‘shing: 1, 2, 3, 4, 5.
//  let nums: Number[] = [1,2,3,4,5,]
// let nums: number[] = [1, 2, 3, 4, 5];
// function masivnumber(numbers: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(masivnumber(nums));
// ------------------------------------------------
// 4.**string** turida massiv yaratib, unga quyidagi so‘zlarni qo‘shing: "apple", "banana", "cherry".
// 4.Massivdagi so‘zlarni katta harf bilan qaytaruvchi funksiyani yozing.
// let maserr: string[] = ["banan", "apple", "cherry"];
// function Massivupper(words: string[]): string[] {
//   return words.map((word) => word.toUpperCase());
// }
// console.log(Massivupper(maserr));
// ------------------------------------------------
// 1. StudentRecord nomli tuple yarating
// let StudentRecord: [string,number,boolean];
// StudentRecord = ["Alice" ,22 , true ];

// let Coordinate: [number, number];
// Coordinate = [10, 20];
// let Coordinate: [string, number, string, number];
// Coordinate = ["x", 10, "y", 20];

// any

// let test: any[] = [2, "salom", true];
// test.push("Hello");
// function testLog(arr: any[]): void {
//   arr.forEach((value) => console.log(value));
// }

// testLog(test);

// unknown
// let test: unknown = 5;
// test = "salom";
// if (typeof test == "string") {
//     console.log(test.length);
// }

// let test: unknown[] = ["salom", true, 23];
// 2. `unknown` turidagi qiymatni `string` turiga o‘zgartirishdan oldin tekshiruvchi funksiyani yozing.???????

// ----------never----------------
// function neverUchn(): never {
//   while (true) {
//     console.log("never");
//   }
// }

// function neverError(message: string): never {
//   throw new Error(message);
// }
// 2. formatDate nomli funksiyani yozing

// function formatDate(date: Date): string {
//     let year = date.getFullYear();
//     let month = String(date.getMonth() + 1).padStart(2, '0');
//     let day = String(date.getDate()).padStart(2, '0');

//     return `${year}-${month}-${day}`;
//   }
//   let today = new Date();
//   console.log(formatDate(today));

// enum-----------------------------------
// enum DaysOfWeek {
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = "Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday",
//   Saturday = "Saturday",
//   Sunday = "Sunday",
// }

// bu yerda qiymat qaytarilmayabdi yani return qilinmayabdi void uchun izoh

// function printDay(day: DaysOfWeek): void {
//   console.log(DaysOfWeek[day]);
// }
// printDay(DaysOfWeek.Monday);

// interface Person {
//   name: string;
//   age: number;
// }
// interface Employee {
//   employeeId: number;
//   department: string;
// }

// type EmployeePerson = Person & Employee;

// let employeee: EmployeePerson = {
//   name: "Nizomddin",
//   age: 20,
//   employeeId: 199,
//   department: "TR",
// };

// 10-mashq interface

// interface Vehicle {
//   make: string;
//   model: string;
//   year: number;
// }

// interface Car {
//   numberOfDoors: number;
//   isElectric: boolean;
// }

// type VehicleCar = Vehicle & Car;

// let addmix: VehicleCar = {
//   make: "Tesla",
//   model: "Model S",
//   year: 2024,
//   numberOfDoors: 4,
//   isElectric: true,
// };
// --------------------------------------
// interface bilan type ni birlashrirish usuli
// 11-mashq type Alice 1,2,3 savollar
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// type Address = {
//   street: string;
//   city: string;
//   postalCode: number;
// };

// type PersonAddress = Person & Address;

// let PerAdr: PersonAddress = {
//   name: "Nizomiddin",
//   age: 20,
//   isStudent: true,
//   street: "Main St",
//   city: "Manchester",
//   postalCode: 1123,
// };
// 12-Mashq  Obyekt, Funksiya va Tupleni Aralashtirib Ishlash
// 2-get StudentSummary nomli funksiyani yozing, bu funksiya Student interfeysidan bir ob'ektni qabul qiladi va uning qisqacha ma'lumotini qaytaradi (nomi, yoshi, o‘rtacha baho).

// interface Student {
//   name: string;
//   age: number;
//   grades: number[];
//   address: [string, number];
// }
// function getStudentSummary(student: Student): string {
//     const averageGrade = student.grades.reduce((total, grade) => total + grade) / student.grades.length;
//     return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade.toFixed(2)}`;
//   }

// const student: Student = {
//     name: "John Doe",
//     age: 20,
//     grades: [88, 92, 76, 81],
//     address: ["Maple Street", 123]
//   };

//   console.log(getStudentSummary(student));
// ----------------------12------------------------
// 13-mashiq  Enum, Type Alias va Intersectionni Aralashtirib Ishlash
// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
//   Cancelled,
// }

// interface Order {
//   orderID: number;
//   status: OrderStatus;
//   totalAmount: number;
// }

// interface Customer {
//   customerId: number;
//   name: string;
// }

// type CustomerOrder = Order & Customer;

// let CustomerOrderee: CustomerOrder = {
//   orderID: 234,
//   status: OrderStatus.Shipped,
//   totalAmount: 234543,
//   customerId: 234,
//   name: "199.nzm",
// };
// ----------------------------13---------------------------

// new pro
// 1-mashq interface va obeektlar

// 1-person interface
// 1
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// // 2
// let student: Person = {
//   name: "Nizomiddin",
//   age: 20,
//   isStudent: true,
// };
// 2
   