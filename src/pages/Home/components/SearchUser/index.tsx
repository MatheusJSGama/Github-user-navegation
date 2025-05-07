import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';

const userSearchSchema = z.object({
    userName: z.string().min(1, {message: "Campo vazio"})
})

type searchUserInputs = z.infer<typeof userSearchSchema>

export function SearchUser() {
    const {fetchUserData} = useContext(UserContext)

    const {register, handleSubmit, formState:{ isSubmitting, errors } } = useForm<searchUserInputs>({
        resolver: zodResolver(userSearchSchema)
    })

    function handleUserSearch(data: searchUserInputs){
        fetchUserData(data);
        console.log(data);
        
    }

    return (
        <form onSubmit={handleSubmit(handleUserSearch)} className='w-full max-w-[54rem] flex gap-2 -mt-10'>
            <input
                className='w-full bg-base-input border-base-border border border-solid py-3 px-4 rounded-md'
                type='text'
                placeholder='Busque por um usuário' 
                {
                    ...register("userName")
                }
            />
                <button type='submit' className=" bg-base-input py-3 px-4 rounded-md hover:bg-blue hover:text-white cursor-pointer duration-300">
                    Buscar
                </button>
        </form>
    )
}