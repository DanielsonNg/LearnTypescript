
let url = 'https://www.google.com'

function convertCurrency(amount: number, currency: string): string {
    return 'a'
}
convertCurrency(100, 'test')

// type Color = "red" | "blue" | "green" | "yellow" | "purple"

// type ButtonProps = {
//     backgroundColor: Color
//     fontColor: Color
//     fontSize: number
//     pillShape?: boolean
//     padding: [number, number, number, number]
// }

type ButtonProps = {
    style: {
        backgroundColor: string,
        fontSize: number,
        fontColor: string
    }
}

export default function Button({ style }: ButtonProps) {
    return (
        <button style={style}>Click Me</button>
    )
}