export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if(!email || !password || !name) {
            throw new Error("All fields are required");
        }
    } catch (error) {
        
    }
}
export const login = async (req, res) => {

}
export const logout = async (req, res) => {

}