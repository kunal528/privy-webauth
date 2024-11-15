import logo from './logo.svg';
import './App.css';
import { useDelegatedActions, usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';


// wallet-api:MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgk0LBNgq1EVNSzxkRIak3eybq3efJXnoPMbkKwtir12ahRANCAAT5Do9vYFL4B18W6nRrMe4BgPe63LSYe9escs3ujif3huc8u5rKGqfvRj4vFkghjzvl4DYwesgACLSvYgUOFlu5
function App() {

  const { login, user, authenticated } = usePrivy();
  const { delegateWallet } = useDelegatedActions();
  useEffect(() => {
    if (user?.wallet && !user?.wallet?.delegated) {
      console.log("User", user);
      delegateWallet({
        address: user.wallet.address,
        chainType: user.wallet.chainType,
      }).then(() => {
        if (window.FlutterChannel) {
          window.FlutterChannel.postMessage('closeWebView');
        }
      }).catch(console.error);
    }
    if (!authenticated)
      login();
  }, [user, user?.wallet]);
  return (
    <div className="App">
    </div>
  );
}

export default App;
