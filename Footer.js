import React from 'react';


function Footer (){
    return (
        <div className="main-footer bg-secondary text-black main"> 
        <div className="footer">
        <div className="row">

            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
                <h5>About Us</h5>
                <ul className="list-unstyled text-dark">
                    <li><a href="www.webdev.com" class="text-dark">Meet our Teachers</a></li>
                    <li><a href="www.webdev.com" class="text-dark">View Cirriculum</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Schedule a Tour</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Students in Action</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Our History</a></li>
                
                </ul>
            </div>

            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                    <li>Email: admin@webdev.org</li>
                    <li>Telephone: 555-5555</li>
                    <li>Instagram: @WebDevHighSchool</li>
                  
                
                </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
                <h5>WebDev HighSchool Education</h5>
                <ul className="list-unstyled">
                    <li><a href="www.webdev.com" class="text-dark">Full-Stack Focused Classes</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Front-end Focused Classes</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Back-end Focused Classes</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Apply to our school</a></li>
                
                </ul>
            </div>
            
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
                <h5>WebDev HighSchool Community</h5>
                <ul className="list-unstyled">
                    <li><a href="www.webdev.com" class="text-dark">Student Login</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Parent Signup Process</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Student Signup Process</a></li>
                    <li><a href="www.webdev.com" class="text-dark">Newsletter</a></li>
                    
                    
                
                </ul>    
        </div>
        </div>
        </div>
        </div>
    )
}

export default Footer;
