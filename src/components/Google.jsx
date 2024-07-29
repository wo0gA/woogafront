
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
    
const GoogleLoginButton = () => {
    const clientId = "564600149423-3k57skta0kr16fblavp23vp34k9tvkp0.apps.googleusercontent.com";
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};
    
export default GoogleLoginButton