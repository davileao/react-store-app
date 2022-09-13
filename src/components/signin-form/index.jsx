import "./signin-form.styles.scss";
import Button from "../button";
import {
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase.utils";
import FormInput from "../form-input";
import {useState} from "react";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);

            console.log(response);

            resetFormFields();

        } catch (error) {
           switch (error.code) {
                case 'auth/user-not-found':
                    alert('No user assiciated with this email');
                    break;
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                default:
                    alert('Something went wrong');
           }

        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value});
    }






    return (
      <div className="signin-form-container">
          <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit}>
              <FormInput label="Email"
              required
              type='text'
              name='email'
              onChange={handleChange}
              value={email}
              />
              <FormInput label="Password"
                required
                type='password'
                name='password'
                onChange={handleChange}
                value={password}
              />

              <div className="buttons-container">
                  <Button buttonType=" " type='submit'>Sign In</Button>
                  <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google Sign In</Button>
              </div>

          </form>
      </div>
    );


}

export default SignInForm;