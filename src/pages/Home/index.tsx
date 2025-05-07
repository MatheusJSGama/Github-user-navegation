import { CardUserInfo } from './components/CardUserInfo';
import { SearchUser } from './components/SearchUser';
import { CardRepo } from './components/CardrRepo';


export function Home() {

    return (
        <div className='flex flex-col items-center w-full max-w-[55rem] p-4'>
            <SearchUser />
            <CardUserInfo />
            <div className='w-full flex justify-between flex-wrap'>
                <CardRepo />
                <CardRepo />
            </div>
        </div>
    )
}