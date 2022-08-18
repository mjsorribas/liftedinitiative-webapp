import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Sitemap() {
    return (
       <Stack mr={6} ml={6} align={'flex-start'}>
        <Link href={'#'}>About Lifted Initiative</Link>
        <Link href={'#'}>About the protocol</Link>
        <Link href={'#'}>Documentation for developers</Link>
        <Link href={'#'}>Code of Conduct</Link>
      </Stack>
    )
}