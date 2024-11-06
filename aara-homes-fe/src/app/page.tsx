"use client"

import styles from "./page.module.css";
import Wrapper from "./components/Wrapper";
import { useEffect, useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Button, useToast, Image, HStack, Checkbox, chakra, VStack, Card, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon, ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import { Typewriter } from 'react-simple-typewriter';





  
export default function LandingPage() {

  const cardBlog = [
    { id: 1, title: "JULY PROMO: 20% Discount", image: "/blog1.png" },
    { id: 2, title: "How’s the AaraHomes Real Estate Market?", image: "/blog2.png" },
    { id: 3, title: "AaraHomes: First Office", image: "/blog3.png" },
  ];

  const cardProperty = [
    { id: 1, title: "Olive House Villa", image: "/card-img.png", location: "1234 Elm Street, Los Angeles, CA 90012", price: "$500,000", bedrooms: "7 bedrooms", bathrooms: "7 bathrooms", sqft: "12,500 Sq Ft" },
    { id: 2, title: "Olive House Villa", image: "/card-img.png", location: "1234 Elm Street, Los Angeles, CA 90012", price: "$116,000,000", bedrooms: "8 bedrooms", bathrooms: "8 bathrooms", sqft: "16,500 Sq Ft" },
    { id: 3, title: "Open House Villa", image: "/card-img.png", location: "1234 Elm Street, Los Angeles, CA 90012", price: "$96,000,000", bedrooms: "6 bedrooms", bathrooms: "7 bathrooms", sqft: "11,500 Sq Ft" },
    { id: 4, title: "Hawkins House Villa", image: "/card-img.png", location: "1234 Elm Street, Los Angeles, CA 90012", price: "$106,000,000", bedrooms: "12 bedrooms", bathrooms: "10 bathrooms", sqft: "19,200 Sq Ft" },
    { id: 5, title: "Nirvana House", image: "/card-img.png", location: "1234 Elm Street, Los Angeles, CA 90012", price: "$76,000,000", bedrooms: "4 bedrooms", bathrooms: "4 bathrooms", sqft: "6,500 Sq Ft" },
    { id: 6, title: "Nirvana House", image: "/card-img.png", location: "1234 Elm Street, Los Angeles, CA 90012", price: "$76,000,000", bedrooms: "4 bedrooms", bathrooms: "4 bathrooms", sqft: "6,500 Sq Ft" }
  ];

  const currentYear = new Date().getFullYear();



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
              <Button leftIcon={<Search2Icon/>} borderRadius={"30px"} borderColor={"brand.primary"} color={"brand.primary"} fontWeight={"600"} px={"1.5em"} _hover={{ bg: "none", borderColor: "none" }} variant={"outline"}>Search</Button>
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
        <Image src="/hero-img.png" alt="hero-img" width={"100%"} height={"90vh"} opacity={"0.5"}/>

        <Box position={"absolute"} top={"220"} ml={"20em"}>
          <Text fontFamily={"Georgia Pro Cond"} fontWeight={"700"} fontSize={"55px"} color={"#FFFFF0"} >Welcome to <chakra.span color={"brand.primary"} fontFamily={"Georgia Pro Cond"}><Typewriter
            words={['AaraHomes']}
            loop={true}
            cursor
            typeSpeed={200}
            delaySpeed={3000}
            /></chakra.span>
            </Text>
        </Box>

        <Box position={"absolute"} top={"320"} ml={"15em"}>
          <Text fontWeight={"400"} fontSize={"22px"} color={"#FFFFF0"} textAlign={"center"}>AaraHomes is a forward-thinking real estate company dedicated to crafting<br/>exceptional living expenses.</Text>
        </Box>

        <HStack position={"absolute"} top={"465"} right={"30"}>
          <Box bgColor={"brand.primary"} borderRadius={"50%"} height={"40px"} width={"40px"} cursor={"pointer"}><Image src="/icons8-message-50 1.png" height={"20px"} width={"20px"} mt={".6em"} ml={".65em"}/></Box>

          <VStack mt={"2em"}>
            <Box bgColor={"brand.primary"} borderRadius={"50%"} height={"40px"} width={"40px"} cursor={"pointer"}><Image src="/icons8-agent-50 (1) 1.png" height={"20px"} width={"20px"} mt={".55em"} ml={".55em"}/></Box>
            <Text color={"#FFFFFF"} fontWeight={"500"} fontSize={"14px"}>Agents</Text>
          </VStack>
        </HStack>
      </Box>
          
        {/* Showcase Properties Section */}

      <Box height={"1500px"} bgColor={"brand.primary"}>
        <Wrapper>
          <Flex justifyContent={"space-between"} py={"4em"}>
            <Box maxW={"500px"} mt={"4em"}>
              <Text fontWeight={"600"} fontSize={"32px"} color={"#0F0F0F"} fontFamily={"Georgia"}>Showcase Properties</Text>
              <Text fontWeight={"400"} fontSize={"20px"} color={"#0F0F0F"} fontFamily={"Georgia"} pt={"1em"}>Our exquisite homes are designed to impress, 
              with sleek architecture, lavish interiors, and breathtaking views. Each property is a masterpiece, crafted with precision and passion to provide the ultimate comfort and sophistication.</Text>
            </Box>
            <Image src="/showcase.png" alt="house" width={"500px"}/>
          </Flex>
          
          <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={"2em"}>
            {cardProperty.map((card) => (
                <Card maxW='sm' borderRadius={"0px"} bgColor={"#0F0F0F"}>
                <Image src={card.image} alt="card image" objectFit={"cover"} width={"390px"} height={"290px"}/>
    
                <Flex justifyContent={"space-between"} p={"1em"}>
                  <Box>
                    <Text fontWeight={"600"} fontSize={"16px"} color={"#FFFFFF"} fontFamily={"Georgia"}>{card.title}</Text>
                    <HStack spacing={"1"} mt={".3em"}>
                      <Image src="/icons8-location-24.png" alt=""/>
                      <Text fontWeight={"400"} fontSize={"10px"} color={"#FFFFFF"} fontFamily={"Georgia"}>{card.location}</Text>
                    </HStack>
                  </Box>
                </Flex>
    
                <Text fontSize={"12px"} fontWeight={"700"} color={"brand.primary"} px={"1em"} fontFamily={"Georgia"}>{card.price}</Text>
                <Flex justifyContent={"space-between"} p={"1em"}>
                  <Text fontSize={"14px"} fontWeight={"400"} color={"#fff"} fontFamily={"Georgia"}>{card.bedrooms}</Text>
                  <HStack>
                    <Image src="/Ellipse 32.png" alt="" />
                    <Text fontSize={"14px"} fontWeight={"400"} color={"#fff"} fontFamily={"Georgia"}>{card.bathrooms}</Text>
                  </HStack>
    
                  <HStack>
                    <Image src="/Ellipse 32.png" alt="" />
                    <Text fontSize={"14px"} fontWeight={"400"} color={"#fff"} fontFamily={"Georgia"}>{card.sqft}</Text>
                  </HStack>
                </Flex>
                </Card>
            ))}
          </SimpleGrid>
        </Wrapper>
      </Box>


       {/* Discover more section */}

      <Wrapper>
        <Text fontSize={"40px"} textAlign={"center"} fontFamily={"Georgia"} fontWeight={"700"} color={"#fff"} my={"2em"}>DISCOVER MORE</Text>
        <Flex justifyContent={"space-between"} mb={"5em"}>
          <Card maxW='sm' borderRadius={"0px"} bgColor={"#0F0F0F"}>
            <Image src="/about-us.png" alt="card image" objectFit={"cover"} width={"350px"} height={"250px"}/>

            <Box p={"1em"} mb={"1.5em"}>
              <Text fontWeight={"700"} fontSize={"22px"} color={"#FFFFFF"} my={".5em"}>ABOUT US</Text>
              <Text fontWeight={"400"} fontSize={"12px"} color={"#FFFFFF"} >At Aara Homes, we’re dedicated to crafting more than just
                  houses - we build dreams. Our passion is to create excep-
                  tional living spaces that combine elegance, sustainability,
                  and inovative design. Our team of experts is commited to
                  delivering personalized...
              </Text>
            </Box>

            <Button fontWeight={"400"} fontSize={"12px"} color={"#FFFFFF"} width={"90%"} variant={"outline"} _hover={{ bg: "none"}} borderColor={"brand.primary"} rightIcon={<ArrowForwardIcon ml={"1em"}/>} borderRadius={"0px"} onClick={() => location.replace("/about-us")}>FIND OUT MORE</Button>
          </Card>

          <Card maxW='sm' borderRadius={"0px"} bgColor={"#0F0F0F"}>
            <Image src="/people.png" alt="card image" objectFit={"cover"} width={"350px"} height={"250px"}/>

            <Box p={"1em"} mb={"1.5em"}>
              <Text fontWeight={"700"} fontSize={"22px"} color={"#FFFFFF"} my={".5em"}>EXPERIENCED LEADERSHIP</Text>
              <Text fontWeight={"400"} fontSize={"12px"} color={"#FFFFFF"} >At Aara Homes, we’re dedicated to crafting more than just
                  houses - we build dreams. Our passion is to create excep-
                  tional living spaces that combine elegance, sustainability,
                  and inovative design. Our team of experts is commited to
                  delivering personalized...
              </Text>
            </Box>

            <Button fontWeight={"400"} fontSize={"12px"} color={"#FFFFFF"} width={"90%"} variant={"outline"} _hover={{ bg: "none"}} borderColor={"brand.primary"} rightIcon={<ArrowForwardIcon ml={"1em"}/>} borderRadius={"0px"}>FIND OUT MORE</Button>
          </Card>

          <Card maxW='sm' borderRadius={"0px"} bgColor={"#0F0F0F"}>
            <Image src="/people.png" alt="card image" objectFit={"cover"} width={"350px"} height={"250px"}/>

            <Button fontWeight={"400"} fontSize={"12px"} color={"#FFFFFF"} width={"100%"} mt={"4em"} variant={"outline"} _hover={{ bg: "none"}} borderColor={"brand.primary"} rightIcon={<ArrowForwardIcon ml={"1em"}/>} borderRadius={"0px"}>JOIN US</Button>
          </Card>
        </Flex>
      </Wrapper>
        
        {/* Blog Section */}

      <Box height={"500px"} bgColor={"#FFFFF0"}>
        <Wrapper>
          <Box py={"3em"} mb={"1em"}>
            <Text fontSize={"40px"} textAlign={"center"} fontFamily={"Georgia"} fontWeight={"400"} color={"#3A3A3A"} >Aara Blogs</Text>
          </Box>

          <Flex justifyContent={"space-between"} mb={"3em"}>
            {cardBlog.map((card) => (
              <Card maxW='sm' borderRadius={"0px"} bgColor={"#0F0F0F"} position={"relative"} cursor={"pointer"}>
                <Image alt="card image" objectFit={"cover"} width={"350px"} height={"250px"} opacity={".4"} src={card.image}/>
                <Box position={"absolute"} top={"150"} p={"15px"} opacity={"1"}>
                  <Text fontWeight={"400"} fontSize={"17px"} color={"#FFFFF0"} textAlign={"left"}>{card.title}</Text>
                  <Image src="/borderbottom.png" alt="" mt={".5em"}/>
                </Box>
              </Card>
            ))}
          </Flex>
        </Wrapper>
      </Box>
      
      <Box height={"360px"} bgColor={"brand.primary"}>
        <Box p={"7em"}>
          <Text fontSize={"22px"} textAlign={"center"} fontWeight={"400"} color={"#FFFFFF"}>
          We are a dedicated and organized team committed to delivering exceptional service by leveraging our expertise and deep understanding of each client’s unique needs. Our primary focus is enhancing the customer journey in day-to-day management, with services tailored precisely to each client. We devote our attention to helping thousands of clients achieve their goals, from homeownership and business setups to maximizing returns on investment.</Text>
        </Box>
      </Box>

      {/* Footer section */}

      <Box height={"500px"} bgColor={"#0F0F0F"}>
        <Wrapper>
          <Flex justifyContent={"space-between"} my={"4em"} borderBottom={"1px solid #CCA01D"}>
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

              <Text fontSize={"14px"} color={"#7c8289"} textAlign={{smd:"left", base:"center"}}> © AaraHomes {currentYear}. All rights reserved.</Text>

          </Flex>
        </Wrapper>
      </Box>  
    
    </Box>
  );
}

