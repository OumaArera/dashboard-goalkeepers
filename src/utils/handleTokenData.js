export const handleToken = (decoded, encryptedToken) =>{
    localStorage.setItem("encryptedSpecialToken", encryptedToken);
    localStorage.setItem("userId", decoded.userId);
    localStorage.setItem("firstName", decoded.firstName);
    localStorage.setItem("lastName", decoded.lastName);
    localStorage.setItem("role", decoded.role);
    localStorage.setItem("department", decoded.department);
    localStorage.setItem("email", decoded.email);
    localStorage.setItem("lastActivity", Date.now());
}