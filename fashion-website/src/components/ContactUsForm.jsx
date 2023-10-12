import React, { Component } from 'react';

class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending the data to a server.
    console.log(this.state);
  }

  render() {
    return (
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4 ">
            <label htmlFor="name" className="block">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="w-full p-2 text-black border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              className="w-full p-2 text-black border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block">Message</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              className="w-full text-black p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>

          <button type="submit" className="bg-[#006d77] text-white p-2 rounded hover:bg-[#5c8b8f]">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;
