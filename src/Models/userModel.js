const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'required title'],
        trim:true,
        enum:['Mr','Mrs','Miss']

    },
    name:{
        type:String,
        required:[true,'required name'],
        trim:true
    },
    phone:{
        type:String,
        trim:true,
        unique:[true,'try other mobile number'],
        required:[true,"required mobile number"],
        pattern:"^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
    },
    email:{
        type:String,
        required:[true,"required email"],
        trim:true,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            },
            message: 'Please fill a valid email address',
            isAsync: false
        }
    },
    password:{
        type:String,
        required:[true,"password required"],
        minlength:8,
        maxlength:15

    },
    address:{
        street:{
            type:String,
            trim:true
        },
        city:{
            type:String,
            trim:true,
            
        },
        pincode:{
            type:String,
            trim:true
        }
    
    },
},{timestamps:true})
module.exports = mongoose.model('user', userSchema)



// const mongoose = require('mongoose');
// // const ObjectId = mongoose.Schema.Types.ObjectId


// const userSchema = new mongoose.Schema( {
     
//         title: { type:String, 
//             required:true,
//      enum:["Mr", "Mrs", "Miss"]
//     },

//         name: {  type:String,
//             required:true 
//         },

//         phone: {
//             type:String,
//             required: true, 
//              unique: true,
//              validate: [/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, 'Please provide valid phone number'],

//         //       {
//         //         validator: function (mobile) {
//         //             if (/^\d{10}$/.test(mobile)) {
//         //                 return (true)
//         //             } else {
//         //                 alert("Invalid number, must be of ten digits")
//         //                 number.focus()
//         //                 return (false)
//         //             }
//         //         }
//         //     }
//          },
            
//         email: {
//             type:String, 
//             required:true, 
//            // valid email, 
//             unique:true
//         }, 
//         password: {
//             type:String, 
//             required:true,
//             minLength: 8,
//             maxLength: 15
//             // minLen 8, maxLen 15},
//         },
//         address: {
//           street: {type:String
//           },
//           city: {type:String
//           },
//           pincode:{type:String
//           }
//         },
//     //     createdAt: {timestamp},
//     //     updatedAt: {timestamp}
//     //   }

//      }, { timestamps: true });

//       module.exports = mongoose.model('User', userSchema)