import React from "react";
import { Box, Button } from "@mui/material";
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

const Banner = () => {
    const { active, activate } = useWeb3React()
    async function btnConnect() {
        try {
            activate(injected)
            if (active) { return }
            else {
                if (window.ethereum.networkVersion === '56' || window.ethereum.networkVersion === '97') {
                    alert('Connected to wallet')
                } else {
                    alert('Use Binance to connect to the wallet')
                }
            } catch (ex) {
                console.log(ex)
            }
            }
        };

        const CheckAvailability = () => {
            alert('Check availability')
            try {
                const connection = contract.connect(signer);
                const addr = connection.address;
                const accounts = ethereum.request({ method: 'eth_requestAccounts' });
                let result = contract.balanceOf(addr);
                alert('success' + result + accounts + addr);
            }
            catch (err) {
                if (!active) {
                    alert('Wallet is not Connected')
                    return;
                }
                alert('err', err);
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
                                    {/* <Card className="card">
                                    <img src={Ticket} style={{ width: "100%", height: "250px" }} alt="Ticket" srcSet={Ticket} />
                                    <Box>
                                        <div className="card-text">
                                            1 TICKET = 0.5 BNB
                                        </div>
                                        <div className="card-text" style={{ fontWeight: 800 }}>
                                            (MAX 1 TICKET PER WALLET)
                                        </div>
                                    </Box>
                                </Card> */}
                                    <button onClick={CheckAvailability} className="btn-mint">
                                        Check NFTs Availibilty
                                    </button>
                                </Box>
                                {/* Ticket Card  */}
                                {/* <MintTKT active={active} /> */}
                                {/* POWER UP  Card */}
                                {/* <MintPWR active={active} /> */}
                            </Box>
                        </Box>
                    </div>
                </Box >
            </>
        );
    };

    export default Banner;
