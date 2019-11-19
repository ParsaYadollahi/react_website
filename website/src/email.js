import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './email.css'


class Email extends React.Component {
	render() {
		return(
			<form action="https://formspree.io/parsa.yadollahi@mail.mcgill.ca" method="POST">
				<div>
					<label>NAME</label>
					<input name="name" placeholder="Name" class="form-control foo" type="text"></input>
				</div>
				<div>
					<label>EMAIL</label>
					<input type="email" placeholder="Email" class="foo" name="_replyto"></input>
				</div>
				<div>
					<label>SUBJECT</label>
					<input type="text" placeholder="Subject" class="foo" name="subject"></input>
				</div>
				<div>
					<label>MESSAGE</label>
					<textarea rows = "4" type="text" placeholder="Message" class="foo" name="message"></textarea>
				</div>
				<button className="button">
					<input className="sumbit" type="submit" value="Submit >>"></input>
				</button>
			</form>
		)
	}
}

export default Email;