import { TFeatureHighlight } from '@/constants'
import {
  ActivityIcon,
  CodeIcon,
  CubeIcon,
  CurrencyDollarIcon,
  GaugeIcon,
  LightningIcon,
  LockKeyIcon,
  ShieldCheckIcon,
} from '@phosphor-icons/react/dist/ssr'
import { FC } from 'react'

const ICON_MAP: Record<TFeatureHighlight['iconName'], React.ReactNode> = {
  currency: <CurrencyDollarIcon size={28} weight='fill' />,
  lightning: <LightningIcon size={28} weight='fill' />,
  shield: <ShieldCheckIcon size={28} weight='fill' />,
  lock: <LockKeyIcon size={28} weight='fill' />,
  gauge: <GaugeIcon size={28} weight='fill' />,
  cube: <CubeIcon size={28} weight='fill' />,
  code: <CodeIcon size={28} weight='fill' />,
  activity: <ActivityIcon size={28} weight='fill' />,
}

const ICON_COLOR: Record<TFeatureHighlight['iconName'], string> = {
  currency: 'text-emerald-400',
  lightning: 'text-yellow-400',
  shield: 'text-violet-400',
  lock: 'text-pink-400',
  gauge: 'text-cyan-400',
  cube: 'text-blue-400',
  code: 'text-orange-400',
  activity: 'text-red-400',
}

type TFeatureHighlightProps = TFeatureHighlight

const FeatureHighlight: FC<TFeatureHighlightProps> = ({
  iconName,
  title,
  description,
  tags,
}) => {
  return (
    <div className='group rounded-4 relative flex flex-col gap-3 border border-violet-700/40 bg-violet-950/20 p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/60 hover:bg-violet-900/20'>
      {/* Icon */}
      <div className={`${ICON_COLOR[iconName]} w-fit`}>
        {ICON_MAP[iconName]}
      </div>

      {/* Title */}
      <h3 className='text-16 font-semibold text-white'>{title}</h3>

      {/* Description */}
      <p className='text-14 leading-relaxed text-white/60'>{description}</p>

      {/* Tags */}
      <div className='mt-auto flex flex-wrap gap-2 pt-2'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='rounded-full border border-violet-700/50 bg-violet-900/30 px-2 py-0.5 text-[11px] font-medium text-violet-300'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FeatureHighlight
