import React,{Component} from 'react'; 


class ReservationForm extends Component{

  constructor(){
      super();
      this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

       this.handleChangeEmail = this.handleChangeEmail.bind(this);
       this.handleChangeName = this.handleChangeName.bind(this);
       this.handleChangeSubject = this.handleChangeSubject.bind(this);
       this.handleChangeMessage = this.handleChangeMessage.bind(this);
       this.handleSubmit1 = this.handleSubmit1.bind(this);
       
  }

  handleChangeEmail(e){
      this.setState({email:  e.target.value});
      var EmailReg =  /(\w+)\s(\w+)/;
      if(e.target.value === '') 
        this.setState({email_err: 'Required Field'});
      else if(EmailReg.test(e.target.value)) 
        this.setState({email_err: ''});
      else 
        this.setState({email_err: 'Entrez un courriel valide'});
    }

    handleChangeName(e){
      this.setState({name:  e.target.value});
        if(e.target.value === '') 
          this.setState({name_err: '*champs obligatoire '});
        else 
          this.setState({name_err: ''});
    }
    handleChangeSubject(e){
      this.setState({subject:  e.target.value});
        if(e.target.value === '') 
          this.setState({subject_err: '*champs obligatoire '});
        else 
          this.setState({subject_err: ''});
    }
    handleChangeMessage(e){
      this.setState({message:  e.target.value});
        if(e.target.message === '') 
          this.setState({message_err: '*champs obligatoire '});
        else 
          this.setState({message_err: ''});
    }

    handleSubmit1()
    {
        if(this.state.name === '') 
            this.setState({name_err: '*champs obligatoire '});
        if(this.state.email === '')
            this.setState({email_err: '*champs obligatoire '});
        if(this.state.subject === '')
           this.setState({subject_err: '*champs obligatoire '});
       if(this.state.message === '')
           this.setState({message_err: '*champs obligatoire '});

           if(this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
           {
              this.setState({return_msg: 'Fill All First', flag: true });
           }
           else
           {
              this.setState({return_msg: 'Success.', flag: true});
           }
    }
  render(){

  return(


    <div className="col-lg-6 col-sm-12">
    <div className="custom-title">
      <h3>Détails de la facturation</h3>
    </div>
    <br />
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <label>Prénom *</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
        <span id="err">{this.state.name_err}</span>
      </div>

      <div className="col-lg-6 col-sm-12">
        <label>Nom *</label>
        <input
          type="text"
          name="name"
          id="name1"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
         <span id="err">{this.state.name_err}</span>
      </div>

      <div className="col-lg-12 col-sm-12">
        <label>Adresse *</label>
        <input
          type="text"
          name="name"
          id="name3"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
         <span id="err">{this.state.name_err}</span>
        <label>Adresse Ligne 2</label>
        <input
          type="text"
          name="name"
          id="name4"
          className="form-control"
        />
      </div>
      <div className="col-lg-12 col-sm-12">
        <label>Ville *</label>
        <input
          type="text"
          name="name"
          id="name5"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
         <span id="err">{this.state.name_err}</span>
      </div>
      <div className="col-lg-6 col-sm-12">
        <label>Pays *</label>
        <input
          type="text"
          name="name"
          id="name6"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
         <span id="err">{this.state.name_err}</span>
      </div>
      <div className="col-lg-6 col-sm-12">
        <label>Code Postal *</label>
        <input
          type="text"
          name="name"
          id="name7"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
         <span id="err">{this.state.name_err}</span>
      </div>
      <div className="col-lg-12 col-sm-12">
        <label>Courriel *</label>
        <input
          type="text"
          name="name"
          id="name8"
          className="form-control" value={this.state.email} onChange={this.handleChangeEmail}
        />
        
        <span id="err">{this.state.email_err}</span>
        <label>TéléPhone *</label>
        <input
          type="text"
          name="name"
          id="name9"
          className="form-control" value={this.state.name} onChange={this.handleChangeName}
        />
         <span id="err">{this.state.name_err}</span>
        <label>Informations supplémentaires</label>
        <textarea
          rows="5"
          className="form-control"
          placeholder="ajoutès les infos ici.."
        ></textarea>
      </div>
 
                    <div className="submit-area"> 
                        <input type="button" id="submit" name="send" onClick={this.handleSubmit1} className="submit-contact submitBnt" value="Reserver" /> 
                        <div id="simple-msg"></div>
                    </div>
    
    </div>
  </div>



      )

  }
}






export default ReservationForm ;
