import mongoose from "mongoose";

interface UserAttrs {
    email: string,
    password: string
}

interface UserModel extends mongoose.Model<any> {
    build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Docum
ent {
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

User.build({
    email: 'test@test.com',
    password: '12345678'
})

export { User };