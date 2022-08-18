import {
    Box,
    Stack,
    Link
} from '@chakra-ui/react';

export default function TermsAndConditions() {
    return (
        <Stack align={{md:'flex-end',sm:'center'}} spacing={6}>
            <Box fontSize={'sm'}>
                <Link href={'#'} ml={3} >Terms</Link>
                <Link href={'#'} ml={3}>Protocol</Link>
                <Link href={'#'} ml={3}>Cookies</Link>
            </Box>
        </Stack>
    )
}