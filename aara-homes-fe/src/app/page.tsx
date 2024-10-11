"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Wrapper from "./components/Wrapper";
import { useEffect, useState } from "react";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Button, useToast } from "@chakra-ui/react";
import {  FiEyeOff, FiEye  } from "react-icons/fi"
// import { BASE_URL } from "./lib/endpoints";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation} from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useSlug } from "@/hooks/slug";
import { getBaseUrl } from "./lib/slug";


  
export default function LoginClient({electionName}:any) {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword)
  const slug = useSlug();

  const baseUrl = getBaseUrl(slug);



  const login = (payload: any) => {
    return axios.post(`${baseUrl}/voter/auth`, {
      email: payload.email,
      password: payload.password,
      slug
    })
  }

  const router = useRouter();
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
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
    mutation.mutate({email,password})
    console.log({email,password});
    setIsloading(true);
  }

  const isFormValid = email !== "" && password !== "";


  return (

    <Box  bgColor={"#f6f6f6"} h={"100vh"}> 
      <Wrapper>
        <Flex justifyContent={{md:'center',base:"left"}}>
          <Image src="/logolight.png" alt="logo" width="134" height="134"/>
        </Flex>

        <Box textAlign={{md:'center',base:"left"}}>
          <Text fontWeight={"500"} fontSize={{md:"27px", base:"20px"}}>{electionName}</Text>
          <Text fontWeight={"400"} fontSize={{md:"18px", base:"14px"}} color={"#57595A"} mt={"1em"}>Kindly input your details to vote⚡</Text>
        </Box>

        <Flex justifyContent={{md:'center',base:"center"}} >
          <form onSubmit={submit} >
            <FormControl isRequired mt={"3em"} w={"100%"} >
            <FormLabel fontWeight={"400"} fontSize={"18px"} mt={"1em"} >Email</FormLabel>
              <Input placeholder='Johnismydoe@gmail.com' value={email} type="email" onChange={(e)=>setEmail(e.target.value)} fontSize={"18px"} color={"#8E9090"} fontWeight={"400"} bgColor={"#EAEAEA"} h={"45px"} w={{md:"461px", base:"370px"}} mb={"1em"}focusBorderColor="transparent"/>
              <FormLabel fontWeight={"400"} fontSize={"18px"} mt={"1em"}>Password</FormLabel>
              <Box>
                <InputGroup>
                  <Input placeholder='********' fontSize={"18px"} value={password} onChange={(e)=>setPassword(e.target.value)} color={"#8E9090"} fontWeight={"400"} bgColor={"#EAEAEA"} type={showPassword ? "text" : "password"}  h={"45px"} w={{md:"461px", base:"370px"}} focusBorderColor="transparent"/>
                  <InputRightElement mt={"2px"}>
                    <Box onClick={toggleShowPassword}>
                    {showPassword ? <FiEyeOff fontSize={"20px"} cursor={"pointer"} /> : <FiEye fontSize={"20px"} cursor={"pointer"}/>}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </FormControl>
        
          
            <Button my={"2em"} bgColor={"brand.primary"} color={"#fff"} width={"100%"} variant={"primary"} fontSize={"18px"} type="submit" isLoading={isLoading} h={"45px"} isDisabled={!isFormValid}>Log in</Button>
          </form>
        </Flex>
      
      </Wrapper>
    </Box>
  );
}

