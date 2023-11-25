// AdditionalQuestions.js 

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

export default function AdditionalQuestions({ addQuestionData }) { 
// State variables to store user inputs 
const [profession, setProfession] = useState(""); 
const [interest, setInterest] = useState(""); 
const [reference, setReference] = useState(""); 
const [otherProfession, setOtherProfession] = useState(""); 
const [otherInterest, setOtherInterest] = useState(""); 
const [otherReference, setOtherReference] = useState(""); 
	
const navigate = useNavigate(); 

// Function to handle form submission 
const submit = (e) => { 
	e.preventDefault(); 

	// Check if all fields are filled 
	if (!profession || !interest || !reference) { 
	alert("همه فیلدها باید وارد شوند!!!"); 
	} else { 
	// If the selected option is "Others", use the value from the corresponding text input 
	if (profession === "Others") { 
		profession = otherProfession; 
	} 
	if (interest === "Others") { 
		interest = otherInterest; 
	} 
	if (reference === "Others") { 
		reference = otherReference; 
	} 

	// Log the selected options and call the addQuestionData function with the data 
	console.log(profession, interest, reference); 
	addQuestionData(profession, interest, reference); 

	// Navigate to the next page 
	navigate('/details'); 
	} 
}; 

// Event handler for changes in the profession radio buttons 
const handleProfessionChange = (e) => { 
	setProfession(e.target.value); 
}; 

// Event handler for changes in the interest radio buttons 
const handleInterestChange = (e) => { 
	setInterest(e.target.value); 
}; 

// Event handler for changes in the reference radio buttons 
const handleReferenceChange = (e) => { 
	setReference(e.target.value); 
}; 

return ( 
	<div className="container-fluid qform"> 
	<div className="col-md-5 m-auto"> 
		<div className="mt-3"> 
		<div className="card text-left h-100"> 
			<div className="card-body"> 
			<form dir='rtl' onSubmit={submit}> 
				<label htmlFor=""> 
				<h4>نظرسنجی</h4> 
				</label> 

				{/* Profession options */} 
				<div className="form-group m-2" onChange={handleProfessionChange}> 
				<label htmlFor="q1"> 
					<b>1.</b> شغل شما چیست؟
				</label> 
				<br /> 
				<input 
					type="radio"
					name="ProfessionRadio"
					id="student"
					autoComplete="off"
					className="m-2"
					value="Student"
				/> 
				<label htmlFor="student"> دانشجو</label> 
				<br /> 
				{/* Other options for profession with text input */} 
				<input 
					type="radio"
					name="ProfessionRadio"
					id="SoftwareEngineer"
					autoComplete="off"
					className="m-2"
					value="Software Engineer"
				/> 
				<label htmlFor="SoftwareEngineer"> مهندس نرم افزار</label> 
				<br /> 
				<input 
					type="radio"
					name="ProfessionRadio"
					id="programmer"
					autoComplete="off"
					className="m-2"
					value="Programmer"
				/> 
				<label htmlFor="programmer"> برنامه نویس</label> 
				<br /> 
				<input 
					type="radio"
					name="ProfessionRadio"
					id="others"
					autoComplete="off"
					className="m-2"
					value="Others"
				/> 
				<label htmlFor="others"> هیچ کدام</label> 
				<input 
					type="text"
					id="otherProfession"
					autoComplete="off"
					className="form-control m-2"
					value={otherProfession} 
					onChange={(e) => { setOtherProfession(e.target.value) }} 
				/> 
				<hr /> 
				</div> 

				{/* Interest options */} 
				<div className="form-group m-2" onChange={handleInterestChange}> 
				<label htmlFor="q2"> 
					<b>2.</b> به چه چیزهایی علاقه دارید؟
				</label> 
				<br /> 
				<input 
					type="radio"
					name="interestRadio"
					id="dsa"
					autoComplete="off"
					className="m-2"
					value="DSA"
				/> 
				<label htmlFor="dsa"> DSA</label> 
				<br /> 
				{/* Other options for interest with text input */} 
				<input 
					type="radio"
					name="interestRadio"
					id="fullstack"
					autoComplete="off"
					className="m-2"
					value="Full Stack Development"
				/> 
				<label htmlFor="fullstack"> توسعه فول استک</label> 
				<br /> 
				<input 
					type="radio"
					name="interestRadio"
					id="dataScience"
					autoComplete="off"
					className="m-2"
					value="Data Science"
				/> 
				<label htmlFor="dataScience"> دیتا ساینس</label> 
				<br /> 
				<input 
					type="radio"
					name="interestRadio"
					id="compeProgramming"
					autoComplete="off"
					className="m-2"
					value="Competitive Programming"
				/> 
				<label htmlFor="compeProgramming"> برنامه نویسی رقابتی</label> 
				<br /> 
				<input 
					type="radio"
					name="interestRadio"
					id="others"
					autoComplete="off"
					className="m-2"
					value="Others"
				/> 
				<label htmlFor="others"> هیچ کدام </label> 
				<input 
					type="text"
					id="otherInterest"
					autoComplete="off"
					className="form-control m-2"
					value={otherInterest} 
					onChange={(e) => { setOtherInterest(e.target.value) }} 
				/> 
				<hr /> 
				</div> 

				{/* Reference options */} 
				<div className="form-group m-2" onChange={handleReferenceChange}> 
				<label htmlFor="q3"> 
					<b>3.</b> چند سال سابقه کار دارید؟
				</label> 
				<br /> 
				<input 
					type="radio"
					name="referenceRadio"
					id="24"
					autoComplete="off"
					className="m-2"
					value="2-4"
				/> 
				<label htmlFor="2-4"> 2 تا 4 سال</label> 
				<br /> 
				<input 
					type="radio"
					name="referenceRadio"
					id="46"
					autoComplete="off"
					className="m-2"
					value="4-6"
				/> 
				<label htmlFor="4-6"> 4 تا 6 سال</label> 
				<br /> 
				<input 
					type="radio"
					name="referenceRadio"
					id="68"
					autoComplete="off"
					className="m-2"
					value="6-8"
				/> 
				<label htmlFor="6-8"> 6 تا 8 سال</label> 
				<br /> 
				<input 
					type="radio"
					name="referenceRadio"
					id="8"
					autoComplete="off"
					className="m-2"
					value="8"
				/> 
				<label htmlFor="8"> بیشتر از 8 سال</label> 
				<input 
					type="text"
					id="otherReference"
					autoComplete="off"
					className="form-control m-2"
					value={otherReference} 
					onChange={(e) => { setOtherReference(e.target.value) }} 
				/> 
				<br /> 
				</div> 

				{/* Submit button */} 
				<button type="submit" className="btn btn-warning mx-3"> 
				فرستادن نتایج  
				</button> 
			</form> 

			
			</div> 
		</div> 
		</div> 
	</div> 
	</div> 
); 
}
