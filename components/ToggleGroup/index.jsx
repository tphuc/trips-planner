import React from 'react';
import { styled } from 'stitches.config';
import {  blackA, mauve, violet } from '@radix-ui/colors';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor:"$mauve1",
  borderRadius: 4,
//   boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$mauve1',
  color: mauve.mauve11,
  height:"$6",
  padding:"0 $3",
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
 
  alignItems: 'center',
  justifyContent: 'center',
//   marginLeft: 1,
//   '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
//   '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover': { backgroundColor: mauve.mauve2 },
  '&[data-state=on]': { backgroundColor: mauve.mauve3, color: mauve.mauve12,  borderRadius:'$3',},
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px #aaa` },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;

// // Your app...
// const ToggleGroupDemo = () => (
//   <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
//     <ToggleGroupItem value="left" aria-label="Left aligned">
//       <TextAlignLeftIcon />
//     </ToggleGroupItem>
//     <ToggleGroupItem value="center" aria-label="Center aligned">
//       <TextAlignCenterIcon />
//     </ToggleGroupItem>
//     <ToggleGroupItem value="right" aria-label="Right aligned">
//       <TextAlignRightIcon />
//     </ToggleGroupItem>
//   </ToggleGroup>
// );

// export default ToggleGroupDemo;