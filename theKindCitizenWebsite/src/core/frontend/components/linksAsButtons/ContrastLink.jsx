import Link from "next/link";

const ContrastLink = ({label, href = '', isRed }) => {
    const buttonColor = isRed ? 'customRed' : 'customYellow';
    const textColor = isRed ? 'white' : 'gray-700'
    return(
        <Link href={href}
              className={`text-${textColor} bg-${buttonColor} hover:bg-${buttonColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-4 py-2 rounded-full text-sm font-medium`}>
            {label}
        </Link>
    )
};

export default ContrastLink;