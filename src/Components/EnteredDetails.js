// EnteredDetails.js 

import { useNavigate } from 'react-router-dom'; 

export default function EnteredDetails(props) { 
const navigate = useNavigate(); 

// Function to handle form submission 
const submit = () => { 
	console.log(props.data); // Log basicData object 
	console.log(props.questiondData); // Log questionData object 
	navigate('/thanks'); // Navigate to the thanks page 
}; 

return ( 
	<div className="container-fluid qform"> 
	<div className="col-md-5 m-auto"> 
		<div className="mt-3"> 
		<div className="card text-left h-100"> 
			<div dir='rtl' className="card-body my-3"> 
			<h4>اطلاعات نظرسنجی شما</h4> 

			{/* Display basicData */} 
			<p> 
				<b>نام:</b> {props.data.name} 
			</p> 
			<p> 
				<b>ایمیل:</b> {props.data.email} 
			</p> 
			<p> 
				<b>شماره همراه :</b> {props.data.contact} 
			</p> 

			<h4>نظرات شما</h4> 

			{/* Display questionData */} 
			<p> 
				<b>شغل:</b> {props.questiondData.profession === "Student" ? "دانشجو" : (props.questiondData.profession === "Software Engineer" ? "مهندس نرم افزار" : (props.questiondData.profession === "Programmer" ? "برنامه نویس": "هیچ کدام") ) } 
			</p> 
			<p> 
				<b>علاقه مندی ها:</b> {props.questiondData.profession === "DSA" ? "DSA" : (props.questiondData.profession === "Full Stack Development" ? "توسعه  دهنده فول استک" : (props.questiondData.profession === "Data Science" ? "دیتا ساینس": "چیزهای دیگر") )} 
			</p> 
			<p> 
				<b>سابقه کار:</b> {props.questiondData.reference} 
			</p> 

			{/* Submit button */} 
			<button type="submit" onClick={submit} className="btn btn-warning"> 
				اتمام نظرسنجی 
			</button> 

			</div> 
		</div> 
		</div> 
	</div> 
	</div> 
); 
} 
