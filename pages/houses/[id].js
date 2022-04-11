import { Stack } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from '../components/navbar'
import PropertyDetails from '../components/property_details'
import PropertyImages from '../components/property_images'
import { createClient } from '@supabase/supabase-js'
const id = ({data}) => {
  
  return (
    <Stack spacing={5}>
        <WithSubnavigation/>
        <PropertyImages data={data}/>
        <PropertyDetails data={data}/>
    </Stack>
  )
}

export default id

export async function getServerSideProps(context){
    const id=context.params.id;
     const supabase = createClient(
       "https://qvthtxoqqpjllkcfwmar.supabase.co",
       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
     );


    const { data, error } = await supabase.from('add_properties').select('*').match({'property_id':id}).single();
    console.log("data:-> ",data);
    return{
        props:{
            data:data,
        }
    }
}