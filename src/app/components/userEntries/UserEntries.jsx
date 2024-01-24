import UserEntry from "../userEntry/UserEntry";

export default function UserEntries() {
    return (
        <div className="w-[33rem] lg:w-[62rem]">
            <table className=" w-full table-auto border-collapse">
                <thead className="font-showcard text-xl lg:text-2xl text-yellowColor h-7 lg:h-9">
                    <tr>
                        <th></th>
                        <th>Fecha</th>
                        <th colSpan="2">Usuario</th>
                        <th colSpan="2" className="w-[8rem]">Lectura</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="font-jost text-sm lg:text-xl text-white divide-y divide-pink-800">
                    <UserEntry />
                    <UserEntry />
                </tbody>
            </table>
        </div>
    )
}


