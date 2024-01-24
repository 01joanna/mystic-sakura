import Image from 'next/image'
// import './styles.module.css'

export default function UserEntry() {
    return (
                    <tr className='text-center'>
                        <td>
                            <Image
                                src={"/assets/images/user-icons/kero-face.png"}
                                alt="Icono de Kero para plantilla de usuario"
                                width={15}
                                height={15}


                            />
                        </td>
                        <td className='text-center'>
                            <p>
                            09/08/23
                            </p>
                        </td>
                        <td className='grow text-center border-2 border-blue-600 h-full'>
                            <p className='w-3/5'>
                                Nombre
                            </p>
                            <button className='w-2/5 ml-2'>
                            <Image
                                src={"/assets/images/user-icons/pencil-icon.png"}
                                alt="Icono de editar para plantilla de usuario"
                                width={15}
                                height={15}
                            />
                            </button>
                        </td>
                        <td className='grow text-center h-full'>
                            <p className='w-3/5'>
                                Burbujas/Laberinto/Salto
                            </p>
                            <button className='w-2/5 ml-2'>
                                <Image
                                src={"/assets/images/user-icons/eye-icon.png"}
                                alt="Icono de editar para plantilla de usuario"
                                width={15}
                                height={15}
                            />
                            </button>
                            
                        </td>
                        <td className='text-center'>
                            <button>
                                <Image
                                    src={"/assets/images/user-icons/trash-icon.png"}
                                    alt="Icono borrador para plantilla de usuario"
                                    width={15}
                                    height={15}
                                />
                            </button>
                        </td>
                    </tr>
    )
}


