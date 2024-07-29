import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
    const clientId = "564600149423-3k57skta0kr16fblavp23vp34k9tvkp0.apps.googleusercontent.com";
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={async (response) => {
                    try {
                        console.log(response);
                        const code = response.code;
                        console.log("구글 로그인 성공, 인가 코드:", code);

                        // 인가 코드를 백엔드로 보내기
                        const res = await axios.post('https://server.templ.es/accounts/google/callback/', { code }, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        console.log("백엔드 응답:", res.data);
                    } catch (error) {
                        console.error("인증 처리 중 오류 발생:", error);
                        if (error.response) {
                            console.error("서버 응답:", error.response.data);
                        }
                    }
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
                useOneTap
                flow="auth-code"
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
