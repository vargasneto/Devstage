import { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center bg-gray-500 text-blue font-semibold w-full h-12 px-5 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-600 "
      {...props}
    />
  )
}
