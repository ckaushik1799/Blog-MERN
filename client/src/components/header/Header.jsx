import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Exploring Technology In</span>
        <span className="headerTitleLg">Bits</span> */}
        <p className="headerTitleSm">Exploring Technology In Blogger's Space</p>
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        alt=""
      />
    </div>
  );
}
