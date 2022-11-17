console.log("Chal raha hoon ")

// Connecting to wallet
let account;
const connectAptos = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account; //only for the testing purpose, delete this line when the code runs successfully.
    }
}

// Connect to smart Contract
// in Eth not in Aptos
const connectContract = async () => {
    const ABI = "";
    const Address = "";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Cntract(ABI, Address);
    document.getElementById("contractArea").innerHTML = "Connected to smart contract"; // only for the testing purpose, delete this line when the code runs successfully.
}


// code for read Contract data from smart contract , if needed.



export default index;