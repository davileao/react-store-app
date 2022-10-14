import "./signin-form.styles.scss";
import Button from "../button";
import {
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase.utils";
import FormInput from "../form-input";
import {useState, useContext} from "react";

import {UserContext} from "../../contexts/user.context";
import { useNavigate} from "react-router-dom";


const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    // const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup().then(() => navigate('/'));

        }
        // setCurrentUser(user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const {user} = await signInAuthUserWithEmailAndPassword(
            //     email,
            //     password
            // ); com o listener no user.context.jsx, não é necessário fazer o setCurrentUser

            await signInAuthUserWithEmailAndPassword(
                email,
                password
            ).then(() => navigate('/'));
            // setCurrentUser(user)

            // console.log(response);

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