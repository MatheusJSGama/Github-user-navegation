// import { useForm } from 'react-hook-form'
// import * as Zod from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'


export function SearchPublication() {
    return (
        <div className='w-full max-w-[54rem] flex flex-col items-center gap-3 mt-18 mb-12'>
            <div className='flex justify-between w-full'>
                <span className="text-base-subtitle text-title-S">Publicações</span>
                <span className="text-base-span text-S">6 publicações</span>
            </div>
            <form className='w-full'>
                <input
                    className='w-full bg-base-input border-base-border border border-solid py-3 px-4 rounded-md'
                    type='text'
                    id='search-user'
                    placeholder='Buscar conteúdo' />
            </form>
        </div>
    )
}