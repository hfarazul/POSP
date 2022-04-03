// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react refer to this resource to understand the code

import React, { useReducer, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
// import MainMint from  './MainMint';
import usehandleMint from './MainMint';


const formReducer = (state, event) => {
 if(event.reset){
   return{
//    name: '',
    OrganisationName: '',
//    Sender_address:'',
    RecepeintAddress:'',
    StreamOfWork:'',
    Description:'',
    DigitalArt:'',
    RecepientEmail:'',
   }
 }

  return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [accounts, setAccounts] = useState([]);


  //below code is to simulate an API
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>Proof of Story Protocol</h1>

      <NavBar accounts = {accounts} setAccounts = {setAccounts}/>
      {/* <MainMint accounts = {accounts} setAccounts = {setAccounts}/> */}

      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>




        {/* <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </fieldset> */}


        <fieldset>
          <label>
            <p>Organisation Name</p>
            <input name="Org_name" onChange={handleChange} value={formData.Org_name || ''}/>
          </label>
        </fieldset>

        {/* <fieldset>
          <label>
            <p>Sender Wallet Address</p>
            <input name="Sender_address" onChange={handleChange} value={formData.Sender_address || ''}/>
          </label>
        </fieldset> */}

        <fieldset>
          <label>
            <p>Recepeint Wallet Address</p>
            <input name="Recepeint_address" onChange={handleChange} value={formData.Recepeint_address || ''}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Stream of work</p>
            <select name="Stream_of_work" onChange={handleChange} value={formData.Stream_of_work || ''} >
              <option value="">--Please choose an option--</option>
              <option value="Marketing">Marketing</option>
              <option value="Web Development">Development</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Strategy">Strategy</option>
              <option value="Blockchain Development">Blockchain Development</option>
              <option value="Research">Research</option>
              <option value="Analytics">Analytics</option>
              <option value="Fresh Ideas">Fresh Ideas</option>
              <option value="Community Management">Community Management</option>
            </select>
          </label>
          {/* <label>
            <p>Count</p>
            <input type="number" name="count" onChange={handleChange} step="1" />
          </label>
          <label>
            <p>Gift Wrap</p>
            <input type="checkbox" name="gift-wrap" onChange={handleChange} />
          </label> */}
        </fieldset>

        <fieldset>
          <label>
            <p>Description</p>
            <input name="Description" onChange={handleChange} value={formData.Description || ''}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Link to digital Art</p>
            <input name="Digital_Art" onChange={handleChange} value={formData.Digital_Art || ''}/>
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Recepient's Email</p>
            <input name="Rec_Email" onChange={handleChange} value={formData.Rec_Email || ''}/>
          </label>
        </fieldset>


        <button onClick = {usehandleMint}>Mint Now</button>


      </form>
    </div>
  )
}

export default App;
