// import { ComponentProps } from "react"

import { useEffect, useRef, useState } from "react"

// let url = 'https://www.google.com'

// function convertCurrency(amount: number, currency: string): string {
//     return 'a'
// }
// convertCurrency(100, 'test')

//=============================================================
//type pass styling
// type Color = "red" | "blue" | "green" | "yellow" | "purple"

// type ButtonProps = {
//     backgroundColor: Color
//     fontColor: Color
//     fontSize: number
//     pillShape?: boolean
//     padding: [number, number, number, number]
// }
//=============================================================
//type pass component attributes
// type ButtonProps = {
//     style: React.CSSProperties,
//     onClick: (test: string) => number,
//     children: React.ReactNode
//     // children: JSX.Element
//     setCount: React.Dispatch<React.SetStateAction<number>>
// }


// export default function Button({ style, children, setCount }: ButtonProps) {
//     return (
//         <button style={style}>{children}</button>
//     )
// }

//=============================================================


// interface
// Handle in Object
// =================================
// interface ButtonProps {
//     text: string
//     count: number
// }

// export default function Button() {
//     return <button>Click Me!</button>
// }


// Passing html Attribute as ComponentProps 
//================================================================

//with interface
// interface ButtonProps {React.ComponentPropsWithoutRef<"button">}

// interface SuperButtonProps extends ButtonProps {
//     variant?: "primary" | "secondary"
// }

// with type
// type ButtonProps = React.ComponentPropsWithoutRef<"button">

// type SuperButtonProps = ButtonProps & {
//     variant?: "primary" | "secondary"
// }

// export default function Button({ type, autoFocus, variant, ...rest }: ButtonProps) {
//     return <button type={type} autoFocus={autoFocus} {...rest}>Click Me!</button>
// }


//Eventhandling
// export default function Button() {
//     const handleClick = 
//     (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log('clicked!')

//     return <button onClick={handleClick}>Click Me!</button>
// }


//Usestate Typing
// type User = {
//     name: string
//     age: number
// }
// export default function Button() {
//     const [count, setCount] = useState<number>(0)
//     const [text, setText] = useState("Click")
//     const [isPrimary, setIsPrimary] = useState(true)
//     //typescript assign based on initial value except for object

//     const [user, setUser] = useState<User | null>(null)
//     const name = user?.name

//     return <button >Click Me!</button>
// }

//useEffect Typing
// export default function Button(){
//     const ref = useRef<HTMLButtonElement>(null)

//     return <button ref={ref}></button>
// }

//as const for spesific
// const buttonTextOptions = [
//     "Click me!",
//     "Click me again!",
//     "Click me one more time!",
// ] as const

// export default function Button() {
//     return <button>
//         {buttonTextOptions.map(option => {
//             return option
//         })}
//     </button>
// }

//Omit
//remove something from another type
// type User = {
//     sessionId: string
//     name: string
// }

// type Guest = Omit<User, "name">

// export default function Button(){
//     return <button>Click Me</button>
// }

//Generic Basic
// const convertToArray = <T,>(value: T) : T[] => {
//     return [value]
// }

// function convertToArray<T>(value: T): T[]{
//     return [value]
// }

// convertToArray(5)
// convertToArray("Hello")

// export default function Button() {
//     return <button></button>
// }

//Generic
// type ButtonProps<T> = {
//     countValue: T
//     countHistory: T[]
// }

// export default function Button<T>({
//     countValue,
//     countHistory }: ButtonProps<T>) {
//     return <button></button>
// }

//Import Type
// import { type Color } from "../lib/types"

// type ButtonProps = {
//     color: Color
// }

// export default function Button() {
//     return <button>Click me!</button>
// }

//Unknown Type
// export default function Button() {
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then((res) => res.json())
//             .then((data: unknown) => {
//                 //zod
//                 // const todo = todoSchema.parse(data)
//             })
//     }, [])
//     return <button>Click me!</button>
// }
