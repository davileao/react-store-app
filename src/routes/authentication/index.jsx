import SignUpForm from "../../components/signup-form";
import SignInForm from "../../components/signin-form";
import "./authentication.styles.scss";

const SignIn = () => {
    return (
        <div className="authentication-container">

           <SignInForm/>
            <SignUpForm />
        </div>
    );
}

export default SignIn;