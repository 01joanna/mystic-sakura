import UserEntry from "../userEntry/UserEntry";

export default function UserEntries() {
    return (
        <div>
            <table className="text-yellowColor">
                <thead>
                    <tr>
                        <th> </th>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Lectura</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <UserEntry />
                </tbody>
            </table>
        </div>
    )
}


