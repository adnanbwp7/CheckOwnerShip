import React, { useEffect, useState } from 'react'
import { Box, Card, Button, Typography } from "@mui/material";
import Ticket from "../../assets/Ticket.gif";
import TKT from '../../../ABI/TKT.json';
import { ethers } from 'ethers';

const TKT_CONTRACT_ADDRESS = "0xece289B8128caCe172fdf993F7731227746FF41F"
const provider = new ethers.providers.Web3Provider(window.ethereum);

// get end user's account
const signer = provider.getSigner()

const contract = new ethers.Contract(TKT_CONTRACT_ADDRESS, TKT, signer);

const metadataURI = "https://gateway.pinata.cloud/ipfs/QmZZkSBb2qmM6ydAKBMBTftkJTo7vPL5CuQTV6jMdTHpso"

const MintTKT = ({ active }) => {

    const [isMinted, setIsMinted] = useState(false);


    const getMintedStatus = async () => {
        const result = await contract.ownerOf(metadataURI);
        setIsMinted(result)
    };

    useEffect(() => {
        getMintedStatus();
    }, [isMinted]);

    const mintTKTbtnClickHandler = async () => {
        try {
            const connection = contract.connect(signer);
            const addr = connection.address;
            const result = await contract.create(metadataURI, {
                value: ethers.utils.parseEther('0.5'),
            });
            await result.wait();
            console.log("Minted", result.toString());
            getMintedStatus();
        } catch (error) {
            if (!active) {
                alert('Wallet is not Connected')
                return;
            }
            if (isMinted) {
                alert('Already minted to this wallet')
            } else {
                alert(error.data.message)
            }

        }
    }

    return (
        <>
            <Box className='mint-container'>
                <Card className="card">
                    <img src={Ticket} style={{ width: "100%", height: "250px" }} alt="Ticket" srcSet={Ticket} />
                    <Box>
                        <div className="card-text">
                            1 TICKET = 0.5 BNB
                        </div>
                        <div className="card-text" style={{ fontWeight: 800 }}>
                            (MAX 1 TICKET PER WALLET)
                        </div>
                    </Box>
                </Card>
                <button onClick={mintTKTbtnClickHandler} className="btn-mint">
                    MINT TICKET
                </button>
            </Box>
        </>
    )
}
export default MintTKT
