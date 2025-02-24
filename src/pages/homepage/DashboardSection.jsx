import { ReactTable } from "../../components/ReactTable";
import UserProfile from "../../components/UserProfile";
import { CloseIcon } from "@chakra-ui/icons";
import {
    Button,
    Image,
    Text,
    Flex,
    Box,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    Input,
    Heading,
} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

const chatSummaryList = [
    {
        userImage: "images/img_avatar.png",
        userName: "David Pinnacle",
        userMessage:
            "The new tax regulations for real estate investments are now live. Let's review how this impacts our projects.",
        notificationBadge: "12",
    },
    {
        userImage: "images/img_avatar_40x40.png",
        userName: "Augustina Midgett",
        userMessage: "The ROI for the commercial property project is exceeding expectations. Great work, everyone!",
        notificationBadge: "03",
    },
    {
        userImage: "images/img_avatar_1.png",
        userName: "Michael Greenfield",
        userMessage:
            "Can someone confirm the latest figures for the downtown property acquisition? We need them for the investor meeting tomorrow.",
        notificationBadge: "12",
    },
    {
        userImage: "images/img_avatar_2.png",
        userName: "Tyra Dhillon",
        userMessage:
            "We've received the budget approval for Q4. Let's schedule a meeting to discuss allocation and priorities.",
        notificationBadge: "05",
    },
];
const tableData = [
    {
        rowunitNumber: "Apartment 101",
        rowdueDate: "2025-05-05",
        rowtableheader: "Pending",
        view: "View",
    },
    {
        rowunitNumber: "Office 606",
        rowdueDate: "2025-05-03",
        rowtableheader: "In Progress",
    },
    {
        rowunitNumber: "Cabin 808",
        rowdueDate: "2025-05-03",
        rowtableheader: "Pending",
        view: "View",
    },
    {
        rowunitNumber: "Cabin 808",
        rowdueDate: "2025-05-03",
        rowtableheader: "Pending",
        view: "View",
    },
];

export default function DashboardSection() {
    const [searchBarValue2, setSearchBarValue2] = React.useState("");
    const [searchBarValue3, setSearchBarValue3] = React.useState("");
    const tableColumns = React.useMemo(() => {
        const tableColumnHelper = createColumnHelper();
        return [
            tableColumnHelper.accessor("rowunitNumber", {
                cell: (info) => (
                    <Flex px="16px">
                        <Text alignSelf="flex-end">{info.getValue()}</Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex>
                        <Flex w="100%" px={{ base: "20px", sm: "24px" }} py="12px">
                            <Text textTransform="uppercase" fontSize="12px" fontWeight={500}>
                                Unit Number
                            </Text>
                        </Flex>
                    </Flex>
                ),
                meta: { width: "152px" },
            }),
            tableColumnHelper.accessor("rowdueDate", {
                cell: (info) => (
                    <Flex px={{ base: "20px", sm: "24px" }}>
                        <Text>{info.getValue()}</Text>
                    </Flex>
                ),
                header: (info) => (
                    <Flex>
                        <Flex w="100%" px={{ base: "20px", sm: "24px" }} py="12px">
                            <Text textTransform="uppercase" fontSize="12px" fontWeight={500}>
                                Due Date
                            </Text>
                        </Flex>
                    </Flex>
                ),
                meta: { width: "152px" },
            }),
            tableColumnHelper.accessor("rowtableheader", {
                cell: (info) => (
                    <Flex gap="12px" justifyContent="center" alignItems="center">
                        <Flex flex={1} px={{ base: "20px", sm: "24px" }} py="16px">
                            <Text
                                color="gray.900"
                                fontSize="12px"
                                fontWeight={500}
                                bg="gray.100"
                                justifyContent="center"
                                display="flex"
                                alignItems="center"
                                px="10px"
                                py="2px"
                                borderRadius="10px"
                            >
                                {info.getValue()}
                            </Text>
                        </Flex>
                        <Flex borderColor="gray.200" borderWidth="1px" borderStyle="solid" bg="white.a700" borderRadius="8px">
                            <Text color="blue_gray.900" fontSize="12px" fontWeight={500}>
                                {info.row.original.view}
                            </Text>
                        </Flex>
                    </Flex>
                ),
                header: (info) => (
                    <Flex flex={1}>
                        <Text
                            pl="24px"
                            pr="34px"
                            textTransform="uppercase"
                            fontSize="12px"
                            fontWeight={500}
                            bg="gray.100"
                            py="12px"
                            px={{ base: "20px", sm: 0 }}
                        >
                            Status
                        </Text>
                        <Box h="44px" borderColor="gray.200" borderBottomWidth="1px" borderStyle="solid" bg="gray.100" w="34%" />
                    </Flex>
                ),
                meta: { width: "234px" },
            }),
        ];
    }, []);

    return (
        <>
            {/* dashboard section */}
            <Flex gap="20px" px={{ base: "20px", sm: "32px" }} flexDirection={{ md: "row", base: "column" }}>
                <Box w="100%">
                    <Flex
                        gap="28px"
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.a700"
                        flexDirection="column"
                        p={{ base: "20px", sm: "24px" }}
                        borderRadius="8px"
                    >
                        <Flex gap="24px" alignItems="flex-start" flexDirection={{ base: "column", sm: "row" }}>
                            <Flex w="100%" alignItems="center">
                                <Heading as="h6" fontSize="18px" alignSelf="flex-end">
                                    Unread Messages
                                </Heading>
                            </Flex>
                            <Flex w="100%" size="xs" p="2px 4px">
                                <InputGroup >
                                    <InputLeftElement>
                                        <Image src="images/img_search_gray_600_01.svg" alt="Search" h="16px" w="16px" fit="contain" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Search"
                                        value={searchBarValue3}
                                        onChange={(e) => setSearchBarValue3(e.target.value)}
                                        color="gray.600_01"
                                        fontWeight={500}
                                        gap="10px"
                                        alignSelf="center"
                                        borderColor="gray.200"
                                        borderWidth="1px"
                                        borderRadius="8px"
                                    />
                                    <InputRightElement>
                                        {searchBarValue3?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue3("")} /> : null}
                                    </InputRightElement>
                                </InputGroup>
                            </Flex>
                        </Flex>
                        <Flex gap="12px" flexDirection="column">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {chatSummaryList.map((d, index) => (
                                    <UserProfile {...d} key={"listdavid" + index} bg="white.a700" />
                                ))}
                            </Suspense>
                        </Flex>
                        <Button
                            size="lg"
                            rightIcon={
                                <Image
                                    src="images/img_linksquare02_blue_gray_700_02.svg"
                                    alt="link-square-02"
                                    h="16px"
                                    mb="2px"
                                    w="16px"
                                    fit="contain"
                                />
                            }
                            fontWeight={500}
                            gap="16px"
                            borderColor="gray.200"
                            borderWidth="1px"
                            borderStyle="solid"
                            alignSelf="stretch"
                            borderRadius="8px"
                        >
                            Go to Messages
                        </Button>
                    </Flex>
                </Box>
                <Flex
                    gap="24px"
                    borderColor="gray.200"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="white.a700"
                    w="100%"
                    flexDirection="column"
                    borderRadius="8px"
                    justifyContent="space-between"
                >
                    <Flex
                        gap="24px"
                        alignItems="flex-end"
                        px={{ base: "20px", sm: "24px" }}
                        flexDirection={{ base: "column", sm: "row" }}
                    >
                        <Flex mt="24px" gap="6px" w="100%" flexDirection="column" alignItems="flex-start" justifyContent="center">
                            <Heading as="h6" fontSize="18px">
                                Pending Requests
                            </Heading>
                            <Text color="gray.600_01">Maintenance pending requests.</Text>
                        </Flex>
                        <Flex w="100%" mb="10px" size="xs">
                            <InputGroup>
                                <InputLeftElement>
                                    <Image src="images/img_search_gray_600_01.svg" alt="Search" h="16px" w="16px" fit="contain" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Search"
                                    value={searchBarValue2}
                                    onChange={(e) => setSearchBarValue2(e.target.value)}
                                    color="gray.600_01"
                                    fontWeight={500}
                                    gap="10px"
                                    borderColor="gray.200"
                                    borderWidth="1px"
                                    borderRadius="8px"
                                />
                                <InputRightElement>
                                    {searchBarValue2?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue2("")} /> : null}
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                    </Flex>
                    <ReactTable
                        size="sm"
                        headerCellProps={{ bg: "gray.100" }}
                        tableProps={{}}
                        columns={tableColumns}
                        data={tableData}
                    />
                    <Button
                        size="lg"
                        rightIcon={
                            <Image
                                src="images/img_linksquare02_blue_gray_700_02.svg"
                                alt="Link-square-02"
                                h="16px"
                                mb="2px"
                                w="16px"
                                fit="contain"
                            />
                        }
                        mb="24px"
                        fontWeight={500}
                        gap="10px"
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        alignSelf="stretch"
                        mx={{ md: "24px", base: "0px" }}
                        borderRadius="8px"
                    >
                        Explore All Maintenance Requests
                    </Button>
                </Flex>
            </Flex>
        </>
    );
}