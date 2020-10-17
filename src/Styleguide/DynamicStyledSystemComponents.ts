import React from 'react';
import styled from 'styled-components';
import * as F from 'styled-system';

export type StyledSystemProps = 
  | F.SpaceProps
  | F.FontSizeProps
  | F.FontStyleProps
  | F.SizeProps
  | F.TextStyleProps
  | F.LetterSpacingProps
  | F.FontFamilyProps
  | F.FontWeightProps
  | F.BorderRadiusProps
  | F.LineHeightProps
  | F.TextAlignProps
  | { color: string; as?: keyof JSX.IntrinsicElements | React.ComponentType<any> }
  
export default styled.div`
  ${F.space}
  ${F.fontSize}
  ${F.size}
  ${F.color}
  ${F.textStyle}
  ${F.letterSpacing}
  ${F.fontFamily}
  ${F.fontWeight}
  ${F.borderRadius}
  ${F.lineHeight}
  ${F.textAlign}
`;