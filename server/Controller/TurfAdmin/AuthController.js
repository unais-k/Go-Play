import TurfAdminModel from "../../Model/TurfAdmin.js";

export const TurfAdminLogin = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await TurfAdminModel.findOne({ email: email });
        console.log(user, "user");
        if (!user) return res.status(401).json({ message: "Invalid credentials." }); // 401 Unauthorized
        const isMatch = await bcrypt.compare(password, user.password).catch((err) => next(err));
        console.log(isMatch, "password match");
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials.." });
        const token = generateToken(user._id);
        console.log(token, "Token ------ create---");
        res.status(200).json({ token: token, name: user.name }); // 500 server error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const TurfAdminRegister = async (req, res, next) => {
    try {
        const { name, email, phone, password, GST, aadhar } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new TurfAdminModel({
            name,
            email,
            GST,
            aadhar,
            phone,
            password: hashedPassword,
        });
        await newUser.save();
        return res.status(201).json({ message: "User created" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
