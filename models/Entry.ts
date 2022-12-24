import mongoose, {Model, Schema} from "mongoose"; 
import { Entry } from "../interfaces";

interface IEntry extends Entry{
    //Extra properties if wanted
}

const entrySchema = new Schema({
    description: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Number
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} not a valid state'
        }
    }
});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;