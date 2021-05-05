import React , {Component} from 'react'
import emailjs from 'emailjs-com';
import { Alert } from 'reactstrap';


export default class ContactUs extends Component {
constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
	  message: '',
	  sent: false,
	  buttonText: 'إرسال',
	  tx:''
	}
  }

  
	  resetForm = () => {
		this.setState({
			name: '',
			message: '',
			email: '',
			buttonText: 'إرسال',
			tx:''
			
		}
		
		)
		
	}

	handleSubmit = (event) => {
		event.preventDefault();
	
	 
        const templateId = 'template_8QyOHYxU';
    
        this.sendFeedback(templateId, {
                                        message: this.state.message, 
                                        name: this.state.name, 
                                        email: this.state.email
                                       }
                         )

      }
    
      //Custom EmailJS method
      sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
			// Email successfully sent alert
			
         console.log("success")
		 this.setState({
			tx:'شكرا لإستخدامكم هذه الخدمة..تم استقبال رسالتكم بنجاح'
		})
		
		  })
		  
          // Email Failed to send Error alert
          .catch(err => {
           console.log("erreur")
            
            console.error('Email Error:', err)
		  })
		  this.resetForm(); 
		  
      }


  
  render() {
	return(
  	<div className="contact">
  	<form id="contact-form" onSubmit={this.handleSubmit}>
  	<div className="form-group">
      	<label htmlFor="name">الاسم و اللقب</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">البريد الالكتروني</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="message">الرسالة</label>
      	<textarea className="form-control" float="rigth" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	</div>
  	<button type="submit" className="btn btn-primary">{ this.state.buttonText }</button>
	  <h6>{this.state.tx}</h6>
  	</form>
	 
  	</div>
	  
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}
