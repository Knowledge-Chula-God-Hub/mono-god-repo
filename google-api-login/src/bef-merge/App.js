
import './App.css';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = '902286244116-q63e1711dnrnfinijuv6b0jn4b77g1df.apps.googleusercontent.com';

useEffect(() => {
   const initClient = () => {
         gapi.client.init({
         clientId: clientId,
         scope: ''
       });
    };
    gapi.load('client:auth2', initClient);
});
const onSuccess = (res) => {
  console.log('success:', res);
};
const onFailure = (err) => {
  console.log('failed:', err);
};
return (
 <GoogleLogin
    clientId={clientId}
    buttonText="Sign in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
/>
);
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
