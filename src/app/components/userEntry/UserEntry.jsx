import Image from 'next/image'

export default function UserEntry() {
    return (

        <tr className='text-center h-[6rem] border-b-2 border-pink-800'>
            <td>
                <div className='flex justify-center'>
                    <Image
                        src={"/assets/images/kero-icon.svg"}
                        alt="Icono de Kero para plantilla de usuario"
                        width={15}
                        height={15}
                        className='lg:w-[3rem]'
                    />
                </div>
            </td>
            <td className="w-[6rem] lg:w-[8rem]">
                09/08/23
            </td>
            <td className="textwrap w-[6rem] pl-2 lg:w-[10rem] ">
                Nombre
            </td>
            <td>
                <button className=''>
                    <Image
                        src={"/assets/images/user-icons/pencil-icon.svg"}
                        alt="Icono de editar para plantilla de usuario"
                        width={15}
                        height={15}
                        className='lg:w-[2.5rem]'
                    />
                </button>
            </td>
            <td className="textwrap w-[5.6rem] pl-2 lg:w-[10rem] ">
                Burbujas Laberinto Salto
            </td>
            <td>
                <button>
                    <Image
                        src={"/assets/images/user-icons/eye-icon.svg"}
                        alt="Icono de editar para plantilla de usuario"
                        width={15}
                        height={15}
                        className='lg:w-[2.5rem]'
                    />
                </button>
            </td>
            <td>
                <button>
                    <Image
                        src={"/assets/images/user-icons/trash-icon.svg"}
                        alt="Icono borrador para plantilla de usuario"
                        width={15}
                        height={15}
                        className='lg:w-[2.5rem]'
                    />
                </button>
            </td>
        </tr>
    )
}


