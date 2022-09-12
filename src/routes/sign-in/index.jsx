import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase.utils";
import SignUpForm from "../../components/signup-form";
import Button from "../../components/button";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <Button buttonType="google" onClick={logGoogleUser}>Sign In With Google</Button>
               <SignUpForm />
        </div>
    );
}

export default SignIn;