import { TextConstants } from '../../../shared/constants'
import Text from './Text'

type InfoRowProps = {
  title: string
  titleColor?: string
  info: string
  infoColor?: string
}
export default function InfoRow({
  title,
  titleColor,
  info,
  infoColor = 'text-spaceTextInfo',
}: InfoRowProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <Text text={title} capitalize={true} size={TextConstants.large} />
      <Text
        text={info ? info : 'Unknown'}
        capitalize={true}
        color={infoColor}
        size={TextConstants.small}
      />
    </div>
  )
}
