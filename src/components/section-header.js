import { isAssetError } from 'next/dist/client/route-loader';
import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

// reuse part at key-feature and so on.
export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as='p'
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as='h2'
        sx={{
          variant: 'section.title',
          color: isWhite ? 'white' : 'heading',
        }}
      >{title}</Heading>
    </Box>
  );
}
