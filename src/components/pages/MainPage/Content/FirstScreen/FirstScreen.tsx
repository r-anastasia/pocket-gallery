// local libs
import { PictureFrame } from 'src/components/generic'
import {
  FirstScreenContainer,
  FirstScreenBackground,
  FirstScreenTitle,
  FirstScreenPictureBlock,
  PictureInfoBlock,
  PictureInfo,
  PictureTitle,
  FirstScreenText,
} from './styles'
// types

export const FirstScreen = () => {
  return (
    <FirstScreenContainer>
      <FirstScreenBackground />
      <FirstScreenTitle>Your &nbsp; inspiration</FirstScreenTitle>
      <FirstScreenPictureBlock>
        <PictureInfoBlock>
          <PictureInfo>Sandro Botticelli</PictureInfo>
          <PictureTitle>Primavera</PictureTitle>
          <PictureInfo>1482</PictureInfo>
        </PictureInfoBlock>
        <PictureFrame
          backgroundImage="images/Sandro_Botticelli_Primavera_1482.jpeg"
          variant="arched"
          size="l"
          withDecorativeElement
        />
      </FirstScreenPictureBlock>
      <FirstScreenText>
        in the masterpieces of the Renaissance masters
      </FirstScreenText>
    </FirstScreenContainer>
  )
}
