import { useMoralis } from "react-moralis";
import { Button } from "web3uikit";


function ConnectButton() {
  const { isAuthenticated, authenticate, logout} = useMoralis();

  const walletconnectAuth = async () => {
    try {
        await authenticate({
            provider: "metamask", 
            chainId: 137,
            signingMessage: "Auth required by Qwago"
        })
    } catch (e) {
        console.log(e)
    }
  }
  if(!isAuthenticated) {
    return (
        <Button onClick={walletconnectAuth} text="Connect "></Button>
    )
  }
  return (
    <div>Welcome user
        <Button onClick={logout} text="logout "></Button>
    </div>
  )
}

export default ConnectButton