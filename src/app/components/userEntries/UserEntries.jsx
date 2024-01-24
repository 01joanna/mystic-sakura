import UserEntry from "../userEntry/UserEntry";

export default function UserEntries() {
    return (
        <div className="flex justify-center w-[33rem] border-2 border-blue-600">
            <table className=" w-full">
                <thead className="font-showcard text-xl text-yellowColor">
                    <tr>
                        <th> </th>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Lectura</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody className="font-jost text-sm text-white">
                    <UserEntry />
                </tbody>
            </table>
        </div>
    )
}


