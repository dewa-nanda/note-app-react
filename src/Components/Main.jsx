import ListNote from "./note/ListNote"
import data from "../utils/data"


const Main = () => {
    return (
        <div>
            <h1>Selamat Datang!!</h1>
            <ListNote datas={data} />
        </div>
    )
}

export default Main