import Image from 'next/image'

export default function UserEntry() {
    return (
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
                        <td><div>
                            Nombre
                            <button>
                            <Image
                                src={"/assets/images/user-icons/pencil-icon.png"}
                                alt="Icono de editar para plantilla de usuario"
                                width={10}
                                height={10}
                            />
                            </button>
                            </div>
                        </td>
                        <td>
                            <div>
                            Registro
                            <button>
                                <Image
                                src={"/assets/images/user-icons/eye-icon.png"}
                                alt="Icono de editar para plantilla de usuario"
                                width={10}
                                height={10}
                            />
                            </button>
                                </div>
                        </td>
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
    )
}


