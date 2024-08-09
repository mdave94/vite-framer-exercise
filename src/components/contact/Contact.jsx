import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>david@molnardavid.hu</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Hello there</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+361234567</span>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Contact Me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
