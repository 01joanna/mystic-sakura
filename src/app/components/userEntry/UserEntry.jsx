import Image from 'next/image'

export default function UserEntry() {
    return (
                    <tr className='border-2 border-b-pink-700 h-[6rem] text-center'>
                        <td>
                            <Image
                                src={"/assets/images/user-icons/kero-face.png"}
                                alt="Icono de Kero para plantilla de usuario"
                                width={10}
                                height={10}


                            />
                        </td>
                        <td className='text-center'>
                            <p>
                            09/08/23
                            </p>
                        </td>
                        <td className='text-center border-2 h-full'>
                            <p className='w-3/5'>
                                Nombre
                            </p>
                            <button className='w-2/5'>
                            <Image
                                src={"/assets/images/user-icons/pencil-icon.png"}
                                alt="Icono de editar para plantilla de usuario"
                                width={10}
                                height={10}
                            />
                            </button>
                        </td>
                        <td className='text-center border-2 h-full'>
                            <p  className='w-3/5'>
                                 Registro
                            </p>
                            <button className='w-2/5'>
                                <Image
                                src={"/assets/images/user-icons/eye-icon.png"}
                                alt="Icono de editar para plantilla de usuario"
                                width={10}
                                height={10}
                            />
                            </button>
                            
                        </td>
                        <td className='text-center'>
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
    )
}


