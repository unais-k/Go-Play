import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    let token = req.header("Authorization");

    console.log(token, "token------");

    try {
        if (!token) return res.status(404).json({ message: "Authentication failed: no token provided." });

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(verified, "verify");
        if (verified.role === "adminLogin") {
            console.log(1111111);
            req.user = verified;
            next();
        } else if (verified.role === "clientLogin") {
            console.log(2222222);
        } else if (verified.role === "turfAdminLogin") {
            console.log(333333333);
            req.user = verified;
            next();
        }
        // req.user = verified;
        // next();
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "Authentication failed: invalid token." });
    }
};

export const generateToken = (data) => {
    console.log(data, "userId =========");
    const token = jwt.sign(data, process.env.JWT_SECRET);
    return token;
};
