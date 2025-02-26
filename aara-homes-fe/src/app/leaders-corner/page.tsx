"use client"

import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Button, useToast, Image, HStack, Checkbox, chakra, VStack, Card, SimpleGrid, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";

import Wrapper from "../components/Wrapper";
import Footer from "../components/footer";





  
export default function LeadersCorner() {

    const [startIndex, setStartIndex] = useState(0);

    const imagesPerPage = 3;


    const leadersPictures = [
    { id: 1, image: "/Adams.jpeg", name:"Adams David", position: "Founder/CEO" },
    { id: 2, image: "/Toluwalase.jpeg", name:"Toluwalase AJ", position: "Project Manager" },
    { id: 3, image: "/Ramat.jpeg", name:"Ramatalai", position: "Project Manager" },
    { id: 4, image: "/Psalm.jpeg", name:"Samuel Ibioye", position: "Frontend Developer" },
    { id: 5, image: "/Toluwalase.jpeg", name:"Olumi James", position: "Frontend Developer" },
    { id: 6, image: "/Toluwalase.jpeg", name:"Emmanuel A.O", position: "Backend Developer" }
    ];

    const displayedImages = leadersPictures.slice(startIndex, startIndex + imagesPerPage);

    const handleNext = () => {
        if (startIndex + imagesPerPage < leadersPictures.length) {
          setStartIndex(startIndex + imagesPerPage);
        }
      };
    
      const handlePrevious = () => {
        if (startIndex > 0) {
          setStartIndex(startIndex - imagesPerPage);
        }
      };


  return (
    <Box bgColor={"#0F0F0F"}>
      <Wrapper>
        <Flex justifyContent={"space-between"} py={"1em"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={"700"} color={"brand.primary"} onClick={()=> location.replace("/")} cursor={"pointer"}>AaraHomes</Text>
          </Box>

          <Box>
            <HStack spacing={"9"}>
              <Text fontSize={"15px"} fontWeight={"500"} color={"brand.primary"} cursor={"pointer"} onClick={() => location.replace("/")}>Homes</Text>
              <Text fontSize={"15px"} fontWeight={"500"} color={"brand.primary"} cursor={"pointer"} onClick={() => location.replace("/")}>Properties</Text>
              <Text fontSize={"15px"} fontWeight={"500"} color={"brand.primary"} cursor={"pointer"} onClick={() => location.replace("/")}>Agents</Text>
              <Text fontSize={"15px"} fontWeight={"500"} color={"brand.primary"} cursor={"pointer"} onClick={() => location.replace("/")}>Contact</Text>
              <Text fontSize={"15px"} fontWeight={"500"} color={"brand.primary"} cursor={"pointer"} onClick={() => location.replace("/")}>AaraBlogs</Text>
              <Button leftIcon={<Search2Icon/>} borderRadius={"30px"} borderColor={"brand.primary"} color={"brand.primary"} fontWeight={"600"} px={"2em"} _hover={{ bg: "none", borderColor: "none" }} variant={"outline"}>Search</Button>
            </HStack>
          </Box>

          <Box>
            <HStack spacing={"5"}>
            <Button bgColor={"#0F0F0F"} color={"brand.primary"} borderRadius={"none"} variant={"outline"} fontSize={"15px"} px={"2em"} borderColor={"brand.primary"} _hover={{ bg: "none", borderColor: "none" }} onClick={() => location.replace("/sign-up")}>Sign Up</Button>
            <Button bgColor={"brand.primary"} color={"#fff"} borderRadius={"none"} variant={"primary"} fontSize={"15px"} px={"2em"} onClick={() => location.replace("/sign-in")}>Sign In</Button>
            </HStack>
          </Box>
        </Flex>
      </Wrapper>

      <Box width={"100%"} position={"relative"}>
        <Image src="/leaders.png" alt="group-picture" width={"100%"} height={"85vh"} opacity={"0.5"}/>

        <Box position={"absolute"} top={"220"} ml={"12em"}>
          <Text fontFamily={"Georgia"} fontWeight={"700"} fontSize={"50px"} color={"#FFFFF0"} textAlign={"center"}>Committed and Proficient Leadership</Text>
        </Box>
      </Box>

      <Box height={"250px"} >
        <Wrapper>
            <Text fontSize={"18px"} textAlign={"center"} fontWeight={"400"} p={"4em"} color={"#fff"}>The leadership team at AaraHomes brings extensive experience in real estate, with a proven track record of success. With 50 years of combined experience, our team has a profound understanding of the market, a keen eye for innovation, and a steadfast commitment to excellence.
            </Text>
        </Wrapper>
      </Box>

      <Box height={"900px"} bgColor={"brand.primary"}>
        <Wrapper>
            <Text fontSize={"44px"} fontWeight={"700"} textAlign={"center"}  pt={"1.5em"}>Our Expert Leadership</Text>
            <Text fontSize={"25px"} fontWeight={"300"} textAlign={"center"}  color={"#3A3A3A"}>Building a Legacy of quality and trust</Text>

            <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={"2em"}>

                {displayedImages.map((leader) => (
                    <Card bgColor={"#fff"} maxW='lg' borderRadius={"0px"} position={"relative"} height={"450px"} >
                        <Image src={leader.image} alt="leader-img" objectFit={"cover"} height={"100%"}/>

                        {/* Previous Button */}
                        {displayedImages === 0 && startIndex > 0 && (
                            <IconButton
                            aria-label="Previous"
                            icon={<ChevronLeftIcon />}
                            position="absolute"
                            top="50%"
                            left="0"
                            transform="translateY(-50%)"
                            onClick={handlePrevious}
                            disabled={startIndex === 0} 
                        />
                        )}

                        {/* Next Button */}
                        {displayedImages === imagesPerPage - 1 && startIndex + imagesPerPage < leadersPictures.length && (
                            <IconButton
                            aria-label="Next"
                            icon={<ChevronRightIcon />}
                            position="absolute"
                            top="50%"
                            right="0"
                            transform="translateY(-50%)"
                            onClick={handleNext}
                            disabled={startIndex + imagesPerPage >= leadersPictures.length}
                        />
                        )}
                        

                        <Flex alignItems={"center"} justifyContent={"center"}>
                            <Box position={"absolute"} top={"380"} textAlign={"center"}>
                                <Text color={"#fff"} fontWeight={"700"} textAlign={"center"} fontSize={"20px"}>{leader.name}</Text>
                                <Text color={"#fff"} fontWeight={"400"} fontSize={'12px'}>{leader.position}</Text>
                            </Box>
                        </Flex>
                    </Card>
                ))}

            </SimpleGrid>
        </Wrapper>
      </Box>

      {/* Footer section */}

        <Footer />
    
    </Box>
  );
}

