export default function RegisterPage (){
    return(

<div className="form-container">
            <h2>Register</h2>
            <form id="register-form">
                <label for="register-name">Full Name:</label>
                <input type="text" id="register-name" name="name" required="" fdprocessedid="5fn29w"/>
                
                <label for="register-email">Email:</label>
                <input type="email" id="register-email" name="email" required="" fdprocessedid="vf00p"/>
                
                <label for="register-password">Password:</label>
                <input type="password" id="register-password" name="password" required="" fdprocessedid="4bhdfc"/>
                
                <button type="submit" fdprocessedid="klnkgn">Register</button>
            </form>
        </div>

    )
}