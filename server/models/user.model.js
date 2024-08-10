const mongoose = require('mongoose')

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		confirmPassword: {
			type: String,
			// required: true,
		},
        phoneNumber: {
        type: Number,
        // required: true
    },
		accountType: {
			type: String,
			enum: ['student','mentor', 'hr', 'manager', 'admin'],
			// required: true,
		},
        enrollmentNo: { type: Number }, 
		active: {
			type: Boolean,
			default: true,
		},
		approved: {
			type: Boolean,
			default: true,
		},
		token: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},
        image: {
            type: String,
            // required: false,
        },
		additionalDetails: {
			type: mongoose.Schema.Types.ObjectId,
			// required: true,
			ref: "Profile",
	 	},
        // profile:{
        //     bio:{type:String},
        //     skills:[{type:String}],
        //     resume:{type:String}, // URL to resume file
        //     resumeOriginalName:{type:String},
        //     company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
        //     profilePhoto:{
        //         type:String,
        //         default:""
        //    }
        // },
		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
// module.exports = mongoose.model("user", userSchema);
module.exports = mongoose.model('User', userSchema);