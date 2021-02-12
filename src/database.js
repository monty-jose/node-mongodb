import mongoose, { connect } from 'mongoose'

mongoose.connect("mongodb://localhosto/companydb")
.then(db=> console.log('Db is connect'))
.catch()