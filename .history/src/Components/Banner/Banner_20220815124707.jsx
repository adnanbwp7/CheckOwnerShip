import React, { useState } from "react";
import { Box } from "@mui/material";
import NiFTi_Bg from "../../assets/NiFTi-Bg.png";
import { useWeb3React } from "@web3-react/core"
import { injected } from "../../Connectors";
import Aos from "aos";
import TicketABI from '../../../ABI/TKT.json'
import { ethers } from "ethers";

const TKT_CONTRACT_ADDRESS = "0xece289B8128caCe172fdf993F7731227746FF41F"
const provider = new ethers.providers.Web3Provider(window.ethereum);
// get end user's account
const signer = provider.getSigner()
const contract = new ethers.Contract(TKT_CONTRACT_ADDRESS, TicketABI, signer);

Aos.init()
import 'aos/dist/aos.css';
import './Banner.css'
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const Navigate = useNavigate()
    const { active, activate, account } = useWeb3React()
    const [link, setLink] = useState("#")
    const handleEthereum = () => {
        const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {

        } else {
            console.log('Please install MetaMask!');
        }
    } 
    if (window.ethereum) {
        handleEthereum();
    } else {
        window.addEventListener('ethereum#initialized', handleEthereum, {
            once: true,
        });
        setTimeout(handleEthereum, 2000);  
    async function btnConnect() {
        try {
            activate(injected)
            if (active) { return } else {
                if (window.ethereum.networkVersion === '56' || window.ethereum.networkVersion === '97') {
                    alert('Connected to wallet')
                } else {
                    alert('Use Binance to connect to the wallet')
                }
            }
        }
        catch (ex) {
            console.log(ex)
        }
    };

    const CheckAvailability = async () => {
        try {
            const connection = contract.connect(signer);
            const addr = connection.address;
            const accounts = ethereum.request({ method: 'eth_requestAccounts' });
            let result = await contract.balanceOf(account);
            if (result > 0) {
                Navigate('https://pewpew.niftigram.io/')
            }
            else {
                alert('Sorry! but you need a ticket to play')
            }
        }
        catch (err) {
            if (!active) {
                alert('Wallet is not Connected')
                return;
            }
            alert('Something went wrong Plase try again');
        }
    }
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: 'flex',
                    mixBlendMode: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Wallet Connection Button */}
                <Box sx={{ width: '95%', margin: 'auto', maxWidth: '1500px', position: "relative" }}>
                    <button onClick={btnConnect} className='btn-mint btn-connect'>
                        {
                            active ? `Connected` : "Connect Vallet"
                        }
                    </button>
                </Box>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: "100%",
                            backgroundImage: `url(${NiFTi_Bg})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <Box className="card-container">
                            <Box className='mint-container'>
                                <button onClick={CheckAvailability} className="btn-mint">
                                    Check NFTs Availibilty
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box >
        </>
    );
};

export default Banner;
