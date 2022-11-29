import React, {useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Question from './Question'
import GeoComponent from './GeoComponent';

function QuestionContainer() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='questionContainer'>
            <Question title="What Can We Help You With?">
                <div className='services'>
                    <div className='row1'>
                        <div className='cacc'>
                            <span>Checking Acc</span>
                        </div>
                        <div className='student'><span>Student Loans</span></div>
                        <div className='sacc'><span>Savings Acc</span></div>
                        <div className='investment'><span>Investments</span></div>
                        <div className='mor'><span>Mortgage</span></div>
                    </div>
                    <div className='row2'>
                        <div className='fp'><span>Future Planning</span></div>
                        <div className='insurance'><span>Insurance</span></div>
                        <div className='al'><span>Auto Loan</span></div>
                        <div className='mm'><span>CD/Money Market
                        </span></div>
                        <div className='other'><span>Other</span></div>
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
                        <li>Commerce Bank</li>
                        <li>Bank . 1906 W 43rd Ave</li>
                        <li><span>Opens</span> <span>Closes 5:30PM</span></li>

                    </ul>
                </button>
                <button className='mapDetails1'>
                <ul>
                        <li>Commerce Bank</li>
                        <li>Bank . 804 E 12th St</li>
                        <li><span>Opens</span> <span>Closes 5:00PM</span></li>

                    </ul>
                </button>
                </div>
             

              
                </div>
              
            </Question>
            <Question title="Which Date and Time Works Best?">
                <div className='date_section'>
                <DatePicker dateFormat="dd MMM yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                <select>
                    <option>10:00AM - 11:00PM</option>
                    <option>11:00AM - 12:00PM</option>
                    <option>12:00PM - 1:00PM</option>
                </select>
                </div>
            </Question>
            <Question title="Help Us Know More About You?">
            <div className='services userDetails'>
            <p>
                        <label for="textarea">First Name:</label></p>
                    <input/>
                    <p>
                        <label for="textarea">Last Name:</label></p>
                    <input/>
                    <p>
                        <label for="textarea">Phone:</label></p>
                    <input/>
                    <p>
                        <label for="textarea">Email:</label></p>
                    <input/>
                    </div>
            </Question>
            <button className='submit'>
                SUBMIT
            </button>
        </div>
    )
}

export default QuestionContainer