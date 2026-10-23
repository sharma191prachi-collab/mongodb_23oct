// db.doctors.find(
//     {
//         fees:{
//             $gte: 1000
//         }
//     }
// )
// db.doctors.find(
//     {
//         department
//             $eq : "Cardilogy"
//         }
//     }
// )

// db.doctors.find
//       (
//         or:[
//         {department:"cardiology"},
//         {fees:{$gte:1000}}
//         ]
// )

// db.doctors.find().(name:1,department(:1_))

// db.doctors.find().limit(2)
// db.dcotos.find().skip(2).limit(2)

// db.doctors.find().sort((fees:-1))//acsending order
