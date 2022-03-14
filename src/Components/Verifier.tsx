import {useEtherBalance, useEthers} from "@usedapp/core";
import {Box, Button, Center, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {formatEther} from "@ethersproject/units";
// @ts-ignore
import csvfile from './../csv/victims.csv';
import {readRemoteFile, readString} from "react-papaparse";
import {useEffect, useState} from "react";

export default function Verifier() {
    const { activateBrowserWallet, account } = useEthers()
    const etherBalance = useEtherBalance(account)
    const [isAVictim, setIsAVictim] = useState(false);

    useEffect(() => {
        setIsAVictim(false)
        handleVerify()
    }, [account])

    const handleVerify = () => {
        // @ts-ignore
        readRemoteFile(csvfile, {
            step: (row) => {
                // @ts-ignore
                console.log('Row:', row.data[4])
                // @ts-ignore
                if (row.data[4] == account && row.data[4] != undefined) {
                    setIsAVictim(true)
                }
            },
            complete: () => {
                console.log(isAVictim)
                console.log('Checking complete')
            }
        });
    }

    return(
        <>
            <Flex
                w='100%'
                h='100vh'
                bgGradient={[
                    'linear(to-b, blue.300, green.400)',
                ]}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box w={'500px'} bg={"whiteAlpha.500"}
                     p={10}>
                    {!account &&
                        <Button onClick={() => activateBrowserWallet()}>
                            Connect to verify
                        </Button>}
                    {account && <Text textAlign={"left"}>Account: <Text textAlign={"center"}> {account}</Text> </Text>}
                    {(!isAVictim && account) && <Text> is not a SmolPenis victim </Text>}

                    {isAVictim &&
                    <Box>
                        <Text>
                            Choose a project to be whitelisted on.
                        </Text>
                        <Flex pt={10} flexWrap={"wrap"} gap={4}>
                            <Box w={120}  bg={"whiteAlpha.400"} pb={3}>
                                <Box w={"full"} h={'100px'} bg={"whiteAlpha.900"}>

                                </Box>
                                <Text> SmolSample</Text>
                                <Text> 0 / 50</Text>
                                <Button>
                                    Claim
                                </Button>
                            </Box>
                            <Box w={120}  bg={"whiteAlpha.400"} pb={3}>
                                <Box w={"full"} h={'100px'} bg={"whiteAlpha.900"}>

                                </Box>
                                <Text> SmolSample</Text>
                                <Text> 0 / 50</Text>
                                <Button>
                                    Claim
                                </Button>
                            </Box>
                            <Box w={120}  bg={"whiteAlpha.400"} pb={3}>
                                <Box w={"full"} h={'100px'} bg={"whiteAlpha.900"}>

                                </Box>
                                <Text> SmolSample</Text>
                                <Text> 0 / 50</Text>
                                <Button>
                                    Claim
                                </Button>
                            </Box>
                            <Box w={120}  bg={"whiteAlpha.400"} pb={3}>
                                <Box w={"full"} h={'100px'} bg={"whiteAlpha.900"}>

                                </Box>
                                <Text> SmolSample</Text>
                                <Text> 0 / 50</Text>
                                <Button>
                                    Claim
                                </Button>
                            </Box>
                            <Box w={120}  bg={"whiteAlpha.400"} pb={3}>
                                <Box w={"full"} h={'100px'} bg={"whiteAlpha.900"}>

                                </Box>
                                <Text> SmolSample</Text>
                                <Text> 0 / 50</Text>
                                <Button>
                                    Claim
                                </Button>
                            </Box>
                        </Flex>
                    </Box>}
                </Box>

            </Flex>

            {/*{etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}*/}
        </>
    )
}