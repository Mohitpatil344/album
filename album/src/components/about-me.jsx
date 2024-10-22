import React from "react";
const AboutMe = () => (
    <>
    <form>
    <h2>Contact me:</h2>

    <p>Name</p>
    <input id="Name" required></input>
    <p>Email</p>
    <input placeholder="Email" id="Email" required></input>
    <p>Message</p>
    <textarea id="message" name="message" placeholder="Your
    Message" rows="5" required></textarea>
    <br></br>
    <button>Submit</button>
    </form>
     </>
    );
  
  export default AboutMe;