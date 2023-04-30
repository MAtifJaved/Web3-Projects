"use client"
import { Box,HStack, Icon, Text, StackProps } from '@chakra-ui/react'
import React from 'react'
import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscriptionIcon } from '@/icons/icons'


interface featurProps extends StackProps {
    icon:React.ElementType;
}

function Feature(props: featurProps) {
    const {icon, children, ...rest} = props;
  return (
    <HStack {...rest} spacing="6">
        <Icon as={icon} boxSize="12"/>
        <Text textAlign = "left" fontSize ="lg" fontWeight={'bold'}>
          {children}
        </Text>
   </HStack>
  )
}


export function Features(){
 return (
  <Box maxWidth="1024px" margin= "auto" pt="60px" pb="8" as='section'>
    <HStack px= "12" spacing={5}>
      <Feature icon={MoneyBackGuaranteeIcon}>
        30 days money back Guarantee
      </Feature>
      <Feature icon={HassleFreeIcon}>
        No setup fees
        100% hassle-free
      </Feature>
      <Feature icon={MonthlySubscriptionIcon}>
        No monthly subscription
        Pay once and for all
      </Feature>
    </HStack>
  </Box>
 )
}