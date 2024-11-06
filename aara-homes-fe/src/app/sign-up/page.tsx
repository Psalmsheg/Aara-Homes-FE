"use client"
// import Image from "next/image";
import styles from "./page.module.css";
// import Wrapper from "./components/Wrapper";
import { useEffect, useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Button, useToast, Image, HStack, Checkbox, chakra } from "@chakra-ui/react";
import {  FiEyeOff, FiEye  } from "react-icons/fi"
// import { BASE_URL } from "./lib/endpoints";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation} from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useSlug } from "@/hooks/slug";
import { getBaseUrl } from "../lib/slug";



  
export default function SignUp() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)
  const slug = useSlug();

  const baseUrl = getBaseUrl(slug);



  const login = (payload: any) => {
    return axios.post(`${baseUrl}/voter/auth`, {
      email: payload.email,
      password: payload.password,
      confirmpassword: payload.confirmpassword,
      slug
    })
  }

  const router = useRouter();
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [confirmpassword, setConfirmPassword]= useState("")
  const [isLoading, setIsloading]= useState(false);
  const [cookie, setCookie] = useCookies();

  const mutation = useMutation({
    mutationFn: login,
    mutationKey: ["next"],
    onSuccess: (data) => { 
      setIsloading(false);
      const token= data.data.data._response.token
      console.log(token);
      setCookie("token", token, {
        path: "/",
        maxAge: 3600,
        sameSite: false,
      });
      location.replace("/voting")
      toast({
        title: 'Successful',
        description: 'Login successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
    },
    onError: (e: any) => {
      setIsloading(false);
      toast({
        title: e.response.data.error,
        description: e.response.data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      console.log(e.response);
    }
  });

  const submit = (e:any) => {
    e.preventDefault();
    mutation.mutate({email,password, confirmpassword})
    console.log({email,password, confirmpassword});
    setIsloading(true);
  }

  const isFormValid = email !== "" && password !== "";


  return (

    <Box  bgColor={"#1E1E1E"} h={"120vh"}> 

      <Flex justifyContent={'space-between'} width={"100%"}>

        <Box width={"45%"}>     
          <Image src="/left-img.png" alt="left-image" width={"100%"} height={"120vh"} />
        </Box>

          <Box mr={"12em"} mt={"4em"}>

            <Box>
              <Text fontWeight={"500"} fontSize={"28px"} color={"#FFFFFF"} fontFamily={"Georgia Pro Cond"}>Sign Up</Text>

              <HStack spacing={"4"} my={"2em"}>
                <Button leftIcon={<Image src="/icons8-google-50.png" alt="google-icon"/>} fontSize={"12px"} bgColor={"#2962FF"} color={"#fff"} fontFamily={"Inter"} fontWeight={"400"} variant={"primary"} borderRadius={"0px"}>SIGN UP WITH GOOGLE</Button>
                <Button leftIcon={<Image src="/icons8-facebook-50 (3).png" alt="facebook-icon"/>} fontSize={"12px"} borderColor={"brand.primary"} color={"brand.primary"} fontFamily={"Inter"} fontWeight={"400"} variant={"outline"} borderRadius={"0px"} _hover={{ bg: "none", borderColor: "none" }}>SIGN UP WITH FACEBOOK</Button>
              </HStack>

              <HStack>
                <Box border={"1px solid #FFFFF040"} width={"190px"}></Box>
                <Text fontWeight={"700"} color={"#FFFFF040"}>or</Text>
                <Box border={"1px solid #FFFFF040"} width={"197px"}></Box>
              </HStack>

              <Text fontSize={"14px"} color={"#FFFFF0"} fontWeight={"500"} mt={"1em"}>SIGN UP WITH EMAIL ADDRESS</Text>
            </Box>
            <form onSubmit={submit} >
              <FormControl isRequired mt={"2em"} w={"100%"} >
              <FormLabel fontWeight={"500"} fontSize={"12px"} color={"brand.primary"}>EMAIL ADDRESS</FormLabel>
                <Input placeholder='Enter your Email Address' value={email} type="email" onChange={(e)=>setEmail(e.target.value)} fontSize={"12px"} color={"#fff"} fontWeight={"500"} focusBorderColor="transparent" border={"none"} borderBottom={"1px solid #FFFFF080"} borderRadius={"0px"}/>
                
                <FormLabel fontWeight={"500"} fontSize={"12px"} mt={"2em"} color={"brand.primary"}>PASSWORD</FormLabel>
                <Box>
                  <InputGroup>
                    <Input placeholder='Enter your Password' fontSize={"12px"} value={password} onChange={(e)=>setPassword(e.target.value)} color={"#fff"} fontWeight={"500"} type={showPassword ? "text" : "password"} focusBorderColor="transparent" border={"none"} borderBottom={"1px solid #FFFFF080"} borderRadius={"0px"}/>
                    <InputRightElement mt={"2px"}>
                      <Box onClick={toggleShowPassword}>
                      {showPassword ? <FiEyeOff fontSize={"12px"} cursor={"pointer"} color={"#fff"}/> : <FiEye fontSize={"12px"} cursor={"pointer"} color={"#fff"}/>}
                      </Box>
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <FormLabel fontWeight={"500"} fontSize={"12px"} mt={"2em"} color={"brand.primary"}>CONFIRM PASSWORD</FormLabel>
                <Box>
                  <InputGroup>
                    <Input placeholder='Confirm your Password' fontSize={"12px"} value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} color={"#fff"} fontWeight={"500"} type={showConfirmPassword ? "text" : "password"} focusBorderColor="transparent" border={"none"} borderBottom={"1px solid #FFFFF080"} borderRadius={"0px"}/>
                    <InputRightElement mt={"2px"}>
                      <Box onClick={toggleShowConfirmPassword}>
                      {showConfirmPassword ? <FiEyeOff fontSize={"12px"} cursor={"pointer"} color={"#fff"}/> : <FiEye fontSize={"12px"} cursor={"pointer"} color={"#fff"}/>}
                      </Box>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>

              <Flex justifyContent={"space-between"} mt={"1em"}> 
                <Checkbox color={"#F5F5F580"} fontSize={"8px"}>Keep Me Signed In</Checkbox>
                <Box maxWidth={"225px"} mt={"1.5em"}>
                  <Text fontSize={"9px"} fontWeight={"400"} color={"brand.primary"}>By submitting this form, you acknowledge that you Accept
                the AaraHome’s <chakra.span color={"#fff"}>Privacy Policy</chakra.span> and <chakra.span color={"#fff"}>Terms of Use.</chakra.span></Text>
                </Box>
              </Flex>
            
            <Flex justifyContent={"space-between"}>
              <Box mt={"2em"}>
                <Text color={"#F5F5F580"} fontSize={"12px"}>Already have an account?<br/> 
                <chakra.span color={"#fff"} cursor={"pointer"} onClick={() => location.replace("/sign-in")}>Sign In</chakra.span></Text>
              </Box>

              <Button my={"2em"} bgColor={"brand.primary"} color={"#3A3A3A"} width={"30%"} borderRadius={"none"} variant={"primary"} fontSize={"16px"} type="submit" isLoading={isLoading} isDisabled={!isFormValid}>Sign Up</Button>
              </Flex>
            </form>
          </Box>
      </Flex>
    </Box>
  );
}

