import {useAppSelector} from "../hooks/redux.ts";
import {useActions} from "../hooks/actions.ts";

const FavouritesPage = () => {

    const {favourites} = useAppSelector(state => state.github)
    const {
        removeFavourite
    } = useActions()

    if (favourites.length === 0) return <p className={'mt-[50px] text-center'}> No items.</p>


    return (
        <div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>
            <ul className={'list-none'}>
                {favourites.map(item => (
                    <li key={item} className={'flex justify-between gap-[40px] items-center mt-2'}>
                        <a href={item} target={'_blank'}>{item}</a>
                        <button className={'py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'}
                                onClick={() => {
                                    removeFavourite(item)
                                }}
                        >Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesPage;