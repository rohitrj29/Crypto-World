import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import {BsInfoCircle} from 'react-icons/bs';
import {Loader} from './';
const Welcome = () => {
    const connectWallet=()=>{}
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto<br/>across the world</h1>
                <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">Explore the Crypto World.Buy and sell cryptocurrencies easily on Krypto </p>
                <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                 <p className="text-white text-base font-semibold"> Connect Wallet</p>
                </button>
                <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
            </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;