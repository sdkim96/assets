import React from 'react';
import { ChakraProvider, Box, VStack, Heading, Text, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
});

const GradientText = ({ children }) => (
  <Text
    fontSize="24px"
    fontWeight="bold"
    bgGradient="linear(45deg, #63B3ED, #2B6CB0)"
    bgClip="text"
    m="15px 0"
    p="10px"
    transition="transform 0.3s"
    _hover={{ transform: "scale(1.05)" }}
  >
    {children}
  </Text>
);

const WebsiteDesignBenefits = () => {
  const benefits = [
    "첫인상 향상",
    "브랜드 아이덴티티 강화",
    "사용자 체류 시간 증가",
    "정보의 효과적 전달",
    "신뢰도와 전문성 제고",
    "사용자 경험 향상",
    "경쟁 우위 확보",
    "모바일 최적화",
    "전환율 향상",
    "브랜드 스토리텔링"
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        p={5}
      >
        <VStack spacing={4}>
          <Heading
            fontSize="32px"
            mb={7}
            bgGradient="linear(45deg, #63B3ED, #2B6CB0)"
            bgClip="text"
          >
            웹사이트 디자인의 장점
          </Heading>
          {benefits.map((benefit, index) => (
            <GradientText key={index}>{benefit}</GradientText>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default WebsiteDesignBenefits;