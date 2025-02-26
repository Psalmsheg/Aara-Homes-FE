"use client";

import { useEffect, useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Button, useToast, Image, HStack, Checkbox, chakra, VStack, Card, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon, ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import Wrapper from "./Wrapper";


export default function Footer() {

  const currentYear = new Date().getFullYear();
  
  return (
    <Box  bgColor={"#0F0F0F"} >
        <Wrapper>
          <Flex justifyContent={"space-between"} mt={"4em"} borderBottom={"1px solid #CCA01D"}>
            <Box mb={"3em"}>
              <Text fontSize={"24px"} color={"#FFFFFF"} fontWeight={"500"} pb={".5em"}>AaraHomes</Text>
              <Text fontSize={"14px"} color={"#FFFFFF"} fontWeight={"300"} maxW={"500px"}>Our primary focus is on enhancing the customer journey in day-to-day management, with services tailored to each client. We devote special attention to unique needs and requirements, helping thousands of clients achieve their homeownership goals, establish successful businesses, and maximize returns on investment.</Text>
            </Box>

            <Box>
              <Text fontSize={"24px"} color={"#FFFFFF"} fontWeight={"500"} pb={".5em"}>Discover</Text>

              <HStack>
                <ChevronRightIcon color={"#FFFFFF"}/>
                <Link href={"/properties"}>
                  <Text fontSize={"14px"} color={"#FFFFFF"} fontWeight={"300"}>Properties</Text>
                </Link>
              </HStack>

              <HStack>
                <ChevronRightIcon  color={"#FFFFFF"}/>
                <Link href={"/agents"}>
                  <Text fontSize={"14px"} color={"#FFFFFF"} fontWeight={"300"}>Agents</Text>
                </Link>
              </HStack>

              <HStack>
                <ChevronRightIcon  color={"#FFFFFF"}/>
                <Link href={"/about-us"}>
                  <Text fontSize={"14px"} color={"#FFFFFF"} fontWeight={"300"}>About Us</Text>
                </Link>
              </HStack>

              <HStack>
                <ChevronRightIcon  color={"#FFFFFF"}/>
                <Link href={"/blogs"}>
                  <Text fontSize={"14px"} color={"#FFFFFF"} fontWeight={"300"}>Blogs</Text>
                </Link>
              </HStack>

              <HStack>
                <ChevronRightIcon  color={"#FFFFFF"}/>
                <Link href={"/contact"}>
                  <Text fontSize={"14px"} color={"#FFFFFF"} fontWeight={"300"}>Contact</Text>
                </Link>
              </HStack>
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"} textAlign={{smd:"left", base:"center"}} color={"#fff"} pt={"2em"}> © AaraHomes {currentYear}. All rights reserved. We love our customers!</Text>
            <HStack mt={"1em"} spacing={"3"}>
              <Link href={"https://"} target="_blank">
                <Image src="/icons8-facebook-50 (1).png" alt="" w={"40px"} h={"40px"} cursor={"pointer"}/>
              </Link>
              
              <Link href={"https://"} target="_blank">
                <Image src="/icons8-instagram-32.png" alt="" mr={"1.5em"} w={"40px"} h={"40px"} cursor={"pointer"}/>
              </Link>
            </HStack>
          </Flex>
        </Wrapper>
    </Box>
  )

    
}
