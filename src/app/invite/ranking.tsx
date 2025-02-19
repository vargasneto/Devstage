import Image from 'next/image'
import cooper from '../../assets/Medal-cooper.svg'
import gold from '../../assets/Medal-gold.svg'
import silver from '../../assets/Medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className=" relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Pedro Vargas
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute top-0 right-8"
            src={gold}
            alt="Medal Gold"
          />
        </div>

        <div className=" relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Malevola
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            874
          </span>

          <Image
            className="absolute top-0 right-8"
            src={silver}
            alt="Medal Silver"
          />
        </div>

        <div className=" relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            {' '}
            <span className="font-semibold">3º</span> | Benas
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            825
          </span>

          <Image
            className="absolute top-0 right-8"
            src={cooper}
            alt="Medal Cooper"
          />
        </div>
      </div>
    </div>
  )
}
