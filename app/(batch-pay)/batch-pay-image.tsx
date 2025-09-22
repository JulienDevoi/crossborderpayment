import Image from 'next/image'
import BatchPayBg from '@/public/images/onboarding-image.jpg'

export default function BatchPayImage() {
  return (
    <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
      <Image className="object-cover object-center w-full h-full" src={BatchPayBg} priority width={760} height={1024} alt="Batch Pay" />
    </div>
  )
}
