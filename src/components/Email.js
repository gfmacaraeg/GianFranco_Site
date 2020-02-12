import React from "react";
class Email extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xoqdypkg"
          method="POST"
        >
          <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
              <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
              <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
          </div>
          <ul className="actions">
            <br></br>
            {status === "SUCCESS" ? <p>Thanks!</p> : <li><input type="submit" value="Send Message" /></li>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
            
          </ul>
        </form>
        

      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }

  export default Email