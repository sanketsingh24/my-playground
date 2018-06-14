import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
	content: { type: 'String', required:true },
	sequence: { type: 'Number', required:true }
});

export default mongoose.model('About', AboutSchema);
