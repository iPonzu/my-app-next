import { Metadata } from "next";
import Link from "next/link";
import _quadroProjectWarehouse from "../../../public/components/_quadroProjectWarehouse";
import _quadroProjectNativeStore from "../../../public/components/_quadroProjectNativeStore";
import _quadroProjectNextApp from "../../../public/components/_quadroProjectNextApp";
import _footer from "../../../public/components/_footer";

export const metadata: Metadata = {
    title: "Projetos",
}

export default function ProjectsPage(){
    return(
        <nav className="h-screen">
            <Link
                className="relative px-4 mt-8 w-48 border rounded-full hover:bg-gray-500 hover:text-white hover:transition-shadow hover:shadow-lg"
                href='/'
                >
                    Voltar
                </Link>
                <div className="flex justify-center mt-16">
                    <span className="absolute -p-1.5">
                        Conheça um pouco mais sobre meus projetos pessoais. Acesse meu Github para ver mais repositórios.
                    </span>
                </div>
                <div className="flex p-[45px] w-[50rem] items-start">
                    <_quadroProjectWarehouse />
                <h3 className="text-sm font-sans p-2 w-80">
                    O Warehouse-Maganement é um projeto de gerenciamento de estoque desenvolvido em C# com .NET WinForms, onde é possível adicionar, remover e editar produtos.
                    Utilizando arquitetura Model-View-Controller (MVC), mySQL para banco de dados e Entity Framework para mapeamento objeto-relacional.
                </h3>
            </div>
            <div className="flex p-[5px] ml-[55rem] items-start">
                <_quadroProjectNativeStore />
                <h3 className="relative text-sm font-sans p-1 w-9/12">
                    O NativeStore é um projeto de e-commerce desenvolvido em React-Native, onde apresentam produtos de uma loja de pizzas.
                    Utilizando o expo como ferramenta auxiliar no desenvolvimento, Firebase para autenticação via email e senha com recuperação de senha via email.
                </h3>
            </div>
            <div className="flex p-[45px] w-[50rem] items-start">
                <_quadroProjectNextApp />
                <h3 className="text-sm mb-5 font-sans p-1 w-80">
                    O NextApp é um projeto utilizado como portifólio, desenvolvido em NextJS com TailwindCSS, onde apresento meus projetos e minhas habilidades
                </h3>
            </div>
            <_footer />
        </nav>
    )
}
