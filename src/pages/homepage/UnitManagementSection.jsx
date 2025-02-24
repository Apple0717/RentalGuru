import { SelectBox } from "../../components";
import { DatePicker } from "../../components/DatePicker";
import PropertyDetails from "../../components/PropertyDetails";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, InputLeftElement, InputGroup, InputRightElement, Input, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";

const propertyListings = [
    {
        mainImage: "images/img_rectangle_3.png",
        price: "$546,999",
        bedroomCount: "4",
        bedroomLabel: "Bedroom",
        bathroomCount: "2",
        bathroomLabel: "Bathroom",
        distance: "800m",
        livingAreaLabel: "Living area",
        address: "E1 Street Springfield, IL 62704 USA",
        viewButtonText: "View",
    },
    {
        mainImage: "images/img_rectangle_3_176x222.png",
        price: "$546,999",
        bedroomCount: "4",
        bedroomLabel: "Bedroom",
        bathroomCount: "2",
        bathroomLabel: "Bathroom",
        distance: "800m",
        livingAreaLabel: "Living area",
        address: "E1 Street Springfield, IL 62704 USA",
        viewButtonText: "View",
    },
    {
        mainImage: "images/img_rectangle_3_1.png",
        price: "$546,999",
        bedroomCount: "4",
        bedroomLabel: "Bedroom",
        bathroomCount: "2",
        bathroomLabel: "Bathroom",
        distance: "800m",
        livingAreaLabel: "Living area",
        address: "E1 Street Springfield, IL 62704 USA",
        viewButtonText: "View",
    },
    {
        mainImage: "images/img_rectangle_3_2.png",
        price: "$546,999",
        bedroomCount: "4",
        bedroomLabel: "Bedroom",
        bathroomCount: "2",
        bathroomLabel: "Bathroom",
        distance: "800m",
        livingAreaLabel: "Living area",
        address: "El Street Springfield, IL 62704 USA",
        viewButtonText: "View",
    },
];
const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function UnitManagementSection() {
    const [searchBarValue1, setSearchBarValue1] = React.useState("");

    return (
        <>
            {/* unit management section */}
            <Box px={{ base: "20px", sm: "32px" }}>
                <Flex
                    gap="24px"
                    borderColor="gray.200"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="white.a700"
                    flexDirection="column"
                    p={{ base: "20px", sm: "24px" }}
                    borderRadius="8px"
                >
                    <Flex gap="16px" flexDirection={{ md: "row", base: "column" }}>
                        <Flex
                            flex={1}
                            justifyContent="space-between"
                            alignItems="center"
                            gap="20px"
                            alignSelf={{ md: "auto", base: "stretch" }}
                        >
                            <Heading as="h6" fontSize="18px" alignSelf="flex-end">
                                Unit Management
                            </Heading>
                            <SelectBox
                                shape="round"
                                indicator={<Image src="images/img_arrowdown_gray_600_01.svg" alt="Arrow Down" w="12px" h="14px" />}
                                name="input_one"
                                placeholder={"Sunrise Appartements"}
                                options={dropDownOptions}
                                style={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    gap: "10px",
                                    borderColor: "gray.200",
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    w: "34%",
                                }}
                            />
                        </Flex>
                        <Flex w={{ md: "24%", base: "100%" }} size="xs">
                            <InputGroup >
                                <InputLeftElement>
                                    <Image src="images/img_search_gray_600_01.svg" alt="Search" h="14px" w="16px" fit="contain" />
                                </InputLeftElement>
                                <Input
                                    placeholder={"Search"}
                                    value={searchBarValue1}
                                    onChange={(e) => setSearchBarValue1(e.target.value)}
                                    color="gray.600_01"
                                    fontWeight={500}
                                    gap="10px"
                                    borderColor="gray.200"
                                    borderWidth="1px"
                                    borderRadius="8px"
                                />
                                <InputRightElement>
                                    {searchBarValue1?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue1("")} /> : null}
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                        <Box
                            color="blue_gray.700_02"
                            fontSize="14px"
                            fontWeight={500}
                            gap="10px"
                            display="flex"
                            borderColor="gray.200"
                            borderWidth="1px"
                            borderStyle="solid"
                            bg="white.a700"
                            w={{ md: "16%", base: "100%" }}
                            px="14px"
                            py="8px"
                            borderRadius="8px"
                        >
                            <DatePicker name="input_three" placeholder="Explore All Units" />
                        </Box>
                    </Flex>
                    <Flex gap="12px" flexDirection={{ md: "row", base: "column" }}>
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {propertyListings.map((d, index) => (
                                <PropertyDetails {...d} key={"container" + index} />
                            ))}
                        </Suspense>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}