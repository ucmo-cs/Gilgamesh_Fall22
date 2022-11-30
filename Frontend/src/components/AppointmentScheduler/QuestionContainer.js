import React, {useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Question from './Question'
import GeoComponent from './GeoComponent';

function QuestionContainer() {
    const [startDate, setStartDate] = useState(new Date());

    const submitAppmnt =(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/appointment", {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(apptmnt)
        })
        .then(res=>{
            console.log(1,res);
            if(res.status === 201){
              return res.json();
            }else{
              return null;
            }
          })
        .then(res=>{
          console.log(res)
          if(res!==null){
            //props.history.push('/login');
          }else{
            alert('fails');
          }
        
        });
    
      }

    const [apptmnt, setApptmnt] = useState({
        service:'',
        location:'',
        time:'',
        fname:'',
        lname:'',
        phone:'',
        email:'',
        date: ''
        

    });    

    const changeValue=(e)=>{

        setApptmnt({
            ...apptmnt, [e.target.name]:e.target.value
        });
        console.log( e.target.name +  " : " + e.target.value);
         
    }


    const selectService=(e, data)=>{
        setApptmnt({
            ...apptmnt, service:data
        });
        console.log( " Service: " + data);
         
    }

    const selectLocation=(e, data)=>{
        setApptmnt({
            ...apptmnt, location:data
        });
        console.log( " Locations: " + data);
         
    }

    const selectTime=()=>{
        setApptmnt({
            ...apptmnt, time:document.getElementById('stime').value
        });
        console.log( " Time: " + document.getElementById('stime').value);
         
    }
    

    const selectDate=(DatePicker)=>{
        setApptmnt({
            ...apptmnt, date:startDate
        });
        
         
    }
   
    


    
    const infocheck=(e)=>{

        console.log( " Datepicker :" + startDate);

        console.log( " apptmnt :" + apptmnt);
        console.log( " service :" + apptmnt.service);
        console.log( " location :" + apptmnt.location);
        console.log( " time :" + apptmnt.time);
        console.log( " fname :" + apptmnt.fname);
        console.log( " lname :" + apptmnt.lname);
        console.log( " phone :" + apptmnt.phone);
        console.log( " email :" + apptmnt.email);
        

    }

    return (
        <div className='questionContainer'>
            <Question title="What Can We Help You With?">
                <div className='services'>
                    <div className='row1'>
                        <div className='cacc' onClick = {(e)=>selectService(e, 'Checking Account')}><span>Checking Acc</span></div>
                        <div className='student' onClick = {(e)=>selectService(e, 'Student Loans')}><span>Student Loans</span></div>
                        <div className='sacc'  onClick = {(e)=>selectService(e, 'Savings Account')}><span>Savings Acc</span></div>
                        <div className='investment' onClick = {(e)=>selectService(e, 'Investments')}><span>Investments</span></div>
                        <div className='mor' onClick = {(e)=>selectService(e, 'Mortgage')}><span>Mortgage</span></div>
                    </div>
                    <div className='row2'>
                        <div className='fp' onClick = {(e)=>selectService(e, 'Future Planning')}><span>Future Planning</span></div>
                        <div className='insurance' onClick = {(e)=>selectService(e, 'Insurance')}><span>Insurance</span></div>
                        <div className='al' onClick = {(e)=>selectService(e, 'Auto Loan')}><span>Auto Loan</span></div>
                        <div className='mm' onClick = {(e)=>selectService(e, 'CD/Money Market')}><span>CD/Money Market
                        </span></div>
                        <div className='other' onClick = {(e)=>selectService(e, 'Other')}><span>Other</span></div>
                    </div>
                    <p>
                        <label for="textarea">Add a Note:</label></p>
                    <textarea id="textarea" name="textarea" rows="4" cols="50"></textarea>
                </div>
            </Question>
            <Question title="Which Location Works Best For You?">
            <div className='mapContainer'>
                <div className='map'>
                </div>
                <div className='buttonContainer'>
                <button className='mapDetails1'>

                    <ul>
                        <button onClick = {(e)=>selectLocation(e, '1906 W 43rd Ave')}>
                            <li>Commerce Bank</li>
                            <li>1906 W 43rd Ave</li>
                            <li><span>Open</span><span> 9:00 AM - </span> <span>5:00 PM</span></li>
                        </button>
                    </ul>
                </button>
                <button className='mapDetails1'>
                <ul>
                <button onClick = {(e)=>selectLocation(e, '804 E 12th St')}>
                        <li>Commerce Bank</li>
                        <li>804 E 12th St</li>
                        <li><span>Open</span><span> 9:00 AM - </span> <span>5:00 PM</span></li>
                    </button>
                    </ul>
                </button>
                </div>
             

              
                </div>
              
            </Question>
            <Question title="Which Date and Time Works Best?">
                <div className='date_section'>
                <DatePicker dateFormat="dd MMM yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                <select id="stime" onChange={selectTime}>
                    <option>Select a Time</option>
                    <option>9:00AM - 10:00PM</option>
                    <option>10:00AM - 11:00PM</option>
                    <option>11:00AM - 12:00PM</option>
                    <option>12:00PM - 1:00PM</option>
                    <option>1:00PM - 2:00PM</option>
                    <option>2:00PM - 3:00PM</option>
                    <option>3:00PM - 4:00PM</option>
                    <option>4:00PM - 5:00PM</option>
                </select>
                </div>
            </Question>
            <Question title="Help Us Know More About You?">
            <div className='services userDetails'>
            <p>
                    <label for="textarea">First Name:</label></p>     
                    <input name="fname" onChange = {changeValue}/>
                    <p>
                        <label for="textarea">Last Name:</label></p>
                    <input name="lname" onChange = {changeValue}/>
                    <p>
                        <label for="textarea">Phone:</label></p>
                    <input name="phone" onChange = {changeValue}/>
                    <p>
                        <label for="textarea">Email:</label></p>
                    <input name="email" onChange = {changeValue}/>
                    </div>
            </Question>
            
           
    
            <button className='submit' onClick={submitAppmnt}>
                SUBMIT
            </button>

            
        </div>
    )
}

export default QuestionContainer