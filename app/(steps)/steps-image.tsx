import Image from 'next/image'
import StepsBg from '@/public/images/onboarding-image.jpg'

export default function StepsImage() {
  return (
    <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
      <Image className="object-cover object-center w-full h-full" src={StepsBg} priority width={760} height={1024} alt="Steps" />
    </div>
  )
}
