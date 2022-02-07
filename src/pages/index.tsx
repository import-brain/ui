import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Navbar } from "~/modules/nav";
import { Footer } from "~/modules/nav/Footer";
import { Feature } from "~/modules/showcase/Feature";
import { FcMultipleDevices, FcPrivacy, FcSettings } from "react-icons/fc";

const Page: NextPage = () => {
  return (
    <>
      <Navbar />
      <Flex direction={"column"}>
        <Box px={4} my={9} flexGrow={1}>
          <Stack spacing={8}>
            <Box as={"section"} maxW={"5xl"} mx={"auto"}>
              <Stack>
                <Box as={"section"}>
                  <Center>
                    <Heading
                      fontSize={"4rem"}
                      color={"purple.400"}
                      fontWeight={"extrabold"}
                    >
                      Polygon
                    </Heading>
                  </Center>
                </Box>

                <Box w={"full"} as={"section"}>
                  <Box mx={"auto"} maxW={"xl"}>
                    <Text
                      color={"gray.400"}
                      textAlign={"center"}
                      fontWeight={"semibold"}
                    >
                      Polygon is an upcoming open-source {"&"} privacy-oriented
                      social network that is not hungry for your data.
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Box as={"section"}>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                direction={["column", "row"]}
              >
                <Button
                  as={"a"}
                  size={"lg"}
                  rounded={"full"}
                  target={"_blank"}
                  colorScheme={"purple"}
                  href={"https://ko-fi.com/"}
                  rel={"noreferrer noopener"}
                >
                  Donate
                </Button>

                <Button
                  as={"a"}
                  size={"lg"}
                  rounded={"full"}
                  target={"_blank"}
                  colorScheme={"gray"}
                  rel={"noreferrer noopener"}
                  href={"https://github.com/polygon-isecure/core/"}
                >
                  Documentation
                </Button>
              </Stack>
            </Box>

            <Box as={"section"}>
              <Box maxW={["3xl", "4xl", "5xl"]} mx={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <SimpleGrid
                    spacingX={10}
                    columns={[1, null, null, 2]}
                    spacingY={{ base: 8, md: 10 }}
                  >
                    <Feature title={"Secure"} icon={<FcPrivacy />}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat laudantium incidunt, iure sint suscipit
                      recusandae ab, magnam, inventore quo quos asperiores
                      pariatur amet rerum provident officia temporibus odit
                      consequuntur assumenda.
                    </Feature>

                    <Feature
                      title={"Open-Source"}
                      icon={
                        <svg
                          width="64"
                          height="52"
                          viewBox={"0 0 256 248"}
                          preserveAspectRatio={"xMidYMid"}
                          xmlns={"http://www.w3.org/2000/svg"}
                        >
                          <path
                            d="m143.337088 167.832012c22.062705-8.4727 33.081721-33.231426 24.61169-55.301084-8.470031-22.0692176-33.221398-33.0917056-55.283663-24.6194462-22.0627054 8.4727002-33.0812802 33.2318672-24.6116899 55.3010842 4.3458314 11.324408 13.2912909 20.272246 24.6116899 24.619446l-28.8235728 75.129046c-63.5417556-24.395982-95.2813494-95.700125-70.8926128-159.2619049 24.3887367-63.5617798 95.6699756-95.3113759 159.2117316-70.9149535s95.281349 95.7001244 70.892613 159.2619044c-12.516241 32.620094-38.282796 58.394768-70.892613 70.914954z"
                            fill="#3da639"
                          />
                          <g fill="#1d531d">
                            <path d="m172.160661 247.368643c-.612021 0-1.22316-.12738-1.792881-.381257-1.067622-.475137-1.902155-1.355773-2.320744-2.44665l-28.823573-75.129486c-.871986-2.272551.262609-4.821457 2.534444-5.694159 9.57158-3.675485 17.139663-10.859848 21.309246-20.229491 4.170024-9.369203 4.442768-19.802397.768-29.376994-7.585267-19.7653727-29.83127-29.6727417-49.590857-22.084203-19.7587056 7.5880979-29.6629535 29.841553-22.0772461 49.606485 3.8919931 10.141852 11.9390291 18.190984 22.0772461 22.084203 2.271835.872702 3.40643 3.421608 2.534444 5.694159l-28.823573 75.129486c-.4185887 1.090877-1.2535629 1.971513-2.3211842 2.44665-1.0671807.47602-2.2797659.507754-3.3711807.088593-31.8303615-12.22091-56.9981136-36.109579-70.8666162-67.265914-13.8685026-31.155895-14.77794149-65.849757-2.56088125-97.6901495 12.21706025-31.8403924 36.09864375-57.0160757 67.24472285-70.8889488 31.1460795-13.87287301 65.8290125-14.7825985 97.6593735-2.56168824 31.830361 12.22091024 56.998114 36.10957894 70.866616 67.26591404 13.868503 31.1558945 14.778382 65.8497575 2.560881 97.6901495-12.943201 33.732128-39.706437 60.503797-73.427497 73.450637-.508916.195697-1.044268.292664-1.57874.292664zm-44.20296-238.42741656c-16.432909 0-32.8305685 3.45554646-48.2932328 10.34283836-28.9958555 12.9151049-51.2281997 36.3524369-62.601914 65.9947666-11.37371427 29.6418886-10.52684336 61.9402296 2.3841928 90.9456636 12.3122341 27.659357 34.188117 49.165726 61.8885508 60.968357l25.7114772-67.01909c-10.553281-5.234888-18.8501485-14.290271-23.1069747-25.381517-9.3270361-24.302982 2.850809-51.6652681 27.1461347-60.9952435 24.296647-9.330857 51.648991 2.8517073 60.976468 27.1542485 4.518113 11.773099 4.182802 24.601375-.944689 36.121479-4.524723 10.167857-12.305184 18.242993-22.160523 23.106322l25.708833 67.011156c29.465115-12.591147 52.751422-36.694465 64.273625-66.723781 11.373714-29.641889 10.527284-61.940229-2.384193-90.9452225-12.911036-29.0054338-36.340984-51.245225-65.973535-62.6220828-13.83105-5.3102581-28.241074-7.95789426-42.62422-7.95789426z" />
                            <path d="m237.741318 229.574755c-1.596997 1.633293-2.395484 3.57053-2.395484 5.811771 0 2.322905.812097 4.296437 2.436316 5.920656 1.615145 1.624218 3.565993 2.436315 5.852602 2.436315 2.277536 0 4.223847-.816634 5.838992-2.449926 1.615145-1.642367 2.422705-3.611362 2.422705-5.907045 0-2.232167-.803023-4.169404-2.409094-5.811771-1.624219-1.669588-3.575067-2.504369-5.852603-2.504369-2.304757 0-4.269215.834781-5.893434 2.504369zm12.916557 13.011833c-1.950877 1.88736-4.291895 2.831026-7.023123 2.831026-2.821966 0-5.199279-.96635-7.132008-2.89908-1.93273-1.932729-2.89908-4.310042-2.89908-7.132008 0-2.930853 1.043477-5.367145 3.130462-7.308948 1.959951-1.814769 4.260137-2.722141 6.900626-2.722141 2.767524 0 5.131226.979961 7.091177 2.939912s2.939912 4.323653 2.939912 7.091177c0 2.849188-1.002646 5.249184-3.007966 7.200062zm-6.111206-10.548295c-.399249-.154256-.961819-.231382-1.687727-.231382h-.707756v3.225736h1.129688c.680539 0 1.211351-.136105 1.592452-.408321.381102-.272215.57165-.71229.57165-1.320238s-.299433-1.029875-.898307-1.265795zm-5.308174 8.928621v-11.119945c.689613 0 1.721747.002269 3.096435.006806s2.139148.011342 2.293404.020416c.880163.063517 1.610597.254065 2.191323.571649.989049.544431 1.483567 1.429118 1.483567 2.654088 0 .934606-.26087 1.610597-.782616 2.027994s-1.163711.666924-1.925914.748589c.698686.145182 1.224961.358414 1.578841.639703.653317.526283.979971 1.356528.979971 2.490759v.993581c0 .108886.006805.217771.020416.326657s.038563.217771.074859.326657l.095275.313046h-2.776584c-.090738-.35388-.149717-.866545-.176939-1.53801-.027221-.671464-.086201-1.12515-.176939-1.36107-.145182-.390175-.417393-.662387-.816642-.816642-.217773-.090738-.548963-.149718-.993582-.176939l-.639703-.040832h-.612481v3.933493z" />
                          </g>
                        </svg>
                      }
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquid facere quod provident rem quibusdam saepe fugit
                      dolorem illo dolore voluptatem minus repellat maiores,
                      quis vel, debitis, adipisci veritatis vitae delectus.
                    </Feature>

                    <Feature icon={<FcSettings />} title={"Configurable"}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus adipisci aliquid quo similique provident
                      consequatur, vero ab et? Exercitationem quibusdam
                      praesentium voluptatem explicabo officiis laudantium?
                      Sint, itaque dicta! Obcaecati, harum.
                    </Feature>

                    <Feature
                      icon={<FcMultipleDevices />}
                      title={"Beautiful UI"}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam facere, laborum consectetur maxime iusto recusandae
                      deleniti quasi quod aliquam quia ducimus, placeat eos
                      ratione. Magnam corrupti itaque optio culpa quod.
                    </Feature>
                  </SimpleGrid>
                </Flex>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Footer />
      </Flex>
    </>
  );
};

export default Page;
