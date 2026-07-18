import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      const navigate = useNavigate();
      navigate("/login");
    }
  }, []);
  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
