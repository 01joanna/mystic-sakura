import React from 'react'
import Image from 'next/image'

function UserEntries() {
    return (
    <table className="text-yellowColor">
        <tr>
            <th></th>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Lectura</th>
            <th></th>
        </tr>
        <tr>
            <td>
                <Image
                src={"/assets/images/user-icons/kero-face.png"}
                alt="Icono de Kero para plantilla de usuario"
                width={10}
                height={10}

                />
            </td>
            <td>Fecha</td>
            <td>Nombre</td>
            <td>Registro</td>
            <td>
                <button>
                    <Image
                    src={"/assets/images/user-icons/trash-icon.png"}
                    alt="Icono borrador para plantilla de usuario"
                    width={10}
                    height={10}
                    />
                </button>
            </td>
        </tr>
    </table>
    )
}

export default UserEntries
