const handleLogout = () => {
    
    localStorage.removeItem('encryptedSpecialToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('role');
    localStorage.removeItem('department');
    localStorage.removeItem('email');
    localStorage.removeItem('lastActivity');
  };
  
export default handleLogout;