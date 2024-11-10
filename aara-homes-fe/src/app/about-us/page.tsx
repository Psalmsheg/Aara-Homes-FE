"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Button, useToast, Image, HStack, Checkbox, chakra, VStack, Card, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon, ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import { Typewriter } from 'react-simple-typewriter';
import Wrapper from "../components/Wrapper";
import Footer from "../components/footer";






  
export default function AboutUs() {


  const cardServices = [
    { id: 1, title: "Agency & Brokerage Services", image: "/icons8-handshake-48 1.png", content: "Aara Homes offers Agency and Brokerage services from landlords and occupiers, instituitional or corporate investors, and developers to local or central government authorities." },
    { id: 2, title: "Property Management", image: "/icons8-business-group-32.png", content: "Aara Homes offers Agency and Brokerage services from landlords and occupiers, instituitional or corporate investors, and developers to local or central government authorities." },
    { id: 3, title: "Detailed Pricing Strategy", image: "/icons8-graph-chart-80 1.png", content: "Aara Homes offers Agency and Brokerage services from landlords and occupiers, instituitional or corporate investors, and developers to local or central government authorities." },
    { id: 4, title: "Property Market Analysis", image: "/icons8-property-80 1 (1).png", content: "Aara Homes offers Agency and Brokerage services from landlords and occupiers, instituitional or corporate investors, and developers to local or central government authorities." },
    { id: 5, title: "Detailed Pricing Strategy", image: "/icons8-graph-chart-80 1.png", content: "Aara Homes offers Agency and Brokerage services from landlords and occupiers, instituitional or corporate investors, and developers to local or central government authorities." },
    { id: 6, title: "Property Market Analysis", image: "/icons8-property-80 1 (1).png", content: "Aara Homes offers Agency and Brokerage services from landlords and occupiers, instituitional or corporate investors, and developers to local or central government authorities." },
  ];



  return (
    <Box bgColor={"#0F0F0F"}>
      <Wrapper>
        <Flex justifyContent={"space-between"} py={"1em"}>
          <Box>
            <Text fontSize={"20px"} fontWeight={"700"} color={"brand.primary"}>AaraHomes</Text>
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
        <Image src="/about-us-hero.png" alt="hero-img" width={"100%"} height={"85vh"} opacity={"0.5"}/>

        <Box position={"absolute"} top={"170"} ml={"35em"}>
          <Text fontFamily={"Georgia"} fontWeight={"700"} fontSize={"55px"} color={"#FFFFF0"} textAlign={"center"}>About us</Text>
        </Box>

        <Box position={"absolute"} top={"250"} ml={"34em"}>
          <Text fontWeight={"400"} fontSize={"22px"} color={"#FFFFF0"} textAlign={"center"}>Welcome to Aara Homes</Text>
        </Box>
      </Box>

      <Box height={"900px"} bgColor={"brand.primary"}>
        <Wrapper>
            <Text fontSize={"28px"} textAlign={"center"} fontFamily={"Georgia"} fontWeight={"700"} py={"2em"}>OUR SERVICES</Text>

          <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={"2em"}>

            {cardServices.map((service) => (
                <Card bgColor={"#fff"} p={"3em"} maxW='sm' borderRadius={"0px"}>
                    <HStack spacing={"3"}>
                        <Image src={service.image} alt="handshake-img" />
                        <Text color={"#3A3A3A"} fontWeight={"700"}>{service.title}</Text>
                    </HStack>
                    <Text color={"#3A3A3A"} fontWeight={"400"} fontSize={'14PX'}>{service.content}</Text>
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

