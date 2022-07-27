import React, { useState } from "react";

import { TextHeader } from "./styles";

import {
  Heading,
  VStack,
  Input,
  Icon,
  useTheme,
  Text,
  Button,
  KeyboardAvoidingView,
  Select,
  HStack,
} from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import welcome from "../../assets/welcome.json";

import LottieView from "lottie-react-native";

export function Home() {
  const { colors } = useTheme();
  const [type, setType] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      flex={1}
      bg="background.700"
      px={8}
      alignItems="center"
      justifyContent="center"
      behavior="padding"
    >
      <VStack w="full" alignItems="center">
        <LottieView
          source={welcome}
          resizeMode="contain"
          loop
          autoPlay
          autoSize
          style={{ height: 250 }}
        />

        <Heading color="white" mt={12} mb={8} fontWeight="normal">
          Acesse a sua <Text color="orange.500">conta</Text>
        </Heading>

        <HStack w="full" justifyContent="space-between" mb={8} space={2}>
          <Input
            w="2/4"
            placeholder="Código"
            color="white"
            textAlign="center"
            borderColor="gray.300"
            borderRadius={10}
            onChangeText={setCode}
          />

          <Select
            minWidth="2/4"
            placeholder="Entrar como"
            accessibilityLabel="Choose Service"
            color="white"
            textAlign="center"
            borderColor="gray.300"
            borderRadius={10}
            onValueChange={setType}
          >
            <Select.Item label="Aluno" value="Aluno" />
            <Select.Item label="Professor" value="Professor" />
            <Select.Item label="Coordenador" value="Coordenador" />
          </Select>
        </HStack>

        <Input
          bg="purple.800"
          h={16}
          placeholder="E-MAIL"
          color="white"
          mb={8}
          borderRadius={10}
          InputLeftElement={
            <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
          }
          borderWidth={0}
          placeholderTextColor="gray.300"
          _focus={{
            borderWidth: 1,
            borderColor: colors.orange[500],
            bg: "purple.800",
          }}
          fontSize="md"
          onChangeText={setEmail}
        />

        <Input
          bg="purple.800"
          borderRadius={10}
          h={16}
          placeholder="SENHA"
          InputLeftElement={
            <Icon as={<Key color={colors.gray[300]} />} ml={4} />
          }
          borderWidth={0}
          color="white"
          placeholderTextColor="gray.300"
          _focus={{
            borderWidth: 1,
            borderColor: colors.orange[500],
            bg: "purple.800",
          }}
          fontSize="md"
          mb={8}
          onChangeText={setPassword}
          type="password"
        />

        <Button
          w="full"
          borderRadius={10}
          bg="orange.600"
          _pressed={{
            borderWidth: 1,
            bg: "blue.100",
          }}
        >
          <Heading>Entrar</Heading>
        </Button>
      </VStack>
    </KeyboardAvoidingView>
  );
}
