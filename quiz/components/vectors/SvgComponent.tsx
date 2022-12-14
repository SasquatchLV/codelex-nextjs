import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
    const { type } = props

    if (type === 'dashboard') return (
        <svg
            width={19}
            height={19}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.375 18.875H2.208a2.09 2.09 0 0 1-2.083-2.083V2.208A2.09 2.09 0 0 1 2.208.125h4.167a2.09 2.09 0 0 1 2.083 2.083v14.584a2.09 2.09 0 0 1-2.083 2.083Zm6.25 0h4.167a2.09 2.09 0 0 0 2.083-2.083v-5.209A2.09 2.09 0 0 0 16.792 9.5h-4.167a2.09 2.09 0 0 0-2.083 2.083v5.209a2.09 2.09 0 0 0 2.083 2.083Zm6.25-13.542V2.208A2.09 2.09 0 0 0 16.792.125h-4.167a2.09 2.09 0 0 0-2.083 2.083v3.125a2.09 2.09 0 0 0 2.083 2.084h4.167a2.09 2.09 0 0 0 2.083-2.084Z"
            />
        </svg>
    )

    if (type === 'notification') return (
        <svg
            width={21}
            height={21}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.417 20.917c-.691-.003-1.353-.223-1.843-.613s-.768-.918-.775-1.47h5.209c.003.278-.064.554-.195.812a2.25 2.25 0 0 1-.753.795c-.326.214-.71.363-1.123.434h-.06c-.152.025-.306.04-.46.042Zm10.416-3.125H0v-2.084l2.604-1.041v-5.73c-.068-1.47.346-2.927 1.203-4.229a5.403 5.403 0 0 1 1.687-1.52c.69-.406 1.48-.69 2.319-.834V.084h5.208v2.27c3.358.64 5.208 2.977 5.208 6.584v5.729l2.604 1.041v2.084Z"
            />
        </svg>
    )

    if (type === 'support') return (
        <svg
            width={21}
            height={21}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.5.083C4.756.083.083 4.756.083 10.5v4.316c0 1.066.935 1.934 2.084 1.934h1.042a1.041 1.041 0 0 0 1.041-1.042v-5.357A1.042 1.042 0 0 0 3.208 9.31h-.945C2.842 5.28 6.31 2.167 10.5 2.167c4.19 0 7.659 3.111 8.238 7.142h-.946a1.042 1.042 0 0 0-1.042 1.042v6.399a2.085 2.085 0 0 1-2.083 2.083h-2.083v-1.041H8.417v3.125h6.25a4.17 4.17 0 0 0 4.167-4.167c1.149 0 2.083-.868 2.083-1.934V10.5C20.917 4.756 16.244.083 10.5.083Z"
            />
        </svg>
    )
    
    if (type === 'logout') return (
        <svg
            width={17}
            height={21}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.208.083h14.584a1.042 1.042 0 0 1 1.041 1.042v18.75a1.042 1.042 0 0 1-1.041 1.042H1.207a1.041 1.041 0 0 1-1.041-1.042V1.125A1.042 1.042 0 0 1 1.208.083Zm4.167 9.375V6.333L.167 10.5l5.208 4.167v-3.125h6.25V9.458h-6.25Z"
            />
        </svg>
    )

    return null
}

export default SvgComponent
