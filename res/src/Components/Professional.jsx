import {React,useState} from 'react'
import pro from '../Util/professional'


const Professional = () => {
  
const [say, setSay] = useState(pro)
  return (
    <div className='Expierence'>
        <h2>Professional Expiernce & Certifications</h2>
        <hr />
        <div className="exp">
            {say.map((exp)=>{
                    const {id, year, title, institution,description} = exp;
                    return(
                         <div className="exp-card" key={id}>
                            <div className="exp-header">
                              <h3 className="exp-title">{title}</h3>
                              <span className="exp-institution">{institution}</span><br />  
                              <span className="exp-year">{year}</span>
                            </div>
                            <p className="exp-description">{description}</p>
                            <br />
                          </div>
                    )
                })}
        </div>
        
    </div>
  )
}

export default Professional